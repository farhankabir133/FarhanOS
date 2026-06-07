(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var cf={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function iy(){if(Wg)return Io;Wg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Io.Fragment=t,Io.jsx=i,Io.jsxs=i,Io}var qg;function ay(){return qg||(qg=1,cf.exports=iy()),cf.exports}var d=ay(),uf={exports:{}},St={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function sy(){if(Yg)return St;Yg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,S={};function b(N,X,k){this.props=N,this.context=X,this.refs=S,this.updater=k||A}b.prototype.isReactComponent={},b.prototype.setState=function(N,X){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,X,"setState")},b.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function w(){}w.prototype=b.prototype;function z(N,X,k){this.props=N,this.context=X,this.refs=S,this.updater=k||A}var D=z.prototype=new w;D.constructor=z,U(D,b.prototype),D.isPureReactComponent=!0;var G=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function I(N,X,k){var _e=k.ref;return{$$typeof:r,type:N,key:X,ref:_e!==void 0?_e:null,props:k}}function W(N,X){return I(N.type,X,N.props)}function j(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function Z(N){var X={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(k){return X[k]})}var me=/\/+/g;function ve(N,X){return typeof N=="object"&&N!==null&&N.key!=null?Z(""+N.key):X.toString(36)}function q(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(O,O):(N.status="pending",N.then(function(X){N.status==="pending"&&(N.status="fulfilled",N.value=X)},function(X){N.status==="pending"&&(N.status="rejected",N.reason=X)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,X,k,_e,we){var J=typeof N;(J==="undefined"||J==="boolean")&&(N=null);var Te=!1;if(N===null)Te=!0;else switch(J){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(N.$$typeof){case r:case t:Te=!0;break;case y:return Te=N._init,P(Te(N._payload),X,k,_e,we)}}if(Te)return we=we(N),Te=_e===""?"."+ve(N,0):_e,G(we)?(k="",Te!=null&&(k=Te.replace(me,"$&/")+"/"),P(we,X,k,"",function(at){return at})):we!=null&&(j(we)&&(we=W(we,k+(we.key==null||N&&N.key===we.key?"":(""+we.key).replace(me,"$&/")+"/")+Te)),X.push(we)),1;Te=0;var Ne=_e===""?".":_e+":";if(G(N))for(var We=0;We<N.length;We++)_e=N[We],J=Ne+ve(_e,We),Te+=P(_e,X,k,J,we);else if(We=M(N),typeof We=="function")for(N=We.call(N),We=0;!(_e=N.next()).done;)_e=_e.value,J=Ne+ve(_e,We++),Te+=P(_e,X,k,J,we);else if(J==="object"){if(typeof N.then=="function")return P(q(N),X,k,_e,we);throw X=String(N),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Te}function H(N,X,k){if(N==null)return N;var _e=[],we=0;return P(N,_e,"","",function(J){return X.call(k,J,we++)}),_e}function ne(N){if(N._status===-1){var X=N._result;X=X(),X.then(function(k){(N._status===0||N._status===-1)&&(N._status=1,N._result=k)},function(k){(N._status===0||N._status===-1)&&(N._status=2,N._result=k)}),N._status===-1&&(N._status=0,N._result=X)}if(N._status===1)return N._result.default;throw N._result}var Se=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ae={map:H,forEach:function(N,X,k){H(N,function(){X.apply(this,arguments)},k)},count:function(N){var X=0;return H(N,function(){X++}),X},toArray:function(N){return H(N,function(X){return X})||[]},only:function(N){if(!j(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return St.Activity=_,St.Children=ae,St.Component=b,St.Fragment=i,St.Profiler=l,St.PureComponent=z,St.StrictMode=s,St.Suspense=g,St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,St.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},St.cache=function(N){return function(){return N.apply(null,arguments)}},St.cacheSignal=function(){return null},St.cloneElement=function(N,X,k){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var _e=U({},N.props),we=N.key;if(X!=null)for(J in X.key!==void 0&&(we=""+X.key),X)!T.call(X,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&X.ref===void 0||(_e[J]=X[J]);var J=arguments.length-2;if(J===1)_e.children=k;else if(1<J){for(var Te=Array(J),Ne=0;Ne<J;Ne++)Te[Ne]=arguments[Ne+2];_e.children=Te}return I(N.type,we,_e)},St.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},St.createElement=function(N,X,k){var _e,we={},J=null;if(X!=null)for(_e in X.key!==void 0&&(J=""+X.key),X)T.call(X,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(we[_e]=X[_e]);var Te=arguments.length-2;if(Te===1)we.children=k;else if(1<Te){for(var Ne=Array(Te),We=0;We<Te;We++)Ne[We]=arguments[We+2];we.children=Ne}if(N&&N.defaultProps)for(_e in Te=N.defaultProps,Te)we[_e]===void 0&&(we[_e]=Te[_e]);return I(N,J,we)},St.createRef=function(){return{current:null}},St.forwardRef=function(N){return{$$typeof:m,render:N}},St.isValidElement=j,St.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:ne}},St.memo=function(N,X){return{$$typeof:p,type:N,compare:X===void 0?null:X}},St.startTransition=function(N){var X=F.T,k={};F.T=k;try{var _e=N(),we=F.S;we!==null&&we(k,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(O,Se)}catch(J){Se(J)}finally{X!==null&&k.types!==null&&(X.types=k.types),F.T=X}},St.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},St.use=function(N){return F.H.use(N)},St.useActionState=function(N,X,k){return F.H.useActionState(N,X,k)},St.useCallback=function(N,X){return F.H.useCallback(N,X)},St.useContext=function(N){return F.H.useContext(N)},St.useDebugValue=function(){},St.useDeferredValue=function(N,X){return F.H.useDeferredValue(N,X)},St.useEffect=function(N,X){return F.H.useEffect(N,X)},St.useEffectEvent=function(N){return F.H.useEffectEvent(N)},St.useId=function(){return F.H.useId()},St.useImperativeHandle=function(N,X,k){return F.H.useImperativeHandle(N,X,k)},St.useInsertionEffect=function(N,X){return F.H.useInsertionEffect(N,X)},St.useLayoutEffect=function(N,X){return F.H.useLayoutEffect(N,X)},St.useMemo=function(N,X){return F.H.useMemo(N,X)},St.useOptimistic=function(N,X){return F.H.useOptimistic(N,X)},St.useReducer=function(N,X,k){return F.H.useReducer(N,X,k)},St.useRef=function(N){return F.H.useRef(N)},St.useState=function(N){return F.H.useState(N)},St.useSyncExternalStore=function(N,X,k){return F.H.useSyncExternalStore(N,X,k)},St.useTransition=function(){return F.H.useTransition()},St.version="19.2.7",St}var Zg;function Yh(){return Zg||(Zg=1,uf.exports=sy()),uf.exports}var Oe=Yh(),df={exports:{}},Fo={},ff={exports:{}},hf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function ry(){return Kg||(Kg=1,(function(r){function t(P,H){var ne=P.length;P.push(H);e:for(;0<ne;){var Se=ne-1>>>1,ae=P[Se];if(0<l(ae,H))P[Se]=H,P[ne]=ae,ne=Se;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var H=P[0],ne=P.pop();if(ne!==H){P[0]=ne;e:for(var Se=0,ae=P.length,N=ae>>>1;Se<N;){var X=2*(Se+1)-1,k=P[X],_e=X+1,we=P[_e];if(0>l(k,ne))_e<ae&&0>l(we,k)?(P[Se]=we,P[_e]=ne,Se=_e):(P[Se]=k,P[X]=ne,Se=X);else if(_e<ae&&0>l(we,ne))P[Se]=we,P[_e]=ne,Se=_e;else break e}}return H}function l(P,H){var ne=P.sortIndex-H.sortIndex;return ne!==0?ne:P.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],p=[],y=1,_=null,x=3,M=!1,A=!1,U=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=P)s(p),H.sortIndex=H.expirationTime,t(g,H);else break;H=i(p)}}function G(P){if(U=!1,D(P),!A)if(i(g)!==null)A=!0,O||(O=!0,Z());else{var H=i(p);H!==null&&q(G,H.startTime-P)}}var O=!1,F=-1,T=5,I=-1;function W(){return S?!0:!(r.unstable_now()-I<T)}function j(){if(S=!1,O){var P=r.unstable_now();I=P;var H=!0;try{e:{A=!1,U&&(U=!1,w(F),F=-1),M=!0;var ne=x;try{t:{for(D(P),_=i(g);_!==null&&!(_.expirationTime>P&&W());){var Se=_.callback;if(typeof Se=="function"){_.callback=null,x=_.priorityLevel;var ae=Se(_.expirationTime<=P);if(P=r.unstable_now(),typeof ae=="function"){_.callback=ae,D(P),H=!0;break t}_===i(g)&&s(g),D(P)}else s(g);_=i(g)}if(_!==null)H=!0;else{var N=i(p);N!==null&&q(G,N.startTime-P),H=!1}}break e}finally{_=null,x=ne,M=!1}H=void 0}}finally{H?Z():O=!1}}}var Z;if(typeof z=="function")Z=function(){z(j)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ve=me.port2;me.port1.onmessage=j,Z=function(){ve.postMessage(null)}}else Z=function(){b(j,0)};function q(P,H){F=b(function(){P(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var ne=x;x=H;try{return P()}finally{x=ne}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ne=x;x=P;try{return H()}finally{x=ne}},r.unstable_scheduleCallback=function(P,H,ne){var Se=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Se+ne:Se):ne=Se,P){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=ne+ae,P={id:y++,callback:H,priorityLevel:P,startTime:ne,expirationTime:ae,sortIndex:-1},ne>Se?(P.sortIndex=ne,t(p,P),i(g)===null&&P===i(p)&&(U?(w(F),F=-1):U=!0,q(G,ne-Se))):(P.sortIndex=ae,t(g,P),A||M||(A=!0,O||(O=!0,Z()))),P},r.unstable_shouldYield=W,r.unstable_wrapCallback=function(P){var H=x;return function(){var ne=x;x=H;try{return P.apply(this,arguments)}finally{x=ne}}}})(hf)),hf}var Qg;function oy(){return Qg||(Qg=1,ff.exports=ry()),ff.exports}var pf={exports:{}},Gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function ly(){if(Jg)return Gn;Jg=1;var r=Yh();function t(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,p,y){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:g,containerInfo:p,implementation:y}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Gn.createPortal=function(g,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(g,p,null,y)},Gn.flushSync=function(g){var p=h.T,y=s.p;try{if(h.T=null,s.p=2,g)return g()}finally{h.T=p,s.p=y,s.d.f()}},Gn.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(g,p))},Gn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Gn.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var y=p.as,_=m(y,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?s.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):y==="script"&&s.d.X(g,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Gn.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=m(p.as,p.crossOrigin);s.d.M(g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(g)},Gn.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,_=m(y,p.crossOrigin);s.d.L(g,y,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Gn.preloadModule=function(g,p){if(typeof g=="string")if(p){var y=m(p.as,p.crossOrigin);s.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(g)},Gn.requestFormReset=function(g){s.d.r(g)},Gn.unstable_batchedUpdates=function(g,p){return g(p)},Gn.useFormState=function(g,p,y){return h.H.useFormState(g,p,y)},Gn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Gn.version="19.2.7",Gn}var $g;function cy(){if($g)return pf.exports;$g=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),pf.exports=ly(),pf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex;function uy(){if(ex)return Fo;ex=1;var r=oy(),t=Yh(),i=cy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return g(u),e;if(f===o)return g(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,o=f;break}if(R===o){v=!0,o=u,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,o=u;break}if(R===o){v=!0,o=f,a=u;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),z=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var me=Symbol.for("react.client.reference");function ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===me?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case b:return"Profiler";case S:return"StrictMode";case G:return"Suspense";case O:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case z:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:ve(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return ve(e(n))}catch{}}return null}var q=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},Se=[],ae=-1;function N(e){return{current:e}}function X(e){0>ae||(e.current=Se[ae],Se[ae]=null,ae--)}function k(e,n){ae++,Se[ae]=e.current,e.current=n}var _e=N(null),we=N(null),J=N(null),Te=N(null);function Ne(e,n){switch(k(J,n),k(we,e),k(_e,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?mg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=mg(n),e=gg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(_e),k(_e,e)}function We(){X(_e),X(we),X(J)}function at(e){e.memoizedState!==null&&k(Te,e);var n=_e.current,a=gg(n,e.type);n!==a&&(k(we,e),k(_e,a))}function tt(e){we.current===e&&(X(_e),X(we)),Te.current===e&&(X(Te),Uo._currentValue=ne)}var mt,st;function ct(e){if(mt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);mt=n&&n[1]||"",st=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mt+e+st}var Rt=!1;function ut(e,n){if(!e||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var De=function(){throw Error()};if(Object.defineProperty(De.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(De,[])}catch(ye){var ge=ye}Reflect.construct(e,[],De)}else{try{De.call()}catch(ye){ge=ye}e.call(De.prototype)}}else{try{throw Error()}catch(ye){ge=ye}(De=e())&&typeof De.catch=="function"&&De.catch(function(){})}}catch(ye){if(ye&&ge&&typeof ye.stack=="string")return[ye.stack,ge.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var V=v.split(`
`),ce=R.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ce.length&&!ce[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===ce.length)for(o=V.length-1,u=ce.length-1;1<=o&&0<=u&&V[o]!==ce[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==ce[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==ce[u]){var Me=`
`+V[o].replace(" at new "," at ");return e.displayName&&Me.includes("<anonymous>")&&(Me=Me.replace("<anonymous>",e.displayName)),Me}while(1<=o&&0<=u);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ct(a):""}function Zt(e,n){switch(e.tag){case 26:case 27:case 5:return ct(e.type);case 16:return ct("Lazy");case 13:return e.child!==n&&n!==null?ct("Suspense Fallback"):ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return ut(e.type,!1);case 11:return ut(e.type.render,!1);case 1:return ut(e.type,!0);case 31:return ct("Activity");default:return""}}function Dt(e){try{var n="",a=null;do n+=Zt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ln=Object.prototype.hasOwnProperty,Q=r.unstable_scheduleCallback,Nt=r.unstable_cancelCallback,gt=r.unstable_shouldYield,jt=r.unstable_requestPaint,ke=r.unstable_now,Ct=r.unstable_getCurrentPriorityLevel,L=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,te=r.unstable_NormalPriority,Ee=r.unstable_LowPriority,Le=r.unstable_IdlePriority,Fe=r.log,je=r.unstable_setDisableYieldValue,be=null,se=null;function He(e){if(typeof Fe=="function"&&je(e),se&&typeof se.setStrictMode=="function")try{se.setStrictMode(be,e)}catch{}}var Ge=Math.clz32?Math.clz32:it,Be=Math.log,Pe=Math.LN2;function it(e){return e>>>=0,e===0?32:31-(Be(e)/Pe|0)|0}var rt=256,Mt=262144,Y=4194304;function he(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function de(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=he(o):(v&=R,v!==0?u=he(v):a||(a=R&~e,a!==0&&(u=he(a))))):(R=o&~f,R!==0?u=he(R):v!==0?u=he(v):a||(a=o&~e,a!==0&&(u=he(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ce(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ze(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Re(){var e=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),e}function Je(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ie(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $e(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,V=e.expirationTimes,ce=e.hiddenUpdates;for(a=v&~a;0<a;){var Me=31-Ge(a),De=1<<Me;R[Me]=0,V[Me]=-1;var ge=ce[Me];if(ge!==null)for(ce[Me]=null,Me=0;Me<ge.length;Me++){var ye=ge[Me];ye!==null&&(ye.lane&=-536870913)}a&=~De}o!==0&&bt(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function bt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ge(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Wt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ge(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function mn(e,n){var a=n&-n;return a=(a&42)!==0?1:ot(a),(a&(e.suspendedLanes|n))!==0?0:a}function ot(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ei(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Bg(e.type))}function bi(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var an=Math.random().toString(36).slice(2),cn="__reactFiber$"+an,sn="__reactProps$"+an,Oi="__reactContainer$"+an,Pi="__reactEvents$"+an,gs="__reactListeners$"+an,Rn="__reactHandles$"+an,xs="__reactResources$"+an,Ii="__reactMarker$"+an;function vs(e){delete e[cn],delete e[sn],delete e[Pi],delete e[gs],delete e[Rn]}function Zn(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Oi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Mg(e);e!==null;){if(a=e[cn])return a;e=Mg(e)}return n}e=a,a=e.parentNode}return null}function ti(e){if(e=e[cn]||e[Oi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function qi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Yi(e){var n=e[xs];return n||(n=e[xs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gn(e){e[Ii]=!0}var _s=new Set,C={};function $(e,n){pe(e,n),pe(e+"Capture",n)}function pe(e,n){for(C[e]=n,e=0;e<n.length;e++)_s.add(n[e])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oe={},Ye={};function Ve(e){return ln.call(Ye,e)?!0:ln.call(oe,e)?!1:re.test(e)?Ye[e]=!0:(oe[e]=!0,!1)}function B(e,n,a){if(Ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ue(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function xe(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Ue(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yt(e){if(!e._valueTracker){var n=qe(e)?"checked":"value";e._valueTracker=Ke(e,n,""+e[n])}}function fe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=qe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Qe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ht=/[\n"\\]/g;function pt(e){return e.replace(ht,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xe(e,n,a,o,u,f,v,R){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ue(n)):e.value!==""+Ue(n)&&(e.value=""+Ue(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?xt(e,v,Ue(n)):a!=null?xt(e,v,Ue(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Ue(R):e.removeAttribute("name")}function rn(e,n,a,o,u,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){yt(e);return}a=a!=null?""+Ue(a):"",n=n!=null?""+Ue(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),yt(e)}function xt(e,n,a){n==="number"&&Qe(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function un(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ue(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function In(e,n,a){if(n!=null&&(n=""+Ue(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ue(a):""}function Nn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(q(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ue(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),yt(e)}function Kn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ht=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ht.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ft(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&dn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&dn(e,f,n[f])}function Yt(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ia=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bs(e){return Ia.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ca(){}var su=null;function ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ks=null,Qs=null;function pp(e){var n=ti(e);if(n&&(e=n.stateNode)){var a=e[sn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Xe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[sn]||null;if(!u)throw Error(s(90));Xe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&fe(o)}break e;case"textarea":In(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&un(e,!!a.multiple,n,!1)}}}var ou=!1;function mp(e,n,a){if(ou)return e(n,a);ou=!0;try{var o=e(n);return o}finally{if(ou=!1,(Ks!==null||Qs!==null)&&(Wl(),Ks&&(n=Ks,e=Qs,Qs=Ks=null,pp(n),e)))for(n=0;n<e.length;n++)pp(e[n])}}function Zr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[sn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(ua)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{lu=!1}var Fa=null,cu=null,rl=null;function gp(){if(rl)return rl;var e,n=cu,a=n.length,o,u="value"in Fa?Fa.value:Fa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return rl=u.slice(e,1<o?1-o:void 0)}function ol(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function xp(){return!1}function ni(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ll:xp,this.isPropagationStopped=xp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=ni(ys),Qr=_({},ys,{view:0,detail:0}),t_=ni(Qr),uu,du,Jr,ul=_({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(uu=e.screenX-Jr.screenX,du=e.screenY-Jr.screenY):du=uu=0,Jr=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:du}}),vp=ni(ul),n_=_({},ul,{dataTransfer:0}),i_=ni(n_),a_=_({},Qr,{relatedTarget:0}),fu=ni(a_),s_=_({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),r_=ni(s_),o_=_({},ys,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),l_=ni(o_),c_=_({},ys,{data:0}),_p=ni(c_),u_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=f_[e])?!!n[e]:!1}function hu(){return h_}var p_=_({},Qr,{key:function(e){if(e.key){var n=u_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?d_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m_=ni(p_),g_=_({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=ni(g_),x_=_({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),v_=ni(x_),__=_({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),b_=ni(__),y_=_({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),S_=ni(y_),M_=_({},ys,{newState:0,oldState:0}),E_=ni(M_),T_=[9,13,27,32],pu=ua&&"CompositionEvent"in window,$r=null;ua&&"documentMode"in document&&($r=document.documentMode);var A_=ua&&"TextEvent"in window&&!$r,yp=ua&&(!pu||$r&&8<$r&&11>=$r),Sp=" ",Mp=!1;function Ep(e,n){switch(e){case"keyup":return T_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Js=!1;function w_(e,n){switch(e){case"compositionend":return Tp(n);case"keypress":return n.which!==32?null:(Mp=!0,Sp);case"textInput":return e=n.data,e===Sp&&Mp?null:e;default:return null}}function C_(e,n){if(Js)return e==="compositionend"||!pu&&Ep(e,n)?(e=gp(),rl=cu=Fa=null,Js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return yp&&n.locale!=="ko"?null:n.data;default:return null}}var R_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!R_[e.type]:n==="textarea"}function wp(e,n,a,o){Ks?Qs?Qs.push(o):Qs=[o]:Ks=o,n=$l(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var eo=null,to=null;function N_(e){cg(e,0)}function dl(e){var n=qi(e);if(fe(n))return e}function Cp(e,n){if(e==="change")return n}var Rp=!1;if(ua){var mu;if(ua){var gu="oninput"in document;if(!gu){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),gu=typeof Np.oninput=="function"}mu=gu}else mu=!1;Rp=mu&&(!document.documentMode||9<document.documentMode)}function Dp(){eo&&(eo.detachEvent("onpropertychange",Lp),to=eo=null)}function Lp(e){if(e.propertyName==="value"&&dl(to)){var n=[];wp(n,to,e,ru(e)),mp(N_,n)}}function D_(e,n,a){e==="focusin"?(Dp(),eo=n,to=a,eo.attachEvent("onpropertychange",Lp)):e==="focusout"&&Dp()}function L_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(to)}function U_(e,n){if(e==="click")return dl(n)}function z_(e,n){if(e==="input"||e==="change")return dl(n)}function O_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var di=typeof Object.is=="function"?Object.is:O_;function no(e,n){if(di(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ln.call(n,u)||!di(e[u],n[u]))return!1}return!0}function Up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zp(e,n){var a=Up(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Up(a)}}function Op(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Op(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Pp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qe(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qe(e.document)}return n}function xu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var P_=ua&&"documentMode"in document&&11>=document.documentMode,$s=null,vu=null,io=null,_u=!1;function Ip(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_u||$s==null||$s!==Qe(o)||(o=$s,"selectionStart"in o&&xu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=$l(vu,"onSelect"),0<o.length&&(n=new cl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=$s)))}function Ss(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var er={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionrun:Ss("Transition","TransitionRun"),transitionstart:Ss("Transition","TransitionStart"),transitioncancel:Ss("Transition","TransitionCancel"),transitionend:Ss("Transition","TransitionEnd")},bu={},Fp={};ua&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Ms(e){if(bu[e])return bu[e];if(!er[e])return e;var n=er[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Fp)return bu[e]=n[a];return e}var Bp=Ms("animationend"),kp=Ms("animationiteration"),jp=Ms("animationstart"),I_=Ms("transitionrun"),F_=Ms("transitionstart"),B_=Ms("transitioncancel"),Hp=Ms("transitionend"),Gp=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function Fi(e,n){Gp.set(e,n),$(n,[e])}var fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yi=[],tr=0,Su=0;function hl(){for(var e=tr,n=Su=tr=0;n<e;){var a=yi[n];yi[n++]=null;var o=yi[n];yi[n++]=null;var u=yi[n];yi[n++]=null;var f=yi[n];if(yi[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&Vp(a,u,f)}}function pl(e,n,a,o){yi[tr++]=e,yi[tr++]=n,yi[tr++]=a,yi[tr++]=o,Su|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Mu(e,n,a,o){return pl(e,n,a,o),ml(e)}function Es(e,n){return pl(e,null,null,n),ml(e)}function Vp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ge(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function ml(e){if(50<Ao)throw Ao=0,Ld=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var nr={};function k_(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,n,a,o){return new k_(e,n,a,o)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,n){var a=e.alternate;return a===null?(a=fi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function gl(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")Eu(e)&&(v=1);else if(typeof e=="string")v=Xb(e,a,_e.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case I:return e=fi(31,a,n,u),e.elementType=I,e.lanes=f,e;case U:return Ts(a.children,u,f,n);case S:v=8,u|=24;break;case b:return e=fi(12,a,n,u|2),e.elementType=b,e.lanes=f,e;case G:return e=fi(13,a,n,u),e.elementType=G,e.lanes=f,e;case O:return e=fi(19,a,n,u),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:v=10;break e;case w:v=9;break e;case D:v=11;break e;case F:v=14;break e;case T:v=16,o=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=fi(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Ts(e,n,a,o){return e=fi(7,e,o,n),e.lanes=a,e}function Tu(e,n,a){return e=fi(6,e,null,n),e.lanes=a,e}function Wp(e){var n=fi(18,null,null,0);return n.stateNode=e,n}function Au(e,n,a){return n=fi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var qp=new WeakMap;function Si(e,n){if(typeof e=="object"&&e!==null){var a=qp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Dt(n)},qp.set(e,n),n)}return{value:e,source:n,stack:Dt(n)}}var ir=[],ar=0,xl=null,ao=0,Mi=[],Ei=0,Ba=null,Ki=1,Qi="";function fa(e,n){ir[ar++]=ao,ir[ar++]=xl,xl=e,ao=n}function Yp(e,n,a){Mi[Ei++]=Ki,Mi[Ei++]=Qi,Mi[Ei++]=Ba,Ba=e;var o=Ki;e=Qi;var u=32-Ge(o)-1;o&=~(1<<u),a+=1;var f=32-Ge(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Ki=1<<32-Ge(n)+u|a<<u|o,Qi=f+e}else Ki=1<<f|a<<u|o,Qi=e}function wu(e){e.return!==null&&(fa(e,1),Yp(e,1,0))}function Cu(e){for(;e===xl;)xl=ir[--ar],ir[ar]=null,ao=ir[--ar],ir[ar]=null;for(;e===Ba;)Ba=Mi[--Ei],Mi[Ei]=null,Qi=Mi[--Ei],Mi[Ei]=null,Ki=Mi[--Ei],Mi[Ei]=null}function Zp(e,n){Mi[Ei++]=Ki,Mi[Ei++]=Qi,Mi[Ei++]=Ba,Ki=n.id,Qi=n.overflow,Ba=e}var Fn=null,fn=null,Pt=!1,ka=null,Ti=!1,Ru=Error(s(519));function ja(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw so(Si(n,e)),Ru}function Kp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[sn]=o,a){case"dialog":Ut("cancel",n),Ut("close",n);break;case"iframe":case"object":case"embed":Ut("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)Ut(Co[a],n);break;case"source":Ut("error",n);break;case"img":case"image":case"link":Ut("error",n),Ut("load",n);break;case"details":Ut("toggle",n);break;case"input":Ut("invalid",n),rn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ut("invalid",n);break;case"textarea":Ut("invalid",n),Nn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||hg(n.textContent,a)?(o.popover!=null&&(Ut("beforetoggle",n),Ut("toggle",n)),o.onScroll!=null&&Ut("scroll",n),o.onScrollEnd!=null&&Ut("scrollend",n),o.onClick!=null&&(n.onclick=ca),n=!0):n=!1,n||ja(e,!0)}function Qp(e){for(Fn=e.return;Fn;)switch(Fn.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Fn=Fn.return}}function sr(e){if(e!==Fn)return!1;if(!Pt)return Qp(e),Pt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||qd(e.type,e.memoizedProps)),a=!a),a&&fn&&ja(e),Qp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));fn=Sg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));fn=Sg(e)}else n===27?(n=fn,ts(e.type)?(e=Jd,Jd=null,fn=e):fn=n):fn=Fn?wi(e.stateNode.nextSibling):null;return!0}function As(){fn=Fn=null,Pt=!1}function Nu(){var e=ka;return e!==null&&(ri===null?ri=e:ri.push.apply(ri,e),ka=null),e}function so(e){ka===null?ka=[e]:ka.push(e)}var Du=N(null),ws=null,ha=null;function Ha(e,n,a){k(Du,n._currentValue),n._currentValue=a}function pa(e){e._currentValue=Du.current,X(Du)}function Lu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Uu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var V=0;V<n.length;V++)if(R.context===n[V]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Lu(f.return,a,e),o||(v=null);break e}f=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Lu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function rr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=u.type;di(u.pendingProps.value,v.value)||(e!==null?e.push(R):e=[R])}}else if(u===Te.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Uo):e=[Uo])}u=u.return}e!==null&&Uu(n,e,a,o),n.flags|=262144}function vl(e){for(e=e.firstContext;e!==null;){if(!di(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cs(e){ws=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Bn(e){return Jp(ws,e)}function _l(e,n){return ws===null&&Cs(e),Jp(e,n)}function Jp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ha===null){if(e===null)throw Error(s(308));ha=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ha=ha.next=n;return a}var j_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},H_=r.unstable_scheduleCallback,G_=r.unstable_NormalPriority,Mn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new j_,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&H_(G_,function(){e.controller.abort()})}var oo=null,Ou=0,or=0,lr=null;function V_(e,n){if(oo===null){var a=oo=[];Ou=0,or=Fd(),lr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ou++,n.then($p,$p),n}function $p(){if(--Ou===0&&oo!==null){lr!==null&&(lr.status="fulfilled");var e=oo;oo=null,or=0,lr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function X_(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var em=P.S;P.S=function(e,n){I0=ke(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&V_(e,n),em!==null&&em(e,n)};var Rs=N(null);function Pu(){var e=Rs.current;return e!==null?e:on.pooledCache}function bl(e,n){n===null?k(Rs,Rs.current):k(Rs,n.pool)}function tm(){var e=Pu();return e===null?null:{parent:Mn._currentValue,pool:e}}var cr=Error(s(460)),Iu=Error(s(474)),yl=Error(s(542)),Sl={then:function(){}};function nm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function im(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ca,ca),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,sm(e),e;default:if(typeof n.status=="string")n.then(ca,ca);else{if(e=on,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,sm(e),e}throw Ds=n,cr}}function Ns(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ds=a,cr):a}}var Ds=null;function am(){if(Ds===null)throw Error(s(459));var e=Ds;return Ds=null,e}function sm(e){if(e===cr||e===yl)throw Error(s(483))}var ur=null,lo=0;function Ml(e){var n=lo;return lo+=1,ur===null&&(ur=[]),im(ur,e,n)}function co(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function El(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function rm(e){function n(ee,K){if(e){var le=ee.deletions;le===null?(ee.deletions=[K],ee.flags|=16):le.push(K)}}function a(ee,K){if(!e)return null;for(;K!==null;)n(ee,K),K=K.sibling;return null}function o(ee){for(var K=new Map;ee!==null;)ee.key!==null?K.set(ee.key,ee):K.set(ee.index,ee),ee=ee.sibling;return K}function u(ee,K){return ee=da(ee,K),ee.index=0,ee.sibling=null,ee}function f(ee,K,le){return ee.index=le,e?(le=ee.alternate,le!==null?(le=le.index,le<K?(ee.flags|=67108866,K):le):(ee.flags|=67108866,K)):(ee.flags|=1048576,K)}function v(ee){return e&&ee.alternate===null&&(ee.flags|=67108866),ee}function R(ee,K,le,Ae){return K===null||K.tag!==6?(K=Tu(le,ee.mode,Ae),K.return=ee,K):(K=u(K,le),K.return=ee,K)}function V(ee,K,le,Ae){var lt=le.type;return lt===U?Me(ee,K,le.props.children,Ae,le.key):K!==null&&(K.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===T&&Ns(lt)===K.type)?(K=u(K,le.props),co(K,le),K.return=ee,K):(K=gl(le.type,le.key,le.props,null,ee.mode,Ae),co(K,le),K.return=ee,K)}function ce(ee,K,le,Ae){return K===null||K.tag!==4||K.stateNode.containerInfo!==le.containerInfo||K.stateNode.implementation!==le.implementation?(K=Au(le,ee.mode,Ae),K.return=ee,K):(K=u(K,le.children||[]),K.return=ee,K)}function Me(ee,K,le,Ae,lt){return K===null||K.tag!==7?(K=Ts(le,ee.mode,Ae,lt),K.return=ee,K):(K=u(K,le),K.return=ee,K)}function De(ee,K,le){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=Tu(""+K,ee.mode,le),K.return=ee,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return le=gl(K.type,K.key,K.props,null,ee.mode,le),co(le,K),le.return=ee,le;case A:return K=Au(K,ee.mode,le),K.return=ee,K;case T:return K=Ns(K),De(ee,K,le)}if(q(K)||Z(K))return K=Ts(K,ee.mode,le,null),K.return=ee,K;if(typeof K.then=="function")return De(ee,Ml(K),le);if(K.$$typeof===z)return De(ee,_l(ee,K),le);El(ee,K)}return null}function ge(ee,K,le,Ae){var lt=K!==null?K.key:null;if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return lt!==null?null:R(ee,K,""+le,Ae);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case M:return le.key===lt?V(ee,K,le,Ae):null;case A:return le.key===lt?ce(ee,K,le,Ae):null;case T:return le=Ns(le),ge(ee,K,le,Ae)}if(q(le)||Z(le))return lt!==null?null:Me(ee,K,le,Ae,null);if(typeof le.then=="function")return ge(ee,K,Ml(le),Ae);if(le.$$typeof===z)return ge(ee,K,_l(ee,le),Ae);El(ee,le)}return null}function ye(ee,K,le,Ae,lt){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number"||typeof Ae=="bigint")return ee=ee.get(le)||null,R(K,ee,""+Ae,lt);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case M:return ee=ee.get(Ae.key===null?le:Ae.key)||null,V(K,ee,Ae,lt);case A:return ee=ee.get(Ae.key===null?le:Ae.key)||null,ce(K,ee,Ae,lt);case T:return Ae=Ns(Ae),ye(ee,K,le,Ae,lt)}if(q(Ae)||Z(Ae))return ee=ee.get(le)||null,Me(K,ee,Ae,lt,null);if(typeof Ae.then=="function")return ye(ee,K,le,Ml(Ae),lt);if(Ae.$$typeof===z)return ye(ee,K,le,_l(K,Ae),lt);El(K,Ae)}return null}function et(ee,K,le,Ae){for(var lt=null,Gt=null,nt=K,At=K=0,Ot=null;nt!==null&&At<le.length;At++){nt.index>At?(Ot=nt,nt=null):Ot=nt.sibling;var Vt=ge(ee,nt,le[At],Ae);if(Vt===null){nt===null&&(nt=Ot);break}e&&nt&&Vt.alternate===null&&n(ee,nt),K=f(Vt,K,At),Gt===null?lt=Vt:Gt.sibling=Vt,Gt=Vt,nt=Ot}if(At===le.length)return a(ee,nt),Pt&&fa(ee,At),lt;if(nt===null){for(;At<le.length;At++)nt=De(ee,le[At],Ae),nt!==null&&(K=f(nt,K,At),Gt===null?lt=nt:Gt.sibling=nt,Gt=nt);return Pt&&fa(ee,At),lt}for(nt=o(nt);At<le.length;At++)Ot=ye(nt,ee,At,le[At],Ae),Ot!==null&&(e&&Ot.alternate!==null&&nt.delete(Ot.key===null?At:Ot.key),K=f(Ot,K,At),Gt===null?lt=Ot:Gt.sibling=Ot,Gt=Ot);return e&&nt.forEach(function(rs){return n(ee,rs)}),Pt&&fa(ee,At),lt}function dt(ee,K,le,Ae){if(le==null)throw Error(s(151));for(var lt=null,Gt=null,nt=K,At=K=0,Ot=null,Vt=le.next();nt!==null&&!Vt.done;At++,Vt=le.next()){nt.index>At?(Ot=nt,nt=null):Ot=nt.sibling;var rs=ge(ee,nt,Vt.value,Ae);if(rs===null){nt===null&&(nt=Ot);break}e&&nt&&rs.alternate===null&&n(ee,nt),K=f(rs,K,At),Gt===null?lt=rs:Gt.sibling=rs,Gt=rs,nt=Ot}if(Vt.done)return a(ee,nt),Pt&&fa(ee,At),lt;if(nt===null){for(;!Vt.done;At++,Vt=le.next())Vt=De(ee,Vt.value,Ae),Vt!==null&&(K=f(Vt,K,At),Gt===null?lt=Vt:Gt.sibling=Vt,Gt=Vt);return Pt&&fa(ee,At),lt}for(nt=o(nt);!Vt.done;At++,Vt=le.next())Vt=ye(nt,ee,At,Vt.value,Ae),Vt!==null&&(e&&Vt.alternate!==null&&nt.delete(Vt.key===null?At:Vt.key),K=f(Vt,K,At),Gt===null?lt=Vt:Gt.sibling=Vt,Gt=Vt);return e&&nt.forEach(function(ny){return n(ee,ny)}),Pt&&fa(ee,At),lt}function tn(ee,K,le,Ae){if(typeof le=="object"&&le!==null&&le.type===U&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case M:e:{for(var lt=le.key;K!==null;){if(K.key===lt){if(lt=le.type,lt===U){if(K.tag===7){a(ee,K.sibling),Ae=u(K,le.props.children),Ae.return=ee,ee=Ae;break e}}else if(K.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===T&&Ns(lt)===K.type){a(ee,K.sibling),Ae=u(K,le.props),co(Ae,le),Ae.return=ee,ee=Ae;break e}a(ee,K);break}else n(ee,K);K=K.sibling}le.type===U?(Ae=Ts(le.props.children,ee.mode,Ae,le.key),Ae.return=ee,ee=Ae):(Ae=gl(le.type,le.key,le.props,null,ee.mode,Ae),co(Ae,le),Ae.return=ee,ee=Ae)}return v(ee);case A:e:{for(lt=le.key;K!==null;){if(K.key===lt)if(K.tag===4&&K.stateNode.containerInfo===le.containerInfo&&K.stateNode.implementation===le.implementation){a(ee,K.sibling),Ae=u(K,le.children||[]),Ae.return=ee,ee=Ae;break e}else{a(ee,K);break}else n(ee,K);K=K.sibling}Ae=Au(le,ee.mode,Ae),Ae.return=ee,ee=Ae}return v(ee);case T:return le=Ns(le),tn(ee,K,le,Ae)}if(q(le))return et(ee,K,le,Ae);if(Z(le)){if(lt=Z(le),typeof lt!="function")throw Error(s(150));return le=lt.call(le),dt(ee,K,le,Ae)}if(typeof le.then=="function")return tn(ee,K,Ml(le),Ae);if(le.$$typeof===z)return tn(ee,K,_l(ee,le),Ae);El(ee,le)}return typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint"?(le=""+le,K!==null&&K.tag===6?(a(ee,K.sibling),Ae=u(K,le),Ae.return=ee,ee=Ae):(a(ee,K),Ae=Tu(le,ee.mode,Ae),Ae.return=ee,ee=Ae),v(ee)):a(ee,K)}return function(ee,K,le,Ae){try{lo=0;var lt=tn(ee,K,le,Ae);return ur=null,lt}catch(nt){if(nt===cr||nt===yl)throw nt;var Gt=fi(29,nt,null,ee.mode);return Gt.lanes=Ae,Gt.return=ee,Gt}finally{}}}var Ls=rm(!0),om=rm(!1),Ga=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(qt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ml(e),Vp(e,null,a),n}return pl(e,o,n,a),ml(e)}function uo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Wt(e,a)}}function ku(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ju=!1;function fo(){if(ju){var e=lr;if(e!==null)throw e}}function ho(e,n,a,o){ju=!1;var u=e.updateQueue;Ga=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var V=R,ce=V.next;V.next=null,v===null?f=ce:v.next=ce,v=V;var Me=e.alternate;Me!==null&&(Me=Me.updateQueue,R=Me.lastBaseUpdate,R!==v&&(R===null?Me.firstBaseUpdate=ce:R.next=ce,Me.lastBaseUpdate=V))}if(f!==null){var De=u.baseState;v=0,Me=ce=V=null,R=f;do{var ge=R.lane&-536870913,ye=ge!==R.lane;if(ye?(zt&ge)===ge:(o&ge)===ge){ge!==0&&ge===or&&(ju=!0),Me!==null&&(Me=Me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var et=e,dt=R;ge=n;var tn=a;switch(dt.tag){case 1:if(et=dt.payload,typeof et=="function"){De=et.call(tn,De,ge);break e}De=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=dt.payload,ge=typeof et=="function"?et.call(tn,De,ge):et,ge==null)break e;De=_({},De,ge);break e;case 2:Ga=!0}}ge=R.callback,ge!==null&&(e.flags|=64,ye&&(e.flags|=8192),ye=u.callbacks,ye===null?u.callbacks=[ge]:ye.push(ge))}else ye={lane:ge,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Me===null?(ce=Me=ye,V=De):Me=Me.next=ye,v|=ge;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ye=R,R=ye.next,ye.next=null,u.lastBaseUpdate=ye,u.shared.pending=null}}while(!0);Me===null&&(V=De),u.baseState=V,u.firstBaseUpdate=ce,u.lastBaseUpdate=Me,f===null&&(u.shared.lanes=0),Ka|=v,e.lanes=v,e.memoizedState=De}}function lm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function cm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)lm(a[e],n)}var dr=N(null),Tl=N(0);function um(e,n){e=Ma,k(Tl,e),k(dr,n),Ma=e|n.baseLanes}function Hu(){k(Tl,Ma),k(dr,dr.current)}function Gu(){Ma=Tl.current,X(dr),X(Tl)}var hi=N(null),Ai=null;function Wa(e){var n=e.alternate;k(_n,_n.current&1),k(hi,e),Ai===null&&(n===null||dr.current!==null||n.memoizedState!==null)&&(Ai=e)}function Vu(e){k(_n,_n.current),k(hi,e),Ai===null&&(Ai=e)}function dm(e){e.tag===22?(k(_n,_n.current),k(hi,e),Ai===null&&(Ai=e)):qa()}function qa(){k(_n,_n.current),k(hi,hi.current)}function pi(e){X(hi),Ai===e&&(Ai=null),X(_n)}var _n=N(0);function Al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Kd(a)||Qd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ma=0,Tt=null,$t=null,En=null,wl=!1,fr=!1,Us=!1,Cl=0,po=0,hr=null,W_=0;function xn(){throw Error(s(321))}function Xu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!di(e[a],n[a]))return!1;return!0}function Wu(e,n,a,o,u,f){return ma=f,Tt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Ym:od,Us=!1,f=a(o,u),Us=!1,fr&&(f=hm(n,a,o,u)),fm(e),f}function fm(e){P.H=xo;var n=$t!==null&&$t.next!==null;if(ma=0,En=$t=Tt=null,wl=!1,po=0,hr=null,n)throw Error(s(300));e===null||Tn||(e=e.dependencies,e!==null&&vl(e)&&(Tn=!0))}function hm(e,n,a,o){Tt=e;var u=0;do{if(fr&&(hr=null),po=0,fr=!1,25<=u)throw Error(s(301));if(u+=1,En=$t=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Zm,f=n(a,o)}while(fr);return f}function q_(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?mo(n):n,e=e.useState()[0],($t!==null?$t.memoizedState:null)!==e&&(Tt.flags|=1024),n}function qu(){var e=Cl!==0;return Cl=0,e}function Yu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Zu(e){if(wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}wl=!1}ma=0,En=$t=Tt=null,fr=!1,po=Cl=0,hr=null}function Qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?Tt.memoizedState=En=e:En=En.next=e,En}function bn(){if($t===null){var e=Tt.alternate;e=e!==null?e.memoizedState:null}else e=$t.next;var n=En===null?Tt.memoizedState:En.next;if(n!==null)En=n,$t=e;else{if(e===null)throw Tt.alternate===null?Error(s(467)):Error(s(310));$t=e,e={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},En===null?Tt.memoizedState=En=e:En=En.next=e}return En}function Rl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var n=po;return po+=1,hr===null&&(hr=[]),e=im(hr,e,n),n=Tt,(En===null?n.memoizedState:En.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Ym:od),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===z)return Bn(e)}throw Error(s(438,String(e)))}function Ku(e){var n=null,a=Tt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Tt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Rl(),Tt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=W;return n.index++,a}function ga(e,n){return typeof n=="function"?n(e):n}function Dl(e){var n=bn();return Qu(n,$t,e)}function Qu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=v=null,V=null,ce=n,Me=!1;do{var De=ce.lane&-536870913;if(De!==ce.lane?(zt&De)===De:(ma&De)===De){var ge=ce.revertLane;if(ge===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),De===or&&(Me=!0);else if((ma&ge)===ge){ce=ce.next,ge===or&&(Me=!0);continue}else De={lane:0,revertLane:ce.revertLane,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},V===null?(R=V=De,v=f):V=V.next=De,Tt.lanes|=ge,Ka|=ge;De=ce.action,Us&&a(f,De),f=ce.hasEagerState?ce.eagerState:a(f,De)}else ge={lane:De,revertLane:ce.revertLane,gesture:ce.gesture,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},V===null?(R=V=ge,v=f):V=V.next=ge,Tt.lanes|=De,Ka|=De;ce=ce.next}while(ce!==null&&ce!==n);if(V===null?v=f:V.next=R,!di(f,e.memoizedState)&&(Tn=!0,Me&&(a=lr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ju(e){var n=bn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);di(f,n.memoizedState)||(Tn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function pm(e,n,a){var o=Tt,u=bn(),f=Pt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!di(($t||u).memoizedState,a);if(v&&(u.memoizedState=a,Tn=!0),u=u.queue,td(xm.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||En!==null&&En.memoizedState.tag&1){if(o.flags|=2048,pr(9,{destroy:void 0},gm.bind(null,o,u,a,n),null),on===null)throw Error(s(349));f||(ma&127)!==0||mm(o,n,a)}return a}function mm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Tt.updateQueue,n===null?(n=Rl(),Tt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function gm(e,n,a,o){n.value=a,n.getSnapshot=o,vm(n)&&_m(e)}function xm(e,n,a){return a(function(){vm(n)&&_m(e)})}function vm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!di(e,a)}catch{return!0}}function _m(e){var n=Es(e,2);n!==null&&oi(n,e,2)}function $u(e){var n=Qn();if(typeof e=="function"){var a=e;if(e=a(),Us){He(!0);try{a()}finally{He(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:e},n}function bm(e,n,a,o){return e.baseState=a,Qu(e,$t,typeof o=="function"?o:ga)}function Y_(e,n,a,o,u){if(zl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,ym(n,f)):(f.next=a.next,n.pending=a.next=f)}}function ym(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=P.T,v={};P.T=v;try{var R=a(u,o),V=P.S;V!==null&&V(v,R),Sm(e,n,R)}catch(ce){ed(e,n,ce)}finally{f!==null&&v.types!==null&&(f.types=v.types),P.T=f}}else try{f=a(u,o),Sm(e,n,f)}catch(ce){ed(e,n,ce)}}function Sm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Mm(e,n,o)},function(o){return ed(e,n,o)}):Mm(e,n,a)}function Mm(e,n,a){n.status="fulfilled",n.value=a,Em(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,ym(e,a)))}function ed(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Em(n),n=n.next;while(n!==o)}e.action=null}function Em(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Tm(e,n){return n}function Am(e,n){if(Pt){var a=on.formState;if(a!==null){e:{var o=Tt;if(Pt){if(fn){t:{for(var u=fn,f=Ti;u.nodeType!==8;){if(!f){u=null;break t}if(u=wi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){fn=wi(u.nextSibling),o=u.data==="F!";break e}}ja(o)}o=!1}o&&(n=a[0])}}return a=Qn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tm,lastRenderedState:n},a.queue=o,a=Xm.bind(null,Tt,o),o.dispatch=a,o=$u(!1),f=rd.bind(null,Tt,!1,o.queue),o=Qn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Y_.bind(null,Tt,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function wm(e){var n=bn();return Cm(n,$t,e)}function Cm(e,n,a){if(n=Qu(e,n,Tm)[0],e=Dl(ga)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(v){throw v===cr?yl:v}else o=n;n=bn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Tt.flags|=2048,pr(9,{destroy:void 0},Z_.bind(null,u,a),null)),[o,f,e]}function Z_(e,n){e.action=n}function Rm(e){var n=bn(),a=$t;if(a!==null)return Cm(n,a,e);bn(),n=n.memoizedState,a=bn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function pr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Tt.updateQueue,n===null&&(n=Rl(),Tt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Nm(){return bn().memoizedState}function Ll(e,n,a,o){var u=Qn();Tt.flags|=e,u.memoizedState=pr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ul(e,n,a,o){var u=bn();o=o===void 0?null:o;var f=u.memoizedState.inst;$t!==null&&o!==null&&Xu(o,$t.memoizedState.deps)?u.memoizedState=pr(n,f,a,o):(Tt.flags|=e,u.memoizedState=pr(1|n,f,a,o))}function Dm(e,n){Ll(8390656,8,e,n)}function td(e,n){Ul(2048,8,e,n)}function K_(e){Tt.flags|=4;var n=Tt.updateQueue;if(n===null)n=Rl(),Tt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Lm(e){var n=bn().memoizedState;return K_({ref:n,nextImpl:e}),function(){if((qt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Um(e,n){return Ul(4,2,e,n)}function zm(e,n){return Ul(4,4,e,n)}function Om(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pm(e,n,a){a=a!=null?a.concat([e]):null,Ul(4,4,Om.bind(null,n,e),a)}function nd(){}function Im(e,n){var a=bn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Xu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Fm(e,n){var a=bn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Xu(n,o[1]))return o[0];if(o=e(),Us){He(!0);try{e()}finally{He(!1)}}return a.memoizedState=[o,n],o}function id(e,n,a){return a===void 0||(ma&1073741824)!==0&&(zt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=B0(),Tt.lanes|=e,Ka|=e,a)}function Bm(e,n,a,o){return di(a,n)?a:dr.current!==null?(e=id(e,a,o),di(e,n)||(Tn=!0),e):(ma&42)===0||(ma&1073741824)!==0&&(zt&261930)===0?(Tn=!0,e.memoizedState=a):(e=B0(),Tt.lanes|=e,Ka|=e,n)}function km(e,n,a,o,u){var f=H.p;H.p=f!==0&&8>f?f:8;var v=P.T,R={};P.T=R,rd(e,!1,n,a);try{var V=u(),ce=P.S;if(ce!==null&&ce(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var Me=X_(V,o);go(e,n,Me,xi(e))}else go(e,n,o,xi(e))}catch(De){go(e,n,{then:function(){},status:"rejected",reason:De},xi())}finally{H.p=f,v!==null&&R.types!==null&&(v.types=R.types),P.T=v}}function Q_(){}function ad(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=jm(e).queue;km(e,u,n,ne,a===null?Q_:function(){return Hm(e),a(o)})}function jm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Hm(e){var n=jm(e);n.next===null&&(n=e.alternate.memoizedState),go(e,n.next.queue,{},xi())}function sd(){return Bn(Uo)}function Gm(){return bn().memoizedState}function Vm(){return bn().memoizedState}function J_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=xi();e=Va(a);var o=Xa(n,e,a);o!==null&&(oi(o,n,a),uo(o,n,a)),n={cache:zu()},e.payload=n;return}n=n.return}}function $_(e,n,a){var o=xi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?Wm(n,a):(a=Mu(e,n,a,o),a!==null&&(oi(a,e,o),qm(a,n,o)))}function Xm(e,n,a){var o=xi();go(e,n,a,o)}function go(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))Wm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(u.hasEagerState=!0,u.eagerState=R,di(R,v))return pl(e,n,u,0),on===null&&hl(),!1}catch{}finally{}if(a=Mu(e,n,u,o),a!==null)return oi(a,e,o),qm(a,n,o),!0}return!1}function rd(e,n,a,o){if(o={lane:2,revertLane:Fd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(s(479))}else n=Mu(e,a,o,2),n!==null&&oi(n,e,2)}function zl(e){var n=e.alternate;return e===Tt||n!==null&&n===Tt}function Wm(e,n){fr=wl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function qm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Wt(e,a)}}var xo={readContext:Bn,use:Nl,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn};xo.useEffectEvent=xn;var Ym={readContext:Bn,use:Nl,useCallback:function(e,n){return Qn().memoizedState=[e,n===void 0?null:n],e},useContext:Bn,useEffect:Dm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ll(4194308,4,Om.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ll(4194308,4,e,n)},useInsertionEffect:function(e,n){Ll(4,2,e,n)},useMemo:function(e,n){var a=Qn();n=n===void 0?null:n;var o=e();if(Us){He(!0);try{e()}finally{He(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Qn();if(a!==void 0){var u=a(n);if(Us){He(!0);try{a(n)}finally{He(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=$_.bind(null,Tt,e),[o.memoizedState,e]},useRef:function(e){var n=Qn();return e={current:e},n.memoizedState=e},useState:function(e){e=$u(e);var n=e.queue,a=Xm.bind(null,Tt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:nd,useDeferredValue:function(e,n){var a=Qn();return id(a,e,n)},useTransition:function(){var e=$u(!1);return e=km.bind(null,Tt,e.queue,!0,!1),Qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Tt,u=Qn();if(Pt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),on===null)throw Error(s(349));(zt&127)!==0||mm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Dm(xm.bind(null,o,f,e),[e]),o.flags|=2048,pr(9,{destroy:void 0},gm.bind(null,o,f,a,n),null),a},useId:function(){var e=Qn(),n=on.identifierPrefix;if(Pt){var a=Qi,o=Ki;a=(o&~(1<<32-Ge(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=W_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:sd,useFormState:Am,useActionState:Am,useOptimistic:function(e){var n=Qn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rd.bind(null,Tt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ku,useCacheRefresh:function(){return Qn().memoizedState=J_.bind(null,Tt)},useEffectEvent:function(e){var n=Qn(),a={impl:e};return n.memoizedState=a,function(){if((qt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},od={readContext:Bn,use:Nl,useCallback:Im,useContext:Bn,useEffect:td,useImperativeHandle:Pm,useInsertionEffect:Um,useLayoutEffect:zm,useMemo:Fm,useReducer:Dl,useRef:Nm,useState:function(){return Dl(ga)},useDebugValue:nd,useDeferredValue:function(e,n){var a=bn();return Bm(a,$t.memoizedState,e,n)},useTransition:function(){var e=Dl(ga)[0],n=bn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:pm,useId:Gm,useHostTransitionStatus:sd,useFormState:wm,useActionState:wm,useOptimistic:function(e,n){var a=bn();return bm(a,$t,e,n)},useMemoCache:Ku,useCacheRefresh:Vm};od.useEffectEvent=Lm;var Zm={readContext:Bn,use:Nl,useCallback:Im,useContext:Bn,useEffect:td,useImperativeHandle:Pm,useInsertionEffect:Um,useLayoutEffect:zm,useMemo:Fm,useReducer:Ju,useRef:Nm,useState:function(){return Ju(ga)},useDebugValue:nd,useDeferredValue:function(e,n){var a=bn();return $t===null?id(a,e,n):Bm(a,$t.memoizedState,e,n)},useTransition:function(){var e=Ju(ga)[0],n=bn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:pm,useId:Gm,useHostTransitionStatus:sd,useFormState:Rm,useActionState:Rm,useOptimistic:function(e,n){var a=bn();return $t!==null?bm(a,$t,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Vm};Zm.useEffectEvent=Lm;function ld(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var cd={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=xi(),u=Va(o);u.payload=n,a!=null&&(u.callback=a),n=Xa(e,u,o),n!==null&&(oi(n,e,o),uo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=xi(),u=Va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Xa(e,u,o),n!==null&&(oi(n,e,o),uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=xi(),o=Va(a);o.tag=2,n!=null&&(o.callback=n),n=Xa(e,o,a),n!==null&&(oi(n,e,a),uo(n,e,a))}};function Km(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(u,f):!0}function Qm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&cd.enqueueReplaceState(n,n.state,null)}function zs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Jm(e){fl(e)}function $m(e){console.error(e)}function e0(e){fl(e)}function Ol(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function t0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ud(e,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(e,n)},a}function n0(e){return e=Va(e),e.tag=3,e}function i0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){t0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){t0(n,a,o),typeof u!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function eb(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&rr(n,a,u,!0),a=hi.current,a!==null){switch(a.tag){case 31:case 13:return Ai===null?ql():a.alternate===null&&vn===0&&(vn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Od(e,o,u)),!1;case 22:return a.flags|=65536,o===Sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Od(e,o,u)),!1}throw Error(s(435,a.tag))}return Od(e,o,u),ql(),!1}if(Pt)return n=hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ru&&(e=Error(s(422),{cause:o}),so(Si(e,a)))):(o!==Ru&&(n=Error(s(423),{cause:o}),so(Si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Si(o,a),u=ud(e.stateNode,o,u),ku(e,u),vn!==4&&(vn=2)),!1;var f=Error(s(520),{cause:o});if(f=Si(f,a),To===null?To=[f]:To.push(f),vn!==4&&(vn=2),n===null)return!0;o=Si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ud(a.stateNode,o,e),ku(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Qa===null||!Qa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=n0(u),i0(u,e,a,o),ku(a,u),!1}a=a.return}while(a!==null);return!1}var dd=Error(s(461)),Tn=!1;function kn(e,n,a,o){n.child=e===null?om(n,null,a,o):Ls(n,e.child,a,o)}function a0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return Cs(n),o=Wu(e,n,a,v,f,u),R=qu(),e!==null&&!Tn?(Yu(e,n,u),xa(e,n,u)):(Pt&&R&&wu(n),n.flags|=1,kn(e,n,o,u),n.child)}function s0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,r0(e,n,f,o,u)):(e=gl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!_d(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(v,o)&&e.ref===n.ref)return xa(e,n,u)}return n.flags|=1,e=da(f,o),e.ref=n.ref,e.return=n,n.child=e}function r0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(no(f,o)&&e.ref===n.ref)if(Tn=!1,n.pendingProps=o=f,_d(e,u))(e.flags&131072)!==0&&(Tn=!0);else return n.lanes=e.lanes,xa(e,n,u)}return fd(e,n,a,o,u)}function o0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return l0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&bl(n,f!==null?f.cachePool:null),f!==null?um(n,f):Hu(),dm(n);else return o=n.lanes=536870912,l0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(bl(n,f.cachePool),um(n,f),qa(),n.memoizedState=null):(e!==null&&bl(n,null),Hu(),qa());return kn(e,n,u,a),n.child}function vo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function l0(e,n,a,o,u){var f=Pu();return f=f===null?null:{parent:Mn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&bl(n,null),Hu(),dm(n),e!==null&&rr(e,n,o,!0),n.childLanes=u,null}function Pl(e,n){return n=Fl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function c0(e,n,a){return Ls(n,e.child,null,a),e=Pl(n,n.pendingProps),e.flags|=2,pi(n),n.memoizedState=null,e}function tb(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Pt){if(o.mode==="hidden")return e=Pl(n,o),n.lanes=536870912,vo(null,e);if(Vu(n),(e=fn)?(e=yg(e,Ti),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=Wp(e),a.return=n,n.child=a,Fn=n,fn=null)):e=null,e===null)throw ja(n);return n.lanes=536870912,null}return Pl(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Vu(n),u)if(n.flags&256)n.flags&=-257,n=c0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Tn||rr(e,n,a,!1),u=(a&e.childLanes)!==0,Tn||u){if(o=on,o!==null&&(v=mn(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Es(e,v),oi(o,e,v),dd;ql(),n=c0(e,n,a)}else e=f.treeContext,fn=wi(v.nextSibling),Fn=n,Pt=!0,ka=null,Ti=!1,e!==null&&Zp(n,e),n=Pl(n,o),n.flags|=4096;return n}return e=da(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Il(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function fd(e,n,a,o,u){return Cs(n),a=Wu(e,n,a,o,void 0,u),o=qu(),e!==null&&!Tn?(Yu(e,n,u),xa(e,n,u)):(Pt&&o&&wu(n),n.flags|=1,kn(e,n,a,u),n.child)}function u0(e,n,a,o,u,f){return Cs(n),n.updateQueue=null,a=hm(n,o,a,u),fm(e),o=qu(),e!==null&&!Tn?(Yu(e,n,f),xa(e,n,f)):(Pt&&o&&wu(n),n.flags|=1,kn(e,n,a,f),n.child)}function d0(e,n,a,o,u){if(Cs(n),n.stateNode===null){var f=nr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Bn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=cd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Fu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Bn(v):nr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(ld(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&cd.enqueueReplaceState(f,f.state,null),ho(n,o,f,u),fo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,V=zs(a,R);f.props=V;var ce=f.context,Me=a.contextType;v=nr,typeof Me=="object"&&Me!==null&&(v=Bn(Me));var De=a.getDerivedStateFromProps;Me=typeof De=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,Me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ce!==v)&&Qm(n,f,o,v),Ga=!1;var ge=n.memoizedState;f.state=ge,ho(n,o,f,u),fo(),ce=n.memoizedState,R||ge!==ce||Ga?(typeof De=="function"&&(ld(n,a,De,o),ce=n.memoizedState),(V=Ga||Km(n,a,V,o,ge,ce,v))?(Me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ce),f.props=o,f.state=ce,f.context=v,o=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Bu(e,n),v=n.memoizedProps,Me=zs(a,v),f.props=Me,De=n.pendingProps,ge=f.context,ce=a.contextType,V=nr,typeof ce=="object"&&ce!==null&&(V=Bn(ce)),R=a.getDerivedStateFromProps,(ce=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==De||ge!==V)&&Qm(n,f,o,V),Ga=!1,ge=n.memoizedState,f.state=ge,ho(n,o,f,u),fo();var ye=n.memoizedState;v!==De||ge!==ye||Ga||e!==null&&e.dependencies!==null&&vl(e.dependencies)?(typeof R=="function"&&(ld(n,a,R,o),ye=n.memoizedState),(Me=Ga||Km(n,a,Me,o,ge,ye,V)||e!==null&&e.dependencies!==null&&vl(e.dependencies))?(ce||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ye,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ye,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ye),f.props=o,f.state=ye,f.context=V,o=Me):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Il(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ls(n,e.child,null,u),n.child=Ls(n,null,a,u)):kn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=xa(e,n,u),e}function f0(e,n,a,o){return As(),n.flags|=256,kn(e,n,a,o),n.child}var hd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pd(e){return{baseLanes:e,cachePool:tm()}}function md(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=gi),e}function h0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(_n.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Pt){if(u?Wa(n):qa(),(e=fn)?(e=yg(e,Ti),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=Wp(e),a.return=n,n.child=a,Fn=n,fn=null)):e=null,e===null)throw ja(n);return Qd(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(qa(),u=n.mode,R=Fl({mode:"hidden",children:R},u),o=Ts(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=pd(a),o.childLanes=md(e,v,a),n.memoizedState=hd,vo(null,o)):(Wa(n),gd(n,R))}var V=e.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(f)n.flags&256?(Wa(n),n.flags&=-257,n=xd(e,n,a)):n.memoizedState!==null?(qa(),n.child=e.child,n.flags|=128,n=null):(qa(),R=o.fallback,u=n.mode,o=Fl({mode:"visible",children:o.children},u),R=Ts(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ls(n,e.child,null,a),o=n.child,o.memoizedState=pd(a),o.childLanes=md(e,v,a),n.memoizedState=hd,n=vo(null,o));else if(Wa(n),Qd(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var ce=v.dgst;v=ce,o=Error(s(419)),o.stack="",o.digest=v,so({value:o,source:null,stack:null}),n=xd(e,n,a)}else if(Tn||rr(e,n,a,!1),v=(a&e.childLanes)!==0,Tn||v){if(v=on,v!==null&&(o=mn(v,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Es(e,o),oi(v,e,o),dd;Kd(R)||ql(),n=xd(e,n,a)}else Kd(R)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,fn=wi(R.nextSibling),Fn=n,Pt=!0,ka=null,Ti=!1,e!==null&&Zp(n,e),n=gd(n,o.children),n.flags|=4096);return n}return u?(qa(),R=o.fallback,u=n.mode,V=e.child,ce=V.sibling,o=da(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,ce!==null?R=da(ce,R):(R=Ts(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,vo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=pd(a):(u=R.cachePool,u!==null?(V=Mn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=tm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=md(e,v,a),n.memoizedState=hd,vo(e.child,o)):(Wa(n),a=e.child,e=a.sibling,a=da(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function gd(e,n){return n=Fl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Fl(e,n){return e=fi(22,e,null,n),e.lanes=0,e}function xd(e,n,a){return Ls(n,e.child,null,a),e=gd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function p0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Lu(e.return,n,a)}function vd(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function m0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=_n.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,k(_n,v),kn(e,n,o,a),o=Pt?ao:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&p0(e,a,n);else if(e.tag===19)p0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Al(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),vd(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Al(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}vd(n,!0,a,null,f,o);break;case"together":vd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function xa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(rr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=da(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=da(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function _d(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&vl(e)))}function nb(e,n,a){switch(n.tag){case 3:Ne(n,n.stateNode.containerInfo),Ha(n,Mn,e.memoizedState.cache),As();break;case 27:case 5:at(n);break;case 4:Ne(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?h0(e,n,a):(Wa(n),e=xa(e,n,a),e!==null?e.sibling:null);Wa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(rr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return m0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),k(_n,_n.current),o)break;return null;case 22:return n.lanes=0,o0(e,n,a,n.pendingProps);case 24:Ha(n,Mn,e.memoizedState.cache)}return xa(e,n,a)}function g0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Tn=!0;else{if(!_d(e,a)&&(n.flags&128)===0)return Tn=!1,nb(e,n,a);Tn=(e.flags&131072)!==0}else Tn=!1,Pt&&(n.flags&1048576)!==0&&Yp(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=Ns(n.elementType),n.type=e,typeof e=="function")Eu(e)?(o=zs(e,o),n.tag=1,n=d0(null,n,e,o,a)):(n.tag=0,n=fd(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=a0(null,n,e,o,a);break e}else if(u===F){n.tag=14,n=s0(null,n,e,o,a);break e}}throw n=ve(e)||e,Error(s(306,n,""))}}return n;case 0:return fd(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=zs(o,n.pendingProps),d0(e,n,o,u,a);case 3:e:{if(Ne(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Bu(e,n),ho(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Ha(n,Mn,o),o!==f.cache&&Uu(n,[Mn],a,!0),fo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=f0(e,n,o,a);break e}else if(o!==u){u=Si(Error(s(424)),n),so(u),n=f0(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(fn=wi(e.firstChild),Fn=n,Pt=!0,ka=null,Ti=!0,a=om(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(As(),o===u){n=xa(e,n,a);break e}kn(e,n,o,a)}n=n.child}return n;case 26:return Il(e,n),e===null?(a=wg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Pt||(a=n.type,e=n.pendingProps,o=ec(J.current).createElement(a),o[cn]=n,o[sn]=e,jn(o,a,e),gn(o),n.stateNode=o):n.memoizedState=wg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return at(n),e===null&&Pt&&(o=n.stateNode=Eg(n.type,n.pendingProps,J.current),Fn=n,Ti=!0,u=fn,ts(n.type)?(Jd=u,fn=wi(o.firstChild)):fn=u),kn(e,n,n.pendingProps.children,a),Il(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Pt&&((u=o=fn)&&(o=Lb(o,n.type,n.pendingProps,Ti),o!==null?(n.stateNode=o,Fn=n,fn=wi(o.firstChild),Ti=!1,u=!0):u=!1),u||ja(n)),at(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,qd(u,f)?o=null:v!==null&&qd(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Wu(e,n,q_,null,null,a),Uo._currentValue=u),Il(e,n),kn(e,n,o,a),n.child;case 6:return e===null&&Pt&&((e=a=fn)&&(a=Ub(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Fn=n,fn=null,e=!0):e=!1),e||ja(n)),null;case 13:return h0(e,n,a);case 4:return Ne(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ls(n,null,o,a):kn(e,n,o,a),n.child;case 11:return a0(e,n,n.type,n.pendingProps,a);case 7:return kn(e,n,n.pendingProps,a),n.child;case 8:return kn(e,n,n.pendingProps.children,a),n.child;case 12:return kn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ha(n,n.type,o.value),kn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Cs(n),u=Bn(u),o=o(u),n.flags|=1,kn(e,n,o,a),n.child;case 14:return s0(e,n,n.type,n.pendingProps,a);case 15:return r0(e,n,n.type,n.pendingProps,a);case 19:return m0(e,n,a);case 31:return tb(e,n,a);case 22:return o0(e,n,a,n.pendingProps);case 24:return Cs(n),o=Bn(Mn),e===null?(u=Pu(),u===null&&(u=on,f=zu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Fu(n),Ha(n,Mn,u)):((e.lanes&a)!==0&&(Bu(e,n),ho(n,null,null,a),fo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,Mn,o)):(o=f.cache,Ha(n,Mn,o),o!==u.cache&&Uu(n,[Mn],a,!0))),kn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function va(e){e.flags|=4}function bd(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(G0())e.flags|=8192;else throw Ds=Sl,Iu}else e.flags&=-16777217}function x0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Lg(n))if(G0())e.flags|=8192;else throw Ds=Sl,Iu}function Bl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Re():536870912,e.lanes|=n,vr|=n)}function _o(e,n){if(!Pt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function hn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function ib(e,n,a){var o=n.pendingProps;switch(Cu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(n),null;case 1:return hn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),pa(Mn),We(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(sr(n)?va(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Nu())),hn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(va(n),f!==null?(hn(n),x0(n,f)):(hn(n),bd(n,u,null,o,a))):f?f!==e.memoizedState?(va(n),hn(n),x0(n,f)):(hn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&va(n),hn(n),bd(n,u,e,o,a)),null;case 27:if(tt(n),a=J.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&va(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return hn(n),null}e=_e.current,sr(n)?Kp(n):(e=Eg(u,o,a),n.stateNode=e,va(n))}return hn(n),null;case 5:if(tt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&va(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return hn(n),null}if(f=_e.current,sr(n))Kp(n);else{var v=ec(J.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[cn]=n,f[sn]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(jn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&va(n)}}return hn(n),bd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&va(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=J.current,sr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Fn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||hg(e.nodeValue,a)),e||ja(n,!0)}else e=ec(e).createTextNode(o),e[cn]=n,n.stateNode=e}return hn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=sr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;hn(n),e=!1}else a=Nu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(pi(n),n):(pi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return hn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=sr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;hn(n),u=!1}else u=Nu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(pi(n),n):(pi(n),null)}return pi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Bl(n,n.updateQueue),hn(n),null);case 4:return We(),e===null&&Hd(n.stateNode.containerInfo),hn(n),null;case 10:return pa(n.type),hn(n),null;case 19:if(X(_n),o=n.memoizedState,o===null)return hn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)_o(o,!1);else{if(vn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Al(e),f!==null){for(n.flags|=128,_o(o,!1),e=f.updateQueue,n.updateQueue=e,Bl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Xp(a,e),a=a.sibling;return k(_n,_n.current&1|2),Pt&&fa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&ke()>Vl&&(n.flags|=128,u=!0,_o(o,!1),n.lanes=4194304)}else{if(!u)if(e=Al(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Bl(n,e),_o(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Pt)return hn(n),null}else 2*ke()-o.renderingStartTime>Vl&&a!==536870912&&(n.flags|=128,u=!0,_o(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ke(),e.sibling=null,a=_n.current,k(_n,u?a&1|2:a&1),Pt&&fa(n,o.treeForkCount),e):(hn(n),null);case 22:case 23:return pi(n),Gu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(hn(n),n.subtreeFlags&6&&(n.flags|=8192)):hn(n),a=n.updateQueue,a!==null&&Bl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&X(Rs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),pa(Mn),hn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ab(e,n){switch(Cu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return pa(Mn),We(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return tt(n),null;case 31:if(n.memoizedState!==null){if(pi(n),n.alternate===null)throw Error(s(340));As()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(pi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));As()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(_n),null;case 4:return We(),null;case 10:return pa(n.type),null;case 22:case 23:return pi(n),Gu(),e!==null&&X(Rs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return pa(Mn),null;case 25:return null;default:return null}}function v0(e,n){switch(Cu(n),n.tag){case 3:pa(Mn),We();break;case 26:case 27:case 5:tt(n);break;case 4:We();break;case 31:n.memoizedState!==null&&pi(n);break;case 13:pi(n);break;case 19:X(_n);break;case 10:pa(n.type);break;case 22:case 23:pi(n),Gu(),e!==null&&X(Rs);break;case 24:pa(Mn)}}function bo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(R){Qt(n,n.return,R)}}function Ya(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var V=a,ce=R;try{ce()}catch(Me){Qt(u,V,Me)}}}o=o.next}while(o!==f)}}catch(Me){Qt(n,n.return,Me)}}function _0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{cm(n,a)}catch(o){Qt(e,e.return,o)}}}function b0(e,n,a){a.props=zs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Qt(e,n,o)}}function yo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Qt(e,n,u)}}function Ji(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Qt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Qt(e,n,u)}else a.current=null}function y0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Qt(e,e.return,u)}}function yd(e,n,a){try{var o=e.stateNode;Ab(o,e.type,a,n),o[sn]=n}catch(u){Qt(e,e.return,u)}}function S0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ts(e.type)||e.tag===4}function Sd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||S0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ts(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Md(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ca));else if(o!==4&&(o===27&&ts(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Md(e,n,a),e=e.sibling;e!==null;)Md(e,n,a),e=e.sibling}function kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ts(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kl(e,n,a),e=e.sibling;e!==null;)kl(e,n,a),e=e.sibling}function M0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);jn(n,o,a),n[cn]=e,n[sn]=a}catch(f){Qt(e,e.return,f)}}var _a=!1,An=!1,Ed=!1,E0=typeof WeakSet=="function"?WeakSet:Set,On=null;function sb(e,n){if(e=e.containerInfo,Xd=oc,e=Pp(e),xu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,R=-1,V=-1,ce=0,Me=0,De=e,ge=null;t:for(;;){for(var ye;De!==a||u!==0&&De.nodeType!==3||(R=v+u),De!==f||o!==0&&De.nodeType!==3||(V=v+o),De.nodeType===3&&(v+=De.nodeValue.length),(ye=De.firstChild)!==null;)ge=De,De=ye;for(;;){if(De===e)break t;if(ge===a&&++ce===u&&(R=v),ge===f&&++Me===o&&(V=v),(ye=De.nextSibling)!==null)break;De=ge,ge=De.parentNode}De=ye}a=R===-1||V===-1?null:{start:R,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wd={focusedElem:e,selectionRange:a},oc=!1,On=n;On!==null;)if(n=On,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,On=e;else for(;On!==null;){switch(n=On,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var et=zs(a.type,u);e=o.getSnapshotBeforeUpdate(et,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(dt){Qt(a,a.return,dt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Zd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,On=e;break}On=n.return}}function T0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),o&4&&bo(5,a);break;case 1:if(ya(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Qt(a,a.return,v)}else{var u=zs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Qt(a,a.return,v)}}o&64&&_0(a),o&512&&yo(a,a.return);break;case 3:if(ya(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{cm(e,n)}catch(v){Qt(a,a.return,v)}}break;case 27:n===null&&o&4&&M0(a);case 26:case 5:ya(e,a),n===null&&o&4&&y0(a),o&512&&yo(a,a.return);break;case 12:ya(e,a);break;case 31:ya(e,a),o&4&&C0(e,a);break;case 13:ya(e,a),o&4&&R0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=pb.bind(null,a),zb(e,a))));break;case 22:if(o=a.memoizedState!==null||_a,!o){n=n!==null&&n.memoizedState!==null||An,u=_a;var f=An;_a=o,(An=n)&&!f?Sa(e,a,(a.subtreeFlags&8772)!==0):ya(e,a),_a=u,An=f}break;case 30:break;default:ya(e,a)}}function A0(e){var n=e.alternate;n!==null&&(e.alternate=null,A0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&vs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var pn=null,ii=!1;function ba(e,n,a){for(a=a.child;a!==null;)w0(e,n,a),a=a.sibling}function w0(e,n,a){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:An||Ji(a,n),ba(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:An||Ji(a,n);var o=pn,u=ii;ts(a.type)&&(pn=a.stateNode,ii=!1),ba(e,n,a),No(a.stateNode),pn=o,ii=u;break;case 5:An||Ji(a,n);case 6:if(o=pn,u=ii,pn=null,ba(e,n,a),pn=o,ii=u,pn!==null)if(ii)try{(pn.nodeType===9?pn.body:pn.nodeName==="HTML"?pn.ownerDocument.body:pn).removeChild(a.stateNode)}catch(f){Qt(a,n,f)}else try{pn.removeChild(a.stateNode)}catch(f){Qt(a,n,f)}break;case 18:pn!==null&&(ii?(e=pn,_g(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ar(e)):_g(pn,a.stateNode));break;case 4:o=pn,u=ii,pn=a.stateNode.containerInfo,ii=!0,ba(e,n,a),pn=o,ii=u;break;case 0:case 11:case 14:case 15:Ya(2,a,n),An||Ya(4,a,n),ba(e,n,a);break;case 1:An||(Ji(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&b0(a,n,o)),ba(e,n,a);break;case 21:ba(e,n,a);break;case 22:An=(o=An)||a.memoizedState!==null,ba(e,n,a),An=o;break;default:ba(e,n,a)}}function C0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ar(e)}catch(a){Qt(n,n.return,a)}}}function R0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ar(e)}catch(a){Qt(n,n.return,a)}}function rb(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new E0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new E0),n;default:throw Error(s(435,e.tag))}}function jl(e,n){var a=rb(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=mb.bind(null,e,o);o.then(u,u)}})}function ai(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,R=v;e:for(;R!==null;){switch(R.tag){case 27:if(ts(R.type)){pn=R.stateNode,ii=!1;break e}break;case 5:pn=R.stateNode,ii=!1;break e;case 3:case 4:pn=R.stateNode.containerInfo,ii=!0;break e}R=R.return}if(pn===null)throw Error(s(160));w0(f,v,u),pn=null,ii=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)N0(n,e),n=n.sibling}var Bi=null;function N0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ai(n,e),si(e),o&4&&(Ya(3,e,e.return),bo(3,e),Ya(5,e,e.return));break;case 1:ai(n,e),si(e),o&512&&(An||a===null||Ji(a,a.return)),o&64&&_a&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Bi;if(ai(n,e),si(e),o&512&&(An||a===null||Ji(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ii]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),jn(f,o,a),f[cn]=e,gn(f),o=f;break e;case"link":var v=Ng("link","href",u).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break t}}f=u.createElement(o),jn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=Ng("meta","content",u).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break t}}f=u.createElement(o),jn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[cn]=e,gn(f),o=f}e.stateNode=o}else Dg(u,e.type,e.stateNode);else e.stateNode=Rg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Dg(u,e.type,e.stateNode):Rg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&yd(e,e.memoizedProps,a.memoizedProps)}break;case 27:ai(n,e),si(e),o&512&&(An||a===null||Ji(a,a.return)),a!==null&&o&4&&yd(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ai(n,e),si(e),o&512&&(An||a===null||Ji(a,a.return)),e.flags&32){u=e.stateNode;try{Kn(u,"")}catch(et){Qt(e,e.return,et)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,yd(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Ed=!0);break;case 6:if(ai(n,e),si(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(et){Qt(e,e.return,et)}}break;case 3:if(ic=null,u=Bi,Bi=tc(n.containerInfo),ai(n,e),Bi=u,si(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ar(n.containerInfo)}catch(et){Qt(e,e.return,et)}Ed&&(Ed=!1,D0(e));break;case 4:o=Bi,Bi=tc(e.stateNode.containerInfo),ai(n,e),si(e),Bi=o;break;case 12:ai(n,e),si(e);break;case 31:ai(n,e),si(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 13:ai(n,e),si(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gl=ke()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,ce=_a,Me=An;if(_a=ce||u,An=Me||V,ai(n,e),An=Me,_a=ce,si(e),o&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||_a||An||Os(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=V.stateNode;var De=V.memoizedProps.style,ge=De!=null&&De.hasOwnProperty("display")?De.display:null;R.style.display=ge==null||typeof ge=="boolean"?"":(""+ge).trim()}}catch(et){Qt(V,V.return,et)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(et){Qt(V,V.return,et)}}}else if(n.tag===18){if(a===null){V=n;try{var ye=V.stateNode;u?bg(ye,!0):bg(V.stateNode,!1)}catch(et){Qt(V,V.return,et)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,jl(e,a))));break;case 19:ai(n,e),si(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 30:break;case 21:break;default:ai(n,e),si(e)}}function si(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(S0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Sd(e);kl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Kn(v,""),a.flags&=-33);var R=Sd(e);kl(e,R,v);break;case 3:case 4:var V=a.stateNode.containerInfo,ce=Sd(e);Md(e,ce,V);break;default:throw Error(s(161))}}catch(Me){Qt(e,e.return,Me)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function D0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;D0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ya(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)T0(e,n.alternate,n),n=n.sibling}function Os(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ya(4,n,n.return),Os(n);break;case 1:Ji(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&b0(n,n.return,a),Os(n);break;case 27:No(n.stateNode);case 26:case 5:Ji(n,n.return),Os(n);break;case 22:n.memoizedState===null&&Os(n);break;case 30:Os(n);break;default:Os(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(u,f,a),bo(4,f);break;case 1:if(Sa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ce){Qt(o,o.return,ce)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)lm(V[u],R)}catch(ce){Qt(o,o.return,ce)}}a&&v&64&&_0(f),yo(f,f.return);break;case 27:M0(f);case 26:case 5:Sa(u,f,a),a&&o===null&&v&4&&y0(f),yo(f,f.return);break;case 12:Sa(u,f,a);break;case 31:Sa(u,f,a),a&&v&4&&C0(u,f);break;case 13:Sa(u,f,a),a&&v&4&&R0(u,f);break;case 22:f.memoizedState===null&&Sa(u,f,a),yo(f,f.return);break;case 30:break;default:Sa(u,f,a)}n=n.sibling}}function Td(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ro(a))}function Ad(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e))}function ki(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)L0(e,n,a,o),n=n.sibling}function L0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ki(e,n,a,o),u&2048&&bo(9,n);break;case 1:ki(e,n,a,o);break;case 3:ki(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e)));break;case 12:if(u&2048){ki(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Qt(n,n.return,V)}}else ki(e,n,a,o);break;case 31:ki(e,n,a,o);break;case 13:ki(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?ki(e,n,a,o):So(e,n):f._visibility&2?ki(e,n,a,o):(f._visibility|=2,mr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Td(v,n);break;case 24:ki(e,n,a,o),u&2048&&Ad(n.alternate,n);break;default:ki(e,n,a,o)}}function mr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,R=a,V=o,ce=v.flags;switch(v.tag){case 0:case 11:case 15:mr(f,v,R,V,u),bo(8,v);break;case 23:break;case 22:var Me=v.stateNode;v.memoizedState!==null?Me._visibility&2?mr(f,v,R,V,u):So(f,v):(Me._visibility|=2,mr(f,v,R,V,u)),u&&ce&2048&&Td(v.alternate,v);break;case 24:mr(f,v,R,V,u),u&&ce&2048&&Ad(v.alternate,v);break;default:mr(f,v,R,V,u)}n=n.sibling}}function So(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:So(a,o),u&2048&&Td(o.alternate,o);break;case 24:So(a,o),u&2048&&Ad(o.alternate,o);break;default:So(a,o)}n=n.sibling}}var Mo=8192;function gr(e,n,a){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)U0(e,n,a),e=e.sibling}function U0(e,n,a){switch(e.tag){case 26:gr(e,n,a),e.flags&Mo&&e.memoizedState!==null&&Wb(a,Bi,e.memoizedState,e.memoizedProps);break;case 5:gr(e,n,a);break;case 3:case 4:var o=Bi;Bi=tc(e.stateNode.containerInfo),gr(e,n,a),Bi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Mo,Mo=16777216,gr(e,n,a),Mo=o):gr(e,n,a));break;default:gr(e,n,a)}}function z0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,P0(o,e)}z0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)O0(e),e=e.sibling}function O0(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&Ya(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Hl(e)):Eo(e);break;default:Eo(e)}}function Hl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,P0(o,e)}z0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ya(8,n,n.return),Hl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hl(n));break;default:Hl(n)}e=e.sibling}}function P0(e,n){for(;On!==null;){var a=On;switch(a.tag){case 0:case 11:case 15:Ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,On=o;else e:for(a=e;On!==null;){o=On;var u=o.sibling,f=o.return;if(A0(o),o===a){On=null;break e}if(u!==null){u.return=f,On=u;break e}On=f}}}var ob={getCacheForType:function(e){var n=Bn(Mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Bn(Mn).controller.signal}},lb=typeof WeakMap=="function"?WeakMap:Map,qt=0,on=null,Lt=null,zt=0,Kt=0,mi=null,Za=!1,xr=!1,wd=!1,Ma=0,vn=0,Ka=0,Ps=0,Cd=0,gi=0,vr=0,To=null,ri=null,Rd=!1,Gl=0,I0=0,Vl=1/0,Xl=null,Qa=null,Dn=0,Ja=null,_r=null,Ea=0,Nd=0,Dd=null,F0=null,Ao=0,Ld=null;function xi(){return(qt&2)!==0&&zt!==0?zt&-zt:P.T!==null?Fd():ei()}function B0(){if(gi===0)if((zt&536870912)===0||Pt){var e=Mt;Mt<<=1,(Mt&3932160)===0&&(Mt=262144),gi=e}else gi=536870912;return e=hi.current,e!==null&&(e.flags|=32),gi}function oi(e,n,a){(e===on&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)&&(br(e,0),$a(e,zt,gi,!1)),Ie(e,a),((qt&2)===0||e!==on)&&(e===on&&((qt&2)===0&&(Ps|=a),vn===4&&$a(e,zt,gi,!1)),$i(e))}function k0(e,n,a){if((qt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ce(e,n),u=o?db(e,n):zd(e,n,!0),f=o;do{if(u===0){xr&&!o&&$a(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!cb(a)){u=zd(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var R=e;u=To;var V=R.current.memoizedState.isDehydrated;if(V&&(br(R,v).flags|=256),v=zd(R,v,!1),v!==2){if(wd&&!V){R.errorRecoveryDisabledLanes|=f,Ps|=f,u=4;break e}f=ri,ri=u,f!==null&&(ri===null?ri=f:ri.push.apply(ri,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){br(e,0),$a(e,n,0,!0);break}e:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:$a(o,n,gi,!Za);break e;case 2:ri=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Gl+300-ke(),10<u)){if($a(o,n,gi,!Za),de(o,0,!0)!==0)break e;Ea=n,o.timeoutHandle=xg(j0.bind(null,o,a,ri,Xl,Rd,n,gi,Ps,vr,Za,f,"Throttled",-0,0),u);break e}j0(o,a,ri,Xl,Rd,n,gi,Ps,vr,Za,f,null,-0,0)}}break}while(!0);$i(e)}function j0(e,n,a,o,u,f,v,R,V,ce,Me,De,ge,ye){if(e.timeoutHandle=-1,De=n.subtreeFlags,De&8192||(De&16785408)===16785408){De={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},U0(n,f,De);var et=(f&62914560)===f?Gl-ke():(f&4194048)===f?I0-ke():0;if(et=qb(De,et),et!==null){Ea=f,e.cancelPendingCommit=et(Z0.bind(null,e,n,f,a,o,u,v,R,V,Me,De,null,ge,ye)),$a(e,f,v,!ce);return}}Z0(e,n,f,a,o,u,v,R,V)}function cb(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!di(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $a(e,n,a,o){n&=~Cd,n&=~Ps,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Ge(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&bt(e,a,n)}function Wl(){return(qt&6)===0?(wo(0),!1):!0}function Ud(){if(Lt!==null){if(Kt===0)var e=Lt.return;else e=Lt,ha=ws=null,Zu(e),ur=null,lo=0,e=Lt;for(;e!==null;)v0(e.alternate,e),e=e.return;Lt=null}}function br(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Rb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ea=0,Ud(),on=e,Lt=a=da(e.current,null),zt=n,Kt=0,mi=null,Za=!1,xr=Ce(e,n),wd=!1,vr=gi=Cd=Ps=Ka=vn=0,ri=To=null,Rd=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ge(o),f=1<<u;n|=e[u],o&=~f}return Ma=n,hl(),a}function H0(e,n){Tt=null,P.H=xo,n===cr||n===yl?(n=am(),Kt=3):n===Iu?(n=am(),Kt=4):Kt=n===dd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mi=n,Lt===null&&(vn=1,Ol(e,Si(n,e.current)))}function G0(){var e=hi.current;return e===null?!0:(zt&4194048)===zt?Ai===null:(zt&62914560)===zt||(zt&536870912)!==0?e===Ai:!1}function V0(){var e=P.H;return P.H=xo,e===null?xo:e}function X0(){var e=P.A;return P.A=ob,e}function ql(){vn=4,Za||(zt&4194048)!==zt&&hi.current!==null||(xr=!0),(Ka&134217727)===0&&(Ps&134217727)===0||on===null||$a(on,zt,gi,!1)}function zd(e,n,a){var o=qt;qt|=2;var u=V0(),f=X0();(on!==e||zt!==n)&&(Xl=null,br(e,n)),n=!1;var v=vn;e:do try{if(Kt!==0&&Lt!==null){var R=Lt,V=mi;switch(Kt){case 8:Ud(),v=6;break e;case 3:case 2:case 9:case 6:hi.current===null&&(n=!0);var ce=Kt;if(Kt=0,mi=null,yr(e,R,V,ce),a&&xr){v=0;break e}break;default:ce=Kt,Kt=0,mi=null,yr(e,R,V,ce)}}ub(),v=vn;break}catch(Me){H0(e,Me)}while(!0);return n&&e.shellSuspendCounter++,ha=ws=null,qt=o,P.H=u,P.A=f,Lt===null&&(on=null,zt=0,hl()),v}function ub(){for(;Lt!==null;)W0(Lt)}function db(e,n){var a=qt;qt|=2;var o=V0(),u=X0();on!==e||zt!==n?(Xl=null,Vl=ke()+500,br(e,n)):xr=Ce(e,n);e:do try{if(Kt!==0&&Lt!==null){n=Lt;var f=mi;t:switch(Kt){case 1:Kt=0,mi=null,yr(e,n,f,1);break;case 2:case 9:if(nm(f)){Kt=0,mi=null,q0(n);break}n=function(){Kt!==2&&Kt!==9||on!==e||(Kt=7),$i(e)},f.then(n,n);break e;case 3:Kt=7;break e;case 4:Kt=5;break e;case 7:nm(f)?(Kt=0,mi=null,q0(n)):(Kt=0,mi=null,yr(e,n,f,7));break;case 5:var v=null;switch(Lt.tag){case 26:v=Lt.memoizedState;case 5:case 27:var R=Lt;if(v?Lg(v):R.stateNode.complete){Kt=0,mi=null;var V=R.sibling;if(V!==null)Lt=V;else{var ce=R.return;ce!==null?(Lt=ce,Yl(ce)):Lt=null}break t}}Kt=0,mi=null,yr(e,n,f,5);break;case 6:Kt=0,mi=null,yr(e,n,f,6);break;case 8:Ud(),vn=6;break e;default:throw Error(s(462))}}fb();break}catch(Me){H0(e,Me)}while(!0);return ha=ws=null,P.H=o,P.A=u,qt=a,Lt!==null?0:(on=null,zt=0,hl(),vn)}function fb(){for(;Lt!==null&&!gt();)W0(Lt)}function W0(e){var n=g0(e.alternate,e,Ma);e.memoizedProps=e.pendingProps,n===null?Yl(e):Lt=n}function q0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=u0(a,n,n.pendingProps,n.type,void 0,zt);break;case 11:n=u0(a,n,n.pendingProps,n.type.render,n.ref,zt);break;case 5:Zu(n);default:v0(a,n),n=Lt=Xp(n,Ma),n=g0(a,n,Ma)}e.memoizedProps=e.pendingProps,n===null?Yl(e):Lt=n}function yr(e,n,a,o){ha=ws=null,Zu(n),ur=null,lo=0;var u=n.return;try{if(eb(e,u,n,a,zt)){vn=1,Ol(e,Si(a,e.current)),Lt=null;return}}catch(f){if(u!==null)throw Lt=u,f;vn=1,Ol(e,Si(a,e.current)),Lt=null;return}n.flags&32768?(Pt||o===1?e=!0:xr||(zt&536870912)!==0?e=!1:(Za=e=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Y0(n,e)):Yl(n)}function Yl(e){var n=e;do{if((n.flags&32768)!==0){Y0(n,Za);return}e=n.return;var a=ib(n.alternate,n,Ma);if(a!==null){Lt=a;return}if(n=n.sibling,n!==null){Lt=n;return}Lt=n=e}while(n!==null);vn===0&&(vn=5)}function Y0(e,n){do{var a=ab(e.alternate,e);if(a!==null){a.flags&=32767,Lt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Lt=e;return}Lt=e=a}while(e!==null);vn=6,Lt=null}function Z0(e,n,a,o,u,f,v,R,V){e.cancelPendingCommit=null;do Zl();while(Dn!==0);if((qt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Su,$e(e,a,f,v,R,V),e===on&&(Lt=on=null,zt=0),_r=n,Ja=e,Ea=a,Nd=f,Dd=u,F0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gb(te,function(){return eg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=H.p,H.p=2,v=qt,qt|=4;try{sb(e,n,a)}finally{qt=v,H.p=u,P.T=o}}Dn=1,K0(),Q0(),J0()}}function K0(){if(Dn===1){Dn=0;var e=Ja,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var u=qt;qt|=4;try{N0(n,e);var f=Wd,v=Pp(e.containerInfo),R=f.focusedElem,V=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&Op(R.ownerDocument.documentElement,R)){if(V!==null&&xu(R)){var ce=V.start,Me=V.end;if(Me===void 0&&(Me=ce),"selectionStart"in R)R.selectionStart=ce,R.selectionEnd=Math.min(Me,R.value.length);else{var De=R.ownerDocument||document,ge=De&&De.defaultView||window;if(ge.getSelection){var ye=ge.getSelection(),et=R.textContent.length,dt=Math.min(V.start,et),tn=V.end===void 0?dt:Math.min(V.end,et);!ye.extend&&dt>tn&&(v=tn,tn=dt,dt=v);var ee=zp(R,dt),K=zp(R,tn);if(ee&&K&&(ye.rangeCount!==1||ye.anchorNode!==ee.node||ye.anchorOffset!==ee.offset||ye.focusNode!==K.node||ye.focusOffset!==K.offset)){var le=De.createRange();le.setStart(ee.node,ee.offset),ye.removeAllRanges(),dt>tn?(ye.addRange(le),ye.extend(K.node,K.offset)):(le.setEnd(K.node,K.offset),ye.addRange(le))}}}}for(De=[],ye=R;ye=ye.parentNode;)ye.nodeType===1&&De.push({element:ye,left:ye.scrollLeft,top:ye.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<De.length;R++){var Ae=De[R];Ae.element.scrollLeft=Ae.left,Ae.element.scrollTop=Ae.top}}oc=!!Xd,Wd=Xd=null}finally{qt=u,H.p=o,P.T=a}}e.current=n,Dn=2}}function Q0(){if(Dn===2){Dn=0;var e=Ja,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var u=qt;qt|=4;try{T0(e,n.alternate,n)}finally{qt=u,H.p=o,P.T=a}}Dn=3}}function J0(){if(Dn===4||Dn===3){Dn=0,jt();var e=Ja,n=_r,a=Ea,o=F0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Dn=5:(Dn=0,_r=Ja=null,$0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Qa=null),Wi(a),n=n.stateNode,se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=H.p,H.p=2,P.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var R=o[v];f(R.value,{componentStack:R.stack})}}finally{P.T=n,H.p=u}}(Ea&3)!==0&&Zl(),$i(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Ld?Ao++:(Ao=0,Ld=e):Ao=0,wo(0)}}function $0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ro(n)))}function Zl(){return K0(),Q0(),J0(),eg()}function eg(){if(Dn!==5)return!1;var e=Ja,n=Nd;Nd=0;var a=Wi(Ea),o=P.T,u=H.p;try{H.p=32>a?32:a,P.T=null,a=Dd,Dd=null;var f=Ja,v=Ea;if(Dn=0,_r=Ja=null,Ea=0,(qt&6)!==0)throw Error(s(331));var R=qt;if(qt|=4,O0(f.current),L0(f,f.current,v,a),qt=R,wo(0,!1),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{H.p=u,P.T=o,$0(e,n)}}function tg(e,n,a){n=Si(a,n),n=ud(e.stateNode,n,2),e=Xa(e,n,2),e!==null&&(Ie(e,2),$i(e))}function Qt(e,n,a){if(e.tag===3)tg(e,e,a);else for(;n!==null;){if(n.tag===3){tg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Qa===null||!Qa.has(o))){e=Si(a,e),a=n0(2),o=Xa(n,a,2),o!==null&&(i0(a,o,n,e),Ie(o,2),$i(o));break}}n=n.return}}function Od(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new lb;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(wd=!0,u.add(a),e=hb.bind(null,e,n,a),n.then(e,e))}function hb(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,on===e&&(zt&a)===a&&(vn===4||vn===3&&(zt&62914560)===zt&&300>ke()-Gl?(qt&2)===0&&br(e,0):Cd|=a,vr===zt&&(vr=0)),$i(e)}function ng(e,n){n===0&&(n=Re()),e=Es(e,n),e!==null&&(Ie(e,n),$i(e))}function pb(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ng(e,a)}function mb(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),ng(e,a)}function gb(e,n){return Q(e,n)}var Kl=null,Sr=null,Pd=!1,Ql=!1,Id=!1,es=0;function $i(e){e!==Sr&&e.next===null&&(Sr===null?Kl=Sr=e:Sr=Sr.next=e),Ql=!0,Pd||(Pd=!0,vb())}function wo(e,n){if(!Id&&Ql){Id=!0;do for(var a=!1,o=Kl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Ge(42|e)+1)-1,f&=u&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,rg(o,f))}else f=zt,f=de(o,o===on?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ce(o,f)||(a=!0,rg(o,f));o=o.next}while(a);Id=!1}}function xb(){ig()}function ig(){Ql=Pd=!1;var e=0;es!==0&&Cb()&&(e=es);for(var n=ke(),a=null,o=Kl;o!==null;){var u=o.next,f=ag(o,n);f===0?(o.next=null,a===null?Kl=u:a.next=u,u===null&&(Sr=a)):(a=o,(e!==0||(f&3)!==0)&&(Ql=!0)),o=u}Dn!==0&&Dn!==5||wo(e),es!==0&&(es=0)}function ag(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Ge(f),R=1<<v,V=u[v];V===-1?((R&a)===0||(R&o)!==0)&&(u[v]=ze(R,n)):V<=n&&(e.expiredLanes|=R),f&=~R}if(n=on,a=zt,a=de(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Nt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ce(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Nt(o),Wi(a)){case 2:case 8:a=E;break;case 32:a=te;break;case 268435456:a=Le;break;default:a=te}return o=sg.bind(null,e),a=Q(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Nt(o),e.callbackPriority=2,e.callbackNode=null,2}function sg(e,n){if(Dn!==0&&Dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zl()&&e.callbackNode!==a)return null;var o=zt;return o=de(e,e===on?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(k0(e,o,n),ag(e,ke()),e.callbackNode!=null&&e.callbackNode===a?sg.bind(null,e):null)}function rg(e,n){if(Zl())return null;k0(e,n,!0)}function vb(){Nb(function(){(qt&6)!==0?Q(L,xb):ig()})}function Fd(){if(es===0){var e=or;e===0&&(e=rt,rt<<=1,(rt&261888)===0&&(rt=256)),es=e}return es}function og(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bs(""+e)}function lg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function _b(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=og((u[sn]||null).action),v=o.submitter;v&&(n=(n=v[sn]||null)?og(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new cl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(es!==0){var V=v?lg(u,v):new FormData(u);ad(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(R.preventDefault(),V=v?lg(u,v):new FormData(u),ad(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var Bd=0;Bd<yu.length;Bd++){var kd=yu[Bd],bb=kd.toLowerCase(),yb=kd[0].toUpperCase()+kd.slice(1);Fi(bb,"on"+yb)}Fi(Bp,"onAnimationEnd"),Fi(kp,"onAnimationIteration"),Fi(jp,"onAnimationStart"),Fi("dblclick","onDoubleClick"),Fi("focusin","onFocus"),Fi("focusout","onBlur"),Fi(I_,"onTransitionRun"),Fi(F_,"onTransitionStart"),Fi(B_,"onTransitionCancel"),Fi(Hp,"onTransitionEnd"),pe("onMouseEnter",["mouseout","mouseover"]),pe("onMouseLeave",["mouseout","mouseover"]),pe("onPointerEnter",["pointerout","pointerover"]),pe("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function cg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],V=R.instance,ce=R.currentTarget;if(R=R.listener,V!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ce;try{f(u)}catch(Me){fl(Me)}u.currentTarget=null,f=V}else for(v=0;v<o.length;v++){if(R=o[v],V=R.instance,ce=R.currentTarget,R=R.listener,V!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ce;try{f(u)}catch(Me){fl(Me)}u.currentTarget=null,f=V}}}}function Ut(e,n){var a=n[Pi];a===void 0&&(a=n[Pi]=new Set);var o=e+"__bubble";a.has(o)||(ug(n,e,2,!1),a.add(o))}function jd(e,n,a){var o=0;n&&(o|=4),ug(a,e,o,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Hd(e){if(!e[Jl]){e[Jl]=!0,_s.forEach(function(a){a!=="selectionchange"&&(Sb.has(a)||jd(a,!1,e),jd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,jd("selectionchange",!1,n))}}function ug(e,n,a,o){switch(Bg(n)){case 2:var u=Kb;break;case 8:u=Qb;break;default:u=af}a=u.bind(null,n,a,e),u=void 0,!lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Gd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=o.return;v!==null;){var V=v.tag;if((V===3||V===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=Zn(R),v===null)return;if(V=v.tag,V===5||V===6||V===26||V===27){o=f=v;continue e}R=R.parentNode}}o=o.return}mp(function(){var ce=f,Me=ru(a),De=[];e:{var ge=Gp.get(e);if(ge!==void 0){var ye=cl,et=e;switch(e){case"keypress":if(ol(a)===0)break e;case"keydown":case"keyup":ye=m_;break;case"focusin":et="focus",ye=fu;break;case"focusout":et="blur",ye=fu;break;case"beforeblur":case"afterblur":ye=fu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=i_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=v_;break;case Bp:case kp:case jp:ye=r_;break;case Hp:ye=b_;break;case"scroll":case"scrollend":ye=t_;break;case"wheel":ye=S_;break;case"copy":case"cut":case"paste":ye=l_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=bp;break;case"toggle":case"beforetoggle":ye=E_}var dt=(n&4)!==0,tn=!dt&&(e==="scroll"||e==="scrollend"),ee=dt?ge!==null?ge+"Capture":null:ge;dt=[];for(var K=ce,le;K!==null;){var Ae=K;if(le=Ae.stateNode,Ae=Ae.tag,Ae!==5&&Ae!==26&&Ae!==27||le===null||ee===null||(Ae=Zr(K,ee),Ae!=null&&dt.push(Ro(K,Ae,le))),tn)break;K=K.return}0<dt.length&&(ge=new ye(ge,et,null,a,Me),De.push({event:ge,listeners:dt}))}}if((n&7)===0){e:{if(ge=e==="mouseover"||e==="pointerover",ye=e==="mouseout"||e==="pointerout",ge&&a!==su&&(et=a.relatedTarget||a.fromElement)&&(Zn(et)||et[Oi]))break e;if((ye||ge)&&(ge=Me.window===Me?Me:(ge=Me.ownerDocument)?ge.defaultView||ge.parentWindow:window,ye?(et=a.relatedTarget||a.toElement,ye=ce,et=et?Zn(et):null,et!==null&&(tn=c(et),dt=et.tag,et!==tn||dt!==5&&dt!==27&&dt!==6)&&(et=null)):(ye=null,et=ce),ye!==et)){if(dt=vp,Ae="onMouseLeave",ee="onMouseEnter",K="mouse",(e==="pointerout"||e==="pointerover")&&(dt=bp,Ae="onPointerLeave",ee="onPointerEnter",K="pointer"),tn=ye==null?ge:qi(ye),le=et==null?ge:qi(et),ge=new dt(Ae,K+"leave",ye,a,Me),ge.target=tn,ge.relatedTarget=le,Ae=null,Zn(Me)===ce&&(dt=new dt(ee,K+"enter",et,a,Me),dt.target=le,dt.relatedTarget=tn,Ae=dt),tn=Ae,ye&&et)t:{for(dt=Mb,ee=ye,K=et,le=0,Ae=ee;Ae;Ae=dt(Ae))le++;Ae=0;for(var lt=K;lt;lt=dt(lt))Ae++;for(;0<le-Ae;)ee=dt(ee),le--;for(;0<Ae-le;)K=dt(K),Ae--;for(;le--;){if(ee===K||K!==null&&ee===K.alternate){dt=ee;break t}ee=dt(ee),K=dt(K)}dt=null}else dt=null;ye!==null&&dg(De,ge,ye,dt,!1),et!==null&&tn!==null&&dg(De,tn,et,dt,!0)}}e:{if(ge=ce?qi(ce):window,ye=ge.nodeName&&ge.nodeName.toLowerCase(),ye==="select"||ye==="input"&&ge.type==="file")var Gt=Cp;else if(Ap(ge))if(Rp)Gt=z_;else{Gt=L_;var nt=D_}else ye=ge.nodeName,!ye||ye.toLowerCase()!=="input"||ge.type!=="checkbox"&&ge.type!=="radio"?ce&&Yt(ce.elementType)&&(Gt=Cp):Gt=U_;if(Gt&&(Gt=Gt(e,ce))){wp(De,Gt,a,Me);break e}nt&&nt(e,ge,ce),e==="focusout"&&ce&&ge.type==="number"&&ce.memoizedProps.value!=null&&xt(ge,"number",ge.value)}switch(nt=ce?qi(ce):window,e){case"focusin":(Ap(nt)||nt.contentEditable==="true")&&($s=nt,vu=ce,io=null);break;case"focusout":io=vu=$s=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Ip(De,a,Me);break;case"selectionchange":if(P_)break;case"keydown":case"keyup":Ip(De,a,Me)}var At;if(pu)e:{switch(e){case"compositionstart":var Ot="onCompositionStart";break e;case"compositionend":Ot="onCompositionEnd";break e;case"compositionupdate":Ot="onCompositionUpdate";break e}Ot=void 0}else Js?Ep(e,a)&&(Ot="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ot="onCompositionStart");Ot&&(yp&&a.locale!=="ko"&&(Js||Ot!=="onCompositionStart"?Ot==="onCompositionEnd"&&Js&&(At=gp()):(Fa=Me,cu="value"in Fa?Fa.value:Fa.textContent,Js=!0)),nt=$l(ce,Ot),0<nt.length&&(Ot=new _p(Ot,e,null,a,Me),De.push({event:Ot,listeners:nt}),At?Ot.data=At:(At=Tp(a),At!==null&&(Ot.data=At)))),(At=A_?w_(e,a):C_(e,a))&&(Ot=$l(ce,"onBeforeInput"),0<Ot.length&&(nt=new _p("onBeforeInput","beforeinput",null,a,Me),De.push({event:nt,listeners:Ot}),nt.data=At)),_b(De,e,ce,a,Me)}cg(De,n)})}function Ro(e,n,a){return{instance:e,listener:n,currentTarget:a}}function $l(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Zr(e,a),u!=null&&o.unshift(Ro(e,u,f)),u=Zr(e,n),u!=null&&o.push(Ro(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Mb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dg(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var R=a,V=R.alternate,ce=R.stateNode;if(R=R.tag,V!==null&&V===o)break;R!==5&&R!==26&&R!==27||ce===null||(V=ce,u?(ce=Zr(a,f),ce!=null&&v.unshift(Ro(a,ce,V))):u||(ce=Zr(a,f),ce!=null&&v.push(Ro(a,ce,V)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Eb=/\r\n?/g,Tb=/\u0000|\uFFFD/g;function fg(e){return(typeof e=="string"?e:""+e).replace(Eb,`
`).replace(Tb,"")}function hg(e,n){return n=fg(n),fg(e)===n}function en(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Kn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Kn(e,""+o);break;case"className":ue(e,"class",o);break;case"tabIndex":ue(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ue(e,a,o);break;case"style":ft(e,o,f);break;case"data":if(n!=="object"){ue(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=bs(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&en(e,n,"name",u.name,u,null),en(e,n,"formEncType",u.formEncType,u,null),en(e,n,"formMethod",u.formMethod,u,null),en(e,n,"formTarget",u.formTarget,u,null)):(en(e,n,"encType",u.encType,u,null),en(e,n,"method",u.method,u,null),en(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=bs(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ca);break;case"onScroll":o!=null&&Ut("scroll",e);break;case"onScrollEnd":o!=null&&Ut("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=bs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ut("beforetoggle",e),Ut("toggle",e),B(e,"popover",o);break;case"xlinkActuate":xe(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":xe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":xe(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":xe(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":xe(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":xe(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":xe(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":xe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":xe(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":B(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zi.get(a)||a,B(e,a,o))}}function Vd(e,n,a,o,u,f){switch(a){case"style":ft(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Kn(e,o):(typeof o=="number"||typeof o=="bigint")&&Kn(e,""+o);break;case"onScroll":o!=null&&Ut("scroll",e);break;case"onScrollEnd":o!=null&&Ut("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):B(e,a,o)}}}function jn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ut("error",e),Ut("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:en(e,n,f,v,a,null)}}u&&en(e,n,"srcSet",a.srcSet,a,null),o&&en(e,n,"src",a.src,a,null);return;case"input":Ut("invalid",e);var R=f=v=u=null,V=null,ce=null;for(o in a)if(a.hasOwnProperty(o)){var Me=a[o];if(Me!=null)switch(o){case"name":u=Me;break;case"type":v=Me;break;case"checked":V=Me;break;case"defaultChecked":ce=Me;break;case"value":f=Me;break;case"defaultValue":R=Me;break;case"children":case"dangerouslySetInnerHTML":if(Me!=null)throw Error(s(137,n));break;default:en(e,n,o,Me,a,null)}}rn(e,f,R,V,ce,v,u,!1);return;case"select":Ut("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:en(e,n,u,R,a,null)}n=f,a=v,e.multiple=!!o,n!=null?un(e,!!o,n,!1):a!=null&&un(e,!!o,a,!0);return;case"textarea":Ut("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:en(e,n,v,R,a,null)}Nn(e,o,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:en(e,n,V,o,a,null)}return;case"dialog":Ut("beforetoggle",e),Ut("toggle",e),Ut("cancel",e),Ut("close",e);break;case"iframe":case"object":Ut("load",e);break;case"video":case"audio":for(o=0;o<Co.length;o++)Ut(Co[o],e);break;case"image":Ut("error",e),Ut("load",e);break;case"details":Ut("toggle",e);break;case"embed":case"source":case"link":Ut("error",e),Ut("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ce in a)if(a.hasOwnProperty(ce)&&(o=a[ce],o!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:en(e,n,ce,o,a,null)}return;default:if(Yt(n)){for(Me in a)a.hasOwnProperty(Me)&&(o=a[Me],o!==void 0&&Vd(e,n,Me,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&en(e,n,R,o,a,null))}function Ab(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,R=null,V=null,ce=null,Me=null;for(ye in a){var De=a[ye];if(a.hasOwnProperty(ye)&&De!=null)switch(ye){case"checked":break;case"value":break;case"defaultValue":V=De;default:o.hasOwnProperty(ye)||en(e,n,ye,null,o,De)}}for(var ge in o){var ye=o[ge];if(De=a[ge],o.hasOwnProperty(ge)&&(ye!=null||De!=null))switch(ge){case"type":f=ye;break;case"name":u=ye;break;case"checked":ce=ye;break;case"defaultChecked":Me=ye;break;case"value":v=ye;break;case"defaultValue":R=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(s(137,n));break;default:ye!==De&&en(e,n,ge,ye,o,De)}}Xe(e,v,R,V,ce,Me,f,u);return;case"select":ye=v=R=ge=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":ye=V;default:o.hasOwnProperty(f)||en(e,n,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":ge=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==V&&en(e,n,u,f,o,V)}n=R,a=v,o=ye,ge!=null?un(e,!!a,ge,!1):!!o!=!!a&&(n!=null?un(e,!!a,n,!0):un(e,!!a,a?[]:"",!1));return;case"textarea":ye=ge=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:en(e,n,R,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":ge=u;break;case"defaultValue":ye=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&en(e,n,v,u,o,f)}In(e,ge,ye);return;case"option":for(var et in a)if(ge=a[et],a.hasOwnProperty(et)&&ge!=null&&!o.hasOwnProperty(et))switch(et){case"selected":e.selected=!1;break;default:en(e,n,et,null,o,ge)}for(V in o)if(ge=o[V],ye=a[V],o.hasOwnProperty(V)&&ge!==ye&&(ge!=null||ye!=null))switch(V){case"selected":e.selected=ge&&typeof ge!="function"&&typeof ge!="symbol";break;default:en(e,n,V,ge,o,ye)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var dt in a)ge=a[dt],a.hasOwnProperty(dt)&&ge!=null&&!o.hasOwnProperty(dt)&&en(e,n,dt,null,o,ge);for(ce in o)if(ge=o[ce],ye=a[ce],o.hasOwnProperty(ce)&&ge!==ye&&(ge!=null||ye!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:en(e,n,ce,ge,o,ye)}return;default:if(Yt(n)){for(var tn in a)ge=a[tn],a.hasOwnProperty(tn)&&ge!==void 0&&!o.hasOwnProperty(tn)&&Vd(e,n,tn,void 0,o,ge);for(Me in o)ge=o[Me],ye=a[Me],!o.hasOwnProperty(Me)||ge===ye||ge===void 0&&ye===void 0||Vd(e,n,Me,ge,o,ye);return}}for(var ee in a)ge=a[ee],a.hasOwnProperty(ee)&&ge!=null&&!o.hasOwnProperty(ee)&&en(e,n,ee,null,o,ge);for(De in o)ge=o[De],ye=a[De],!o.hasOwnProperty(De)||ge===ye||ge==null&&ye==null||en(e,n,De,ge,o,ye)}function pg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,R=u.duration;if(f&&R&&pg(v)){for(v=0,R=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],ce=V.startTime;if(ce>R)break;var Me=V.transferSize,De=V.initiatorType;Me&&pg(De)&&(V=V.responseEnd,v+=Me*(V<R?1:(R-ce)/(V-ce)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xd=null,Wd=null;function ec(e){return e.nodeType===9?e:e.ownerDocument}function mg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function qd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yd=null;function Cb(){var e=window.event;return e&&e.type==="popstate"?e===Yd?!1:(Yd=e,!0):(Yd=null,!1)}var xg=typeof setTimeout=="function"?setTimeout:void 0,Rb=typeof clearTimeout=="function"?clearTimeout:void 0,vg=typeof Promise=="function"?Promise:void 0,Nb=typeof queueMicrotask=="function"?queueMicrotask:typeof vg<"u"?function(e){return vg.resolve(null).then(e).catch(Db)}:xg;function Db(e){setTimeout(function(){throw e})}function ts(e){return e==="head"}function _g(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Ar(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")No(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,No(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[Ii]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&No(e.ownerDocument.body);a=u}while(a);Ar(n)}function bg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Zd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zd(a),vs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Lb(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ii])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=wi(e.nextSibling),e===null)break}return null}function Ub(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wi(e.nextSibling),e===null))return null;return e}function yg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=wi(e.nextSibling),e===null))return null;return e}function Kd(e){return e.data==="$?"||e.data==="$~"}function Qd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zb(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function wi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Jd=null;function Sg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return wi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Mg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Eg(e,n,a){switch(n=ec(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function No(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);vs(e)}var Ci=new Map,Tg=new Set;function tc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ta=H.d;H.d={f:Ob,r:Pb,D:Ib,C:Fb,L:Bb,m:kb,X:Hb,S:jb,M:Gb};function Ob(){var e=Ta.f(),n=Wl();return e||n}function Pb(e){var n=ti(e);n!==null&&n.tag===5&&n.type==="form"?Hm(n):Ta.r(e)}var Mr=typeof document>"u"?null:document;function Ag(e,n,a){var o=Mr;if(o&&typeof n=="string"&&n){var u=pt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Tg.has(u)||(Tg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),jn(n,"link",e),gn(n),o.head.appendChild(n)))}}function Ib(e){Ta.D(e),Ag("dns-prefetch",e,null)}function Fb(e,n){Ta.C(e,n),Ag("preconnect",e,n)}function Bb(e,n,a){Ta.L(e,n,a);var o=Mr;if(o&&e&&n){var u='link[rel="preload"][as="'+pt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pt(a.imageSizes)+'"]')):u+='[href="'+pt(e)+'"]';var f=u;switch(n){case"style":f=Er(e);break;case"script":f=Tr(e)}Ci.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ci.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Do(f))||n==="script"&&o.querySelector(Lo(f))||(n=o.createElement("link"),jn(n,"link",e),gn(n),o.head.appendChild(n)))}}function kb(e,n){Ta.m(e,n);var a=Mr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pt(o)+'"][href="'+pt(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Tr(e)}if(!Ci.has(f)&&(e=_({rel:"modulepreload",href:e},n),Ci.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(f)))return}o=a.createElement("link"),jn(o,"link",e),gn(o),a.head.appendChild(o)}}}function jb(e,n,a){Ta.S(e,n,a);var o=Mr;if(o&&e){var u=Yi(o).hoistableStyles,f=Er(e);n=n||"default";var v=u.get(f);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(Do(f)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ci.get(f))&&$d(e,a);var V=v=o.createElement("link");gn(V),jn(V,"link",e),V._p=new Promise(function(ce,Me){V.onload=ce,V.onerror=Me}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,nc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(f,v)}}}function Hb(e,n){Ta.X(e,n);var a=Mr;if(a&&e){var o=Yi(a).hoistableScripts,u=Tr(e),f=o.get(u);f||(f=a.querySelector(Lo(u)),f||(e=_({src:e,async:!0},n),(n=Ci.get(u))&&ef(e,n),f=a.createElement("script"),gn(f),jn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Gb(e,n){Ta.M(e,n);var a=Mr;if(a&&e){var o=Yi(a).hoistableScripts,u=Tr(e),f=o.get(u);f||(f=a.querySelector(Lo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=Ci.get(u))&&ef(e,n),f=a.createElement("script"),gn(f),jn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function wg(e,n,a,o){var u=(u=J.current)?tc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Er(a.href),a=Yi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Er(a.href);var f=Yi(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Do(e)))&&!f._p&&(v.instance=f,v.state.loading=5),Ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(e,a),f||Vb(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Tr(a),a=Yi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Er(e){return'href="'+pt(e)+'"'}function Do(e){return'link[rel="stylesheet"]['+e+"]"}function Cg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Vb(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),jn(n,"link",a),gn(n),e.head.appendChild(n))}function Tr(e){return'[src="'+pt(e)+'"]'}function Lo(e){return"script[async]"+e}function Rg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pt(a.href)+'"]');if(o)return n.instance=o,gn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),gn(o),jn(o,"style",u),nc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Er(a.href);var f=e.querySelector(Do(u));if(f)return n.state.loading|=4,n.instance=f,gn(f),f;o=Cg(a),(u=Ci.get(u))&&$d(o,u),f=(e.ownerDocument||e).createElement("link"),gn(f);var v=f;return v._p=new Promise(function(R,V){v.onload=R,v.onerror=V}),jn(f,"link",o),n.state.loading|=4,nc(f,a.precedence,e),n.instance=f;case"script":return f=Tr(a.src),(u=e.querySelector(Lo(f)))?(n.instance=u,gn(u),u):(o=a,(u=Ci.get(f))&&(o=_({},a),ef(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),gn(u),jn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,nc(o,a.precedence,e));return n.instance}function nc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function $d(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ef(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ic=null;function Ng(e,n,a){if(ic===null){var o=new Map,u=ic=new Map;u.set(a,o)}else u=ic,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ii]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var R=o.get(v);R?R.push(f):o.set(v,[f])}}return o}function Dg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Xb(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Lg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Wb(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Er(o.href),f=n.querySelector(Do(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ac.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,gn(f);return}f=n.ownerDocument||n,o=Cg(o),(u=Ci.get(u))&&$d(o,u),f=f.createElement("link"),gn(f);var v=f;v._p=new Promise(function(R,V){v.onload=R,v.onerror=V}),jn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ac.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var tf=0;function qb(e,n){return e.stylesheets&&e.count===0&&rc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&tf===0&&(tf=62500*wb());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>tf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sc=null;function rc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sc=new Map,n.forEach(Yb,e),sc=null,ac.call(e))}function Yb(e,n){if(!(n.state.loading&4)){var a=sc.get(e);if(a)var o=a.get(null);else{a=new Map,sc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=ac.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Uo={$$typeof:z,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Zb(e,n,a,o,u,f,v,R,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Je(0),this.hiddenUpdates=Je(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Ug(e,n,a,o,u,f,v,R,V,ce,Me,De){return e=new Zb(e,n,a,v,V,ce,Me,De,R),n=1,f===!0&&(n|=24),f=fi(3,null,null,n),e.current=f,f.stateNode=e,n=zu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Fu(f),e}function zg(e){return e?(e=nr,e):nr}function Og(e,n,a,o,u,f){u=zg(u),o.context===null?o.context=u:o.pendingContext=u,o=Va(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Xa(e,o,n),a!==null&&(oi(a,e,n),uo(a,e,n))}function Pg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function nf(e,n){Pg(e,n),(e=e.alternate)&&Pg(e,n)}function Ig(e){if(e.tag===13||e.tag===31){var n=Es(e,67108864);n!==null&&oi(n,e,67108864),nf(e,67108864)}}function Fg(e){if(e.tag===13||e.tag===31){var n=xi();n=ot(n);var a=Es(e,n);a!==null&&oi(a,e,n),nf(e,n)}}var oc=!0;function Kb(e,n,a,o){var u=P.T;P.T=null;var f=H.p;try{H.p=2,af(e,n,a,o)}finally{H.p=f,P.T=u}}function Qb(e,n,a,o){var u=P.T;P.T=null;var f=H.p;try{H.p=8,af(e,n,a,o)}finally{H.p=f,P.T=u}}function af(e,n,a,o){if(oc){var u=sf(o);if(u===null)Gd(e,n,o,lc,a),kg(e,o);else if($b(u,e,n,a,o))o.stopPropagation();else if(kg(e,o),n&4&&-1<Jb.indexOf(e)){for(;u!==null;){var f=ti(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=he(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var V=1<<31-Ge(v);R.entanglements[1]|=V,v&=~V}$i(f),(qt&6)===0&&(Vl=ke()+500,wo(0))}}break;case 31:case 13:R=Es(f,2),R!==null&&oi(R,f,2),Wl(),nf(f,2)}if(f=sf(o),f===null&&Gd(e,n,o,lc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Gd(e,n,o,null,a)}}function sf(e){return e=ru(e),rf(e)}var lc=null;function rf(e){if(lc=null,e=Zn(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=m(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return lc=e,null}function Bg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case L:return 2;case E:return 8;case te:case Ee:return 32;case Le:return 268435456;default:return 32}default:return 32}}var of=!1,ns=null,is=null,as=null,zo=new Map,Oo=new Map,ss=[],Jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kg(e,n){switch(e){case"focusin":case"focusout":ns=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ti(n),n!==null&&Ig(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function $b(e,n,a,o,u){switch(n){case"focusin":return ns=Po(ns,e,n,a,o,u),!0;case"dragenter":return is=Po(is,e,n,a,o,u),!0;case"mouseover":return as=Po(as,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return zo.set(f,Po(zo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Oo.set(f,Po(Oo.get(f)||null,e,n,a,o,u)),!0}return!1}function jg(e){var n=Zn(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,bi(e.priority,function(){Fg(a)});return}}else if(n===31){if(n=m(a),n!==null){e.blockedOn=n,bi(e.priority,function(){Fg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=sf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);su=o,a.target.dispatchEvent(o),su=null}else return n=ti(a),n!==null&&Ig(n),e.blockedOn=a,!1;n.shift()}return!0}function Hg(e,n,a){cc(e)&&a.delete(n)}function ey(){of=!1,ns!==null&&cc(ns)&&(ns=null),is!==null&&cc(is)&&(is=null),as!==null&&cc(as)&&(as=null),zo.forEach(Hg),Oo.forEach(Hg)}function uc(e,n){e.blockedOn===n&&(e.blockedOn=null,of||(of=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ey)))}var dc=null;function Gg(e){dc!==e&&(dc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){dc===e&&(dc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(rf(o||a)===null)continue;break}var f=ti(a);f!==null&&(e.splice(n,3),n-=3,ad(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ar(e){function n(V){return uc(V,e)}ns!==null&&uc(ns,e),is!==null&&uc(is,e),as!==null&&uc(as,e),zo.forEach(n),Oo.forEach(n);for(var a=0;a<ss.length;a++){var o=ss[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ss.length&&(a=ss[0],a.blockedOn===null);)jg(a),a.blockedOn===null&&ss.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[sn]||null;if(typeof f=="function")v||Gg(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[sn]||null)R=v.formAction;else if(rf(u)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Gg(a)}}}function Vg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function lf(e){this._internalRoot=e}fc.prototype.render=lf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=xi();Og(a,o,e,n,null,null)},fc.prototype.unmount=lf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Og(e.current,2,null,e,null,null),Wl(),n[Oi]=null}};function fc(e){this._internalRoot=e}fc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ei();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ss.length&&n!==0&&n<ss[a].priority;a++);ss.splice(a,0,e),a===0&&jg(e)}};var Xg=t.version;if(Xg!=="19.2.7")throw Error(s(527,Xg,"19.2.7"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var ty={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{be=hc.inject(ty),se=hc}catch{}}return Fo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Jm,f=$m,v=e0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Ug(e,1,!1,null,null,a,o,null,u,f,v,Vg),e[Oi]=n.current,Hd(e),new lf(n)},Fo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Jm,v=$m,R=e0,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Ug(e,1,!0,n,a??null,o,u,V,f,v,R,Vg),n.context=zg(null),a=n.current,o=xi(),o=ot(o),u=Va(o),u.callback=null,Xa(a,u,o),a=o,n.current.lanes=a,Ie(n,a),$i(n),e[Oi]=n.current,Hd(e),new fc(n)},Fo.version="19.2.7",Fo}var tx;function dy(){if(tx)return df.exports;tx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),df.exports=uy(),df.exports}var fy=dy();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),py=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),nx=r=>{const t=py(r);return t.charAt(0).toUpperCase()+t.slice(1)},fv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),my=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=Oe.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...m},g)=>Oe.createElement("svg",{ref:g,...gy,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:fv("lucide",l),...!c&&!my(m)&&{"aria-hidden":"true"},...m},[...h.map(([p,y])=>Oe.createElement(p,y)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=(r,t)=>{const i=Oe.forwardRef(({className:s,...l},c)=>Oe.createElement(xy,{ref:c,iconNode:t,className:fv(`lucide-${hy(nx(r))}`,`lucide-${r}`,s),...l}));return i.displayName=nx(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],_y=_t("arrow-up",vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],hv=_t("award",by);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Sy=_t("book-open",yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"m11 10 3 3",key:"fzmg1i"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",key:"p4q2r7"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",key:"wy6l02"}]],ix=_t("brush",My);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Ty=_t("calendar",Ey);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Wc=_t("check",Ay);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Cy=_t("chevron-left",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ny=_t("chevron-right",Ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],pv=_t("clock",Dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ax=_t("compass",Ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],zy=_t("copy",Uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],pc=_t("cpu",Oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Zh=_t("download",Py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],Fy=_t("eraser",Iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ky=_t("external-link",By);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Hy=_t("file-spreadsheet",jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Vy=_t("file-text",Gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],sx=_t("git-branch",Xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],mc=_t("github",Wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],mf=_t("instagram",qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Zy=_t("layers",Yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],gf=_t("linkedin",Ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Jy=_t("mail",Qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],e1=_t("map-pin",$y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],n1=_t("maximize-2",t1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],a1=_t("minimize-2",i1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],r1=_t("network",s1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],rx=_t("palette",o1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],mv=_t("phone-call",l1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],u1=_t("play",c1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],f1=_t("quote",d1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],p1=_t("redo-2",h1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],gv=_t("refresh-cw",m1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],ox=_t("rocket",g1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],lx=_t("search",x1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],xv=_t("send",v1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}]],b1=_t("sparkle",_1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Wo=_t("sparkles",y1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],M1=_t("terminal",S1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],cx=_t("trash-2",E1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],A1=_t("undo-2",T1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],xf=_t("user",w1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],vf=_t("volume-2",C1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],_f=_t("volume-x",R1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],D1=_t("workflow",N1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ux=_t("x",L1),nn={name:"Farhan Kabir",title:"AI Engineer | Full-Stack Developer | Specializing in Agentic Workflows & NLP | Mental Health |",tagline:"Designing deep linguistic networks to analyze cognitive states, autism indicators, and mental-health text semantics.",about:"I am an AI Engineer, Researcher, and Full Stack Developer. I build highly robust predictive AI systems, conduct quantitative linguistic analysis, and implement Stripe-polished digital experiences.",focus:"Evaluating Large Language Models for automated cognitive health screenings and zero-shot NLP behavioral diagnostic support.",projects:[{id:"typerush",title:"TypeRush",description:"An immersive, atmospheric typing survival game with real-time sound synthesis, particle effects, and adaptive visual themes.",category:"AI",techStack:["React 19","TailwindCSS","Web Audio API","Express","Gemini API","Firebase"],architecture:"Zero-re-render character buffer ref grids running at stable 60fps, integrated with a server-side Gemini 3.5 API and real-time Firestore synchronization.",timeline:"Sep 2024 - Mar 2025",metrics:[{label:"Audio latency",value:"0ms (Vanilla)"},{label:"Matchmaking Sync",value:"<25ms"},{label:"Frame rate",value:"60fps"}],problem:"Traditional typing practice software lacks sensory engagement and interactive mechanics.",solution:"TypeRush translates text into kinetic physics bodies drifting towards cockpit shield barriers, utilizing Web Audio oscillators and AI-generated themes.",roadmap:["Real-time payload glitch attacks","WebAssembly client-side offline dictionary sync"]},{id:"ink-home",title:"The Ink Home",description:"An immersive 3D spatial publication portal and dynamic metadata indexer that syncs Medium RSS feeds into interactive WebGL carousels.",category:"Productivity",techStack:["React 18","Vite","Three.js","Framer Motion","TailwindCSS","Node.js"],architecture:"Four-tier cascade HTTP profile scraper separating client IPs from Medium telemetry blocks, coupled with local SQLite indexing.",timeline:"Jan 2025 - Present",metrics:[{label:"Avatar fetch success",value:"100%"},{label:"RSS sync latency",value:"<320ms"},{label:"Scene frame rate",value:"60fps"}],problem:"Traditional editorial blogs use flat, uninspired layouts and struggle to fetch writer profiles through Cloudflare.",solution:"The Ink Home structures publication feeds into physics-based 3D carousels and bento grids, utilizing backend User-Agent masquerading and proxies.",roadmap:["WebGL spatial audio integration","Instant newsletter subscription via Substack API"]},{id:"safeside",title:"SafeSide Predictor",description:"A tactical football analytics command center providing live match simulations, league databases, and deep Poisson risk modeling.",category:"SaaS",techStack:["React","Supabase","TailwindCSS","Express","Gemini AI","Recharts"],architecture:"Express backend match simulation pipeline integrated with Supabase edge tables and a cron-scheduled prediction verification service.",timeline:"Mar 2025 - Present",metrics:[{label:"Poisson model F1",value:"0.88"},{label:"Live updates latency",value:"<150ms"},{label:"Prediction checks",value:"Automated"}],problem:"Football tactical analysis and predictions are highly fragmented, lacking real-time simulations and secure prediction logging.",solution:"SafeSide combines live result feeds from Football-Data API with Gemini AI analysis and Supabase storage to automate match diagnostics.",roadmap:["Weather-impact modeling via OpenWeather API","Multi-league Poisson distribution charts"]},{id:"emotion-detection",title:"Multimodal Emotion Recognizer",description:"A neural model correlating micro-shifts in vocal pitch with linguistic markers in real-time chat data to form high-fidelity emotional feedback loops.",category:"NLP",techStack:["Python","BERT","Wav2Vec 2.0","React","FastAPI"],architecture:"Bimodal architecture merging a spectrogram acoustic encoder with a transformer text classifier using an attention-weighted fusion layer.",timeline:"Feb 2023 - Oct 2023",metrics:[{label:"Bimodal accuracy",value:"92.3%"},{label:"Speech inference",value:"18ms"},{label:"Dataset size",value:"50GB"}],problem:"Linguistic-only sentiment analysis fails to capture sarcasm, urgency, or vocalized psychological distress of remote clinical patients.",solution:"This project fuses audio tonal variance with text semantic embeddings, allowing diagnostic assistants to register non-verbal mood changes.",roadmap:["Edge deployment on mobile web views","Expansion to diagnostic indicators for pediatric developmental screens"]},{id:"portfolio-os",title:"FarhanOS Living Environment",description:"The interactive AI-powered operating sandbox displaying deep visual performance, real-time audio narrator engines, and complete project orchestration.",category:"Design",techStack:["React","TailwindCSS","Framer Motion","Express","Gemini API"],architecture:"Unidirectional virtualized OS window controller with standard sandbox processes and real-time TTS speech generators.",timeline:"Mar 2026 - Present",metrics:[{label:"Render pipeline frame rate",value:"120fps"},{label:"Asset payload size",value:"142KB"},{label:"Custom APIs",value:"3"}],problem:"Static grid portfolios fail to showcase the sophisticated architectural capabilities, design sensibilities, and core AI engineering talents of top-tier builders.",solution:"FarhanOS encapsulates complete interactive applications into a beautiful, cohesive operating desktop running local simulator widgets.",roadmap:["Add support for complete sandboxed terminal commands","Introduce voice command parsing natively via browser audio APIs"]}],papers:[{id:"prompt-break-2025",title:"Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs",authors:"Rifat Ahmed Khan, Tasnia Tasnim Momo, Farhan Kabir, Faisal Muhammad Shah",journal:"IEEE ICCIT",year:2025,abstract:"Large Language Models (LLMs) are vulnerable to adversarial prompt injection attacks that bypass safety alignments. This paper proposes a perplexity-based detection framework to flag adversarial prompt injections. By measuring the perplexity of input tokens, the system classifies adversarial requests in real-time before they propagate to the LLM core, securing safety alignments.",methodology:"Calculated perplexity thresholds using local causal LLM token prediction distributions. Built a real-time detection barrier filtering out adversarial inputs.",dataset:"Adversarial prompt datasets (AdvGLUE, Jailbreak Trigger Sets) combined with clean user queries.",pipeline:"User Prompt -> Tokenization -> Perplexity Scoring -> Threshold Boundary check -> LLM Ingestion / Block Alert.",results:[{metric:"Detection Accuracy",score:"94.2%"},{metric:"False Positive Rate",score:"2.8%"},{metric:"Latency overhead",score:"4.5ms"},{metric:"Jailbreak F1 Score",score:"0.935"}],citation:"Khan, R. A., Momo, T. T., Kabir, F., & Shah, F. M. (2025). Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs. 2025 28th ICCIT (IEEE)."},{id:"live-interview-2025",title:"AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision",authors:"Farhan Kabir, M Arman Reza Shah, Razat Biswas",journal:"IEEE ICCIT",year:2025,abstract:"Traditional candidate assessment methods are manual, slow, and prone to subjective bias. This paper introduces an AI-driven live interview pipeline combining Natural Language Processing (NLP) for verbal responses and Computer Vision (CV) for facial sentiment and posture analytics. Real-time assessment scores are compiled dynamically during candidate streams.",methodology:"Fused Wav2Vec 2.0 acoustic transcripts with MediaPipe posture coordinates and custom BERT text classification heads using a late-fusion model.",dataset:"1,200 mock interview recordings annotated by human resource professionals.",pipeline:"Audio/Video Capture -> Transcripts & Keypoint Extraction -> Sentiment & Context Classifier -> Score Matrix Ingestion -> HR Dashboard.",results:[{metric:"Late-fusion Accuracy",score:"91.6%"},{metric:"Response Transcribing",score:"110ms"},{metric:"Posture classification",score:"93.2%"},{metric:"Evaluation Agreement",score:"0.87 (Kappa)"}],citation:"Kabir, F., Shah, M. A. R., & Biswas, R. (2025). AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision. 2025 28th ICCIT (IEEE)."},{id:"emotion-detection-2025",title:"Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques",authors:"Farhan Kabir, M. K. Habib Khan, Fazle Rabby",journal:"IEEE ECCE",year:2025,abstract:"Detecting emotions in text requires understanding context, syntax, and subtle semantic tones. This paper presents a comparative analysis of Natural Language Processing and machine learning models classifying clinical mental distress, depression, and localized emotional states. We demonstrate that custom Transformer models outperform traditional classifiers.",methodology:"Fine-tuned custom BERT and RoBERTa models augmented with emotion-specific classification layers mapping Reddit and social text datasets.",dataset:"90,000 annotated social network text posts spanning multiple clinical emotional distress tiers.",pipeline:"Raw text ingestion -> Lexical Normalization -> Embedding Matrix -> BERT/RoBERTa Classification -> Emotion Output.",results:[{metric:"BERT Accuracy",score:"88.5%"},{metric:"RoBERTa F1-Score",score:"0.908"},{metric:"Training latency",score:"1.2 hrs"},{metric:"Inference speed",score:"3.8ms"}],citation:"Kabir, F., Khan, M. K. H., & Rabby, F. (2025). Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques. 2025 ECCE (IEEE)."},{id:"depression-detection-2023",title:"Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques",authors:"Farhan Kabir, Md. Ali Hossain, A. F. M. Minhazur Rahman, Sadia Zaman Mishu",journal:"IEEE ICCIT",year:2023,abstract:"Linguistic anomalies on social media serve as crucial early indicators of clinical depression. We present a machine learning and transformer-based framework analyzing Reddit text discourse. Mapped negative pronoun density, sleep patterns, and vocabulary shifts, demonstrating strong predictive capabilities for diagnostic support.",methodology:"Fine-tuned RoBERTa models on clinical-grade Reddit depression datasets (r/depression) with custom POS weighting matrices.",dataset:"120,000 distinct anonymized posts annotated by clinical practitioners.",pipeline:"Text Normalization -> Feature Extraction (Lexical & Pronoun) -> RoBERTa Classification -> Clinician Alerts.",results:[{metric:"RoBERTa-Clinical F1",score:"0.914"},{metric:"Baseline Zero-shot F1",score:"0.781"},{metric:"Sensitivity",score:"0.893"},{metric:"Specificity",score:"0.942"}],citation:"Kabir, F., Hossain, M. A., Rahman, A. F. M. M., & Mishu, S. Z. (2023). Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques. 2023 26th ICCIT (IEEE)."}],timeline:[{year:2026,title:"Architect & AI Researcher",company:"Cognitive Diagnostics Lab",role:"Principal systems designer for text analytics and mental wellness semantic mapping NLP assets.",description:"Leading research on LLMs as clinical screening support tooling, authoring publications on clinical mental state evaluation.",achievements:["Designed custom zero-shot and classification-optimized clinical prediction systems","Implemented modern low-latency model evaluation dashboards processing high-volume text queues","Established rigid testing criteria ensuring patient confidentiality and data safety parameters"],technologies:["PyTorch","Transformer NLP","React/Next.js","Go","TailwindCSS v4"]},{year:2024,title:"Senior AI System Dev",company:"Synthetix Solutions",role:"Backend AI systems Architect constructing robust SaaS solutions for custom automation.",description:"Engineered backend pipeline components for TypeRush and SafeSide, connecting client data stores securely with deep learning backends.",achievements:["Decreased standard inference lag by over 30% through selective quantization and model distillation techniques","Built real-time telemetry systems capturing user performance states with sub-10ms capture profiles","Orchestrated automated data extraction workers scaling securely according to traffic profiles"],technologies:["Express/Node.js","Redis","Python","Docker","Google Cloud Platform"]},{year:2022,title:"Full Stack Engineer & Researcher",company:"Mental Health Tech",role:"Frontend lead and mental wellness text classifier research dev.",description:"Conducted rigorous fine-tuning experiments on classic BERT structures, designing clinical-grade data visualizers.",achievements:["Created the first generation interactive mental wellness support system evaluating distress levels","Co-authored 2 high-impact research publications outlining bimodal emotion evaluation metrics","Designed completely responsive portfolio workspaces utilizing high-frequency animations"],technologies:["React","Redux","D3.js","Hugging Face Transformers","Python/Flask"]},{year:2020,title:"Open Source Contributor & Dev",company:"Independent / Farhan Lab",role:"Developing open source utilities and studying linguistic text processing.",description:"Began building interactive web layouts, contributing heavily to developer workspaces and Markdown tooling libraries.",achievements:["Built and deployed TypeRush, an open-source terminal typing game","Developed interactive developer portfolios earning deep community feedback","Acquired expertise in system design, Docker containers, and React orchestration"],technologies:["React","Docker","Framer Motion","Node.js","SQLite"]}],professionalTimeline:[{year:"April 2024 - Present",title:"Lead Developer",company:"Auto Spark",role:"Lead Developer",description:"Developed responsive web applications, ensuring compatibility across various browsers and devices. Implemented efficient front-end solutions and collaborated on back-end development tasks.",achievements:["Developed responsive web applications, ensuring compatibility across various browsers and devices.","Implemented efficient front-end solutions and collaborated on back-end development tasks."],technologies:["TypeScript","React","REST APIs","Node.js","Tailwind"],badgeColor:"emerald"},{year:"2022 - 2023",title:"Full Stack Developer (Remote)",company:"Hire My Tech",role:"Full Stack Developer",description:"Built responsive web applications using React and modern JavaScript frameworks, collaborated with design team on user experience improvements.",achievements:["Built responsive web applications using React and modern JavaScript frameworks.","Collaborated with design team on user experience improvements."],technologies:["React","Next.js","PostgreSQL","Dexie.js","Tailwind"],badgeColor:"indigo"},{year:"2020 - 2021",title:"UI/UX Designer",company:"Design Studio",role:"UI/UX Designer",description:"Created user-centered designs for web and mobile applications, conducted user research and usability testing.",achievements:["Created user-centered designs for web and mobile applications.","Conducted user research and usability testing."],technologies:["TypeScript","Node.js","SQLite","Tailwind"],badgeColor:"pink"},{year:"2019 - 2020",title:"Junior Developer",company:"WebAgency",role:"Junior Developer",description:"Developed websites and web applications, learned modern development practices and agile methodologies.",achievements:["Developed websites and web applications.","Learned modern development practices and agile methodologies."],technologies:["Next.js","Webpack","CSS Modules","Node.js"],badgeColor:"amber"}],articles:[{id:"nlp-advances-2026",title:"The Shift Towards Fine-Grained Semantic Analysis in Diagnostic AI",category:"Research",readTime:"6 min read",date:"May 12, 2026",excerpt:"Why generic instruction-tuned LLMs cannot compete with ultra-targeted, tiny Transformers when diagnosing specific cognitive markers.",content:"Large Language Models (LLMs) excel at general reasoning, but clinical settings demand specialized models. A generic LLM trained to answer general queries frequently fails to spot the highly nuanced structural degradation occurring in clinical depression or early cognitive decline. Under closer evaluation, fine-tuning lightweight models (such as RoBERTa or custom BERT variations) on certified mental health datasets yields vastly superior classification accuracies. Furthermore, targeted models are small enough to run serverless, offering massive cost reductions and absolute data privacy compliance by executing locally on self-hosted servers."},{id:"saas-architecture-2025",title:"Designing Zero-Cold-Start SaaS Applications for Hugging Face Models",category:"Engineering",readTime:"8 min read",date:"Nov 24, 2025",excerpt:"An architect's blueprint on deploying containerized neural workloads for serverless pricing tiers without degrading user experience.",content:"Hosting large machine learning models is expensive, and container startup latency remains a significant friction point. By quantizing standard transformer architectures to ONNX and compiling models directly to WebAssembly (WASM), we can shift computational loads directly on the user's client device. In cases where server-side classification is mandatory, configuring Docker layers to preload weights during the container build stage reduces cold starts by over 70%. When combined with Redis caching, scale-to-zero serverless environments run smoothly without missing a beat."},{id:"ux-design-developers",title:"The Aesthetic Developer Engine: Why High-Performance Styling is Critical",category:"Design",readTime:"5 min read",date:"Jan 15, 2025",excerpt:"Crafting UI layouts that mirror real-time operational flows. How premium typography, subtle shadows, and responsive motion reinforce user trust.",content:"Developers commonly prioritize raw functional code over visual appearance, but human-computer interaction research demonstrates that visual aesthetics dictate user trust. A high-contrast, responsive interface with precise layout alignments communicates professional craftsmanship and reliability. By utilizing modern web styling frameworks, we can create incredibly smooth, beautiful, and accessible environments that enhance the user experience."}],buildLogs:[{id:"bl-v1.4",date:"May 2026",version:"v1.4.2",title:"Audio Node Fusion & Neural Voice Synthesizer",description:"Integrated server-side Text-to-Speech API directly using Gemini TTS models, delivering high-fidelity audio narration on-demand across FarhanOS articles.",tasksCompleted:["Constructed custom caching layer for audio binaries on the server","Implemented voice control deck with visual waveform indicator","Configured optimized low-footprint audio transmission protocols"],metricsChanged:[{metric:"Voice rendering",before:"Not Supported",after:"1.2s avg"},{metric:"Client weight",before:"1.4MB",after:"1.1MB"}]},{id:"bl-v1.3",date:"Feb 2026",version:"v1.3.0",title:"Command Palette & Context Engine Upgrade",description:"Engineered a global search utility enabling visitors to query project, research, and contact systems instantly via a keyboard-triggered modal.",tasksCompleted:["Built full-text token matching indexing portfolio vectors","Added smooth canvas overlays using Framer Motion","Mapped custom system operations (AI Site Tour, OS Theme Presets)"],metricsChanged:[{metric:"Search launch lag",before:"420ms",after:"3ms"},{metric:"Indices cached",before:"0",after:"48 items"}]}],skills:[{name:"PyTorch",category:"AI/ML",weight:5},{name:"Large Language Models",category:"AI/ML",weight:5},{name:"Hugging Face & BERT",category:"AI/ML",weight:5},{name:"Clinical NLP Pipelines",category:"AI/ML",weight:5},{name:"Python (NumPy, SciPy)",category:"AI/ML",weight:4},{name:"React / Next.js",category:"Frontend",weight:5},{name:"Tailwind CSS v4",category:"Frontend",weight:5},{name:"Framer Motion",category:"Frontend",weight:4},{name:"D3.js Visualization",category:"Frontend",weight:4},{name:"Node.js & Express",category:"Backend",weight:5},{name:"Go (Golang)",category:"Backend",weight:4},{name:"Redis Caching",category:"Backend",weight:4},{name:"PostgreSQL",category:"Backend",weight:5},{name:"Docker / Containers",category:"Systems & Devops",weight:5},{name:"Git & Linux",category:"Systems & Devops",weight:5},{name:"Academic Research",category:"Research & Science",weight:5},{name:"Mental Health Tech",category:"Research & Science",weight:5}],gardenNodes:[{id:"nlp",label:"Clinical NLP",category:"Research"},{id:"transformers",label:"Transformers",category:"Intelligence"},{id:"bert",label:"BERT Models",category:"Intelligence"},{id:"depression",label:"Depression Dialectics",category:"Research"},{id:"autism",label:"Autism Micro-shifts",category:"Research"},{id:"ethics",label:"Research Ethics",category:"Humanity"},{id:"saas",label:"AI SaaS Architectures",category:"Engineering"},{id:"telemetry",label:"Telemetry Profiling",category:"Engineering"},{id:"databases",label:"PostgreSQL Schema",category:"Engineering"}]};async function U1(r){const t=window.atob(r),i=t.length,s=new Uint8Array(i);for(let x=0;x<i;x++)s[x]=t.charCodeAt(x);const l=Math.floor(i/2),c=new Int16Array(s.buffer,0,l),h=window.AudioContext||window.webkitAudioContext;if(!h)throw new Error("Web Audio API is not supported in this browser.");const m=new h,p=m.createBuffer(1,l,24e3),y=p.getChannelData(0);for(let x=0;x<l;x++)y[x]=c[x]/32768;const _=m.createBufferSource();return _.buffer=p,_.connect(m.destination),_.start(0),{source:_,ctx:m,stop:()=>{try{_.stop(),m.close()}catch{}}}}function dx(r=800,t=.03){try{const i=window.AudioContext||window.webkitAudioContext;if(!i)return;const s=new i,l=s.createOscillator(),c=s.createGain();l.type="sine",l.frequency.setValueAtTime(r,s.currentTime),l.frequency.exponentialRampToValueAtTime(100,s.currentTime+t),c.gain.setValueAtTime(.015,s.currentTime),c.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+t),l.connect(c),c.connect(s.destination),l.start(),l.stop(s.currentTime+t),setTimeout(()=>s.close(),200)}catch{}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kh="184",z1=0,fx=1,O1=2,kc=1,P1=2,qo=3,ms=0,$n=1,Li=2,Ua=0,jr=1,Da=2,hx=3,px=4,I1=5,Hs=100,F1=101,B1=102,k1=103,j1=104,H1=200,G1=201,V1=202,X1=203,th=204,nh=205,W1=206,q1=207,Y1=208,Z1=209,K1=210,Q1=211,J1=212,$1=213,eS=214,ih=0,ah=1,sh=2,Gr=3,rh=4,oh=5,lh=6,ch=7,vv=0,tS=1,nS=2,ra=0,_v=1,bv=2,yv=3,Sv=4,Mv=5,Ev=6,Tv=7,Av=300,Ws=301,Vr=302,bf=303,yf=304,tu=306,uh=1e3,La=1001,dh=1002,Hn=1003,iS=1004,gc=1005,Wn=1006,Sf=1007,Vs=1008,Ui=1009,wv=1010,Cv=1011,$o=1012,Qh=1013,la=1014,aa=1015,Oa=1016,Jh=1017,$h=1018,el=1020,Rv=35902,Nv=35899,Dv=1021,Lv=1022,Xi=1023,Pa=1026,Xs=1027,Uv=1028,ep=1029,qs=1030,tp=1031,np=1033,jc=33776,Hc=33777,Gc=33778,Vc=33779,fh=35840,hh=35841,ph=35842,mh=35843,gh=36196,xh=37492,vh=37496,_h=37488,bh=37489,qc=37490,yh=37491,Sh=37808,Mh=37809,Eh=37810,Th=37811,Ah=37812,wh=37813,Ch=37814,Rh=37815,Nh=37816,Dh=37817,Lh=37818,Uh=37819,zh=37820,Oh=37821,Ph=36492,Ih=36494,Fh=36495,Bh=36283,kh=36284,Yc=36285,jh=36286,aS=3200,mx=0,sS=1,hs="",Ni="srgb",Zc="srgb-linear",Kc="linear",Jt="srgb",wr=7680,gx=519,rS=512,oS=513,lS=514,ip=515,cS=516,uS=517,ap=518,dS=519,xx=35044,vx="300 es",sa=2e3,Qc=2001;function fS(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Jc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hS(){const r=Jc("canvas");return r.style.display="block",r}const _x={};function bx(...r){const t="THREE."+r.shift();console.log(t,...r)}function zv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function vt(...r){r=zv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function kt(...r){r=zv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Hh(...r){const t=r.join(" ");t in _x||(_x[t]=!0,vt(...r))}function pS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const mS={[ih]:ah,[sh]:lh,[rh]:ch,[Gr]:oh,[ah]:ih,[lh]:sh,[ch]:rh,[oh]:Gr};class Zs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mf=Math.PI/180,Gh=180/Math.PI;function tl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[i&63|128]+Vn[i>>8&255]+"-"+Vn[i>>16&255]+Vn[i>>24&255]+Vn[s&255]+Vn[s>>8&255]+Vn[s>>16&255]+Vn[s>>24&255]).toLowerCase()}function Ft(r,t,i){return Math.max(t,Math.min(i,r))}function gS(r,t){return(r%t+t)%t}function Ef(r,t,i){return(1-i)*r+i*t}function Bo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function li(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const cp=class cp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ft(this.x,t.x,i.x),this.y=Ft(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ft(this.x,t,i),this.y=Ft(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ft(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ft(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cp.prototype.isVector2=!0;let Xt=cp;class qr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,m){let g=s[l+0],p=s[l+1],y=s[l+2],_=s[l+3],x=c[h+0],M=c[h+1],A=c[h+2],U=c[h+3];if(_!==U||g!==x||p!==M||y!==A){let S=g*x+p*M+y*A+_*U;S<0&&(x=-x,M=-M,A=-A,U=-U,S=-S);let b=1-m;if(S<.9995){const w=Math.acos(S),z=Math.sin(w);b=Math.sin(b*w)/z,m=Math.sin(m*w)/z,g=g*b+x*m,p=p*b+M*m,y=y*b+A*m,_=_*b+U*m}else{g=g*b+x*m,p=p*b+M*m,y=y*b+A*m,_=_*b+U*m;const w=1/Math.sqrt(g*g+p*p+y*y+_*_);g*=w,p*=w,y*=w,_*=w}}t[i]=g,t[i+1]=p,t[i+2]=y,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const m=s[l],g=s[l+1],p=s[l+2],y=s[l+3],_=c[h],x=c[h+1],M=c[h+2],A=c[h+3];return t[i]=m*A+y*_+g*M-p*x,t[i+1]=g*A+y*x+p*_-m*M,t[i+2]=p*A+y*M+m*x-g*_,t[i+3]=y*A-m*_-g*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,m=Math.cos,g=Math.sin,p=m(s/2),y=m(l/2),_=m(c/2),x=g(s/2),M=g(l/2),A=g(c/2);switch(h){case"XYZ":this._x=x*y*_+p*M*A,this._y=p*M*_-x*y*A,this._z=p*y*A+x*M*_,this._w=p*y*_-x*M*A;break;case"YXZ":this._x=x*y*_+p*M*A,this._y=p*M*_-x*y*A,this._z=p*y*A-x*M*_,this._w=p*y*_+x*M*A;break;case"ZXY":this._x=x*y*_-p*M*A,this._y=p*M*_+x*y*A,this._z=p*y*A+x*M*_,this._w=p*y*_-x*M*A;break;case"ZYX":this._x=x*y*_-p*M*A,this._y=p*M*_+x*y*A,this._z=p*y*A-x*M*_,this._w=p*y*_+x*M*A;break;case"YZX":this._x=x*y*_+p*M*A,this._y=p*M*_+x*y*A,this._z=p*y*A-x*M*_,this._w=p*y*_-x*M*A;break;case"XZY":this._x=x*y*_-p*M*A,this._y=p*M*_-x*y*A,this._z=p*y*A+x*M*_,this._w=p*y*_+x*M*A;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],m=i[5],g=i[9],p=i[2],y=i[6],_=i[10],x=s+m+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(y-g)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>m&&s>_){const M=2*Math.sqrt(1+s-m-_);this._w=(y-g)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(m>_){const M=2*Math.sqrt(1+m-s-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(g+y)/M}else{const M=2*Math.sqrt(1+_-s-m);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(g+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,m=i._x,g=i._y,p=i._z,y=i._w;return this._x=s*y+h*m+l*p-c*g,this._y=l*y+h*g+c*m-s*p,this._z=c*y+h*p+s*g-l*m,this._w=h*y-s*m-l*g-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,m=this.dot(t);m<0&&(s=-s,l=-l,c=-c,h=-h,m=-m);let g=1-i;if(m<.9995){const p=Math.acos(m),y=Math.sin(p);g=Math.sin(g*p)/y,i=Math.sin(i*p)/y,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+h*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const up=class up{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(yx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(yx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,m=t.z,g=t.w,p=2*(h*l-m*s),y=2*(m*i-c*l),_=2*(c*s-h*i);return this.x=i+g*p+h*_-m*y,this.y=s+g*y+m*p-c*_,this.z=l+g*_+c*y-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ft(this.x,t.x,i.x),this.y=Ft(this.y,t.y,i.y),this.z=Ft(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ft(this.x,t,i),this.y=Ft(this.y,t,i),this.z=Ft(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ft(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,m=i.y,g=i.z;return this.x=l*g-c*m,this.y=c*h-s*g,this.z=s*m-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Tf.copy(this).projectOnVector(t),this.sub(Tf)}reflect(t){return this.sub(Tf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ft(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};up.prototype.isVector3=!0;let ie=up;const Tf=new ie,yx=new qr,dp=class dp{constructor(t,i,s,l,c,h,m,g,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,m,g,p)}set(t,i,s,l,c,h,m,g,p){const y=this.elements;return y[0]=t,y[1]=l,y[2]=m,y[3]=i,y[4]=c,y[5]=g,y[6]=s,y[7]=h,y[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],m=s[3],g=s[6],p=s[1],y=s[4],_=s[7],x=s[2],M=s[5],A=s[8],U=l[0],S=l[3],b=l[6],w=l[1],z=l[4],D=l[7],G=l[2],O=l[5],F=l[8];return c[0]=h*U+m*w+g*G,c[3]=h*S+m*z+g*O,c[6]=h*b+m*D+g*F,c[1]=p*U+y*w+_*G,c[4]=p*S+y*z+_*O,c[7]=p*b+y*D+_*F,c[2]=x*U+M*w+A*G,c[5]=x*S+M*z+A*O,c[8]=x*b+M*D+A*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],m=t[5],g=t[6],p=t[7],y=t[8];return i*h*y-i*m*p-s*c*y+s*m*g+l*c*p-l*h*g}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],m=t[5],g=t[6],p=t[7],y=t[8],_=y*h-m*p,x=m*g-y*c,M=p*c-h*g,A=i*_+s*x+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/A;return t[0]=_*U,t[1]=(l*p-y*s)*U,t[2]=(m*s-l*h)*U,t[3]=x*U,t[4]=(y*i-l*g)*U,t[5]=(l*c-m*i)*U,t[6]=M*U,t[7]=(s*g-p*i)*U,t[8]=(h*i-s*c)*U,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,m){const g=Math.cos(c),p=Math.sin(c);return this.set(s*g,s*p,-s*(g*h+p*m)+h+t,-l*p,l*g,-l*(-p*h+g*m)+m+i,0,0,1),this}scale(t,i){return this.premultiply(Af.makeScale(t,i)),this}rotate(t){return this.premultiply(Af.makeRotation(-t)),this}translate(t,i){return this.premultiply(Af.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dp.prototype.isMatrix3=!0;let Et=dp;const Af=new Et,Sx=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mx=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xS(){const r={enabled:!0,workingColorSpace:Zc,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Jt&&(l.r=za(l.r),l.g=za(l.g),l.b=za(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Jt&&(l.r=Hr(l.r),l.g=Hr(l.g),l.b=Hr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===hs?Kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Hh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Hh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Zc]:{primaries:t,whitePoint:s,transfer:Kc,toXYZ:Sx,fromXYZ:Mx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:t,whitePoint:s,transfer:Jt,toXYZ:Sx,fromXYZ:Mx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}}),r}const It=xS();function za(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Cr;class vS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Cr===void 0&&(Cr=Jc("canvas")),Cr.width=t.width,Cr.height=t.height;const l=Cr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Cr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Jc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=za(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(za(i[s]/255)*255):i[s]=za(i[s]);return{data:i,width:t.width,height:t.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _S=0;class sp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=tl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,m=l.length;h<m;h++)l[h].isDataTexture?c.push(wf(l[h].image)):c.push(wf(l[h]))}else c=wf(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function wf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let bS=0;const Cf=new ie;class qn extends Zs{constructor(t=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,s=La,l=La,c=Wn,h=Vs,m=Xi,g=Ui,p=qn.DEFAULT_ANISOTROPY,y=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=tl(),this.name="",this.source=new sp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=m,this.internalFormat=null,this.type=g,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cf).x}get height(){return this.source.getSize(Cf).y}get depth(){return this.source.getSize(Cf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){vt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){vt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Av)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uh:t.x=t.x-Math.floor(t.x);break;case La:t.x=t.x<0?0:1;break;case dh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uh:t.y=t.y-Math.floor(t.y);break;case La:t.y=t.y<0?0:1;break;case dh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Av;qn.DEFAULT_ANISOTROPY=1;const fp=class fp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const g=t.elements,p=g[0],y=g[4],_=g[8],x=g[1],M=g[5],A=g[9],U=g[2],S=g[6],b=g[10];if(Math.abs(y-x)<.01&&Math.abs(_-U)<.01&&Math.abs(A-S)<.01){if(Math.abs(y+x)<.1&&Math.abs(_+U)<.1&&Math.abs(A+S)<.1&&Math.abs(p+M+b-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,D=(M+1)/2,G=(b+1)/2,O=(y+x)/4,F=(_+U)/4,T=(A+S)/4;return z>D&&z>G?z<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(z),l=O/s,c=F/s):D>G?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=O/l,c=T/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=F/c,l=T/c),this.set(s,l,c,i),this}let w=Math.sqrt((S-A)*(S-A)+(_-U)*(_-U)+(x-y)*(x-y));return Math.abs(w)<.001&&(w=1),this.x=(S-A)/w,this.y=(_-U)/w,this.z=(x-y)/w,this.w=Math.acos((p+M+b-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ft(this.x,t.x,i.x),this.y=Ft(this.y,t.y,i.y),this.z=Ft(this.z,t.z,i.z),this.w=Ft(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ft(this.x,t,i),this.y=Ft(this.y,t,i),this.z=Ft(this.z,t,i),this.w=Ft(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ft(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fp.prototype.isVector4=!0;let yn=fp;class yS extends Zs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new yn(0,0,t,i),this.scissorTest=!1,this.viewport=new yn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new qn(l),h=s.count;for(let m=0;m<h;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new sp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oa extends yS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Ov extends qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class SS extends qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eu=class eu{constructor(t,i,s,l,c,h,m,g,p,y,_,x,M,A,U,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,m,g,p,y,_,x,M,A,U,S)}set(t,i,s,l,c,h,m,g,p,y,_,x,M,A,U,S){const b=this.elements;return b[0]=t,b[4]=i,b[8]=s,b[12]=l,b[1]=c,b[5]=h,b[9]=m,b[13]=g,b[2]=p,b[6]=y,b[10]=_,b[14]=x,b[3]=M,b[7]=A,b[11]=U,b[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Rr.setFromMatrixColumn(t,0).length(),c=1/Rr.setFromMatrixColumn(t,1).length(),h=1/Rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),m=Math.sin(s),g=Math.cos(l),p=Math.sin(l),y=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=h*y,M=h*_,A=m*y,U=m*_;i[0]=g*y,i[4]=-g*_,i[8]=p,i[1]=M+A*p,i[5]=x-U*p,i[9]=-m*g,i[2]=U-x*p,i[6]=A+M*p,i[10]=h*g}else if(t.order==="YXZ"){const x=g*y,M=g*_,A=p*y,U=p*_;i[0]=x+U*m,i[4]=A*m-M,i[8]=h*p,i[1]=h*_,i[5]=h*y,i[9]=-m,i[2]=M*m-A,i[6]=U+x*m,i[10]=h*g}else if(t.order==="ZXY"){const x=g*y,M=g*_,A=p*y,U=p*_;i[0]=x-U*m,i[4]=-h*_,i[8]=A+M*m,i[1]=M+A*m,i[5]=h*y,i[9]=U-x*m,i[2]=-h*p,i[6]=m,i[10]=h*g}else if(t.order==="ZYX"){const x=h*y,M=h*_,A=m*y,U=m*_;i[0]=g*y,i[4]=A*p-M,i[8]=x*p+U,i[1]=g*_,i[5]=U*p+x,i[9]=M*p-A,i[2]=-p,i[6]=m*g,i[10]=h*g}else if(t.order==="YZX"){const x=h*g,M=h*p,A=m*g,U=m*p;i[0]=g*y,i[4]=U-x*_,i[8]=A*_+M,i[1]=_,i[5]=h*y,i[9]=-m*y,i[2]=-p*y,i[6]=M*_+A,i[10]=x-U*_}else if(t.order==="XZY"){const x=h*g,M=h*p,A=m*g,U=m*p;i[0]=g*y,i[4]=-_,i[8]=p*y,i[1]=x*_+U,i[5]=h*y,i[9]=M*_-A,i[2]=A*_-M,i[6]=m*y,i[10]=U*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(MS,t,ES)}lookAt(t,i,s){const l=this.elements;return vi.subVectors(t,i),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),os.crossVectors(s,vi),os.lengthSq()===0&&(Math.abs(s.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),os.crossVectors(s,vi)),os.normalize(),xc.crossVectors(vi,os),l[0]=os.x,l[4]=xc.x,l[8]=vi.x,l[1]=os.y,l[5]=xc.y,l[9]=vi.y,l[2]=os.z,l[6]=xc.z,l[10]=vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],m=s[4],g=s[8],p=s[12],y=s[1],_=s[5],x=s[9],M=s[13],A=s[2],U=s[6],S=s[10],b=s[14],w=s[3],z=s[7],D=s[11],G=s[15],O=l[0],F=l[4],T=l[8],I=l[12],W=l[1],j=l[5],Z=l[9],me=l[13],ve=l[2],q=l[6],P=l[10],H=l[14],ne=l[3],Se=l[7],ae=l[11],N=l[15];return c[0]=h*O+m*W+g*ve+p*ne,c[4]=h*F+m*j+g*q+p*Se,c[8]=h*T+m*Z+g*P+p*ae,c[12]=h*I+m*me+g*H+p*N,c[1]=y*O+_*W+x*ve+M*ne,c[5]=y*F+_*j+x*q+M*Se,c[9]=y*T+_*Z+x*P+M*ae,c[13]=y*I+_*me+x*H+M*N,c[2]=A*O+U*W+S*ve+b*ne,c[6]=A*F+U*j+S*q+b*Se,c[10]=A*T+U*Z+S*P+b*ae,c[14]=A*I+U*me+S*H+b*N,c[3]=w*O+z*W+D*ve+G*ne,c[7]=w*F+z*j+D*q+G*Se,c[11]=w*T+z*Z+D*P+G*ae,c[15]=w*I+z*me+D*H+G*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],m=t[5],g=t[9],p=t[13],y=t[2],_=t[6],x=t[10],M=t[14],A=t[3],U=t[7],S=t[11],b=t[15],w=g*M-p*x,z=m*M-p*_,D=m*x-g*_,G=h*M-p*y,O=h*x-g*y,F=h*_-m*y;return i*(U*w-S*z+b*D)-s*(A*w-S*G+b*O)+l*(A*z-U*G+b*F)-c*(A*D-U*O+S*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],m=t[5],g=t[6],p=t[7],y=t[8],_=t[9],x=t[10],M=t[11],A=t[12],U=t[13],S=t[14],b=t[15],w=i*m-s*h,z=i*g-l*h,D=i*p-c*h,G=s*g-l*m,O=s*p-c*m,F=l*p-c*g,T=y*U-_*A,I=y*S-x*A,W=y*b-M*A,j=_*S-x*U,Z=_*b-M*U,me=x*b-M*S,ve=w*me-z*Z+D*j+G*W-O*I+F*T;if(ve===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/ve;return t[0]=(m*me-g*Z+p*j)*q,t[1]=(l*Z-s*me-c*j)*q,t[2]=(U*F-S*O+b*G)*q,t[3]=(x*O-_*F-M*G)*q,t[4]=(g*W-h*me-p*I)*q,t[5]=(i*me-l*W+c*I)*q,t[6]=(S*D-A*F-b*z)*q,t[7]=(y*F-x*D+M*z)*q,t[8]=(h*Z-m*W+p*T)*q,t[9]=(s*W-i*Z-c*T)*q,t[10]=(A*O-U*D+b*w)*q,t[11]=(_*D-y*O-M*w)*q,t[12]=(m*I-h*j-g*T)*q,t[13]=(i*j-s*I+l*T)*q,t[14]=(U*z-A*G-S*w)*q,t[15]=(y*G-_*z+x*w)*q,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,m=t.y,g=t.z,p=c*h,y=c*m;return this.set(p*h+s,p*m-l*g,p*g+l*m,0,p*m+l*g,y*m+s,y*g-l*h,0,p*g-l*m,y*g+l*h,c*g*g+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,m=i._z,g=i._w,p=c+c,y=h+h,_=m+m,x=c*p,M=c*y,A=c*_,U=h*y,S=h*_,b=m*_,w=g*p,z=g*y,D=g*_,G=s.x,O=s.y,F=s.z;return l[0]=(1-(U+b))*G,l[1]=(M+D)*G,l[2]=(A-z)*G,l[3]=0,l[4]=(M-D)*O,l[5]=(1-(x+b))*O,l[6]=(S+w)*O,l[7]=0,l[8]=(A+z)*F,l[9]=(S-w)*F,l[10]=(1-(x+U))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Rr.set(l[0],l[1],l[2]).length();const m=Rr.set(l[4],l[5],l[6]).length(),g=Rr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),ji.copy(this);const p=1/h,y=1/m,_=1/g;return ji.elements[0]*=p,ji.elements[1]*=p,ji.elements[2]*=p,ji.elements[4]*=y,ji.elements[5]*=y,ji.elements[6]*=y,ji.elements[8]*=_,ji.elements[9]*=_,ji.elements[10]*=_,i.setFromRotationMatrix(ji),s.x=h,s.y=m,s.z=g,this}makePerspective(t,i,s,l,c,h,m=sa,g=!1){const p=this.elements,y=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),M=(s+l)/(s-l);let A,U;if(g)A=c/(h-c),U=h*c/(h-c);else if(m===sa)A=-(h+c)/(h-c),U=-2*h*c/(h-c);else if(m===Qc)A=-h/(h-c),U=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return p[0]=y,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=U,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,m=sa,g=!1){const p=this.elements,y=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),M=-(s+l)/(s-l);let A,U;if(g)A=1/(h-c),U=h/(h-c);else if(m===sa)A=-2/(h-c),U=-(h+c)/(h-c);else if(m===Qc)A=-1/(h-c),U=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return p[0]=y,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=U,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};eu.prototype.isMatrix4=!0;let Cn=eu;const Rr=new ie,ji=new Cn,MS=new ie(0,0,0),ES=new ie(1,1,1),os=new ie,xc=new ie,vi=new ie,Ex=new Cn,Tx=new qr;class Ys{constructor(t=0,i=0,s=0,l=Ys.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],m=l[8],g=l[1],p=l[5],y=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ft(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(m,M),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-Ft(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ft(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-y,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(m,M));break;case"XZY":this._z=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-y,M),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Ex.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ex,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Tx.setFromEuler(this),this.setFromQuaternion(Tx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ys.DEFAULT_ORDER="XYZ";class Pv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let TS=0;const Ax=new ie,Nr=new qr,Aa=new Cn,vc=new ie,ko=new ie,AS=new ie,wS=new qr,wx=new ie(1,0,0),Cx=new ie(0,1,0),Rx=new ie(0,0,1),Nx={type:"added"},CS={type:"removed"},Dr={type:"childadded",child:null},Rf={type:"childremoved",child:null};class ui extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const t=new ie,i=new Ys,s=new qr,l=new ie(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Cn},normalMatrix:{value:new Et}}),this.matrix=new Cn,this.matrixWorld=new Cn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(wx,t)}rotateY(t){return this.rotateOnAxis(Cx,t)}rotateZ(t){return this.rotateOnAxis(Rx,t)}translateOnAxis(t,i){return Ax.copy(t).applyQuaternion(this.quaternion),this.position.add(Ax.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(wx,t)}translateY(t){return this.translateOnAxis(Cx,t)}translateZ(t){return this.translateOnAxis(Rx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?vc.copy(t):vc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(ko,vc,this.up):Aa.lookAt(vc,ko,this.up),this.quaternion.setFromRotationMatrix(Aa),l&&(Aa.extractRotation(l.matrixWorld),Nr.setFromRotationMatrix(Aa),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nx),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(CS),Rf.child=t,this.dispatchEvent(Rf),Rf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nx),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,AS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,wS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(m,g){return m[g.uuid]===void 0&&(m[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const g=m.shapes;if(Array.isArray(g))for(let p=0,y=g.length;p<y;p++){const _=g[p];c(t.shapes,_)}else c(t.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let g=0,p=this.material.length;g<p;g++)m.push(c(t.materials,this.material[g]));l.material=m}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const g=this.animations[m];l.animations.push(c(t.animations,g))}}if(i){const m=h(t.geometries),g=h(t.materials),p=h(t.textures),y=h(t.images),_=h(t.shapes),x=h(t.skeletons),M=h(t.animations),A=h(t.nodes);m.length>0&&(s.geometries=m),g.length>0&&(s.materials=g),p.length>0&&(s.textures=p),y.length>0&&(s.images=y),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(m){const g=[];for(const p in m){const y=m[p];delete y.metadata,g.push(y)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}ui.DEFAULT_UP=new ie(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yo extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RS={type:"move"};class Nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const m=this._targetRay,g=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const U of t.hand.values()){const S=i.getJointPose(U,s),b=this._getHandJoint(p,U);S!==null&&(b.matrix.fromArray(S.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=S.radius),b.visible=S!==null}const y=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=y.position.distanceTo(_.position),M=.02,A=.005;p.inputState.pinching&&x>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:t,target:this})));m!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(RS)))}return m!==null&&(m.visible=l!==null),g!==null&&(g.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Yo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Iv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Df(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Bt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,It.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=It.workingColorSpace){return this.r=t,this.g=i,this.b=s,It.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=It.workingColorSpace){if(t=gS(t,1),i=Ft(i,0,1),s=Ft(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Df(h,c,t+1/3),this.g=Df(h,c,t),this.b=Df(h,c,t-1/3)}return It.colorSpaceToWorking(this,l),this}setStyle(t,i=Ni){function s(c){c!==void 0&&parseFloat(c)<1&&vt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],m=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:vt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ni){const s=Iv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=za(t.r),this.g=za(t.g),this.b=za(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ni){return It.workingToColorSpace(Xn.copy(this),t),Math.round(Ft(Xn.r*255,0,255))*65536+Math.round(Ft(Xn.g*255,0,255))*256+Math.round(Ft(Xn.b*255,0,255))}getHexString(t=Ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=It.workingColorSpace){It.workingToColorSpace(Xn.copy(this),i);const s=Xn.r,l=Xn.g,c=Xn.b,h=Math.max(s,l,c),m=Math.min(s,l,c);let g,p;const y=(m+h)/2;if(m===h)g=0,p=0;else{const _=h-m;switch(p=y<=.5?_/(h+m):_/(2-h-m),h){case s:g=(l-c)/_+(l<c?6:0);break;case l:g=(c-s)/_+2;break;case c:g=(s-l)/_+4;break}g/=6}return t.h=g,t.s=p,t.l=y,t}getRGB(t,i=It.workingColorSpace){return It.workingToColorSpace(Xn.copy(this),i),t.r=Xn.r,t.g=Xn.g,t.b=Xn.b,t}getStyle(t=Ni){It.workingToColorSpace(Xn.copy(this),t);const i=Xn.r,s=Xn.g,l=Xn.b;return t!==Ni?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ls),this.setHSL(ls.h+t,ls.s+i,ls.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ls),t.getHSL(_c);const s=Ef(ls.h,_c.h,i),l=Ef(ls.s,_c.s,i),c=Ef(ls.l,_c.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Bt;Bt.NAMES=Iv;class rp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=i}clone(){return new rp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class NS extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ys,this.environmentIntensity=1,this.environmentRotation=new Ys,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Hi=new ie,wa=new ie,Lf=new ie,Ca=new ie,Lr=new ie,Ur=new ie,Dx=new ie,Uf=new ie,zf=new ie,Of=new ie,Pf=new yn,If=new yn,Ff=new yn;class Vi{constructor(t=new ie,i=new ie,s=new ie){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Hi.subVectors(t,i),l.cross(Hi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Hi.subVectors(l,i),wa.subVectors(s,i),Lf.subVectors(t,i);const h=Hi.dot(Hi),m=Hi.dot(wa),g=Hi.dot(Lf),p=wa.dot(wa),y=wa.dot(Lf),_=h*p-m*m;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(p*g-m*y)*x,A=(h*y-m*g)*x;return c.set(1-M-A,A,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(t,i,s,l,c,h,m,g){return this.getBarycoord(t,i,s,l,Ca)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,Ca.x),g.addScaledVector(h,Ca.y),g.addScaledVector(m,Ca.z),g)}static getInterpolatedAttribute(t,i,s,l,c,h){return Pf.setScalar(0),If.setScalar(0),Ff.setScalar(0),Pf.fromBufferAttribute(t,i),If.fromBufferAttribute(t,s),Ff.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Pf,c.x),h.addScaledVector(If,c.y),h.addScaledVector(Ff,c.z),h}static isFrontFacing(t,i,s,l){return Hi.subVectors(s,i),wa.subVectors(t,i),Hi.cross(wa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),wa.subVectors(this.a,this.b),Hi.cross(wa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,m;Lr.subVectors(l,s),Ur.subVectors(c,s),Uf.subVectors(t,s);const g=Lr.dot(Uf),p=Ur.dot(Uf);if(g<=0&&p<=0)return i.copy(s);zf.subVectors(t,l);const y=Lr.dot(zf),_=Ur.dot(zf);if(y>=0&&_<=y)return i.copy(l);const x=g*_-y*p;if(x<=0&&g>=0&&y<=0)return h=g/(g-y),i.copy(s).addScaledVector(Lr,h);Of.subVectors(t,c);const M=Lr.dot(Of),A=Ur.dot(Of);if(A>=0&&M<=A)return i.copy(c);const U=M*p-g*A;if(U<=0&&p>=0&&A<=0)return m=p/(p-A),i.copy(s).addScaledVector(Ur,m);const S=y*A-M*_;if(S<=0&&_-y>=0&&M-A>=0)return Dx.subVectors(c,l),m=(_-y)/(_-y+(M-A)),i.copy(l).addScaledVector(Dx,m);const b=1/(S+U+x);return h=U*b,m=x*b,i.copy(s).addScaledVector(Lr,h).addScaledVector(Ur,m)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class nl{constructor(t=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,m=c.count;h<m;h++)t.isMesh===!0?t.getVertexPosition(h,Gi):Gi.fromBufferAttribute(c,h),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bc.copy(s.boundingBox)),bc.applyMatrix4(t.matrixWorld),this.union(bc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),yc.subVectors(this.max,jo),zr.subVectors(t.a,jo),Or.subVectors(t.b,jo),Pr.subVectors(t.c,jo),cs.subVectors(Or,zr),us.subVectors(Pr,Or),Is.subVectors(zr,Pr);let i=[0,-cs.z,cs.y,0,-us.z,us.y,0,-Is.z,Is.y,cs.z,0,-cs.x,us.z,0,-us.x,Is.z,0,-Is.x,-cs.y,cs.x,0,-us.y,us.x,0,-Is.y,Is.x,0];return!Bf(i,zr,Or,Pr,yc)||(i=[1,0,0,0,1,0,0,0,1],!Bf(i,zr,Or,Pr,yc))?!1:(Sc.crossVectors(cs,us),i=[Sc.x,Sc.y,Sc.z],Bf(i,zr,Or,Pr,yc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ra=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Gi=new ie,bc=new nl,zr=new ie,Or=new ie,Pr=new ie,cs=new ie,us=new ie,Is=new ie,jo=new ie,yc=new ie,Sc=new ie,Fs=new ie;function Bf(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Fs.fromArray(r,c);const m=l.x*Math.abs(Fs.x)+l.y*Math.abs(Fs.y)+l.z*Math.abs(Fs.z),g=t.dot(Fs),p=i.dot(Fs),y=s.dot(Fs);if(Math.max(-Math.max(g,p,y),Math.min(g,p,y))>m)return!1}return!0}const wn=new ie,Mc=new Xt;let DS=0;class ci extends Zs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=xx,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(t),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix3(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix4(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyNormalMatrix(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.transformDirection(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Bo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=li(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Bo(i,this.array)),i}setX(t,i){return this.normalized&&(i=li(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Bo(i,this.array)),i}setY(t,i){return this.normalized&&(i=li(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Bo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=li(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Bo(i,this.array)),i}setW(t,i){return this.normalized&&(i=li(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=li(i,this.array),s=li(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=li(i,this.array),s=li(s,this.array),l=li(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=li(i,this.array),s=li(s,this.array),l=li(l,this.array),c=li(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xx&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Fv extends ci{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Bv extends ci{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Sn extends ci{constructor(t,i,s){super(new Float32Array(t),i,s)}}const LS=new nl,Ho=new ie,kf=new ie;class nu{constructor(t=new ie,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):LS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ho.subVectors(t,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ho,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ho.copy(t.center).add(kf)),this.expandByPoint(Ho.copy(t.center).sub(kf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let US=0;const Ri=new Cn,jf=new ui,Ir=new ie,_i=new nl,Go=new nl,Pn=new ie;class Yn extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fS(t)?Bv:Fv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Et().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,i,s){return Ri.makeTranslation(t,i,s),this.applyMatrix4(Ri),this}scale(t,i,s){return Ri.makeScale(t,i,s),this.applyMatrix4(Ri),this}lookAt(t){return jf.lookAt(t),jf.updateMatrix(),this.applyMatrix4(jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Sn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];_i.setFromBufferAttribute(c),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(t){const s=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const m=i[c];Go.setFromBufferAttribute(m),this.morphTargetsRelative?(Pn.addVectors(_i.min,Go.min),_i.expandByPoint(Pn),Pn.addVectors(_i.max,Go.max),_i.expandByPoint(Pn)):(_i.expandByPoint(Go.min),_i.expandByPoint(Go.max))}_i.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Pn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Pn));if(i)for(let c=0,h=i.length;c<h;c++){const m=i[c],g=this.morphTargetsRelative;for(let p=0,y=m.count;p<y;p++)Pn.fromBufferAttribute(m,p),g&&(Ir.fromBufferAttribute(t,p),Pn.add(Ir)),l=Math.max(l,s.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),m=[],g=[];for(let T=0;T<s.count;T++)m[T]=new ie,g[T]=new ie;const p=new ie,y=new ie,_=new ie,x=new Xt,M=new Xt,A=new Xt,U=new ie,S=new ie;function b(T,I,W){p.fromBufferAttribute(s,T),y.fromBufferAttribute(s,I),_.fromBufferAttribute(s,W),x.fromBufferAttribute(c,T),M.fromBufferAttribute(c,I),A.fromBufferAttribute(c,W),y.sub(p),_.sub(p),M.sub(x),A.sub(x);const j=1/(M.x*A.y-A.x*M.y);isFinite(j)&&(U.copy(y).multiplyScalar(A.y).addScaledVector(_,-M.y).multiplyScalar(j),S.copy(_).multiplyScalar(M.x).addScaledVector(y,-A.x).multiplyScalar(j),m[T].add(U),m[I].add(U),m[W].add(U),g[T].add(S),g[I].add(S),g[W].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let T=0,I=w.length;T<I;++T){const W=w[T],j=W.start,Z=W.count;for(let me=j,ve=j+Z;me<ve;me+=3)b(t.getX(me+0),t.getX(me+1),t.getX(me+2))}const z=new ie,D=new ie,G=new ie,O=new ie;function F(T){G.fromBufferAttribute(l,T),O.copy(G);const I=m[T];z.copy(I),z.sub(G.multiplyScalar(G.dot(I))).normalize(),D.crossVectors(O,I);const j=D.dot(g[T])<0?-1:1;h.setXYZW(T,z.x,z.y,z.z,j)}for(let T=0,I=w.length;T<I;++T){const W=w[T],j=W.start,Z=W.count;for(let me=j,ve=j+Z;me<ve;me+=3)F(t.getX(me+0)),F(t.getX(me+1)),F(t.getX(me+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ci(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new ie,c=new ie,h=new ie,m=new ie,g=new ie,p=new ie,y=new ie,_=new ie;if(t)for(let x=0,M=t.count;x<M;x+=3){const A=t.getX(x+0),U=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,S),y.subVectors(h,c),_.subVectors(l,c),y.cross(_),m.fromBufferAttribute(s,A),g.fromBufferAttribute(s,U),p.fromBufferAttribute(s,S),m.add(y),g.add(y),p.add(y),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(U,g.x,g.y,g.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),y.subVectors(h,c),_.subVectors(l,c),y.cross(_),s.setXYZ(x+0,y.x,y.y,y.z),s.setXYZ(x+1,y.x,y.y,y.z),s.setXYZ(x+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Pn.fromBufferAttribute(t,i),Pn.normalize(),t.setXYZ(i,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function t(m,g){const p=m.array,y=m.itemSize,_=m.normalized,x=new p.constructor(g.length*y);let M=0,A=0;for(let U=0,S=g.length;U<S;U++){m.isInterleavedBufferAttribute?M=g[U]*m.data.stride+m.offset:M=g[U]*y;for(let b=0;b<y;b++)x[A++]=p[M++]}return new ci(x,y,_)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Yn,s=this.index.array,l=this.attributes;for(const m in l){const g=l[m],p=t(g,s);i.setAttribute(m,p)}const c=this.morphAttributes;for(const m in c){const g=[],p=c[m];for(let y=0,_=p.length;y<_;y++){const x=p[y],M=t(x,s);g.push(M)}i.morphAttributes[m]=g}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let m=0,g=h.length;m<g;m++){const p=h[m];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(t[p]=g[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const p=s[g];t.data.attributes[g]=p.toJSON(t.data)}const l={};let c=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],y=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];y.push(M.toJSON(t.data))}y.length>0&&(l[g]=y,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const m=this.boundingSphere;return m!==null&&(t.data.boundingSphere=m.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const y=l[p];this.setAttribute(p,y.clone(i))}const c=t.morphAttributes;for(const p in c){const y=[],_=c[p];for(let x=0,M=_.length;x<M;x++)y.push(_[x].clone(i));this.morphAttributes[p]=y}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,y=h.length;p<y;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const m=t.boundingBox;m!==null&&(this.boundingBox=m.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let zS=0;class il extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=jr,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){vt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){vt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(s.blending=this.blending),this.side!==ms&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==th&&(s.blendSrc=this.blendSrc),this.blendDst!==nh&&(s.blendDst=this.blendDst),this.blendEquation!==Hs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const m in c){const g=c[m];delete g.metadata,h.push(g)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Na=new ie,Hf=new ie,Ec=new ie,ds=new ie,Gf=new ie,Tc=new ie,Vf=new ie;class kv{constructor(t=new ie,i=new ie(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Na.copy(this.origin).addScaledVector(this.direction,i),Na.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Hf.copy(t).add(i).multiplyScalar(.5),Ec.copy(i).sub(t).normalize(),ds.copy(this.origin).sub(Hf);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Ec),m=ds.dot(this.direction),g=-ds.dot(Ec),p=ds.lengthSq(),y=Math.abs(1-h*h);let _,x,M,A;if(y>0)if(_=h*g-m,x=h*m-g,A=c*y,_>=0)if(x>=-A)if(x<=A){const U=1/y;_*=U,x*=U,M=_*(_+h*x+2*m)+x*(h*_+x+2*g)+p}else x=c,_=Math.max(0,-(h*x+m)),M=-_*_+x*(x+2*g)+p;else x=-c,_=Math.max(0,-(h*x+m)),M=-_*_+x*(x+2*g)+p;else x<=-A?(_=Math.max(0,-(-h*c+m)),x=_>0?-c:Math.min(Math.max(-c,-g),c),M=-_*_+x*(x+2*g)+p):x<=A?(_=0,x=Math.min(Math.max(-c,-g),c),M=x*(x+2*g)+p):(_=Math.max(0,-(h*c+m)),x=_>0?c:Math.min(Math.max(-c,-g),c),M=-_*_+x*(x+2*g)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+m)),M=-_*_+x*(x+2*g)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Hf).addScaledVector(Ec,x),M}intersectSphere(t,i){Na.subVectors(t.center,this.origin);const s=Na.dot(this.direction),l=Na.dot(Na)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),m=s-h,g=s+h;return g<0?null:m<0?this.at(g,i):this.at(m,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,m,g;const p=1/this.direction.x,y=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),y>=0?(c=(t.min.y-x.y)*y,h=(t.max.y-x.y)*y):(c=(t.max.y-x.y)*y,h=(t.min.y-x.y)*y),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(m=(t.min.z-x.z)*_,g=(t.max.z-x.z)*_):(m=(t.max.z-x.z)*_,g=(t.min.z-x.z)*_),s>g||m>l)||((m>s||s!==s)&&(s=m),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Na)!==null}intersectTriangle(t,i,s,l,c){Gf.subVectors(i,t),Tc.subVectors(s,t),Vf.crossVectors(Gf,Tc);let h=this.direction.dot(Vf),m;if(h>0){if(l)return null;m=1}else if(h<0)m=-1,h=-h;else return null;ds.subVectors(this.origin,t);const g=m*this.direction.dot(Tc.crossVectors(ds,Tc));if(g<0)return null;const p=m*this.direction.dot(Gf.cross(ds));if(p<0||g+p>h)return null;const y=-m*ds.dot(Vf);return y<0?null:this.at(y/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class na extends il{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ys,this.combine=vv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Lx=new Cn,Bs=new kv,Ac=new nu,Ux=new ie,wc=new ie,Cc=new ie,Rc=new ie,Xf=new ie,Nc=new ie,zx=new ie,Dc=new ie;class Ln extends ui{constructor(t=new Yn,i=new na){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const m=this.morphTargetInfluences;if(c&&m){Nc.set(0,0,0);for(let g=0,p=c.length;g<p;g++){const y=m[g],_=c[g];y!==0&&(Xf.fromBufferAttribute(_,t),h?Nc.addScaledVector(Xf,y):Nc.addScaledVector(Xf.sub(i),y))}i.add(Nc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(c),Bs.copy(t.ray).recast(t.near),!(Ac.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Ac,Ux)===null||Bs.origin.distanceToSquared(Ux)>(t.far-t.near)**2))&&(Lx.copy(c).invert(),Bs.copy(t.ray).applyMatrix4(Lx),!(s.boundingBox!==null&&Bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Bs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,m=c.index,g=c.attributes.position,p=c.attributes.uv,y=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(m!==null)if(Array.isArray(h))for(let A=0,U=x.length;A<U;A++){const S=x[A],b=h[S.materialIndex],w=Math.max(S.start,M.start),z=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=w,G=z;D<G;D+=3){const O=m.getX(D),F=m.getX(D+1),T=m.getX(D+2);l=Lc(this,b,t,s,p,y,_,O,F,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),U=Math.min(m.count,M.start+M.count);for(let S=A,b=U;S<b;S+=3){const w=m.getX(S),z=m.getX(S+1),D=m.getX(S+2);l=Lc(this,h,t,s,p,y,_,w,z,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(h))for(let A=0,U=x.length;A<U;A++){const S=x[A],b=h[S.materialIndex],w=Math.max(S.start,M.start),z=Math.min(g.count,Math.min(S.start+S.count,M.start+M.count));for(let D=w,G=z;D<G;D+=3){const O=D,F=D+1,T=D+2;l=Lc(this,b,t,s,p,y,_,O,F,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),U=Math.min(g.count,M.start+M.count);for(let S=A,b=U;S<b;S+=3){const w=S,z=S+1,D=S+2;l=Lc(this,h,t,s,p,y,_,w,z,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function OS(r,t,i,s,l,c,h,m){let g;if(t.side===$n?g=s.intersectTriangle(h,c,l,!0,m):g=s.intersectTriangle(l,c,h,t.side===ms,m),g===null)return null;Dc.copy(m),Dc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Dc);return p<i.near||p>i.far?null:{distance:p,point:Dc.clone(),object:r}}function Lc(r,t,i,s,l,c,h,m,g,p){r.getVertexPosition(m,wc),r.getVertexPosition(g,Cc),r.getVertexPosition(p,Rc);const y=OS(r,t,i,s,wc,Cc,Rc,zx);if(y){const _=new ie;Vi.getBarycoord(zx,wc,Cc,Rc,_),l&&(y.uv=Vi.getInterpolatedAttribute(l,m,g,p,_,new Xt)),c&&(y.uv1=Vi.getInterpolatedAttribute(c,m,g,p,_,new Xt)),h&&(y.normal=Vi.getInterpolatedAttribute(h,m,g,p,_,new ie),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const x={a:m,b:g,c:p,normal:new ie,materialIndex:0};Vi.getNormal(wc,Cc,Rc,x.normal),y.face=x,y.barycoord=_}return y}class PS extends qn{constructor(t=null,i=1,s=1,l,c,h,m,g,p=Hn,y=Hn,_,x){super(null,h,m,g,p,y,l,c,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wf=new ie,IS=new ie,FS=new Et;class js{constructor(t=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Wf.subVectors(s,i).cross(IS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Wf),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||FS.getNormalMatrix(t),l=this.coplanarPoint(Wf).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ks=new nu,BS=new Xt(.5,.5),Uc=new ie;class jv{constructor(t=new js,i=new js,s=new js,l=new js,c=new js,h=new js){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const m=this.planes;return m[0].copy(t),m[1].copy(i),m[2].copy(s),m[3].copy(l),m[4].copy(c),m[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=sa,s=!1){const l=this.planes,c=t.elements,h=c[0],m=c[1],g=c[2],p=c[3],y=c[4],_=c[5],x=c[6],M=c[7],A=c[8],U=c[9],S=c[10],b=c[11],w=c[12],z=c[13],D=c[14],G=c[15];if(l[0].setComponents(p-h,M-y,b-A,G-w).normalize(),l[1].setComponents(p+h,M+y,b+A,G+w).normalize(),l[2].setComponents(p+m,M+_,b+U,G+z).normalize(),l[3].setComponents(p-m,M-_,b-U,G-z).normalize(),s)l[4].setComponents(g,x,S,D).normalize(),l[5].setComponents(p-g,M-x,b-S,G-D).normalize();else if(l[4].setComponents(p-g,M-x,b-S,G-D).normalize(),i===sa)l[5].setComponents(p+g,M+x,b+S,G+D).normalize();else if(i===Qc)l[5].setComponents(g,x,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(t){ks.center.set(0,0,0);const i=BS.distanceTo(t.center);return ks.radius=.7071067811865476+i,ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Uc.x=l.normal.x>0?t.max.x:t.min.x,Uc.y=l.normal.y>0?t.max.y:t.min.y,Uc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vh extends il{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ox=new Cn,Xh=new kv,zc=new nu,Oc=new ie;class Px extends ui{constructor(t=new Yn,i=new Vh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,t.ray.intersectsSphere(zc)===!1)return;Ox.copy(l).invert(),Xh.copy(t.ray).applyMatrix4(Ox);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=m*m,p=s.index,_=s.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let A=x,U=M;A<U;A++){const S=p.getX(A);Oc.fromBufferAttribute(_,S),Ix(Oc,S,g,l,t,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(_.count,h.start+h.count);for(let A=x,U=M;A<U;A++)Oc.fromBufferAttribute(_,A),Ix(Oc,A,g,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function Ix(r,t,i,s,l,c,h){const m=Xh.distanceSqToPoint(r);if(m<i){const g=new ie;Xh.closestPointToPoint(r,g),g.applyMatrix4(s);const p=l.ray.origin.distanceTo(g);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(m),point:g,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class Hv extends qn{constructor(t=[],i=Ws,s,l,c,h,m,g,p,y){super(t,i,s,l,c,h,m,g,p,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kS extends qn{constructor(t,i,s,l,c,h,m,g,p){super(t,i,s,l,c,h,m,g,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xr extends qn{constructor(t,i,s=la,l,c,h,m=Hn,g=Hn,p,y=Pa,_=1){if(y!==Pa&&y!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,h,m,g,y,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jS extends Xr{constructor(t,i=la,s=Ws,l,c,h=Hn,m=Hn,g,p=Pa){const y={width:t,height:t,depth:1},_=[y,y,y,y,y,y];super(t,t,i,s,l,c,h,m,g,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Gv extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class al extends Yn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const m=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const g=[],p=[],y=[],_=[];let x=0,M=0;A("z","y","x",-1,-1,s,i,t,h,c,0),A("z","y","x",1,-1,s,i,-t,h,c,1),A("x","z","y",1,1,t,s,i,l,h,2),A("x","z","y",1,-1,t,s,-i,l,h,3),A("x","y","z",1,-1,t,i,s,l,c,4),A("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new Sn(p,3)),this.setAttribute("normal",new Sn(y,3)),this.setAttribute("uv",new Sn(_,2));function A(U,S,b,w,z,D,G,O,F,T,I){const W=D/F,j=G/T,Z=D/2,me=G/2,ve=O/2,q=F+1,P=T+1;let H=0,ne=0;const Se=new ie;for(let ae=0;ae<P;ae++){const N=ae*j-me;for(let X=0;X<q;X++){const k=X*W-Z;Se[U]=k*w,Se[S]=N*z,Se[b]=ve,p.push(Se.x,Se.y,Se.z),Se[U]=0,Se[S]=0,Se[b]=O>0?1:-1,y.push(Se.x,Se.y,Se.z),_.push(X/F),_.push(1-ae/T),H+=1}}for(let ae=0;ae<T;ae++)for(let N=0;N<F;N++){const X=x+N+q*ae,k=x+N+q*(ae+1),_e=x+(N+1)+q*(ae+1),we=x+(N+1)+q*ae;g.push(X,k,we),g.push(k,_e,we),ne+=6}m.addGroup(M,ne,I),M+=ne,x+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Qo extends Yn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,m=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:m,thetaLength:g};const p=this;l=Math.floor(l),c=Math.floor(c);const y=[],_=[],x=[],M=[];let A=0;const U=[],S=s/2;let b=0;w(),h===!1&&(t>0&&z(!0),i>0&&z(!1)),this.setIndex(y),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(x,3)),this.setAttribute("uv",new Sn(M,2));function w(){const D=new ie,G=new ie;let O=0;const F=(i-t)/s;for(let T=0;T<=c;T++){const I=[],W=T/c,j=W*(i-t)+t;for(let Z=0;Z<=l;Z++){const me=Z/l,ve=me*g+m,q=Math.sin(ve),P=Math.cos(ve);G.x=j*q,G.y=-W*s+S,G.z=j*P,_.push(G.x,G.y,G.z),D.set(q,F,P).normalize(),x.push(D.x,D.y,D.z),M.push(me,1-W),I.push(A++)}U.push(I)}for(let T=0;T<l;T++)for(let I=0;I<c;I++){const W=U[I][T],j=U[I+1][T],Z=U[I+1][T+1],me=U[I][T+1];(t>0||I!==0)&&(y.push(W,j,me),O+=3),(i>0||I!==c-1)&&(y.push(j,Z,me),O+=3)}p.addGroup(b,O,0),b+=O}function z(D){const G=A,O=new Xt,F=new ie;let T=0;const I=D===!0?t:i,W=D===!0?1:-1;for(let Z=1;Z<=l;Z++)_.push(0,S*W,0),x.push(0,W,0),M.push(.5,.5),A++;const j=A;for(let Z=0;Z<=l;Z++){const ve=Z/l*g+m,q=Math.cos(ve),P=Math.sin(ve);F.x=I*P,F.y=S*W,F.z=I*q,_.push(F.x,F.y,F.z),x.push(0,W,0),O.x=q*.5+.5,O.y=P*.5*W+.5,M.push(O.x,O.y),A++}for(let Z=0;Z<l;Z++){const me=G+Z,ve=j+Z;D===!0?y.push(ve,ve+1,me):y.push(ve+1,ve,me),T+=3}p.addGroup(b,T,D===!0?1:2),b+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class op extends Yn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],h=[];m(l),p(s),y(),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(c.slice(),3)),this.setAttribute("uv",new Sn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function m(w){const z=new ie,D=new ie,G=new ie;for(let O=0;O<i.length;O+=3)M(i[O+0],z),M(i[O+1],D),M(i[O+2],G),g(z,D,G,w)}function g(w,z,D,G){const O=G+1,F=[];for(let T=0;T<=O;T++){F[T]=[];const I=w.clone().lerp(D,T/O),W=z.clone().lerp(D,T/O),j=O-T;for(let Z=0;Z<=j;Z++)Z===0&&T===O?F[T][Z]=I:F[T][Z]=I.clone().lerp(W,Z/j)}for(let T=0;T<O;T++)for(let I=0;I<2*(O-T)-1;I++){const W=Math.floor(I/2);I%2===0?(x(F[T][W+1]),x(F[T+1][W]),x(F[T][W])):(x(F[T][W+1]),x(F[T+1][W+1]),x(F[T+1][W]))}}function p(w){const z=new ie;for(let D=0;D<c.length;D+=3)z.x=c[D+0],z.y=c[D+1],z.z=c[D+2],z.normalize().multiplyScalar(w),c[D+0]=z.x,c[D+1]=z.y,c[D+2]=z.z}function y(){const w=new ie;for(let z=0;z<c.length;z+=3){w.x=c[z+0],w.y=c[z+1],w.z=c[z+2];const D=S(w)/2/Math.PI+.5,G=b(w)/Math.PI+.5;h.push(D,1-G)}A(),_()}function _(){for(let w=0;w<h.length;w+=6){const z=h[w+0],D=h[w+2],G=h[w+4],O=Math.max(z,D,G),F=Math.min(z,D,G);O>.9&&F<.1&&(z<.2&&(h[w+0]+=1),D<.2&&(h[w+2]+=1),G<.2&&(h[w+4]+=1))}}function x(w){c.push(w.x,w.y,w.z)}function M(w,z){const D=w*3;z.x=t[D+0],z.y=t[D+1],z.z=t[D+2]}function A(){const w=new ie,z=new ie,D=new ie,G=new ie,O=new Xt,F=new Xt,T=new Xt;for(let I=0,W=0;I<c.length;I+=9,W+=6){w.set(c[I+0],c[I+1],c[I+2]),z.set(c[I+3],c[I+4],c[I+5]),D.set(c[I+6],c[I+7],c[I+8]),O.set(h[W+0],h[W+1]),F.set(h[W+2],h[W+3]),T.set(h[W+4],h[W+5]),G.copy(w).add(z).add(D).divideScalar(3);const j=S(G);U(O,W+0,w,j),U(F,W+2,z,j),U(T,W+4,D,j)}}function U(w,z,D,G){G<0&&w.x===1&&(h[z]=w.x-1),D.x===0&&D.z===0&&(h[z]=G/2/Math.PI+.5)}function S(w){return Math.atan2(w.z,-w.x)}function b(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new op(t.vertices,t.indices,t.radius,t.detail)}}class lp extends op{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new lp(t.radius,t.detail)}}class sl extends Yn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,m=Math.floor(s),g=Math.floor(l),p=m+1,y=g+1,_=t/m,x=i/g,M=[],A=[],U=[],S=[];for(let b=0;b<y;b++){const w=b*x-h;for(let z=0;z<p;z++){const D=z*_-c;A.push(D,-w,0),U.push(0,0,1),S.push(z/m),S.push(1-b/g)}}for(let b=0;b<g;b++)for(let w=0;w<m;w++){const z=w+p*b,D=w+p*(b+1),G=w+1+p*(b+1),O=w+1+p*b;M.push(z,D,O),M.push(D,G,O)}this.setIndex(M),this.setAttribute("position",new Sn(A,3)),this.setAttribute("normal",new Sn(U,3)),this.setAttribute("uv",new Sn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jo extends Yn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:m},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const g=Math.min(h+m,Math.PI);let p=0;const y=[],_=new ie,x=new ie,M=[],A=[],U=[],S=[];for(let b=0;b<=s;b++){const w=[],z=b/s;let D=0;b===0&&h===0?D=.5/i:b===s&&g===Math.PI&&(D=-.5/i);for(let G=0;G<=i;G++){const O=G/i;_.x=-t*Math.cos(l+O*c)*Math.sin(h+z*m),_.y=t*Math.cos(h+z*m),_.z=t*Math.sin(l+O*c)*Math.sin(h+z*m),A.push(_.x,_.y,_.z),x.copy(_).normalize(),U.push(x.x,x.y,x.z),S.push(O+D,1-z),w.push(p++)}y.push(w)}for(let b=0;b<s;b++)for(let w=0;w<i;w++){const z=y[b][w+1],D=y[b][w],G=y[b+1][w],O=y[b+1][w+1];(b!==0||h>0)&&M.push(z,D,O),(b!==s-1||g<Math.PI)&&M.push(D,G,O)}this.setIndex(M),this.setAttribute("position",new Sn(A,3)),this.setAttribute("normal",new Sn(U,3)),this.setAttribute("uv",new Sn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $c extends Yn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,h=0,m=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:h,thetaLength:m},s=Math.floor(s),l=Math.floor(l);const g=[],p=[],y=[],_=[],x=new ie,M=new ie,A=new ie;for(let U=0;U<=s;U++){const S=h+U/s*m;for(let b=0;b<=l;b++){const w=b/l*c;M.x=(t+i*Math.cos(S))*Math.cos(w),M.y=(t+i*Math.cos(S))*Math.sin(w),M.z=i*Math.sin(S),p.push(M.x,M.y,M.z),x.x=t*Math.cos(w),x.y=t*Math.sin(w),A.subVectors(M,x).normalize(),y.push(A.x,A.y,A.z),_.push(b/l),_.push(U/s)}}for(let U=1;U<=s;U++)for(let S=1;S<=l;S++){const b=(l+1)*U+S-1,w=(l+1)*(U-1)+S-1,z=(l+1)*(U-1)+S,D=(l+1)*U+S;g.push(b,w,D),g.push(w,z,D)}this.setIndex(g),this.setAttribute("position",new Sn(p,3)),this.setAttribute("normal",new Sn(y,3)),this.setAttribute("uv",new Sn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Wr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(Fx(l))l.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(Fx(l[0])){const c=[];for(let h=0,m=l.length;h<m;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Jn(r){const t={};for(let i=0;i<r.length;i++){const s=Wr(r[i]);for(const l in s)t[l]=s[l]}return t}function Fx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function HS(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Vv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:It.workingColorSpace}const GS={clone:Wr,merge:Jn};var VS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends il{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VS,this.fragmentShader=XS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=HS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class WS extends zi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qS extends il{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class YS extends il{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Pc=new ie,Ic=new qr,ea=new ie;class Xv extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Cn,this.projectionMatrix=new Cn,this.projectionMatrixInverse=new Cn,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pc,Ic,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,Ic,ea.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Pc,Ic,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,Ic,ea.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fs=new ie,Bx=new Xt,kx=new Xt;class Di extends Xv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Gh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gh*2*Math.atan(Math.tan(Mf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-t/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(fs.x,fs.y).multiplyScalar(-t/fs.z)}getViewSize(t,i){return this.getViewBounds(t,Bx,kx),i.subVectors(kx,Bx)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Mf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/g,i-=h.offsetY*s/p,l*=h.width/g,s*=h.height/p}const m=this.filmOffset;m!==0&&(c+=t*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Wv extends Xv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,m=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,m-=y*this.view.offsetY,g=m-y*this.view.height}this.projectionMatrix.makeOrthographic(c,h,m,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Fr=-90,Br=1;class ZS extends ui{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Di(Fr,Br,t,i);l.layers=this.layers,this.add(l);const c=new Di(Fr,Br,t,i);c.layers=this.layers,this.add(c);const h=new Di(Fr,Br,t,i);h.layers=this.layers,this.add(h);const m=new Di(Fr,Br,t,i);m.layers=this.layers,this.add(m);const g=new Di(Fr,Br,t,i);g.layers=this.layers,this.add(g);const p=new Di(Fr,Br,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,m,g]=i;for(const p of i)this.remove(p);if(t===sa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===Qc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,m,g,p,y]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(s,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=U,t.setRenderTarget(s,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,y),t.setRenderTarget(_,x,M),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class KS extends Di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const hp=class hp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};hp.prototype.isMatrix2=!0;let jx=hp;function Hx(r,t,i,s){const l=QS(s);switch(i){case Dv:return r*t;case Uv:return r*t/l.components*l.byteLength;case ep:return r*t/l.components*l.byteLength;case qs:return r*t*2/l.components*l.byteLength;case tp:return r*t*2/l.components*l.byteLength;case Lv:return r*t*3/l.components*l.byteLength;case Xi:return r*t*4/l.components*l.byteLength;case np:return r*t*4/l.components*l.byteLength;case jc:case Hc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Gc:case Vc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hh:case mh:return Math.max(r,16)*Math.max(t,8)/4;case fh:case ph:return Math.max(r,8)*Math.max(t,8)/2;case gh:case xh:case _h:case bh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case vh:case qc:case yh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Th:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case wh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Uh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case zh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Oh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ph:case Ih:case Fh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Bh:case kh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Yc:case jh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function QS(r){switch(r){case Ui:case wv:return{byteLength:1,components:1};case $o:case Cv:case Oa:return{byteLength:2,components:1};case Jh:case $h:return{byteLength:2,components:4};case la:case Qh:case aa:return{byteLength:4,components:1};case Rv:case Nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function JS(r){const t=new WeakMap;function i(m,g){const p=m.array,y=m.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(g,x),r.bufferData(g,p,y),m.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)m.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:m.version,size:_}}function s(m,g,p){const y=g.array,_=g.updateRanges;if(r.bindBuffer(p,m),_.length===0)r.bufferSubData(p,0,y);else{_.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<_.length;M++){const A=_[x],U=_[M];U.start<=A.start+A.count+1?A.count=Math.max(A.count,U.start+U.count-A.start):(++x,_[x]=U)}_.length=x+1;for(let M=0,A=_.length;M<A;M++){const U=_[M];r.bufferSubData(p,U.start*y.BYTES_PER_ELEMENT,y,U.start,U.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),t.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=t.get(m);g&&(r.deleteBuffer(g.buffer),t.delete(m))}function h(m,g){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const y=t.get(m);(!y||y.version<m.version)&&t.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const p=t.get(m);if(p===void 0)t.set(m,i(m,g));else if(p.version<m.version){if(p.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,m,g),p.version=m.version}}return{get:l,remove:c,update:h}}var $S=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eM=`#ifdef USE_ALPHAHASH
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
#endif`,tM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sM=`#ifdef USE_AOMAP
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
#endif`,rM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oM=`#ifdef USE_BATCHING
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
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fM=`#ifdef USE_IRIDESCENCE
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
#endif`,hM=`#ifdef USE_BUMPMAP
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,SM=`#define PI 3.141592653589793
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
} // validated`,MM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EM=`vec3 transformedNormal = objectNormal;
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
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RM="gl_FragColor = linearToOutputTexel( gl_FragColor );",NM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kM=`#ifdef USE_GRADIENTMAP
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
}`,jM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,XM=`#ifdef USE_ENVMAP
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
#endif`,WM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KM=`PhysicalMaterial material;
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
#endif`,QM=`uniform sampler2D dfgLUT;
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
}`,JM=`
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
#endif`,$M=`#if defined( RE_IndirectDiffuse )
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
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,nE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cE=`#if defined( USE_POINTS_UV )
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
#endif`,uE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`#ifdef USE_MORPHTARGETS
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
#endif`,gE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SE=`#ifdef USE_NORMALMAP
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
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FE=`float getShadowMask() {
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
}`,BE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
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
#endif`,jE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HE=`#ifdef USE_SKINNING
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
#endif`,GE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e2=`uniform sampler2D t2D;
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
}`,t2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s2=`#include <common>
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
}`,r2=`#if DEPTH_PACKING == 3200
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
}`,o2=`#define DISTANCE
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
}`,l2=`#define DISTANCE
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
}`,c2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d2=`uniform float scale;
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
}`,f2=`uniform vec3 diffuse;
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
}`,h2=`#include <common>
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
}`,p2=`uniform vec3 diffuse;
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
}`,m2=`#define LAMBERT
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
}`,g2=`#define LAMBERT
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
}`,x2=`#define MATCAP
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
}`,v2=`#define MATCAP
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
}`,_2=`#define NORMAL
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
}`,b2=`#define NORMAL
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
}`,y2=`#define PHONG
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
}`,S2=`#define PHONG
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
}`,M2=`#define STANDARD
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
}`,E2=`#define STANDARD
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
}`,T2=`#define TOON
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
}`,A2=`#define TOON
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
}`,w2=`uniform float size;
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
}`,C2=`uniform vec3 diffuse;
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
}`,R2=`#include <common>
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
}`,N2=`uniform vec3 color;
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
}`,D2=`uniform float rotation;
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
}`,L2=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:$S,alphahash_pars_fragment:eM,alphamap_fragment:tM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:aM,aomap_fragment:sM,aomap_pars_fragment:rM,batching_pars_vertex:oM,batching_vertex:lM,begin_vertex:cM,beginnormal_vertex:uM,bsdfs:dM,iridescence_fragment:fM,bumpmap_pars_fragment:hM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:xM,color_fragment:vM,color_pars_fragment:_M,color_pars_vertex:bM,color_vertex:yM,common:SM,cube_uv_reflection_fragment:MM,defaultnormal_vertex:EM,displacementmap_pars_vertex:TM,displacementmap_vertex:AM,emissivemap_fragment:wM,emissivemap_pars_fragment:CM,colorspace_fragment:RM,colorspace_pars_fragment:NM,envmap_fragment:DM,envmap_common_pars_fragment:LM,envmap_pars_fragment:UM,envmap_pars_vertex:zM,envmap_physical_pars_fragment:XM,envmap_vertex:OM,fog_vertex:PM,fog_pars_vertex:IM,fog_fragment:FM,fog_pars_fragment:BM,gradientmap_pars_fragment:kM,lightmap_pars_fragment:jM,lights_lambert_fragment:HM,lights_lambert_pars_fragment:GM,lights_pars_begin:VM,lights_toon_fragment:WM,lights_toon_pars_fragment:qM,lights_phong_fragment:YM,lights_phong_pars_fragment:ZM,lights_physical_fragment:KM,lights_physical_pars_fragment:QM,lights_fragment_begin:JM,lights_fragment_maps:$M,lights_fragment_end:eE,lightprobes_pars_fragment:tE,logdepthbuf_fragment:nE,logdepthbuf_pars_fragment:iE,logdepthbuf_pars_vertex:aE,logdepthbuf_vertex:sE,map_fragment:rE,map_pars_fragment:oE,map_particle_fragment:lE,map_particle_pars_fragment:cE,metalnessmap_fragment:uE,metalnessmap_pars_fragment:dE,morphinstance_vertex:fE,morphcolor_vertex:hE,morphnormal_vertex:pE,morphtarget_pars_vertex:mE,morphtarget_vertex:gE,normal_fragment_begin:xE,normal_fragment_maps:vE,normal_pars_fragment:_E,normal_pars_vertex:bE,normal_vertex:yE,normalmap_pars_fragment:SE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:EE,clearcoat_pars_fragment:TE,iridescence_pars_fragment:AE,opaque_fragment:wE,packing:CE,premultiplied_alpha_fragment:RE,project_vertex:NE,dithering_fragment:DE,dithering_pars_fragment:LE,roughnessmap_fragment:UE,roughnessmap_pars_fragment:zE,shadowmap_pars_fragment:OE,shadowmap_pars_vertex:PE,shadowmap_vertex:IE,shadowmask_pars_fragment:FE,skinbase_vertex:BE,skinning_pars_vertex:kE,skinning_vertex:jE,skinnormal_vertex:HE,specularmap_fragment:GE,specularmap_pars_fragment:VE,tonemapping_fragment:XE,tonemapping_pars_fragment:WE,transmission_fragment:qE,transmission_pars_fragment:YE,uv_pars_fragment:ZE,uv_pars_vertex:KE,uv_vertex:QE,worldpos_vertex:JE,background_vert:$E,background_frag:e2,backgroundCube_vert:t2,backgroundCube_frag:n2,cube_vert:i2,cube_frag:a2,depth_vert:s2,depth_frag:r2,distance_vert:o2,distance_frag:l2,equirect_vert:c2,equirect_frag:u2,linedashed_vert:d2,linedashed_frag:f2,meshbasic_vert:h2,meshbasic_frag:p2,meshlambert_vert:m2,meshlambert_frag:g2,meshmatcap_vert:x2,meshmatcap_frag:v2,meshnormal_vert:_2,meshnormal_frag:b2,meshphong_vert:y2,meshphong_frag:S2,meshphysical_vert:M2,meshphysical_frag:E2,meshtoon_vert:T2,meshtoon_frag:A2,points_vert:w2,points_frag:C2,shadow_vert:R2,shadow_frag:N2,sprite_vert:D2,sprite_frag:L2},Ze={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},ia={basic:{uniforms:Jn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Jn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Jn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Jn([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Jn([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new Bt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Jn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Jn([Ze.points,Ze.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Jn([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Jn([Ze.common,Ze.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Jn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Jn([Ze.sprite,Ze.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Jn([Ze.common,Ze.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Jn([Ze.lights,Ze.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};ia.physical={uniforms:Jn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Fc={r:0,b:0,g:0},U2=new Cn,Yv=new Et;Yv.set(-1,0,0,0,1,0,0,0,1);function z2(r,t,i,s,l,c){const h=new Bt(0);let m=l===!0?0:1,g,p,y=null,_=0,x=null;function M(w){let z=w.isScene===!0?w.background:null;if(z&&z.isTexture){const D=w.backgroundBlurriness>0;z=t.get(z,D)}return z}function A(w){let z=!1;const D=M(w);D===null?S(h,m):D&&D.isColor&&(S(D,1),z=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function U(w,z){const D=M(z);D&&(D.isCubeTexture||D.mapping===tu)?(p===void 0&&(p=new Ln(new al(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Wr(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(G,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=D,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(U2.makeRotationFromEuler(z.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Yv),p.material.toneMapped=It.getTransfer(D.colorSpace)!==Jt,(y!==D||_!==D.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,y=D,_=D.version,x=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(g===void 0&&(g=new Ln(new sl(2,2),new zi({name:"BackgroundMaterial",uniforms:Wr(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=D,g.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,g.material.toneMapped=It.getTransfer(D.colorSpace)!==Jt,D.matrixAutoUpdate===!0&&D.updateMatrix(),g.material.uniforms.uvTransform.value.copy(D.matrix),(y!==D||_!==D.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,y=D,_=D.version,x=r.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null))}function S(w,z){w.getRGB(Fc,Vv(r)),i.buffers.color.setClear(Fc.r,Fc.g,Fc.b,z,c)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,z=1){h.set(w),m=z,S(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(w){m=w,S(h,m)},render:A,addToRenderList:U,dispose:b}}function O2(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function m(j,Z,me,ve,q){let P=!1;const H=_(j,ve,me,Z);c!==H&&(c=H,p(c.object)),P=M(j,ve,me,q),P&&A(j,ve,me,q),q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),(P||h)&&(h=!1,D(j,Z,me,ve),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function g(){return r.createVertexArray()}function p(j){return r.bindVertexArray(j)}function y(j){return r.deleteVertexArray(j)}function _(j,Z,me,ve){const q=ve.wireframe===!0;let P=s[Z.id];P===void 0&&(P={},s[Z.id]=P);const H=j.isInstancedMesh===!0?j.id:0;let ne=P[H];ne===void 0&&(ne={},P[H]=ne);let Se=ne[me.id];Se===void 0&&(Se={},ne[me.id]=Se);let ae=Se[q];return ae===void 0&&(ae=x(g()),Se[q]=ae),ae}function x(j){const Z=[],me=[],ve=[];for(let q=0;q<i;q++)Z[q]=0,me[q]=0,ve[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:me,attributeDivisors:ve,object:j,attributes:{},index:null}}function M(j,Z,me,ve){const q=c.attributes,P=Z.attributes;let H=0;const ne=me.getAttributes();for(const Se in ne)if(ne[Se].location>=0){const N=q[Se];let X=P[Se];if(X===void 0&&(Se==="instanceMatrix"&&j.instanceMatrix&&(X=j.instanceMatrix),Se==="instanceColor"&&j.instanceColor&&(X=j.instanceColor)),N===void 0||N.attribute!==X||X&&N.data!==X.data)return!0;H++}return c.attributesNum!==H||c.index!==ve}function A(j,Z,me,ve){const q={},P=Z.attributes;let H=0;const ne=me.getAttributes();for(const Se in ne)if(ne[Se].location>=0){let N=P[Se];N===void 0&&(Se==="instanceMatrix"&&j.instanceMatrix&&(N=j.instanceMatrix),Se==="instanceColor"&&j.instanceColor&&(N=j.instanceColor));const X={};X.attribute=N,N&&N.data&&(X.data=N.data),q[Se]=X,H++}c.attributes=q,c.attributesNum=H,c.index=ve}function U(){const j=c.newAttributes;for(let Z=0,me=j.length;Z<me;Z++)j[Z]=0}function S(j){b(j,0)}function b(j,Z){const me=c.newAttributes,ve=c.enabledAttributes,q=c.attributeDivisors;me[j]=1,ve[j]===0&&(r.enableVertexAttribArray(j),ve[j]=1),q[j]!==Z&&(r.vertexAttribDivisor(j,Z),q[j]=Z)}function w(){const j=c.newAttributes,Z=c.enabledAttributes;for(let me=0,ve=Z.length;me<ve;me++)Z[me]!==j[me]&&(r.disableVertexAttribArray(me),Z[me]=0)}function z(j,Z,me,ve,q,P,H){H===!0?r.vertexAttribIPointer(j,Z,me,q,P):r.vertexAttribPointer(j,Z,me,ve,q,P)}function D(j,Z,me,ve){U();const q=ve.attributes,P=me.getAttributes(),H=Z.defaultAttributeValues;for(const ne in P){const Se=P[ne];if(Se.location>=0){let ae=q[ne];if(ae===void 0&&(ne==="instanceMatrix"&&j.instanceMatrix&&(ae=j.instanceMatrix),ne==="instanceColor"&&j.instanceColor&&(ae=j.instanceColor)),ae!==void 0){const N=ae.normalized,X=ae.itemSize,k=t.get(ae);if(k===void 0)continue;const _e=k.buffer,we=k.type,J=k.bytesPerElement,Te=we===r.INT||we===r.UNSIGNED_INT||ae.gpuType===Qh;if(ae.isInterleavedBufferAttribute){const Ne=ae.data,We=Ne.stride,at=ae.offset;if(Ne.isInstancedInterleavedBuffer){for(let tt=0;tt<Se.locationSize;tt++)b(Se.location+tt,Ne.meshPerAttribute);j.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let tt=0;tt<Se.locationSize;tt++)S(Se.location+tt);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let tt=0;tt<Se.locationSize;tt++)z(Se.location+tt,X/Se.locationSize,we,N,We*J,(at+X/Se.locationSize*tt)*J,Te)}else{if(ae.isInstancedBufferAttribute){for(let Ne=0;Ne<Se.locationSize;Ne++)b(Se.location+Ne,ae.meshPerAttribute);j.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ne=0;Ne<Se.locationSize;Ne++)S(Se.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Ne=0;Ne<Se.locationSize;Ne++)z(Se.location+Ne,X/Se.locationSize,we,N,X*J,X/Se.locationSize*Ne*J,Te)}}else if(H!==void 0){const N=H[ne];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(Se.location,N);break;case 3:r.vertexAttrib3fv(Se.location,N);break;case 4:r.vertexAttrib4fv(Se.location,N);break;default:r.vertexAttrib1fv(Se.location,N)}}}}w()}function G(){I();for(const j in s){const Z=s[j];for(const me in Z){const ve=Z[me];for(const q in ve){const P=ve[q];for(const H in P)y(P[H].object),delete P[H];delete ve[q]}}delete s[j]}}function O(j){if(s[j.id]===void 0)return;const Z=s[j.id];for(const me in Z){const ve=Z[me];for(const q in ve){const P=ve[q];for(const H in P)y(P[H].object),delete P[H];delete ve[q]}}delete s[j.id]}function F(j){for(const Z in s){const me=s[Z];for(const ve in me){const q=me[ve];if(q[j.id]===void 0)continue;const P=q[j.id];for(const H in P)y(P[H].object),delete P[H];delete q[j.id]}}}function T(j){for(const Z in s){const me=s[Z],ve=j.isInstancedMesh===!0?j.id:0,q=me[ve];if(q!==void 0){for(const P in q){const H=q[P];for(const ne in H)y(H[ne].object),delete H[ne];delete q[P]}delete me[ve],Object.keys(me).length===0&&delete s[Z]}}}function I(){W(),h=!0,c!==l&&(c=l,p(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:I,resetDefaultState:W,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:U,enableAttribute:S,disableUnusedAttributes:w}}function P2(r,t,i){let s;function l(g){s=g}function c(g,p){r.drawArrays(s,g,p),i.update(p,s,1)}function h(g,p,y){y!==0&&(r.drawArraysInstanced(s,g,p,y),i.update(p,s,y))}function m(g,p,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,p,0,y);let x=0;for(let M=0;M<y;M++)x+=p[M];i.update(x,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=m}function I2(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Xi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(F){const T=F===Oa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Ui&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==aa&&!T)}function g(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const y=g(p);y!==p&&(vt("WebGLRenderer:",p,"not supported, using",y,"instead."),p=y);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),z=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:m,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:U,maxCubemapSize:S,maxAttributes:b,maxVertexUniforms:w,maxVaryings:z,maxFragmentUniforms:D,maxSamples:G,samples:O}}function F2(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new js,m=new Et,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=y(_,x,0)},this.setState=function(_,x,M){const A=_.clippingPlanes,U=_.clipIntersection,S=_.clipShadows,b=r.get(_);if(!l||A===null||A.length===0||c&&!S)c?y(null):p();else{const w=c?0:s,z=w*4;let D=b.clippingState||null;g.value=D,D=y(A,x,z,M);for(let G=0;G!==z;++G)D[G]=i[G];b.clippingState=D,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=w}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function y(_,x,M,A){const U=_!==null?_.length:0;let S=null;if(U!==0){if(S=g.value,A!==!0||S===null){const b=M+U*4,w=x.matrixWorldInverse;m.getNormalMatrix(w),(S===null||S.length<b)&&(S=new Float32Array(b));for(let z=0,D=M;z!==U;++z,D+=4)h.copy(_[z]).applyMatrix4(w,m),h.normal.toArray(S,D),S[D+3]=h.constant}g.value=S,g.needsUpdate=!0}return t.numPlanes=U,t.numIntersection=0,S}}const ps=4,Gx=[.125,.215,.35,.446,.526,.582],Gs=20,B2=256,Vo=new Wv,Vx=new Bt;let qf=null,Yf=0,Zf=0,Kf=!1;const k2=new ie;class Xx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:m=k2}=c;qf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(t,s,l,g,m),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qf,Yf,Zf),this._renderer.xr.enabled=Kf,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ws||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Oa,format:Xi,colorSpace:Zc,depthBuffer:!1},l=Wx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=j2(c)),this._blurMaterial=G2(c,t,i),this._ggxMaterial=H2(c,t,i)}return l}_compileMaterial(t){const i=new Ln(new Yn,t);this._renderer.compile(i,Vo)}_sceneToCubeUV(t,i,s,l,c){const g=new Di(90,1,i,s),p=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(Vx),_.toneMapping=ra,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ln(new al,new na({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,S=U.material;let b=!1;const w=t.background;w?w.isColor&&(S.color.copy(w),t.background=null,b=!0):(S.color.copy(Vx),b=!0);for(let z=0;z<6;z++){const D=z%3;D===0?(g.up.set(0,p[z],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+y[z],c.y,c.z)):D===1?(g.up.set(0,0,p[z]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+y[z],c.z)):(g.up.set(0,p[z],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+y[z]));const G=this._cubeSize;kr(l,D*G,z>2?G:0,G,G),_.setRenderTarget(l),b&&_.render(U,g),_.render(t,g)}_.toneMapping=M,_.autoClear=x,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ws||t.mapping===Vr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qx());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const m=c.uniforms;m.envMap.value=t;const g=this._cubeSize;kr(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(h,Vo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,m=this._lodMeshes[s];m.material=h;const g=h.uniforms,p=s/(this._lodMeshes.length-1),y=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-y*y),x=0+p*1.25,M=_*x,{_lodMax:A}=this,U=this._sizeLods[s],S=3*U*(s>A-ps?s-A+ps:0),b=4*(this._cubeSize-U);g.envMap.value=t.texture,g.roughness.value=M,g.mipInt.value=A-i,kr(c,S,b,3*U,2*U),l.setRenderTarget(c),l.render(m,Vo),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=A-s,kr(t,S,b,3*U,2*U),l.setRenderTarget(t),l.render(m,Vo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,m){const g=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&kt("blur direction must be either latitudinal or longitudinal!");const y=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,M=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Gs-1),U=c/A,S=isFinite(c)?1+Math.floor(y*U):Gs;S>Gs&&vt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Gs}`);const b=[];let w=0;for(let F=0;F<Gs;++F){const T=F/U,I=Math.exp(-T*T/2);b.push(I),F===0?w+=I:F<S&&(w+=2*I)}for(let F=0;F<b.length;F++)b[F]=b[F]/w;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=b,x.latitudinal.value=h==="latitudinal",m&&(x.poleAxis.value=m);const{_lodMax:z}=this;x.dTheta.value=A,x.mipInt.value=z-s;const D=this._sizeLods[l],G=3*D*(l>z-ps?l-z+ps:0),O=4*(this._cubeSize-D);kr(i,G,O,3*D,2*D),g.setRenderTarget(i),g.render(_,Vo)}}function j2(r){const t=[],i=[],s=[];let l=r;const c=r-ps+1+Gx.length;for(let h=0;h<c;h++){const m=Math.pow(2,l);t.push(m);let g=1/m;h>r-ps?g=Gx[h-r+ps-1]:h===0&&(g=0),i.push(g);const p=1/(m-2),y=-p,_=1+p,x=[y,y,_,y,_,_,y,y,_,_,y,_],M=6,A=6,U=3,S=2,b=1,w=new Float32Array(U*A*M),z=new Float32Array(S*A*M),D=new Float32Array(b*A*M);for(let O=0;O<M;O++){const F=O%3*2/3-1,T=O>2?0:-1,I=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];w.set(I,U*A*O),z.set(x,S*A*O);const W=[O,O,O,O,O,O];D.set(W,b*A*O)}const G=new Yn;G.setAttribute("position",new ci(w,U)),G.setAttribute("uv",new ci(z,S)),G.setAttribute("faceIndex",new ci(D,b)),s.push(new Ln(G,null)),l>ps&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Wx(r,t,i){const s=new oa(r,t,i);return s.texture.mapping=tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function kr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function H2(r,t,i){return new zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:B2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function G2(r,t,i){const s=new Float32Array(Gs),l=new ie(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function qx(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Yx(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function iu(){return`

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
	`}class Zv extends oa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Hv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new al(5,5,5),c=new zi({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:Ua});c.uniforms.tEquirect.value=i;const h=new Ln(l,c),m=i.minFilter;return i.minFilter===Vs&&(i.minFilter=Wn),new ZS(1,10,this).update(t,h),i.minFilter=m,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function V2(r){let t=new WeakMap,i=new WeakMap,s=null;function l(x,M=!1){return x==null?null:M?h(x):c(x)}function c(x){if(x&&x.isTexture){const M=x.mapping;if(M===bf||M===yf)if(t.has(x)){const A=t.get(x).texture;return m(A,x.mapping)}else{const A=x.image;if(A&&A.height>0){const U=new Zv(A.height);return U.fromEquirectangularTexture(r,x),t.set(x,U),x.addEventListener("dispose",p),m(U.texture,x.mapping)}else return null}}return x}function h(x){if(x&&x.isTexture){const M=x.mapping,A=M===bf||M===yf,U=M===Ws||M===Vr;if(A||U){let S=i.get(x);const b=S!==void 0?S.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==b)return s===null&&(s=new Xx(r)),S=A?s.fromEquirectangular(x,S):s.fromCubemap(x,S),S.texture.pmremVersion=x.pmremVersion,i.set(x,S),S.texture;if(S!==void 0)return S.texture;{const w=x.image;return A&&w&&w.height>0||U&&w&&g(w)?(s===null&&(s=new Xx(r)),S=A?s.fromEquirectangular(x):s.fromCubemap(x),S.texture.pmremVersion=x.pmremVersion,i.set(x,S),x.addEventListener("dispose",y),S.texture):null}}}return x}function m(x,M){return M===bf?x.mapping=Ws:M===yf&&(x.mapping=Vr),x}function g(x){let M=0;const A=6;for(let U=0;U<A;U++)x[U]!==void 0&&M++;return M===A}function p(x){const M=x.target;M.removeEventListener("dispose",p);const A=t.get(M);A!==void 0&&(t.delete(M),A.dispose())}function y(x){const M=x.target;M.removeEventListener("dispose",y);const A=i.get(M);A!==void 0&&(i.delete(M),A.dispose())}function _(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function X2(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Hh("WebGLRenderer: "+s+" extension not supported."),l}}}function W2(r,t,i,s){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const A in x.attributes)t.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function m(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function g(_){const x=_.attributes;for(const M in x)t.update(x[M],r.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,A=_.attributes.position;let U=0;if(A===void 0)return;if(M!==null){const w=M.array;U=M.version;for(let z=0,D=w.length;z<D;z+=3){const G=w[z+0],O=w[z+1],F=w[z+2];x.push(G,O,O,F,F,G)}}else{const w=A.array;U=A.version;for(let z=0,D=w.length/3-1;z<D;z+=3){const G=z+0,O=z+1,F=z+2;x.push(G,O,O,F,F,G)}}const S=new(A.count>=65535?Bv:Fv)(x,1);S.version=U;const b=c.get(_);b&&t.remove(b),c.set(_,S)}function y(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:m,update:g,getWireframeAttribute:y}}function q2(r,t,i){let s;function l(_){s=_}let c,h;function m(_){c=_.type,h=_.bytesPerElement}function g(_,x){r.drawElements(s,x,c,_*h),i.update(x,s,1)}function p(_,x,M){M!==0&&(r.drawElementsInstanced(s,x,c,_*h,M),i.update(x,s,M))}function y(_,x,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,_,0,M);let U=0;for(let S=0;S<M;S++)U+=x[S];i.update(U,s,1)}this.setMode=l,this.setIndex=m,this.render=g,this.renderInstances=p,this.renderMultiDraw=y}function Y2(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,m){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=m*(c/3);break;case r.LINES:i.lines+=m*(c/2);break;case r.LINE_STRIP:i.lines+=m*(c-1);break;case r.LINE_LOOP:i.lines+=m*c;break;case r.POINTS:i.points+=m*c;break;default:kt("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Z2(r,t,i){const s=new WeakMap,l=new yn;function c(h,m,g){const p=h.morphTargetInfluences,y=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,_=y!==void 0?y.length:0;let x=s.get(m);if(x===void 0||x.count!==_){let W=function(){T.dispose(),s.delete(m),m.removeEventListener("dispose",W)};var M=W;x!==void 0&&x.texture.dispose();const A=m.morphAttributes.position!==void 0,U=m.morphAttributes.normal!==void 0,S=m.morphAttributes.color!==void 0,b=m.morphAttributes.position||[],w=m.morphAttributes.normal||[],z=m.morphAttributes.color||[];let D=0;A===!0&&(D=1),U===!0&&(D=2),S===!0&&(D=3);let G=m.attributes.position.count*D,O=1;G>t.maxTextureSize&&(O=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const F=new Float32Array(G*O*4*_),T=new Ov(F,G,O,_);T.type=aa,T.needsUpdate=!0;const I=D*4;for(let j=0;j<_;j++){const Z=b[j],me=w[j],ve=z[j],q=G*O*4*j;for(let P=0;P<Z.count;P++){const H=P*I;A===!0&&(l.fromBufferAttribute(Z,P),F[q+H+0]=l.x,F[q+H+1]=l.y,F[q+H+2]=l.z,F[q+H+3]=0),U===!0&&(l.fromBufferAttribute(me,P),F[q+H+4]=l.x,F[q+H+5]=l.y,F[q+H+6]=l.z,F[q+H+7]=0),S===!0&&(l.fromBufferAttribute(ve,P),F[q+H+8]=l.x,F[q+H+9]=l.y,F[q+H+10]=l.z,F[q+H+11]=ve.itemSize===4?l.w:1)}}x={count:_,texture:T,size:new Xt(G,O)},s.set(m,x),m.addEventListener("dispose",W)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let A=0;for(let S=0;S<p.length;S++)A+=p[S];const U=m.morphTargetsRelative?1:1-A;g.getUniforms().setValue(r,"morphTargetBaseInfluence",U),g.getUniforms().setValue(r,"morphTargetInfluences",p)}g.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),g.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function K2(r,t,i,s,l){let c=new WeakMap;function h(p){const y=l.render.frame,_=p.geometry,x=t.get(p,_);if(c.get(x)!==y&&(t.update(x),c.set(x,y)),p.isInstancedMesh&&(p.hasEventListener("dispose",g)===!1&&p.addEventListener("dispose",g),c.get(p)!==y&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,y))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==y&&(M.update(),c.set(M,y))}return x}function m(){c=new WeakMap}function g(p){const y=p.target;y.removeEventListener("dispose",g),s.releaseStatesOfObject(y),i.remove(y.instanceMatrix),y.instanceColor!==null&&i.remove(y.instanceColor)}return{update:h,dispose:m}}const Q2={[_v]:"LINEAR_TONE_MAPPING",[bv]:"REINHARD_TONE_MAPPING",[yv]:"CINEON_TONE_MAPPING",[Sv]:"ACES_FILMIC_TONE_MAPPING",[Ev]:"AGX_TONE_MAPPING",[Tv]:"NEUTRAL_TONE_MAPPING",[Mv]:"CUSTOM_TONE_MAPPING"};function J2(r,t,i,s,l){const c=new oa(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Xr(t,i):void 0}),h=new oa(t,i,{type:Oa,depthBuffer:!1,stencilBuffer:!1}),m=new Yn;m.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Sn([0,2,0,0,2,0],2));const g=new WS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ln(m,g),y=new Wv(-1,1,1,-1,0,1);let _=null,x=null,M=!1,A,U=null,S=[],b=!1;this.setSize=function(w,z){c.setSize(w,z),h.setSize(w,z);for(let D=0;D<S.length;D++){const G=S[D];G.setSize&&G.setSize(w,z)}},this.setEffects=function(w){S=w,b=S.length>0&&S[0].isRenderPass===!0;const z=c.width,D=c.height;for(let G=0;G<S.length;G++){const O=S[G];O.setSize&&O.setSize(z,D)}},this.begin=function(w,z){if(M||w.toneMapping===ra&&S.length===0)return!1;if(U=z,z!==null){const D=z.width,G=z.height;(c.width!==D||c.height!==G)&&this.setSize(D,G)}return b===!1&&w.setRenderTarget(c),A=w.toneMapping,w.toneMapping=ra,!0},this.hasRenderPass=function(){return b},this.end=function(w,z){w.toneMapping=A,M=!0;let D=c,G=h;for(let O=0;O<S.length;O++){const F=S[O];if(F.enabled!==!1&&(F.render(w,G,D,z),F.needsSwap!==!1)){const T=D;D=G,G=T}}if(_!==w.outputColorSpace||x!==w.toneMapping){_=w.outputColorSpace,x=w.toneMapping,g.defines={},It.getTransfer(_)===Jt&&(g.defines.SRGB_TRANSFER="");const O=Q2[x];O&&(g.defines[O]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=D.texture,w.setRenderTarget(U),w.render(p,y),U=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),m.dispose(),g.dispose()}}const Kv=new qn,Wh=new Xr(1,1),Qv=new Ov,Jv=new SS,$v=new Hv,Zx=[],Kx=[],Qx=new Float32Array(16),Jx=new Float32Array(9),$x=new Float32Array(4);function Yr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Zx[l];if(c===void 0&&(c=new Float32Array(l),Zx[l]=c),t!==0){s.toArray(c,0);for(let h=1,m=0;h!==t;++h)m+=i,r[h].toArray(c,m)}return c}function Un(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function zn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function au(r,t){let i=Kx[t];i===void 0&&(i=new Int32Array(t),Kx[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function $2(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function eT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Un(i,t))return;r.uniform2fv(this.addr,t),zn(i,t)}}function tT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Un(i,t))return;r.uniform3fv(this.addr,t),zn(i,t)}}function nT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Un(i,t))return;r.uniform4fv(this.addr,t),zn(i,t)}}function iT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Un(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),zn(i,t)}else{if(Un(i,s))return;$x.set(s),r.uniformMatrix2fv(this.addr,!1,$x),zn(i,s)}}function aT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Un(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),zn(i,t)}else{if(Un(i,s))return;Jx.set(s),r.uniformMatrix3fv(this.addr,!1,Jx),zn(i,s)}}function sT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Un(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),zn(i,t)}else{if(Un(i,s))return;Qx.set(s),r.uniformMatrix4fv(this.addr,!1,Qx),zn(i,s)}}function rT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function oT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Un(i,t))return;r.uniform2iv(this.addr,t),zn(i,t)}}function lT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Un(i,t))return;r.uniform3iv(this.addr,t),zn(i,t)}}function cT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Un(i,t))return;r.uniform4iv(this.addr,t),zn(i,t)}}function uT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function dT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Un(i,t))return;r.uniform2uiv(this.addr,t),zn(i,t)}}function fT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Un(i,t))return;r.uniform3uiv(this.addr,t),zn(i,t)}}function hT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Un(i,t))return;r.uniform4uiv(this.addr,t),zn(i,t)}}function pT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Wh.compareFunction=i.isReversedDepthBuffer()?ap:ip,c=Wh):c=Kv,i.setTexture2D(t||c,l)}function mT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Jv,l)}function gT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||$v,l)}function xT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Qv,l)}function vT(r){switch(r){case 5126:return $2;case 35664:return eT;case 35665:return tT;case 35666:return nT;case 35674:return iT;case 35675:return aT;case 35676:return sT;case 5124:case 35670:return rT;case 35667:case 35671:return oT;case 35668:case 35672:return lT;case 35669:case 35673:return cT;case 5125:return uT;case 36294:return dT;case 36295:return fT;case 36296:return hT;case 35678:case 36198:case 36298:case 36306:case 35682:return pT;case 35679:case 36299:case 36307:return mT;case 35680:case 36300:case 36308:case 36293:return gT;case 36289:case 36303:case 36311:case 36292:return xT}}function _T(r,t){r.uniform1fv(this.addr,t)}function bT(r,t){const i=Yr(t,this.size,2);r.uniform2fv(this.addr,i)}function yT(r,t){const i=Yr(t,this.size,3);r.uniform3fv(this.addr,i)}function ST(r,t){const i=Yr(t,this.size,4);r.uniform4fv(this.addr,i)}function MT(r,t){const i=Yr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function ET(r,t){const i=Yr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function TT(r,t){const i=Yr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function AT(r,t){r.uniform1iv(this.addr,t)}function wT(r,t){r.uniform2iv(this.addr,t)}function CT(r,t){r.uniform3iv(this.addr,t)}function RT(r,t){r.uniform4iv(this.addr,t)}function NT(r,t){r.uniform1uiv(this.addr,t)}function DT(r,t){r.uniform2uiv(this.addr,t)}function LT(r,t){r.uniform3uiv(this.addr,t)}function UT(r,t){r.uniform4uiv(this.addr,t)}function zT(r,t,i){const s=this.cache,l=t.length,c=au(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=Wh:h=Kv;for(let m=0;m!==l;++m)i.setTexture2D(t[m]||h,c[m])}function OT(r,t,i){const s=this.cache,l=t.length,c=au(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Jv,c[h])}function PT(r,t,i){const s=this.cache,l=t.length,c=au(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||$v,c[h])}function IT(r,t,i){const s=this.cache,l=t.length,c=au(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Qv,c[h])}function FT(r){switch(r){case 5126:return _T;case 35664:return bT;case 35665:return yT;case 35666:return ST;case 35674:return MT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return AT;case 35667:case 35671:return wT;case 35668:case 35672:return CT;case 35669:case 35673:return RT;case 5125:return NT;case 36294:return DT;case 36295:return LT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return IT}}class BT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=vT(i.type)}}class kT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=FT(i.type)}}class jT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const m=l[c];m.setValue(t,i[m.id],s)}}}const Qf=/(\w+)(\])?(\[|\.)?/g;function ev(r,t){r.seq.push(t),r.map[t.id]=t}function HT(r,t,i){const s=r.name,l=s.length;for(Qf.lastIndex=0;;){const c=Qf.exec(s),h=Qf.lastIndex;let m=c[1];const g=c[2]==="]",p=c[3];if(g&&(m=m|0),p===void 0||p==="["&&h+2===l){ev(i,p===void 0?new BT(m,r,t):new kT(m,r,t));break}else{let _=i.map[m];_===void 0&&(_=new jT(m),ev(i,_)),i=_}}}class Xc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const m=t.getActiveUniform(i,h),g=t.getUniformLocation(i,m.name);HT(m,g,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const m=i[c],g=s[m.id];g.needsUpdate!==!1&&m.setValue(t,g.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function tv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const GT=37297;let VT=0;function XT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const m=h+1;s.push(`${m===t?">":" "} ${m}: ${i[h]}`)}return s.join(`
`)}const nv=new Et;function WT(r){It._getMatrix(nv,It.workingColorSpace,r);const t=`mat3( ${nv.elements.map(i=>i.toFixed(4))} )`;switch(It.getTransfer(r)){case Kc:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function iv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const m=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+XT(r.getShaderSource(t),m)}else return c}function qT(r,t){const i=WT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const YT={[_v]:"Linear",[bv]:"Reinhard",[yv]:"Cineon",[Sv]:"ACESFilmic",[Ev]:"AgX",[Tv]:"Neutral",[Mv]:"Custom"};function ZT(r,t){const i=YT[t];return i===void 0?(vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new ie;function KT(){It.getLuminanceCoefficients(Bc);const r=Bc.x.toFixed(4),t=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function JT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function $T(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let m=1;c.type===r.FLOAT_MAT2&&(m=2),c.type===r.FLOAT_MAT3&&(m=3),c.type===r.FLOAT_MAT4&&(m=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:m}}return i}function Zo(r){return r!==""}function av(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const e3=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(r){return r.replace(e3,n3)}const t3=new Map;function n3(r,t){let i=wt[t];if(i===void 0){const s=t3.get(t);if(s!==void 0)i=wt[s],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return qh(i)}const i3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rv(r){return r.replace(i3,a3)}function a3(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function ov(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const s3={[kc]:"SHADOWMAP_TYPE_PCF",[qo]:"SHADOWMAP_TYPE_VSM"};function r3(r){return s3[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const o3={[Ws]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[tu]:"ENVMAP_TYPE_CUBE_UV"};function l3(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":o3[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const c3={[Vr]:"ENVMAP_MODE_REFRACTION"};function u3(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":c3[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const d3={[vv]:"ENVMAP_BLENDING_MULTIPLY",[tS]:"ENVMAP_BLENDING_MIX",[nS]:"ENVMAP_BLENDING_ADD"};function f3(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":d3[r.combine]||"ENVMAP_BLENDING_NONE"}function h3(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function p3(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,m=i.fragmentShader;const g=r3(i),p=l3(i),y=u3(i),_=f3(i),x=h3(i),M=QT(i),A=JT(c),U=l.createProgram();let S,b,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Zo).join(`
`),S.length>0&&(S+=`
`),b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Zo).join(`
`),b.length>0&&(b+=`
`)):(S=[ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),b=[ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+y:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ra?"#define TONE_MAPPING":"",i.toneMapping!==ra?wt.tonemapping_pars_fragment:"",i.toneMapping!==ra?ZT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,qT("linearToOutputTexel",i.outputColorSpace),KT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Zo).join(`
`)),h=qh(h),h=av(h,i),h=sv(h,i),m=qh(m),m=av(m,i),m=sv(m,i),h=rv(h),m=rv(m),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,b=["#define varying in",i.glslVersion===vx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===vx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const z=w+S+h,D=w+b+m,G=tv(l,l.VERTEX_SHADER,z),O=tv(l,l.FRAGMENT_SHADER,D);l.attachShader(U,G),l.attachShader(U,O),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function F(j){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(U)||"",me=l.getShaderInfoLog(G)||"",ve=l.getShaderInfoLog(O)||"",q=Z.trim(),P=me.trim(),H=ve.trim();let ne=!0,Se=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,U,G,O);else{const ae=iv(l,G,"vertex"),N=iv(l,O,"fragment");kt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+q+`
`+ae+`
`+N)}else q!==""?vt("WebGLProgram: Program Info Log:",q):(P===""||H==="")&&(Se=!1);Se&&(j.diagnostics={runnable:ne,programLog:q,vertexShader:{log:P,prefix:S},fragmentShader:{log:H,prefix:b}})}l.deleteShader(G),l.deleteShader(O),T=new Xc(l,U),I=$T(l,U)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=l.getProgramParameter(U,GT)),W},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=VT++,this.cacheKey=t,this.usedTimes=1,this.program=U,this.vertexShader=G,this.fragmentShader=O,this}let m3=0;class g3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new x3(t),i.set(t,s)),s}}class x3{constructor(t){this.id=m3++,this.code=t,this.usedTimes=0}}function v3(r){return r===qs||r===qc||r===Yc}function _3(r,t,i,s,l,c){const h=new Pv,m=new g3,g=new Set,p=[],y=new Map,_=s.logarithmicDepthBuffer;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return g.add(T),T===0?"uv":`uv${T}`}function U(T,I,W,j,Z,me){const ve=j.fog,q=Z.geometry,P=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?j.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ne=t.get(T.envMap||P,H),Se=ne&&ne.mapping===tu?ne.image.height:null,ae=M[T.type];T.precision!==null&&(x=s.getMaxPrecision(T.precision),x!==T.precision&&vt("WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));const N=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,X=N!==void 0?N.length:0;let k=0;q.morphAttributes.position!==void 0&&(k=1),q.morphAttributes.normal!==void 0&&(k=2),q.morphAttributes.color!==void 0&&(k=3);let _e,we,J,Te;if(ae){const Ie=ia[ae];_e=Ie.vertexShader,we=Ie.fragmentShader}else _e=T.vertexShader,we=T.fragmentShader,m.update(T),J=m.getVertexShaderID(T),Te=m.getFragmentShaderID(T);const Ne=r.getRenderTarget(),We=r.state.buffers.depth.getReversed(),at=Z.isInstancedMesh===!0,tt=Z.isBatchedMesh===!0,mt=!!T.map,st=!!T.matcap,ct=!!ne,Rt=!!T.aoMap,ut=!!T.lightMap,Zt=!!T.bumpMap,Dt=!!T.normalMap,ln=!!T.displacementMap,Q=!!T.emissiveMap,Nt=!!T.metalnessMap,gt=!!T.roughnessMap,jt=T.anisotropy>0,ke=T.clearcoat>0,Ct=T.dispersion>0,L=T.iridescence>0,E=T.sheen>0,te=T.transmission>0,Ee=jt&&!!T.anisotropyMap,Le=ke&&!!T.clearcoatMap,Fe=ke&&!!T.clearcoatNormalMap,je=ke&&!!T.clearcoatRoughnessMap,be=L&&!!T.iridescenceMap,se=L&&!!T.iridescenceThicknessMap,He=E&&!!T.sheenColorMap,Ge=E&&!!T.sheenRoughnessMap,Be=!!T.specularMap,Pe=!!T.specularColorMap,it=!!T.specularIntensityMap,rt=te&&!!T.transmissionMap,Mt=te&&!!T.thicknessMap,Y=!!T.gradientMap,he=!!T.alphaMap,de=T.alphaTest>0,Ce=!!T.alphaHash,ze=!!T.extensions;let Re=ra;T.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Re=r.toneMapping);const Je={shaderID:ae,shaderType:T.type,shaderName:T.name,vertexShader:_e,fragmentShader:we,defines:T.defines,customVertexShaderID:J,customFragmentShaderID:Te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,batching:tt,batchingColor:tt&&Z._colorsTexture!==null,instancing:at,instancingColor:at&&Z.instanceColor!==null,instancingMorph:at&&Z.morphTexture!==null,outputColorSpace:Ne===null?r.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:mt,matcap:st,envMap:ct,envMapMode:ct&&ne.mapping,envMapCubeUVHeight:Se,aoMap:Rt,lightMap:ut,bumpMap:Zt,normalMap:Dt,displacementMap:ln,emissiveMap:Q,normalMapObjectSpace:Dt&&T.normalMapType===sS,normalMapTangentSpace:Dt&&T.normalMapType===mx,packedNormalMap:Dt&&T.normalMapType===mx&&v3(T.normalMap.format),metalnessMap:Nt,roughnessMap:gt,anisotropy:jt,anisotropyMap:Ee,clearcoat:ke,clearcoatMap:Le,clearcoatNormalMap:Fe,clearcoatRoughnessMap:je,dispersion:Ct,iridescence:L,iridescenceMap:be,iridescenceThicknessMap:se,sheen:E,sheenColorMap:He,sheenRoughnessMap:Ge,specularMap:Be,specularColorMap:Pe,specularIntensityMap:it,transmission:te,transmissionMap:rt,thicknessMap:Mt,gradientMap:Y,opaque:T.transparent===!1&&T.blending===jr&&T.alphaToCoverage===!1,alphaMap:he,alphaTest:de,alphaHash:Ce,combine:T.combine,mapUv:mt&&A(T.map.channel),aoMapUv:Rt&&A(T.aoMap.channel),lightMapUv:ut&&A(T.lightMap.channel),bumpMapUv:Zt&&A(T.bumpMap.channel),normalMapUv:Dt&&A(T.normalMap.channel),displacementMapUv:ln&&A(T.displacementMap.channel),emissiveMapUv:Q&&A(T.emissiveMap.channel),metalnessMapUv:Nt&&A(T.metalnessMap.channel),roughnessMapUv:gt&&A(T.roughnessMap.channel),anisotropyMapUv:Ee&&A(T.anisotropyMap.channel),clearcoatMapUv:Le&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:se&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:He&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&A(T.sheenRoughnessMap.channel),specularMapUv:Be&&A(T.specularMap.channel),specularColorMapUv:Pe&&A(T.specularColorMap.channel),specularIntensityMapUv:it&&A(T.specularIntensityMap.channel),transmissionMapUv:rt&&A(T.transmissionMap.channel),thicknessMapUv:Mt&&A(T.thicknessMap.channel),alphaMapUv:he&&A(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Dt||jt),vertexNormals:!!q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!q.attributes.uv&&(mt||he),fog:!!ve,useFog:T.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||q.attributes.normal===void 0&&Dt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:We,skinning:Z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:k,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:me.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:Re,decodeVideoTexture:mt&&T.map.isVideoTexture===!0&&It.getTransfer(T.map.colorSpace)===Jt,decodeVideoTextureEmissive:Q&&T.emissiveMap.isVideoTexture===!0&&It.getTransfer(T.emissiveMap.colorSpace)===Jt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Li,flipSided:T.side===$n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ze&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&T.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Je.vertexUv1s=g.has(1),Je.vertexUv2s=g.has(2),Je.vertexUv3s=g.has(3),g.clear(),Je}function S(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const W in T.defines)I.push(W),I.push(T.defines[W]);return T.isRawShaderMaterial===!1&&(b(I,T),w(I,T),I.push(r.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function b(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function w(T,I){h.disableAll(),I.instancing&&h.enable(0),I.instancingColor&&h.enable(1),I.instancingMorph&&h.enable(2),I.matcap&&h.enable(3),I.envMap&&h.enable(4),I.normalMapObjectSpace&&h.enable(5),I.normalMapTangentSpace&&h.enable(6),I.clearcoat&&h.enable(7),I.iridescence&&h.enable(8),I.alphaTest&&h.enable(9),I.vertexColors&&h.enable(10),I.vertexAlphas&&h.enable(11),I.vertexUv1s&&h.enable(12),I.vertexUv2s&&h.enable(13),I.vertexUv3s&&h.enable(14),I.vertexTangents&&h.enable(15),I.anisotropy&&h.enable(16),I.alphaHash&&h.enable(17),I.batching&&h.enable(18),I.dispersion&&h.enable(19),I.batchingColor&&h.enable(20),I.gradientMap&&h.enable(21),I.packedNormalMap&&h.enable(22),I.vertexNormals&&h.enable(23),T.push(h.mask),h.disableAll(),I.fog&&h.enable(0),I.useFog&&h.enable(1),I.flatShading&&h.enable(2),I.logarithmicDepthBuffer&&h.enable(3),I.reversedDepthBuffer&&h.enable(4),I.skinning&&h.enable(5),I.morphTargets&&h.enable(6),I.morphNormals&&h.enable(7),I.morphColors&&h.enable(8),I.premultipliedAlpha&&h.enable(9),I.shadowMapEnabled&&h.enable(10),I.doubleSided&&h.enable(11),I.flipSided&&h.enable(12),I.useDepthPacking&&h.enable(13),I.dithering&&h.enable(14),I.transmission&&h.enable(15),I.sheen&&h.enable(16),I.opaque&&h.enable(17),I.pointsUvs&&h.enable(18),I.decodeVideoTexture&&h.enable(19),I.decodeVideoTextureEmissive&&h.enable(20),I.alphaToCoverage&&h.enable(21),I.numLightProbeGrids>0&&h.enable(22),T.push(h.mask)}function z(T){const I=M[T.type];let W;if(I){const j=ia[I];W=GS.clone(j.uniforms)}else W=T.uniforms;return W}function D(T,I){let W=y.get(I);return W!==void 0?++W.usedTimes:(W=new p3(r,I,T,l),p.push(W),y.set(I,W)),W}function G(T){if(--T.usedTimes===0){const I=p.indexOf(T);p[I]=p[p.length-1],p.pop(),y.delete(T.cacheKey),T.destroy()}}function O(T){m.remove(T)}function F(){m.dispose()}return{getParameters:U,getProgramCacheKey:S,getUniforms:z,acquireProgram:D,releaseProgram:G,releaseShaderCache:O,programs:p,dispose:F}}function b3(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let m=r.get(h);return m===void 0&&(m={},r.set(h,m)),m}function s(h){r.delete(h)}function l(h,m,g){r.get(h)[m]=g}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function y3(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function lv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function cv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function m(x,M,A,U,S,b){let w=r[t];return w===void 0?(w={id:x.id,object:x,geometry:M,material:A,materialVariant:h(x),groupOrder:U,renderOrder:x.renderOrder,z:S,group:b},r[t]=w):(w.id=x.id,w.object=x,w.geometry=M,w.material=A,w.materialVariant=h(x),w.groupOrder=U,w.renderOrder=x.renderOrder,w.z=S,w.group=b),t++,w}function g(x,M,A,U,S,b){const w=m(x,M,A,U,S,b);A.transmission>0?s.push(w):A.transparent===!0?l.push(w):i.push(w)}function p(x,M,A,U,S,b){const w=m(x,M,A,U,S,b);A.transmission>0?s.unshift(w):A.transparent===!0?l.unshift(w):i.unshift(w)}function y(x,M){i.length>1&&i.sort(x||y3),s.length>1&&s.sort(M||lv),l.length>1&&l.sort(M||lv)}function _(){for(let x=t,M=r.length;x<M;x++){const A=r[x];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:g,unshift:p,finish:_,sort:y}}function S3(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new cv,r.set(s,[h])):l>=c.length?(h=new cv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function M3(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ie,color:new Bt};break;case"SpotLight":i={position:new ie,direction:new ie,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":i={color:new Bt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[t.id]=i,i}}}function E3(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let T3=0;function A3(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function w3(r){const t=new M3,i=E3(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ie);const l=new ie,c=new Cn,h=new Cn;function m(p){let y=0,_=0,x=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let M=0,A=0,U=0,S=0,b=0,w=0,z=0,D=0,G=0,O=0,F=0;p.sort(A3);for(let I=0,W=p.length;I<W;I++){const j=p[I],Z=j.color,me=j.intensity,ve=j.distance;let q=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===qs?q=j.shadow.map.texture:q=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)y+=Z.r*me,_+=Z.g*me,x+=Z.b*me;else if(j.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(j.sh.coefficients[P],me);F++}else if(j.isDirectionalLight){const P=t.get(j);if(P.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const H=j.shadow,ne=i.get(j);ne.shadowIntensity=H.intensity,ne.shadowBias=H.bias,ne.shadowNormalBias=H.normalBias,ne.shadowRadius=H.radius,ne.shadowMapSize=H.mapSize,s.directionalShadow[M]=ne,s.directionalShadowMap[M]=q,s.directionalShadowMatrix[M]=j.shadow.matrix,w++}s.directional[M]=P,M++}else if(j.isSpotLight){const P=t.get(j);P.position.setFromMatrixPosition(j.matrixWorld),P.color.copy(Z).multiplyScalar(me),P.distance=ve,P.coneCos=Math.cos(j.angle),P.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),P.decay=j.decay,s.spot[U]=P;const H=j.shadow;if(j.map&&(s.spotLightMap[G]=j.map,G++,H.updateMatrices(j),j.castShadow&&O++),s.spotLightMatrix[U]=H.matrix,j.castShadow){const ne=i.get(j);ne.shadowIntensity=H.intensity,ne.shadowBias=H.bias,ne.shadowNormalBias=H.normalBias,ne.shadowRadius=H.radius,ne.shadowMapSize=H.mapSize,s.spotShadow[U]=ne,s.spotShadowMap[U]=q,D++}U++}else if(j.isRectAreaLight){const P=t.get(j);P.color.copy(Z).multiplyScalar(me),P.halfWidth.set(j.width*.5,0,0),P.halfHeight.set(0,j.height*.5,0),s.rectArea[S]=P,S++}else if(j.isPointLight){const P=t.get(j);if(P.color.copy(j.color).multiplyScalar(j.intensity),P.distance=j.distance,P.decay=j.decay,j.castShadow){const H=j.shadow,ne=i.get(j);ne.shadowIntensity=H.intensity,ne.shadowBias=H.bias,ne.shadowNormalBias=H.normalBias,ne.shadowRadius=H.radius,ne.shadowMapSize=H.mapSize,ne.shadowCameraNear=H.camera.near,ne.shadowCameraFar=H.camera.far,s.pointShadow[A]=ne,s.pointShadowMap[A]=q,s.pointShadowMatrix[A]=j.shadow.matrix,z++}s.point[A]=P,A++}else if(j.isHemisphereLight){const P=t.get(j);P.skyColor.copy(j.color).multiplyScalar(me),P.groundColor.copy(j.groundColor).multiplyScalar(me),s.hemi[b]=P,b++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ze.LTC_FLOAT_1,s.rectAreaLTC2=Ze.LTC_FLOAT_2):(s.rectAreaLTC1=Ze.LTC_HALF_1,s.rectAreaLTC2=Ze.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=_,s.ambient[2]=x;const T=s.hash;(T.directionalLength!==M||T.pointLength!==A||T.spotLength!==U||T.rectAreaLength!==S||T.hemiLength!==b||T.numDirectionalShadows!==w||T.numPointShadows!==z||T.numSpotShadows!==D||T.numSpotMaps!==G||T.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=U,s.rectArea.length=S,s.point.length=A,s.hemi.length=b,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=D+G-O,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=F,T.directionalLength=M,T.pointLength=A,T.spotLength=U,T.rectAreaLength=S,T.hemiLength=b,T.numDirectionalShadows=w,T.numPointShadows=z,T.numSpotShadows=D,T.numSpotMaps=G,T.numLightProbes=F,s.version=T3++)}function g(p,y){let _=0,x=0,M=0,A=0,U=0;const S=y.matrixWorldInverse;for(let b=0,w=p.length;b<w;b++){const z=p[b];if(z.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),_++}else if(z.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(z.isRectAreaLight){const D=s.rectArea[A];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(S),h.identity(),c.copy(z.matrixWorld),c.premultiply(S),h.extractRotation(c),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),A++}else if(z.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(S),x++}else if(z.isHemisphereLight){const D=s.hemi[U];D.direction.setFromMatrixPosition(z.matrixWorld),D.direction.transformDirection(S),U++}}}return{setup:m,setupView:g,state:s}}function uv(r){const t=new w3(r),i=[],s=[],l=[];function c(x){_.camera=x,i.length=0,s.length=0,l.length=0}function h(x){i.push(x)}function m(x){s.push(x)}function g(x){l.push(x)}function p(){t.setup(i)}function y(x){t.setupView(i,x)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:p,setupLightsView:y,pushLight:h,pushShadow:m,pushLightProbeGrid:g}}function C3(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let m;return h===void 0?(m=new uv(r),t.set(l,[m])):c>=h.length?(m=new uv(r),h.push(m)):m=h[c],m}function s(){t=new WeakMap}return{get:i,dispose:s}}const R3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N3=`uniform sampler2D shadow_pass;
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
}`,D3=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],L3=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],dv=new Cn,Xo=new ie,Jf=new ie;function U3(r,t,i){let s=new jv;const l=new Xt,c=new Xt,h=new yn,m=new qS,g=new YS,p={},y=i.maxTextureSize,_={[ms]:$n,[$n]:ms,[Li]:Li},x=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:R3,fragmentShader:N3}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new Yn;A.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new Ln(A,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let b=this.type;this.render=function(O,F,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;this.type===P1&&(vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=kc);const I=r.getRenderTarget(),W=r.getActiveCubeFace(),j=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(Ua),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const me=b!==this.type;me&&F.traverse(function(ve){ve.material&&(Array.isArray(ve.material)?ve.material.forEach(q=>q.needsUpdate=!0):ve.material.needsUpdate=!0)});for(let ve=0,q=O.length;ve<q;ve++){const P=O[ve],H=P.shadow;if(H===void 0){vt("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ne=H.getFrameExtents();l.multiply(ne),c.copy(H.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(c.x=Math.floor(y/ne.x),l.x=c.x*ne.x,H.mapSize.x=c.x),l.y>y&&(c.y=Math.floor(y/ne.y),l.y=c.y*ne.y,H.mapSize.y=c.y));const Se=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Se,H.map===null||me===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===qo){if(P.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new oa(l.x,l.y,{format:qs,type:Oa,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new Xr(l.x,l.y,aa),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=Pa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Hn,H.map.depthTexture.magFilter=Hn}else P.isPointLight?(H.map=new Zv(l.x),H.map.depthTexture=new jS(l.x,la)):(H.map=new oa(l.x,l.y),H.map.depthTexture=new Xr(l.x,l.y,la)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=Pa,this.type===kc?(H.map.depthTexture.compareFunction=Se?ap:ip,H.map.depthTexture.minFilter=Wn,H.map.depthTexture.magFilter=Wn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Hn,H.map.depthTexture.magFilter=Hn);H.camera.updateProjectionMatrix()}const ae=H.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<ae;N++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,N),r.clear();else{N===0&&(r.setRenderTarget(H.map),r.clear());const X=H.getViewport(N);h.set(c.x*X.x,c.y*X.y,c.x*X.z,c.y*X.w),Z.viewport(h)}if(P.isPointLight){const X=H.camera,k=H.matrix,_e=P.distance||X.far;_e!==X.far&&(X.far=_e,X.updateProjectionMatrix()),Xo.setFromMatrixPosition(P.matrixWorld),X.position.copy(Xo),Jf.copy(X.position),Jf.add(D3[N]),X.up.copy(L3[N]),X.lookAt(Jf),X.updateMatrixWorld(),k.makeTranslation(-Xo.x,-Xo.y,-Xo.z),dv.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),H._frustum.setFromProjectionMatrix(dv,X.coordinateSystem,X.reversedDepth)}else H.updateMatrices(P);s=H.getFrustum(),D(F,T,H.camera,P,this.type)}H.isPointLightShadow!==!0&&this.type===qo&&w(H,T),H.needsUpdate=!1}b=this.type,S.needsUpdate=!1,r.setRenderTarget(I,W,j)};function w(O,F){const T=t.update(U);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new oa(l.x,l.y,{format:qs,type:Oa})),x.uniforms.shadow_pass.value=O.map.depthTexture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(F,null,T,x,U,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(F,null,T,M,U,null)}function z(O,F,T,I){let W=null;const j=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(j!==void 0)W=j;else if(W=T.isPointLight===!0?g:m,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=W.uuid,me=F.uuid;let ve=p[Z];ve===void 0&&(ve={},p[Z]=ve);let q=ve[me];q===void 0&&(q=W.clone(),ve[me]=q,F.addEventListener("dispose",G)),W=q}if(W.visible=F.visible,W.wireframe=F.wireframe,I===qo?W.side=F.shadowSide!==null?F.shadowSide:F.side:W.side=F.shadowSide!==null?F.shadowSide:_[F.side],W.alphaMap=F.alphaMap,W.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,W.map=F.map,W.clipShadows=F.clipShadows,W.clippingPlanes=F.clippingPlanes,W.clipIntersection=F.clipIntersection,W.displacementMap=F.displacementMap,W.displacementScale=F.displacementScale,W.displacementBias=F.displacementBias,W.wireframeLinewidth=F.wireframeLinewidth,W.linewidth=F.linewidth,T.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const Z=r.properties.get(W);Z.light=T}return W}function D(O,F,T,I,W){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&W===qo)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const me=t.update(O),ve=O.material;if(Array.isArray(ve)){const q=me.groups;for(let P=0,H=q.length;P<H;P++){const ne=q[P],Se=ve[ne.materialIndex];if(Se&&Se.visible){const ae=z(O,Se,I,W);O.onBeforeShadow(r,O,F,T,me,ae,ne),r.renderBufferDirect(T,null,me,ae,O,ne),O.onAfterShadow(r,O,F,T,me,ae,ne)}}}else if(ve.visible){const q=z(O,ve,I,W);O.onBeforeShadow(r,O,F,T,me,q,null),r.renderBufferDirect(T,null,me,q,O,null),O.onAfterShadow(r,O,F,T,me,q,null)}}const Z=O.children;for(let me=0,ve=Z.length;me<ve;me++)D(Z[me],F,T,I,W)}function G(O){O.target.removeEventListener("dispose",G);for(const T in p){const I=p[T],W=O.target.uuid;W in I&&(I[W].dispose(),delete I[W])}}}function z3(r,t){function i(){let Y=!1;const he=new yn;let de=null;const Ce=new yn(0,0,0,0);return{setMask:function(ze){de!==ze&&!Y&&(r.colorMask(ze,ze,ze,ze),de=ze)},setLocked:function(ze){Y=ze},setClear:function(ze,Re,Je,Ie,$e){$e===!0&&(ze*=Ie,Re*=Ie,Je*=Ie),he.set(ze,Re,Je,Ie),Ce.equals(he)===!1&&(r.clearColor(ze,Re,Je,Ie),Ce.copy(he))},reset:function(){Y=!1,de=null,Ce.set(-1,0,0,0)}}}function s(){let Y=!1,he=!1,de=null,Ce=null,ze=null;return{setReversed:function(Re){if(he!==Re){const Je=t.get("EXT_clip_control");Re?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),he=Re;const Ie=ze;ze=null,this.setClear(Ie)}},getReversed:function(){return he},setTest:function(Re){Re?Ne(r.DEPTH_TEST):We(r.DEPTH_TEST)},setMask:function(Re){de!==Re&&!Y&&(r.depthMask(Re),de=Re)},setFunc:function(Re){if(he&&(Re=mS[Re]),Ce!==Re){switch(Re){case ih:r.depthFunc(r.NEVER);break;case ah:r.depthFunc(r.ALWAYS);break;case sh:r.depthFunc(r.LESS);break;case Gr:r.depthFunc(r.LEQUAL);break;case rh:r.depthFunc(r.EQUAL);break;case oh:r.depthFunc(r.GEQUAL);break;case lh:r.depthFunc(r.GREATER);break;case ch:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ce=Re}},setLocked:function(Re){Y=Re},setClear:function(Re){ze!==Re&&(ze=Re,he&&(Re=1-Re),r.clearDepth(Re))},reset:function(){Y=!1,de=null,Ce=null,ze=null,he=!1}}}function l(){let Y=!1,he=null,de=null,Ce=null,ze=null,Re=null,Je=null,Ie=null,$e=null;return{setTest:function(bt){Y||(bt?Ne(r.STENCIL_TEST):We(r.STENCIL_TEST))},setMask:function(bt){he!==bt&&!Y&&(r.stencilMask(bt),he=bt)},setFunc:function(bt,Wt,mn){(de!==bt||Ce!==Wt||ze!==mn)&&(r.stencilFunc(bt,Wt,mn),de=bt,Ce=Wt,ze=mn)},setOp:function(bt,Wt,mn){(Re!==bt||Je!==Wt||Ie!==mn)&&(r.stencilOp(bt,Wt,mn),Re=bt,Je=Wt,Ie=mn)},setLocked:function(bt){Y=bt},setClear:function(bt){$e!==bt&&(r.clearStencil(bt),$e=bt)},reset:function(){Y=!1,he=null,de=null,Ce=null,ze=null,Re=null,Je=null,Ie=null,$e=null}}}const c=new i,h=new s,m=new l,g=new WeakMap,p=new WeakMap;let y={},_={},x={},M=new WeakMap,A=[],U=null,S=!1,b=null,w=null,z=null,D=null,G=null,O=null,F=null,T=new Bt(0,0,0),I=0,W=!1,j=null,Z=null,me=null,ve=null,q=null;const P=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ne=0;const Se=r.getParameter(r.VERSION);Se.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Se)[1]),H=ne>=1):Se.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Se)[1]),H=ne>=2);let ae=null,N={};const X=r.getParameter(r.SCISSOR_BOX),k=r.getParameter(r.VIEWPORT),_e=new yn().fromArray(X),we=new yn().fromArray(k);function J(Y,he,de,Ce){const ze=new Uint8Array(4),Re=r.createTexture();r.bindTexture(Y,Re),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Je=0;Je<de;Je++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,Ce,0,r.RGBA,r.UNSIGNED_BYTE,ze):r.texImage2D(he+Je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ze);return Re}const Te={};Te[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),m.setClear(0),Ne(r.DEPTH_TEST),h.setFunc(Gr),Zt(!1),Dt(fx),Ne(r.CULL_FACE),Rt(Ua);function Ne(Y){y[Y]!==!0&&(r.enable(Y),y[Y]=!0)}function We(Y){y[Y]!==!1&&(r.disable(Y),y[Y]=!1)}function at(Y,he){return x[Y]!==he?(r.bindFramebuffer(Y,he),x[Y]=he,Y===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=he),Y===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=he),!0):!1}function tt(Y,he){let de=A,Ce=!1;if(Y){de=M.get(he),de===void 0&&(de=[],M.set(he,de));const ze=Y.textures;if(de.length!==ze.length||de[0]!==r.COLOR_ATTACHMENT0){for(let Re=0,Je=ze.length;Re<Je;Re++)de[Re]=r.COLOR_ATTACHMENT0+Re;de.length=ze.length,Ce=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,Ce=!0);Ce&&r.drawBuffers(de)}function mt(Y){return U!==Y?(r.useProgram(Y),U=Y,!0):!1}const st={[Hs]:r.FUNC_ADD,[F1]:r.FUNC_SUBTRACT,[B1]:r.FUNC_REVERSE_SUBTRACT};st[k1]=r.MIN,st[j1]=r.MAX;const ct={[H1]:r.ZERO,[G1]:r.ONE,[V1]:r.SRC_COLOR,[th]:r.SRC_ALPHA,[K1]:r.SRC_ALPHA_SATURATE,[Y1]:r.DST_COLOR,[W1]:r.DST_ALPHA,[X1]:r.ONE_MINUS_SRC_COLOR,[nh]:r.ONE_MINUS_SRC_ALPHA,[Z1]:r.ONE_MINUS_DST_COLOR,[q1]:r.ONE_MINUS_DST_ALPHA,[Q1]:r.CONSTANT_COLOR,[J1]:r.ONE_MINUS_CONSTANT_COLOR,[$1]:r.CONSTANT_ALPHA,[eS]:r.ONE_MINUS_CONSTANT_ALPHA};function Rt(Y,he,de,Ce,ze,Re,Je,Ie,$e,bt){if(Y===Ua){S===!0&&(We(r.BLEND),S=!1);return}if(S===!1&&(Ne(r.BLEND),S=!0),Y!==I1){if(Y!==b||bt!==W){if((w!==Hs||G!==Hs)&&(r.blendEquation(r.FUNC_ADD),w=Hs,G=Hs),bt)switch(Y){case jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Da:r.blendFunc(r.ONE,r.ONE);break;case hx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case px:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:kt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Da:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case hx:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case px:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",Y);break}z=null,D=null,O=null,F=null,T.set(0,0,0),I=0,b=Y,W=bt}return}ze=ze||he,Re=Re||de,Je=Je||Ce,(he!==w||ze!==G)&&(r.blendEquationSeparate(st[he],st[ze]),w=he,G=ze),(de!==z||Ce!==D||Re!==O||Je!==F)&&(r.blendFuncSeparate(ct[de],ct[Ce],ct[Re],ct[Je]),z=de,D=Ce,O=Re,F=Je),(Ie.equals(T)===!1||$e!==I)&&(r.blendColor(Ie.r,Ie.g,Ie.b,$e),T.copy(Ie),I=$e),b=Y,W=!1}function ut(Y,he){Y.side===Li?We(r.CULL_FACE):Ne(r.CULL_FACE);let de=Y.side===$n;he&&(de=!de),Zt(de),Y.blending===jr&&Y.transparent===!1?Rt(Ua):Rt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Ce=Y.stencilWrite;m.setTest(Ce),Ce&&(m.setMask(Y.stencilWriteMask),m.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),m.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Q(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Ne(r.SAMPLE_ALPHA_TO_COVERAGE):We(r.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(Y){j!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),j=Y)}function Dt(Y){Y!==z1?(Ne(r.CULL_FACE),Y!==Z&&(Y===fx?r.cullFace(r.BACK):Y===O1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):We(r.CULL_FACE),Z=Y}function ln(Y){Y!==me&&(H&&r.lineWidth(Y),me=Y)}function Q(Y,he,de){Y?(Ne(r.POLYGON_OFFSET_FILL),(ve!==he||q!==de)&&(ve=he,q=de,h.getReversed()&&(he=-he),r.polygonOffset(he,de))):We(r.POLYGON_OFFSET_FILL)}function Nt(Y){Y?Ne(r.SCISSOR_TEST):We(r.SCISSOR_TEST)}function gt(Y){Y===void 0&&(Y=r.TEXTURE0+P-1),ae!==Y&&(r.activeTexture(Y),ae=Y)}function jt(Y,he,de){de===void 0&&(ae===null?de=r.TEXTURE0+P-1:de=ae);let Ce=N[de];Ce===void 0&&(Ce={type:void 0,texture:void 0},N[de]=Ce),(Ce.type!==Y||Ce.texture!==he)&&(ae!==de&&(r.activeTexture(de),ae=de),r.bindTexture(Y,he||Te[Y]),Ce.type=Y,Ce.texture=he)}function ke(){const Y=N[ae];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Ct(){try{r.compressedTexImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function E(){try{r.texSubImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function te(){try{r.texSubImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function Ee(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function Le(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function Fe(){try{r.texStorage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function je(){try{r.texStorage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function be(){try{r.texImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function se(){try{r.texImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function He(Y){return _[Y]!==void 0?_[Y]:r.getParameter(Y)}function Ge(Y,he){_[Y]!==he&&(r.pixelStorei(Y,he),_[Y]=he)}function Be(Y){_e.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),_e.copy(Y))}function Pe(Y){we.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),we.copy(Y))}function it(Y,he){let de=p.get(he);de===void 0&&(de=new WeakMap,p.set(he,de));let Ce=de.get(Y);Ce===void 0&&(Ce=r.getUniformBlockIndex(he,Y.name),de.set(Y,Ce))}function rt(Y,he){const Ce=p.get(he).get(Y);g.get(he)!==Ce&&(r.uniformBlockBinding(he,Ce,Y.__bindingPointIndex),g.set(he,Ce))}function Mt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),y={},_={},ae=null,N={},x={},M=new WeakMap,A=[],U=null,S=!1,b=null,w=null,z=null,D=null,G=null,O=null,F=null,T=new Bt(0,0,0),I=0,W=!1,j=null,Z=null,me=null,ve=null,q=null,_e.set(0,0,r.canvas.width,r.canvas.height),we.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),m.reset()}return{buffers:{color:c,depth:h,stencil:m},enable:Ne,disable:We,bindFramebuffer:at,drawBuffers:tt,useProgram:mt,setBlending:Rt,setMaterial:ut,setFlipSided:Zt,setCullFace:Dt,setLineWidth:ln,setPolygonOffset:Q,setScissorTest:Nt,activeTexture:gt,bindTexture:jt,unbindTexture:ke,compressedTexImage2D:Ct,compressedTexImage3D:L,texImage2D:be,texImage3D:se,pixelStorei:Ge,getParameter:He,updateUBOMapping:it,uniformBlockBinding:rt,texStorage2D:Fe,texStorage3D:je,texSubImage2D:E,texSubImage3D:te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Le,scissor:Be,viewport:Pe,reset:Mt}}function O3(r,t,i,s,l,c,h){const m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Xt,y=new WeakMap,_=new Set;let x;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(L,E){return A?new OffscreenCanvas(L,E):Jc("canvas")}function S(L,E,te){let Ee=1;const Le=Ct(L);if((Le.width>te||Le.height>te)&&(Ee=te/Math.max(Le.width,Le.height)),Ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Fe=Math.floor(Ee*Le.width),je=Math.floor(Ee*Le.height);x===void 0&&(x=U(Fe,je));const be=E?U(Fe,je):x;return be.width=Fe,be.height=je,be.getContext("2d").drawImage(L,0,0,Fe,je),vt("WebGLRenderer: Texture has been resized from ("+Le.width+"x"+Le.height+") to ("+Fe+"x"+je+")."),be}else return"data"in L&&vt("WebGLRenderer: Image in DataTexture is too big ("+Le.width+"x"+Le.height+")."),L;return L}function b(L){return L.generateMipmaps}function w(L){r.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(L,E,te,Ee,Le,Fe=!1){if(L!==null){if(r[L]!==void 0)return r[L];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let je;Ee&&(je=t.get("EXT_texture_norm16"),je||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let be=E;if(E===r.RED&&(te===r.FLOAT&&(be=r.R32F),te===r.HALF_FLOAT&&(be=r.R16F),te===r.UNSIGNED_BYTE&&(be=r.R8),te===r.UNSIGNED_SHORT&&je&&(be=je.R16_EXT),te===r.SHORT&&je&&(be=je.R16_SNORM_EXT)),E===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(be=r.R8UI),te===r.UNSIGNED_SHORT&&(be=r.R16UI),te===r.UNSIGNED_INT&&(be=r.R32UI),te===r.BYTE&&(be=r.R8I),te===r.SHORT&&(be=r.R16I),te===r.INT&&(be=r.R32I)),E===r.RG&&(te===r.FLOAT&&(be=r.RG32F),te===r.HALF_FLOAT&&(be=r.RG16F),te===r.UNSIGNED_BYTE&&(be=r.RG8),te===r.UNSIGNED_SHORT&&je&&(be=je.RG16_EXT),te===r.SHORT&&je&&(be=je.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(be=r.RG8UI),te===r.UNSIGNED_SHORT&&(be=r.RG16UI),te===r.UNSIGNED_INT&&(be=r.RG32UI),te===r.BYTE&&(be=r.RG8I),te===r.SHORT&&(be=r.RG16I),te===r.INT&&(be=r.RG32I)),E===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(be=r.RGB8UI),te===r.UNSIGNED_SHORT&&(be=r.RGB16UI),te===r.UNSIGNED_INT&&(be=r.RGB32UI),te===r.BYTE&&(be=r.RGB8I),te===r.SHORT&&(be=r.RGB16I),te===r.INT&&(be=r.RGB32I)),E===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(be=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(be=r.RGBA16UI),te===r.UNSIGNED_INT&&(be=r.RGBA32UI),te===r.BYTE&&(be=r.RGBA8I),te===r.SHORT&&(be=r.RGBA16I),te===r.INT&&(be=r.RGBA32I)),E===r.RGB&&(te===r.UNSIGNED_SHORT&&je&&(be=je.RGB16_EXT),te===r.SHORT&&je&&(be=je.RGB16_SNORM_EXT),te===r.UNSIGNED_INT_5_9_9_9_REV&&(be=r.RGB9_E5),te===r.UNSIGNED_INT_10F_11F_11F_REV&&(be=r.R11F_G11F_B10F)),E===r.RGBA){const se=Fe?Kc:It.getTransfer(Le);te===r.FLOAT&&(be=r.RGBA32F),te===r.HALF_FLOAT&&(be=r.RGBA16F),te===r.UNSIGNED_BYTE&&(be=se===Jt?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT&&je&&(be=je.RGBA16_EXT),te===r.SHORT&&je&&(be=je.RGBA16_SNORM_EXT),te===r.UNSIGNED_SHORT_4_4_4_4&&(be=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(be=r.RGB5_A1)}return(be===r.R16F||be===r.R32F||be===r.RG16F||be===r.RG32F||be===r.RGBA16F||be===r.RGBA32F)&&t.get("EXT_color_buffer_float"),be}function G(L,E){let te;return L?E===null||E===la||E===el?te=r.DEPTH24_STENCIL8:E===aa?te=r.DEPTH32F_STENCIL8:E===$o&&(te=r.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===la||E===el?te=r.DEPTH_COMPONENT24:E===aa?te=r.DEPTH_COMPONENT32F:E===$o&&(te=r.DEPTH_COMPONENT16),te}function O(L,E){return b(L)===!0||L.isFramebufferTexture&&L.minFilter!==Hn&&L.minFilter!==Wn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),I(E),E.isVideoTexture&&y.delete(E),E.isHTMLTexture&&_.delete(E)}function T(L){const E=L.target;E.removeEventListener("dispose",T),j(E)}function I(L){const E=s.get(L);if(E.__webglInit===void 0)return;const te=L.source,Ee=M.get(te);if(Ee){const Le=Ee[E.__cacheKey];Le.usedTimes--,Le.usedTimes===0&&W(L),Object.keys(Ee).length===0&&M.delete(te)}s.remove(L)}function W(L){const E=s.get(L);r.deleteTexture(E.__webglTexture);const te=L.source,Ee=M.get(te);delete Ee[E.__cacheKey],h.memory.textures--}function j(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(E.__webglFramebuffer[Ee]))for(let Le=0;Le<E.__webglFramebuffer[Ee].length;Le++)r.deleteFramebuffer(E.__webglFramebuffer[Ee][Le]);else r.deleteFramebuffer(E.__webglFramebuffer[Ee]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let Ee=0;Ee<E.__webglFramebuffer.length;Ee++)r.deleteFramebuffer(E.__webglFramebuffer[Ee]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Ee=0;Ee<E.__webglColorRenderbuffer.length;Ee++)E.__webglColorRenderbuffer[Ee]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Ee]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const te=L.textures;for(let Ee=0,Le=te.length;Ee<Le;Ee++){const Fe=s.get(te[Ee]);Fe.__webglTexture&&(r.deleteTexture(Fe.__webglTexture),h.memory.textures--),s.remove(te[Ee])}s.remove(L)}let Z=0;function me(){Z=0}function ve(){return Z}function q(L){Z=L}function P(){const L=Z;return L>=l.maxTextures&&vt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),Z+=1,L}function H(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ne(L,E){const te=s.get(L);if(L.isVideoTexture&&jt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&te.__version!==L.version){const Ee=L.image;if(Ee===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{We(te,L,E);return}}else L.isExternalTexture&&(te.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+E)}function Se(L,E){const te=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){We(te,L,E);return}else L.isExternalTexture&&(te.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+E)}function ae(L,E){const te=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){We(te,L,E);return}i.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+E)}function N(L,E){const te=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&te.__version!==L.version){at(te,L,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+E)}const X={[uh]:r.REPEAT,[La]:r.CLAMP_TO_EDGE,[dh]:r.MIRRORED_REPEAT},k={[Hn]:r.NEAREST,[iS]:r.NEAREST_MIPMAP_NEAREST,[gc]:r.NEAREST_MIPMAP_LINEAR,[Wn]:r.LINEAR,[Sf]:r.LINEAR_MIPMAP_NEAREST,[Vs]:r.LINEAR_MIPMAP_LINEAR},_e={[rS]:r.NEVER,[dS]:r.ALWAYS,[oS]:r.LESS,[ip]:r.LEQUAL,[lS]:r.EQUAL,[ap]:r.GEQUAL,[cS]:r.GREATER,[uS]:r.NOTEQUAL};function we(L,E){if(E.type===aa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Wn||E.magFilter===Sf||E.magFilter===gc||E.magFilter===Vs||E.minFilter===Wn||E.minFilter===Sf||E.minFilter===gc||E.minFilter===Vs)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,X[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,X[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,X[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,k[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,k[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,_e[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Hn||E.minFilter!==gc&&E.minFilter!==Vs||E.type===aa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const te=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function J(L,E){let te=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const Ee=E.source;let Le=M.get(Ee);Le===void 0&&(Le={},M.set(Ee,Le));const Fe=H(E);if(Fe!==L.__cacheKey){Le[Fe]===void 0&&(Le[Fe]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,te=!0),Le[Fe].usedTimes++;const je=Le[L.__cacheKey];je!==void 0&&(Le[L.__cacheKey].usedTimes--,je.usedTimes===0&&W(E)),L.__cacheKey=Fe,L.__webglTexture=Le[Fe].texture}return te}function Te(L,E,te){return Math.floor(Math.floor(L/te)/E)}function Ne(L,E,te,Ee){const Fe=L.updateRanges;if(Fe.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,te,Ee,E.data);else{Fe.sort((Ge,Be)=>Ge.start-Be.start);let je=0;for(let Ge=1;Ge<Fe.length;Ge++){const Be=Fe[je],Pe=Fe[Ge],it=Be.start+Be.count,rt=Te(Pe.start,E.width,4),Mt=Te(Be.start,E.width,4);Pe.start<=it+1&&rt===Mt&&Te(Pe.start+Pe.count-1,E.width,4)===rt?Be.count=Math.max(Be.count,Pe.start+Pe.count-Be.start):(++je,Fe[je]=Pe)}Fe.length=je+1;const be=i.getParameter(r.UNPACK_ROW_LENGTH),se=i.getParameter(r.UNPACK_SKIP_PIXELS),He=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ge=0,Be=Fe.length;Ge<Be;Ge++){const Pe=Fe[Ge],it=Math.floor(Pe.start/4),rt=Math.ceil(Pe.count/4),Mt=it%E.width,Y=Math.floor(it/E.width),he=rt,de=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,Mt,Y,he,de,te,Ee,E.data)}L.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,be),i.pixelStorei(r.UNPACK_SKIP_PIXELS,se),i.pixelStorei(r.UNPACK_SKIP_ROWS,He)}}function We(L,E,te){let Ee=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Ee=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Ee=r.TEXTURE_3D);const Le=J(L,E),Fe=E.source;i.bindTexture(Ee,L.__webglTexture,r.TEXTURE0+te);const je=s.get(Fe);if(Fe.version!==je.__version||Le===!0){if(i.activeTexture(r.TEXTURE0+te),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const de=It.getPrimaries(It.workingColorSpace),Ce=E.colorSpace===hs?null:It.getPrimaries(E.colorSpace),ze=E.colorSpace===hs||de===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let se=S(E.image,!1,l.maxTextureSize);se=ke(E,se);const He=c.convert(E.format,E.colorSpace),Ge=c.convert(E.type);let Be=D(E.internalFormat,He,Ge,E.normalized,E.colorSpace,E.isVideoTexture);we(Ee,E);let Pe;const it=E.mipmaps,rt=E.isVideoTexture!==!0,Mt=je.__version===void 0||Le===!0,Y=Fe.dataReady,he=O(E,se);if(E.isDepthTexture)Be=G(E.format===Xs,E.type),Mt&&(rt?i.texStorage2D(r.TEXTURE_2D,1,Be,se.width,se.height):i.texImage2D(r.TEXTURE_2D,0,Be,se.width,se.height,0,He,Ge,null));else if(E.isDataTexture)if(it.length>0){rt&&Mt&&i.texStorage2D(r.TEXTURE_2D,he,Be,it[0].width,it[0].height);for(let de=0,Ce=it.length;de<Ce;de++)Pe=it[de],rt?Y&&i.texSubImage2D(r.TEXTURE_2D,de,0,0,Pe.width,Pe.height,He,Ge,Pe.data):i.texImage2D(r.TEXTURE_2D,de,Be,Pe.width,Pe.height,0,He,Ge,Pe.data);E.generateMipmaps=!1}else rt?(Mt&&i.texStorage2D(r.TEXTURE_2D,he,Be,se.width,se.height),Y&&Ne(E,se,He,Ge)):i.texImage2D(r.TEXTURE_2D,0,Be,se.width,se.height,0,He,Ge,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&Mt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,he,Be,it[0].width,it[0].height,se.depth);for(let de=0,Ce=it.length;de<Ce;de++)if(Pe=it[de],E.format!==Xi)if(He!==null)if(rt){if(Y)if(E.layerUpdates.size>0){const ze=Hx(Pe.width,Pe.height,E.format,E.type);for(const Re of E.layerUpdates){const Je=Pe.data.subarray(Re*ze/Pe.data.BYTES_PER_ELEMENT,(Re+1)*ze/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,Re,Pe.width,Pe.height,1,He,Je)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Pe.width,Pe.height,se.depth,He,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,de,Be,Pe.width,Pe.height,se.depth,0,Pe.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Y&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Pe.width,Pe.height,se.depth,He,Ge,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,de,Be,Pe.width,Pe.height,se.depth,0,He,Ge,Pe.data)}else{rt&&Mt&&i.texStorage2D(r.TEXTURE_2D,he,Be,it[0].width,it[0].height);for(let de=0,Ce=it.length;de<Ce;de++)Pe=it[de],E.format!==Xi?He!==null?rt?Y&&i.compressedTexSubImage2D(r.TEXTURE_2D,de,0,0,Pe.width,Pe.height,He,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,de,Be,Pe.width,Pe.height,0,Pe.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Y&&i.texSubImage2D(r.TEXTURE_2D,de,0,0,Pe.width,Pe.height,He,Ge,Pe.data):i.texImage2D(r.TEXTURE_2D,de,Be,Pe.width,Pe.height,0,He,Ge,Pe.data)}else if(E.isDataArrayTexture)if(rt){if(Mt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,he,Be,se.width,se.height,se.depth),Y)if(E.layerUpdates.size>0){const de=Hx(se.width,se.height,E.format,E.type);for(const Ce of E.layerUpdates){const ze=se.data.subarray(Ce*de/se.data.BYTES_PER_ELEMENT,(Ce+1)*de/se.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ce,se.width,se.height,1,He,Ge,ze)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,He,Ge,se.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,se.width,se.height,se.depth,0,He,Ge,se.data);else if(E.isData3DTexture)rt?(Mt&&i.texStorage3D(r.TEXTURE_3D,he,Be,se.width,se.height,se.depth),Y&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,He,Ge,se.data)):i.texImage3D(r.TEXTURE_3D,0,Be,se.width,se.height,se.depth,0,He,Ge,se.data);else if(E.isFramebufferTexture){if(Mt)if(rt)i.texStorage2D(r.TEXTURE_2D,he,Be,se.width,se.height);else{let de=se.width,Ce=se.height;for(let ze=0;ze<he;ze++)i.texImage2D(r.TEXTURE_2D,ze,Be,de,Ce,0,He,Ge,null),de>>=1,Ce>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const de=r.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),se.parentNode!==de){de.appendChild(se),_.add(E),de.onpaint=Ie=>{const $e=Ie.changedElements;for(const bt of _)$e.includes(bt.image)&&(bt.needsUpdate=!0)},de.requestPaint();return}const Ce=0,ze=r.RGBA,Re=r.RGBA,Je=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Ce,ze,Re,Je,se),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(it.length>0){if(rt&&Mt){const de=Ct(it[0]);i.texStorage2D(r.TEXTURE_2D,he,Be,de.width,de.height)}for(let de=0,Ce=it.length;de<Ce;de++)Pe=it[de],rt?Y&&i.texSubImage2D(r.TEXTURE_2D,de,0,0,He,Ge,Pe):i.texImage2D(r.TEXTURE_2D,de,Be,He,Ge,Pe);E.generateMipmaps=!1}else if(rt){if(Mt){const de=Ct(se);i.texStorage2D(r.TEXTURE_2D,he,Be,de.width,de.height)}Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,He,Ge,se)}else i.texImage2D(r.TEXTURE_2D,0,Be,He,Ge,se);b(E)&&w(Ee),je.__version=Fe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function at(L,E,te){if(E.image.length!==6)return;const Ee=J(L,E),Le=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+te);const Fe=s.get(Le);if(Le.version!==Fe.__version||Ee===!0){i.activeTexture(r.TEXTURE0+te);const je=It.getPrimaries(It.workingColorSpace),be=E.colorSpace===hs?null:It.getPrimaries(E.colorSpace),se=E.colorSpace===hs||je===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const He=E.isCompressedTexture||E.image[0].isCompressedTexture,Ge=E.image[0]&&E.image[0].isDataTexture,Be=[];for(let Re=0;Re<6;Re++)!He&&!Ge?Be[Re]=S(E.image[Re],!0,l.maxCubemapSize):Be[Re]=Ge?E.image[Re].image:E.image[Re],Be[Re]=ke(E,Be[Re]);const Pe=Be[0],it=c.convert(E.format,E.colorSpace),rt=c.convert(E.type),Mt=D(E.internalFormat,it,rt,E.normalized,E.colorSpace),Y=E.isVideoTexture!==!0,he=Fe.__version===void 0||Ee===!0,de=Le.dataReady;let Ce=O(E,Pe);we(r.TEXTURE_CUBE_MAP,E);let ze;if(He){Y&&he&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,Mt,Pe.width,Pe.height);for(let Re=0;Re<6;Re++){ze=Be[Re].mipmaps;for(let Je=0;Je<ze.length;Je++){const Ie=ze[Je];E.format!==Xi?it!==null?Y?de&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Je,0,0,Ie.width,Ie.height,it,Ie.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Je,Mt,Ie.width,Ie.height,0,Ie.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?de&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Je,0,0,Ie.width,Ie.height,it,rt,Ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Je,Mt,Ie.width,Ie.height,0,it,rt,Ie.data)}}}else{if(ze=E.mipmaps,Y&&he){ze.length>0&&Ce++;const Re=Ct(Be[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,Mt,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(Ge){Y?de&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Be[Re].width,Be[Re].height,it,rt,Be[Re].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Mt,Be[Re].width,Be[Re].height,0,it,rt,Be[Re].data);for(let Je=0;Je<ze.length;Je++){const $e=ze[Je].image[Re].image;Y?de&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Je+1,0,0,$e.width,$e.height,it,rt,$e.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Je+1,Mt,$e.width,$e.height,0,it,rt,$e.data)}}else{Y?de&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,it,rt,Be[Re]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Mt,it,rt,Be[Re]);for(let Je=0;Je<ze.length;Je++){const Ie=ze[Je];Y?de&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Je+1,0,0,it,rt,Ie.image[Re]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Je+1,Mt,it,rt,Ie.image[Re])}}}b(E)&&w(r.TEXTURE_CUBE_MAP),Fe.__version=Le.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function tt(L,E,te,Ee,Le,Fe){const je=c.convert(te.format,te.colorSpace),be=c.convert(te.type),se=D(te.internalFormat,je,be,te.normalized,te.colorSpace),He=s.get(E),Ge=s.get(te);if(Ge.__renderTarget=E,!He.__hasExternalTextures){const Be=Math.max(1,E.width>>Fe),Pe=Math.max(1,E.height>>Fe);Le===r.TEXTURE_3D||Le===r.TEXTURE_2D_ARRAY?i.texImage3D(Le,Fe,se,Be,Pe,E.depth,0,je,be,null):i.texImage2D(Le,Fe,se,Be,Pe,0,je,be,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),gt(E)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ee,Le,Ge.__webglTexture,0,Nt(E)):(Le===r.TEXTURE_2D||Le>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Le<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Ee,Le,Ge.__webglTexture,Fe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function mt(L,E,te){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const Ee=E.depthTexture,Le=Ee&&Ee.isDepthTexture?Ee.type:null,Fe=G(E.stencilBuffer,Le),je=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;gt(E)?m.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Nt(E),Fe,E.width,E.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt(E),Fe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Fe,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,je,r.RENDERBUFFER,L)}else{const Ee=E.textures;for(let Le=0;Le<Ee.length;Le++){const Fe=Ee[Le],je=c.convert(Fe.format,Fe.colorSpace),be=c.convert(Fe.type),se=D(Fe.internalFormat,je,be,Fe.normalized,Fe.colorSpace);gt(E)?m.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Nt(E),se,E.width,E.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt(E),se,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,se,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function st(L,E,te){const Ee=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Le=s.get(E.depthTexture);if(Le.__renderTarget=E,(!Le.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Ee){if(Le.__webglInit===void 0&&(Le.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),Le.__webglTexture===void 0){Le.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Le.__webglTexture),we(r.TEXTURE_CUBE_MAP,E.depthTexture);const He=c.convert(E.depthTexture.format),Ge=c.convert(E.depthTexture.type);let Be;E.depthTexture.format===Pa?Be=r.DEPTH_COMPONENT24:E.depthTexture.format===Xs&&(Be=r.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Be,E.width,E.height,0,He,Ge,null)}}else ne(E.depthTexture,0);const Fe=Le.__webglTexture,je=Nt(E),be=Ee?r.TEXTURE_CUBE_MAP_POSITIVE_X+te:r.TEXTURE_2D,se=E.depthTexture.format===Xs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Pa)gt(E)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,be,Fe,0,je):r.framebufferTexture2D(r.FRAMEBUFFER,se,be,Fe,0);else if(E.depthTexture.format===Xs)gt(E)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,be,Fe,0,je):r.framebufferTexture2D(r.FRAMEBUFFER,se,be,Fe,0);else throw new Error("Unknown depthTexture format")}function ct(L){const E=s.get(L),te=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const Ee=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Ee){const Le=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Ee.removeEventListener("dispose",Le)};Ee.addEventListener("dispose",Le),E.__depthDisposeCallback=Le}E.__boundDepthTexture=Ee}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(te)for(let Ee=0;Ee<6;Ee++)st(E.__webglFramebuffer[Ee],L,Ee);else{const Ee=L.texture.mipmaps;Ee&&Ee.length>0?st(E.__webglFramebuffer[0],L,0):st(E.__webglFramebuffer,L,0)}else if(te){E.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Ee]),E.__webglDepthbuffer[Ee]===void 0)E.__webglDepthbuffer[Ee]=r.createRenderbuffer(),mt(E.__webglDepthbuffer[Ee],L,!1);else{const Le=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Fe=E.__webglDepthbuffer[Ee];r.bindRenderbuffer(r.RENDERBUFFER,Fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,Fe)}}else{const Ee=L.texture.mipmaps;if(Ee&&Ee.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),mt(E.__webglDepthbuffer,L,!1);else{const Le=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Fe=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,Fe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(L,E,te){const Ee=s.get(L);E!==void 0&&tt(Ee.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&ct(L)}function ut(L){const E=L.texture,te=s.get(L),Ee=s.get(E);L.addEventListener("dispose",T);const Le=L.textures,Fe=L.isWebGLCubeRenderTarget===!0,je=Le.length>1;if(je||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture()),Ee.__version=E.version,h.memory.textures++),Fe){te.__webglFramebuffer=[];for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer[be]=[];for(let se=0;se<E.mipmaps.length;se++)te.__webglFramebuffer[be][se]=r.createFramebuffer()}else te.__webglFramebuffer[be]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer=[];for(let be=0;be<E.mipmaps.length;be++)te.__webglFramebuffer[be]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(je)for(let be=0,se=Le.length;be<se;be++){const He=s.get(Le[be]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),h.memory.textures++)}if(L.samples>0&&gt(L)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let be=0;be<Le.length;be++){const se=Le[be];te.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[be]);const He=c.convert(se.format,se.colorSpace),Ge=c.convert(se.type),Be=D(se.internalFormat,He,Ge,se.normalized,se.colorSpace,L.isXRRenderTarget===!0),Pe=Nt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,Be,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,te.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),mt(te.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Fe){i.bindTexture(r.TEXTURE_CUBE_MAP,Ee.__webglTexture),we(r.TEXTURE_CUBE_MAP,E);for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)tt(te.__webglFramebuffer[be][se],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,se);else tt(te.__webglFramebuffer[be],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);b(E)&&w(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(je){for(let be=0,se=Le.length;be<se;be++){const He=Le[be],Ge=s.get(He);let Be=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Be=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Be,Ge.__webglTexture),we(Be,He),tt(te.__webglFramebuffer,L,He,r.COLOR_ATTACHMENT0+be,Be,0),b(He)&&w(Be)}i.unbindTexture()}else{let be=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(be,Ee.__webglTexture),we(be,E),E.mipmaps&&E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)tt(te.__webglFramebuffer[se],L,E,r.COLOR_ATTACHMENT0,be,se);else tt(te.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,be,0);b(E)&&w(be),i.unbindTexture()}L.depthBuffer&&ct(L)}function Zt(L){const E=L.textures;for(let te=0,Ee=E.length;te<Ee;te++){const Le=E[te];if(b(Le)){const Fe=z(L),je=s.get(Le).__webglTexture;i.bindTexture(Fe,je),w(Fe),i.unbindTexture()}}}const Dt=[],ln=[];function Q(L){if(L.samples>0){if(gt(L)===!1){const E=L.textures,te=L.width,Ee=L.height;let Le=r.COLOR_BUFFER_BIT;const Fe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,je=s.get(L),be=E.length>1;if(be)for(let He=0;He<E.length;He++)i.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const se=L.texture.mipmaps;se&&se.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let He=0;He<E.length;He++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Le|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Le|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,je.__webglColorRenderbuffer[He]);const Ge=s.get(E[He]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,te,Ee,0,0,te,Ee,Le,r.NEAREST),g===!0&&(Dt.length=0,ln.length=0,Dt.push(r.COLOR_ATTACHMENT0+He),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Dt.push(Fe),ln.push(Fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ln)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Dt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let He=0;He<E.length;He++){i.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,je.__webglColorRenderbuffer[He]);const Ge=s.get(E[He]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,Ge,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&g){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Nt(L){return Math.min(l.maxSamples,L.samples)}function gt(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function jt(L){const E=h.render.frame;y.get(L)!==E&&(y.set(L,E),L.update())}function ke(L,E){const te=L.colorSpace,Ee=L.format,Le=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||te!==Zc&&te!==hs&&(It.getTransfer(te)===Jt?(Ee!==Xi||Le!==Ui)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",te)),E}function Ct(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=P,this.resetTextureUnits=me,this.getTextureUnits=ve,this.setTextureUnits=q,this.setTexture2D=ne,this.setTexture2DArray=Se,this.setTexture3D=ae,this.setTextureCube=N,this.rebindTextures=Rt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function P3(r,t){function i(s,l=hs){let c;const h=It.getTransfer(l);if(s===Ui)return r.UNSIGNED_BYTE;if(s===Jh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===$h)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Rv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Nv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===wv)return r.BYTE;if(s===Cv)return r.SHORT;if(s===$o)return r.UNSIGNED_SHORT;if(s===Qh)return r.INT;if(s===la)return r.UNSIGNED_INT;if(s===aa)return r.FLOAT;if(s===Oa)return r.HALF_FLOAT;if(s===Dv)return r.ALPHA;if(s===Lv)return r.RGB;if(s===Xi)return r.RGBA;if(s===Pa)return r.DEPTH_COMPONENT;if(s===Xs)return r.DEPTH_STENCIL;if(s===Uv)return r.RED;if(s===ep)return r.RED_INTEGER;if(s===qs)return r.RG;if(s===tp)return r.RG_INTEGER;if(s===np)return r.RGBA_INTEGER;if(s===jc||s===Hc||s===Gc||s===Vc)if(h===Jt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fh||s===hh||s===ph||s===mh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===fh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ph)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===mh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gh||s===xh||s===vh||s===_h||s===bh||s===qc||s===yh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===gh||s===xh)return h===Jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===vh)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===_h)return c.COMPRESSED_R11_EAC;if(s===bh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===qc)return c.COMPRESSED_RG11_EAC;if(s===yh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Sh||s===Mh||s===Eh||s===Th||s===Ah||s===wh||s===Ch||s===Rh||s===Nh||s===Dh||s===Lh||s===Uh||s===zh||s===Oh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Sh)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mh)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Eh)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Th)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ah)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wh)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ch)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rh)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nh)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Dh)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lh)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Uh)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zh)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Oh)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ph||s===Ih||s===Fh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Ph)return h===Jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ih)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Bh||s===kh||s===Yc||s===jh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Bh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===el?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const I3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F3=`
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

}`;class B3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Gv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new zi({vertexShader:I3,fragmentShader:F3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ln(new sl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k3 extends Zs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,m="local-floor",g=1,p=null,y=null,_=null,x=null,M=null,A=null;const U=typeof XRWebGLBinding<"u",S=new B3,b={},w=i.getContextAttributes();let z=null,D=null;const G=[],O=[],F=new Xt;let T=null;const I=new Di;I.viewport=new yn;const W=new Di;W.viewport=new yn;const j=[I,W],Z=new KS;let me=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Te=G[J];return Te===void 0&&(Te=new Nf,G[J]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(J){let Te=G[J];return Te===void 0&&(Te=new Nf,G[J]=Te),Te.getGripSpace()},this.getHand=function(J){let Te=G[J];return Te===void 0&&(Te=new Nf,G[J]=Te),Te.getHandSpace()};function q(J){const Te=O.indexOf(J.inputSource);if(Te===-1)return;const Ne=G[Te];Ne!==void 0&&(Ne.update(J.inputSource,J.frame,p||h),Ne.dispatchEvent({type:J.type,data:J.inputSource}))}function P(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",H);for(let J=0;J<G.length;J++){const Te=O[J];Te!==null&&(O[J]=null,G[J].disconnect(Te))}me=null,ve=null,S.reset();for(const J in b)delete b[J];t.setRenderTarget(z),M=null,x=null,_=null,l=null,D=null,we.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){m=J,s.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&U&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(z=t.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",P),l.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,We=null,at=null;w.depth&&(at=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ne=w.stencil?Xs:Pa,We=w.stencil?el:la);const tt={colorFormat:i.RGBA8,depthFormat:at,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(tt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new oa(x.textureWidth,x.textureHeight,{format:Xi,type:Ui,depthTexture:new Xr(x.textureWidth,x.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ne={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ne),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new oa(M.framebufferWidth,M.framebufferHeight,{format:Xi,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(g),p=null,h=await l.requestReferenceSpace(m),we.setContext(l),we.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(J){for(let Te=0;Te<J.removed.length;Te++){const Ne=J.removed[Te],We=O.indexOf(Ne);We>=0&&(O[We]=null,G[We].disconnect(Ne))}for(let Te=0;Te<J.added.length;Te++){const Ne=J.added[Te];let We=O.indexOf(Ne);if(We===-1){for(let tt=0;tt<G.length;tt++)if(tt>=O.length){O.push(Ne),We=tt;break}else if(O[tt]===null){O[tt]=Ne,We=tt;break}if(We===-1)break}const at=G[We];at&&at.connect(Ne)}}const ne=new ie,Se=new ie;function ae(J,Te,Ne){ne.setFromMatrixPosition(Te.matrixWorld),Se.setFromMatrixPosition(Ne.matrixWorld);const We=ne.distanceTo(Se),at=Te.projectionMatrix.elements,tt=Ne.projectionMatrix.elements,mt=at[14]/(at[10]-1),st=at[14]/(at[10]+1),ct=(at[9]+1)/at[5],Rt=(at[9]-1)/at[5],ut=(at[8]-1)/at[0],Zt=(tt[8]+1)/tt[0],Dt=mt*ut,ln=mt*Zt,Q=We/(-ut+Zt),Nt=Q*-ut;if(Te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Nt),J.translateZ(Q),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),at[10]===-1)J.projectionMatrix.copy(Te.projectionMatrix),J.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const gt=mt+Q,jt=st+Q,ke=Dt-Nt,Ct=ln+(We-Nt),L=ct*st/jt*gt,E=Rt*st/jt*gt;J.projectionMatrix.makePerspective(ke,Ct,L,E,gt,jt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function N(J,Te){Te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let Te=J.near,Ne=J.far;S.texture!==null&&(S.depthNear>0&&(Te=S.depthNear),S.depthFar>0&&(Ne=S.depthFar)),Z.near=W.near=I.near=Te,Z.far=W.far=I.far=Ne,(me!==Z.near||ve!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),me=Z.near,ve=Z.far),Z.layers.mask=J.layers.mask|6,I.layers.mask=Z.layers.mask&-5,W.layers.mask=Z.layers.mask&-3;const We=J.parent,at=Z.cameras;N(Z,We);for(let tt=0;tt<at.length;tt++)N(at[tt],We);at.length===2?ae(Z,I,W):Z.projectionMatrix.copy(I.projectionMatrix),X(J,Z,We)};function X(J,Te,Ne){Ne===null?J.matrix.copy(Te.matrixWorld):(J.matrix.copy(Ne.matrixWorld),J.matrix.invert(),J.matrix.multiply(Te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Te.projectionMatrix),J.projectionMatrixInverse.copy(Te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Gh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&M===null))return g},this.setFoveation=function(J){g=J,x!==null&&(x.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(J){return b[J]};let k=null;function _e(J,Te){if(y=Te.getViewerPose(p||h),A=Te,y!==null){const Ne=y.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let We=!1;Ne.length!==Z.cameras.length&&(Z.cameras.length=0,We=!0);for(let st=0;st<Ne.length;st++){const ct=Ne[st];let Rt=null;if(M!==null)Rt=M.getViewport(ct);else{const Zt=_.getViewSubImage(x,ct);Rt=Zt.viewport,st===0&&(t.setRenderTargetTextures(D,Zt.colorTexture,Zt.depthStencilTexture),t.setRenderTarget(D))}let ut=j[st];ut===void 0&&(ut=new Di,ut.layers.enable(st),ut.viewport=new yn,j[st]=ut),ut.matrix.fromArray(ct.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(ct.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),st===0&&(Z.matrix.copy(ut.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),We===!0&&Z.cameras.push(ut)}const at=l.enabledFeatures;if(at&&at.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&U){_=s.getBinding();const st=_.getDepthInformation(Ne[0]);st&&st.isValid&&st.texture&&S.init(st,l.renderState)}if(at&&at.includes("camera-access")&&U){t.state.unbindTexture(),_=s.getBinding();for(let st=0;st<Ne.length;st++){const ct=Ne[st].camera;if(ct){let Rt=b[ct];Rt||(Rt=new Gv,b[ct]=Rt);const ut=_.getCameraImage(ct);Rt.sourceTexture=ut}}}}for(let Ne=0;Ne<G.length;Ne++){const We=O[Ne],at=G[Ne];We!==null&&at!==void 0&&at.update(We,Te,p||h)}k&&k(J,Te),Te.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Te}),A=null}const we=new qv;we.setAnimationLoop(_e),this.setAnimationLoop=function(J){k=J},this.dispose=function(){}}}const j3=new Cn,e_=new Et;e_.set(-1,0,0,0,1,0,0,0,1);function H3(r,t){function i(S,b){S.matrixAutoUpdate===!0&&S.updateMatrix(),b.value.copy(S.matrix)}function s(S,b){b.color.getRGB(S.fogColor.value,Vv(r)),b.isFog?(S.fogNear.value=b.near,S.fogFar.value=b.far):b.isFogExp2&&(S.fogDensity.value=b.density)}function l(S,b,w,z,D){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?c(S,b):b.isMeshLambertMaterial?(c(S,b),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(c(S,b),_(S,b)):b.isMeshPhongMaterial?(c(S,b),y(S,b),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(c(S,b),x(S,b),b.isMeshPhysicalMaterial&&M(S,b,D)):b.isMeshMatcapMaterial?(c(S,b),A(S,b)):b.isMeshDepthMaterial?c(S,b):b.isMeshDistanceMaterial?(c(S,b),U(S,b)):b.isMeshNormalMaterial?c(S,b):b.isLineBasicMaterial?(h(S,b),b.isLineDashedMaterial&&m(S,b)):b.isPointsMaterial?g(S,b,w,z):b.isSpriteMaterial?p(S,b):b.isShadowMaterial?(S.color.value.copy(b.color),S.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function c(S,b){S.opacity.value=b.opacity,b.color&&S.diffuse.value.copy(b.color),b.emissive&&S.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(S.map.value=b.map,i(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,i(b.alphaMap,S.alphaMapTransform)),b.bumpMap&&(S.bumpMap.value=b.bumpMap,i(b.bumpMap,S.bumpMapTransform),S.bumpScale.value=b.bumpScale,b.side===$n&&(S.bumpScale.value*=-1)),b.normalMap&&(S.normalMap.value=b.normalMap,i(b.normalMap,S.normalMapTransform),S.normalScale.value.copy(b.normalScale),b.side===$n&&S.normalScale.value.negate()),b.displacementMap&&(S.displacementMap.value=b.displacementMap,i(b.displacementMap,S.displacementMapTransform),S.displacementScale.value=b.displacementScale,S.displacementBias.value=b.displacementBias),b.emissiveMap&&(S.emissiveMap.value=b.emissiveMap,i(b.emissiveMap,S.emissiveMapTransform)),b.specularMap&&(S.specularMap.value=b.specularMap,i(b.specularMap,S.specularMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest);const w=t.get(b),z=w.envMap,D=w.envMapRotation;z&&(S.envMap.value=z,S.envMapRotation.value.setFromMatrix4(j3.makeRotationFromEuler(D)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(e_),S.reflectivity.value=b.reflectivity,S.ior.value=b.ior,S.refractionRatio.value=b.refractionRatio),b.lightMap&&(S.lightMap.value=b.lightMap,S.lightMapIntensity.value=b.lightMapIntensity,i(b.lightMap,S.lightMapTransform)),b.aoMap&&(S.aoMap.value=b.aoMap,S.aoMapIntensity.value=b.aoMapIntensity,i(b.aoMap,S.aoMapTransform))}function h(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,b.map&&(S.map.value=b.map,i(b.map,S.mapTransform))}function m(S,b){S.dashSize.value=b.dashSize,S.totalSize.value=b.dashSize+b.gapSize,S.scale.value=b.scale}function g(S,b,w,z){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.size.value=b.size*w,S.scale.value=z*.5,b.map&&(S.map.value=b.map,i(b.map,S.uvTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,i(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function p(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.rotation.value=b.rotation,b.map&&(S.map.value=b.map,i(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,i(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function y(S,b){S.specular.value.copy(b.specular),S.shininess.value=Math.max(b.shininess,1e-4)}function _(S,b){b.gradientMap&&(S.gradientMap.value=b.gradientMap)}function x(S,b){S.metalness.value=b.metalness,b.metalnessMap&&(S.metalnessMap.value=b.metalnessMap,i(b.metalnessMap,S.metalnessMapTransform)),S.roughness.value=b.roughness,b.roughnessMap&&(S.roughnessMap.value=b.roughnessMap,i(b.roughnessMap,S.roughnessMapTransform)),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)}function M(S,b,w){S.ior.value=b.ior,b.sheen>0&&(S.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),S.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(S.sheenColorMap.value=b.sheenColorMap,i(b.sheenColorMap,S.sheenColorMapTransform)),b.sheenRoughnessMap&&(S.sheenRoughnessMap.value=b.sheenRoughnessMap,i(b.sheenRoughnessMap,S.sheenRoughnessMapTransform))),b.clearcoat>0&&(S.clearcoat.value=b.clearcoat,S.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(S.clearcoatMap.value=b.clearcoatMap,i(b.clearcoatMap,S.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,i(b.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(S.clearcoatNormalMap.value=b.clearcoatNormalMap,i(b.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===$n&&S.clearcoatNormalScale.value.negate())),b.dispersion>0&&(S.dispersion.value=b.dispersion),b.iridescence>0&&(S.iridescence.value=b.iridescence,S.iridescenceIOR.value=b.iridescenceIOR,S.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(S.iridescenceMap.value=b.iridescenceMap,i(b.iridescenceMap,S.iridescenceMapTransform)),b.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=b.iridescenceThicknessMap,i(b.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),b.transmission>0&&(S.transmission.value=b.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),b.transmissionMap&&(S.transmissionMap.value=b.transmissionMap,i(b.transmissionMap,S.transmissionMapTransform)),S.thickness.value=b.thickness,b.thicknessMap&&(S.thicknessMap.value=b.thicknessMap,i(b.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=b.attenuationDistance,S.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(S.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(S.anisotropyMap.value=b.anisotropyMap,i(b.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=b.specularIntensity,S.specularColor.value.copy(b.specularColor),b.specularColorMap&&(S.specularColorMap.value=b.specularColorMap,i(b.specularColorMap,S.specularColorMapTransform)),b.specularIntensityMap&&(S.specularIntensityMap.value=b.specularIntensityMap,i(b.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,b){b.matcap&&(S.matcap.value=b.matcap)}function U(S,b){const w=t.get(b).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function G3(r,t,i,s){let l={},c={},h=[];const m=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function g(w,z){const D=z.program;s.uniformBlockBinding(w,D)}function p(w,z){let D=l[w.id];D===void 0&&(A(w),D=y(w),l[w.id]=D,w.addEventListener("dispose",S));const G=z.program;s.updateUBOMapping(w,G);const O=t.render.frame;c[w.id]!==O&&(x(w),c[w.id]=O)}function y(w){const z=_();w.__bindingPointIndex=z;const D=r.createBuffer(),G=w.__size,O=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,G,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,z,D),D}function _(){for(let w=0;w<m;w++)if(h.indexOf(w)===-1)return h.push(w),w;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(w){const z=l[w.id],D=w.uniforms,G=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,z);for(let O=0,F=D.length;O<F;O++){const T=Array.isArray(D[O])?D[O]:[D[O]];for(let I=0,W=T.length;I<W;I++){const j=T[I];if(M(j,O,I,G)===!0){const Z=j.__offset,me=Array.isArray(j.value)?j.value:[j.value];let ve=0;for(let q=0;q<me.length;q++){const P=me[q],H=U(P);typeof P=="number"||typeof P=="boolean"?(j.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,Z+ve,j.__data)):P.isMatrix3?(j.__data[0]=P.elements[0],j.__data[1]=P.elements[1],j.__data[2]=P.elements[2],j.__data[3]=0,j.__data[4]=P.elements[3],j.__data[5]=P.elements[4],j.__data[6]=P.elements[5],j.__data[7]=0,j.__data[8]=P.elements[6],j.__data[9]=P.elements[7],j.__data[10]=P.elements[8],j.__data[11]=0):ArrayBuffer.isView(P)?j.__data.set(new P.constructor(P.buffer,P.byteOffset,j.__data.length)):(P.toArray(j.__data,ve),ve+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,j.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(w,z,D,G){const O=w.value,F=z+"_"+D;if(G[F]===void 0)return typeof O=="number"||typeof O=="boolean"?G[F]=O:ArrayBuffer.isView(O)?G[F]=O.slice():G[F]=O.clone(),!0;{const T=G[F];if(typeof O=="number"||typeof O=="boolean"){if(T!==O)return G[F]=O,!0}else{if(ArrayBuffer.isView(O))return!0;if(T.equals(O)===!1)return T.copy(O),!0}}return!1}function A(w){const z=w.uniforms;let D=0;const G=16;for(let F=0,T=z.length;F<T;F++){const I=Array.isArray(z[F])?z[F]:[z[F]];for(let W=0,j=I.length;W<j;W++){const Z=I[W],me=Array.isArray(Z.value)?Z.value:[Z.value];for(let ve=0,q=me.length;ve<q;ve++){const P=me[ve],H=U(P),ne=D%G,Se=ne%H.boundary,ae=ne+Se;D+=Se,ae!==0&&G-ae<H.storage&&(D+=G-ae),Z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=D,D+=H.storage}}}const O=D%G;return O>0&&(D+=G-O),w.__size=D,w.__cache={},this}function U(w){const z={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(z.boundary=4,z.storage=4):w.isVector2?(z.boundary=8,z.storage=8):w.isVector3||w.isColor?(z.boundary=16,z.storage=12):w.isVector4?(z.boundary=16,z.storage=16):w.isMatrix3?(z.boundary=48,z.storage=48):w.isMatrix4?(z.boundary=64,z.storage=64):w.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(z.boundary=16,z.storage=w.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",w),z}function S(w){const z=w.target;z.removeEventListener("dispose",S);const D=h.indexOf(z.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[z.id]),delete l[z.id],delete c[z.id]}function b(){for(const w in l)r.deleteBuffer(l[w]);h=[],l={},c={}}return{bind:g,update:p,dispose:b}}const V3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ta=null;function X3(){return ta===null&&(ta=new PS(V3,16,16,qs,Oa),ta.name="DFG_LUT",ta.minFilter=Wn,ta.magFilter=Wn,ta.wrapS=La,ta.wrapT=La,ta.generateMipmaps=!1,ta.needsUpdate=!0),ta}class W3{constructor(t={}){const{canvas:i=hS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:m=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Ui}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=h;const U=M,S=new Set([np,tp,ep]),b=new Set([Ui,la,$o,el,Jh,$h]),w=new Uint32Array(4),z=new Int32Array(4),D=new ie;let G=null,O=null;const F=[],T=[];let I=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let j=!1,Z=null;this._outputColorSpace=Ni;let me=0,ve=0,q=null,P=-1,H=null;const ne=new yn,Se=new yn;let ae=null;const N=new Bt(0);let X=0,k=i.width,_e=i.height,we=1,J=null,Te=null;const Ne=new yn(0,0,k,_e),We=new yn(0,0,k,_e);let at=!1;const tt=new jv;let mt=!1,st=!1;const ct=new Cn,Rt=new ie,ut=new yn,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function ln(){return q===null?we:1}let Q=s;function Nt(C,$){return i.getContext(C,$)}try{const C={alpha:!0,depth:l,stencil:c,antialias:m,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:y,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kh}`),i.addEventListener("webglcontextlost",Re,!1),i.addEventListener("webglcontextrestored",Je,!1),i.addEventListener("webglcontextcreationerror",Ie,!1),Q===null){const $="webgl2";if(Q=Nt($,C),Q===null)throw Nt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw kt("WebGLRenderer: "+C.message),C}let gt,jt,ke,Ct,L,E,te,Ee,Le,Fe,je,be,se,He,Ge,Be,Pe,it,rt,Mt,Y,he,de;function Ce(){gt=new X2(Q),gt.init(),Y=new P3(Q,gt),jt=new I2(Q,gt,t,Y),ke=new z3(Q,gt),jt.reversedDepthBuffer&&x&&ke.buffers.depth.setReversed(!0),Ct=new Y2(Q),L=new b3,E=new O3(Q,gt,ke,L,jt,Y,Ct),te=new V2(W),Ee=new JS(Q),he=new O2(Q,Ee),Le=new W2(Q,Ee,Ct,he),Fe=new K2(Q,Le,Ee,he,Ct),it=new Z2(Q,jt,E),Ge=new F2(L),je=new _3(W,te,gt,jt,he,Ge),be=new H3(W,L),se=new S3,He=new C3(gt),Pe=new z2(W,te,ke,Fe,A,g),Be=new U3(W,Fe,jt),de=new G3(Q,Ct,jt,ke),rt=new P2(Q,gt,Ct),Mt=new q2(Q,gt,Ct),Ct.programs=je.programs,W.capabilities=jt,W.extensions=gt,W.properties=L,W.renderLists=se,W.shadowMap=Be,W.state=ke,W.info=Ct}Ce(),U!==Ui&&(I=new J2(U,i.width,i.height,l,c));const ze=new k3(W,Q);this.xr=ze,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const C=gt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=gt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(C){C!==void 0&&(we=C,this.setSize(k,_e,!1))},this.getSize=function(C){return C.set(k,_e)},this.setSize=function(C,$,pe=!0){if(ze.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,_e=$,i.width=Math.floor(C*we),i.height=Math.floor($*we),pe===!0&&(i.style.width=C+"px",i.style.height=$+"px"),I!==null&&I.setSize(i.width,i.height),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(k*we,_e*we).floor()},this.setDrawingBufferSize=function(C,$,pe){k=C,_e=$,we=pe,i.width=Math.floor(C*pe),i.height=Math.floor($*pe),this.setViewport(0,0,C,$)},this.setEffects=function(C){if(U===Ui){kt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let $=0;$<C.length;$++)if(C[$].isOutputPass===!0){vt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ne)},this.getViewport=function(C){return C.copy(Ne)},this.setViewport=function(C,$,pe,re){C.isVector4?Ne.set(C.x,C.y,C.z,C.w):Ne.set(C,$,pe,re),ke.viewport(ne.copy(Ne).multiplyScalar(we).round())},this.getScissor=function(C){return C.copy(We)},this.setScissor=function(C,$,pe,re){C.isVector4?We.set(C.x,C.y,C.z,C.w):We.set(C,$,pe,re),ke.scissor(Se.copy(We).multiplyScalar(we).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(C){ke.setScissorTest(at=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){Te=C},this.getClearColor=function(C){return C.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,pe=!0){let re=0;if(C){let oe=!1;if(q!==null){const Ye=q.texture.format;oe=S.has(Ye)}if(oe){const Ye=q.texture.type,Ve=b.has(Ye),B=Pe.getClearColor(),ue=Pe.getClearAlpha(),xe=B.r,Ue=B.g,qe=B.b;Ve?(w[0]=xe,w[1]=Ue,w[2]=qe,w[3]=ue,Q.clearBufferuiv(Q.COLOR,0,w)):(z[0]=xe,z[1]=Ue,z[2]=qe,z[3]=ue,Q.clearBufferiv(Q.COLOR,0,z))}else re|=Q.COLOR_BUFFER_BIT}$&&(re|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(re|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&Q.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),Z=C},this.dispose=function(){i.removeEventListener("webglcontextlost",Re,!1),i.removeEventListener("webglcontextrestored",Je,!1),i.removeEventListener("webglcontextcreationerror",Ie,!1),Pe.dispose(),se.dispose(),He.dispose(),L.dispose(),te.dispose(),Fe.dispose(),he.dispose(),de.dispose(),je.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",ei),ze.removeEventListener("sessionend",bi),an.stop()};function Re(C){C.preventDefault(),bx("WebGLRenderer: Context Lost."),j=!0}function Je(){bx("WebGLRenderer: Context Restored."),j=!1;const C=Ct.autoReset,$=Be.enabled,pe=Be.autoUpdate,re=Be.needsUpdate,oe=Be.type;Ce(),Ct.autoReset=C,Be.enabled=$,Be.autoUpdate=pe,Be.needsUpdate=re,Be.type=oe}function Ie(C){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function $e(C){const $=C.target;$.removeEventListener("dispose",$e),bt($)}function bt(C){Wt(C),L.remove(C)}function Wt(C){const $=L.get(C).programs;$!==void 0&&($.forEach(function(pe){je.releaseProgram(pe)}),C.isShaderMaterial&&je.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,pe,re,oe,Ye){$===null&&($=Zt);const Ve=oe.isMesh&&oe.matrixWorld.determinant()<0,B=Zn(C,$,pe,re,oe);ke.setMaterial(re,Ve);let ue=pe.index,xe=1;if(re.wireframe===!0){if(ue=Le.getWireframeAttribute(pe),ue===void 0)return;xe=2}const Ue=pe.drawRange,qe=pe.attributes.position;let Ke=Ue.start*xe,yt=(Ue.start+Ue.count)*xe;Ye!==null&&(Ke=Math.max(Ke,Ye.start*xe),yt=Math.min(yt,(Ye.start+Ye.count)*xe)),ue!==null?(Ke=Math.max(Ke,0),yt=Math.min(yt,ue.count)):qe!=null&&(Ke=Math.max(Ke,0),yt=Math.min(yt,qe.count));const fe=yt-Ke;if(fe<0||fe===1/0)return;he.setup(oe,re,B,pe,ue);let Qe,ht=rt;if(ue!==null&&(Qe=Ee.get(ue),ht=Mt,ht.setIndex(Qe)),oe.isMesh)re.wireframe===!0?(ke.setLineWidth(re.wireframeLinewidth*ln()),ht.setMode(Q.LINES)):ht.setMode(Q.TRIANGLES);else if(oe.isLine){let pt=re.linewidth;pt===void 0&&(pt=1),ke.setLineWidth(pt*ln()),oe.isLineSegments?ht.setMode(Q.LINES):oe.isLineLoop?ht.setMode(Q.LINE_LOOP):ht.setMode(Q.LINE_STRIP)}else oe.isPoints?ht.setMode(Q.POINTS):oe.isSprite&&ht.setMode(Q.TRIANGLES);if(oe.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))ht.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const pt=oe._multiDrawStarts,Xe=oe._multiDrawCounts,rn=oe._multiDrawCount,xt=ue?Ee.get(ue).bytesPerElement:1,un=L.get(re).currentProgram.getUniforms();for(let In=0;In<rn;In++)un.setValue(Q,"_gl_DrawID",In),ht.render(pt[In]/xt,Xe[In])}else if(oe.isInstancedMesh)ht.renderInstances(Ke,fe,oe.count);else if(pe.isInstancedBufferGeometry){const pt=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Xe=Math.min(pe.instanceCount,pt);ht.renderInstances(Ke,fe,Xe)}else ht.render(Ke,fe)};function mn(C,$,pe){C.transparent===!0&&C.side===Li&&C.forceSinglePass===!1?(C.side=$n,C.needsUpdate=!0,Rn(C,$,pe),C.side=ms,C.needsUpdate=!0,Rn(C,$,pe),C.side=Li):Rn(C,$,pe)}this.compile=function(C,$,pe=null){pe===null&&(pe=C),O=He.get(pe),O.init($),T.push(O),pe.traverseVisible(function(oe){oe.isLight&&oe.layers.test($.layers)&&(O.pushLight(oe),oe.castShadow&&O.pushShadow(oe))}),C!==pe&&C.traverseVisible(function(oe){oe.isLight&&oe.layers.test($.layers)&&(O.pushLight(oe),oe.castShadow&&O.pushShadow(oe))}),O.setupLights();const re=new Set;return C.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Ye=oe.material;if(Ye)if(Array.isArray(Ye))for(let Ve=0;Ve<Ye.length;Ve++){const B=Ye[Ve];mn(B,pe,oe),re.add(B)}else mn(Ye,pe,oe),re.add(Ye)}),O=T.pop(),re},this.compileAsync=function(C,$,pe=null){const re=this.compile(C,$,pe);return new Promise(oe=>{function Ye(){if(re.forEach(function(Ve){L.get(Ve).currentProgram.isReady()&&re.delete(Ve)}),re.size===0){oe(C);return}setTimeout(Ye,10)}gt.get("KHR_parallel_shader_compile")!==null?Ye():setTimeout(Ye,10)})};let ot=null;function Wi(C){ot&&ot(C)}function ei(){an.stop()}function bi(){an.start()}const an=new qv;an.setAnimationLoop(Wi),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(C){ot=C,ze.setAnimationLoop(C),C===null?an.stop():an.start()},ze.addEventListener("sessionstart",ei),ze.addEventListener("sessionend",bi),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;Z!==null&&Z.renderStart(C,$);const pe=ze.enabled===!0&&ze.isPresenting===!0,re=I!==null&&(q===null||pe)&&I.begin(W,q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera($),$=ze.getCamera()),C.isScene===!0&&C.onBeforeRender(W,C,$,q),O=He.get(C,T.length),O.init($),O.state.textureUnits=E.getTextureUnits(),T.push(O),ct.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),tt.setFromProjectionMatrix(ct,sa,$.reversedDepth),st=this.localClippingEnabled,mt=Ge.init(this.clippingPlanes,st),G=se.get(C,F.length),G.init(),F.push(G),ze.enabled===!0&&ze.isPresenting===!0){const Ve=W.xr.getDepthSensingMesh();Ve!==null&&cn(Ve,$,-1/0,W.sortObjects)}cn(C,$,0,W.sortObjects),G.finish(),W.sortObjects===!0&&G.sort(J,Te),Dt=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,Dt&&Pe.addToRenderList(G,C),this.info.render.frame++,mt===!0&&Ge.beginShadows();const oe=O.state.shadowsArray;if(Be.render(oe,C,$),mt===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&I.hasRenderPass())===!1){const Ve=G.opaque,B=G.transmissive;if(O.setupLights(),$.isArrayCamera){const ue=$.cameras;if(B.length>0)for(let xe=0,Ue=ue.length;xe<Ue;xe++){const qe=ue[xe];Oi(Ve,B,C,qe)}Dt&&Pe.render(C);for(let xe=0,Ue=ue.length;xe<Ue;xe++){const qe=ue[xe];sn(G,C,qe,qe.viewport)}}else B.length>0&&Oi(Ve,B,C,$),Dt&&Pe.render(C),sn(G,C,$)}q!==null&&ve===0&&(E.updateMultisampleRenderTarget(q),E.updateRenderTargetMipmap(q)),re&&I.end(W),C.isScene===!0&&C.onAfterRender(W,C,$),he.resetDefaultState(),P=-1,H=null,T.pop(),T.length>0?(O=T[T.length-1],E.setTextureUnits(O.state.textureUnits),mt===!0&&Ge.setGlobalState(W.clippingPlanes,O.state.camera)):O=null,F.pop(),F.length>0?G=F[F.length-1]:G=null,Z!==null&&Z.renderEnd()};function cn(C,$,pe,re){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)pe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLightProbeGrid)O.pushLightProbeGrid(C);else if(C.isLight)O.pushLight(C),C.castShadow&&O.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||tt.intersectsSprite(C)){re&&ut.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ct);const Ve=Fe.update(C),B=C.material;B.visible&&G.push(C,Ve,B,pe,ut.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||tt.intersectsObject(C))){const Ve=Fe.update(C),B=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ut.copy(C.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ut.copy(Ve.boundingSphere.center)),ut.applyMatrix4(C.matrixWorld).applyMatrix4(ct)),Array.isArray(B)){const ue=Ve.groups;for(let xe=0,Ue=ue.length;xe<Ue;xe++){const qe=ue[xe],Ke=B[qe.materialIndex];Ke&&Ke.visible&&G.push(C,Ve,Ke,pe,ut.z,qe)}}else B.visible&&G.push(C,Ve,B,pe,ut.z,null)}}const Ye=C.children;for(let Ve=0,B=Ye.length;Ve<B;Ve++)cn(Ye[Ve],$,pe,re)}function sn(C,$,pe,re){const{opaque:oe,transmissive:Ye,transparent:Ve}=C;O.setupLightsView(pe),mt===!0&&Ge.setGlobalState(W.clippingPlanes,pe),re&&ke.viewport(ne.copy(re)),oe.length>0&&Pi(oe,$,pe),Ye.length>0&&Pi(Ye,$,pe),Ve.length>0&&Pi(Ve,$,pe),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Oi(C,$,pe,re){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[re.id]===void 0){const Ke=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[re.id]=new oa(1,1,{generateMipmaps:!0,type:Ke?Oa:Ui,minFilter:Vs,samples:Math.max(4,jt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace})}const Ye=O.state.transmissionRenderTarget[re.id],Ve=re.viewport||ne;Ye.setSize(Ve.z*W.transmissionResolutionScale,Ve.w*W.transmissionResolutionScale);const B=W.getRenderTarget(),ue=W.getActiveCubeFace(),xe=W.getActiveMipmapLevel();W.setRenderTarget(Ye),W.getClearColor(N),X=W.getClearAlpha(),X<1&&W.setClearColor(16777215,.5),W.clear(),Dt&&Pe.render(pe);const Ue=W.toneMapping;W.toneMapping=ra;const qe=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),O.setupLightsView(re),mt===!0&&Ge.setGlobalState(W.clippingPlanes,re),Pi(C,pe,re),E.updateMultisampleRenderTarget(Ye),E.updateRenderTargetMipmap(Ye),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let yt=0,fe=$.length;yt<fe;yt++){const Qe=$[yt],{object:ht,geometry:pt,material:Xe,group:rn}=Qe;if(Xe.side===Li&&ht.layers.test(re.layers)){const xt=Xe.side;Xe.side=$n,Xe.needsUpdate=!0,gs(ht,pe,re,pt,Xe,rn),Xe.side=xt,Xe.needsUpdate=!0,Ke=!0}}Ke===!0&&(E.updateMultisampleRenderTarget(Ye),E.updateRenderTargetMipmap(Ye))}W.setRenderTarget(B,ue,xe),W.setClearColor(N,X),qe!==void 0&&(re.viewport=qe),W.toneMapping=Ue}function Pi(C,$,pe){const re=$.isScene===!0?$.overrideMaterial:null;for(let oe=0,Ye=C.length;oe<Ye;oe++){const Ve=C[oe],{object:B,geometry:ue,group:xe}=Ve;let Ue=Ve.material;Ue.allowOverride===!0&&re!==null&&(Ue=re),B.layers.test(pe.layers)&&gs(B,$,pe,ue,Ue,xe)}}function gs(C,$,pe,re,oe,Ye){C.onBeforeRender(W,$,pe,re,oe,Ye),C.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),oe.onBeforeRender(W,$,pe,re,C,Ye),oe.transparent===!0&&oe.side===Li&&oe.forceSinglePass===!1?(oe.side=$n,oe.needsUpdate=!0,W.renderBufferDirect(pe,$,re,oe,C,Ye),oe.side=ms,oe.needsUpdate=!0,W.renderBufferDirect(pe,$,re,oe,C,Ye),oe.side=Li):W.renderBufferDirect(pe,$,re,oe,C,Ye),C.onAfterRender(W,$,pe,re,oe,Ye)}function Rn(C,$,pe){$.isScene!==!0&&($=Zt);const re=L.get(C),oe=O.state.lights,Ye=O.state.shadowsArray,Ve=oe.state.version,B=je.getParameters(C,oe.state,Ye,$,pe,O.state.lightProbeGridArray),ue=je.getProgramCacheKey(B);let xe=re.programs;re.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?$.environment:null,re.fog=$.fog;const Ue=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;re.envMap=te.get(C.envMap||re.environment,Ue),re.envMapRotation=re.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,xe===void 0&&(C.addEventListener("dispose",$e),xe=new Map,re.programs=xe);let qe=xe.get(ue);if(qe!==void 0){if(re.currentProgram===qe&&re.lightsStateVersion===Ve)return Ii(C,B),qe}else B.uniforms=je.getUniforms(C),Z!==null&&C.isNodeMaterial&&Z.build(C,pe,B),C.onBeforeCompile(B,W),qe=je.acquireProgram(B,ue),xe.set(ue,qe),re.uniforms=B.uniforms;const Ke=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=Ge.uniform),Ii(C,B),re.needsLights=qi(C),re.lightsStateVersion=Ve,re.needsLights&&(Ke.ambientLightColor.value=oe.state.ambient,Ke.lightProbe.value=oe.state.probe,Ke.directionalLights.value=oe.state.directional,Ke.directionalLightShadows.value=oe.state.directionalShadow,Ke.spotLights.value=oe.state.spot,Ke.spotLightShadows.value=oe.state.spotShadow,Ke.rectAreaLights.value=oe.state.rectArea,Ke.ltc_1.value=oe.state.rectAreaLTC1,Ke.ltc_2.value=oe.state.rectAreaLTC2,Ke.pointLights.value=oe.state.point,Ke.pointLightShadows.value=oe.state.pointShadow,Ke.hemisphereLights.value=oe.state.hemi,Ke.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ke.spotLightMatrix.value=oe.state.spotLightMatrix,Ke.spotLightMap.value=oe.state.spotLightMap,Ke.pointShadowMatrix.value=oe.state.pointShadowMatrix),re.lightProbeGrid=O.state.lightProbeGridArray.length>0,re.currentProgram=qe,re.uniformsList=null,qe}function xs(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Xc.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function Ii(C,$){const pe=L.get(C);pe.outputColorSpace=$.outputColorSpace,pe.batching=$.batching,pe.batchingColor=$.batchingColor,pe.instancing=$.instancing,pe.instancingColor=$.instancingColor,pe.instancingMorph=$.instancingMorph,pe.skinning=$.skinning,pe.morphTargets=$.morphTargets,pe.morphNormals=$.morphNormals,pe.morphColors=$.morphColors,pe.morphTargetsCount=$.morphTargetsCount,pe.numClippingPlanes=$.numClippingPlanes,pe.numIntersection=$.numClipIntersection,pe.vertexAlphas=$.vertexAlphas,pe.vertexTangents=$.vertexTangents,pe.toneMapping=$.toneMapping}function vs(C,$){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;D.setFromMatrixPosition($.matrixWorld);for(let pe=0,re=C.length;pe<re;pe++){const oe=C[pe];if(oe.texture!==null&&oe.boundingBox.containsPoint(D))return oe}return null}function Zn(C,$,pe,re,oe){$.isScene!==!0&&($=Zt),E.resetTextureUnits();const Ye=$.fog,Ve=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?$.environment:null,B=q===null?W.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:It.workingColorSpace,ue=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,xe=te.get(re.envMap||Ve,ue),Ue=re.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,qe=!!pe.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ke=!!pe.morphAttributes.position,yt=!!pe.morphAttributes.normal,fe=!!pe.morphAttributes.color;let Qe=ra;re.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Qe=W.toneMapping);const ht=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,pt=ht!==void 0?ht.length:0,Xe=L.get(re),rn=O.state.lights;if(mt===!0&&(st===!0||C!==H)){const Yt=C===H&&re.id===P;Ge.setState(re,C,Yt)}let xt=!1;re.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==rn.state.version||Xe.outputColorSpace!==B||oe.isBatchedMesh&&Xe.batching===!1||!oe.isBatchedMesh&&Xe.batching===!0||oe.isBatchedMesh&&Xe.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&Xe.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&Xe.instancing===!1||!oe.isInstancedMesh&&Xe.instancing===!0||oe.isSkinnedMesh&&Xe.skinning===!1||!oe.isSkinnedMesh&&Xe.skinning===!0||oe.isInstancedMesh&&Xe.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Xe.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Xe.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Xe.instancingMorph===!1&&oe.morphTexture!==null||Xe.envMap!==xe||re.fog===!0&&Xe.fog!==Ye||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ge.numPlanes||Xe.numIntersection!==Ge.numIntersection)||Xe.vertexAlphas!==Ue||Xe.vertexTangents!==qe||Xe.morphTargets!==Ke||Xe.morphNormals!==yt||Xe.morphColors!==fe||Xe.toneMapping!==Qe||Xe.morphTargetsCount!==pt||!!Xe.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Xe.__version=re.version);let un=Xe.currentProgram;xt===!0&&(un=Rn(re,$,oe),Z&&re.isNodeMaterial&&Z.onUpdateProgram(re,un,Xe));let In=!1,Nn=!1,Kn=!1;const Ht=un.getUniforms(),dn=Xe.uniforms;if(ke.useProgram(un.program)&&(In=!0,Nn=!0,Kn=!0),re.id!==P&&(P=re.id,Nn=!0),Xe.needsLights){const Yt=vs(O.state.lightProbeGridArray,oe);Xe.lightProbeGrid!==Yt&&(Xe.lightProbeGrid=Yt,Nn=!0)}if(In||H!==C){ke.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ht.setValue(Q,"projectionMatrix",C.projectionMatrix),Ht.setValue(Q,"viewMatrix",C.matrixWorldInverse);const Zi=Ht.map.cameraPosition;Zi!==void 0&&Zi.setValue(Q,Rt.setFromMatrixPosition(C.matrixWorld)),jt.logarithmicDepthBuffer&&Ht.setValue(Q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ht.setValue(Q,"isOrthographic",C.isOrthographicCamera===!0),H!==C&&(H=C,Nn=!0,Kn=!0)}if(Xe.needsLights&&(rn.state.directionalShadowMap.length>0&&Ht.setValue(Q,"directionalShadowMap",rn.state.directionalShadowMap,E),rn.state.spotShadowMap.length>0&&Ht.setValue(Q,"spotShadowMap",rn.state.spotShadowMap,E),rn.state.pointShadowMap.length>0&&Ht.setValue(Q,"pointShadowMap",rn.state.pointShadowMap,E)),oe.isSkinnedMesh){Ht.setOptional(Q,oe,"bindMatrix"),Ht.setOptional(Q,oe,"bindMatrixInverse");const Yt=oe.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Ht.setValue(Q,"boneTexture",Yt.boneTexture,E))}oe.isBatchedMesh&&(Ht.setOptional(Q,oe,"batchingTexture"),Ht.setValue(Q,"batchingTexture",oe._matricesTexture,E),Ht.setOptional(Q,oe,"batchingIdTexture"),Ht.setValue(Q,"batchingIdTexture",oe._indirectTexture,E),Ht.setOptional(Q,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Ht.setValue(Q,"batchingColorTexture",oe._colorsTexture,E));const ft=pe.morphAttributes;if((ft.position!==void 0||ft.normal!==void 0||ft.color!==void 0)&&it.update(oe,pe,un),(Nn||Xe.receiveShadow!==oe.receiveShadow)&&(Xe.receiveShadow=oe.receiveShadow,Ht.setValue(Q,"receiveShadow",oe.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&$.environment!==null&&(dn.envMapIntensity.value=$.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=X3()),Nn){if(Ht.setValue(Q,"toneMappingExposure",W.toneMappingExposure),Xe.needsLights&&ti(dn,Kn),Ye&&re.fog===!0&&be.refreshFogUniforms(dn,Ye),be.refreshMaterialUniforms(dn,re,we,_e,O.state.transmissionRenderTarget[C.id]),Xe.needsLights&&Xe.lightProbeGrid){const Yt=Xe.lightProbeGrid;dn.probesSH.value=Yt.texture,dn.probesMin.value.copy(Yt.boundingBox.min),dn.probesMax.value.copy(Yt.boundingBox.max),dn.probesResolution.value.copy(Yt.resolution)}Xc.upload(Q,xs(Xe),dn,E)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Xc.upload(Q,xs(Xe),dn,E),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ht.setValue(Q,"center",oe.center),Ht.setValue(Q,"modelViewMatrix",oe.modelViewMatrix),Ht.setValue(Q,"normalMatrix",oe.normalMatrix),Ht.setValue(Q,"modelMatrix",oe.matrixWorld),re.uniformsGroups!==void 0){const Yt=re.uniformsGroups;for(let Zi=0,Ia=Yt.length;Zi<Ia;Zi++){const bs=Yt[Zi];de.update(bs,un),de.bind(bs,un)}}return un}function ti(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function qi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return me},this.getActiveMipmapLevel=function(){return ve},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,$,pe){const re=L.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),L.get(C.texture).__webglTexture=$,L.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:pe,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const pe=L.get(C);pe.__webglFramebuffer=$,pe.__useDefaultFramebuffer=$===void 0};const Yi=Q.createFramebuffer();this.setRenderTarget=function(C,$=0,pe=0){q=C,me=$,ve=pe;let re=null,oe=!1,Ye=!1;if(C){const B=L.get(C);if(B.__useDefaultFramebuffer!==void 0){ke.bindFramebuffer(Q.FRAMEBUFFER,B.__webglFramebuffer),ne.copy(C.viewport),Se.copy(C.scissor),ae=C.scissorTest,ke.viewport(ne),ke.scissor(Se),ke.setScissorTest(ae),P=-1;return}else if(B.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(B.__hasExternalTextures)E.rebindTextures(C,L.get(C.texture).__webglTexture,L.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ue=C.depthTexture;if(B.__boundDepthTexture!==Ue){if(Ue!==null&&L.has(Ue)&&(C.width!==Ue.image.width||C.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}const ue=C.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(Ye=!0);const xe=L.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(xe[$])?re=xe[$][pe]:re=xe[$],oe=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?re=L.get(C).__webglMultisampledFramebuffer:Array.isArray(xe)?re=xe[pe]:re=xe,ne.copy(C.viewport),Se.copy(C.scissor),ae=C.scissorTest}else ne.copy(Ne).multiplyScalar(we).floor(),Se.copy(We).multiplyScalar(we).floor(),ae=at;if(pe!==0&&(re=Yi),ke.bindFramebuffer(Q.FRAMEBUFFER,re)&&ke.drawBuffers(C,re),ke.viewport(ne),ke.scissor(Se),ke.setScissorTest(ae),oe){const B=L.get(C.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+$,B.__webglTexture,pe)}else if(Ye){const B=$;for(let ue=0;ue<C.textures.length;ue++){const xe=L.get(C.textures[ue]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+ue,xe.__webglTexture,pe,B)}}else if(C!==null&&pe!==0){const B=L.get(C.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,B.__webglTexture,pe)}P=-1},this.readRenderTargetPixels=function(C,$,pe,re,oe,Ye,Ve,B=0){if(!(C&&C.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(ue=ue[Ve]),ue){ke.bindFramebuffer(Q.FRAMEBUFFER,ue);try{const xe=C.textures[B],Ue=xe.format,qe=xe.type;if(C.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+B),!jt.textureFormatReadable(Ue)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(qe)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-re&&pe>=0&&pe<=C.height-oe&&Q.readPixels($,pe,re,oe,Y.convert(Ue),Y.convert(qe),Ye)}finally{const xe=q!==null?L.get(q).__webglFramebuffer:null;ke.bindFramebuffer(Q.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(C,$,pe,re,oe,Ye,Ve,B=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(ue=ue[Ve]),ue)if($>=0&&$<=C.width-re&&pe>=0&&pe<=C.height-oe){ke.bindFramebuffer(Q.FRAMEBUFFER,ue);const xe=C.textures[B],Ue=xe.format,qe=xe.type;if(C.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+B),!jt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ke),Q.bufferData(Q.PIXEL_PACK_BUFFER,Ye.byteLength,Q.STREAM_READ),Q.readPixels($,pe,re,oe,Y.convert(Ue),Y.convert(qe),0);const yt=q!==null?L.get(q).__webglFramebuffer:null;ke.bindFramebuffer(Q.FRAMEBUFFER,yt);const fe=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await pS(Q,fe,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ke),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Ye),Q.deleteBuffer(Ke),Q.deleteSync(fe),Ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,pe=0){const re=Math.pow(2,-pe),oe=Math.floor(C.image.width*re),Ye=Math.floor(C.image.height*re),Ve=$!==null?$.x:0,B=$!==null?$.y:0;E.setTexture2D(C,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,pe,0,0,Ve,B,oe,Ye),ke.unbindTexture()};const gn=Q.createFramebuffer(),_s=Q.createFramebuffer();this.copyTextureToTexture=function(C,$,pe=null,re=null,oe=0,Ye=0){let Ve,B,ue,xe,Ue,qe,Ke,yt,fe;const Qe=C.isCompressedTexture?C.mipmaps[Ye]:C.image;if(pe!==null)Ve=pe.max.x-pe.min.x,B=pe.max.y-pe.min.y,ue=pe.isBox3?pe.max.z-pe.min.z:1,xe=pe.min.x,Ue=pe.min.y,qe=pe.isBox3?pe.min.z:0;else{const dn=Math.pow(2,-oe);Ve=Math.floor(Qe.width*dn),B=Math.floor(Qe.height*dn),C.isDataArrayTexture?ue=Qe.depth:C.isData3DTexture?ue=Math.floor(Qe.depth*dn):ue=1,xe=0,Ue=0,qe=0}re!==null?(Ke=re.x,yt=re.y,fe=re.z):(Ke=0,yt=0,fe=0);const ht=Y.convert($.format),pt=Y.convert($.type);let Xe;$.isData3DTexture?(E.setTexture3D($,0),Xe=Q.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(E.setTexture2DArray($,0),Xe=Q.TEXTURE_2D_ARRAY):(E.setTexture2D($,0),Xe=Q.TEXTURE_2D),ke.activeTexture(Q.TEXTURE0),ke.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,$.flipY),ke.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),ke.pixelStorei(Q.UNPACK_ALIGNMENT,$.unpackAlignment);const rn=ke.getParameter(Q.UNPACK_ROW_LENGTH),xt=ke.getParameter(Q.UNPACK_IMAGE_HEIGHT),un=ke.getParameter(Q.UNPACK_SKIP_PIXELS),In=ke.getParameter(Q.UNPACK_SKIP_ROWS),Nn=ke.getParameter(Q.UNPACK_SKIP_IMAGES);ke.pixelStorei(Q.UNPACK_ROW_LENGTH,Qe.width),ke.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Qe.height),ke.pixelStorei(Q.UNPACK_SKIP_PIXELS,xe),ke.pixelStorei(Q.UNPACK_SKIP_ROWS,Ue),ke.pixelStorei(Q.UNPACK_SKIP_IMAGES,qe);const Kn=C.isDataArrayTexture||C.isData3DTexture,Ht=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const dn=L.get(C),ft=L.get($),Yt=L.get(dn.__renderTarget),Zi=L.get(ft.__renderTarget);ke.bindFramebuffer(Q.READ_FRAMEBUFFER,Yt.__webglFramebuffer),ke.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let Ia=0;Ia<ue;Ia++)Kn&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,L.get(C).__webglTexture,oe,qe+Ia),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,L.get($).__webglTexture,Ye,fe+Ia)),Q.blitFramebuffer(xe,Ue,Ve,B,Ke,yt,Ve,B,Q.DEPTH_BUFFER_BIT,Q.NEAREST);ke.bindFramebuffer(Q.READ_FRAMEBUFFER,null),ke.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(oe!==0||C.isRenderTargetTexture||L.has(C)){const dn=L.get(C),ft=L.get($);ke.bindFramebuffer(Q.READ_FRAMEBUFFER,gn),ke.bindFramebuffer(Q.DRAW_FRAMEBUFFER,_s);for(let Yt=0;Yt<ue;Yt++)Kn?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,dn.__webglTexture,oe,qe+Yt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,dn.__webglTexture,oe),Ht?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ft.__webglTexture,Ye,fe+Yt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,ft.__webglTexture,Ye),oe!==0?Q.blitFramebuffer(xe,Ue,Ve,B,Ke,yt,Ve,B,Q.COLOR_BUFFER_BIT,Q.NEAREST):Ht?Q.copyTexSubImage3D(Xe,Ye,Ke,yt,fe+Yt,xe,Ue,Ve,B):Q.copyTexSubImage2D(Xe,Ye,Ke,yt,xe,Ue,Ve,B);ke.bindFramebuffer(Q.READ_FRAMEBUFFER,null),ke.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Ht?C.isDataTexture||C.isData3DTexture?Q.texSubImage3D(Xe,Ye,Ke,yt,fe,Ve,B,ue,ht,pt,Qe.data):$.isCompressedArrayTexture?Q.compressedTexSubImage3D(Xe,Ye,Ke,yt,fe,Ve,B,ue,ht,Qe.data):Q.texSubImage3D(Xe,Ye,Ke,yt,fe,Ve,B,ue,ht,pt,Qe):C.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Ye,Ke,yt,Ve,B,ht,pt,Qe.data):C.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Ye,Ke,yt,Qe.width,Qe.height,ht,Qe.data):Q.texSubImage2D(Q.TEXTURE_2D,Ye,Ke,yt,Ve,B,ht,pt,Qe);ke.pixelStorei(Q.UNPACK_ROW_LENGTH,rn),ke.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,xt),ke.pixelStorei(Q.UNPACK_SKIP_PIXELS,un),ke.pixelStorei(Q.UNPACK_SKIP_ROWS,In),ke.pixelStorei(Q.UNPACK_SKIP_IMAGES,Nn),Ye===0&&$.generateMipmaps&&Q.generateMipmap(Xe),ke.unbindTexture()},this.initRenderTarget=function(C){L.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),ke.unbindTexture()},this.resetState=function(){me=0,ve=0,q=null,ke.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=It._getDrawingBufferColorSpace(t),i.unpackColorSpace=It._getUnpackColorSpace()}}function q3({isWarping:r,theme:t="dark"}){const i=Oe.useRef(null),s=Oe.useRef(null),l=Oe.useRef(r);return Oe.useEffect(()=>{l.current=r},[r]),Oe.useEffect(()=>{const c=i.current,h=s.current;if(!c||!h)return;let m=6514417,g=440020;t==="cyberpunk"?(m=16711765,g=65484):t==="ai"?(m=9133302,g=6514417):t==="terminal"?(m=2278750,g=1483594):t==="light"&&(m=5195493,g=440020);const p=new NS;p.fog=new rp(131848,.015);const y=c.clientWidth/c.clientHeight,_=new Di(75,y,.1,1e3);_.position.set(0,0,10);const x=new W3({canvas:h,antialias:!0,alpha:!0,powerPreference:"high-performance"});x.setSize(c.clientWidth,c.clientHeight,!1),x.setPixelRatio(Math.min(window.devicePixelRatio,2));const M=120,A=100,U=8,S=new Qo(U,U,M,32,A,!0);S.rotateX(Math.PI/2);const b=new na({color:m,wireframe:!0,transparent:!0,opacity:0,side:Li}),w=new Ln(S,b);p.add(w);const z=new zi({vertexShader:`
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

        void main() {
          float speed = uTime * (1.2 + uWarpProgress * 10.0);
          float colCoords = vUv.x * 70.0 + sin(vUv.y * 3.1415 + uTime * 2.0) * (1.0 - uWarpProgress);
          float rowCoords = vUv.y * 3.5 - speed;
          float streamNoise = noise(vec2(colCoords, rowCoords * 0.15));
          float intensity = smoothstep(0.46, 0.82, streamNoise);

          if (uWarpProgress > 0.01) {
            float streakCol = vUv.x * 140.0;
            float streakRow = vUv.y * 1.5 - uTime * (18.0 + uWarpProgress * 45.0);
            float warpStreaks = noise(vec2(streakCol, streakRow * 0.025));
            float stretchFactor = smoothstep(0.38, 0.88, warpStreaks) * uWarpProgress * 1.8;
            intensity += stretchFactor;
          }

          float depthFade = smoothstep(55.0, -45.0, vPosition.z);
          vec3 baseColor = mix(uPrimaryColor, uSecondaryColor, sin(vUv.x * 6.28318 + uTime) * 0.5 + 0.5);
          vec3 finalColor = baseColor * (intensity * (1.0 + uWarpProgress * 3.2));

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
      `,uniforms:{uTime:{value:0},uWarpProgress:{value:0},uPrimaryColor:{value:new Bt(m)},uSecondaryColor:{value:new Bt(g)}},transparent:!0,side:Li,blending:Da,depthWrite:!1}),D=new Qo(U-.1,U-.1,M,48,A,!0);D.rotateX(Math.PI/2);const G=new Ln(D,z);p.add(G);const O=new Qo(U+1.2,U+1.2,M,12,35,!0);O.rotateX(Math.PI/2);const F=new na({color:g,wireframe:!0,transparent:!0,opacity:0,side:Li}),T=new Ln(O,F);p.add(T);const I=15,W=[],j=new $c(U+.3,.08,8,48);for(let he=0;he<I;he++){const de=new na({color:he%2===0?m:g,transparent:!0,opacity:0}),Ce=new Ln(j,de);Ce.position.z=he/I*M-M/2,p.add(Ce),W.push(Ce)}const Z=new zi({vertexShader:`
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
      `,uniforms:{uTime:{value:0},uWarpProgress:{value:0},uPrimaryColor:{value:new Bt(m)},uSecondaryColor:{value:new Bt(g)}},transparent:!0,depthWrite:!1,blending:Da}),me=new Ln(new sl(280,280),Z);me.position.set(0,0,-85),p.add(me);const ve=900,q=new Float32Array(ve*3),P=new Float32Array(ve*3),H=[],ne=[],Se=[],ae=[],N=()=>{const he=document.createElement("canvas");he.width=16,he.height=16;const de=he.getContext("2d");if(de){const Ce=de.createRadialGradient(8,8,0,8,8,8);Ce.addColorStop(0,"rgba(255,255,255,1)"),Ce.addColorStop(.2,"rgba(255,255,255,0.8)"),Ce.addColorStop(.5,"rgba(255,255,255,0.25)"),Ce.addColorStop(1,"rgba(255,255,255,0)"),de.fillStyle=Ce,de.fillRect(0,0,16,16)}return new kS(he)};for(let he=0;he<ve;he++){q[he*3]=(Math.random()-.5)*90,q[he*3+1]=(Math.random()-.5)*90,q[he*3+2]=Math.random()*100-85,H.push(Math.random()*.08+.02),ne.push(1+Math.random()*2.5),Se.push(Math.random()*Math.PI*2);let de=1,Ce=1,ze=1;const Re=Math.random();Re<.18?(de=.82,Ce=.9,ze=1):Re<.32&&(de=1,Ce=.94,ze=.78),ae.push([de,Ce,ze]),P[he*3]=de,P[he*3+1]=Ce,P[he*3+2]=ze}const X=new Yn;X.setAttribute("position",new ci(q,3)),X.setAttribute("color",new ci(P,3));const k=new Vh({size:.38,map:N(),transparent:!0,blending:Da,depthWrite:!1,vertexColors:!0,sizeAttenuation:!0}),_e=new Px(X,k);p.add(_e);const we=new Jo(1.5,32,32),J=new na({color:16777215,transparent:!0,opacity:0}),Te=new Ln(we,J);Te.position.set(0,0,-45),p.add(Te);const Ne=18,We=[],at=[],tt=()=>{const he=new lp(.22+Math.random()*.32,0),de=he.attributes.position.array;for(let Ce=0;Ce<de.length;Ce++)de[Ce]+=(Math.random()-.5)*.14;return he.attributes.position.needsUpdate=!0,he.computeVertexNormals(),he};for(let he=0;he<Ne;he++){const de=tt(),Ce=new na({color:new Bt().setHSL(.06+Math.random()*.08,.15,.28+Math.random()*.18),wireframe:!1,transparent:!0,opacity:.72});at.push(Ce);const ze=new Ln(de,Ce),Re=Math.random()*Math.PI*2,Je=12+Math.random()*30;ze.position.set(Math.cos(Re)*Je,Math.sin(Re)*Je,Math.random()*80-70),ze.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),p.add(ze),We.push({mesh:ze,vx:(Math.random()-.5)*.006,vy:(Math.random()-.5)*.006,vz:.012+Math.random()*.022,rx:(Math.random()-.5)*.008,ry:(Math.random()-.5)*.012,rz:(Math.random()-.5)*.006})}const mt=new Ln(new Jo(.8,32,32),new na({color:16774880,transparent:!0,opacity:0,blending:Da,depthWrite:!1})),st=new Ln(new $c(2,.18,12,64),new na({color:16747520,transparent:!0,opacity:0,blending:Da,depthWrite:!1})),ct=new Ln(new Jo(3.5,32,32),new na({color:16729344,transparent:!0,opacity:0,blending:Da,depthWrite:!1,side:$n})),Rt=220,ut=new Float32Array(Rt*3),Zt=new Float32Array(Rt*3),Dt=[];for(let he=0;he<Rt;he++){ut[he*3]=0,ut[he*3+1]=0,ut[he*3+2]=0;const de=Math.random()*Math.PI*2,Ce=Math.acos(2*Math.random()-1),ze=.04+Math.random()*.12;Dt.push(new ie(Math.sin(Ce)*Math.cos(de)*ze,Math.sin(Ce)*Math.sin(de)*ze,Math.cos(Ce)*ze));const Re=Math.random();Zt[he*3]=1,Zt[he*3+1]=.3+Re*.7,Zt[he*3+2]=Re*.3}const ln=new Yn;ln.setAttribute("position",new ci(ut,3)),ln.setAttribute("color",new ci(Zt,3));const Q=new Vh({size:.22,transparent:!0,opacity:0,blending:Da,depthWrite:!1,vertexColors:!0,sizeAttenuation:!0}),Nt=new Px(ln,Q),gt=new Yo;gt.add(mt,st,ct,Nt);const jt=(Math.random()-.5)*40,ke=(Math.random()-.5)*30;gt.position.set(jt,ke,-60),p.add(gt);let Ct=0,L=0,E=1;const te=Date.now(),Ee=3e4;let Le=0,Fe=0,je=0,be=0;const se=he=>{Le=(he.clientX-window.innerWidth/2)/110,Fe=(he.clientY-window.innerHeight/2)/110};window.addEventListener("mousemove",se);const He=()=>{if(!c||!h)return;const he=c.clientWidth,de=c.clientHeight;_.aspect=he/de,_.updateProjectionMatrix(),x.setSize(he,de,!1)},Ge=new ResizeObserver(He);Ge.observe(c);let Be=.25,Pe=.0015,it=0,rt=0,Mt;const Y=()=>{const he=l.current;rt+=he?.024:.012,he?(it=Math.min(1,it+.018),Be=Math.min(4.8,Be+.15),Pe=Math.min(.06,Pe+.0018),_.fov=Math.min(136,_.fov+1.2),_.updateProjectionMatrix(),J.opacity=Math.min(1,J.opacity+.045),Te.scale.addScalar(.4)):(it=Math.max(0,it-.03),Be=Math.max(.25,Be-.05),Pe=Math.max(.0015,Pe-.001),_.fov=Math.max(75,_.fov-1.5),_.updateProjectionMatrix(),J.opacity=Math.max(0,J.opacity-.05),Te.scale.x>1&&Te.scale.set(1,1,1)),b.opacity=.14*it,F.opacity=.09*it,z.uniforms.uWarpProgress.value=it,z.uniforms.uTime.value=rt,Z.uniforms.uTime.value=rt,Z.uniforms.uWarpProgress.value=it,w.rotation.z+=Pe,T.rotation.z-=Pe*.7,G.rotation.z+=Pe*.4;const de=Date.now()*.002;W.forEach((Ie,$e)=>{Ie.position.z+=Be,Ie.position.z>15&&(Ie.position.z=-55);const bt=1+Math.sin(de+$e)*.03+(he?.08:0);Ie.scale.set(bt,bt,1),Ie.material&&!Array.isArray(Ie.material)&&(Ie.material.opacity=.65*it)}),je+=(Le-je)*.06,be+=(Fe-be)*.06,_.position.x=je,_.position.y=-be,_.lookAt(0,0,-50);const Ce=X.attributes.position.array,ze=X.attributes.color.array;for(let Ie=0;Ie<ve;Ie++){const $e=Ie*3,bt=he?H[Ie]*120+Be*12:H[Ie]+Be*.08;if(Ce[$e+2]+=bt,Ce[$e+2]>12&&(Ce[$e+2]=-85,Ce[$e]=(Math.random()-.5)*90,Ce[$e+1]=(Math.random()-.5)*90),!he){const ot=Ce[$e],Wi=Ce[$e+1],ei=4e-4*(Ie%2===0?1:-1),bi=Math.cos(ei),an=Math.sin(ei);Ce[$e]=ot*bi-Wi*an,Ce[$e+1]=ot*an+Wi*bi}const Wt=ae[Ie],mn=he?1:.35+.65*Math.sin(rt*ne[Ie]+Se[Ie]);ze[$e]=Wt[0]*mn,ze[$e+1]=Wt[1]*mn,ze[$e+2]=Wt[2]*mn}k.size=he?Math.min(.55,k.size+.012):Math.max(.38,k.size-.01),X.attributes.position.needsUpdate=!0,X.attributes.color.needsUpdate=!0;const Re=1+it*14;We.forEach((Ie,$e)=>{Ie.mesh.position.z+=Ie.vz*Re,Ie.mesh.position.x+=Ie.vx,Ie.mesh.position.y+=Ie.vy,Ie.mesh.rotation.x+=Ie.rx,Ie.mesh.rotation.y+=Ie.ry,Ie.mesh.rotation.z+=Ie.rz;const bt=at[$e];if(bt.opacity=.55+.2*Math.sin(rt*.8+$e*1.3),he&&(Ie.mesh.position.x+=Ie.vx*4,Ie.mesh.position.y+=Ie.vy*4),Ie.mesh.position.z>14){const Wt=Math.random()*Math.PI*2,mn=12+Math.random()*30;Ie.mesh.position.set(Math.cos(Wt)*mn,Math.sin(Wt)*mn,-75)}});const Je=Date.now()-te;if(Ct===0&&Je>=Ee&&(Ct=1,L=0),Ct===1){L+=.007;const Ie=Math.min(L,1),$e=Ie*Ie*(3-2*Ie);mt.material.opacity=$e*.95,ct.material.opacity=$e*.35,st.material.opacity=$e*.8,Q.opacity=$e*.75,E=1+$e*4.5,st.scale.set(E,E,1),ct.scale.setScalar(1+$e*1.8),mt.scale.setScalar(1+$e*2.2);const bt=ln.attributes.position.array;for(let Wt=0;Wt<Rt;Wt++)bt[Wt*3]=Dt[Wt].x*$e*80,bt[Wt*3+1]=Dt[Wt].y*$e*80,bt[Wt*3+2]=Dt[Wt].z*$e*80;ln.attributes.position.needsUpdate=!0,L>=1&&(Ct=2,L=0)}if(Ct===2){L+=.011,E+=.06,st.scale.set(E,E,1);const Ie=.88+.12*Math.sin(rt*8);mt.material.opacity=Ie,L>=1&&(Ct=3,L=0)}if(Ct===3){L+=.004;const Ie=Math.min(L,1),$e=1-Ie*Ie;mt.material.opacity=$e*.95,ct.material.opacity=$e*.35,st.material.opacity=$e*.55,Q.opacity=$e*.6,E+=.035,st.scale.set(E,E,1),L>=1&&(Ct=4)}Ct>=1&&Ct<=3&&(gt.rotation.z+=.003),x.render(p,_),Mt=requestAnimationFrame(Y)};return Y(),()=>{cancelAnimationFrame(Mt),window.removeEventListener("mousemove",se),Ge.disconnect(),x.dispose(),S.dispose(),b.dispose(),D.dispose(),z.dispose(),O.dispose(),F.dispose(),j.dispose(),X.dispose(),k.dispose(),we.dispose(),J.dispose(),me.geometry.dispose(),Z.dispose(),We.forEach(he=>{he.mesh.geometry.dispose()}),at.forEach(he=>he.dispose()),mt.geometry.dispose(),mt.material.dispose(),st.geometry.dispose(),st.material.dispose(),ct.geometry.dispose(),ct.material.dispose(),ln.dispose(),Q.dispose()}},[t]),d.jsx("div",{ref:i,className:`fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${t==="light"?"bg-[#f8fafc]":"bg-[#020308]"}`,children:d.jsx("canvas",{ref:s,className:"w-full h-full block",style:{filter:r?"contrast(1.15) brightness(1.1)":"none"}})})}const Y3="/assets/avatar-BRuvllXD.png",Ko=()=>{if(typeof window<"u"){const r=window.location.hostname;if(r==="localhost"||r==="127.0.5.1"||r==="127.0.0.1"||r.startsWith("192.168.")||r.startsWith("10.")||r.endsWith(".local"))return"";const t="rsacfzyiydjxiqnynxfb";if(r==="farhankabir.me"||r.endsWith(".github.io"))return`https://${t}.supabase.co/functions/v1`}return""},$f=r=>d.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",...r,children:d.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),eh=r=>d.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",...r,children:d.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0a3.26 3.26 0 01-3.26 3.27 3.26 3.26 0 01-3.26-3.27 3.26 3.26 0 013.26-3.27 3.26 3.26 0 013.26 3.27zm3.04 0a1.07 1.07 0 01-1.07 1.06 1.07 1.07 0 01-1.07-1.06 1.07 1.07 0 011.07-1.06 1.07 1.07 0 011.07 1.06z"})});function Z3({item:r,idx:t,theme:i}){const s=Oe.useRef(null),[l,c]=Oe.useState(!1);Oe.useEffect(()=>{const m=new IntersectionObserver(([p])=>{p.isIntersecting&&c(!0)},{threshold:.1,rootMargin:"0px 0px -60px 0px"}),g=s.current;return g&&m.observe(g),()=>{g&&m.unobserve(g)}},[]);const h=t%2===0;return d.jsxs("div",{ref:s,className:`flex flex-col md:flex-row items-start ${h?"md:flex-row-reverse":""} relative transition-all duration-700 ease-out ${l?"opacity-100 translate-x-0":`opacity-0 ${h?"translate-x-10 md:-translate-x-10":"translate-x-10"}`}`,children:[d.jsx("div",{className:"absolute left-[21px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20",children:d.jsx("div",{className:`w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-lg transition-all duration-500 ${l?"border-cyan-400/80 scale-100":"border-zinc-850 scale-75"}`,children:d.jsx("span",{className:`w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 transition-transform duration-500 ${l?"scale-100":"scale-50"}`})})}),d.jsx("div",{className:"hidden md:block w-1/2"}),d.jsx("div",{className:"w-full md:w-[46%] pl-12 md:pl-0",children:d.jsxs("div",{className:`p-6 md:p-8 rounded-2xl border backdrop-blur-md relative group transition-all duration-500 ${i==="light"?"bg-white/80 border-slate-200 shadow-lg hover:border-indigo-400 hover:shadow-indigo-500/5":"bg-zinc-950/45 border-zinc-900 shadow-2xl hover:border-zinc-850 hover:shadow-cyan-500/5"}`,children:[d.jsx("div",{className:"absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 blur-xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors"}),d.jsxs("div",{className:"flex flex-wrap justify-between items-start gap-4 mb-6",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-1",children:r.year}),d.jsx("h3",{className:`text-base md:text-lg font-sans font-bold leading-tight transition-colors group-hover:text-cyan-300 ${i==="light"?"text-slate-800":"text-white"}`,children:r.title}),d.jsx("span",{className:"text-[10px] font-mono text-zinc-550 block mt-1",children:r.company})]}),d.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-[9px] font-mono border font-medium uppercase ${r.badgeColor==="emerald"?"bg-emerald-500/10 text-emerald-400 border-emerald-500/30":r.badgeColor==="indigo"?"bg-indigo-500/10 text-indigo-400 border-indigo-500/30":r.badgeColor==="pink"?"bg-pink-500/10 text-pink-400 border-pink-500/30":"bg-amber-500/10 text-amber-400 border-amber-500/30"}`,children:r.company})]}),d.jsx("ul",{className:"space-y-3 mb-6 text-zinc-400",children:r.achievements.map((m,g)=>d.jsxs("li",{className:"flex items-start text-[11px] leading-relaxed font-sans text-zinc-400 select-text",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400/80 mt-1.5 mr-2.5 shrink-0"}),d.jsx("span",{children:m})]},g))}),d.jsx("div",{className:"flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60 select-none",children:r.technologies.map(m=>d.jsx("span",{className:"px-2 py-0.5 rounded-md text-[9px] font-mono bg-zinc-950/80 text-zinc-400 border border-zinc-900",children:m},m))})]})})]})}function K3({isWarping:r,theme:t,soundOn:i,triggerSound:s,onLaunchOS:l,onOpenWindowDirectly:c,articles:h=[],onOpenArticleDirectly:m}){const g=Oe.useRef(null),[p,y]=Oe.useState(!1),[_,x]=Oe.useState("All"),[M,A]=Oe.useState(0),[U,S]=Oe.useState(""),[b,w]=Oe.useState(""),[z,D]=Oe.useState(""),[G,O]=Oe.useState(""),[F,T]=Oe.useState({}),[I,W]=Oe.useState(!1),[j,Z]=Oe.useState(!1),me=Oe.useRef(null),ve=Oe.useRef(null);Oe.useEffect(()=>{let k=!1;const _e=()=>{k||(window.requestAnimationFrame(()=>{const we=window.scrollY||document.documentElement.scrollTop;y(we>500);const J=me.current;if(J){const Te=J.getBoundingClientRect(),Ne=window.innerHeight,We=Te.top,at=Te.height,tt=Ne*.8,mt=Ne*.2,st=at+tt-mt,ct=tt-We,Rt=Math.min(Math.max(ct/st,0),1);ve.current&&(ve.current.style.transform=`scaleY(${Rt})`)}k=!1}),k=!0)};return window.addEventListener("scroll",_e,{passive:!0}),setTimeout(_e,100),()=>{window.removeEventListener("scroll",_e)}},[]);const q=()=>{window.scrollTo({top:0,behavior:"smooth"}),s(1e3,.05)},P=(k,_e)=>{k.preventDefault();const we=document.getElementById(_e);if(we){const J=we.getBoundingClientRect(),Te=window.scrollY||document.documentElement.scrollTop,Ne=J.top+Te-64;window.scrollTo({top:Ne,behavior:"smooth"})}};Oe.useEffect(()=>{const k=setInterval(()=>{A(_e=>(_e+1)%Se.length)},8e3);return()=>clearInterval(k)},[]);const ne=(()=>{switch(t){case"cyberpunk":return{textPrimary:"text-[#00ffcc]",textSecondary:"text-pink-400",borderAccent:"border-pink-500/20 hover:border-pink-500/50",btnPrimary:"bg-pink-600 hover:bg-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)] border border-pink-400/50",btnSecondary:"border-pink-500/30 text-pink-300 hover:bg-pink-550/10 bg-black/60",statCardGlow:"hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]",skillBar:"from-pink-500 to-[#00ffcc]",activeTabBtn:"bg-pink-600 text-white border-pink-500",tabBtn:"text-pink-400 border-pink-500/20 hover:border-pink-500/40 bg-zinc-950/40",badgeStyle:"bg-pink-500/10 border border-pink-500/20 text-pink-300",gradientBg:"from-pink-500/5 via-purple-500/2 to-transparent"};case"ai":return{textPrimary:"text-purple-300",textSecondary:"text-cyan-400",borderAccent:"border-purple-500/20 hover:border-cyan-400/40",btnPrimary:"bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] border border-purple-400/40",btnSecondary:"border-purple-500/30 text-cyan-200 hover:bg-purple-950/40 bg-black/60",statCardGlow:"hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]",skillBar:"from-purple-500 to-cyan-400",activeTabBtn:"bg-purple-600 text-white border-purple-500",tabBtn:"text-purple-300 border-purple-500/20 hover:border-purple-500/40 bg-zinc-950/40",badgeStyle:"bg-purple-500/10 border border-purple-500/20 text-purple-300",gradientBg:"from-purple-500/5 via-indigo-500/2 to-transparent"};case"terminal":return{textPrimary:"text-[#33ff33]",textSecondary:"text-[#16a34a]",borderAccent:"border-[#33ff33]/20 hover:border-[#33ff33]/50",btnPrimary:"bg-[#33ff33] text-black hover:bg-[#33ff33]/85 shadow-[0_0_15px_rgba(51,255,51,0.3)] border border-[#33ff33]/50",btnSecondary:"border-[#33ff33]/30 text-[#33ff33] hover:bg-[#33ff33]/10 bg-black/60",statCardGlow:"hover:border-[#33ff33]/50 hover:shadow-[0_0_25px_rgba(51,255,51,0.2)]",skillBar:"from-[#16a34a] to-[#33ff33]",activeTabBtn:"bg-zinc-900 text-[#33ff33] border-[#33ff33]",tabBtn:"text-[#33ff33]/80 border-[#33ff33]/20 hover:border-[#33ff33]/40 bg-black/40",badgeStyle:"bg-emerald-950/20 border border-[#33ff33]/20 text-[#33ff33]",gradientBg:"from-[#33ff33]/3 to-transparent"};case"light":return{textPrimary:"text-indigo-600",textSecondary:"text-sky-600",borderAccent:"border-slate-300 hover:border-indigo-400",btnPrimary:"bg-slate-900 hover:bg-slate-800 text-white shadow-md",btnSecondary:"border-slate-300 text-slate-700 hover:bg-slate-100 bg-white",statCardGlow:"hover:border-indigo-400 hover:shadow-lg",skillBar:"from-indigo-500 to-sky-500",activeTabBtn:"bg-indigo-650 text-white border-indigo-650",tabBtn:"text-slate-600 border-slate-200 hover:border-slate-350 bg-slate-50",badgeStyle:"bg-indigo-50 border border-indigo-100 text-indigo-600",gradientBg:"from-indigo-500/3 via-purple-500/1 to-transparent"};default:return{textPrimary:"text-sky-400",textSecondary:"text-indigo-400",borderAccent:"border-zinc-800/80 hover:border-[#00ffcc]/30",btnPrimary:"bg-indigo-650 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-950/50 border border-indigo-400/40",btnSecondary:"border-zinc-800 text-zinc-300 hover:bg-zinc-900/60 bg-black/60",statCardGlow:"hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.08)]",skillBar:"from-indigo-500 to-sky-400",activeTabBtn:"bg-indigo-650 text-white border-indigo-500",tabBtn:"text-zinc-400 border-zinc-800 hover:border-zinc-700 bg-zinc-950/40",badgeStyle:"bg-indigo-500/10 border border-indigo-500/20 text-indigo-300",gradientBg:"from-indigo-500/5 via-purple-500/2 to-transparent"}}})(),Se=[{text:"Farhan's expertise in fine-tuning BERT and RoBERTa models for clinical emotional text classification was pivotal to our diagnostics program. His depth of knowledge in linguistic anomalies is world-class.",author:"Dr. Sarah Jenkins",role:"Lead Clinical NLP Researcher, Cognitive Diagnostics Lab",initials:"SJ"},{text:"The Ink Home's WebGL carousel design and custom caching proxy were executed brilliantly. Farhan consistently delivers high-performance SaaS components while respecting peak engineering aesthetic rules.",author:"Marcus Sterling",role:"Product Director, Synthetix Solutions",initials:"MS"},{text:"An absolute powerhouse developer. Farhan balances deep statistical NLP modeling with pixel-perfect responsive layouts inspired by Linear. TypeRush is a masterclass in Web Audio synchronization.",author:"Linus O.",role:"Senior Open Source Systems Architect",initials:"LO"}],ae=[{title:"Deep Learning Specialization",issuer:"deeplearning.ai / Coursera",date:"2024",skills:["CNNs","RNNs/LSTMs","Transformer Architecture","Attention Mechanisms"]},{title:"Google Cloud Associate Engineer",issuer:"Google Cloud",date:"2025",skills:["GCP Compute Engines","GKE Containers","IAM Security","Cloud SQL Monitoring"]},{title:"Natural Language Processing Professional",issuer:"Hugging Face / Stanford Online",date:"2024",skills:["Tokenization Pipelines","Model Fine-tuning","ONNX Optimization","Quantization"]}],N=nn.skills.filter(k=>_==="All"||_==="AI/ML"&&(k.category==="AI/ML"||k.category==="Research & Science")||_==="Frontend"&&k.category==="Frontend"||_==="Backend"&&k.category==="Backend"&&k.name!=="PostgreSQL"&&k.name!=="Redis Caching"||_==="Database"&&(k.name==="PostgreSQL"||k.name==="Redis Caching")||_==="DevOps"&&k.category==="Systems & Devops"),X=k=>{k.preventDefault(),s(950,.04);const _e={};if(U.trim()||(_e.name="Name is required"),b.trim()?/\S+@\S+\.\S+/.test(b)||(_e.email="Please provide a valid email"):_e.email="Email is required",z.trim()||(_e.subject="Subject is required"),G.trim()||(_e.message="Message details cannot be empty"),Object.keys(_e).length>0){T(_e);return}T({}),Z(!0);const we=Ko();fetch(`${we}/api/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:U,email:b,subject:z,message:G})}).then(async J=>{const Te=await J.json();if(!J.ok)throw new Error(Te.error||"Failed to transmit message.");Te.analysis&&console.log("[Transmission Diagnostics Analysed]:",Te.analysis),Z(!1),W(!0),s(1050,.12),S(""),w(""),D(""),O("")}).catch(J=>{console.warn("Real backend message transmission failed, reverting to local fallback:",J),setTimeout(()=>{Z(!1),W(!0),s(1050,.12),S(""),w(""),D(""),O("")},1200)})};return d.jsxs("div",{ref:g,className:"relative min-h-screen flex flex-col w-full select-text bg-transparent",children:[d.jsx(q3,{isWarping:r,theme:t}),d.jsx("div",{className:`pointer-events-none fixed inset-0 z-0 bg-gradient-to-br ${ne.gradientBg} opacity-80`}),d.jsxs("header",{className:`sticky top-0 z-[100] h-16 px-6 md:px-12 flex items-center justify-between border-b ${t==="light"?"border-slate-200/80 bg-white/70":"border-zinc-900/60 bg-black/45"} backdrop-blur-md transition-all`,children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.6)]"}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:`text-xs font-black tracking-widest uppercase font-sans ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"FARHAN KABIR"}),d.jsx("span",{className:"text-[8.5px] font-mono text-zinc-550 uppercase tracking-widest",children:"COGNITIVE SYSTEMS ARCHITECT"})]})]}),d.jsxs("nav",{className:"hidden lg:flex items-center gap-5 text-[10.5px] font-mono tracking-wider font-semibold text-zinc-400",children:[d.jsx("a",{href:"#about",onClick:k=>{s(900,.02),P(k,"about")},className:"hover:text-white transition-colors",children:"ABOUT"}),d.jsx("a",{href:"#skills",onClick:k=>{s(900,.02),P(k,"skills")},className:"hover:text-white transition-colors",children:"STATIONS"}),d.jsx("a",{href:"#timeline",onClick:k=>{s(900,.02),P(k,"timeline")},className:"hover:text-white transition-colors",children:"CHRONOLOGY"}),d.jsx("a",{href:"#prof-timeline",onClick:k=>{s(900,.02),P(k,"prof-timeline")},className:"hover:text-white transition-colors",children:"PROF. TIMELINE"}),d.jsx("a",{href:"#projects",onClick:k=>{s(900,.02),P(k,"projects")},className:"hover:text-white transition-colors",children:"INNOVATIONS"}),d.jsx("a",{href:"#certifications",onClick:k=>{s(900,.02),P(k,"certifications")},className:"hover:text-white transition-colors",children:"CERTIFICATES"}),d.jsx("a",{href:"#contact",onClick:k=>{s(900,.02),P(k,"contact")},className:"hover:text-white transition-colors",children:"TRANSMIT"})]}),d.jsx("div",{className:"flex items-center gap-3",children:d.jsx("button",{onClick:l,disabled:r,className:`cursor-pointer text-[10px] font-mono font-extrabold uppercase px-4 py-2 rounded-lg transition-all active:scale-95 duration-150 ${ne.btnPrimary}`,children:r?"Warp Core Charging...":"Launch OS"})})]}),d.jsxs("section",{className:"relative min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-6 md:px-12 py-16 text-center select-none z-10",children:[d.jsxs("div",{className:"relative mb-8 flex items-center justify-center animate-fade-in",children:[d.jsx("div",{className:"absolute w-36 h-36 md:w-44 md:h-44 rounded-full border border-dashed border-sky-500/20 animate-spin-slow pointer-events-none"}),d.jsx("div",{className:"absolute w-40 h-40 md:w-48 md:h-48 rounded-full border border-indigo-500/10 animate-spin-reverse pointer-events-none"}),d.jsx("div",{className:"absolute -inset-4 bg-indigo-500/5 rounded-full filter blur-2xl animate-pulse pointer-events-none"}),d.jsxs("div",{className:"relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-zinc-950/80 border-2 border-indigo-500/35 overflow-hidden group shadow-2xl transition-all duration-300 hover:scale-105 hover:border-[#00ffcc]",children:[d.jsx("img",{src:Y3,alt:"Farhan Kabir portrait",className:"w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500"}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"})]})]}),d.jsxs("div",{className:"max-w-3xl space-y-4",children:[d.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/20 text-[9px] font-mono uppercase tracking-widest text-indigo-300",children:[d.jsx(b1,{className:"w-3.5 h-3.5 text-indigo-400 animate-spin-slow"}),d.jsx("span",{children:"CLINICAL NLP & SAAS PLATFORMS"})]}),d.jsxs("h1",{className:"text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none uppercase select-text",children:[d.jsx("span",{className:t==="light"?"text-slate-800":"text-white",children:"I am "}),d.jsx("span",{className:`bg-clip-text text-transparent bg-gradient-to-r ${t==="light"?"from-indigo-650 to-sky-655":"from-indigo-400 via-sky-400 to-[#00ffcc]"}`,children:nn.name})]}),d.jsx("h2",{className:"text-base sm:text-xl font-bold font-mono tracking-wider text-zinc-400 select-text",children:nn.title}),d.jsxs("p",{className:"text-xs sm:text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed select-text font-normal",children:[nn.tagline," Fusing low-latency model evaluation pipelines with Linear-grade web experiences."]})]}),d.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 w-full max-w-md",children:[d.jsx("button",{onClick:l,className:`w-full sm:w-auto px-6 py-3.5 rounded-xl text-[10.5px] font-mono font-bold tracking-wider uppercase cursor-pointer active:scale-95 duration-100 ${ne.btnPrimary}`,children:"Activate Cosmic OS"}),d.jsxs("button",{onClick:()=>c("resume"),className:`w-full sm:w-auto px-6 py-3.5 rounded-xl text-[10.5px] font-mono font-bold tracking-wider uppercase cursor-pointer active:scale-95 duration-100 flex items-center justify-center gap-2 border ${ne.btnSecondary}`,children:[d.jsx(Zh,{className:"w-4 h-4"}),d.jsx("span",{children:"Get Resume (CV)"})]})]}),d.jsxs("div",{className:"flex items-center justify-center gap-3 mt-8 text-[9px] font-mono",children:[d.jsxs("button",{onClick:()=>c("brief"),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/70 hover:bg-rose-500/10 hover:border-rose-500/30 text-rose-300 hover:text-rose-200 transition-all cursor-pointer shadow-xs active:scale-95",children:[d.jsx(mv,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"MISSION BRIEF (CONTACT)"})]}),d.jsx("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"GitHub",children:d.jsx(mc,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.linkedin.com/in/farhankabir133/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"LinkedIn",children:d.jsx(gf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://medium.com/@farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"Medium",children:d.jsx(eh,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://x.com/fkh_236",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"X (Twitter)",children:d.jsx($f,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.instagram.com/_farhan_kabir/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"Instagram",children:d.jsx(mf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://gravatar.com/fk133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer",title:"Gravatar",children:d.jsx(xf,{className:"w-3.5 h-3.5"})})]}),d.jsxs("div",{className:"absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-pulse",children:[d.jsx("span",{className:"text-[9px] font-mono text-zinc-600 tracking-widest uppercase",children:"SCROLL FOR DIAGNOSTICS"}),d.jsx("div",{className:"w-px h-6 bg-zinc-800"})]})]}),d.jsxs("section",{id:"about",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-indigo-500 shadow-[0_0_8px_#6366f1]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"01 // BIOGRAPHY MODULE"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"KERNEL SPECS STABLE"})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[d.jsxs("div",{className:"lg:col-span-7 space-y-6 text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed",children:[d.jsxs("div",{children:[d.jsx("span",{className:`block font-bold text-[10px] font-mono uppercase tracking-wide mb-1 ${ne.textPrimary}`,children:"System Bio:"}),d.jsx("p",{className:"select-text",children:nn.about})]}),d.jsxs("div",{children:[d.jsx("span",{className:`block font-bold text-[10px] font-mono uppercase tracking-wide mb-1 ${ne.textPrimary}`,children:"Core Mission Directive:"}),d.jsxs("p",{className:"select-text italic",children:['"',nn.focus,'"']})]}),d.jsxs("div",{children:[d.jsx("span",{className:`block font-bold text-[10px] font-mono uppercase tracking-wide mb-1 ${ne.textPrimary}`,children:"Active Research Focus:"}),d.jsxs("ul",{className:"list-disc pl-4 space-y-2 mt-1 select-text",children:[d.jsx("li",{children:"Evaluating token probability sequences to block prompt injection triggers before inference."}),d.jsx("li",{children:"Fusing Wav2Vec audio metrics with BERT semantic layers to capture speech emotional variance."}),d.jsx("li",{children:"Conducting validation diagnostics for psychiatric speech anomalies."})]})]})]}),d.jsx("div",{className:"lg:col-span-5 grid grid-cols-2 gap-4",children:[{label:"EXPERIENCE",value:"4+ Years",desc:"AI & Full-Stack Architectures"},{label:"NLP PAPERS",value:"4 Pubs",desc:"IEEE Journals & Conference Index"},{label:"DEPLOYED SAAS",value:"12+ Apps",desc:"High-performance codebases"},{label:"CERTIFICATES",value:"5+ Credentials",desc:"Deep Learning & GCP"}].map((k,_e)=>d.jsxs("div",{onClick:()=>s(900,.02),className:`bg-zinc-950/45 border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer backdrop-blur-md ${ne.statCardGlow}`,children:[d.jsx("span",{className:"text-[7.5px] font-mono text-zinc-500 uppercase tracking-widest font-bold",children:k.label}),d.jsxs("div",{className:"mt-3",children:[d.jsx("span",{className:`text-xl sm:text-2xl font-black block tracking-tight ${t==="light"?"text-slate-800":"text-white"}`,children:k.value}),d.jsx("span",{className:"text-[9px] text-zinc-550 block mt-1 font-sans font-normal",children:k.desc})]})]},_e))})]})]}),d.jsxs("section",{id:"skills",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-sky-400 shadow-[0_0_8px_#38bdf8]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"02 // SKILLOBSERVATION OBSERVATION"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"MATRIX FILTERS FULLY LOADED"})]}),d.jsx("div",{className:"flex flex-wrap items-center gap-1.5 font-mono text-[9.5px]",children:["All","AI/ML","Frontend","Backend","Database","DevOps"].map(k=>d.jsx("button",{onClick:()=>{x(k),s(800,.03)},className:`px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-bold ${_===k?ne.activeTabBtn:ne.tabBtn}`,children:k==="DevOps"?"DEVOPS & CLOUD":k.toUpperCase()},k))}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:N.map(k=>d.jsxs("div",{className:"bg-zinc-950/45 border border-zinc-900/80 p-4.5 rounded-2xl hover:border-zinc-800 transition-all font-mono",children:[d.jsxs("div",{className:"flex justify-between items-center text-[10px] mb-2.5",children:[d.jsx("span",{className:`font-bold ${t==="light"?"text-slate-700":"text-slate-200"}`,children:k.name}),d.jsxs("span",{className:"text-zinc-550 font-semibold",children:[k.weight*20,"%"]})]}),d.jsx("div",{className:"w-full h-1 bg-zinc-950 rounded-full overflow-hidden",children:d.jsx("div",{className:`h-full bg-gradient-to-r ${ne.skillBar} rounded-full`,style:{width:`${k.weight*20}%`}})})]},k.name))})]}),d.jsxs("section",{id:"timeline",className:"relative px-6 md:px-12 py-24 max-w-4xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-emerald-500 shadow-[0_0_8px_#10b981]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"03 // EXPERIENCE CHRONOLOGY"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"DATA VALIDATED FOR SECURE HISTORIES"})]}),d.jsx("div",{className:"relative border-l border-zinc-900/80 ml-3 md:ml-6 space-y-12",children:nn.timeline.map((k,_e)=>d.jsxs("div",{className:"relative pl-8 sm:pl-12 group select-text",children:[d.jsx("div",{className:"absolute left-[-5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-950 border-2 border-indigo-500 group-hover:border-[#00ffcc] shadow-[0_0_8px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_8px_rgba(0,255,204,0.8)] transition-all duration-300"}),d.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1",children:[d.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded-md font-extrabold ${ne.badgeStyle}`,children:k.year}),d.jsx("span",{className:"text-zinc-550 font-mono text-[9.5px]",children:k.company})]}),d.jsx("h3",{className:`text-sm md:text-base font-extrabold tracking-tight ${t==="light"?"text-slate-800":"text-white"}`,children:k.title}),d.jsxs("p",{className:"text-[11px] sm:text-xs text-zinc-500 font-sans mt-2 max-w-2xl leading-relaxed",children:[k.role," ",k.description]}),d.jsx("ul",{className:"mt-3.5 space-y-2 max-w-2xl font-sans text-[11px] text-zinc-400",children:k.achievements.map((we,J)=>d.jsxs("li",{className:"flex items-start gap-2 leading-relaxed",children:[d.jsx(Wc,{className:`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${t==="light"?"text-indigo-600":"text-[#00ffcc]"}`}),d.jsx("span",{children:we})]},J))}),d.jsx("div",{className:"flex flex-wrap gap-1 mt-4",children:k.technologies.map(we=>d.jsx("span",{className:"text-[8.5px] font-mono px-1.5 py-0.5 rounded-md bg-zinc-950 border border-zinc-900/60 text-zinc-500",children:we},we))})]},_e))})]}),d.jsxs("section",{id:"prof-timeline",className:"relative py-24 px-6 md:px-12 max-w-6xl w-full mx-auto space-y-12 z-10 scroll-mt-16",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-cyan-400 shadow-[0_0_8px_#22d3ee]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"03.5 // PROFESSIONAL TIMELINE"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"VERIFIABLE WORK EXPERIENCES"})]}),d.jsxs("div",{ref:me,className:"relative",children:[d.jsx("div",{className:"absolute left-[21px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/80 via-cyan-500/30 to-transparent -translate-x-1/2 pointer-events-none z-0"}),d.jsx("div",{ref:ve,className:"absolute left-[21px] md:left-1/2 top-0 bottom-24 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-600 -translate-x-1/2 origin-top pointer-events-none z-10",style:{transform:"scaleY(0)",transformOrigin:"top"}}),d.jsx("div",{className:"space-y-16 relative z-10",children:nn.professionalTimeline.map((k,_e)=>d.jsx(Z3,{item:k,idx:_e,theme:t},_e))})]})]}),d.jsxs("section",{id:"projects",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-purple-500 shadow-[0_0_8px_#a855f7]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"04 // PORTFOLIO INNOVATIONS"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"SANDBOX RUNTIMES SYNCHRONIZED"})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:nn.projects.map(k=>d.jsxs("div",{className:"bg-[#0b0c14]/55 border border-zinc-900/80 p-6 rounded-3xl flex flex-col justify-between hover:border-indigo-500/30 hover:shadow-[0_10px_35px_rgba(99,102,241,0.05)] transition-all duration-300 group select-text",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-4 font-mono",children:[d.jsx("span",{className:`text-[8.5px] font-bold px-2 py-0.5 rounded-full border tracking-wide uppercase ${ne.badgeStyle}`,children:k.category}),d.jsx("span",{className:"text-[9px] text-zinc-550 font-semibold",children:k.timeline})]}),d.jsx("h3",{className:`text-sm md:text-base font-extrabold group-hover:text-indigo-400 transition-colors leading-tight ${t==="light"?"text-slate-800":"text-white"}`,children:k.title}),d.jsx("p",{className:"text-[11px] sm:text-xs text-zinc-400 font-sans mt-3.5 leading-relaxed",children:k.description}),d.jsx("div",{className:"grid grid-cols-3 gap-2 my-4 bg-black/40 border border-zinc-900/80 p-2.5 rounded-xl text-center font-mono",children:k.metrics.map(_e=>d.jsxs("div",{className:"p-1",children:[d.jsx("span",{className:`text-[9.5px] font-bold block ${t==="light"?"text-indigo-650":"text-[#00ffcc]"}`,children:_e.value}),d.jsx("span",{className:"text-[7.2px] text-zinc-500 block uppercase tracking-tight mt-0.5 line-clamp-1",children:_e.label})]},_e.label))})]}),d.jsxs("div",{className:"space-y-4 pt-4 border-t border-zinc-900/60 select-none",children:[d.jsx("div",{className:"flex flex-wrap gap-1",children:k.techStack.map(_e=>d.jsx("span",{className:"text-[8.5px] font-mono px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-900/40 text-zinc-500",children:_e},_e))}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{onClick:()=>{c("projects")},className:"flex-1 text-center py-2.5 rounded-xl border border-zinc-800/80 bg-zinc-950 text-[10px] font-mono text-zinc-350 hover:text-white hover:border-zinc-750 transition-all cursor-pointer font-bold active:scale-98",children:"DEPLOY SIMULATOR SCREEN →"}),d.jsx("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2.5 rounded-xl border border-zinc-850 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center",title:"View Source on GitHub",children:d.jsx(mc,{className:"w-3.5 h-3.5"})})]})]})]},k.id))})]}),d.jsxs("section",{id:"writings",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-amber-500 shadow-[0_0_8px_#f59e0b]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"04.5 // MEDIUM WRITING SYNDICATE"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"DYNAMIC RSS CHANNELS ACTIVE"})]}),h.length===0?d.jsx("div",{className:"text-center py-10 bg-zinc-950/20 border border-zinc-900/80 rounded-3xl p-6 font-mono text-zinc-550 text-xs",children:"⏳ Synchronizing narrative telemetry vectors..."}):d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.slice(0,6).map((k,_e)=>{const we=_e===0;return d.jsxs("div",{className:`bg-[#0b0c14]/55 border border-zinc-900/80 p-6 rounded-3xl flex flex-col justify-between hover:border-amber-500/30 hover:shadow-[0_10px_35px_rgba(245,158,11,0.04)] transition-all duration-300 group select-text ${we?"md:col-span-2 lg:col-span-1":""}`,children:[d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex items-center justify-between font-mono text-[9px]",children:[d.jsx("span",{className:`text-[8.5px] font-bold px-2 py-0.5 rounded-full border tracking-wide uppercase ${t==="light"?"bg-amber-100 text-amber-800 border-amber-250":"bg-amber-500/10 text-amber-300 border-amber-500/20"}`,children:k.category}),d.jsx("span",{className:"text-zinc-550 font-semibold",children:k.date})]}),k.imageUrl?d.jsxs("div",{className:"w-full h-36 rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 relative",children:[d.jsx("img",{src:k.imageUrl,alt:k.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0b0c14]/90 via-transparent to-transparent"})]}):d.jsx("div",{className:"w-full h-1 bg-gradient-to-r from-amber-500/10 to-transparent rounded"}),d.jsx("h3",{className:`text-xs sm:text-sm font-extrabold group-hover:text-amber-400 transition-colors leading-snug select-text ${t==="light"?"text-slate-800":"text-white"}`,children:k.title}),d.jsx("p",{className:"text-[11px] leading-relaxed text-zinc-400 font-sans select-text",children:k.excerpt})]}),d.jsxs("div",{className:"space-y-3 pt-4 border-t border-zinc-900/60 mt-4 select-none",children:[d.jsxs("div",{className:"flex items-center gap-2 text-[8.5px] font-mono text-zinc-500",children:[d.jsx(pv,{className:"w-3 h-3 text-amber-500"}),d.jsx("span",{children:k.readTime})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{onClick:()=>{m?m(k):c("writing")},className:"flex-1 text-center py-2.5 rounded-xl border border-zinc-800/80 bg-zinc-950 text-[9.5px] font-mono text-zinc-350 hover:text-white hover:border-zinc-750 transition-all cursor-pointer font-bold active:scale-98",children:"WARP & READ IN OS →"}),k.link&&d.jsx("a",{href:k.link,target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2.5 rounded-xl border border-zinc-850 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center",title:"Read on Medium",children:d.jsx(ky,{className:"w-3.5 h-3.5"})})]})]})]},k.id)})})]}),d.jsxs("section",{id:"certifications",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-amber-500 shadow-[0_0_8px_#f59e0b]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"05 // CREDENTIAL VERIFICATION"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"ALL BADGES CRYPTOGRAPHICALLY SECURED"})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:ae.map((k,_e)=>d.jsxs("div",{className:"bg-zinc-950/45 border border-zinc-900 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-800 transition-all select-text",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between text-zinc-500 font-mono text-[9px] mb-3",children:[d.jsx("span",{children:k.issuer}),d.jsx("span",{className:"font-bold",children:k.date})]}),d.jsxs("h3",{className:`text-xs sm:text-sm font-extrabold leading-snug flex items-start gap-2 ${t==="light"?"text-slate-850":"text-slate-100"}`,children:[d.jsx(hv,{className:`w-4 h-4 mt-0.5 flex-shrink-0 ${t==="light"?"text-indigo-650":"text-amber-400"}`}),d.jsx("span",{children:k.title})]})]}),d.jsx("div",{className:"flex flex-wrap gap-1 mt-5 pt-4 border-t border-zinc-900/50",children:k.skills.map(we=>d.jsx("span",{className:"text-[7.8px] font-mono px-1.5 py-0.5 rounded-md bg-black/40 border border-zinc-900 text-zinc-500",children:we},we))})]},_e))})]}),d.jsxs("section",{className:"relative px-6 md:px-12 py-24 max-w-4xl w-full mx-auto space-y-12 z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-rose-500 shadow-[0_0_8px_#f43f5e]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"06 // CLINICAL RECOMMENDATIONS"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"VERIFIABLE REFERRALS ACTIVE"})]}),d.jsxs("div",{className:"bg-[#0b0c14]/55 border border-zinc-900 p-8 sm:p-12 rounded-3xl relative overflow-hidden select-text shadow-xl",children:[d.jsx(f1,{className:`absolute top-6 left-6 w-12 h-12 opacity-5 pointer-events-none ${t==="light"?"text-indigo-600":"text-indigo-500"}`}),d.jsxs("div",{className:"relative min-h-[140px] flex flex-col justify-between",children:[d.jsxs("p",{className:`text-xs sm:text-sm italic leading-relaxed ${t==="light"?"text-slate-700":"text-slate-300"}`,children:['"',Se[M].text,'"']}),d.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:`w-9 h-9 rounded-full font-mono font-bold text-xs flex items-center justify-center border ${ne.badgeStyle}`,children:Se[M].initials}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:`text-xs font-bold ${t==="light"?"text-slate-800":"text-white"}`,children:Se[M].author}),d.jsx("span",{className:"text-[9px] text-zinc-500 font-mono mt-0.5",children:Se[M].role})]})]}),d.jsxs("div",{className:"flex items-center gap-1.5 select-none",children:[d.jsx("button",{onClick:()=>{A(k=>(k-1+Se.length)%Se.length),s(800,.02)},className:"p-1.5 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/65 hover:bg-zinc-900/60 text-zinc-400 hover:text-white cursor-pointer transition-colors",children:d.jsx(Cy,{className:"w-4 h-4"})}),d.jsx("button",{onClick:()=>{A(k=>(k+1)%Se.length),s(800,.02)},className:"p-1.5 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/65 hover:bg-zinc-900/60 text-zinc-400 hover:text-white cursor-pointer transition-colors",children:d.jsx(Ny,{className:"w-4 h-4"})})]})]})]})]})]}),d.jsxs("section",{id:"contact",className:"relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10 select-text",children:[d.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono select-none",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded bg-indigo-500 shadow-[0_0_8px_#6366f1]"}),d.jsx("h2",{className:`text-xs font-black tracking-widest uppercase ${t==="light"?"text-slate-800":"text-slate-100"}`,children:"07 // SECURE COMMUNICATION CHANNEL"}),d.jsx("span",{className:"text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline",children:"SSL LINK ENCRYPTED"})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[d.jsxs("div",{className:"lg:col-span-5 space-y-6 font-mono text-[10.5px]",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] text-zinc-500 uppercase tracking-widest block font-bold mb-1.5",children:"TRANSMISSION DIRECTORIES"}),d.jsx("p",{className:"text-xs font-sans text-zinc-400 leading-relaxed",children:"Submit project briefs, research queries, or collaborative inquiries. Your transmission will be mapped directly into our live sandbox channels."})]}),d.jsxs("div",{className:"space-y-3.5 border-t border-zinc-900/80 pt-6",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-indigo-400",children:d.jsx(Jy,{className:"w-4 h-4"})}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[7.5px] text-zinc-500 block",children:"ENVELOPE ADDRESS"}),d.jsx("a",{href:"mailto:farhankabir133@gmail.com",onClick:()=>s(900,.02),className:`text-[11px] font-bold ${t==="light"?"text-slate-850":"text-slate-200"} hover:underline`,children:"farhankabir133@gmail.com"})]})]}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-sky-400",children:d.jsx(e1,{className:"w-4 h-4"})}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[7.5px] text-zinc-500 block",children:"COORDINATE MAPPING"}),d.jsx("span",{className:`text-[11px] font-bold ${t==="light"?"text-slate-800":"text-slate-250"}`,children:"Rajshahi, Bangladesh (UTC+6)"})]})]})]}),d.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-6 border-t border-zinc-900/80 select-none",children:[d.jsxs("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(mc,{className:"w-4 h-4 text-indigo-400"}),d.jsx("span",{children:"GITHUB"})]}),d.jsxs("a",{href:"https://www.linkedin.com/in/farhankabir133/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(gf,{className:"w-4 h-4 text-sky-400"}),d.jsx("span",{children:"LINKEDIN"})]}),d.jsxs("a",{href:"https://medium.com/@farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(eh,{className:"w-4 h-4 text-emerald-400"}),d.jsx("span",{children:"MEDIUM"})]}),d.jsxs("a",{href:"https://x.com/fkh_236",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx($f,{className:"w-4 h-4 text-white"}),d.jsx("span",{children:"X / TWITTER"})]}),d.jsxs("a",{href:"https://www.instagram.com/_farhan_kabir/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(mf,{className:"w-4 h-4 text-pink-400"}),d.jsx("span",{children:"INSTAGRAM"})]}),d.jsxs("a",{href:"https://gravatar.com/fk133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold",children:[d.jsx(xf,{className:"w-4 h-4 text-amber-400"}),d.jsx("span",{children:"GRAVATAR"})]})]})]}),d.jsx("div",{className:"lg:col-span-7 bg-[#0b0c14]/55 border border-zinc-900/80 p-6 sm:p-8 rounded-3xl relative",children:I?d.jsxs("div",{className:"text-center py-10 space-y-4 animate-scale-up",children:[d.jsx("div",{className:"w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.15)]",children:d.jsx(Wc,{className:"w-6 h-6 animate-pulse"})}),d.jsxs("div",{className:"space-y-1.5 font-mono",children:[d.jsx("span",{className:"text-[10px] text-emerald-400 font-bold uppercase tracking-wider",children:"TRANSMISSION EN ROUTE"}),d.jsx("h3",{className:`text-base font-extrabold ${t==="light"?"text-slate-800":"text-white"}`,children:"Matrix Sync Completed!"}),d.jsx("p",{className:"text-[11px] text-zinc-550 max-w-sm mx-auto leading-relaxed font-sans font-normal",children:"Secure handshake verified. Farhan's certified virtual clone is compiling your message parameters now."})]}),d.jsx("button",{onClick:()=>{W(!1),s(800,.02)},className:"bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-bold text-zinc-400 hover:text-white px-5 py-2 rounded-lg cursor-pointer transition-colors active:scale-95",children:"Establish New Node"})]}):d.jsxs("form",{onSubmit:X,className:"space-y-4 font-mono text-[10px]",children:[d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"COGNITIVE NAME"}),d.jsx("input",{type:"text",value:U,onChange:k=>S(k.target.value),placeholder:"e.g. Jenkins S.",className:`w-full bg-black/60 border ${F.name?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden`}),F.name&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:F.name})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"TRANSMISSION EMAIL"}),d.jsx("input",{type:"email",value:b,onChange:k=>w(k.target.value),placeholder:"e.g. envelope@domain.com",className:`w-full bg-black/60 border ${F.email?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden`}),F.email&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:F.email})]})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"INQUIRY SUBJECT"}),d.jsx("input",{type:"text",value:z,onChange:k=>D(k.target.value),placeholder:"e.g. Clinical NLP Model Fine-Tuning",className:`w-full bg-black/60 border ${F.subject?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden`}),F.subject&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:F.subject})]}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("label",{className:"text-zinc-500 font-semibold block",children:"TRANSMISSION PAYLOAD (MESSAGE)"}),d.jsx("textarea",{rows:4,value:G,onChange:k=>O(k.target.value),placeholder:"Explain Objectives, Budgets, and Timelines...",className:`w-full bg-black/60 border ${F.message?"border-red-500/50 focus:border-red-500":"border-zinc-900/80 focus:border-indigo-500/60"} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden resize-none`}),F.message&&d.jsx("span",{className:"text-[9px] text-red-500 font-bold block mt-0.5",children:F.message})]}),d.jsx("button",{type:"submit",disabled:j,className:`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[10.5px] font-bold uppercase transition-all duration-150 active:scale-98 cursor-pointer ${ne.btnPrimary}`,children:j?d.jsxs(d.Fragment,{children:[d.jsx(gv,{className:"w-4 h-4 animate-spin"}),d.jsx("span",{children:"Transmitting packets..."})]}):d.jsxs(d.Fragment,{children:[d.jsx(xv,{className:"w-4 h-4"}),d.jsx("span",{children:"Transmit Message"})]})})]})})]})]}),d.jsx("footer",{className:`mt-auto border-t ${t==="light"?"border-slate-200/80 bg-slate-100/50":"border-zinc-900/60 bg-black/45"} backdrop-blur-md py-12 px-6 md:px-12 z-10 select-none`,children:d.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.5)]"}),d.jsxs("span",{className:`text-[10px] font-mono tracking-widest uppercase ${t==="light"?"text-slate-600":"text-zinc-450"}`,children:["© ",new Date().getFullYear()," FARHAN KABIR. ALL RIGHTS SECURED."]})]}),d.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-5 text-[9.5px] font-mono text-zinc-550 font-bold",children:[d.jsx("a",{href:"#about",onClick:k=>{s(800,.02),P(k,"about")},className:"hover:text-white transition-colors",children:"ABOUT"}),d.jsx("a",{href:"#skills",onClick:k=>{s(800,.02),P(k,"skills")},className:"hover:text-white transition-colors",children:"STATIONS"}),d.jsx("a",{href:"#timeline",onClick:k=>{s(800,.02),P(k,"timeline")},className:"hover:text-white transition-colors",children:"TIMELINE"}),d.jsx("a",{href:"#projects",onClick:k=>{s(800,.02),P(k,"projects")},className:"hover:text-white transition-colors",children:"INNOVATIONS"}),d.jsx("a",{href:"#contact",onClick:k=>{s(800,.02),P(k,"contact")},className:"hover:text-white transition-colors",children:"TRANSMIT"})]}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("a",{href:"https://github.com/farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"GitHub",children:d.jsx(mc,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.linkedin.com/in/farhankabir133/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"LinkedIn",children:d.jsx(gf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://medium.com/@farhankabir133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"Medium",children:d.jsx(eh,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://x.com/fkh_236",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"X (Twitter)",children:d.jsx($f,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://www.instagram.com/_farhan_kabir/",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"Instagram",children:d.jsx(mf,{className:"w-3.5 h-3.5"})}),d.jsx("a",{href:"https://gravatar.com/fk133",target:"_blank",rel:"noopener noreferrer",onClick:()=>s(900,.02),className:"p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors",title:"Gravatar",children:d.jsx(xf,{className:"w-3.5 h-3.5"})})]})]})}),p&&d.jsx("button",{onClick:q,className:`fixed bottom-6 right-6 z-[120] p-3 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 animate-scale-up cursor-pointer hover:-translate-y-1 ${t==="light"?"bg-white/80 border-slate-300 text-slate-700 hover:bg-slate-50":"bg-zinc-950/80 border-zinc-850 text-zinc-400 hover:text-white hover:border-[#00ffcc]/35"}`,title:"Back to Top",children:d.jsx(_y,{className:"w-4 h-4"})})]})}function Q3({theme:r,triggerSound:t}){const i=Oe.useRef(null),s=Oe.useRef(null),[l,c]=Oe.useState(!1),[h,m]=Oe.useState("#6366f1"),[g,p]=Oe.useState(4),[y,_]=Oe.useState(!1),[x,M]=Oe.useState("theme"),[A,U]=Oe.useState([]),[S,b]=Oe.useState([]),[w,z]=Oe.useState([]),[D,G]=Oe.useState({width:600,height:400}),T=x==="theme"?(()=>{switch(r){case"cyberpunk":return[{name:"Neon Pink",value:"#ff007f"},{name:"Matrix Green",value:"#39ff14"},{name:"Neon Blue",value:"#00ffff"},{name:"Cyber Purple",value:"#9d00ff"},{name:"Hot Orange",value:"#ff5e00"},{name:"Pure White",value:"#ffffff"}];case"terminal":return[{name:"Classic Green",value:"#33ff33"},{name:"Amber Glow",value:"#ffb000"},{name:"Terminal White",value:"#e5e5e5"},{name:"Phosphor Green",value:"#00ff66"},{name:"Dim Gray",value:"#7f7f7f"}];case"ai":return[{name:"Deep Cosmic",value:"#4f46e5"},{name:"Quantum Cyan",value:"#06b6d4"},{name:"Neural Violet",value:"#d946ef"},{name:"Supernova",value:"#f43f5e"},{name:"Logic White",value:"#fafafa"}];case"light":return[{name:"Royal Blue",value:"#2563eb"},{name:"Rose Red",value:"#dc2626"},{name:"Forest Green",value:"#16a34a"},{name:"Vibrant Orange",value:"#ea580c"},{name:"Slate Gray",value:"#475569"},{name:"Deep Charcoal",value:"#0f172a"}];default:return[{name:"Indigo Aura",value:"#818cf8"},{name:"Nebula Pink",value:"#f472b6"},{name:"Aurora Teal",value:"#2dd4bf"},{name:"Solar Yellow",value:"#fbbf24"},{name:"Coral Rose",value:"#fb7185"},{name:"Pure White",value:"#ffffff"}]}})():[{name:"Pure Black",value:"#000000"},{name:"Crimson Red",value:"#ef4444"},{name:"Cobalt Blue",value:"#3b82f6"},{name:"Emerald Green",value:"#22c55e"},{name:"Amber Yellow",value:"#eab308"},{name:"Pure White",value:"#ffffff"}];Oe.useEffect(()=>{m(T[0].value),_(!1)},[r,x]),Oe.useEffect(()=>{const ae=i.current;if(!ae)return;const N=new ResizeObserver(X=>{if(!X||X.length===0)return;const{width:k,height:_e}=X[0].contentRect,we=Math.floor(k||600),J=Math.floor(_e||400);G({width:we,height:J})});return N.observe(ae),()=>{N.disconnect()}},[]),Oe.useEffect(()=>{const ae=s.current;ae&&(ae.width=D.width,ae.height=D.height,I())},[D,A,w]);const I=()=>{const ae=s.current;if(!ae)return;const N=ae.getContext("2d");if(!N)return;N.clearRect(0,0,ae.width,ae.height),N.lineCap="round",N.lineJoin="round";const X=k=>{if(!(k.points.length<1))if(N.beginPath(),k.isEraser?N.globalCompositeOperation="destination-out":(N.globalCompositeOperation="source-over",N.strokeStyle=k.color),N.lineWidth=k.width,k.points.length===1){const _e=k.points[0];N.arc(_e.x,_e.y,k.width/2,0,2*Math.PI),N.fillStyle=k.isEraser?"rgba(0,0,0,1)":k.color,N.fill()}else{const _e=k.points[0];N.moveTo(_e.x,_e.y);for(let we=1;we<k.points.length;we++){const J=k.points[we];N.lineTo(J.x,J.y)}N.stroke()}};A.forEach(k=>{X(k)}),w.length>0&&X({points:w,color:h,width:g,isEraser:y}),N.globalCompositeOperation="source-over"},W=ae=>{const N=s.current;if(!N)return null;const X=N.getBoundingClientRect();let k=0,_e=0;if("touches"in ae){if(ae.touches.length===0)return null;k=ae.touches[0].clientX,_e=ae.touches[0].clientY}else k=ae.clientX,_e=ae.clientY;return{x:(k-X.left)/X.width*N.width,y:(_e-X.top)/X.height*N.height}},j=ae=>{ae.preventDefault();const N=W(ae);N&&(c(!0),z([N]),b([]),t&&t(700,.015))},Z=ae=>{if(!l)return;ae.preventDefault();const N=W(ae);N&&z(X=>[...X,N])},me=()=>{if(l){if(c(!1),w.length>0){const ae={points:w,color:h,width:g,isEraser:y};U(N=>[...N,ae])}z([]),t&&t(850,.02)}},ve=()=>{if(A.length===0)return;const ae=[...A],N=ae.pop();N&&(b(X=>[...X,N]),U(ae),t&&t(500,.03))},q=()=>{if(S.length===0)return;const ae=[...S],N=ae.pop();N&&(U(X=>[...X,N]),b(ae),t&&t(900,.03))},P=()=>{A.length!==0&&confirm("Clear the entire ideation sketch pad?")&&(U([]),b([]),z([]),t&&t(350,.07))},H=()=>{const ae=s.current;if(!ae)return;const N=document.createElement("canvas");N.width=ae.width,N.height=ae.height;const X=N.getContext("2d");if(!X)return;r==="light"?X.fillStyle="#f8fafc":r==="cyberpunk"?X.fillStyle="#010206":r==="terminal"?X.fillStyle="#050705":X.fillStyle="#090a12",X.fillRect(0,0,N.width,N.height),X.strokeStyle=r==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.03)",X.lineWidth=1;const k=30;for(let J=0;J<N.width;J+=k)X.beginPath(),X.moveTo(J,0),X.lineTo(J,N.height),X.stroke();for(let J=0;J<N.height;J+=k)X.beginPath(),X.moveTo(0,J),X.lineTo(N.width,J),X.stroke();X.drawImage(ae,0,0),X.font="10px monospace",X.fillStyle=r==="light"?"rgba(15, 23, 42, 0.4)":"rgba(255, 255, 255, 0.3)",X.textAlign="right",X.fillText("FARHAN KABIR CORE OS v2.4 // VISUAL IDEATION UNIT",N.width-20,N.height-20);const _e=N.toDataURL("image/png"),we=document.createElement("a");we.href=_e,we.download=`FarhanOS_Whiteboard_${Date.now()}.png`,document.body.appendChild(we),we.click(),document.body.removeChild(we),t&&t(1100,.08)},ne=r==="cyberpunk"?"border-[#ff007f]/40 text-pink-400 font-mono":r==="terminal"?"border-[#33ff33]/40 text-[#33ff33] font-mono":r==="ai"?"border-indigo-500/40 text-indigo-400 font-sans":r==="light"?"border-slate-300 text-slate-800 font-sans":"border-zinc-800 text-slate-200 font-sans",Se=ae=>{m(ae),_(!1),t&&t(900,.015)};return d.jsxs("div",{className:"flex flex-col h-full gap-3 select-none",children:[d.jsxs("div",{className:`p-2 rounded-lg border flex flex-wrap items-center justify-between gap-3 bg-black/35 backdrop-blur-md ${ne}`,children:[d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("button",{onClick:ve,disabled:A.length===0,className:`p-1.5 rounded transition-all duration-200 ${A.length===0?"opacity-30 cursor-not-allowed":"hover:bg-white/10 hover:scale-110 active:scale-90 text-zinc-350 hover:text-white"}`,title:"Undo stroke (Ctrl+Z)",children:d.jsx(A1,{className:"w-4 h-4"})}),d.jsx("button",{onClick:q,disabled:S.length===0,className:`p-1.5 rounded transition-all duration-200 ${S.length===0?"opacity-30 cursor-not-allowed":"hover:bg-white/10 hover:scale-110 active:scale-90 text-zinc-350 hover:text-white"}`,title:"Redo stroke (Ctrl+Y)",children:d.jsx(p1,{className:"w-4 h-4"})}),d.jsx("span",{className:"h-4 w-px bg-zinc-850 mx-1"}),d.jsxs("button",{onClick:()=>{_(!1),t&&t(800,.01)},className:`p-1.5 rounded transition-all duration-200 flex items-center gap-1 ${y?"hover:bg-white/10 hover:scale-105 active:scale-95 text-zinc-400 hover:text-zinc-200":"bg-indigo-600/30 font-bold border border-indigo-500/35 text-indigo-300"}`,title:"Paint Brush Mode",children:[d.jsx(ix,{className:"w-3.5 h-3.5"}),d.jsx("span",{className:"hidden sm:inline text-[9px] uppercase tracking-wider",children:"Paint"})]}),d.jsxs("button",{onClick:()=>{_(!0),t&&t(600,.01)},className:`p-1.5 rounded transition-all duration-200 flex items-center gap-1 ${y?"bg-indigo-600/30 font-bold border border-indigo-500/35 text-indigo-300":"hover:bg-white/10 hover:scale-105 active:scale-95 text-zinc-400 hover:text-zinc-200"}`,title:"Eraser tool",children:[d.jsx(Fy,{className:"w-3.5 h-3.5"}),d.jsx("span",{className:"hidden sm:inline text-[9px] uppercase tracking-wider",children:"Eraser"})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("div",{className:"flex items-center gap-1 bg-black/40 p-1 rounded-md border border-zinc-900/80 text-[9px] font-mono",children:[d.jsx("button",{onClick:()=>{M("theme"),t&&t(700,.012)},className:`px-1.5 py-0.5 rounded transition uppercase font-bold tracking-tight ${x==="theme"?"bg-indigo-600/30 text-indigo-300 border border-indigo-500/20":"text-zinc-500 hover:text-zinc-300"}`,title:"Switch to Theme-specific colors",children:"OS Aura"}),d.jsx("button",{onClick:()=>{M("classic"),t&&t(700,.012)},className:`px-1.5 py-0.5 rounded transition uppercase font-bold tracking-tight ${x==="classic"?"bg-indigo-600/30 text-indigo-300 border border-indigo-500/20":"text-zinc-500 hover:text-zinc-300"}`,title:"Switch to classic drawing colors (Black, Red, Blue, Green, etc.)",children:"Classic"})]}),d.jsxs("div",{className:"flex items-center gap-1 bg-black/40 px-2 py-1 rounded-md border border-zinc-900",children:[T.map(ae=>{const N=h===ae.value&&!y;return d.jsxs("button",{onClick:()=>Se(ae.value),className:"relative group w-4 h-4 rounded-full transition duration-300 border border-black/50",style:{backgroundColor:ae.value},title:`${ae.name}`,children:[N&&d.jsx("span",{className:"absolute inset-0 flex items-center justify-center scale-75 text-white filter drop-shadow",children:d.jsx(Wc,{className:"w-3.5 h-3.5 text-white stroke-[3.5px]",style:{mixBlendMode:"difference"}})}),d.jsx("span",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-1.5 py-0.5 text-[8px] bg-zinc-950 text-white rounded opacity-0 pointer-events-none group-hover:opacity-100 transition whitespace-nowrap z-50",children:ae.name})]},ae.value)}),d.jsx("span",{className:"h-3 w-px bg-zinc-800 mx-1"}),d.jsxs("div",{className:"relative group w-4 h-4 rounded-full overflow-hidden border border-zinc-700/50 flex items-center justify-center bg-gradient-to-tr from-rose-500 via-emerald-500 to-sky-500 shadow-sm",title:"Choose custom color spectrum",children:[d.jsx("input",{type:"color",value:h,onChange:ae=>Se(ae.target.value),className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer"}),d.jsx("span",{className:"text-[10px] font-black text-white pointer-events-none filter drop-shadow-sm",children:"+"}),d.jsx("span",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-1.5 py-0.5 text-[8px] bg-zinc-950 text-white rounded opacity-0 pointer-events-none group-hover:opacity-100 transition whitespace-nowrap z-50",children:"Custom Color"})]})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("div",{className:"flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-md border border-zinc-900",children:[d.jsxs("span",{className:"text-[9px] text-zinc-500 font-mono select-none uppercase tracking-tight hidden xs:inline",children:["Width: ",g,"px"]}),d.jsx("input",{type:"range",min:"1",max:"40",value:g,onChange:ae=>{const N=parseInt(ae.target.value,10);p(N),t&&t(750+N*3,.005)},className:"w-16 sm:w-20 md:w-24 accent-indigo-500 bg-zinc-800 h-1 rounded-lg appearance-none cursor-pointer",title:"Slide to adjust brush thickness"})]}),d.jsx("div",{className:"flex items-center gap-1",children:[2,4,8,16].map(ae=>d.jsx("button",{onClick:()=>{p(ae),t&&t(750,.01)},className:`w-5 h-5 rounded flex items-center justify-center transition border ${g===ae?"bg-white/10 border-indigo-500/50 text-indigo-400":"border-transparent hover:bg-white/5 text-zinc-400"}`,title:`Brush size ${ae}px`,children:d.jsx("span",{className:"relative flex items-center justify-center",children:d.jsx("span",{className:"rounded-full bg-current",style:{width:`${Math.max(2,ae/1.5)}px`,height:`${Math.max(2,ae/1.5)}px`}})})},ae))}),d.jsx("span",{className:"h-4 w-px bg-zinc-850"}),d.jsx("button",{onClick:P,className:"p-1.5 rounded transition-all duration-200 hover:bg-rose-500/20 hover:scale-110 active:scale-90 text-rose-400 hover:text-rose-300",title:"Clear canvas",children:d.jsx(cx,{className:"w-3.5 h-3.5"})}),d.jsx("button",{onClick:H,className:"p-1.5 rounded transition-all duration-200 hover:bg-emerald-500/20 hover:scale-110 active:scale-90 text-emerald-400 hover:text-emerald-300",title:"Download visual sketch (.png)",children:d.jsx(Zh,{className:"w-3.5 h-3.5"})})]})]}),d.jsxs("div",{ref:i,className:`whiteboard-canvas-container flex-1 min-h-[280px] max-h-[50vh] rounded-lg border-2 border-dashed flex relative overflow-hidden bg-black/45 shadow-inner transition-colors duration-350 cursor-crosshair ${r==="cyberpunk"?"border-pink-500/25 shadow-pink-500/5 bg-[#000]":r==="terminal"?"border-[#33ff33]/25 shadow-emerald-500/5":"border-zinc-800/80 shadow-sky-500/5"}`,children:[d.jsxs("button",{onClick:P,disabled:A.length===0,className:`absolute top-3 right-3 z-30 flex items-center gap-1.5 px-3 py-1.5 text-[9px] uppercase tracking-wider font-bold rounded border shadow-lg transition-all duration-200 select-none ${A.length===0?"opacity-40 cursor-not-allowed bg-zinc-900/40 text-zinc-500 border-zinc-800/40":"hover:scale-105 active:scale-95 "+(r==="cyberpunk"?"bg-black/90 hover:bg-pink-500/20 text-pink-400 hover:text-pink-300 border-pink-500/30 hover:border-pink-500/50":r==="terminal"?"bg-black/90 hover:bg-[#33ff33]/20 text-[#33ff33] border-[#33ff33]/30 hover:border-[#33ff33]/50 font-mono":r==="light"?"bg-white/90 hover:bg-slate-100 text-slate-800 hover:text-slate-900 border-slate-200 hover:border-slate-300":"bg-zinc-950/90 hover:bg-indigo-500/20 text-indigo-400 hover:text-indigo-300 border-indigo-500/25 hover:border-indigo-500/45")}`,title:"Clear canvas to a blank state",children:[d.jsx(cx,{className:"w-3 h-3"}),d.jsx("span",{children:"Clear Board"})]}),d.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-screen overflow-hidden",children:d.jsx("div",{className:"w-full h-full",style:{backgroundImage:"linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",backgroundSize:"24px 24px",color:r==="terminal"?"#33ff33":r==="cyberpunk"?"#ff007f":"#6366f1"}})}),A.length===0&&!l&&d.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center p-4",children:[d.jsx("div",{className:"p-3 rounded-full bg-indigo-500/5 border border-indigo-500/10 mb-2",children:d.jsx(ix,{className:"w-6 h-6 text-indigo-400/55 animate-pulse"})}),d.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest text-zinc-550",children:"Visual Ideation Pad"}),d.jsx("span",{className:"text-[9px] text-zinc-600 mt-1",children:"Press and drag anywhere on this sandbox grid canvas to sketch plans"})]}),d.jsx("canvas",{ref:s,onMouseDown:j,onMouseMove:Z,onMouseUp:me,onMouseLeave:me,onTouchStart:j,onTouchMove:Z,onTouchEnd:me,className:"absolute inset-0 w-full h-full select-none touch-none bg-transparent"}),d.jsxs("div",{className:"absolute bottom-2 left-2 pointer-events-none flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/60 border border-zinc-900/50 text-[8px] font-mono text-zinc-500",children:[d.jsxs("span",{children:["COORDS: ",D.width,"x",D.height]}),d.jsx("span",{children:"•"}),d.jsxs("span",{children:["STROKESTACK: ",A.length]})]})]}),d.jsxs("div",{className:"flex items-center justify-between mt-auto",children:[d.jsxs("div",{className:"flex items-center gap-1 text-[9px] text-zinc-500 font-mono",children:[d.jsx(Wo,{className:"w-3 h-3 text-indigo-400"}),d.jsx("span",{children:"IDEATION UNIT DEPLOYED SECURELY WITHIN THE OPERATING SYSTEM ENVIRONMENT"})]}),d.jsx("div",{className:"text-[9px] font-mono text-zinc-500",children:"v2.4.6_canvas"})]})]})}function J3(r,t){if(typeof window>"u"||!window.speechSynthesis)return t&&t(),null;window.speechSynthesis.cancel();const i=r.replace(/[*_#`~[\]]/g,"").replace(/➔/g," to ").replace(/F1/gi,"F-1").replace(/LLMs?/gi,"Large Language Models").replace(/NLP/gi,"Natural Language Processing").trim(),s=new SpeechSynthesisUtterance(i),l=window.speechSynthesis.getVoices(),c=l.find(h=>h.lang.startsWith("en")&&(h.name.includes("Google")||h.name.includes("Natural")||h.name.includes("Samantha")||h.name.includes("Zira")))||l.find(h=>h.lang.startsWith("en"))||l[0];return c&&(s.voice=c),s.pitch=1.05,s.rate=.98,s.onend=()=>{t&&t()},s.onerror=()=>{t&&t()},window.speechSynthesis.speak(s),{stop:()=>{window.speechSynthesis.cancel(),t&&t()}}}function $3(r,t){const i=r.toLowerCase().trim();return i.includes("depression")||i.includes("mental")||i.includes("health")||i.includes("distress")||i.includes("clinical")||i.includes("wellness")?`My research in clinical NLP has led to two main publications: 

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
• My technical stack or how to get in contact with me.`}function eA(r){const t=r.projectType.includes("NLP")||r.goals.toLowerCase().includes("text")||r.goals.toLowerCase().includes("linguistic")||r.goals.toLowerCase().includes("language"),i=t?"RoBERTa-Clinical or custom fine-tuned BERT":"Gemini 3.5 Flash / distilled Llama 3B",s=t?"<5ms inference threshold":"<150ms roundtrip HMR";return`[SYSTEM DIAGNOSTICS READOUT // OFFLINE FEASIBILITY SCAN]
-----------------------------------------------------------------
INITIATIVE PROFILE : Category: ${r.projectType} // Boundary: ${r.budget} // Timeline: ${r.timeline}
SEMANTIC OBJECTIVE : "${r.goals.length>80?r.goals.substring(0,80)+"...":r.goals}"
OPERATIVE DIRECTIVES: ${r.comments?r.comments:"Standard secure deployment"}

TECHNICAL VIABILITY SUMMARY:
• Feasibility: High. The objectives map directly to Farhan's micro-service templates.
• Target Model Candidate: ${i}
• Proposed Stack: React client + Go/Node.js API pipeline + Redis quantization caching.
• Optimization Goal: ONNX runtime deployment yielding a ${s} overhead.
• Security Boundary: Local token perplexity classification shields will be activated to protect against prompt injection vectors (94.2% accuracy threshold).`}function tA(){const[r,t]=Oe.useState("landing"),[i,s]=Oe.useState(!1);Oe.useEffect(()=>(r==="os"?document.documentElement.classList.add("os-mode"):document.documentElement.classList.remove("os-mode"),()=>{document.documentElement.classList.remove("os-mode")}),[r]);const[l,c]=Oe.useState(""),[h,m]=Oe.useState(""),[g,p]=Oe.useState(!1),[y,_]=Oe.useState(null),[x,M]=Oe.useState(!1),[A,U]=Oe.useState(0),[S,b]=Oe.useState([]),[w,z]=Oe.useState("dark"),[D,G]=Oe.useState(!0),[O,F]=Oe.useState(!0),[T,I]=Oe.useState(""),[W,j]=Oe.useState(["twin"]),[Z,me]=Oe.useState([]),[ve,q]=Oe.useState("twin"),[P,H]=Oe.useState({twin:{x:50,y:70,isMaximized:!1},projects:{x:120,y:140,isMaximized:!1},research:{x:180,y:90,isMaximized:!1},github:{x:220,y:160,isMaximized:!1},writing:{x:80,y:220,isMaximized:!1},garden:{x:260,y:40,isMaximized:!1},resume:{x:300,y:200,isMaximized:!1},timeline:{x:140,y:300,isMaximized:!1},skills:{x:400,y:80,isMaximized:!1},brief:{x:350,y:150,isMaximized:!1},builds:{x:200,y:350,isMaximized:!1},whiteboard:{x:240,y:110,isMaximized:!1},profTimeline:{x:160,y:240,isMaximized:!1}}),ne=Oe.useRef(null),[Se,ae]=Oe.useState(12);Oe.useEffect(()=>{const B=setInterval(()=>{ae(Math.floor(Math.random()*10)+7)},2500);return()=>clearInterval(B)},[]);const[N,X]=Oe.useState(typeof window<"u"?window.innerWidth:1024);Oe.useEffect(()=>{const B=()=>{X(ue=>ue!==window.innerWidth?window.innerWidth:ue)};return window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)},[]);const k=()=>{const B=["dark","cyberpunk","ai","terminal","light"],ue=(B.indexOf(w)+1)%B.length;z(B[ue]),ot(750,.03)},_e=B=>{t("os"),M(!0),W.includes(B)||j([...W,B]),q(B),ot(900,.05)},we=B=>{st(B),_e("writing")},[J,Te]=Oe.useState(nn.projects[0]),[Ne,We]=Oe.useState(nn.papers[0]),[at,tt]=Oe.useState(nn.articles),[mt,st]=Oe.useState(nn.articles[0]),[ct,Rt]=Oe.useState(nn.timeline[0]);Oe.useEffect(()=>{(async()=>{try{const ue=await fetch("/api/medium-stories");if(ue.ok){const xe=await ue.json();if(Array.isArray(xe)&&xe.length>0){tt(xe),st(xe[0]);return}}}catch(ue){console.warn("Backend Medium stories endpoint unavailable, trying client fallback:",ue)}try{const ue=await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@farhankabir133");if(ue.ok){const xe=await ue.json();if(xe.status==="ok"&&Array.isArray(xe.items)){const Ue=xe.items.slice(0,6).map((qe,Ke)=>{const yt=qe.description||"",fe=yt.match(/<img[^>]+src=["']([^"']+)["']/),Qe=fe?fe[1]:"",ht=yt.match(/<p class="medium-feed-snippet">([\s\S]*?)<\/p>/);let pt=ht?ht[1].replace(/<[^>]+>/g,"").trim():"";const Xe=yt.replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim();pt||(pt=Xe.slice(0,150)+(Xe.length>150?"...":""));let rn="Life";const xt=(qe.categories||[]).map(ft=>ft.toLowerCase());xt.some(ft=>ft.includes("ai")||ft.includes("artificial")||ft.includes("gpt")||ft.includes("llm"))?rn="AI":xt.some(ft=>ft.includes("dev")||ft.includes("coding")||ft.includes("program")||ft.includes("software")||ft.includes("architecture")||ft.includes("engineering"))?rn="Engineering":xt.some(ft=>ft.includes("productiv")||ft.includes("work")||ft.includes("career")||ft.includes("growth"))?rn="Productivity":xt.some(ft=>ft.includes("research")||ft.includes("science")||ft.includes("clinic"))?rn="Research":xt.some(ft=>ft.includes("design")||ft.includes("ux")||ft.includes("ui"))?rn="Design":xt.some(ft=>ft.includes("startup")||ft.includes("business")||ft.includes("saas"))?rn="Startups":xt.some(ft=>ft.includes("philosoph")||ft.includes("think"))&&(rn="Philosophy");let un=qe.pubDate;try{const ft=new Date(qe.pubDate);isNaN(ft.getTime())||(un=ft.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}))}catch{}const In=Xe.split(/\s+/).length,Kn=`${Math.max(1,Math.ceil(In/225))} min read`,Ht=(qe.guid||"").match(/\/p\/([a-f0-9]+)$/)||(qe.link||"").match(/-([a-f0-9]+)$/);return{id:Ht?Ht[1]:`medium-${Ke}`,title:qe.title,category:rn,readTime:Kn,date:un,excerpt:pt,content:Xe||pt||qe.title,link:qe.link,imageUrl:Qe}});Ue.length>0&&(tt(Ue),st(Ue[0]))}}}catch(ue){console.warn("Client-side rss2json fallback failed:",ue)}})()},[]);const[ut,Zt]=Oe.useState("all"),[Dt,ln]=Oe.useState("recruiter"),[Q,Nt]=Oe.useState(!1),[gt,jt]=Oe.useState(""),[ke,Ct]=Oe.useState(""),[L,E]=Oe.useState([{role:"assistant",content:"Systems fully operational. I am Farhan's certified neural clone. Feel free to enquire about my NLP predictive pipelines, clinical depression research, full-stack architectures, or project command maps."}]),[te,Ee]=Oe.useState(!1),[Le,Fe]=Oe.useState(null),[je,be]=Oe.useState(null),[se,He]=Oe.useState({projectType:"AI Engineering",budget:"$5,000 - $10,000",timeline:"1-3 Months",goals:"",comments:"",email:""}),[Ge,Be]=Oe.useState(null),[Pe,it]=Oe.useState(!1),[rt,Mt]=Oe.useState(!1),[Y,he]=Oe.useState(!1),[de,Ce]=Oe.useState(0),[ze,Re]=Oe.useState(""),[Je,Ie]=Oe.useState(!1),[$e,bt]=Oe.useState(null),[Wt,mn]=Oe.useState(null),ot=(B=800,ue=.03)=>{D&&dx(B,ue)};Oe.useEffect(()=>{const B=()=>{I(new Date().toLocaleString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}))};B();const ue=setInterval(B,1e3);return()=>clearInterval(ue)},[]),Oe.useEffect(()=>{if(!x){const B=["INIT: Booting FarhanOS Kernel v2.4.6...","SYS: Loading digital neural parameters...","SYS: Grounding publications corpus index...","NETWORK: Establishing proxy connection secure rails...","AI: Initializing Gemini bimodal model instances...","GRAPH: Parsing topological clinical coordinates...","SYS: Systems compiled. Ready for operational execution."];let ue=0;const xe=setInterval(()=>{U(Ue=>{if(Ue>=100)return clearInterval(xe),setTimeout(()=>{M(!0),ot(1e3,.15)},600),100;const qe=Math.floor(Math.random()*15)+5,Ke=Math.min(Ue+qe,100);return Ke>ue*15&&ue<B.length&&(b(yt=>[...yt,B[ue]]),ue++,ot(600+ue*50,.02)),Ke})},120);return()=>clearInterval(xe)}},[x]);const Wi=()=>{if(i)return;ot(1200,.4),s(!0);let B=0;const ue=setInterval(()=>{B<7?(ot(150+B*200,.05),B++):clearInterval(ue)},100);setTimeout(()=>{t("os"),U(0),b([]),M(!1),s(!1)},1800)};Oe.useEffect(()=>{const B=ue=>{(ue.metaKey||ue.ctrlKey)&&ue.key==="k"&&(ue.preventDefault(),Nt(xe=>!xe),ot(900,.04)),ue.key==="Escape"&&Nt(!1)};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[D]);const ei=Oe.useRef(null),bi=Oe.useRef({x:0,y:0}),an=Oe.useRef(null),cn=Oe.useRef({x:0,y:0}),sn=Oe.useRef({x:0,y:0}),Oi=(B,ue)=>{var yt,fe,Qe;if((yt=P[B])!=null&&yt.isMaximized)return;q(B);const xe=((fe=P[B])==null?void 0:fe.x)||0,Ue=((Qe=P[B])==null?void 0:Qe.y)||0;ei.current=B,bi.current={x:ue.clientX-xe,y:ue.clientY-Ue},cn.current={x:xe,y:Ue},sn.current={x:xe,y:Ue};const qe=document.getElementById(`window-${B}`);qe&&(qe.style.transition="none"),mn(B),ot(500,.01),an.current&&cancelAnimationFrame(an.current);const Ke=()=>{const ht=ei.current;if(!ht)return;const pt=.16,Xe=cn.current.x-sn.current.x,rn=cn.current.y-sn.current.y;sn.current.x+=Xe*pt,sn.current.y+=rn*pt;const xt=Xe*pt,un=4,In=Math.min(Math.max(-xt*.14,-un),un),Nn=document.getElementById(`window-${ht}`);Nn&&(Nn.style.left=`${sn.current.x}px`,Nn.style.top=`${sn.current.y}px`,Nn.style.transform=`rotateZ(${In}deg) scale(1.025)`,Nn.style.boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.65)",Nn.style.zIndex="100"),an.current=requestAnimationFrame(Ke)};an.current=requestAnimationFrame(Ke)},Pi=B=>{if(ei.current){const xe=Math.max(0,B.clientX-bi.current.x),Ue=Math.max(0,B.clientY-bi.current.y);cn.current={x:xe,y:Ue}}},gs=()=>{const B=ei.current;if(B){an.current&&cancelAnimationFrame(an.current),an.current=null;const ue=sn.current.x,xe=sn.current.y,Ue=document.getElementById(`window-${B}`);Ue&&(Ue.style.transition="",Ue.style.transform="",Ue.style.boxShadow="",Ue.style.zIndex=""),H(qe=>({...qe,[B]:{...qe[B],x:ue,y:xe}})),ei.current=null,mn(null)}};Oe.useEffect(()=>(Wt&&(window.addEventListener("mousemove",Pi),window.addEventListener("mouseup",gs)),()=>{window.removeEventListener("mousemove",Pi),window.removeEventListener("mouseup",gs)}),[Wt]);const Rn=B=>{ot(700,.05),W.includes(B)||j(ue=>[...ue,B]),me(ue=>ue.filter(xe=>xe!==B)),q(B)},xs=B=>{ot(400,.06),j(ue=>ue.filter(xe=>xe!==B))},Ii=B=>{ot(450,.04),Z.includes(B)||me(xe=>[...xe,B]);const ue=W.filter(xe=>xe!==B&&!Z.includes(xe));ue.length>0&&q(ue[ue.length-1])},vs=B=>{ot(800,.04),H(ue=>{var xe;return{...ue,[B]:{...ue[B],isMaximized:!((xe=ue[B])!=null&&xe.isMaximized)}}})},Zn=async(B,ue=null,xe="narrate")=>{if(O)try{je&&(je.stop(),be(null)),Fe(ue);const qe=await(await fetch(`${Ko()}/api/tts`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:B,type:xe})})).json();if(qe.audio){const Ke=await U1(qe.audio);be(Ke);const yt=qe.audio.length*.75/24e3;setTimeout(()=>{Fe(null)},yt*1e3)}}catch(Ue){console.error("Narrator service unreachable, falling back to client voice:",Ue);try{const qe=J3(B,()=>{Fe(null)});qe?be(qe):Fe(null)}catch(qe){console.error("Client speech synthesis failed:",qe),Fe(null)}}},ti=()=>{je&&(je.stop(),be(null)),Fe(null)},qi=async()=>{if(!ke.trim())return;const B=ke.trim();Ct(""),E(ue=>[...ue,{role:"user",content:B}]),Ee(!0),ot(1100,.03);try{const ue=L.map(qe=>({role:qe.role==="user"?"user":"assistant",content:qe.content})),Ue=await(await fetch(`${Ko()}/api/ask-twin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:B,history:ue})})).json();if(Ue.reply)E(qe=>[...qe,{role:"assistant",content:Ue.reply}]),Ee(!1),O&&Zn(Ue.reply,L.length+1);else throw new Error(Ue.error||"General twin system fault.")}catch(ue){console.warn("Backend twin service failed, using local fallback:",ue),L.map(Ue=>({role:Ue.role==="user"?"user":"assistant",content:Ue.content}));const xe=$3(B);E(Ue=>[...Ue,{role:"assistant",content:xe}]),Ee(!1),O&&Zn(xe,L.length+1)}},Yi=async()=>{if(se.goals.trim()){it(!0),ot(950,.05);try{const ue=await(await fetch(`${Ko()}/api/summarize-brief`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectType:se.projectType,budget:se.budget,timeline:se.timeline,goals:se.goals,comments:se.comments})})).json();ue.summary&&Be(ue.summary)}catch(B){console.warn("Backend brief summarizer failed, using local fallback:",B);const ue=eA(se);Be(ue)}finally{it(!1)}}},gn=async()=>{if(!se.email.trim()){alert("Please provide a valid transmission email address before dispatching.");return}if(!/\S+@\S+\.\S+/.test(se.email)){alert("Please provide a valid email structure.");return}Mt(!0),ot(1100,.05);try{if(!(await fetch(`${Ko()}/api/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"OS Mission Collaborator",email:se.email,subject:`Mission Brief: ${se.projectType}`,message:`Strategic Brief Parameters:
- Venture Domain: ${se.projectType}
- Financial Bounds: ${se.budget}
- Timeline Profile: ${se.timeline}
- Strategic Goals: ${se.goals}
- Operational Directives: ${se.comments||"None"}

Generated Assessment Architecture:
${Ge}`,metadata:{source:"OS_MISSION_BRIEF",projectType:se.projectType,budget:se.budget,timeline:se.timeline,comments:se.comments}})})).ok)throw new Error("Failed to dispatch brief.");alert("Handshake confirmed. Strategy Brief successfully transmitted to Farhan's secure channel."),Be(null),He(ue=>({...ue,goals:"",comments:"",email:""}))}catch(B){console.warn("Real dispatch failed, falling back to simulation:",B),alert("Handshake completed. Strategy Brief successfully recorded (simulated delivery)."),Be(null)}finally{Mt(!1)}},_s=async()=>{ot(1200,.1),he(!0),Ie(!0),Ce(1);const B=[{id:"twin",title:"Neural Core Clone",text:"This is the Ask Farhan AI Clone, trained on Farhan's complete portfolio. You can query clinical results, NLP models, and full-stack architecture profiles."},{id:"projects",title:"Project Galaxy Command",text:"Review the high-precision mission panels showing fine-tuned Transformers, custom Go microservices, and metrics-driven SaaS applications."},{id:"research",title:"Linguistic Research Laboratory",text:"Inspect peer-reviewed NLP models, specialized Reddit depression classifiers, topological architectures, and citation modules."},{id:"skills",title:"Skill Observational Map",text:"Explore interactive visual expertise nodes across deep ML, distributed scalable systems, and fully secure client UI architectures."},{id:"brief",title:"Mission Collaboration Brief",text:"Submit custom initiatives to initiate automated feasibility evaluations driven directly by the Gemini reasoning framework."}];await(async xe=>{const Ue=B[xe-1];if(!Ue){he(!1),Ce(0);return}Ce(xe),Re(Ue.text),Rn(Ue.id),Ie(!0),O&&await Zn(Ue.text,null,"tour"),Ie(!1)})(1)},C=()=>{if(de<5){const B=de+1;Ce(B),ot(800,.04);const ue=["Review the high-precision mission panels showing fine-tuned Transformers, custom Go microservices, and metrics-driven SaaS applications.","Inspect peer-reviewed NLP models, specialized Reddit depression classifiers, topological architectures, and citation modules.","Explore interactive visual expertise nodes across deep ML, distributed scalable systems, and fully secure client UI architectures.","Submit custom initiatives to initiate automated feasibility evaluations driven directly by the Gemini reasoning framework."];Rn(["projects","research","skills","brief"][B-1]),Re(ue[B-2]),O&&Zn(ue[B-2],null,"tour")}else he(!1),Ce(0),ti(),ot(1300,.05)},$=nn.skills.filter(B=>ut==="all"||ut==="AI/ML"&&B.category==="AI/ML"||ut==="Frontend"&&B.category==="Frontend"||ut==="Backend"&&B.category==="Backend"||ut==="Research"&&B.category==="Research & Science"||ut==="Systems"&&B.category==="Systems & Devops"),re=(()=>{const B=gt.toLowerCase().trim();if(!B)return[];const ue=[];return nn.projects.forEach(xe=>{(xe.title.toLowerCase().includes(B)||xe.techStack.some(Ue=>Ue.toLowerCase().includes(B)))&&ue.push({type:"Project",title:xe.title,subtitle:xe.category,action:()=>{Rn("projects"),Te(xe),Nt(!1)}})}),nn.papers.forEach(xe=>{(xe.title.toLowerCase().includes(B)||xe.abstract.toLowerCase().includes(B))&&ue.push({type:"Research Paper",title:xe.title,subtitle:`${xe.year} - ${xe.journal}`,action:()=>{Rn("research"),We(xe),Nt(!1)}})}),at.forEach(xe=>{(xe.title.toLowerCase().includes(B)||xe.excerpt.toLowerCase().includes(B))&&ue.push({type:"Blog/Article",title:xe.title,subtitle:xe.category,action:()=>{Rn("writing"),st(xe),Nt(!1)}})}),nn.skills.forEach(xe=>{xe.name.toLowerCase().includes(B)&&ue.push({type:"Tech Stack",title:xe.name,subtitle:xe.category,action:()=>{Rn("skills"),Zt(xe.category==="Research & Science"?"Research":xe.category==="Systems & Devops"?"Systems":xe.category),Nt(!1)}})}),("whiteboard".includes(B)||"ideation".includes(B)||"canvas".includes(B)||"drawing".includes(B)||"sketch".includes(B)||"paint".includes(B))&&ue.push({type:"OS Utility",title:"Ideation Pad (Whiteboard)",subtitle:"HTML5 digital canvas for sketching visual ideas",action:()=>{Rn("whiteboard"),Nt(!1)}}),ue})(),oe=[{id:"twin",label:"Ask Twin AI",icon:Wo,color:"text-purple-400 bg-purple-500/10 border-purple-500/20"},{id:"projects",label:"Mission Control",icon:pc,color:"text-sky-400 bg-sky-500/10 border-sky-500/20"},{id:"research",label:"Research Lab",icon:Sy,color:"text-emerald-400 bg-emerald-500/10 border-emerald-500/20"},{id:"github",label:"GitHub Monitor",icon:sx,color:"text-zinc-400 bg-zinc-500/10 border-zinc-500/20"},{id:"writing",label:"Writing Hub",icon:Vy,color:"text-amber-400 bg-amber-500/10 border-amber-500/20"},{id:"garden",label:"Garden Graph",icon:r1,color:"text-cyan-400 bg-cyan-500/10 border-cyan-500/20"},{id:"resume",label:"Resume Gen",icon:Hy,color:"text-pink-400 bg-pink-500/10 border-pink-500/20"},{id:"timeline",label:"Career Index",icon:Ty,color:"text-blue-400 bg-blue-500/10 border-blue-500/20"},{id:"profTimeline",label:"Prof. Timeline",icon:hv,color:"text-cyan-400 bg-cyan-500/10 border-cyan-500/20"},{id:"skills",label:"Skill Observatory",icon:ax,color:"text-indigo-400 bg-indigo-500/10 border-indigo-500/20"},{id:"brief",label:"Mission Brief",icon:ox,color:"text-rose-400 bg-rose-500/10 border-rose-500/20"},{id:"builds",label:"Release Logs",icon:Zy,color:"text-teal-400 bg-teal-500/10 border-teal-500/20"},{id:"whiteboard",label:"Ideation Pad",icon:rx,color:"text-orange-400 bg-orange-500/10 border-orange-500/20"}],Ve=(()=>{switch(w){case"cyberpunk":return{bg:"bg-[#030610] text-[#00ffcc] font-mono selection:bg-pink-500/30 selection:text-white",glass:"bg-black/80 border-2 border-pink-500/60 shadow-[0_0_20px_rgba(236,72,153,0.15)]",windowHeader:"bg-gradient-to-r from-pink-600 to-indigo-900 text-white border-b-2 border-pink-500/60 font-mono",btnPrimary:"bg-pink-600 hover:bg-pink-500 text-white border-2 border-pink-400 font-mono transition-transform duration-150 transform active:scale-95",btnSecondary:"bg-zinc-900 border-2 border-[#00ffcc] text-[#00ffcc] hover:bg-[#00ffcc]/10 font-mono",accentColor:"text-pink-500",accentBorder:"border-pink-500/40",indicator:"bg-[#00ffcc] shadow-[0_0_8px_#00ffcc]",panelHeader:"text-pink-400 uppercase tracking-widest text-[11px] font-bold",badge:"bg-pink-500/20 border border-pink-500/40 text-pink-300"};case"ai":return{bg:"bg-[#050414] text-slate-100 selection:bg-purple-600/30 selection:text-white",glass:"bg-purple-950/20 backdrop-blur-xl border border-purple-500/30 shadow-[0_20px_50px_rgba(147,51,234,0.15)] ring-1 ring-white/10",windowHeader:"bg-gradient-to-r from-purple-950/50 via-slate-900 to-indigo-950/50 text-slate-100 border-b border-purple-500/30 font-sans backdrop-blur-md",btnPrimary:"bg-gradient-to-r from-purple-600 to-cyan-500 text-white border border-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:opacity-90 transition-all active:scale-95 duration-100",btnSecondary:"bg-purple-950/40 border border-cyan-500/40 text-cyan-200 hover:bg-purple-950/80 transition-all",accentColor:"text-purple-400",accentBorder:"border-purple-500/30",indicator:"bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse",panelHeader:"text-purple-400 tracking-wider text-xs font-semibold",badge:"bg-purple-500/20 border border-purple-500/30 text-purple-200 text-xs"};case"terminal":return{bg:"bg-black text-[#33ff33] font-mono selection:bg-[#33ff33]/20",glass:"bg-black border border-[#33ff33] shadow-[0_0_15px_rgba(51,255,51,0.1)]",windowHeader:"bg-zinc-950 text-[#33ff33] border-b border-[#33ff33] font-mono",btnPrimary:"bg-[#33ff33] text-black border border-[#33ff33] font-bold hover:bg-[#33ff33]/80 transition-all",btnSecondary:"bg-black border border-[#33ff33] text-[#33ff33] hover:bg-[#33ff33]/15 transition-all",accentColor:"text-[#33ff33]",accentBorder:"border-[#33ff33]/30",indicator:"bg-[#33ff33] shadow-[0_0_10px_#33ff33]",panelHeader:"text-[#33ff33] font-bold uppercase tracking-wider text-[11px]",badge:"bg-transparent border border-[#33ff33] text-[#33ff33] text-xs"};case"light":return{bg:"bg-[#f8fafc] text-[#0f172a] selection:bg-sky-500/20",glass:"bg-white/85 backdrop-blur-md border border-slate-200 shadow-xl",windowHeader:"bg-slate-50 text-slate-800 border-b border-slate-200 font-sans",btnPrimary:"bg-slate-900 hover:bg-slate-800 text-white transition-all duration-100 active:scale-95",btnSecondary:"bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all",accentColor:"text-indigo-600",accentBorder:"border-slate-300",indicator:"bg-indigo-600 shadow-[0_0_5px_rgba(79,70,229,0.5)]",panelHeader:"text-slate-500 uppercase tracking-widest text-[11px] font-bold",badge:"bg-slate-100 border border-slate-200 text-slate-700 text-xs"};default:return{bg:"bg-[#090a10] text-[#f1f5f9] selection:bg-sky-500/20",glass:"bg-[#11121d]/75 backdrop-blur-xl border border-[#2c2d3a] shadow-2xl shadow-black/80",windowHeader:"bg-[#161726]/90 text-slate-200 border-b border-[#2c2d3a] font-sans",btnPrimary:"bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-950/50 border border-sky-450 transition-all duration-150 active:scale-95",btnSecondary:"bg-[#1a1b26] border border-[#2d2f3d] text-slate-300 hover:bg-[#202231] transition-all",accentColor:"text-sky-400",accentBorder:"border-sky-500/20",indicator:"bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse",panelHeader:"text-sky-450 uppercase tracking-wider text-[11px] font-bold",badge:"bg-sky-500/10 border border-sky-500/20 text-sky-300"}}})();return d.jsx("div",{className:`w-full ${r==="os"?"h-full overflow-hidden select-none":"min-h-screen"} ${Ve.bg} transition-colors duration-500 flex flex-col relative`,children:r==="landing"?d.jsx(K3,{isWarping:i,theme:w,soundOn:D,triggerSound:ot,onLaunchOS:Wi,onOpenWindowDirectly:_e,articles:at,onOpenArticleDirectly:we}):d.jsxs(d.Fragment,{children:[!x&&d.jsxs("div",{className:"absolute inset-0 bg-[#020308] z-[9999] flex flex-col items-center justify-center font-mono text-xs px-6",children:[d.jsxs("div",{className:"w-full max-w-lg bg-[#080b15]/90 border border-zinc-800 p-6 rounded-lg shadow-2xl relative overflow-hidden",children:[d.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500",style:{width:`${A}%`}}),d.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-800 pb-3 mb-4",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500/80 animate-ping"}),d.jsx("span",{className:"text-zinc-400 font-bold tracking-wider",children:"FARHAN KABIR CORE OS v2.4"})]}),d.jsxs("span",{className:"text-zinc-500 tracking-wider",children:["BOOT: ",A,"%"]})]}),d.jsxs("div",{className:"space-y-1.5 h-48 overflow-y-auto mb-4 scrollbar-none pr-1",children:[S.map((B,ue)=>d.jsxs("div",{className:"text-[#33ff33] opacity-90 font-mono text-[11px] leading-relaxed select-text flex items-start gap-1 justify-between",children:[d.jsx("span",{className:"flex-1 whitespace-pre-wrap",children:B}),d.jsx("span",{className:"text-zinc-600 text-[9px]",children:"[SUCCESS]"})]},ue)),A<100&&d.jsx("div",{className:"text-white animate-pulse font-mono text-[11px]",children:"⏳ Orchestrating linguistic vectors, please standby..."})]}),d.jsxs("div",{className:"flex items-center justify-between border-t border-zinc-800 pt-3 text-[10px] text-zinc-500",children:[d.jsx("span",{children:"SYSTEM HOST: OOS LOCAL HOST INSTANCE"}),d.jsx("span",{children:"PORT: 3001 ACTIVE"})]})]}),d.jsx("div",{className:"mt-8 text-zinc-600 text-center text-[10px] uppercase tracking-widest max-w-xs font-mono",children:"Designed for low-latency cognitive linguistics analysis with fully responsive modular desktop client matrices."})]}),d.jsxs("header",{className:"h-10 bg-black/40 backdrop-blur-md border-b border-zinc-800/40 flex items-center justify-between px-4 z-[99] select-none text-xs font-mono",children:[d.jsxs("div",{className:"flex items-center gap-5",children:[d.jsxs("div",{className:"flex items-center gap-2 cursor-pointer font-bold tracking-tight text-white hover:opacity-85",onClick:()=>ot(900,.05),children:[d.jsx("span",{className:"w-2 h-2 rounded bg-sky-400 opacity-90 shadow-[0_0_6px_#38bdf8]"}),d.jsx("span",{children:"FarhanOS"}),d.jsx("span",{className:"text-[9px] text-sky-400 px-1 border border-sky-500/20 rounded font-mono font-medium",children:"BETA"})]}),d.jsxs("button",{onClick:()=>{t("landing"),ot(1105,.06)},className:"flex items-center gap-1.5 px-2 py-0.5 rounded text-indigo-400 hover:text-indigo-300 font-mono text-[10px] border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 cursor-pointer",title:"Return to Cosmos Portal",children:[d.jsx(ax,{className:"w-3.5 h-3.5 text-indigo-400 animate-spin-slow"}),d.jsx("span",{children:"Return to Cosmos"})]}),d.jsxs("nav",{className:"hidden md:flex items-center gap-4 text-zinc-400 font-medium select-none",children:[d.jsxs("button",{onClick:()=>{Nt(!0),ot(800,.03)},className:"hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer",children:[d.jsx(lx,{className:"w-3.5 h-3.5"}),d.jsxs("span",{children:["Search ",d.jsx("kbd",{className:"text-[10px] font-mono text-zinc-600 bg-zinc-900 border border-zinc-800 rounded px-1 ml-0.5",children:"Cmd+K"})]})]}),d.jsxs("button",{onClick:_s,className:"hover:text-white transition-colors flex items-center gap-1 cursor-pointer text-purple-400 hover:text-purple-300",children:[d.jsx(Wo,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"AI Site Tour"})]}),d.jsxs("button",{onClick:()=>Rn("brief"),className:"hover:text-white transition-colors flex items-center gap-1 cursor-pointer",children:[d.jsx(mv,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Mission Brief"})]})]})]}),d.jsxs("div",{className:"flex items-center gap-4 select-none",children:[d.jsxs("div",{className:"hidden md:flex items-center gap-1 bg-zinc-950/60 border border-zinc-800/40 rounded px-1.5 py-0.5",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 font-medium mr-1.5",children:"Mood Theme:"}),["dark","cyberpunk","ai","terminal","light"].map(B=>d.jsx("button",{onClick:()=>{z(B),ot(750,.03)},className:`text-[10px] px-1.5 py-0.5 rounded capitalize transition-all cursor-pointer ${w===B?"bg-[#181926] text-white font-bold border border-zinc-700/60":"text-zinc-500 hover:text-zinc-300"}`,children:B},B))]}),d.jsxs("button",{onClick:k,className:"md:hidden flex items-center gap-1.5 bg-zinc-950/60 border border-zinc-800/40 rounded px-2 py-1 text-[10px] text-zinc-300 hover:text-white capitalize cursor-pointer active:scale-95 transition-all",title:"Cycle Theme",children:[d.jsx(rx,{className:"w-3.5 h-3.5 text-sky-400 animate-pulse"}),d.jsxs("span",{children:["Theme: ",w]})]}),d.jsxs("div",{className:"flex items-center gap-3 border-l border-zinc-800/60 pl-3",children:[d.jsx("button",{onClick:()=>{G(!D),dx(1e3,.02)},className:`p-1 rounded cursor-pointer hover:bg-zinc-900 ${D?"text-zinc-300":"text-zinc-600"}`,title:"Toggle Audio Feedback",children:D?d.jsx(vf,{className:"w-3.5 h-3.5"}):d.jsx(_f,{className:"w-3.5 h-3.5"})}),d.jsxs("button",{onClick:()=>{F(!O),Le!==null&&ti()},className:`text-[10px] font-semibold flex items-center gap-1.5 px-1.5 py-0.5 rounded cursor-pointer select-none ${O?"text-purple-400 border border-purple-500/20 bg-purple-500/5":"text-zinc-600 border border-zinc-800"}`,title:"Toggle Voice synthesizer narration output",children:[d.jsx(pc,{className:"w-3 h-3 text-purple-400"}),d.jsx("span",{className:"hidden sm:inline",children:"OS Voice"})]}),d.jsxs("div",{className:"hidden sm:flex items-center gap-1.5 text-zinc-400 font-mono tracking-wider font-semibold bg-zinc-950/45 border border-zinc-800/40 px-2 py-0.5 rounded select-none",children:[d.jsx(pv,{className:"w-3.5 h-3.5 text-sky-400"}),d.jsxs("span",{children:[T||"14:37:33"," (UTC)"]})]})]})]})]}),Y&&d.jsxs("div",{className:"absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-xl bg-purple-950/80 backdrop-blur-2xl border-2 border-purple-500/50 p-4 rounded-xl shadow-[0_10px_40px_rgba(168,85,247,0.3)] z-[999] flex items-start gap-4 select-text animate-bounce-short",children:[d.jsx("div",{className:"p-2.5 bg-purple-500/20 rounded-lg border border-purple-400/40 text-purple-300",children:d.jsx(Wo,{className:"w-5 h-5 text-purple-400 animate-spin-slow"})}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("h4",{className:"text-xs font-cyan-50 font-bold uppercase tracking-wider text-purple-200",children:["AI SYSTEM TOUR — ZONE ",de," OF 5"]}),Je&&d.jsx("span",{className:"text-[10px] text-purple-300 animate-pulse font-mono select-none",children:"Rendering Synthesized Voice..."})]}),d.jsx("p",{className:"text-xs text-[#ebd8fb] mt-1 pr-4 leading-relaxed font-sans",children:ze||"Preparing..."}),d.jsxs("div",{className:"flex items-center gap-2 mt-3",children:[d.jsx("button",{onClick:C,className:"bg-purple-600 hover:bg-purple-500 text-white text-[10px] px-3 py-1 rounded border border-purple-400 transition-all font-bold tracking-tight cursor-pointer",children:de===5?"Conclude Integration Tour":"Acknowledge & Sync Next Area"}),d.jsx("button",{onClick:()=>{he(!1),Ce(0),ti(),ot(400,.05)},className:"text-zinc-400 hover:text-white text-[10px] ml-2 font-medium cursor-pointer",children:"Exit Tour"})]})]})]}),d.jsxs("main",{className:"flex-1 relative overflow-auto p-4 md:p-6 scrollbar-none",children:[d.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 opacity-35",children:[d.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem]"}),d.jsx("div",{className:"absolute top-1/4 left-1/3 w-[30rem] h-[30rem] bg-gradient-to-tr from-sky-500/10 to-transparent rounded-full filter blur-[120px] animate-pulse-slow"}),d.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full filter blur-[100px] animate-pulse-slow"})]}),d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-6 max-w-5xl relative z-10 p-2 pointer-events-auto",children:oe.map((B,ue)=>{const xe=B.icon,Ue=W.includes(B.id),qe=ve===B.id&&!Z.includes(B.id);return d.jsxs("div",{onClick:()=>Rn(B.id),style:{animationDelay:`${ue*45}ms`},className:`flex flex-col items-center justify-center p-2.5 rounded-xl border border-transparent hover:border-zinc-800/40 hover:bg-zinc-950/25 hover:backdrop-blur-md hover:shadow-[0_4px_20px_rgba(99,102,241,0.08)] cursor-pointer transition-all duration-300 active:scale-95 group text-center relative animate-fade-in opacity-0 ${Ue?"bg-zinc-950/15":""}`,children:[d.jsxs("div",{className:`p-4 rounded-2xl ${B.color} transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200 relative`,children:[d.jsx(xe,{className:"w-6 h-6"}),Ue&&d.jsx("span",{className:"absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900 shadow-[0_0_6px_#10b981]"})]}),d.jsx("span",{className:"text-slate-300 group-hover:text-white font-sans text-[11px] font-semibold mt-2.5 tracking-tight line-clamp-1",children:B.label}),qe&&d.jsx("span",{className:"absolute inset-x-4 -bottom-1 h-0.5 bg-gradient-to-r from-sky-450 to-purple-500 rounded filter blur-xs"})]},B.id)})}),W.map(B=>{if(Z.includes(B))return null;const ue=ve===B,xe=P[B]||{x:100,y:100,isMaximized:!1},Ue=oe.find(fe=>fe.id===B),qe=Ue?Ue.icon:M1,yt=N<768||xe.isMaximized?{position:"fixed",top:"2.5rem",left:0,right:0,bottom:"4rem",zIndex:ue?50:20}:{position:"absolute",left:`${xe.x}px`,top:`${xe.y}px`,width:B==="twin"||B==="garden"||B==="skills"?"540px":"720px",height:B==="twin"?"480px":"550px",maxHeight:"85vh",zIndex:ue?50:20};return d.jsxs("div",{id:`window-${B}`,style:yt,onClick:()=>{q(B),ot(400,.01)},className:`flex flex-col rounded-xl overflow-hidden shadow-2xl transition-all duration-150 transform ${Ve.glass} ${ue?"ring-2 ring-sky-500/35 scale-[1.002]":"opacity-90"} animate-window-open`,children:[d.jsxs("div",{onMouseDown:fe=>Oi(B,fe),className:`h-9 px-3 flex items-center justify-between cursor-move select-none ${Ve.windowHeader}`,children:[d.jsxs("div",{className:"flex items-center gap-2 font-semibold tracking-tight text-xs",children:[d.jsx(qe,{className:"w-3.5 h-3.5 opacity-80"}),d.jsx("span",{children:Ue?Ue.label:"FarhanOS Sandbox"}),ue&&d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"})]}),d.jsxs("div",{className:"flex items-center gap-2",onMouseDown:fe=>fe.stopPropagation(),children:[d.jsx("button",{onClick:()=>Ii(B),className:"p-1 text-slate-400 hover:text-white rounded hover:bg-white/10",title:"Minimize",children:d.jsx(a1,{className:"w-3 h-3"})}),d.jsx("button",{onClick:()=>vs(B),className:"p-1 text-slate-400 hover:text-white rounded hover:bg-white/10",title:"Toggle Maximize",children:d.jsx(n1,{className:"w-3 h-3"})}),d.jsx("button",{onClick:()=>xs(B),className:"p-1 text-rose-400 hover:text-rose-500 rounded hover:bg-rose-500/10",title:"Close Window",children:d.jsx(ux,{className:"w-3 h-3"})})]})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-5 text-xs font-sans scrollbar-thin scrollbar-thumb-zinc-800",onScroll:fe=>{if(B==="profTimeline"){const Qe=fe.currentTarget,ht=Qe.scrollTop/(Qe.scrollHeight-Qe.clientHeight||1);ne.current&&(ne.current.style.transform=`scaleY(${ht})`)}},children:[B==="twin"&&d.jsxs("div",{className:"flex flex-col h-full gap-3",children:[d.jsxs("div",{className:"border-b border-zinc-800/60 pb-2 mb-1",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Wo,{className:"w-4 h-4 text-purple-400"}),d.jsx("span",{className:"font-bold text-slate-100 tracking-tight",children:"Interactive Ask Twin Engine"})]}),d.jsx("p",{className:"text-zinc-400 text-[10px] mt-0.5 leading-relaxed font-normal",children:"Enter any prompt below. The model responds based on Farhan's publications, NLP methodologies, and complete career achievements."})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto space-y-3 p-1 scrollbar-none text-[11px] leading-relaxed select-text font-normal max-h-[220px]",children:[L.map((fe,Qe)=>d.jsxs("div",{className:`flex flex-col gap-1 w-full ${fe.role==="user"?"items-end":"items-start"}`,children:[d.jsx("div",{className:`p-3 rounded-xl max-w-[90%] whitespace-pre-wrap select-text border shadow-xs ${fe.role==="user"?"bg-sky-500/10 border-sky-500/20 text-slate-100":"bg-zinc-950/40 border-zinc-900 text-slate-300"}`,children:fe.content}),fe.role==="assistant"&&d.jsx("button",{onClick:()=>{Le===Qe?ti():Zn(fe.content,Qe)},className:"text-[9px] text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer font-semibold",children:Le===Qe?d.jsxs(d.Fragment,{children:[d.jsx(_f,{className:"w-3 h-3 text-rose-400 animate-pulse"}),d.jsx("span",{className:"text-rose-400",children:"Silence Audio Narrator"})]}):d.jsxs(d.Fragment,{children:[d.jsx(vf,{className:"w-3 h-3 text-purple-400"}),d.jsx("span",{children:"Speak Response Model"})]})})]},Qe)),te&&d.jsxs("div",{className:"flex items-center gap-2 text-purple-400 animate-pulse font-mono text-[10px]",children:[d.jsx(pc,{className:"w-3.5 h-3.5 animate-spin"}),d.jsx("span",{children:"FarhanTwin thinking processes synchronized..."})]})]}),d.jsx("div",{className:"border-t border-zinc-800/40 pt-2 grid grid-cols-2 gap-1.5 z-10",children:["Explain depression text research","What bimodal stack is in use?","What SaaS packages did Farhan build?","Give brief overview of Farhan"].map(fe=>d.jsxs("button",{onClick:()=>{Ct(fe),ot(900,.02)},className:"text-[10px] text-left p-1.5 rounded-lg bg-zinc-950/30 hover:bg-zinc-950/80 border border-zinc-900 text-zinc-400 hover:text-slate-200 truncate cursor-pointer transition-colors",children:["→ ",fe]},fe))}),d.jsxs("div",{className:"flex items-center gap-2 mt-auto border-t border-zinc-800/40 pt-2 select-none",children:[d.jsx("input",{type:"text",value:ke,onChange:fe=>Ct(fe.target.value),onKeyDown:fe=>fe.key==="Enter"&&qi(),placeholder:"Inquire about clinical studies, model performance parameters...",className:"flex-1 scroll-p-2 bg-black/60 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-hidden focus:border-purple-500/50 text-[11px] text-slate-100 placeholder-zinc-500"}),d.jsx("button",{onClick:qi,disabled:!ke.trim()||te,className:`p-2.5 rounded-lg cursor-pointer ${Ve.btnPrimary}`,children:d.jsx(xv,{className:"w-3.5 h-3.5"})})]})]}),B==="projects"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-52 border-r border-zinc-800/60 pr-4 flex flex-col gap-2",children:[d.jsx("span",{className:Ve.panelHeader,children:"CATEGORIES"}),d.jsx("div",{className:"flex flex-wrap md:flex-col gap-1 select-none mb-3",children:["AI","NLP","SaaS","Open Source","Research","Productivity","Design"].map(fe=>d.jsxs("button",{onClick:()=>{Te(nn.projects.find(Qe=>Qe.category===fe)||nn.projects[0]),ot(800,.02)},className:`text-[10px] text-left px-2 py-1.5 rounded-md capitalize transition-all cursor-pointer ${J.category===fe?"bg-zinc-950 text-sky-400 border border-zinc-800 font-bold":"text-zinc-500 hover:text-zinc-300"}`,children:["🎨 ",fe]},fe))}),d.jsx("span",{className:Ve.panelHeader,children:"ACTIVE PLATFORMS"}),d.jsx("div",{className:"space-y-1 overflow-y-auto max-h-[160px] scrollbar-none select-none",children:nn.projects.map(fe=>d.jsxs("button",{onClick:()=>{Te(fe),ot(800,.03)},className:`w-full text-[10px] text-left p-2 rounded-md border flex flex-col gap-0.5 transition-colors cursor-pointer ${J.id===fe.id?"bg-sky-500/10 border-sky-500/30 text-sky-300":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"font-bold truncate",children:fe.title}),d.jsx("span",{className:"text-[9px] opacity-75",children:fe.category})]},fe.id))})]}),d.jsxs("div",{className:"flex-1 space-y-4",children:[d.jsxs("div",{className:"flex items-start justify-between border-b border-zinc-800/40 pb-2",children:[d.jsxs("div",{children:[d.jsxs("span",{className:Ve.badge,children:[J.category," PROJECT"]}),d.jsx("h3",{className:"text-sm font-extrabold text-white mt-1",children:J.title}),d.jsxs("span",{className:"text-[10px] text-zinc-500 font-mono tracking-wide",children:["TIMELINE: ",J.timeline]})]}),d.jsxs("div",{className:"flex items-center gap-1.5 select-none",children:[d.jsxs("button",{onClick:()=>ot(1e3,.05),className:"p-1 px-2.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-400 hover:text-white flex items-center gap-1",children:[d.jsx(sx,{className:"w-3 h-3"}),d.jsx("span",{children:"Code"})]}),d.jsxs("button",{onClick:()=>{ot(1100,.05),Rn("brief")},className:"p-1 px-2.5 rounded bg-sky-500/10 border border-sky-500/20 text-[10px] text-sky-300 hover:text-sky-200 flex items-center gap-1",children:[d.jsx(ox,{className:"w-3 h-3"}),d.jsx("span",{children:"Deploy"})]})]})]}),d.jsx("p",{className:"text-zinc-300 leading-relaxed font-sans mt-1 text-[11px] select-text",children:J.description}),d.jsx("div",{className:"grid grid-cols-3 gap-2.5",children:J.metrics.map((fe,Qe)=>d.jsxs("div",{className:"bg-zinc-950/40 border border-zinc-900 rounded-lg p-2.5 text-center relative overflow-hidden",children:[d.jsx("div",{className:"absolute top-0 left-0 right-0 h-0.5 bg-sky-400/20"}),d.jsx("div",{className:"text-[10px] text-zinc-500 capitalize",children:fe.label}),d.jsx("div",{className:"text-xs font-black text-sky-300 mt-1",children:fe.value})]},Qe))}),d.jsxs("div",{className:"space-y-3 mt-4 text-[11px]",children:[d.jsxs("div",{className:"bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text",children:[d.jsx("span",{className:"font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1",children:"Architecture Pipeline:"}),d.jsx("span",{className:"text-slate-400 leading-relaxed font-sans",children:J.architecture})]}),d.jsxs("div",{className:"bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text",children:[d.jsx("span",{className:"font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1",children:"Design Problem:"}),d.jsx("span",{className:"text-slate-400 leading-relaxed font-sans",children:J.problem})]}),d.jsxs("div",{className:"bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text",children:[d.jsx("span",{className:"font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1",children:"Integrated Tech-Stack Matrix:"}),d.jsx("div",{className:"flex flex-wrap gap-1.5 mt-1 select-none",children:J.techStack.map(fe=>d.jsx("span",{className:"bg-zinc-900 text-slate-300 border border-zinc-800 rounded px-1.5 py-0.5 text-[9px] font-mono leading-tight",children:fe},fe))})]})]})]})]}),B==="research"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-56 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2",children:[d.jsx("span",{className:Ve.panelHeader,children:"PUBLICATIONS CATALOG"}),d.jsx("div",{className:"space-y-1 select-none",children:nn.papers.map(fe=>d.jsxs("button",{onClick:()=>{We(fe),ot(800,.03)},className:`w-full text-left p-2 rounded-lg border flex flex-col gap-1 transition-all cursor-pointer ${Ne.id===fe.id?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.1)]":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"font-bold text-[10px] line-clamp-2 leading-snug",children:fe.title}),d.jsxs("span",{className:"text-[9px] opacity-75 font-mono",children:[fe.journal," (",fe.year,")"]})]},fe.id))}),d.jsxs("div",{className:"p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg mt-auto text-[10px] select-text",children:[d.jsx("span",{className:"font-bold text-emerald-300",children:"Clinician Alerts"}),d.jsx("p",{className:"text-zinc-500 leading-normal font-sans mt-1",children:"Automatic alert pipeline triggers clinical assessment support metrics on exceeding distress metrics threshold."})]})]}),d.jsxs("div",{className:"flex-1 space-y-4",children:[d.jsxs("div",{className:"border-b border-zinc-800/40 pb-2 flex-col gap-0.5 justify-start",children:[d.jsx("span",{className:"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded px-2 py-0.5 text-[9.5px]",children:"PEER-REVIEWED JOURNAL"}),d.jsx("h3",{className:"text-xs font-black text-slate-100 tracking-tight leading-relaxed select-text mt-1.5",children:Ne.title}),d.jsxs("div",{className:"text-[9.5px] text-zinc-500 italic mt-0.5 select-text",children:["Authors: ",Ne.authors," · Published in ",Ne.journal," (",Ne.year,")"]})]}),d.jsxs("div",{className:"bg-zinc-950/40 border border-zinc-900 rounded-lg p-3 relative select-text",children:[d.jsx("span",{className:"font-bold text-zinc-300 text-[10px] block uppercase tracking-wide mb-1",children:"Anatomical Abstract:"}),d.jsx("p",{className:"text-slate-400 font-sans leading-normal text-[10px]",children:Ne.abstract})]}),d.jsxs("div",{children:[d.jsx("span",{className:Ve.panelHeader,children:"CLASSIFIER PIPELINE DATAFLOW"}),d.jsxs("div",{className:"flex items-center gap-1 mt-1.5 select-none text-[9px] bg-zinc-950/30 p-2 border border-zinc-900 rounded-lg justify-around overflow-x-auto text-center font-mono",children:[d.jsx("div",{className:"bg-zinc-900 border border-zinc-800 p-1 px-1.5 rounded text-slate-400",children:"Ingestion"}),d.jsx("span",{className:"text-zinc-600",children:"→"}),d.jsx("div",{className:"bg-zinc-900 border border-zinc-800 p-1 px-1.5 rounded text-slate-400",children:"POS normalise"}),d.jsx("span",{className:"text-[#33ff33]",children:"→"}),d.jsx("span",{className:"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 p-1 px-1.5 rounded animate-pulse",children:"RoBERTa Tensor Matrix"}),d.jsx("span",{className:"text-[#33ff33]",children:"→"}),d.jsx("div",{className:"bg-red-500/20 text-red-300 border border-red-500/30 p-1 px-1.5 rounded",children:"Clinician Alert"})]})]}),d.jsxs("div",{children:[d.jsx("span",{className:Ve.panelHeader,children:"EVALUATION ACCURACY STATISTICS"}),d.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2 mt-1.5 font-mono text-[10px]",children:Ne.results.map((fe,Qe)=>d.jsxs("div",{className:"bg-zinc-950 p-2 border border-zinc-900 rounded-md text-center",children:[d.jsx("div",{className:"text-zinc-500 text-[9px] truncate",title:fe.metric,children:fe.metric}),d.jsx("div",{className:"font-bold text-emerald-400 text-xs mt-0.5",children:fe.score})]},Qe))})]}),d.jsxs("div",{className:"border border-zinc-900 bg-zinc-950/60 p-2.5 rounded-lg",children:[d.jsxs("div",{className:"flex items-center justify-between pointer-events-auto select-none mb-1",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 font-bold block",children:"BIBTEX CITATION RESOURCE"}),d.jsxs("button",{onClick:()=>{navigator.clipboard.writeText(Ne.citation),ot(1200,.05)},className:"bg-zinc-900 text-zinc-400 hover:text-white px-1.5 py-0.5 rounded text-[9.5px] border border-zinc-850 flex items-center gap-0.5 cursor-pointer",children:[d.jsx(zy,{className:"w-2.5 h-2.5"}),d.jsx("span",{children:"Copy Citation"})]})]}),d.jsx("code",{className:"text-[9.5px] text-zinc-400 font-mono select-all block leading-tight",children:Ne.citation})]})]})]}),B==="github"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2c2d3a] pb-2",children:[d.jsxs("div",{children:[d.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"VIRTUALIZED TELEMETRY STREAM"}),d.jsx("h3",{className:"text-sm font-extrabold text-white mt-1",children:"Linguistic & Engineering Pipelines Stream"})]}),d.jsx("span",{className:"text-[11px] text-stone-400 font-mono bg-zinc-950/60 px-2 py-0.5 border border-zinc-850 rounded",children:"STREAK: 142 DAYS"})]}),d.jsxs("div",{children:[d.jsx("span",{className:Ve.panelHeader,children:"CODE INTEL CLASSIFIER CALENDAR (MOCK-GRID)"}),d.jsx("div",{className:"grid grid-cols-12 lg:grid-cols-24 gap-1 mt-1.5 bg-zinc-950 p-3 border border-zinc-900 rounded-lg",children:Array.from({length:48}).map((fe,Qe)=>{const ht=Qe%7===0?"bg-green-500 shadow-[0_0_4px_#22c55e]":Qe%5===0?"bg-green-600":Qe%3===0?"bg-green-800":"bg-zinc-900";return d.jsx("div",{onClick:()=>ot(900+Qe%5*100,.02),className:`w-3.5 h-3.5 rounded-xs transition-colors hover:scale-110 cursor-pointer ${ht}`,title:`Telemetry day ${Qe+1}: Commits verified`},Qe)})})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-[11px]",children:[d.jsxs("div",{className:"bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg",children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2",children:"INTELLIGENT SYSTEMS"}),d.jsxs("div",{className:"space-y-2 font-mono",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-sky-300",children:"typerush-cockpit"}),d.jsx("span",{className:"text-zinc-500 text-[10px]",children:"Stars: 184"})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-sky-300",children:"the-ink-home-portal"}),d.jsx("span",{className:"text-zinc-500 text-[10px]",children:"Stars: 142"})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-sky-300",children:"safeside-predictor"}),d.jsx("span",{className:"text-zinc-500 text-[10px]",children:"Stars: 211"})]})]})]}),d.jsxs("div",{className:"bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg",children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2",children:"LIVE COMPILING ACTIONS FEED"}),d.jsxs("div",{className:"space-y-2 leading-relaxed text-[10.5px]",children:[d.jsxs("div",{className:"flex items-start gap-1",children:[d.jsx("span",{className:"text-emerald-400",children:"●"}),d.jsxs("p",{className:"text-zinc-400",children:["Pushed update to ",d.jsx("code",{className:"text-[#33ff33] font-mono",children:"typerush"}),": Configured Web Audio procedural oscillators & dynamic BPM heartbeats."]})]}),d.jsxs("div",{className:"flex items-start gap-1",children:[d.jsx("span",{className:"text-amber-400",children:"●"}),d.jsx("p",{className:"text-zinc-400",children:"Released version 1.4.2 containing live Audio Synthesis narrated profiles."})]})]})]})]})]}),B==="writing"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-56 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2 select-none",children:[d.jsx("span",{className:Ve.panelHeader,children:"NARRATIVE CHRONICLES"}),d.jsx("div",{className:"space-y-1",children:at.map(fe=>d.jsxs("button",{onClick:()=>{st(fe),ot(800,.03)},className:`w-full text-left p-2 rounded-lg border flex flex-col gap-0.5 transition-all cursor-pointer ${mt.id===fe.id?"bg-amber-500/10 border-amber-500/30 text-amber-300":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"font-extrabold text-[10.5px] line-clamp-1 truncate",children:fe.title}),d.jsxs("div",{className:"flex items-center justify-between text-[8.5px] text-zinc-500 mt-0.5 font-mono",children:[d.jsx("span",{children:fe.category}),d.jsx("span",{children:fe.readTime})]})]},fe.id))}),d.jsxs("div",{className:"p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg mt-auto text-[10px]",children:[d.jsx("span",{className:"font-bold text-amber-300 block mb-0.5",children:"Medium Syndicate"}),d.jsx("p",{className:"text-zinc-500 leading-normal font-sans",children:"Curated articles focus on the overlapping spheres of diagnostic ML architectures and UX."})]})]}),d.jsxs("div",{className:"flex-1 space-y-3 relative",children:[d.jsxs("div",{className:"bg-zinc-950/60 border border-zinc-900 p-3 rounded-lg flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(vf,{className:"w-4 h-4 text-amber-400 animate-pulse"}),d.jsxs("div",{children:[d.jsx("span",{className:"text-[10px] text-zinc-400 uppercase font-mono border-zinc-800 pr-1 select-none",children:"SYSTÉME NARRATOR"}),d.jsx("p",{className:"text-[11px] text-white font-bold select-text",children:"Read aloud with synthesized clinical AI speech?"})]})]}),d.jsx("div",{className:"flex items-center gap-1",children:Le===999?d.jsxs("button",{onClick:ti,className:"bg-red-950 hover:bg-red-900 text-red-300 border border-red-800 px-3 py-1 text-[10px] rounded flex items-center gap-1 cursor-pointer font-bold",children:[d.jsx(_f,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Stop Narration"})]}):d.jsxs("button",{onClick:()=>Zn(mt.content,999),className:"bg-amber-600 hover:bg-amber-500 text-white border border-amber-400 px-3 py-1 text-[10px] rounded flex items-center gap-1 cursor-pointer font-bold",children:[d.jsx(u1,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Play Voiceover"})]})})]}),d.jsxs("div",{className:"border-b border-zinc-850 pb-2 flex items-start justify-between",children:[d.jsxs("div",{children:[d.jsxs("span",{className:"text-[9.5px] bg-amber-500/20 text-amber-300 border border-amber-500/35 px-1.5 py-0.5 rounded uppercase font-mono",children:[mt.category," COLUMN"]}),d.jsx("h3",{className:"text-xs font-black text-white tracking-snug mt-1.5 leading-relaxed select-text",children:mt.title}),d.jsxs("span",{className:"text-[9px] text-zinc-500 font-mono uppercase tracking-wider block mt-1",children:["Written on ",mt.date," · ",mt.readTime]})]}),mt.link&&d.jsx("a",{href:mt.link,target:"_blank",rel:"noopener noreferrer",onClick:()=>ot(900,.02),className:"text-[10px] text-amber-400 hover:underline flex items-center gap-1 font-mono uppercase tracking-wider ml-2",children:d.jsx("span",{children:"Read on Medium ↗"})})]}),d.jsx("div",{className:"text-[10.5px] leading-relaxed text-slate-300 font-sans select-all font-normal space-y-2 mt-2 max-h-[180px] overflow-y-auto pr-1",children:d.jsx("p",{children:mt.content})})]})]}),B==="garden"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsx("span",{className:"bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"Topological Semantics Mapping"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Interconnected Semantic Knowledge Field"})]}),d.jsxs("div",{children:[d.jsx("span",{className:Ve.panelHeader,children:"INTERACTIVE CONCEPT NODES"}),d.jsxs("div",{className:"relative h-44 bg-zinc-950 p-2 border border-zinc-900 rounded-lg overflow-hidden flex items-center justify-center",children:[d.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-35"}),d.jsx("div",{className:"relative w-full h-full",children:nn.gardenNodes.map((fe,Qe)=>{const ht=Qe*11%80+10,pt=Qe*7%65+15,Xe=$e===fe.id;return d.jsx("button",{onMouseEnter:()=>{bt(fe.id),ot(1100,.01)},onMouseLeave:()=>bt(null),style:{left:`${ht}%`,top:`${pt}%`},className:`absolute -translate-x-1/2 -translate-y-1/2 p-1.5 py-0.5 rounded border text-[9px] transition-all cursor-pointer font-mono ${Xe?"bg-[#00ffcc] text-black border-[#00ffcc] scale-110 shadow-[0_0_8px_#00ffcc] z-50":"bg-zinc-900/60 border-zinc-800 text-zinc-400"}`,children:fe.label},fe.id)})})]})]}),d.jsxs("div",{className:"bg-zinc-950 p-3 border border-zinc-900 rounded-lg min-h-[50px] select-text",children:[d.jsx("span",{className:"font-bold text-cyan-300 block text-[9.5px] uppercase font-mono tracking-widest mb-1",children:"Active Node Spectrum Details:"}),$e?d.jsxs("p",{className:"text-[10px] text-zinc-400 leading-normal font-sans",children:[$e==="nlp"&&"Clinical NLP: Integrates semantic transformers explicitly tuned on Reddit discourse corpus mapping mental distress.",$e==="transformers"&&"Transformers: Multi-attention neural architectures providing topological weights maps.",$e==="depression"&&"Depression Dialectics: Analysis of negation markers and cognitive distortions.",$e==="ethics"&&"Research Ethics: Strict patient confidentiality controls verified against strict healthcare safety parameters.",$e==="saas"&&"AI SaaS: Low-latency scale-to-zero container workloads deployed across GCP Kubernetes mesh integrations.",!["nlp","transformers","depression","ethics","saas"].includes($e)&&`Semantic connection active on ${$e}. High performance clustering coefficient evaluated.`]}):d.jsx("p",{className:"text-[10px] text-zinc-500 font-sans",children:"Hover on any interactive concept node above to evaluate corresponding diagnostic dependencies..."})]})]}),B==="resume"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2c2d3a] pb-2",children:[d.jsxs("div",{children:[d.jsx("span",{className:"bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"VIRTUAL RESUME ARCHITECT"}),d.jsx("h3",{className:"text-sm font-extrabold text-white mt-1",children:"Interactively Tailored Professional Profile"})]}),d.jsxs("button",{onClick:()=>{window.print(),ot(1100,.05)},className:"bg-zinc-950 text-zinc-300 border border-zinc-800 hover:text-white px-2.5 py-1 rounded text-[10px] flex items-center gap-1 cursor-pointer font-bold mt-2 sm:mt-0",children:[d.jsx(Zh,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Print Resume Draft"})]})]}),d.jsxs("div",{className:"bg-zinc-950 p-2.5 border border-zinc-900 rounded-lg select-none",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 font-bold block mb-1",children:"CONFIGURE AUDIENCE TAILORING SYSTEM:"}),d.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1.5 text-center",children:[{id:"recruiter",label:"HR / Recruiter",text:"Stresses full-stack frameworks, production scale parameters, and GCP deployment latency F1 scores."},{id:"investor",label:"Venture Capital",text:"Emphasizes SaaS monetization indices, model scaling cost reductions, and architectural automation."},{id:"founder",label:"Startups / Founder",text:"Highlights rapid zero-to-one product engineering, Docker stacks, and low-latency API integration."},{id:"researcher",label:"Clinical Academics",text:"Focuses on linguistic models, peer-reviewed indices, topological sentiment classification levels, and statistical dataset weights."}].map(fe=>d.jsxs("button",{onClick:()=>{ln(fe.id),ot(800,.02)},className:`p-2 rounded-lg border text-[10px] text-left flex flex-col gap-0.5 capitalize transition-all cursor-pointer ${Dt===fe.id?"bg-pink-500/10 border-pink-500/30 text-pink-300 font-bold":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsxs("span",{children:["👤 ",fe.label]}),d.jsx("span",{className:"text-[8px] opacity-70 font-normal leading-normal",children:fe.text})]},fe.id))})]}),d.jsxs("div",{className:"bg-zinc-950 p-4 border border-zinc-900 rounded-lg text-[10.5px] leading-relaxed max-h-[220px] overflow-y-auto font-sans text-slate-300 pr-1 select-text",children:[d.jsxs("div",{className:"border-b border-zinc-850 pb-2 mb-2 text-center select-text",children:[d.jsx("h4",{className:"text-xs font-black text-white uppercase tracking-wider",children:nn.name}),d.jsx("span",{className:"text-[9px] text-[#00ffcc] font-mono tracking-widest",children:nn.title})]}),Dt==="recruiter"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#00ffcc] block text-[9.5px] uppercase font-mono",children:"EXECUTIVE SUMMARY (RECRUITER ALIGNED)"}),d.jsx("p",{children:"Result-oriented AI engineer possessing over 6 years of contiguous development building fast-response classification models and robust, horizontally-scaled TypeScript SaaS applications with absolute type-safety protocols."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#00ffcc] block text-[9.5px] uppercase font-mono",children:"CORE TECHNICAL SPECIFICATIONS"}),d.jsx("p",{children:"React/Next.js, Tailwind v4, Node.js, Go microservices, Python PyTorch matrix operations, PostgreSQL schemas, Redis caches, and Docker container orchestration."})]})]}),Dt==="investor"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#ebd8fb] block text-[9.5px] uppercase font-mono",children:"STRATEGIC SYNOPSIS (VENTURE CAPITAL ALIGNED)"}),d.jsx("p",{children:"Product developer specializing in compiling scalable business models. Highly skilled at engineering zero-cold-start ML SaaS containers, driving serverless scale-to-zero GCP costs, and structuring predictive customer diagnostics panels decreasing friction indices by up to 42%."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-[#ebd8fb] block text-[9.5px] uppercase font-mono",children:"PROVEN MONETIZATION HIGHLIGHTS"}),d.jsx("p",{children:"Built SafeSide prediction engines processing live football simulation data in real-time, executing Poisson risk evaluation algorithms with 0.88 F1 metric scores."})]})]}),Dt==="founder"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-amber-300 block text-[9.5px] uppercase font-mono",children:"PRODUCT FOUNDRY PROTOCOL (FOUNDER ALIGNED)"}),d.jsx("p",{children:"High-tempo zero-to-one software architect constructing high-performance platforms immediately on demand. Combines outstanding visual UI craftsmanship with decoupled scalable database designs, providing functional, production-ready systems without overhead."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-amber-300 block text-[9.5px] uppercase font-mono",children:"CORE FLUIDITY TOOLS"}),d.jsx("p",{children:"TypeScript endpoints, instant responsive Tailwind designs, container networks, vector caches, and real-time bimodal communication interfaces."})]})]}),Dt==="researcher"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-emerald-300 block text-[9.5px] uppercase font-mono",children:"RESEARCH STATEMENT (ACADEMIC ALIGNED)"}),d.jsx("p",{children:"Quantitative researcher researching the diagnostic intersection of linguistics analytics and mental wellness forums. Formulating custom bidirectional classification weights metrics that leverage fine-grained RoBERTa embeddings to map emotional distress on social media platforms."})]}),d.jsxs("div",{children:[d.jsx("span",{className:"font-extrabold text-emerald-300 block text-[9.5px] uppercase font-mono",children:"ACADEMIC RESEARCH TRACK RECORD"}),d.jsx("p",{children:"First-named author on clinical papers (RoBERTa depression classifier F1 accuracy of 0.914 against traditional baselines of 0.781). Outlined topological multidimensional sentiment models."})]})]})]})]}),B==="timeline"&&d.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[d.jsxs("div",{className:"w-full md:w-52 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2 select-none",children:[d.jsx("span",{className:Ve.panelHeader,children:"CHRONOLOGY INDEX"}),d.jsx("div",{className:"space-y-1.5",children:nn.timeline.map(fe=>d.jsxs("button",{onClick:()=>{Rt(fe),ot(800,.03)},className:`w-full text-left p-2 rounded-lg border flex items-center justify-between transition-all cursor-pointer ${ct.year===fe.year?"bg-sky-500/10 border-sky-500/30 text-sky-300 font-bold":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[d.jsx("span",{className:"text-[10.5px]",children:fe.company}),d.jsx("span",{className:"bg-zinc-900 px-1.5 py-0.5 rounded text-[8.5px] font-mono",children:fe.year})]},fe.year))})]}),d.jsxs("div",{className:"flex-1 space-y-3",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsxs("span",{className:"bg-sky-500/10 text-sky-300 border border-sky-500/20 px-1 py-0.5 rounded text-[9.5px] font-mono",children:["YEAR: ",ct.year," EXP"]}),d.jsx("h4",{className:"text-xs font-black text-white mt-1.5",children:ct.title}),d.jsxs("span",{className:"text-[9.5px] text-zinc-500 font-sans block",children:[ct.company," · Role: ",ct.role]})]}),d.jsx("p",{className:"text-[11px] leading-relaxed text-zinc-400 font-sans select-text",children:ct.description}),d.jsxs("div",{className:"space-y-2 select-text",children:[d.jsx("span",{className:Ve.panelHeader,children:"HIGHLIGHT ACCOMPLISHMENTS"}),d.jsx("ul",{className:"space-y-1.5 pl-3 list-disc text-[10.5px] text-slate-300 leading-normal",children:ct.achievements.map((fe,Qe)=>d.jsx("li",{className:"marker:text-sky-400",children:fe},Qe))})]}),d.jsxs("div",{className:"bg-zinc-950/40 p-2.5 border border-zinc-900 rounded-lg mt-3",children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[9.5px] uppercase font-mono tracking-widest mb-1.5",children:"INTEGRATED TECH GRID"}),d.jsx("div",{className:"flex flex-wrap gap-1 select-none",children:ct.technologies.map(fe=>d.jsx("span",{className:"bg-zinc-900 text-slate-400 border border-zinc-800 rounded px-1.5 font-mono text-[9px]",children:fe},fe))})]})]})]}),B==="profTimeline"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsx("span",{className:"bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"PRO TIMELINE NODE"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Professional Experience & Verification Chronology"})]}),d.jsxs("div",{className:"relative pl-6 md:pl-0 pt-4",children:[d.jsx("div",{className:"absolute left-[13px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/60 via-cyan-500/20 to-transparent -translate-x-1/2 pointer-events-none z-0"}),d.jsx("div",{ref:ne,className:"absolute left-[13px] md:left-1/2 top-0 bottom-16 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-600 -translate-x-1/2 origin-top pointer-events-none z-10",style:{transform:"scaleY(0)",transformOrigin:"top"}}),d.jsx("div",{className:"space-y-10 relative z-10",children:nn.professionalTimeline.map((fe,Qe)=>{const ht=Qe%2===0;return d.jsxs("div",{className:`flex flex-col md:flex-row items-start ${ht?"md:flex-row-reverse":""} relative`,children:[d.jsx("div",{className:"absolute left-[13px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20",children:d.jsx("div",{className:"w-8 h-8 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-md",children:d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500"})})}),d.jsx("div",{className:"hidden md:block w-1/2"}),d.jsx("div",{className:"w-full md:w-[46%] pl-8 md:pl-0",children:d.jsxs("div",{className:"p-5 rounded-xl bg-zinc-900/30 border border-zinc-900/80 relative group hover:border-zinc-800 transition-all duration-300",children:[d.jsx("div",{className:"absolute top-0 right-0 w-12 h-12 bg-indigo-500/5 blur-lg pointer-events-none group-hover:bg-cyan-500/10 transition-colors"}),d.jsxs("div",{className:"flex flex-wrap justify-between items-start gap-2 mb-4",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-0.5",children:fe.year}),d.jsx("h4",{className:"text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight",children:fe.title}),d.jsx("span",{className:"text-[9px] text-zinc-550 block font-mono mt-0.5",children:fe.company})]}),d.jsx("span",{className:`px-2 py-0.5 rounded-full text-[8.5px] font-mono border font-medium uppercase ${fe.badgeColor==="emerald"?"bg-emerald-500/10 text-emerald-400 border-emerald-500/30":fe.badgeColor==="indigo"?"bg-indigo-500/10 text-indigo-400 border-indigo-500/30":fe.badgeColor==="pink"?"bg-pink-500/10 text-pink-400 border-pink-500/30":"bg-amber-500/10 text-amber-400 border-amber-500/30"}`,children:fe.company})]}),d.jsx("ul",{className:"space-y-2 mb-4 text-[10.5px] text-zinc-400",children:fe.achievements.map((pt,Xe)=>d.jsxs("li",{className:"flex items-start leading-relaxed text-zinc-400 select-text",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400/80 mt-1.5 mr-2 shrink-0"}),d.jsx("span",{children:pt})]},Xe))}),d.jsx("div",{className:"flex flex-wrap gap-1 pt-3 border-t border-zinc-900/60 select-none",children:fe.technologies.map(pt=>d.jsx("span",{className:"px-1.5 py-0.5 rounded text-[8px] font-mono bg-zinc-950/80 text-zinc-400 border border-zinc-900",children:pt},pt))})]})})]},Qe)})})]})]}),B==="skills"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2 flex-col gap-0.5",children:[d.jsx("span",{className:"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"Observatory Deck"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Linguistic, Structural & Compute Matrices"})]}),d.jsx("div",{className:"flex items-center gap-2 bg-zinc-950/60 p-1 border border-zinc-900 rounded-lg overflow-x-auto scrollbar-none select-none",children:["all","AI/ML","Frontend","Backend","Research","Systems"].map(fe=>d.jsx("button",{onClick:()=>{Zt(fe),ot(800,.02)},className:`text-[9.5px] px-2.5 py-1 rounded capitalize cursor-pointer transition-colors ${ut===fe?"bg-indigo-600 font-bold text-white shadow-[0_0_8px_#4f46e5]":"bg-transparent text-zinc-500 hover:text-zinc-300"}`,children:fe==="all"?"All Matrices":fe},fe))}),d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[220px] overflow-y-auto p-1 scrollbar-none",children:$.map(fe=>{const Qe=fe.weight===5?"border-sky-500/50 bg-sky-500/5 text-sky-200":fe.weight===4?"border-indigo-500/30 bg-indigo-500/5 text-indigo-200":"border-zinc-800 bg-zinc-900/40 text-zinc-400";return d.jsxs("div",{onClick:()=>ot(700+fe.weight*100,.03),className:`p-2.5 rounded-lg border text-center cursor-pointer transition-all hover:scale-103 select-none flex flex-col items-center justify-center gap-1 relative overflow-hidden ${Qe}`,children:[d.jsx("span",{className:"text-[10.5px] font-bold md:tracking-tight font-sans text-stone-100",children:fe.name}),d.jsx("span",{className:"text-[8px] opacity-75 uppercase tracking-widest font-mono text-zinc-400",children:fe.category}),d.jsx("div",{className:"flex items-center gap-0.5 mt-1",children:Array.from({length:5}).map((ht,pt)=>d.jsx("span",{className:`w-1 h-1 rounded-full ${pt<fe.weight?"bg-indigo-400 shadow-[0_0_4px_#818cf8]":"bg-zinc-800"}`},pt))})]},fe.name)})})]}),B==="brief"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[d.jsx("span",{className:"bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"INTELLIGENT INTAKE PROCESS"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Initiate Feasibility Evaluation Strategy"})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[d.jsxs("div",{className:"space-y-2.5",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"VENTURE DOMAIN:"}),d.jsxs("select",{value:se.projectType,onChange:fe=>He({...se,projectType:fe.target.value}),className:"w-full bg-black/60 border border-zinc-800 rounded px-2.5 py-1.5 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 cursor-pointer",children:[d.jsx("option",{children:"AI Engineering & LLMs"}),d.jsx("option",{children:"Clinical NLP & Mental State analysis"}),d.jsx("option",{children:"SaaS Automation Development"}),d.jsx("option",{children:"Interactive UI/UX Projects"})]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"FINANCIAL BOUNDS:"}),d.jsxs("select",{value:se.budget,onChange:fe=>He({...se,budget:fe.target.value}),className:"w-full bg-black/60 border border-zinc-800 rounded px-2 text-slate-100 text-[10.5px] py-1.5 outline-hidden cursor-pointer",children:[d.jsx("option",{children:"$5k - $10k"}),d.jsx("option",{children:"$10k - $25k"}),d.jsx("option",{children:"$25k+"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"TIMELINE PROFILE:"}),d.jsxs("select",{value:se.timeline,onChange:fe=>He({...se,timeline:fe.target.value}),className:"w-full bg-black/60 border border-zinc-800 rounded px-2 text-slate-100 text-[10.5px] py-1.5 outline-hidden cursor-pointer",children:[d.jsx("option",{children:"1-3 Months"}),d.jsx("option",{children:"3 Months-half year"}),d.jsx("option",{children:"Complex Multiphase"})]})]})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"TRANSMISSION EMAIL:"}),d.jsx("input",{type:"email",value:se.email,onChange:fe=>He({...se,email:fe.target.value}),placeholder:"e.g. name@domain.com",className:"w-full bg-black/60 border border-zinc-800 rounded px-2.5 py-1.5 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 placeholder-zinc-700 font-mono"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"OPERATIONAL DIRECTIVES:"}),d.jsx("input",{type:"text",value:se.comments,onChange:fe=>He({...se,comments:fe.target.value}),placeholder:"e.g. Custom requirements, NDA, etc.",className:"w-full bg-black/60 border border-zinc-800 rounded px-2.5 py-1.5 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 placeholder-zinc-700 font-mono"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"STRATEGIC GOALS / OBJECTIVES:"}),d.jsx("textarea",{value:se.goals,onChange:fe=>He({...se,goals:fe.target.value}),rows:3,placeholder:"Detail parameters (e.g. evaluating clinical texts via custom token systems, building offline CRDT platforms)",className:"w-full bg-black/60 border border-zinc-800 rounded p-2 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 placeholder-zinc-650"})]}),d.jsx("button",{onClick:Yi,disabled:!se.goals.trim()||Pe,className:"w-full bg-rose-600 hover:bg-rose-500 text-white border border-rose-400 py-2 rounded-lg text-[10.5px] cursor-pointer font-bold tracking-tight shadow-lg shadow-rose-950/50 flex items-center justify-center gap-1.5",children:Pe?d.jsxs(d.Fragment,{children:[d.jsx(pc,{className:"w-3.5 h-3.5 animate-spin"}),d.jsx("span",{children:"Deconstruct parameters algorithms..."})]}):d.jsxs(d.Fragment,{children:[d.jsx(D1,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Evaluate Feasibility Strategy"})]})})]}),d.jsxs("div",{className:"bg-zinc-950/40 border border-zinc-900 rounded-lg p-3.5 flex flex-col justify-between min-h-[220px]",children:[d.jsxs("div",{children:[d.jsx("span",{className:"font-bold text-rose-300 block text-[9.5px] uppercase font-mono tracking-widest border-b border-zinc-850 pb-1.5 mb-2.5",children:"ASSESSMENT & ARCHITECTURE STRATEGY:"}),Ge?d.jsx("p",{className:"text-[11px] text-slate-300 leading-relaxed font-sans select-text",children:Ge}):d.jsx("div",{className:"text-zinc-600 font-sans text-[10.5px] italic text-center py-10",children:"Formulate objectives on LHS & execute evaluation to render Gemini predictive architecture recommendations..."})]}),Ge&&d.jsxs("div",{className:"border-t border-zinc-900 pt-2 text-[10px] flex items-center justify-between mt-4",children:[d.jsxs("span",{className:"text-zinc-500 flex items-center gap-1 font-mono",children:[d.jsx(Wc,{className:"w-3 h-3 text-emerald-400"})," API SECURE Rails"]}),d.jsx("button",{onClick:gn,disabled:rt||!se.email.trim(),className:"bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-850 disabled:text-zinc-500 disabled:border-zinc-800 text-white font-bold p-1 px-3 border border-emerald-400 disabled:border-transparent rounded text-[9.5px] cursor-pointer flex items-center gap-1.5",children:rt?d.jsxs(d.Fragment,{children:[d.jsx(gv,{className:"w-3 h-3 animate-spin"}),d.jsx("span",{children:"Transmitting..."})]}):d.jsx("span",{children:"Dispatch Brief"})})]})]})]})]}),B==="whiteboard"&&d.jsx(Q3,{theme:w,triggerSound:ot}),B==="builds"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2 flex-col gap-0.5",children:[d.jsx("span",{className:"bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono",children:"TELEMETRY DIAGNOSTICS"}),d.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Continuous Development & Deployment Releases"})]}),d.jsx("div",{className:"space-y-3.5 max-h-[300px] overflow-y-auto pr-1",children:nn.buildLogs.map(fe=>d.jsxs("div",{className:"bg-zinc-950/40 p-3.5 border border-[#2d2f3d] rounded-lg space-y-2 select-text",children:[d.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-850 pb-1.5",children:[d.jsxs("div",{className:"flex items-center gap-1.5 text-white font-bold",children:[d.jsx("span",{className:"text-teal-400 font-mono text-[9.5px] p-0.5 px-1.5 border border-teal-500/20 bg-teal-500/5 rounded",children:fe.version}),d.jsx("span",{className:"text-[11px] font-sans truncate",children:fe.title})]}),d.jsx("span",{className:"text-[9.5px] text-zinc-500 font-mono",children:fe.date})]}),d.jsx("p",{className:"text-[10.5px] text-slate-400 leading-relaxed font-sans",children:fe.description}),d.jsxs("div",{children:[d.jsx("span",{className:"font-bold text-zinc-300 block text-[9px] uppercase font-mono tracking-widest mb-1",children:"TASKS DEPLOYED"}),d.jsx("ul",{className:"space-y-1 pl-3 text-[10px] text-zinc-400 list-disc leading-normal font-sans",children:fe.tasksCompleted.map((Qe,ht)=>d.jsx("li",{children:Qe},ht))})]}),d.jsxs("div",{className:"border-t border-zinc-900 pt-1.5",children:[d.jsx("span",{className:"font-bold text-teal-300 block text-[9px] uppercase font-mono tracking-widest mb-1",children:"METRIC SHIFTS DETECTED"}),d.jsx("div",{className:"flex flex-wrap gap-2 text-[10px] font-mono select-none",children:fe.metricsChanged.map((Qe,ht)=>d.jsxs("span",{className:"bg-zinc-90 w-full flex items-center justify-between p-1.5 rounded border border-zinc-900 text-stone-300",children:[d.jsxs("span",{children:[Qe.metric,":"]}),d.jsxs("span",{className:"text-teal-400 font-bold",children:[Qe.before," ➔ ",Qe.after]})]},ht))})]})]},fe.id))})]})]})]},B)})]}),d.jsxs("footer",{className:"h-16 bg-black/45 backdrop-blur-2xl border-t border-zinc-800/40 flex items-center justify-center relative select-none",children:[d.jsx("div",{className:"flex items-center gap-2 px-4 py-1.5 bg-zinc-950/65 border border-zinc-800/60 rounded-2xl shadow-xl max-w-[95vw] overflow-x-auto scrollbar-none select-none",children:oe.map(B=>{const ue=B.icon,xe=W.includes(B.id),Ue=ve===B.id&&!Z.includes(B.id);return d.jsxs("button",{onClick:()=>{xe?Ue?Ii(B.id):(q(B.id),me(qe=>qe.filter(Ke=>Ke!==B.id))):Rn(B.id)},className:`p-2 rounded-xl transition-all relative cursor-pointer ${B.color} transform hover:scale-129 active:scale-95 duration-100`,title:B.label,children:[d.jsx(ue,{className:"w-5 h-5"}),xe&&d.jsx("span",{className:"absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_5px_#38bdf8]"}),Ue&&d.jsx("span",{className:"absolute inset-x-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#00ffcc] to-purple-500 rounded filter blur-xs"})]},B.id)})}),d.jsx("div",{className:"absolute right-4 hidden md:flex items-center gap-1.5",children:d.jsx("button",{type:"button",onClick:()=>{Nt(!0),ot(800,.03)},className:"p-1 px-3 text-slate-400 hover:text-white rounded border border-zinc-800/80 hover:bg-zinc-950 text-[10px] font-mono cursor-pointer",children:"Terminal Commands (CMD+K)"})})]}),Q&&d.jsx("div",{className:"fixed inset-0 bg-[#020204]/85 z-[1000] flex items-start justify-center pt-[15vh] px-4 font-normal",children:d.jsxs("div",{className:"w-full max-w-lg bg-[#0e0f17] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[60vh] select-none animate-scale-up",children:[d.jsxs("div",{className:"flex items-center gap-3 p-3 bg-zinc-950 border-b border-zinc-850",children:[d.jsx(lx,{className:"w-4 h-4 text-sky-400"}),d.jsx("input",{type:"text",value:gt,onChange:B=>jt(B.target.value),placeholder:"Search projects, research papers, tech stack node keys, commands...",className:"flex-1 bg-transparent text-slate-105 font-sans outline-hidden border-none text-xs text-white",autoFocus:!0}),d.jsx("button",{onClick:()=>{Nt(!1),ot(400,.02)},className:"p-1 text-zinc-500 hover:text-white rounded",children:d.jsx(ux,{className:"w-4 h-4"})})]}),d.jsx("div",{className:"flex-1 overflow-y-auto p-2 scrollbar-none max-h-[300px]",children:gt.trim().length===0?d.jsxs("div",{className:"space-y-2",children:[d.jsx("div",{className:"text-[10px] text-zinc-500 font-bold px-2 block uppercase tracking-wide",children:"SYSTEM DIAGNOSTIC CORES:"}),d.jsx("button",{onClick:()=>{_s(),Nt(!1)},className:"w-full text-left p-2 hover:bg-zinc-900 rounded-lg text-emerald-300 font-bold flex items-center gap-2 cursor-pointer text-[10.5px]",children:"🚀 Trigger system AI Guided Tour with synthesized Voice narrations"}),d.jsx("button",{onClick:()=>{Rn("brief"),Nt(!1)},className:"w-full text-left p-2 hover:bg-zinc-900 rounded-lg text-indigo-300 font-bold flex items-center gap-2 cursor-pointer text-[10.5px]",children:"💡 Open Mission Intake Consultation Workspace"}),d.jsx("div",{className:"text-[10px] text-zinc-550 italic font-sans px-2",children:"Enter queries parsing index models above to match academic research text parameters..."})]}):d.jsxs("div",{className:"space-y-1",children:[d.jsxs("div",{className:"text-[10px] text-zinc-500 px-2 font-bold uppercase tracking-widest border-b border-zinc-900 pb-1 mb-1.5",children:["MATCHED WORKSPACE PARAMS (",re.length,")"]}),re.length>0?re.map((B,ue)=>d.jsxs("button",{onClick:B.action,className:"w-full text-left p-3 hover:bg-zinc-900 rounded-lg flex items-center justify-between transition-colors border border-transparent hover:border-zinc-800 cursor-pointer text-[11px]",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-[9px] bg-sky-500/10 text-sky-400 border border-sky-500/20 px-1 py-0.5 rounded font-mono mr-2 uppercase",children:B.type}),d.jsx("span",{className:"text-white font-bold font-sans",children:B.title})]}),d.jsx("span",{className:"text-[10px] text-zinc-500",children:B.subtitle})]},ue)):d.jsx("div",{className:"text-center text-zinc-500 text-[11px] py-6 font-sans",children:"No matching intelligence indices found. Retry key parameters."})]})}),d.jsxs("div",{className:"p-2.5 bg-zinc-950 border-t border-zinc-850 flex items-center justify-between text-[10px] text-zinc-500",children:[d.jsx("span",{className:"font-mono",children:"SEARCH GRID INTEGRATION READY"}),d.jsx("span",{children:"ESC TO EXIT"})]})]})})]})})}fy.createRoot(document.getElementById("root")).render(d.jsx(Oe.StrictMode,{children:d.jsx(tA,{})}));
