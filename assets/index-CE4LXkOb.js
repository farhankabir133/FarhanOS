(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var od={exports:{}},Fo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function Yb(){if(Gg)return Fo;Gg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Fo.Fragment=t,Fo.jsx=i,Fo.jsxs=i,Fo}var kg;function Zb(){return kg||(kg=1,od.exports=Yb()),od.exports}var h=Zb(),ld={exports:{}},gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function Kb(){if(Vg)return gt;Vg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),v=Symbol.iterator;function E(C){return C===null||typeof C!="object"?null:(C=v&&C[v]||C["@@iterator"],typeof C=="function"?C:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,M={};function y(C,j,fe){this.props=C,this.context=j,this.refs=M,this.updater=fe||A}y.prototype.isReactComponent={},y.prototype.setState=function(C,j){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,j,"setState")},y.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function N(){}N.prototype=y.prototype;function I(C,j,fe){this.props=C,this.context=j,this.refs=M,this.updater=fe||A}var L=I.prototype=new N;L.constructor=I,D(L,y.prototype),L.isPureReactComponent=!0;var X=Array.isArray;function P(){}var B={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function F(C,j,fe){var Ee=fe.ref;return{$$typeof:o,type:C,key:j,ref:Ee!==void 0?Ee:null,props:fe}}function Q(C,j){return F(C.type,j,C.props)}function G(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function K(C){var j={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(fe){return j[fe]})}var ue=/\/+/g;function he(C,j){return typeof C=="object"&&C!==null&&C.key!=null?K(""+C.key):j.toString(36)}function W(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(P,P):(C.status="pending",C.then(function(j){C.status==="pending"&&(C.status="fulfilled",C.value=j)},function(j){C.status==="pending"&&(C.status="rejected",C.reason=j)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function z(C,j,fe,Ee,we){var ee=typeof C;(ee==="undefined"||ee==="boolean")&&(C=null);var Se=!1;if(C===null)Se=!0;else switch(ee){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(C.$$typeof){case o:case t:Se=!0;break;case S:return Se=C._init,z(Se(C._payload),j,fe,Ee,we)}}if(Se)return we=we(C),Se=Ee===""?"."+he(C,0):Ee,X(we)?(fe="",Se!=null&&(fe=Se.replace(ue,"$&/")+"/"),z(we,j,fe,"",function(Qe){return Qe})):we!=null&&(G(we)&&(we=Q(we,fe+(we.key==null||C&&C.key===we.key?"":(""+we.key).replace(ue,"$&/")+"/")+Se)),j.push(we)),1;Se=0;var Me=Ee===""?".":Ee+":";if(X(C))for(var He=0;He<C.length;He++)Ee=C[He],ee=Me+he(Ee,He),Se+=z(Ee,j,fe,ee,we);else if(He=E(C),typeof He=="function")for(C=He.call(C),He=0;!(Ee=C.next()).done;)Ee=Ee.value,ee=Me+he(Ee,He++),Se+=z(Ee,j,fe,ee,we);else if(ee==="object"){if(typeof C.then=="function")return z(W(C),j,fe,Ee,we);throw j=String(C),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return Se}function H(C,j,fe){if(C==null)return C;var Ee=[],we=0;return z(C,Ee,"","",function(ee){return j.call(fe,ee,we++)}),Ee}function le(C){if(C._status===-1){var j=C._result;j=j(),j.then(function(fe){(C._status===0||C._status===-1)&&(C._status=1,C._result=fe)},function(fe){(C._status===0||C._status===-1)&&(C._status=2,C._result=fe)}),C._status===-1&&(C._status=0,C._result=j)}if(C._status===1)return C._result.default;throw C._result}var ge=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},ae={map:H,forEach:function(C,j,fe){H(C,function(){j.apply(this,arguments)},fe)},count:function(C){var j=0;return H(C,function(){j++}),j},toArray:function(C){return H(C,function(j){return j})||[]},only:function(C){if(!G(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return gt.Activity=b,gt.Children=ae,gt.Component=y,gt.Fragment=i,gt.Profiler=l,gt.PureComponent=I,gt.StrictMode=s,gt.Suspense=g,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,gt.__COMPILER_RUNTIME={__proto__:null,c:function(C){return B.H.useMemoCache(C)}},gt.cache=function(C){return function(){return C.apply(null,arguments)}},gt.cacheSignal=function(){return null},gt.cloneElement=function(C,j,fe){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var Ee=D({},C.props),we=C.key;if(j!=null)for(ee in j.key!==void 0&&(we=""+j.key),j)!w.call(j,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&j.ref===void 0||(Ee[ee]=j[ee]);var ee=arguments.length-2;if(ee===1)Ee.children=fe;else if(1<ee){for(var Se=Array(ee),Me=0;Me<ee;Me++)Se[Me]=arguments[Me+2];Ee.children=Se}return F(C.type,we,Ee)},gt.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:c,_context:C},C},gt.createElement=function(C,j,fe){var Ee,we={},ee=null;if(j!=null)for(Ee in j.key!==void 0&&(ee=""+j.key),j)w.call(j,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(we[Ee]=j[Ee]);var Se=arguments.length-2;if(Se===1)we.children=fe;else if(1<Se){for(var Me=Array(Se),He=0;He<Se;He++)Me[He]=arguments[He+2];we.children=Me}if(C&&C.defaultProps)for(Ee in Se=C.defaultProps,Se)we[Ee]===void 0&&(we[Ee]=Se[Ee]);return F(C,ee,we)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(C){return{$$typeof:m,render:C}},gt.isValidElement=G,gt.lazy=function(C){return{$$typeof:S,_payload:{_status:-1,_result:C},_init:le}},gt.memo=function(C,j){return{$$typeof:p,type:C,compare:j===void 0?null:j}},gt.startTransition=function(C){var j=B.T,fe={};B.T=fe;try{var Ee=C(),we=B.S;we!==null&&we(fe,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(P,ge)}catch(ee){ge(ee)}finally{j!==null&&fe.types!==null&&(j.types=fe.types),B.T=j}},gt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},gt.use=function(C){return B.H.use(C)},gt.useActionState=function(C,j,fe){return B.H.useActionState(C,j,fe)},gt.useCallback=function(C,j){return B.H.useCallback(C,j)},gt.useContext=function(C){return B.H.useContext(C)},gt.useDebugValue=function(){},gt.useDeferredValue=function(C,j){return B.H.useDeferredValue(C,j)},gt.useEffect=function(C,j){return B.H.useEffect(C,j)},gt.useEffectEvent=function(C){return B.H.useEffectEvent(C)},gt.useId=function(){return B.H.useId()},gt.useImperativeHandle=function(C,j,fe){return B.H.useImperativeHandle(C,j,fe)},gt.useInsertionEffect=function(C,j){return B.H.useInsertionEffect(C,j)},gt.useLayoutEffect=function(C,j){return B.H.useLayoutEffect(C,j)},gt.useMemo=function(C,j){return B.H.useMemo(C,j)},gt.useOptimistic=function(C,j){return B.H.useOptimistic(C,j)},gt.useReducer=function(C,j,fe){return B.H.useReducer(C,j,fe)},gt.useRef=function(C){return B.H.useRef(C)},gt.useState=function(C){return B.H.useState(C)},gt.useSyncExternalStore=function(C,j,fe){return B.H.useSyncExternalStore(C,j,fe)},gt.useTransition=function(){return B.H.useTransition()},gt.version="19.2.7",gt}var jg;function jh(){return jg||(jg=1,ld.exports=Kb()),ld.exports}var je=jh(),cd={exports:{}},Bo={},ud={exports:{}},fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function Qb(){return Xg||(Xg=1,(function(o){function t(z,H){var le=z.length;z.push(H);e:for(;0<le;){var ge=le-1>>>1,ae=z[ge];if(0<l(ae,H))z[ge]=H,z[le]=ae,le=ge;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var H=z[0],le=z.pop();if(le!==H){z[0]=le;e:for(var ge=0,ae=z.length,C=ae>>>1;ge<C;){var j=2*(ge+1)-1,fe=z[j],Ee=j+1,we=z[Ee];if(0>l(fe,le))Ee<ae&&0>l(we,fe)?(z[ge]=we,z[Ee]=le,ge=Ee):(z[ge]=fe,z[j]=le,ge=j);else if(Ee<ae&&0>l(we,le))z[ge]=we,z[Ee]=le,ge=Ee;else break e}}return H}function l(z,H){var le=z.sortIndex-H.sortIndex;return le!==0?le:z.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,m=d.now();o.unstable_now=function(){return d.now()-m}}var g=[],p=[],S=1,b=null,v=3,E=!1,A=!1,D=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function L(z){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=z)s(p),H.sortIndex=H.expirationTime,t(g,H);else break;H=i(p)}}function X(z){if(D=!1,L(z),!A)if(i(g)!==null)A=!0,P||(P=!0,K());else{var H=i(p);H!==null&&W(X,H.startTime-z)}}var P=!1,B=-1,w=5,F=-1;function Q(){return M?!0:!(o.unstable_now()-F<w)}function G(){if(M=!1,P){var z=o.unstable_now();F=z;var H=!0;try{e:{A=!1,D&&(D=!1,N(B),B=-1),E=!0;var le=v;try{t:{for(L(z),b=i(g);b!==null&&!(b.expirationTime>z&&Q());){var ge=b.callback;if(typeof ge=="function"){b.callback=null,v=b.priorityLevel;var ae=ge(b.expirationTime<=z);if(z=o.unstable_now(),typeof ae=="function"){b.callback=ae,L(z),H=!0;break t}b===i(g)&&s(g),L(z)}else s(g);b=i(g)}if(b!==null)H=!0;else{var C=i(p);C!==null&&W(X,C.startTime-z),H=!1}}break e}finally{b=null,v=le,E=!1}H=void 0}}finally{H?K():P=!1}}}var K;if(typeof I=="function")K=function(){I(G)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=G,K=function(){he.postMessage(null)}}else K=function(){y(G,0)};function W(z,H){B=y(function(){z(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(z){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var le=v;v=H;try{return z()}finally{v=le}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var le=v;v=z;try{return H()}finally{v=le}},o.unstable_scheduleCallback=function(z,H,le){var ge=o.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?ge+le:ge):le=ge,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=le+ae,z={id:S++,callback:H,priorityLevel:z,startTime:le,expirationTime:ae,sortIndex:-1},le>ge?(z.sortIndex=le,t(p,z),i(g)===null&&z===i(p)&&(D?(N(B),B=-1):D=!0,W(X,le-ge))):(z.sortIndex=ae,t(g,z),A||E||(A=!0,P||(P=!0,K()))),z},o.unstable_shouldYield=Q,o.unstable_wrapCallback=function(z){var H=v;return function(){var le=v;v=H;try{return z.apply(this,arguments)}finally{v=le}}}})(fd)),fd}var Wg;function Jb(){return Wg||(Wg=1,ud.exports=Qb()),ud.exports}var dd={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function $b(){if(qg)return Fn;qg=1;var o=jh();function t(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,p,S){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:g,containerInfo:p,implementation:S}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.createPortal=function(g,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(g,p,null,S)},Fn.flushSync=function(g){var p=d.T,S=s.p;try{if(d.T=null,s.p=2,g)return g()}finally{d.T=p,s.p=S,s.d.f()}},Fn.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(g,p))},Fn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Fn.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var S=p.as,b=m(S,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?s.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:v,fetchPriority:E}):S==="script"&&s.d.X(g,{crossOrigin:b,integrity:v,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Fn.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=m(p.as,p.crossOrigin);s.d.M(g,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(g)},Fn.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,b=m(S,p.crossOrigin);s.d.L(g,S,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Fn.preloadModule=function(g,p){if(typeof g=="string")if(p){var S=m(p.as,p.crossOrigin);s.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(g)},Fn.requestFormReset=function(g){s.d.r(g)},Fn.unstable_batchedUpdates=function(g,p){return g(p)},Fn.useFormState=function(g,p,S){return d.H.useFormState(g,p,S)},Fn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Fn.version="19.2.7",Fn}var Yg;function ey(){if(Yg)return dd.exports;Yg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),dd.exports=$b(),dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function ty(){if(Zg)return Bo;Zg=1;var o=Jb(),t=jh(),i=ey();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return g(u),e;if(f===r)return g(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,r=f;break}if(R===r){_=!0,r=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,r=u;break}if(R===r){_=!0,r=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var b=Object.assign,v=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),I=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),Q=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Symbol.for("react.client.reference");function he(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case P:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case I:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:he(e.type)||"Memo";case w:n=e._payload,e=e._init;try{return he(e(n))}catch{}}return null}var W=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ge=[],ae=-1;function C(e){return{current:e}}function j(e){0>ae||(e.current=ge[ae],ge[ae]=null,ae--)}function fe(e,n){ae++,ge[ae]=e.current,e.current=n}var Ee=C(null),we=C(null),ee=C(null),Se=C(null);function Me(e,n){switch(fe(ee,n),fe(we,e),fe(Ee,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ug(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ug(n),e=fg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(Ee),fe(Ee,e)}function He(){j(Ee),j(we),j(ee)}function Qe(e){e.memoizedState!==null&&fe(Se,e);var n=Ee.current,a=fg(n,e.type);n!==a&&(fe(we,e),fe(Ee,a))}function Ye(e){we.current===e&&(j(Ee),j(we)),Se.current===e&&(j(Se),zo._currentValue=le)}var ft,ot;function lt(e){if(ft===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ft=n&&n[1]||"",ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ft+e+ot}var At=!1;function rt(e,n){if(!e||At)return"";At=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(de){var ce=de}Reflect.construct(e,[],ye)}else{try{ye.call()}catch(de){ce=de}e.call(ye.prototype)}}else{try{throw Error()}catch(de){ce=de}(ye=e())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(de){if(de&&ce&&typeof de.stack=="string")return[de.stack,ce.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var V=_.split(`
`),oe=R.split(`
`);for(u=r=0;r<V.length&&!V[r].includes("DetermineComponentFrameRoot");)r++;for(;u<oe.length&&!oe[u].includes("DetermineComponentFrameRoot");)u++;if(r===V.length||u===oe.length)for(r=V.length-1,u=oe.length-1;1<=r&&0<=u&&V[r]!==oe[u];)u--;for(;1<=r&&0<=u;r--,u--)if(V[r]!==oe[u]){if(r!==1||u!==1)do if(r--,u--,0>u||V[r]!==oe[u]){var ve=`
`+V[r].replace(" at new "," at ");return e.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",e.displayName)),ve}while(1<=r&&0<=u);break}}}finally{At=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?lt(a):""}function dt(e,n){switch(e.tag){case 26:case 27:case 5:return lt(e.type);case 16:return lt("Lazy");case 13:return e.child!==n&&n!==null?lt("Suspense Fallback"):lt("Suspense");case 19:return lt("SuspenseList");case 0:case 15:return rt(e.type,!1);case 11:return rt(e.type.render,!1);case 1:return rt(e.type,!0);case 31:return lt("Activity");default:return""}}function ht(e){try{var n="",a=null;do n+=dt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var $e=Object.prototype.hasOwnProperty,q=o.unstable_scheduleCallback,Nt=o.unstable_cancelCallback,ut=o.unstable_shouldYield,zt=o.unstable_requestPaint,Ue=o.unstable_now,Zt=o.unstable_getCurrentPriorityLevel,U=o.unstable_ImmediatePriority,T=o.unstable_UserBlockingPriority,ie=o.unstable_NormalPriority,_e=o.unstable_LowPriority,Te=o.unstable_IdlePriority,Le=o.log,Ne=o.unstable_setDisableYieldValue,pe=null,me=null;function Pe(e){if(typeof Le=="function"&&Ne(e),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(pe,e)}catch{}}var Fe=Math.clz32?Math.clz32:nt,Oe=Math.log,ze=Math.LN2;function nt(e){return e>>>=0,e===0?32:31-(Oe(e)/ze|0)|0}var it=256,pt=262144,Y=4194304;function Re(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xe(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=Re(r):(_&=R,_!==0?u=Re(_):a||(a=R&~e,a!==0&&(u=Re(a))))):(R=r&~f,R!==0?u=Re(R):_!==0?u=Re(_):a||(a=r&~e,a!==0&&(u=Re(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Be(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function De(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var e=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),e}function We(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function at(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $t(e,n,a,r,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,V=e.expirationTimes,oe=e.hiddenUpdates;for(a=_&~a;0<a;){var ve=31-Fe(a),ye=1<<ve;R[ve]=0,V[ve]=-1;var ce=oe[ve];if(ce!==null)for(oe[ve]=null,ve=0;ve<ce.length;ve++){var de=ce[ve];de!==null&&(de.lane&=-536870913)}a&=~ye}r!==0&&Dt(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Dt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Fe(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Ze(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Fe(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Dn(e,n){var a=n&-n;return a=(a&42)!==0?1:Vi(a),(a&(e.suspendedLanes|n))!==0?0:a}function Vi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ms(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function za(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:zg(e.type))}function Oa(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var Gt=Math.random().toString(36).slice(2),ln="__reactFiber$"+Gt,gn="__reactProps$"+Gt,Ri="__reactContainer$"+Gt,Xn="__reactEvents$"+Gt,ji="__reactListeners$"+Gt,sa="__reactHandles$"+Gt,gs="__reactResources$"+Gt,Ci="__reactMarker$"+Gt;function xs(e){delete e[ln],delete e[gn],delete e[Xn],delete e[ji],delete e[sa]}function Xi(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ri]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=vg(e);e!==null;){if(a=e[ln])return a;e=vg(e)}return n}e=a,a=e.parentNode}return null}function ra(e){if(e=e[ln]||e[Ri]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ni(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function pi(e){var n=e[gs];return n||(n=e[gs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(e){e[Ci]=!0}var xn=new Set,x={};function O(e,n){k(e,n),k(e+"Capture",n)}function k(e,n){for(x[e]=n,e=0;e<n.length;e++)xn.add(n[e])}var J=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},Ie={};function Ve(e){return $e.call(Ie,e)?!0:$e.call(ne,e)?!1:J.test(e)?Ie[e]=!0:(ne[e]=!0,!1)}function $(e,n,a){if(Ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ce(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ge(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Je(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ot(e){if(!e._valueTracker){var n=mt(e)?"checked":"value";e._valueTracker=et(e,n,""+e[n])}}function sn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=mt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function en(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var kt=/[\n"\\]/g;function Vt(e){return e.replace(kt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xe(e,n,a,r,u,f,_,R){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Je(n)):e.value!==""+Je(n)&&(e.value=""+Je(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?yt(e,_,Je(n)):a!=null?yt(e,_,Je(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Je(R):e.removeAttribute("name")}function In(e,n,a,r,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ot(e);return}a=a!=null?""+Je(a):"",n=n!=null?""+Je(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Ot(e)}function yt(e,n,a){n==="number"&&en(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function En(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Je(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ii(e,n,a){if(n!=null&&(n=""+Je(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Je(a):""}function Di(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(W(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Je(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Ot(e)}function ai(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var jt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||jt.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ui(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&rn(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&rn(e,f,n[f])}function Ht(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vs(e){return Pa.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var iu=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,Zs=null;function cp(e){var n=ra(e);if(n&&(e=n.stateNode)){var a=e[gn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Xe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[gn]||null;if(!u)throw Error(s(90));Xe(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&sn(r)}break e;case"textarea":ii(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&En(e,!!a.multiple,n,!1)}}}var su=!1;function up(e,n,a){if(su)return e(n,a);su=!0;try{var r=e(n);return r}finally{if(su=!1,(Ys!==null||Zs!==null)&&(Vl(),Ys&&(n=Ys,e=Zs,Zs=Ys=null,cp(n),e)))for(n=0;n<e.length;n++)cp(e[n])}}function Kr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[gn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(la)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){ru=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{ru=!1}var Ia=null,ou=null,il=null;function fp(){if(il)return il;var e,n=ou,a=n.length,r,u="value"in Ia?Ia.value:Ia.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return il=u.slice(e,1<r?1-r:void 0)}function al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function dp(){return!1}function Wn(e){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sl:dp,this.isPropagationStopped=dp,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Wn(_s),Jr=b({},_s,{view:0,detail:0}),Wv=Wn(Jr),lu,cu,$r,ol=b({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(lu=e.screenX-$r.screenX,cu=e.screenY-$r.screenY):cu=lu=0,$r=e),lu)},movementY:function(e){return"movementY"in e?e.movementY:cu}}),hp=Wn(ol),qv=b({},ol,{dataTransfer:0}),Yv=Wn(qv),Zv=b({},Jr,{relatedTarget:0}),uu=Wn(Zv),Kv=b({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),Qv=Wn(Kv),Jv=b({},_s,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$v=Wn(Jv),e_=b({},_s,{data:0}),pp=Wn(e_),t_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=i_[e])?!!n[e]:!1}function fu(){return a_}var s_=b({},Jr,{key:function(e){if(e.key){var n=t_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?n_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),r_=Wn(s_),o_=b({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=Wn(o_),l_=b({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),c_=Wn(l_),u_=b({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),f_=Wn(u_),d_=b({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),h_=Wn(d_),p_=b({},_s,{newState:0,oldState:0}),m_=Wn(p_),g_=[9,13,27,32],du=la&&"CompositionEvent"in window,eo=null;la&&"documentMode"in document&&(eo=document.documentMode);var x_=la&&"TextEvent"in window&&!eo,gp=la&&(!du||eo&&8<eo&&11>=eo),xp=" ",vp=!1;function _p(e,n){switch(e){case"keyup":return g_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ks=!1;function v_(e,n){switch(e){case"compositionend":return bp(n);case"keypress":return n.which!==32?null:(vp=!0,xp);case"textInput":return e=n.data,e===xp&&vp?null:e;default:return null}}function __(e,n){if(Ks)return e==="compositionend"||!du&&_p(e,n)?(e=fp(),il=ou=Ia=null,Ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gp&&n.locale!=="ko"?null:n.data;default:return null}}var b_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!b_[e.type]:n==="textarea"}function Sp(e,n,a,r){Ys?Zs?Zs.push(r):Zs=[r]:Ys=r,n=Kl(n,"onChange"),0<n.length&&(a=new rl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var to=null,no=null;function y_(e){ag(e,0)}function ll(e){var n=Ni(e);if(sn(n))return e}function Mp(e,n){if(e==="change")return n}var Ep=!1;if(la){var hu;if(la){var pu="oninput"in document;if(!pu){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),pu=typeof Tp.oninput=="function"}hu=pu}else hu=!1;Ep=hu&&(!document.documentMode||9<document.documentMode)}function Ap(){to&&(to.detachEvent("onpropertychange",wp),no=to=null)}function wp(e){if(e.propertyName==="value"&&ll(no)){var n=[];Sp(n,no,e,au(e)),up(y_,n)}}function S_(e,n,a){e==="focusin"?(Ap(),to=n,no=a,to.attachEvent("onpropertychange",wp)):e==="focusout"&&Ap()}function M_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(no)}function E_(e,n){if(e==="click")return ll(n)}function T_(e,n){if(e==="input"||e==="change")return ll(n)}function A_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var si=typeof Object.is=="function"?Object.is:A_;function io(e,n){if(si(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!$e.call(n,u)||!si(e[u],n[u]))return!1}return!0}function Rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cp(e,n){var a=Rp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rp(a)}}function Np(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Np(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Dp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=en(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=en(e.document)}return n}function mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var w_=la&&"documentMode"in document&&11>=document.documentMode,Qs=null,gu=null,ao=null,xu=!1;function Up(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xu||Qs==null||Qs!==en(r)||(r=Qs,"selectionStart"in r&&mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&io(ao,r)||(ao=r,r=Kl(gu,"onSelect"),0<r.length&&(n=new rl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Qs)))}function bs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Js={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},vu={},Lp={};la&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function ys(e){if(vu[e])return vu[e];if(!Js[e])return e;var n=Js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Lp)return vu[e]=n[a];return e}var zp=ys("animationend"),Op=ys("animationiteration"),Pp=ys("animationstart"),R_=ys("transitionrun"),C_=ys("transitionstart"),N_=ys("transitioncancel"),Ip=ys("transitionend"),Fp=new Map,_u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_u.push("scrollEnd");function Li(e,n){Fp.set(e,n),O(n,[e])}var cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},mi=[],$s=0,bu=0;function ul(){for(var e=$s,n=bu=$s=0;n<e;){var a=mi[n];mi[n++]=null;var r=mi[n];mi[n++]=null;var u=mi[n];mi[n++]=null;var f=mi[n];if(mi[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Bp(a,u,f)}}function fl(e,n,a,r){mi[$s++]=e,mi[$s++]=n,mi[$s++]=a,mi[$s++]=r,bu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function yu(e,n,a,r){return fl(e,n,a,r),dl(e)}function Ss(e,n){return fl(e,null,null,n),dl(e)}function Bp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Fe(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function dl(e){if(50<wo)throw wo=0,Df=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var er={};function D_(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,n,a,r){return new D_(e,n,a,r)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,n){var a=e.alternate;return a===null?(a=ri(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hl(e,n,a,r,u,f){var _=0;if(r=e,typeof e=="function")Su(e)&&(_=1);else if(typeof e=="string")_=Pb(e,a,Ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case F:return e=ri(31,a,n,u),e.elementType=F,e.lanes=f,e;case D:return Ms(a.children,u,f,n);case M:_=8,u|=24;break;case y:return e=ri(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case X:return e=ri(13,a,n,u),e.elementType=X,e.lanes=f,e;case P:return e=ri(19,a,n,u),e.elementType=P,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:_=10;break e;case N:_=9;break e;case L:_=11;break e;case B:_=14;break e;case w:_=16,r=null;break e}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ri(_,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function Ms(e,n,a,r){return e=ri(7,e,r,n),e.lanes=a,e}function Mu(e,n,a){return e=ri(6,e,null,n),e.lanes=a,e}function Gp(e){var n=ri(18,null,null,0);return n.stateNode=e,n}function Eu(e,n,a){return n=ri(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var kp=new WeakMap;function gi(e,n){if(typeof e=="object"&&e!==null){var a=kp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ht(n)},kp.set(e,n),n)}return{value:e,source:n,stack:ht(n)}}var tr=[],nr=0,pl=null,so=0,xi=[],vi=0,Fa=null,qi=1,Yi="";function ua(e,n){tr[nr++]=so,tr[nr++]=pl,pl=e,so=n}function Vp(e,n,a){xi[vi++]=qi,xi[vi++]=Yi,xi[vi++]=Fa,Fa=e;var r=qi;e=Yi;var u=32-Fe(r)-1;r&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,qi=1<<32-Fe(n)+u|a<<u|r,Yi=f+e}else qi=1<<f|a<<u|r,Yi=e}function Tu(e){e.return!==null&&(ua(e,1),Vp(e,1,0))}function Au(e){for(;e===pl;)pl=tr[--nr],tr[nr]=null,so=tr[--nr],tr[nr]=null;for(;e===Fa;)Fa=xi[--vi],xi[vi]=null,Yi=xi[--vi],xi[vi]=null,qi=xi[--vi],xi[vi]=null}function jp(e,n){xi[vi++]=qi,xi[vi++]=Yi,xi[vi++]=Fa,qi=n.id,Yi=n.overflow,Fa=e}var Un=null,nn=null,wt=!1,Ba=null,_i=!1,wu=Error(s(519));function Ha(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(gi(n,e)),wu}function Xp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[ln]=e,n[gn]=r,a){case"dialog":Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":case"embed":Mt("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)Mt(Co[a],n);break;case"source":Mt("error",n);break;case"img":case"image":case"link":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"input":Mt("invalid",n),In(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Mt("invalid",n);break;case"textarea":Mt("invalid",n),Di(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||lg(n.textContent,a)?(r.popover!=null&&(Mt("beforetoggle",n),Mt("toggle",n)),r.onScroll!=null&&Mt("scroll",n),r.onScrollEnd!=null&&Mt("scrollend",n),r.onClick!=null&&(n.onclick=oa),n=!0):n=!1,n||Ha(e,!0)}function Wp(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Un=Un.return}}function ir(e){if(e!==Un)return!1;if(!wt)return Wp(e),wt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wf(e.type,e.memoizedProps)),a=!a),a&&nn&&Ha(e),Wp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));nn=xg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));nn=xg(e)}else n===27?(n=nn,es(e.type)?(e=Qf,Qf=null,nn=e):nn=n):nn=Un?yi(e.stateNode.nextSibling):null;return!0}function Es(){nn=Un=null,wt=!1}function Ru(){var e=Ba;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),Ba=null),e}function ro(e){Ba===null?Ba=[e]:Ba.push(e)}var Cu=C(null),Ts=null,fa=null;function Ga(e,n,a){fe(Cu,n._currentValue),n._currentValue=a}function da(e){e._currentValue=Cu.current,j(Cu)}function Nu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Du(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var V=0;V<n.length;V++)if(R.context===n[V]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Nu(f.return,a,e),r||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Nu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function ar(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;si(u.pendingProps.value,_.value)||(e!==null?e.push(R):e=[R])}}else if(u===Se.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(zo):e=[zo])}u=u.return}e!==null&&Du(n,e,a,r),n.flags|=262144}function ml(e){for(e=e.firstContext;e!==null;){if(!si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function As(e){Ts=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return qp(Ts,e)}function gl(e,n){return Ts===null&&As(e),qp(e,n)}function qp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fa===null){if(e===null)throw Error(s(308));fa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else fa=fa.next=n;return a}var U_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},L_=o.unstable_scheduleCallback,z_=o.unstable_NormalPriority,vn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new U_,data:new Map,refCount:0}}function oo(e){e.refCount--,e.refCount===0&&L_(z_,function(){e.controller.abort()})}var lo=null,Lu=0,sr=0,rr=null;function O_(e,n){if(lo===null){var a=lo=[];Lu=0,sr=If(),rr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Lu++,n.then(Yp,Yp),n}function Yp(){if(--Lu===0&&lo!==null){rr!==null&&(rr.status="fulfilled");var e=lo;lo=null,sr=0,rr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function P_(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Zp=z.S;z.S=function(e,n){U0=Ue(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&O_(e,n),Zp!==null&&Zp(e,n)};var ws=C(null);function zu(){var e=ws.current;return e!==null?e:tn.pooledCache}function xl(e,n){n===null?fe(ws,ws.current):fe(ws,n.pool)}function Kp(){var e=zu();return e===null?null:{parent:vn._currentValue,pool:e}}var or=Error(s(460)),Ou=Error(s(474)),vl=Error(s(542)),_l={then:function(){}};function Qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(oa,oa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,em(e),e;default:if(typeof n.status=="string")n.then(oa,oa);else{if(e=tn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,em(e),e}throw Cs=n,or}}function Rs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cs=a,or):a}}var Cs=null;function $p(){if(Cs===null)throw Error(s(459));var e=Cs;return Cs=null,e}function em(e){if(e===or||e===vl)throw Error(s(483))}var lr=null,co=0;function bl(e){var n=co;return co+=1,lr===null&&(lr=[]),Jp(lr,e,n)}function uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yl(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function tm(e){function n(te,Z){if(e){var se=te.deletions;se===null?(te.deletions=[Z],te.flags|=16):se.push(Z)}}function a(te,Z){if(!e)return null;for(;Z!==null;)n(te,Z),Z=Z.sibling;return null}function r(te){for(var Z=new Map;te!==null;)te.key!==null?Z.set(te.key,te):Z.set(te.index,te),te=te.sibling;return Z}function u(te,Z){return te=ca(te,Z),te.index=0,te.sibling=null,te}function f(te,Z,se){return te.index=se,e?(se=te.alternate,se!==null?(se=se.index,se<Z?(te.flags|=67108866,Z):se):(te.flags|=67108866,Z)):(te.flags|=1048576,Z)}function _(te){return e&&te.alternate===null&&(te.flags|=67108866),te}function R(te,Z,se,be){return Z===null||Z.tag!==6?(Z=Mu(se,te.mode,be),Z.return=te,Z):(Z=u(Z,se),Z.return=te,Z)}function V(te,Z,se,be){var tt=se.type;return tt===D?ve(te,Z,se.props.children,be,se.key):Z!==null&&(Z.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===w&&Rs(tt)===Z.type)?(Z=u(Z,se.props),uo(Z,se),Z.return=te,Z):(Z=hl(se.type,se.key,se.props,null,te.mode,be),uo(Z,se),Z.return=te,Z)}function oe(te,Z,se,be){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==se.containerInfo||Z.stateNode.implementation!==se.implementation?(Z=Eu(se,te.mode,be),Z.return=te,Z):(Z=u(Z,se.children||[]),Z.return=te,Z)}function ve(te,Z,se,be,tt){return Z===null||Z.tag!==7?(Z=Ms(se,te.mode,be,tt),Z.return=te,Z):(Z=u(Z,se),Z.return=te,Z)}function ye(te,Z,se){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Mu(""+Z,te.mode,se),Z.return=te,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case E:return se=hl(Z.type,Z.key,Z.props,null,te.mode,se),uo(se,Z),se.return=te,se;case A:return Z=Eu(Z,te.mode,se),Z.return=te,Z;case w:return Z=Rs(Z),ye(te,Z,se)}if(W(Z)||K(Z))return Z=Ms(Z,te.mode,se,null),Z.return=te,Z;if(typeof Z.then=="function")return ye(te,bl(Z),se);if(Z.$$typeof===I)return ye(te,gl(te,Z),se);yl(te,Z)}return null}function ce(te,Z,se,be){var tt=Z!==null?Z.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return tt!==null?null:R(te,Z,""+se,be);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case E:return se.key===tt?V(te,Z,se,be):null;case A:return se.key===tt?oe(te,Z,se,be):null;case w:return se=Rs(se),ce(te,Z,se,be)}if(W(se)||K(se))return tt!==null?null:ve(te,Z,se,be,null);if(typeof se.then=="function")return ce(te,Z,bl(se),be);if(se.$$typeof===I)return ce(te,Z,gl(te,se),be);yl(te,se)}return null}function de(te,Z,se,be,tt){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return te=te.get(se)||null,R(Z,te,""+be,tt);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case E:return te=te.get(be.key===null?se:be.key)||null,V(Z,te,be,tt);case A:return te=te.get(be.key===null?se:be.key)||null,oe(Z,te,be,tt);case w:return be=Rs(be),de(te,Z,se,be,tt)}if(W(be)||K(be))return te=te.get(se)||null,ve(Z,te,be,tt,null);if(typeof be.then=="function")return de(te,Z,se,bl(be),tt);if(be.$$typeof===I)return de(te,Z,se,gl(Z,be),tt);yl(Z,be)}return null}function qe(te,Z,se,be){for(var tt=null,Pt=null,Ke=Z,_t=Z=0,Tt=null;Ke!==null&&_t<se.length;_t++){Ke.index>_t?(Tt=Ke,Ke=null):Tt=Ke.sibling;var It=ce(te,Ke,se[_t],be);if(It===null){Ke===null&&(Ke=Tt);break}e&&Ke&&It.alternate===null&&n(te,Ke),Z=f(It,Z,_t),Pt===null?tt=It:Pt.sibling=It,Pt=It,Ke=Tt}if(_t===se.length)return a(te,Ke),wt&&ua(te,_t),tt;if(Ke===null){for(;_t<se.length;_t++)Ke=ye(te,se[_t],be),Ke!==null&&(Z=f(Ke,Z,_t),Pt===null?tt=Ke:Pt.sibling=Ke,Pt=Ke);return wt&&ua(te,_t),tt}for(Ke=r(Ke);_t<se.length;_t++)Tt=de(Ke,te,_t,se[_t],be),Tt!==null&&(e&&Tt.alternate!==null&&Ke.delete(Tt.key===null?_t:Tt.key),Z=f(Tt,Z,_t),Pt===null?tt=Tt:Pt.sibling=Tt,Pt=Tt);return e&&Ke.forEach(function(ss){return n(te,ss)}),wt&&ua(te,_t),tt}function st(te,Z,se,be){if(se==null)throw Error(s(151));for(var tt=null,Pt=null,Ke=Z,_t=Z=0,Tt=null,It=se.next();Ke!==null&&!It.done;_t++,It=se.next()){Ke.index>_t?(Tt=Ke,Ke=null):Tt=Ke.sibling;var ss=ce(te,Ke,It.value,be);if(ss===null){Ke===null&&(Ke=Tt);break}e&&Ke&&ss.alternate===null&&n(te,Ke),Z=f(ss,Z,_t),Pt===null?tt=ss:Pt.sibling=ss,Pt=ss,Ke=Tt}if(It.done)return a(te,Ke),wt&&ua(te,_t),tt;if(Ke===null){for(;!It.done;_t++,It=se.next())It=ye(te,It.value,be),It!==null&&(Z=f(It,Z,_t),Pt===null?tt=It:Pt.sibling=It,Pt=It);return wt&&ua(te,_t),tt}for(Ke=r(Ke);!It.done;_t++,It=se.next())It=de(Ke,te,_t,It.value,be),It!==null&&(e&&It.alternate!==null&&Ke.delete(It.key===null?_t:It.key),Z=f(It,Z,_t),Pt===null?tt=It:Pt.sibling=It,Pt=It);return e&&Ke.forEach(function(qb){return n(te,qb)}),wt&&ua(te,_t),tt}function Jt(te,Z,se,be){if(typeof se=="object"&&se!==null&&se.type===D&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case E:e:{for(var tt=se.key;Z!==null;){if(Z.key===tt){if(tt=se.type,tt===D){if(Z.tag===7){a(te,Z.sibling),be=u(Z,se.props.children),be.return=te,te=be;break e}}else if(Z.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===w&&Rs(tt)===Z.type){a(te,Z.sibling),be=u(Z,se.props),uo(be,se),be.return=te,te=be;break e}a(te,Z);break}else n(te,Z);Z=Z.sibling}se.type===D?(be=Ms(se.props.children,te.mode,be,se.key),be.return=te,te=be):(be=hl(se.type,se.key,se.props,null,te.mode,be),uo(be,se),be.return=te,te=be)}return _(te);case A:e:{for(tt=se.key;Z!==null;){if(Z.key===tt)if(Z.tag===4&&Z.stateNode.containerInfo===se.containerInfo&&Z.stateNode.implementation===se.implementation){a(te,Z.sibling),be=u(Z,se.children||[]),be.return=te,te=be;break e}else{a(te,Z);break}else n(te,Z);Z=Z.sibling}be=Eu(se,te.mode,be),be.return=te,te=be}return _(te);case w:return se=Rs(se),Jt(te,Z,se,be)}if(W(se))return qe(te,Z,se,be);if(K(se)){if(tt=K(se),typeof tt!="function")throw Error(s(150));return se=tt.call(se),st(te,Z,se,be)}if(typeof se.then=="function")return Jt(te,Z,bl(se),be);if(se.$$typeof===I)return Jt(te,Z,gl(te,se),be);yl(te,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,Z!==null&&Z.tag===6?(a(te,Z.sibling),be=u(Z,se),be.return=te,te=be):(a(te,Z),be=Mu(se,te.mode,be),be.return=te,te=be),_(te)):a(te,Z)}return function(te,Z,se,be){try{co=0;var tt=Jt(te,Z,se,be);return lr=null,tt}catch(Ke){if(Ke===or||Ke===vl)throw Ke;var Pt=ri(29,Ke,null,te.mode);return Pt.lanes=be,Pt.return=te,Pt}finally{}}}var Ns=tm(!0),nm=tm(!1),ka=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ja(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Bt&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=dl(e),Bp(e,null,a),n}return fl(e,r,n,a),dl(e)}function fo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ze(e,a)}}function Fu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bu=!1;function ho(){if(Bu){var e=rr;if(e!==null)throw e}}function po(e,n,a,r){Bu=!1;var u=e.updateQueue;ka=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var V=R,oe=V.next;V.next=null,_===null?f=oe:_.next=oe,_=V;var ve=e.alternate;ve!==null&&(ve=ve.updateQueue,R=ve.lastBaseUpdate,R!==_&&(R===null?ve.firstBaseUpdate=oe:R.next=oe,ve.lastBaseUpdate=V))}if(f!==null){var ye=u.baseState;_=0,ve=oe=V=null,R=f;do{var ce=R.lane&-536870913,de=ce!==R.lane;if(de?(Et&ce)===ce:(r&ce)===ce){ce!==0&&ce===sr&&(Bu=!0),ve!==null&&(ve=ve.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=e,st=R;ce=n;var Jt=a;switch(st.tag){case 1:if(qe=st.payload,typeof qe=="function"){ye=qe.call(Jt,ye,ce);break e}ye=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=st.payload,ce=typeof qe=="function"?qe.call(Jt,ye,ce):qe,ce==null)break e;ye=b({},ye,ce);break e;case 2:ka=!0}}ce=R.callback,ce!==null&&(e.flags|=64,de&&(e.flags|=8192),de=u.callbacks,de===null?u.callbacks=[ce]:de.push(ce))}else de={lane:ce,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ve===null?(oe=ve=de,V=ye):ve=ve.next=de,_|=ce;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;de=R,R=de.next,de.next=null,u.lastBaseUpdate=de,u.shared.pending=null}}while(!0);ve===null&&(V=ye),u.baseState=V,u.firstBaseUpdate=oe,u.lastBaseUpdate=ve,f===null&&(u.shared.lanes=0),Za|=_,e.lanes=_,e.memoizedState=ye}}function im(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function am(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)im(a[e],n)}var cr=C(null),Sl=C(0);function sm(e,n){e=ya,fe(Sl,e),fe(cr,n),ya=e|n.baseLanes}function Hu(){fe(Sl,ya),fe(cr,cr.current)}function Gu(){ya=Sl.current,j(cr),j(Sl)}var oi=C(null),bi=null;function Xa(e){var n=e.alternate;fe(hn,hn.current&1),fe(oi,e),bi===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(bi=e)}function ku(e){fe(hn,hn.current),fe(oi,e),bi===null&&(bi=e)}function rm(e){e.tag===22?(fe(hn,hn.current),fe(oi,e),bi===null&&(bi=e)):Wa()}function Wa(){fe(hn,hn.current),fe(oi,oi.current)}function li(e){j(oi),bi===e&&(bi=null),j(hn)}var hn=C(0);function Ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zf(a)||Kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,vt=null,Kt=null,_n=null,El=!1,ur=!1,Ds=!1,Tl=0,mo=0,fr=null,I_=0;function cn(){throw Error(s(321))}function Vu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!si(e[a],n[a]))return!1;return!0}function ju(e,n,a,r,u,f){return ha=f,vt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Vm:rf,Ds=!1,f=a(r,u),Ds=!1,ur&&(f=lm(n,a,r,u)),om(e),f}function om(e){z.H=vo;var n=Kt!==null&&Kt.next!==null;if(ha=0,_n=Kt=vt=null,El=!1,mo=0,fr=null,n)throw Error(s(300));e===null||bn||(e=e.dependencies,e!==null&&ml(e)&&(bn=!0))}function lm(e,n,a,r){vt=e;var u=0;do{if(ur&&(fr=null),mo=0,ur=!1,25<=u)throw Error(s(301));if(u+=1,_n=Kt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=jm,f=n(a,r)}while(ur);return f}function F_(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?go(n):n,e=e.useState()[0],(Kt!==null?Kt.memoizedState:null)!==e&&(vt.flags|=1024),n}function Xu(){var e=Tl!==0;return Tl=0,e}function Wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qu(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}ha=0,_n=Kt=vt=null,ur=!1,mo=Tl=0,fr=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?vt.memoizedState=_n=e:_n=_n.next=e,_n}function pn(){if(Kt===null){var e=vt.alternate;e=e!==null?e.memoizedState:null}else e=Kt.next;var n=_n===null?vt.memoizedState:_n.next;if(n!==null)_n=n,Kt=e;else{if(e===null)throw vt.alternate===null?Error(s(467)):Error(s(310));Kt=e,e={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},_n===null?vt.memoizedState=_n=e:_n=_n.next=e}return _n}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(e){var n=mo;return mo+=1,fr===null&&(fr=[]),e=Jp(fr,e,n),n=vt,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Vm:rf),e}function wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return go(e);if(e.$$typeof===I)return Ln(e)}throw Error(s(438,String(e)))}function Yu(e){var n=null,a=vt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=vt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Al(),vt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Q;return n.index++,a}function pa(e,n){return typeof n=="function"?n(e):n}function Rl(e){var n=pn();return Zu(n,Kt,e)}function Zu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=_=null,V=null,oe=n,ve=!1;do{var ye=oe.lane&-536870913;if(ye!==oe.lane?(Et&ye)===ye:(ha&ye)===ye){var ce=oe.revertLane;if(ce===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),ye===sr&&(ve=!0);else if((ha&ce)===ce){oe=oe.next,ce===sr&&(ve=!0);continue}else ye={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(R=V=ye,_=f):V=V.next=ye,vt.lanes|=ce,Za|=ce;ye=oe.action,Ds&&a(f,ye),f=oe.hasEagerState?oe.eagerState:a(f,ye)}else ce={lane:ye,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(R=V=ce,_=f):V=V.next=ce,vt.lanes|=ye,Za|=ye;oe=oe.next}while(oe!==null&&oe!==n);if(V===null?_=f:V.next=R,!si(f,e.memoizedState)&&(bn=!0,ve&&(a=rr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=V,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ku(e){var n=pn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);si(f,n.memoizedState)||(bn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function cm(e,n,a){var r=vt,u=pn(),f=wt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!si((Kt||u).memoizedState,a);if(_&&(u.memoizedState=a,bn=!0),u=u.queue,$u(dm.bind(null,r,u,e),[e]),u.getSnapshot!==n||_||_n!==null&&_n.memoizedState.tag&1){if(r.flags|=2048,dr(9,{destroy:void 0},fm.bind(null,r,u,a,n),null),tn===null)throw Error(s(349));f||(ha&127)!==0||um(r,n,a)}return a}function um(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=vt.updateQueue,n===null?(n=Al(),vt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function fm(e,n,a,r){n.value=a,n.getSnapshot=r,hm(n)&&pm(e)}function dm(e,n,a){return a(function(){hm(n)&&pm(e)})}function hm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!si(e,a)}catch{return!0}}function pm(e){var n=Ss(e,2);n!==null&&Qn(n,e,2)}function Qu(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),Ds){Pe(!0);try{a()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},n}function mm(e,n,a,r){return e.baseState=a,Zu(e,Kt,typeof r=="function"?r:pa)}function B_(e,n,a,r,u){if(Dl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,gm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=z.T,_={};z.T=_;try{var R=a(u,r),V=z.S;V!==null&&V(_,R),xm(e,n,R)}catch(oe){Ju(e,n,oe)}finally{f!==null&&_.types!==null&&(f.types=_.types),z.T=f}}else try{f=a(u,r),xm(e,n,f)}catch(oe){Ju(e,n,oe)}}function xm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){vm(e,n,r)},function(r){return Ju(e,n,r)}):vm(e,n,a)}function vm(e,n,a){n.status="fulfilled",n.value=a,_m(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,gm(e,a)))}function Ju(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,_m(n),n=n.next;while(n!==r)}e.action=null}function _m(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function bm(e,n){return n}function ym(e,n){if(wt){var a=tn.formState;if(a!==null){e:{var r=vt;if(wt){if(nn){t:{for(var u=nn,f=_i;u.nodeType!==8;){if(!f){u=null;break t}if(u=yi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){nn=yi(u.nextSibling),r=u.data==="F!";break e}}Ha(r)}r=!1}r&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bm,lastRenderedState:n},a.queue=r,a=Hm.bind(null,vt,r),r.dispatch=a,r=Qu(!1),f=sf.bind(null,vt,!1,r.queue),r=kn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=B_.bind(null,vt,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Sm(e){var n=pn();return Mm(n,Kt,e)}function Mm(e,n,a){if(n=Zu(e,n,bm)[0],e=Rl(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=go(n)}catch(_){throw _===or?vl:_}else r=n;n=pn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(vt.flags|=2048,dr(9,{destroy:void 0},H_.bind(null,u,a),null)),[r,f,e]}function H_(e,n){e.action=n}function Em(e){var n=pn(),a=Kt;if(a!==null)return Mm(n,a,e);pn(),n=n.memoizedState,a=pn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function dr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=vt.updateQueue,n===null&&(n=Al(),vt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Tm(){return pn().memoizedState}function Cl(e,n,a,r){var u=kn();vt.flags|=e,u.memoizedState=dr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Nl(e,n,a,r){var u=pn();r=r===void 0?null:r;var f=u.memoizedState.inst;Kt!==null&&r!==null&&Vu(r,Kt.memoizedState.deps)?u.memoizedState=dr(n,f,a,r):(vt.flags|=e,u.memoizedState=dr(1|n,f,a,r))}function Am(e,n){Cl(8390656,8,e,n)}function $u(e,n){Nl(2048,8,e,n)}function G_(e){vt.flags|=4;var n=vt.updateQueue;if(n===null)n=Al(),vt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function wm(e){var n=pn().memoizedState;return G_({ref:n,nextImpl:e}),function(){if((Bt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Rm(e,n){return Nl(4,2,e,n)}function Cm(e,n){return Nl(4,4,e,n)}function Nm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Dm(e,n,a){a=a!=null?a.concat([e]):null,Nl(4,4,Nm.bind(null,n,e),a)}function ef(){}function Um(e,n){var a=pn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Vu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Lm(e,n){var a=pn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Vu(n,r[1]))return r[0];if(r=e(),Ds){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[r,n],r}function tf(e,n,a){return a===void 0||(ha&1073741824)!==0&&(Et&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=z0(),vt.lanes|=e,Za|=e,a)}function zm(e,n,a,r){return si(a,n)?a:cr.current!==null?(e=tf(e,a,r),si(e,n)||(bn=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(Et&261930)===0?(bn=!0,e.memoizedState=a):(e=z0(),vt.lanes|=e,Za|=e,n)}function Om(e,n,a,r,u){var f=H.p;H.p=f!==0&&8>f?f:8;var _=z.T,R={};z.T=R,sf(e,!1,n,a);try{var V=u(),oe=z.S;if(oe!==null&&oe(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ve=P_(V,r);xo(e,n,ve,fi(e))}else xo(e,n,r,fi(e))}catch(ye){xo(e,n,{then:function(){},status:"rejected",reason:ye},fi())}finally{H.p=f,_!==null&&R.types!==null&&(_.types=R.types),z.T=_}}function k_(){}function nf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Pm(e).queue;Om(e,u,n,le,a===null?k_:function(){return Im(e),a(r)})}function Pm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:le},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Im(e){var n=Pm(e);n.next===null&&(n=e.alternate.memoizedState),xo(e,n.next.queue,{},fi())}function af(){return Ln(zo)}function Fm(){return pn().memoizedState}function Bm(){return pn().memoizedState}function V_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=fi();e=Va(a);var r=ja(n,e,a);r!==null&&(Qn(r,n,a),fo(r,n,a)),n={cache:Uu()},e.payload=n;return}n=n.return}}function j_(e,n,a){var r=fi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(e)?Gm(n,a):(a=yu(e,n,a,r),a!==null&&(Qn(a,e,r),km(a,n,r)))}function Hm(e,n,a){var r=fi();xo(e,n,a,r)}function xo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(e))Gm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,si(R,_))return fl(e,n,u,0),tn===null&&ul(),!1}catch{}finally{}if(a=yu(e,n,u,r),a!==null)return Qn(a,e,r),km(a,n,r),!0}return!1}function sf(e,n,a,r){if(r={lane:2,revertLane:If(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Dl(e)){if(n)throw Error(s(479))}else n=yu(e,a,r,2),n!==null&&Qn(n,e,2)}function Dl(e){var n=e.alternate;return e===vt||n!==null&&n===vt}function Gm(e,n){ur=El=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function km(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ze(e,a)}}var vo={readContext:Ln,use:wl,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};vo.useEffectEvent=cn;var Vm={readContext:Ln,use:wl,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:Am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Cl(4194308,4,Nm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Cl(4194308,4,e,n)},useInsertionEffect:function(e,n){Cl(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var r=e();if(Ds){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=kn();if(a!==void 0){var u=a(n);if(Ds){Pe(!0);try{a(n)}finally{Pe(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=j_.bind(null,vt,e),[r.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=Qu(e);var n=e.queue,a=Hm.bind(null,vt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ef,useDeferredValue:function(e,n){var a=kn();return tf(a,e,n)},useTransition:function(){var e=Qu(!1);return e=Om.bind(null,vt,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=vt,u=kn();if(wt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),tn===null)throw Error(s(349));(Et&127)!==0||um(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Am(dm.bind(null,r,f,e),[e]),r.flags|=2048,dr(9,{destroy:void 0},fm.bind(null,r,f,a,n),null),a},useId:function(){var e=kn(),n=tn.identifierPrefix;if(wt){var a=Yi,r=qi;a=(r&~(1<<32-Fe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=I_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:af,useFormState:ym,useActionState:ym,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=sf.bind(null,vt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Yu,useCacheRefresh:function(){return kn().memoizedState=V_.bind(null,vt)},useEffectEvent:function(e){var n=kn(),a={impl:e};return n.memoizedState=a,function(){if((Bt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},rf={readContext:Ln,use:wl,useCallback:Um,useContext:Ln,useEffect:$u,useImperativeHandle:Dm,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:Lm,useReducer:Rl,useRef:Tm,useState:function(){return Rl(pa)},useDebugValue:ef,useDeferredValue:function(e,n){var a=pn();return zm(a,Kt.memoizedState,e,n)},useTransition:function(){var e=Rl(pa)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:cm,useId:Fm,useHostTransitionStatus:af,useFormState:Sm,useActionState:Sm,useOptimistic:function(e,n){var a=pn();return mm(a,Kt,e,n)},useMemoCache:Yu,useCacheRefresh:Bm};rf.useEffectEvent=wm;var jm={readContext:Ln,use:wl,useCallback:Um,useContext:Ln,useEffect:$u,useImperativeHandle:Dm,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:Lm,useReducer:Ku,useRef:Tm,useState:function(){return Ku(pa)},useDebugValue:ef,useDeferredValue:function(e,n){var a=pn();return Kt===null?tf(a,e,n):zm(a,Kt.memoizedState,e,n)},useTransition:function(){var e=Ku(pa)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:cm,useId:Fm,useHostTransitionStatus:af,useFormState:Em,useActionState:Em,useOptimistic:function(e,n){var a=pn();return Kt!==null?mm(a,Kt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:Bm};jm.useEffectEvent=wm;function of(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:b({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=fi(),u=Va(r);u.payload=n,a!=null&&(u.callback=a),n=ja(e,u,r),n!==null&&(Qn(n,e,r),fo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=fi(),u=Va(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ja(e,u,r),n!==null&&(Qn(n,e,r),fo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=fi(),r=Va(a);r.tag=2,n!=null&&(r.callback=n),n=ja(e,r,a),n!==null&&(Qn(n,e,a),fo(n,e,a))}};function Xm(e,n,a,r,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!io(a,r)||!io(u,f):!0}function Wm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&lf.enqueueReplaceState(n,n.state,null)}function Us(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=b({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function qm(e){cl(e)}function Ym(e){console.error(e)}function Zm(e){cl(e)}function Ul(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Km(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function cf(e,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(e,n)},a}function Qm(e){return e=Va(e),e.tag=3,e}function Jm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Km(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Km(n,a,r),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function X_(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&ar(n,a,u,!0),a=oi.current,a!==null){switch(a.tag){case 31:case 13:return bi===null?jl():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),zf(e,r,u)),!1;case 22:return a.flags|=65536,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),zf(e,r,u)),!1}throw Error(s(435,a.tag))}return zf(e,r,u),jl(),!1}if(wt)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==wu&&(e=Error(s(422),{cause:r}),ro(gi(e,a)))):(r!==wu&&(n=Error(s(423),{cause:r}),ro(gi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=gi(r,a),u=cf(e.stateNode,r,u),Fu(e,u),un!==4&&(un=2)),!1;var f=Error(s(520),{cause:r});if(f=gi(f,a),Ao===null?Ao=[f]:Ao.push(f),un!==4&&(un=2),n===null)return!0;r=gi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=cf(a.stateNode,r,e),Fu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ka===null||!Ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Qm(u),Jm(u,e,a,r),Fu(a,u),!1}a=a.return}while(a!==null);return!1}var uf=Error(s(461)),bn=!1;function zn(e,n,a,r){n.child=e===null?nm(n,null,a,r):Ns(n,e.child,a,r)}function $m(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var R in r)R!=="ref"&&(_[R]=r[R])}else _=r;return As(n),r=ju(e,n,a,_,f,u),R=Xu(),e!==null&&!bn?(Wu(e,n,u),ma(e,n,u)):(wt&&R&&Tu(n),n.flags|=1,zn(e,n,r,u),n.child)}function e0(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!Su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,t0(e,n,f,r,u)):(e=hl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!vf(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(_,r)&&e.ref===n.ref)return ma(e,n,u)}return n.flags|=1,e=ca(f,r),e.ref=n.ref,e.return=n,n.child=e}function t0(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(io(f,r)&&e.ref===n.ref)if(bn=!1,n.pendingProps=r=f,vf(e,u))(e.flags&131072)!==0&&(bn=!0);else return n.lanes=e.lanes,ma(e,n,u)}return ff(e,n,a,r,u)}function n0(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return i0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&xl(n,f!==null?f.cachePool:null),f!==null?sm(n,f):Hu(),rm(n);else return r=n.lanes=536870912,i0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(xl(n,f.cachePool),sm(n,f),Wa(),n.memoizedState=null):(e!==null&&xl(n,null),Hu(),Wa());return zn(e,n,u,a),n.child}function _o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function i0(e,n,a,r,u){var f=zu();return f=f===null?null:{parent:vn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&xl(n,null),Hu(),rm(n),e!==null&&ar(e,n,r,!0),n.childLanes=u,null}function Ll(e,n){return n=Ol({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function a0(e,n,a){return Ns(n,e.child,null,a),e=Ll(n,n.pendingProps),e.flags|=2,li(n),n.memoizedState=null,e}function W_(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(wt){if(r.mode==="hidden")return e=Ll(n,r),n.lanes=536870912,_o(null,e);if(ku(n),(e=nn)?(e=gg(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,Un=n,nn=null)):e=null,e===null)throw Ha(n);return n.lanes=536870912,null}return Ll(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(ku(n),u)if(n.flags&256)n.flags&=-257,n=a0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(bn||ar(e,n,a,!1),u=(a&e.childLanes)!==0,bn||u){if(r=tn,r!==null&&(_=Dn(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ss(e,_),Qn(r,e,_),uf;jl(),n=a0(e,n,a)}else e=f.treeContext,nn=yi(_.nextSibling),Un=n,wt=!0,Ba=null,_i=!1,e!==null&&jp(n,e),n=Ll(n,r),n.flags|=4096;return n}return e=ca(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function zl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ff(e,n,a,r,u){return As(n),a=ju(e,n,a,r,void 0,u),r=Xu(),e!==null&&!bn?(Wu(e,n,u),ma(e,n,u)):(wt&&r&&Tu(n),n.flags|=1,zn(e,n,a,u),n.child)}function s0(e,n,a,r,u,f){return As(n),n.updateQueue=null,a=lm(n,r,a,u),om(e),r=Xu(),e!==null&&!bn?(Wu(e,n,f),ma(e,n,f)):(wt&&r&&Tu(n),n.flags|=1,zn(e,n,a,f),n.child)}function r0(e,n,a,r,u){if(As(n),n.stateNode===null){var f=er,_=a.contextType;typeof _=="object"&&_!==null&&(f=Ln(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=lf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Pu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Ln(_):er,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(of(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&lf.enqueueReplaceState(f,f.state,null),po(n,r,f,u),ho(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,V=Us(a,R);f.props=V;var oe=f.context,ve=a.contextType;_=er,typeof ve=="object"&&ve!==null&&(_=Ln(ve));var ye=a.getDerivedStateFromProps;ve=typeof ye=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ve||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||oe!==_)&&Wm(n,f,r,_),ka=!1;var ce=n.memoizedState;f.state=ce,po(n,r,f,u),ho(),oe=n.memoizedState,R||ce!==oe||ka?(typeof ye=="function"&&(of(n,a,ye,r),oe=n.memoizedState),(V=ka||Xm(n,a,V,r,ce,oe,_))?(ve||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=oe),f.props=r,f.state=oe,f.context=_,r=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Iu(e,n),_=n.memoizedProps,ve=Us(a,_),f.props=ve,ye=n.pendingProps,ce=f.context,oe=a.contextType,V=er,typeof oe=="object"&&oe!==null&&(V=Ln(oe)),R=a.getDerivedStateFromProps,(oe=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==ye||ce!==V)&&Wm(n,f,r,V),ka=!1,ce=n.memoizedState,f.state=ce,po(n,r,f,u),ho();var de=n.memoizedState;_!==ye||ce!==de||ka||e!==null&&e.dependencies!==null&&ml(e.dependencies)?(typeof R=="function"&&(of(n,a,R,r),de=n.memoizedState),(ve=ka||Xm(n,a,ve,r,ce,de,V)||e!==null&&e.dependencies!==null&&ml(e.dependencies))?(oe||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,de,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,de,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ce===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ce===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=de),f.props=r,f.state=de,f.context=V,r=ve):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ce===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ce===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,zl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Ns(n,e.child,null,u),n.child=Ns(n,null,a,u)):zn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ma(e,n,u),e}function o0(e,n,a,r){return Es(),n.flags|=256,zn(e,n,a,r),n.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(e){return{baseLanes:e,cachePool:Kp()}}function pf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ui),e}function l0(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(wt){if(u?Xa(n):Wa(),(e=nn)?(e=gg(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,Un=n,nn=null)):e=null,e===null)throw Ha(n);return Kf(e)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(Wa(),u=n.mode,R=Ol({mode:"hidden",children:R},u),r=Ms(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=hf(a),r.childLanes=pf(e,_,a),n.memoizedState=df,_o(null,r)):(Xa(n),mf(n,R))}var V=e.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(f)n.flags&256?(Xa(n),n.flags&=-257,n=gf(e,n,a)):n.memoizedState!==null?(Wa(),n.child=e.child,n.flags|=128,n=null):(Wa(),R=r.fallback,u=n.mode,r=Ol({mode:"visible",children:r.children},u),R=Ms(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,Ns(n,e.child,null,a),r=n.child,r.memoizedState=hf(a),r.childLanes=pf(e,_,a),n.memoizedState=df,n=_o(null,r));else if(Xa(n),Kf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var oe=_.dgst;_=oe,r=Error(s(419)),r.stack="",r.digest=_,ro({value:r,source:null,stack:null}),n=gf(e,n,a)}else if(bn||ar(e,n,a,!1),_=(a&e.childLanes)!==0,bn||_){if(_=tn,_!==null&&(r=Dn(_,a),r!==0&&r!==V.retryLane))throw V.retryLane=r,Ss(e,r),Qn(_,e,r),uf;Zf(R)||jl(),n=gf(e,n,a)}else Zf(R)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,nn=yi(R.nextSibling),Un=n,wt=!0,Ba=null,_i=!1,e!==null&&jp(n,e),n=mf(n,r.children),n.flags|=4096);return n}return u?(Wa(),R=r.fallback,u=n.mode,V=e.child,oe=V.sibling,r=ca(V,{mode:"hidden",children:r.children}),r.subtreeFlags=V.subtreeFlags&65011712,oe!==null?R=ca(oe,R):(R=Ms(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,_o(null,r),r=n.child,R=e.child.memoizedState,R===null?R=hf(a):(u=R.cachePool,u!==null?(V=vn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=Kp(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=pf(e,_,a),n.memoizedState=df,_o(e.child,r)):(Xa(n),a=e.child,e=a.sibling,a=ca(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function mf(e,n){return n=Ol({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ol(e,n){return e=ri(22,e,null,n),e.lanes=0,e}function gf(e,n,a){return Ns(n,e.child,null,a),e=mf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function c0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Nu(e.return,n,a)}function xf(e,n,a,r,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function u0(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=hn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,fe(hn,_),zn(e,n,r,a),r=wt?so:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&c0(e,a,n);else if(e.tag===19)c0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ml(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),xf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ml(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}xf(n,!0,a,null,f,r);break;case"together":xf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ma(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ar(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ca(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ca(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ml(e)))}function q_(e,n,a){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),Ga(n,vn,e.memoizedState.cache),Es();break;case 27:case 5:Qe(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ku(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?l0(e,n,a):(Xa(n),e=ma(e,n,a),e!==null?e.sibling:null);Xa(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(ar(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return u0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),fe(hn,hn.current),r)break;return null;case 22:return n.lanes=0,n0(e,n,a,n.pendingProps);case 24:Ga(n,vn,e.memoizedState.cache)}return ma(e,n,a)}function f0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)bn=!0;else{if(!vf(e,a)&&(n.flags&128)===0)return bn=!1,q_(e,n,a);bn=(e.flags&131072)!==0}else bn=!1,wt&&(n.flags&1048576)!==0&&Vp(n,so,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Rs(n.elementType),n.type=e,typeof e=="function")Su(e)?(r=Us(e,r),n.tag=1,n=r0(null,n,e,r,a)):(n.tag=0,n=ff(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=$m(null,n,e,r,a);break e}else if(u===B){n.tag=14,n=e0(null,n,e,r,a);break e}}throw n=he(e)||e,Error(s(306,n,""))}}return n;case 0:return ff(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Us(r,n.pendingProps),r0(e,n,r,u,a);case 3:e:{if(Me(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Iu(e,n),po(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Ga(n,vn,r),r!==f.cache&&Du(n,[vn],a,!0),ho(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=o0(e,n,r,a);break e}else if(r!==u){u=gi(Error(s(424)),n),ro(u),n=o0(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=yi(e.firstChild),Un=n,wt=!0,Ba=null,_i=!0,a=nm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Es(),r===u){n=ma(e,n,a);break e}zn(e,n,r,a)}n=n.child}return n;case 26:return zl(e,n),e===null?(a=Sg(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,e=n.pendingProps,r=Ql(ee.current).createElement(a),r[ln]=n,r[gn]=e,On(r,a,e),dn(r),n.stateNode=r):n.memoizedState=Sg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qe(n),e===null&&wt&&(r=n.stateNode=_g(n.type,n.pendingProps,ee.current),Un=n,_i=!0,u=nn,es(n.type)?(Qf=u,nn=yi(r.firstChild)):nn=u),zn(e,n,n.pendingProps.children,a),zl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&wt&&((u=r=nn)&&(r=Mb(r,n.type,n.pendingProps,_i),r!==null?(n.stateNode=r,Un=n,nn=yi(r.firstChild),_i=!1,u=!0):u=!1),u||Ha(n)),Qe(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,Wf(u,f)?r=null:_!==null&&Wf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=ju(e,n,F_,null,null,a),zo._currentValue=u),zl(e,n),zn(e,n,r,a),n.child;case 6:return e===null&&wt&&((e=a=nn)&&(a=Eb(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Un=n,nn=null,e=!0):e=!1),e||Ha(n)),null;case 13:return l0(e,n,a);case 4:return Me(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ns(n,null,r,a):zn(e,n,r,a),n.child;case 11:return $m(e,n,n.type,n.pendingProps,a);case 7:return zn(e,n,n.pendingProps,a),n.child;case 8:return zn(e,n,n.pendingProps.children,a),n.child;case 12:return zn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ga(n,n.type,r.value),zn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,As(n),u=Ln(u),r=r(u),n.flags|=1,zn(e,n,r,a),n.child;case 14:return e0(e,n,n.type,n.pendingProps,a);case 15:return t0(e,n,n.type,n.pendingProps,a);case 19:return u0(e,n,a);case 31:return W_(e,n,a);case 22:return n0(e,n,a,n.pendingProps);case 24:return As(n),r=Ln(vn),e===null?(u=zu(),u===null&&(u=tn,f=Uu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Pu(n),Ga(n,vn,u)):((e.lanes&a)!==0&&(Iu(e,n),po(n,null,null,a),ho()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ga(n,vn,r)):(r=f.cache,Ga(n,vn,r),r!==u.cache&&Du(n,[vn],a,!0))),zn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ga(e){e.flags|=4}function _f(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(F0())e.flags|=8192;else throw Cs=_l,Ou}else e.flags&=-16777217}function d0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wg(n))if(F0())e.flags|=8192;else throw Cs=_l,Ou}function Pl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ae():536870912,e.lanes|=n,gr|=n)}function bo(e,n){if(!wt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function an(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Y_(e,n,a){var r=n.pendingProps;switch(Au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),da(vn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ir(n)?ga(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ru())),an(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ga(n),f!==null?(an(n),d0(n,f)):(an(n),_f(n,u,null,r,a))):f?f!==e.memoizedState?(ga(n),an(n),d0(n,f)):(an(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ga(n),an(n),_f(n,u,e,r,a)),null;case 27:if(Ye(n),a=ee.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ga(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),null}e=Ee.current,ir(n)?Xp(n):(e=_g(u,r,a),n.stateNode=e,ga(n))}return an(n),null;case 5:if(Ye(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ga(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),null}if(f=Ee.current,ir(n))Xp(n);else{var _=Ql(ee.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[ln]=n,f[gn]=r;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(On(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ga(n)}}return an(n),_f(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ga(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ee.current,ir(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Un,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||lg(e.nodeValue,a)),e||Ha(n,!0)}else e=Ql(e).createTextNode(r),e[ln]=n,n.stateNode=e}return an(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=ir(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),e=!1}else a=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(s(558))}return an(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ir(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),u=!1}else u=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),an(n),null);case 4:return He(),e===null&&Gf(n.stateNode.containerInfo),an(n),null;case 10:return da(n.type),an(n),null;case 19:if(j(hn),r=n.memoizedState,r===null)return an(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)bo(r,!1);else{if(un!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ml(e),f!==null){for(n.flags|=128,bo(r,!1),e=f.updateQueue,n.updateQueue=e,Pl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Hp(a,e),a=a.sibling;return fe(hn,hn.current&1|2),wt&&ua(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Ue()>Gl&&(n.flags|=128,u=!0,bo(r,!1),n.lanes=4194304)}else{if(!u)if(e=Ml(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Pl(n,e),bo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!wt)return an(n),null}else 2*Ue()-r.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,u=!0,bo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ue(),e.sibling=null,a=hn.current,fe(hn,u?a&1|2:a&1),wt&&ua(n,r.treeForkCount),e):(an(n),null);case 22:case 23:return li(n),Gu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&j(ws),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),da(vn),an(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Z_(e,n){switch(Au(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return da(vn),He(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ye(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(s(340));Es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(li(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(hn),null;case 4:return He(),null;case 10:return da(n.type),null;case 22:case 23:return li(n),Gu(),e!==null&&j(ws),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return da(vn),null;case 25:return null;default:return null}}function h0(e,n){switch(Au(n),n.tag){case 3:da(vn),He();break;case 26:case 27:case 5:Ye(n);break;case 4:He();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:j(hn);break;case 10:da(n.type);break;case 22:case 23:li(n),Gu(),e!==null&&j(ws);break;case 24:da(vn)}}function yo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(R){Wt(n,n.return,R)}}function qa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var _=r.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var V=a,oe=R;try{oe()}catch(ve){Wt(u,V,ve)}}}r=r.next}while(r!==f)}}catch(ve){Wt(n,n.return,ve)}}function p0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{am(n,a)}catch(r){Wt(e,e.return,r)}}}function m0(e,n,a){a.props=Us(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Wt(e,n,r)}}function So(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Wt(e,n,u)}}function Zi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Wt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Wt(e,n,u)}else a.current=null}function g0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Wt(e,e.return,u)}}function bf(e,n,a){try{var r=e.stateNode;xb(r,e.type,a,n),r[gn]=n}catch(u){Wt(e,e.return,u)}}function x0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&es(e.type)||e.tag===4}function yf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||x0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&es(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oa));else if(r!==4&&(r===27&&es(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sf(e,n,a),e=e.sibling;e!==null;)Sf(e,n,a),e=e.sibling}function Il(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&es(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Il(e,n,a),e=e.sibling;e!==null;)Il(e,n,a),e=e.sibling}function v0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);On(n,r,a),n[ln]=e,n[gn]=a}catch(f){Wt(e,e.return,f)}}var xa=!1,yn=!1,Mf=!1,_0=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function K_(e,n){if(e=e.containerInfo,jf=ac,e=Dp(e),mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,V=-1,oe=0,ve=0,ye=e,ce=null;t:for(;;){for(var de;ye!==a||u!==0&&ye.nodeType!==3||(R=_+u),ye!==f||r!==0&&ye.nodeType!==3||(V=_+r),ye.nodeType===3&&(_+=ye.nodeValue.length),(de=ye.firstChild)!==null;)ce=ye,ye=de;for(;;){if(ye===e)break t;if(ce===a&&++oe===u&&(R=_),ce===f&&++ve===r&&(V=_),(de=ye.nextSibling)!==null)break;ye=ce,ce=ye.parentNode}ye=de}a=R===-1||V===-1?null:{start:R,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xf={focusedElem:e,selectionRange:a},ac=!1,Rn=n;Rn!==null;)if(n=Rn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Rn=e;else for(;Rn!==null;){switch(n=Rn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var qe=Us(a.type,u);e=r.getSnapshotBeforeUpdate(qe,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(st){Wt(a,a.return,st)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Yf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Rn=e;break}Rn=n.return}}function b0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:_a(e,a),r&4&&yo(5,a);break;case 1:if(_a(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Wt(a,a.return,_)}else{var u=Us(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Wt(a,a.return,_)}}r&64&&p0(a),r&512&&So(a,a.return);break;case 3:if(_a(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{am(e,n)}catch(_){Wt(a,a.return,_)}}break;case 27:n===null&&r&4&&v0(a);case 26:case 5:_a(e,a),n===null&&r&4&&g0(a),r&512&&So(a,a.return);break;case 12:_a(e,a);break;case 31:_a(e,a),r&4&&M0(e,a);break;case 13:_a(e,a),r&4&&E0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=sb.bind(null,a),Tb(e,a))));break;case 22:if(r=a.memoizedState!==null||xa,!r){n=n!==null&&n.memoizedState!==null||yn,u=xa;var f=yn;xa=r,(yn=n)&&!f?ba(e,a,(a.subtreeFlags&8772)!==0):_a(e,a),xa=u,yn=f}break;case 30:break;default:_a(e,a)}}function y0(e){var n=e.alternate;n!==null&&(e.alternate=null,y0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&xs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var on=null,qn=!1;function va(e,n,a){for(a=a.child;a!==null;)S0(e,n,a),a=a.sibling}function S0(e,n,a){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(pe,a)}catch{}switch(a.tag){case 26:yn||Zi(a,n),va(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:yn||Zi(a,n);var r=on,u=qn;es(a.type)&&(on=a.stateNode,qn=!1),va(e,n,a),Do(a.stateNode),on=r,qn=u;break;case 5:yn||Zi(a,n);case 6:if(r=on,u=qn,on=null,va(e,n,a),on=r,qn=u,on!==null)if(qn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode)}catch(f){Wt(a,n,f)}else try{on.removeChild(a.stateNode)}catch(f){Wt(a,n,f)}break;case 18:on!==null&&(qn?(e=on,pg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Er(e)):pg(on,a.stateNode));break;case 4:r=on,u=qn,on=a.stateNode.containerInfo,qn=!0,va(e,n,a),on=r,qn=u;break;case 0:case 11:case 14:case 15:qa(2,a,n),yn||qa(4,a,n),va(e,n,a);break;case 1:yn||(Zi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&m0(a,n,r)),va(e,n,a);break;case 21:va(e,n,a);break;case 22:yn=(r=yn)||a.memoizedState!==null,va(e,n,a),yn=r;break;default:va(e,n,a)}}function M0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Er(e)}catch(a){Wt(n,n.return,a)}}}function E0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Er(e)}catch(a){Wt(n,n.return,a)}}function Q_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new _0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new _0),n;default:throw Error(s(435,e.tag))}}function Fl(e,n){var a=Q_(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=rb.bind(null,e,r);r.then(u,u)}})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(es(R.type)){on=R.stateNode,qn=!1;break e}break;case 5:on=R.stateNode,qn=!1;break e;case 3:case 4:on=R.stateNode.containerInfo,qn=!0;break e}R=R.return}if(on===null)throw Error(s(160));S0(f,_,u),on=null,qn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)T0(n,e),n=n.sibling}var zi=null;function T0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),Zn(e),r&4&&(qa(3,e,e.return),yo(3,e),qa(5,e,e.return));break;case 1:Yn(n,e),Zn(e),r&512&&(yn||a===null||Zi(a,a.return)),r&64&&xa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=zi;if(Yn(n,e),Zn(e),r&512&&(yn||a===null||Zi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ci]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),On(f,r,a),f[ln]=e,dn(f),r=f;break e;case"link":var _=Tg("link","href",u).get(r+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(r),On(f,r,a),u.head.appendChild(f);break;case"meta":if(_=Tg("meta","content",u).get(r+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(r),On(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[ln]=e,dn(f),r=f}e.stateNode=r}else Ag(u,e.type,e.stateNode);else e.stateNode=Eg(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Ag(u,e.type,e.stateNode):Eg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&bf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),Zn(e),r&512&&(yn||a===null||Zi(a,a.return)),a!==null&&r&4&&bf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),Zn(e),r&512&&(yn||a===null||Zi(a,a.return)),e.flags&32){u=e.stateNode;try{ai(u,"")}catch(qe){Wt(e,e.return,qe)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,bf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(Mf=!0);break;case 6:if(Yn(n,e),Zn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(qe){Wt(e,e.return,qe)}}break;case 3:if(ec=null,u=zi,zi=Jl(n.containerInfo),Yn(n,e),zi=u,Zn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(qe){Wt(e,e.return,qe)}Mf&&(Mf=!1,A0(e));break;case 4:r=zi,zi=Jl(e.stateNode.containerInfo),Yn(n,e),Zn(e),zi=r;break;case 12:Yn(n,e),Zn(e);break;case 31:Yn(n,e),Zn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Fl(e,r)));break;case 13:Yn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hl=Ue()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Fl(e,r)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,oe=xa,ve=yn;if(xa=oe||u,yn=ve||V,Yn(n,e),yn=ve,xa=oe,Zn(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||xa||yn||Ls(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=V.stateNode;var ye=V.memoizedProps.style,ce=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;R.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(qe){Wt(V,V.return,qe)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(qe){Wt(V,V.return,qe)}}}else if(n.tag===18){if(a===null){V=n;try{var de=V.stateNode;u?mg(de,!0):mg(V.stateNode,!1)}catch(qe){Wt(V,V.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Fl(e,a))));break;case 19:Yn(n,e),Zn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Fl(e,r)));break;case 30:break;case 21:break;default:Yn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(x0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=yf(e);Il(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ai(_,""),a.flags&=-33);var R=yf(e);Il(e,R,_);break;case 3:case 4:var V=a.stateNode.containerInfo,oe=yf(e);Sf(e,oe,V);break;default:throw Error(s(161))}}catch(ve){Wt(e,e.return,ve)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function A0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;A0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function _a(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)b0(e,n.alternate,n),n=n.sibling}function Ls(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),Ls(n);break;case 1:Zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&m0(n,n.return,a),Ls(n);break;case 27:Do(n.stateNode);case 26:case 5:Zi(n,n.return),Ls(n);break;case 22:n.memoizedState===null&&Ls(n);break;case 30:Ls(n);break;default:Ls(n)}e=e.sibling}}function ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ba(u,f,a),yo(4,f);break;case 1:if(ba(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(oe){Wt(r,r.return,oe)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)im(V[u],R)}catch(oe){Wt(r,r.return,oe)}}a&&_&64&&p0(f),So(f,f.return);break;case 27:v0(f);case 26:case 5:ba(u,f,a),a&&r===null&&_&4&&g0(f),So(f,f.return);break;case 12:ba(u,f,a);break;case 31:ba(u,f,a),a&&_&4&&M0(u,f);break;case 13:ba(u,f,a),a&&_&4&&E0(u,f);break;case 22:f.memoizedState===null&&ba(u,f,a),So(f,f.return);break;case 30:break;default:ba(u,f,a)}n=n.sibling}}function Ef(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&oo(a))}function Tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e))}function Oi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)w0(e,n,a,r),n=n.sibling}function w0(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(e,n,a,r),u&2048&&yo(9,n);break;case 1:Oi(e,n,a,r);break;case 3:Oi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e)));break;case 12:if(u&2048){Oi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Wt(n,n.return,V)}}else Oi(e,n,a,r);break;case 31:Oi(e,n,a,r);break;case 13:Oi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Oi(e,n,a,r):Mo(e,n):f._visibility&2?Oi(e,n,a,r):(f._visibility|=2,hr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ef(_,n);break;case 24:Oi(e,n,a,r),u&2048&&Tf(n.alternate,n);break;default:Oi(e,n,a,r)}}function hr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,R=a,V=r,oe=_.flags;switch(_.tag){case 0:case 11:case 15:hr(f,_,R,V,u),yo(8,_);break;case 23:break;case 22:var ve=_.stateNode;_.memoizedState!==null?ve._visibility&2?hr(f,_,R,V,u):Mo(f,_):(ve._visibility|=2,hr(f,_,R,V,u)),u&&oe&2048&&Ef(_.alternate,_);break;case 24:hr(f,_,R,V,u),u&&oe&2048&&Tf(_.alternate,_);break;default:hr(f,_,R,V,u)}n=n.sibling}}function Mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:Mo(a,r),u&2048&&Ef(r.alternate,r);break;case 24:Mo(a,r),u&2048&&Tf(r.alternate,r);break;default:Mo(a,r)}n=n.sibling}}var Eo=8192;function pr(e,n,a){if(e.subtreeFlags&Eo)for(e=e.child;e!==null;)R0(e,n,a),e=e.sibling}function R0(e,n,a){switch(e.tag){case 26:pr(e,n,a),e.flags&Eo&&e.memoizedState!==null&&Ib(a,zi,e.memoizedState,e.memoizedProps);break;case 5:pr(e,n,a);break;case 3:case 4:var r=zi;zi=Jl(e.stateNode.containerInfo),pr(e,n,a),zi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Eo,Eo=16777216,pr(e,n,a),Eo=r):pr(e,n,a));break;default:pr(e,n,a)}}function C0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function To(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Rn=r,D0(r,e)}C0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)N0(e),e=e.sibling}function N0(e){switch(e.tag){case 0:case 11:case 15:To(e),e.flags&2048&&qa(9,e,e.return);break;case 3:To(e);break;case 12:To(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Bl(e)):To(e);break;default:To(e)}}function Bl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Rn=r,D0(r,e)}C0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:qa(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}e=e.sibling}}function D0(e,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:oo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Rn=r;else e:for(a=e;Rn!==null;){r=Rn;var u=r.sibling,f=r.return;if(y0(r),r===a){Rn=null;break e}if(u!==null){u.return=f,Rn=u;break e}Rn=f}}}var J_={getCacheForType:function(e){var n=Ln(vn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Ln(vn).controller.signal}},$_=typeof WeakMap=="function"?WeakMap:Map,Bt=0,tn=null,St=null,Et=0,Xt=0,ci=null,Ya=!1,mr=!1,Af=!1,ya=0,un=0,Za=0,zs=0,wf=0,ui=0,gr=0,Ao=null,Kn=null,Rf=!1,Hl=0,U0=0,Gl=1/0,kl=null,Ka=null,Tn=0,Qa=null,xr=null,Sa=0,Cf=0,Nf=null,L0=null,wo=0,Df=null;function fi(){return(Bt&2)!==0&&Et!==0?Et&-Et:z.T!==null?If():za()}function z0(){if(ui===0)if((Et&536870912)===0||wt){var e=pt;pt<<=1,(pt&3932160)===0&&(pt=262144),ui=e}else ui=536870912;return e=oi.current,e!==null&&(e.flags|=32),ui}function Qn(e,n,a){(e===tn&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(vr(e,0),Ja(e,Et,ui,!1)),at(e,a),((Bt&2)===0||e!==tn)&&(e===tn&&((Bt&2)===0&&(zs|=a),un===4&&Ja(e,Et,ui,!1)),Ki(e))}function O0(e,n,a){if((Bt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Be(e,n),u=r?nb(e,n):Lf(e,n,!0),f=r;do{if(u===0){mr&&!r&&Ja(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!eb(a)){u=Lf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=e;u=Ao;var V=R.current.memoizedState.isDehydrated;if(V&&(vr(R,_).flags|=256),_=Lf(R,_,!1),_!==2){if(Af&&!V){R.errorRecoveryDisabledLanes|=f,zs|=f,u=4;break e}f=Kn,Kn=u,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){vr(e,0),Ja(e,n,0,!0);break}e:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ja(r,n,ui,!Ya);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Hl+300-Ue(),10<u)){if(Ja(r,n,ui,!Ya),xe(r,0,!0)!==0)break e;Sa=n,r.timeoutHandle=dg(P0.bind(null,r,a,Kn,kl,Rf,n,ui,zs,gr,Ya,f,"Throttled",-0,0),u);break e}P0(r,a,Kn,kl,Rf,n,ui,zs,gr,Ya,f,null,-0,0)}}break}while(!0);Ki(e)}function P0(e,n,a,r,u,f,_,R,V,oe,ve,ye,ce,de){if(e.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},R0(n,f,ye);var qe=(f&62914560)===f?Hl-Ue():(f&4194048)===f?U0-Ue():0;if(qe=Fb(ye,qe),qe!==null){Sa=f,e.cancelPendingCommit=qe(j0.bind(null,e,n,f,a,r,u,_,R,V,ve,ye,null,ce,de)),Ja(e,f,_,!oe);return}}j0(e,n,f,a,r,u,_,R,V)}function eb(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!si(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(e,n,a,r){n&=~wf,n&=~zs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&Dt(e,a,n)}function Vl(){return(Bt&6)===0?(Ro(0),!1):!0}function Uf(){if(St!==null){if(Xt===0)var e=St.return;else e=St,fa=Ts=null,qu(e),lr=null,co=0,e=St;for(;e!==null;)h0(e.alternate,e),e=e.return;St=null}}function vr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,bb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Sa=0,Uf(),tn=e,St=a=ca(e.current,null),Et=n,Xt=0,ci=null,Ya=!1,mr=Be(e,n),Af=!1,gr=ui=wf=zs=Za=un=0,Kn=Ao=null,Rf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Fe(r),f=1<<u;n|=e[u],r&=~f}return ya=n,ul(),a}function I0(e,n){vt=null,z.H=vo,n===or||n===vl?(n=$p(),Xt=3):n===Ou?(n=$p(),Xt=4):Xt=n===uf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,St===null&&(un=1,Ul(e,gi(n,e.current)))}function F0(){var e=oi.current;return e===null?!0:(Et&4194048)===Et?bi===null:(Et&62914560)===Et||(Et&536870912)!==0?e===bi:!1}function B0(){var e=z.H;return z.H=vo,e===null?vo:e}function H0(){var e=z.A;return z.A=J_,e}function jl(){un=4,Ya||(Et&4194048)!==Et&&oi.current!==null||(mr=!0),(Za&134217727)===0&&(zs&134217727)===0||tn===null||Ja(tn,Et,ui,!1)}function Lf(e,n,a){var r=Bt;Bt|=2;var u=B0(),f=H0();(tn!==e||Et!==n)&&(kl=null,vr(e,n)),n=!1;var _=un;e:do try{if(Xt!==0&&St!==null){var R=St,V=ci;switch(Xt){case 8:Uf(),_=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var oe=Xt;if(Xt=0,ci=null,_r(e,R,V,oe),a&&mr){_=0;break e}break;default:oe=Xt,Xt=0,ci=null,_r(e,R,V,oe)}}tb(),_=un;break}catch(ve){I0(e,ve)}while(!0);return n&&e.shellSuspendCounter++,fa=Ts=null,Bt=r,z.H=u,z.A=f,St===null&&(tn=null,Et=0,ul()),_}function tb(){for(;St!==null;)G0(St)}function nb(e,n){var a=Bt;Bt|=2;var r=B0(),u=H0();tn!==e||Et!==n?(kl=null,Gl=Ue()+500,vr(e,n)):mr=Be(e,n);e:do try{if(Xt!==0&&St!==null){n=St;var f=ci;t:switch(Xt){case 1:Xt=0,ci=null,_r(e,n,f,1);break;case 2:case 9:if(Qp(f)){Xt=0,ci=null,k0(n);break}n=function(){Xt!==2&&Xt!==9||tn!==e||(Xt=7),Ki(e)},f.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:Qp(f)?(Xt=0,ci=null,k0(n)):(Xt=0,ci=null,_r(e,n,f,7));break;case 5:var _=null;switch(St.tag){case 26:_=St.memoizedState;case 5:case 27:var R=St;if(_?wg(_):R.stateNode.complete){Xt=0,ci=null;var V=R.sibling;if(V!==null)St=V;else{var oe=R.return;oe!==null?(St=oe,Xl(oe)):St=null}break t}}Xt=0,ci=null,_r(e,n,f,5);break;case 6:Xt=0,ci=null,_r(e,n,f,6);break;case 8:Uf(),un=6;break e;default:throw Error(s(462))}}ib();break}catch(ve){I0(e,ve)}while(!0);return fa=Ts=null,z.H=r,z.A=u,Bt=a,St!==null?0:(tn=null,Et=0,ul(),un)}function ib(){for(;St!==null&&!ut();)G0(St)}function G0(e){var n=f0(e.alternate,e,ya);e.memoizedProps=e.pendingProps,n===null?Xl(e):St=n}function k0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=s0(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=s0(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:qu(n);default:h0(a,n),n=St=Hp(n,ya),n=f0(a,n,ya)}e.memoizedProps=e.pendingProps,n===null?Xl(e):St=n}function _r(e,n,a,r){fa=Ts=null,qu(n),lr=null,co=0;var u=n.return;try{if(X_(e,u,n,a,Et)){un=1,Ul(e,gi(a,e.current)),St=null;return}}catch(f){if(u!==null)throw St=u,f;un=1,Ul(e,gi(a,e.current)),St=null;return}n.flags&32768?(wt||r===1?e=!0:mr||(Et&536870912)!==0?e=!1:(Ya=e=!0,(r===2||r===9||r===3||r===6)&&(r=oi.current,r!==null&&r.tag===13&&(r.flags|=16384))),V0(n,e)):Xl(n)}function Xl(e){var n=e;do{if((n.flags&32768)!==0){V0(n,Ya);return}e=n.return;var a=Y_(n.alternate,n,ya);if(a!==null){St=a;return}if(n=n.sibling,n!==null){St=n;return}St=n=e}while(n!==null);un===0&&(un=5)}function V0(e,n){do{var a=Z_(e.alternate,e);if(a!==null){a.flags&=32767,St=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){St=e;return}St=e=a}while(e!==null);un=6,St=null}function j0(e,n,a,r,u,f,_,R,V){e.cancelPendingCommit=null;do Wl();while(Tn!==0);if((Bt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=bu,$t(e,a,f,_,R,V),e===tn&&(St=tn=null,Et=0),xr=n,Qa=e,Sa=a,Cf=f,Nf=u,L0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ob(ie,function(){return Z0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,u=H.p,H.p=2,_=Bt,Bt|=4;try{K_(e,n,a)}finally{Bt=_,H.p=u,z.T=r}}Tn=1,X0(),W0(),q0()}}function X0(){if(Tn===1){Tn=0;var e=Qa,n=xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=H.p;H.p=2;var u=Bt;Bt|=4;try{T0(n,e);var f=Xf,_=Dp(e.containerInfo),R=f.focusedElem,V=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Np(R.ownerDocument.documentElement,R)){if(V!==null&&mu(R)){var oe=V.start,ve=V.end;if(ve===void 0&&(ve=oe),"selectionStart"in R)R.selectionStart=oe,R.selectionEnd=Math.min(ve,R.value.length);else{var ye=R.ownerDocument||document,ce=ye&&ye.defaultView||window;if(ce.getSelection){var de=ce.getSelection(),qe=R.textContent.length,st=Math.min(V.start,qe),Jt=V.end===void 0?st:Math.min(V.end,qe);!de.extend&&st>Jt&&(_=Jt,Jt=st,st=_);var te=Cp(R,st),Z=Cp(R,Jt);if(te&&Z&&(de.rangeCount!==1||de.anchorNode!==te.node||de.anchorOffset!==te.offset||de.focusNode!==Z.node||de.focusOffset!==Z.offset)){var se=ye.createRange();se.setStart(te.node,te.offset),de.removeAllRanges(),st>Jt?(de.addRange(se),de.extend(Z.node,Z.offset)):(se.setEnd(Z.node,Z.offset),de.addRange(se))}}}}for(ye=[],de=R;de=de.parentNode;)de.nodeType===1&&ye.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ye.length;R++){var be=ye[R];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}ac=!!jf,Xf=jf=null}finally{Bt=u,H.p=r,z.T=a}}e.current=n,Tn=2}}function W0(){if(Tn===2){Tn=0;var e=Qa,n=xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=H.p;H.p=2;var u=Bt;Bt|=4;try{b0(e,n.alternate,n)}finally{Bt=u,H.p=r,z.T=a}}Tn=3}}function q0(){if(Tn===4||Tn===3){Tn=0,zt();var e=Qa,n=xr,a=Sa,r=L0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,xr=Qa=null,Y0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ka=null),ms(a),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,u=H.p,H.p=2,z.T=null;try{for(var f=e.onRecoverableError,_=0;_<r.length;_++){var R=r[_];f(R.value,{componentStack:R.stack})}}finally{z.T=n,H.p=u}}(Sa&3)!==0&&Wl(),Ki(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Df?wo++:(wo=0,Df=e):wo=0,Ro(0)}}function Y0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,oo(n)))}function Wl(){return X0(),W0(),q0(),Z0()}function Z0(){if(Tn!==5)return!1;var e=Qa,n=Cf;Cf=0;var a=ms(Sa),r=z.T,u=H.p;try{H.p=32>a?32:a,z.T=null,a=Nf,Nf=null;var f=Qa,_=Sa;if(Tn=0,xr=Qa=null,Sa=0,(Bt&6)!==0)throw Error(s(331));var R=Bt;if(Bt|=4,N0(f.current),w0(f,f.current,_,a),Bt=R,Ro(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(pe,f)}catch{}return!0}finally{H.p=u,z.T=r,Y0(e,n)}}function K0(e,n,a){n=gi(a,n),n=cf(e.stateNode,n,2),e=ja(e,n,2),e!==null&&(at(e,2),Ki(e))}function Wt(e,n,a){if(e.tag===3)K0(e,e,a);else for(;n!==null;){if(n.tag===3){K0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ka===null||!Ka.has(r))){e=gi(a,e),a=Qm(2),r=ja(n,a,2),r!==null&&(Jm(a,r,n,e),at(r,2),Ki(r));break}}n=n.return}}function zf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new $_;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Af=!0,u.add(a),e=ab.bind(null,e,n,a),n.then(e,e))}function ab(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,tn===e&&(Et&a)===a&&(un===4||un===3&&(Et&62914560)===Et&&300>Ue()-Hl?(Bt&2)===0&&vr(e,0):wf|=a,gr===Et&&(gr=0)),Ki(e)}function Q0(e,n){n===0&&(n=Ae()),e=Ss(e,n),e!==null&&(at(e,n),Ki(e))}function sb(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Q0(e,a)}function rb(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Q0(e,a)}function ob(e,n){return q(e,n)}var ql=null,br=null,Of=!1,Yl=!1,Pf=!1,$a=0;function Ki(e){e!==br&&e.next===null&&(br===null?ql=br=e:br=br.next=e),Yl=!0,Of||(Of=!0,cb())}function Ro(e,n){if(!Pf&&Yl){Pf=!0;do for(var a=!1,r=ql;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-Fe(42|e)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,tg(r,f))}else f=Et,f=xe(r,r===tn?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Be(r,f)||(a=!0,tg(r,f));r=r.next}while(a);Pf=!1}}function lb(){J0()}function J0(){Yl=Of=!1;var e=0;$a!==0&&_b()&&(e=$a);for(var n=Ue(),a=null,r=ql;r!==null;){var u=r.next,f=$0(r,n);f===0?(r.next=null,a===null?ql=u:a.next=u,u===null&&(br=a)):(a=r,(e!==0||(f&3)!==0)&&(Yl=!0)),r=u}Tn!==0&&Tn!==5||Ro(e),$a!==0&&($a=0)}function $0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Fe(f),R=1<<_,V=u[_];V===-1?((R&a)===0||(R&r)!==0)&&(u[_]=De(R,n)):V<=n&&(e.expiredLanes|=R),f&=~R}if(n=tn,a=Et,a=xe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Nt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Be(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Nt(r),ms(a)){case 2:case 8:a=T;break;case 32:a=ie;break;case 268435456:a=Te;break;default:a=ie}return r=eg.bind(null,e),a=q(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Nt(r),e.callbackPriority=2,e.callbackNode=null,2}function eg(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wl()&&e.callbackNode!==a)return null;var r=Et;return r=xe(e,e===tn?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(O0(e,r,n),$0(e,Ue()),e.callbackNode!=null&&e.callbackNode===a?eg.bind(null,e):null)}function tg(e,n){if(Wl())return null;O0(e,n,!0)}function cb(){yb(function(){(Bt&6)!==0?q(U,lb):J0()})}function If(){if($a===0){var e=sr;e===0&&(e=it,it<<=1,(it&261888)===0&&(it=256)),$a=e}return $a}function ng(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vs(""+e)}function ig(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ub(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=ng((u[gn]||null).action),_=r.submitter;_&&(n=(n=_[gn]||null)?ng(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new rl("action","action",null,r,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if($a!==0){var V=_?ig(u,_):new FormData(u);nf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(R.preventDefault(),V=_?ig(u,_):new FormData(u),nf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var Ff=0;Ff<_u.length;Ff++){var Bf=_u[Ff],fb=Bf.toLowerCase(),db=Bf[0].toUpperCase()+Bf.slice(1);Li(fb,"on"+db)}Li(zp,"onAnimationEnd"),Li(Op,"onAnimationIteration"),Li(Pp,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(R_,"onTransitionRun"),Li(C_,"onTransitionStart"),Li(N_,"onTransitionCancel"),Li(Ip,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),O("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),O("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),O("onBeforeInput",["compositionend","keypress","textInput","paste"]),O("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),O("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),O("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function ag(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var R=r[_],V=R.instance,oe=R.currentTarget;if(R=R.listener,V!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=oe;try{f(u)}catch(ve){cl(ve)}u.currentTarget=null,f=V}else for(_=0;_<r.length;_++){if(R=r[_],V=R.instance,oe=R.currentTarget,R=R.listener,V!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=oe;try{f(u)}catch(ve){cl(ve)}u.currentTarget=null,f=V}}}}function Mt(e,n){var a=n[Xn];a===void 0&&(a=n[Xn]=new Set);var r=e+"__bubble";a.has(r)||(sg(n,e,2,!1),a.add(r))}function Hf(e,n,a){var r=0;n&&(r|=4),sg(a,e,r,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Gf(e){if(!e[Zl]){e[Zl]=!0,xn.forEach(function(a){a!=="selectionchange"&&(hb.has(a)||Hf(a,!1,e),Hf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Hf("selectionchange",!1,n))}}function sg(e,n,a,r){switch(zg(n)){case 2:var u=Gb;break;case 8:u=kb;break;default:u=nd}a=u.bind(null,n,a,e),u=void 0,!ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function kf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var R=r.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=r.return;_!==null;){var V=_.tag;if((V===3||V===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=Xi(R),_===null)return;if(V=_.tag,V===5||V===6||V===26||V===27){r=f=_;continue e}R=R.parentNode}}r=r.return}up(function(){var oe=f,ve=au(a),ye=[];e:{var ce=Fp.get(e);if(ce!==void 0){var de=rl,qe=e;switch(e){case"keypress":if(al(a)===0)break e;case"keydown":case"keyup":de=r_;break;case"focusin":qe="focus",de=uu;break;case"focusout":qe="blur",de=uu;break;case"beforeblur":case"afterblur":de=uu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=Yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=c_;break;case zp:case Op:case Pp:de=Qv;break;case Ip:de=f_;break;case"scroll":case"scrollend":de=Wv;break;case"wheel":de=h_;break;case"copy":case"cut":case"paste":de=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=mp;break;case"toggle":case"beforetoggle":de=m_}var st=(n&4)!==0,Jt=!st&&(e==="scroll"||e==="scrollend"),te=st?ce!==null?ce+"Capture":null:ce;st=[];for(var Z=oe,se;Z!==null;){var be=Z;if(se=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||se===null||te===null||(be=Kr(Z,te),be!=null&&st.push(No(Z,be,se))),Jt)break;Z=Z.return}0<st.length&&(ce=new de(ce,qe,null,a,ve),ye.push({event:ce,listeners:st}))}}if((n&7)===0){e:{if(ce=e==="mouseover"||e==="pointerover",de=e==="mouseout"||e==="pointerout",ce&&a!==iu&&(qe=a.relatedTarget||a.fromElement)&&(Xi(qe)||qe[Ri]))break e;if((de||ce)&&(ce=ve.window===ve?ve:(ce=ve.ownerDocument)?ce.defaultView||ce.parentWindow:window,de?(qe=a.relatedTarget||a.toElement,de=oe,qe=qe?Xi(qe):null,qe!==null&&(Jt=c(qe),st=qe.tag,qe!==Jt||st!==5&&st!==27&&st!==6)&&(qe=null)):(de=null,qe=oe),de!==qe)){if(st=hp,be="onMouseLeave",te="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(st=mp,be="onPointerLeave",te="onPointerEnter",Z="pointer"),Jt=de==null?ce:Ni(de),se=qe==null?ce:Ni(qe),ce=new st(be,Z+"leave",de,a,ve),ce.target=Jt,ce.relatedTarget=se,be=null,Xi(ve)===oe&&(st=new st(te,Z+"enter",qe,a,ve),st.target=se,st.relatedTarget=Jt,be=st),Jt=be,de&&qe)t:{for(st=pb,te=de,Z=qe,se=0,be=te;be;be=st(be))se++;be=0;for(var tt=Z;tt;tt=st(tt))be++;for(;0<se-be;)te=st(te),se--;for(;0<be-se;)Z=st(Z),be--;for(;se--;){if(te===Z||Z!==null&&te===Z.alternate){st=te;break t}te=st(te),Z=st(Z)}st=null}else st=null;de!==null&&rg(ye,ce,de,st,!1),qe!==null&&Jt!==null&&rg(ye,Jt,qe,st,!0)}}e:{if(ce=oe?Ni(oe):window,de=ce.nodeName&&ce.nodeName.toLowerCase(),de==="select"||de==="input"&&ce.type==="file")var Pt=Mp;else if(yp(ce))if(Ep)Pt=T_;else{Pt=M_;var Ke=S_}else de=ce.nodeName,!de||de.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?oe&&Ht(oe.elementType)&&(Pt=Mp):Pt=E_;if(Pt&&(Pt=Pt(e,oe))){Sp(ye,Pt,a,ve);break e}Ke&&Ke(e,ce,oe),e==="focusout"&&oe&&ce.type==="number"&&oe.memoizedProps.value!=null&&yt(ce,"number",ce.value)}switch(Ke=oe?Ni(oe):window,e){case"focusin":(yp(Ke)||Ke.contentEditable==="true")&&(Qs=Ke,gu=oe,ao=null);break;case"focusout":ao=gu=Qs=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,Up(ye,a,ve);break;case"selectionchange":if(w_)break;case"keydown":case"keyup":Up(ye,a,ve)}var _t;if(du)e:{switch(e){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else Ks?_p(e,a)&&(Tt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Tt="onCompositionStart");Tt&&(gp&&a.locale!=="ko"&&(Ks||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&Ks&&(_t=fp()):(Ia=ve,ou="value"in Ia?Ia.value:Ia.textContent,Ks=!0)),Ke=Kl(oe,Tt),0<Ke.length&&(Tt=new pp(Tt,e,null,a,ve),ye.push({event:Tt,listeners:Ke}),_t?Tt.data=_t:(_t=bp(a),_t!==null&&(Tt.data=_t)))),(_t=x_?v_(e,a):__(e,a))&&(Tt=Kl(oe,"onBeforeInput"),0<Tt.length&&(Ke=new pp("onBeforeInput","beforeinput",null,a,ve),ye.push({event:Ke,listeners:Tt}),Ke.data=_t)),ub(ye,e,oe,a,ve)}ag(ye,n)})}function No(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Kl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Kr(e,a),u!=null&&r.unshift(No(e,u,f)),u=Kr(e,n),u!=null&&r.push(No(e,u,f))),e.tag===3)return r;e=e.return}return[]}function pb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rg(e,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var R=a,V=R.alternate,oe=R.stateNode;if(R=R.tag,V!==null&&V===r)break;R!==5&&R!==26&&R!==27||oe===null||(V=oe,u?(oe=Kr(a,f),oe!=null&&_.unshift(No(a,oe,V))):u||(oe=Kr(a,f),oe!=null&&_.push(No(a,oe,V)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var mb=/\r\n?/g,gb=/\u0000|\uFFFD/g;function og(e){return(typeof e=="string"?e:""+e).replace(mb,`
`).replace(gb,"")}function lg(e,n){return n=og(n),og(e)===n}function Qt(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ai(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ai(e,""+r);break;case"className":Ce(e,"class",r);break;case"tabIndex":Ce(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ce(e,a,r);break;case"style":Ui(e,r,f);break;case"data":if(n!=="object"){Ce(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=vs(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Qt(e,n,"name",u.name,u,null),Qt(e,n,"formEncType",u.formEncType,u,null),Qt(e,n,"formMethod",u.formMethod,u,null),Qt(e,n,"formTarget",u.formTarget,u,null)):(Qt(e,n,"encType",u.encType,u,null),Qt(e,n,"method",u.method,u,null),Qt(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=vs(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=oa);break;case"onScroll":r!=null&&Mt("scroll",e);break;case"onScrollEnd":r!=null&&Mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=vs(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Mt("beforetoggle",e),Mt("toggle",e),$(e,"popover",r);break;case"xlinkActuate":Ge(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ge(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ge(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ge(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ge(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ge(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ge(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ge(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ge(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":$(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wi.get(a)||a,$(e,a,r))}}function Vf(e,n,a,r,u,f){switch(a){case"style":Ui(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?ai(e,r):(typeof r=="number"||typeof r=="bigint")&&ai(e,""+r);break;case"onScroll":r!=null&&Mt("scroll",e);break;case"onScrollEnd":r!=null&&Mt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!x.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):$(e,a,r)}}}function On(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",e),Mt("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Qt(e,n,f,_,a,null)}}u&&Qt(e,n,"srcSet",a.srcSet,a,null),r&&Qt(e,n,"src",a.src,a,null);return;case"input":Mt("invalid",e);var R=f=_=u=null,V=null,oe=null;for(r in a)if(a.hasOwnProperty(r)){var ve=a[r];if(ve!=null)switch(r){case"name":u=ve;break;case"type":_=ve;break;case"checked":V=ve;break;case"defaultChecked":oe=ve;break;case"value":f=ve;break;case"defaultValue":R=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:Qt(e,n,r,ve,a,null)}}In(e,f,R,V,oe,_,u,!1);return;case"select":Mt("invalid",e),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":r=R;default:Qt(e,n,u,R,a,null)}n=f,a=_,e.multiple=!!r,n!=null?En(e,!!r,n,!1):a!=null&&En(e,!!r,a,!0);return;case"textarea":Mt("invalid",e),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Qt(e,n,_,R,a,null)}Di(e,r,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(r=a[V],r!=null))switch(V){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Qt(e,n,V,r,a,null)}return;case"dialog":Mt("beforetoggle",e),Mt("toggle",e),Mt("cancel",e),Mt("close",e);break;case"iframe":case"object":Mt("load",e);break;case"video":case"audio":for(r=0;r<Co.length;r++)Mt(Co[r],e);break;case"image":Mt("error",e),Mt("load",e);break;case"details":Mt("toggle",e);break;case"embed":case"source":case"link":Mt("error",e),Mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in a)if(a.hasOwnProperty(oe)&&(r=a[oe],r!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Qt(e,n,oe,r,a,null)}return;default:if(Ht(n)){for(ve in a)a.hasOwnProperty(ve)&&(r=a[ve],r!==void 0&&Vf(e,n,ve,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Qt(e,n,R,r,a,null))}function xb(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,V=null,oe=null,ve=null;for(de in a){var ye=a[de];if(a.hasOwnProperty(de)&&ye!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":V=ye;default:r.hasOwnProperty(de)||Qt(e,n,de,null,r,ye)}}for(var ce in r){var de=r[ce];if(ye=a[ce],r.hasOwnProperty(ce)&&(de!=null||ye!=null))switch(ce){case"type":f=de;break;case"name":u=de;break;case"checked":oe=de;break;case"defaultChecked":ve=de;break;case"value":_=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:de!==ye&&Qt(e,n,ce,de,r,ye)}}Xe(e,_,R,V,oe,ve,f,u);return;case"select":de=_=R=ce=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":de=V;default:r.hasOwnProperty(f)||Qt(e,n,f,null,r,V)}for(u in r)if(f=r[u],V=a[u],r.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":ce=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==V&&Qt(e,n,u,f,r,V)}n=R,a=_,r=de,ce!=null?En(e,!!a,ce,!1):!!r!=!!a&&(n!=null?En(e,!!a,n,!0):En(e,!!a,a?[]:"",!1));return;case"textarea":de=ce=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Qt(e,n,R,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":ce=u;break;case"defaultValue":de=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Qt(e,n,_,u,r,f)}ii(e,ce,de);return;case"option":for(var qe in a)if(ce=a[qe],a.hasOwnProperty(qe)&&ce!=null&&!r.hasOwnProperty(qe))switch(qe){case"selected":e.selected=!1;break;default:Qt(e,n,qe,null,r,ce)}for(V in r)if(ce=r[V],de=a[V],r.hasOwnProperty(V)&&ce!==de&&(ce!=null||de!=null))switch(V){case"selected":e.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Qt(e,n,V,ce,r,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in a)ce=a[st],a.hasOwnProperty(st)&&ce!=null&&!r.hasOwnProperty(st)&&Qt(e,n,st,null,r,ce);for(oe in r)if(ce=r[oe],de=a[oe],r.hasOwnProperty(oe)&&ce!==de&&(ce!=null||de!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:Qt(e,n,oe,ce,r,de)}return;default:if(Ht(n)){for(var Jt in a)ce=a[Jt],a.hasOwnProperty(Jt)&&ce!==void 0&&!r.hasOwnProperty(Jt)&&Vf(e,n,Jt,void 0,r,ce);for(ve in r)ce=r[ve],de=a[ve],!r.hasOwnProperty(ve)||ce===de||ce===void 0&&de===void 0||Vf(e,n,ve,ce,r,de);return}}for(var te in a)ce=a[te],a.hasOwnProperty(te)&&ce!=null&&!r.hasOwnProperty(te)&&Qt(e,n,te,null,r,ce);for(ye in r)ce=r[ye],de=a[ye],!r.hasOwnProperty(ye)||ce===de||ce==null&&de==null||Qt(e,n,ye,ce,r,de)}function cg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&cg(_)){for(_=0,R=u.responseEnd,r+=1;r<a.length;r++){var V=a[r],oe=V.startTime;if(oe>R)break;var ve=V.transferSize,ye=V.initiatorType;ve&&cg(ye)&&(V=V.responseEnd,_+=ve*(V<R?1:(R-oe)/(V-oe)))}if(--r,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jf=null,Xf=null;function Ql(e){return e.nodeType===9?e:e.ownerDocument}function ug(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Wf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qf=null;function _b(){var e=window.event;return e&&e.type==="popstate"?e===qf?!1:(qf=e,!0):(qf=null,!1)}var dg=typeof setTimeout=="function"?setTimeout:void 0,bb=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,yb=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(e){return hg.resolve(null).then(e).catch(Sb)}:dg;function Sb(e){setTimeout(function(){throw e})}function es(e){return e==="head"}function pg(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),Er(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Do(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Do(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Ci]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Do(e.ownerDocument.body);a=u}while(a);Er(n)}function mg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Yf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yf(a),xs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Mb(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ci])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function Eb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=yi(e.nextSibling),e===null))return null;return e}function gg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=yi(e.nextSibling),e===null))return null;return e}function Zf(e){return e.data==="$?"||e.data==="$~"}function Kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Tb(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function yi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Qf=null;function xg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return yi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function vg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function _g(e,n,a){switch(n=Ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Do(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);xs(e)}var Si=new Map,bg=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ma=H.d;H.d={f:Ab,r:wb,D:Rb,C:Cb,L:Nb,m:Db,X:Lb,S:Ub,M:zb};function Ab(){var e=Ma.f(),n=Vl();return e||n}function wb(e){var n=ra(e);n!==null&&n.tag===5&&n.type==="form"?Im(n):Ma.r(e)}var yr=typeof document>"u"?null:document;function yg(e,n,a){var r=yr;if(r&&typeof n=="string"&&n){var u=Vt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),bg.has(u)||(bg.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),On(n,"link",e),dn(n),r.head.appendChild(n)))}}function Rb(e){Ma.D(e),yg("dns-prefetch",e,null)}function Cb(e,n){Ma.C(e,n),yg("preconnect",e,n)}function Nb(e,n,a){Ma.L(e,n,a);var r=yr;if(r&&e&&n){var u='link[rel="preload"][as="'+Vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Vt(a.imageSizes)+'"]')):u+='[href="'+Vt(e)+'"]';var f=u;switch(n){case"style":f=Sr(e);break;case"script":f=Mr(e)}Si.has(f)||(e=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Si.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Uo(f))||n==="script"&&r.querySelector(Lo(f))||(n=r.createElement("link"),On(n,"link",e),dn(n),r.head.appendChild(n)))}}function Db(e,n){Ma.m(e,n);var a=yr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Vt(r)+'"][href="'+Vt(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Mr(e)}if(!Si.has(f)&&(e=b({rel:"modulepreload",href:e},n),Si.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(f)))return}r=a.createElement("link"),On(r,"link",e),dn(r),a.head.appendChild(r)}}}function Ub(e,n,a){Ma.S(e,n,a);var r=yr;if(r&&e){var u=pi(r).hoistableStyles,f=Sr(e);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=r.querySelector(Uo(f)))R.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Si.get(f))&&Jf(e,a);var V=_=r.createElement("link");dn(V),On(V,"link",e),V._p=new Promise(function(oe,ve){V.onload=oe,V.onerror=ve}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,$l(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function Lb(e,n){Ma.X(e,n);var a=yr;if(a&&e){var r=pi(a).hoistableScripts,u=Mr(e),f=r.get(u);f||(f=a.querySelector(Lo(u)),f||(e=b({src:e,async:!0},n),(n=Si.get(u))&&$f(e,n),f=a.createElement("script"),dn(f),On(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function zb(e,n){Ma.M(e,n);var a=yr;if(a&&e){var r=pi(a).hoistableScripts,u=Mr(e),f=r.get(u);f||(f=a.querySelector(Lo(u)),f||(e=b({src:e,async:!0,type:"module"},n),(n=Si.get(u))&&$f(e,n),f=a.createElement("script"),dn(f),On(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Sg(e,n,a,r){var u=(u=ee.current)?Jl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Sr(a.href),a=pi(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Sr(a.href);var f=pi(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(Uo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),Si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(e,a),f||Ob(u,e,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mr(a),a=pi(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Sr(e){return'href="'+Vt(e)+'"'}function Uo(e){return'link[rel="stylesheet"]['+e+"]"}function Mg(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Ob(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),On(n,"link",a),dn(n),e.head.appendChild(n))}function Mr(e){return'[src="'+Vt(e)+'"]'}function Lo(e){return"script[async]"+e}function Eg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(r)return n.instance=r,dn(r),r;var u=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),dn(r),On(r,"style",u),$l(r,a.precedence,e),n.instance=r;case"stylesheet":u=Sr(a.href);var f=e.querySelector(Uo(u));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;r=Mg(a),(u=Si.get(u))&&Jf(r,u),f=(e.ownerDocument||e).createElement("link"),dn(f);var _=f;return _._p=new Promise(function(R,V){_.onload=R,_.onerror=V}),On(f,"link",r),n.state.loading|=4,$l(f,a.precedence,e),n.instance=f;case"script":return f=Mr(a.src),(u=e.querySelector(Lo(f)))?(n.instance=u,dn(u),u):(r=a,(u=Si.get(f))&&(r=b({},a),$f(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),dn(u),On(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,$l(r,a.precedence,e));return n.instance}function $l(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var R=r[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function $f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ec=null;function Tg(e,n,a){if(ec===null){var r=new Map,u=ec=new Map;u.set(a,r)}else u=ec,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ci]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var R=r.get(_);R?R.push(f):r.set(_,[f])}}return r}function Ag(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Pb(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ib(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Sr(r.href),f=n.querySelector(Uo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=tc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,r=Mg(r),(u=Si.get(u))&&Jf(r,u),f=f.createElement("link"),dn(f);var _=f;_._p=new Promise(function(R,V){_.onload=R,_.onerror=V}),On(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=tc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ed=0;function Fb(e,n){return e.stylesheets&&e.count===0&&ic(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ed===0&&(ed=62500*vb());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ed?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nc=null;function ic(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nc=new Map,n.forEach(Bb,e),nc=null,tc.call(e))}function Bb(e,n){if(!(n.state.loading&4)){var a=nc.get(e);if(a)var r=a.get(null);else{a=new Map,nc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=tc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var zo={$$typeof:I,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function Hb(e,n,a,r,u,f,_,R,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=We(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.hiddenUpdates=We(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Rg(e,n,a,r,u,f,_,R,V,oe,ve,ye){return e=new Hb(e,n,a,_,V,oe,ve,ye,R),n=1,f===!0&&(n|=24),f=ri(3,null,null,n),e.current=f,f.stateNode=e,n=Uu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Pu(f),e}function Cg(e){return e?(e=er,e):er}function Ng(e,n,a,r,u,f){u=Cg(u),r.context===null?r.context=u:r.pendingContext=u,r=Va(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ja(e,r,n),a!==null&&(Qn(a,e,n),fo(a,e,n))}function Dg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function td(e,n){Dg(e,n),(e=e.alternate)&&Dg(e,n)}function Ug(e){if(e.tag===13||e.tag===31){var n=Ss(e,67108864);n!==null&&Qn(n,e,67108864),td(e,67108864)}}function Lg(e){if(e.tag===13||e.tag===31){var n=fi();n=Vi(n);var a=Ss(e,n);a!==null&&Qn(a,e,n),td(e,n)}}var ac=!0;function Gb(e,n,a,r){var u=z.T;z.T=null;var f=H.p;try{H.p=2,nd(e,n,a,r)}finally{H.p=f,z.T=u}}function kb(e,n,a,r){var u=z.T;z.T=null;var f=H.p;try{H.p=8,nd(e,n,a,r)}finally{H.p=f,z.T=u}}function nd(e,n,a,r){if(ac){var u=id(r);if(u===null)kf(e,n,r,sc,a),Og(e,r);else if(jb(u,e,n,a,r))r.stopPropagation();else if(Og(e,r),n&4&&-1<Vb.indexOf(e)){for(;u!==null;){var f=ra(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Re(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var V=1<<31-Fe(_);R.entanglements[1]|=V,_&=~V}Ki(f),(Bt&6)===0&&(Gl=Ue()+500,Ro(0))}}break;case 31:case 13:R=Ss(f,2),R!==null&&Qn(R,f,2),Vl(),td(f,2)}if(f=id(r),f===null&&kf(e,n,r,sc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else kf(e,n,r,null,a)}}function id(e){return e=au(e),ad(e)}var sc=null;function ad(e){if(sc=null,e=Xi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=m(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return sc=e,null}function zg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zt()){case U:return 2;case T:return 8;case ie:case _e:return 32;case Te:return 268435456;default:return 32}default:return 32}}var sd=!1,ts=null,ns=null,is=null,Oo=new Map,Po=new Map,as=[],Vb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Og(e,n){switch(e){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function Io(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ra(n),n!==null&&Ug(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function jb(e,n,a,r,u){switch(n){case"focusin":return ts=Io(ts,e,n,a,r,u),!0;case"dragenter":return ns=Io(ns,e,n,a,r,u),!0;case"mouseover":return is=Io(is,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Oo.set(f,Io(Oo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Po.set(f,Io(Po.get(f)||null,e,n,a,r,u)),!0}return!1}function Pg(e){var n=Xi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Oa(e.priority,function(){Lg(a)});return}}else if(n===31){if(n=m(a),n!==null){e.blockedOn=n,Oa(e.priority,function(){Lg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=id(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);iu=r,a.target.dispatchEvent(r),iu=null}else return n=ra(a),n!==null&&Ug(n),e.blockedOn=a,!1;n.shift()}return!0}function Ig(e,n,a){rc(e)&&a.delete(n)}function Xb(){sd=!1,ts!==null&&rc(ts)&&(ts=null),ns!==null&&rc(ns)&&(ns=null),is!==null&&rc(is)&&(is=null),Oo.forEach(Ig),Po.forEach(Ig)}function oc(e,n){e.blockedOn===n&&(e.blockedOn=null,sd||(sd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Xb)))}var lc=null;function Fg(e){lc!==e&&(lc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){lc===e&&(lc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(ad(r||a)===null)continue;break}var f=ra(a);f!==null&&(e.splice(n,3),n-=3,nf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Er(e){function n(V){return oc(V,e)}ts!==null&&oc(ts,e),ns!==null&&oc(ns,e),is!==null&&oc(is,e),Oo.forEach(n),Po.forEach(n);for(var a=0;a<as.length;a++){var r=as[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<as.length&&(a=as[0],a.blockedOn===null);)Pg(a),a.blockedOn===null&&as.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[gn]||null;if(typeof f=="function")_||Fg(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[gn]||null)R=_.formAction;else if(ad(u)!==null)continue}else R=_.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),Fg(a)}}}function Bg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function rd(e){this._internalRoot=e}cc.prototype.render=rd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=fi();Ng(a,r,e,n,null,null)},cc.prototype.unmount=rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ng(e.current,2,null,e,null,null),Vl(),n[Ri]=null}};function cc(e){this._internalRoot=e}cc.prototype.unstable_scheduleHydration=function(e){if(e){var n=za();e={blockedOn:null,target:e,priority:n};for(var a=0;a<as.length&&n!==0&&n<as[a].priority;a++);as.splice(a,0,e),a===0&&Pg(e)}};var Hg=t.version;if(Hg!=="19.2.7")throw Error(s(527,Hg,"19.2.7"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Wb={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{pe=uc.inject(Wb),me=uc}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=qm,f=Ym,_=Zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Rg(e,1,!1,null,null,a,r,null,u,f,_,Bg),e[Ri]=n.current,Gf(e),new rd(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=qm,_=Ym,R=Zm,V=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Rg(e,1,!0,n,a??null,r,u,V,f,_,R,Bg),n.context=Cg(null),a=n.current,r=fi(),r=Vi(r),u=Va(r),u.callback=null,ja(a,u,r),a=r,n.current.lanes=a,at(n,a),Ki(n),e[Ri]=n.current,Gf(e),new cc(n)},Bo.version="19.2.7",Bo}var Kg;function ny(){if(Kg)return cd.exports;Kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),cd.exports=ty(),cd.exports}var iy=ny();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sy=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Qg=o=>{const t=sy(o);return t.charAt(0).toUpperCase()+t.slice(1)},rv=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),ry=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=je.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...m},g)=>je.createElement("svg",{ref:g,...oy,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:rv("lucide",l),...!c&&!ry(m)&&{"aria-hidden":"true"},...m},[...d.map(([p,S])=>je.createElement(p,S)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=(o,t)=>{const i=je.forwardRef(({className:s,...l},c)=>je.createElement(ly,{ref:c,iconNode:t,className:rv(`lucide-${ay(Qg(o))}`,`lucide-${o}`,s),...l}));return i.displayName=Qg(o),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],uy=Lt("activity",cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Jg=Lt("book-open",fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"m11 10 3 3",key:"fzmg1i"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",key:"p4q2r7"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",key:"wy6l02"}]],$g=Lt("brush",dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],py=Lt("calendar",hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ov=Lt("check",my);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],xy=Lt("clock",gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],hd=Lt("compass",vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],by=Lt("copy",_y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ho=Lt("cpu",yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Qd=Lt("download",Sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],Ey=Lt("eraser",My);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Ay=Lt("file-spreadsheet",Ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ex=Lt("file-text",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],pd=Lt("git-branch",Ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ny=Lt("layers",Cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Uy=Lt("maximize-2",Dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],zy=Lt("minimize-2",Ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Py=Lt("network",Oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],tx=Lt("palette",Iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],nx=Lt("phone-call",Fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Hy=Lt("play",By);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],ky=Lt("redo-2",Gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],md=Lt("rocket",Vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ix=Lt("search",jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Wy=Lt("send",Xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Hr=Lt("sparkles",qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],ax=Lt("terminal",Yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],sx=Lt("trash-2",Zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Qy=Lt("undo-2",Ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],fc=Lt("volume-2",Jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],dc=Lt("volume-x",$y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],tS=Lt("workflow",eS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],gd=Lt("x",nS),fn={name:"Farhan Kabir",title:"AI Engineer & Research Scientist",projects:[{id:"typerush",title:"TypeRush",description:"An immersive, atmospheric typing survival game with real-time sound synthesis, particle effects, and adaptive visual themes.",category:"AI",techStack:["React 19","TailwindCSS","Web Audio API","Express","Gemini API","Firebase"],architecture:"Zero-re-render character buffer ref grids running at stable 60fps, integrated with a server-side Gemini 3.5 API and real-time Firestore synchronization.",timeline:"Sep 2024 - Mar 2025",metrics:[{label:"Audio latency",value:"0ms (Vanilla)"},{label:"Matchmaking Sync",value:"<25ms"},{label:"Frame rate",value:"60fps"}],problem:"Traditional typing practice software lacks sensory engagement and interactive mechanics.",solution:"TypeRush translates text into kinetic physics bodies drifting towards cockpit shield barriers, utilizing Web Audio oscillators and AI-generated themes.",roadmap:["Real-time payload glitch attacks","WebAssembly client-side offline dictionary sync"]},{id:"ink-home",title:"The Ink Home",description:"An immersive 3D spatial publication portal and dynamic metadata indexer that syncs Medium RSS feeds into interactive WebGL carousels.",category:"Productivity",techStack:["React 18","Vite","Three.js","Framer Motion","TailwindCSS","Node.js"],architecture:"Four-tier cascade HTTP profile scraper separating client IPs from Medium telemetry blocks, coupled with local SQLite indexing.",timeline:"Jan 2025 - Present",metrics:[{label:"Avatar fetch success",value:"100%"},{label:"RSS sync latency",value:"<320ms"},{label:"Scene frame rate",value:"60fps"}],problem:"Traditional editorial blogs use flat, uninspired layouts and struggle to fetch writer profiles through Cloudflare.",solution:"The Ink Home structures publication feeds into physics-based 3D carousels and bento grids, utilizing backend User-Agent masquerading and proxies.",roadmap:["WebGL spatial audio integration","Instant newsletter subscription via Substack API"]},{id:"safeside",title:"SafeSide Predictor",description:"A tactical football analytics command center providing live match simulations, league databases, and deep Poisson risk modeling.",category:"SaaS",techStack:["React","Supabase","TailwindCSS","Express","Gemini AI","Recharts"],architecture:"Express backend match simulation pipeline integrated with Supabase edge tables and a cron-scheduled prediction verification service.",timeline:"Mar 2025 - Present",metrics:[{label:"Poisson model F1",value:"0.88"},{label:"Live updates latency",value:"<150ms"},{label:"Prediction checks",value:"Automated"}],problem:"Football tactical analysis and predictions are highly fragmented, lacking real-time simulations and secure prediction logging.",solution:"SafeSide combines live result feeds from Football-Data API with Gemini AI analysis and Supabase storage to automate match diagnostics.",roadmap:["Weather-impact modeling via OpenWeather API","Multi-league Poisson distribution charts"]},{id:"emotion-detection",title:"Multimodal Emotion Recognizer",description:"A neural model correlating micro-shifts in vocal pitch with linguistic markers in real-time chat data to form high-fidelity emotional feedback loops.",category:"NLP",techStack:["Python","BERT","Wav2Vec 2.0","React","FastAPI"],architecture:"Bimodal architecture merging a spectrogram acoustic encoder with a transformer text classifier using an attention-weighted fusion layer.",timeline:"Feb 2023 - Oct 2023",metrics:[{label:"Bimodal accuracy",value:"92.3%"},{label:"Speech inference",value:"18ms"},{label:"Dataset size",value:"50GB"}],problem:"Linguistic-only sentiment analysis fails to capture sarcasm, urgency, or vocalized psychological distress of remote clinical patients.",solution:"This project fuses audio tonal variance with text semantic embeddings, allowing diagnostic assistants to register non-verbal mood changes.",roadmap:["Edge deployment on mobile web views","Expansion to diagnostic indicators for pediatric developmental screens"]},{id:"portfolio-os",title:"FarhanOS Living Environment",description:"The interactive AI-powered operating sandbox displaying deep visual performance, real-time audio narrator engines, and complete project orchestration.",category:"Design",techStack:["React","TailwindCSS","Framer Motion","Express","Gemini API"],architecture:"Unidirectional virtualized OS window controller with standard sandbox processes and real-time TTS speech generators.",timeline:"Mar 2026 - Present",metrics:[{label:"Render pipeline frame rate",value:"120fps"},{label:"Asset payload size",value:"142KB"},{label:"Custom APIs",value:"3"}],problem:"Static grid portfolios fail to showcase the sophisticated architectural capabilities, design sensibilities, and core AI engineering talents of top-tier builders.",solution:"FarhanOS encapsulates complete interactive applications into a beautiful, cohesive operating desktop running local simulator widgets.",roadmap:["Add support for complete sandboxed terminal commands","Introduce voice command parsing natively via browser audio APIs"]}],papers:[{id:"prompt-break-2025",title:"Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs",authors:"Rifat Ahmed Khan, Tasnia Tasnim Momo, Farhan Kabir, Faisal Muhammad Shah",journal:"IEEE ICCIT",year:2025,abstract:"Large Language Models (LLMs) are vulnerable to adversarial prompt injection attacks that bypass safety alignments. This paper proposes a perplexity-based detection framework to flag adversarial prompt injections. By measuring the perplexity of input tokens, the system classifies adversarial requests in real-time before they propagate to the LLM core, securing safety alignments.",methodology:"Calculated perplexity thresholds using local causal LLM token prediction distributions. Built a real-time detection barrier filtering out adversarial inputs.",dataset:"Adversarial prompt datasets (AdvGLUE, Jailbreak Trigger Sets) combined with clean user queries.",pipeline:"User Prompt -> Tokenization -> Perplexity Scoring -> Threshold Boundary check -> LLM Ingestion / Block Alert.",results:[{metric:"Detection Accuracy",score:"94.2%"},{metric:"False Positive Rate",score:"2.8%"},{metric:"Latency overhead",score:"4.5ms"},{metric:"Jailbreak F1 Score",score:"0.935"}],citation:"Khan, R. A., Momo, T. T., Kabir, F., & Shah, F. M. (2025). Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs. 2025 28th ICCIT (IEEE)."},{id:"live-interview-2025",title:"AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision",authors:"Farhan Kabir, M Arman Reza Shah, Razat Biswas",journal:"IEEE ICCIT",year:2025,abstract:"Traditional candidate assessment methods are manual, slow, and prone to subjective bias. This paper introduces an AI-driven live interview pipeline combining Natural Language Processing (NLP) for verbal responses and Computer Vision (CV) for facial sentiment and posture analytics. Real-time assessment scores are compiled dynamically during candidate streams.",methodology:"Fused Wav2Vec 2.0 acoustic transcripts with MediaPipe posture coordinates and custom BERT text classification heads using a late-fusion model.",dataset:"1,200 mock interview recordings annotated by human resource professionals.",pipeline:"Audio/Video Capture -> Transcripts & Keypoint Extraction -> Sentiment & Context Classifier -> Score Matrix Ingestion -> HR Dashboard.",results:[{metric:"Late-fusion Accuracy",score:"91.6%"},{metric:"Response Transcribing",score:"110ms"},{metric:"Posture classification",score:"93.2%"},{metric:"Evaluation Agreement",score:"0.87 (Kappa)"}],citation:"Kabir, F., Shah, M. A. R., & Biswas, R. (2025). AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision. 2025 28th ICCIT (IEEE)."},{id:"emotion-detection-2025",title:"Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques",authors:"Farhan Kabir, M. K. Habib Khan, Fazle Rabby",journal:"IEEE ECCE",year:2025,abstract:"Detecting emotions in text requires understanding context, syntax, and subtle semantic tones. This paper presents a comparative analysis of Natural Language Processing and machine learning models classifying clinical mental distress, depression, and localized emotional states. We demonstrate that custom Transformer models outperform traditional classifiers.",methodology:"Fine-tuned custom BERT and RoBERTa models augmented with emotion-specific classification layers mapping Reddit and social text datasets.",dataset:"90,000 annotated social network text posts spanning multiple clinical emotional distress tiers.",pipeline:"Raw text ingestion -> Lexical Normalization -> Embedding Matrix -> BERT/RoBERTa Classification -> Emotion Output.",results:[{metric:"BERT Accuracy",score:"88.5%"},{metric:"RoBERTa F1-Score",score:"0.908"},{metric:"Training latency",score:"1.2 hrs"},{metric:"Inference speed",score:"3.8ms"}],citation:"Kabir, F., Khan, M. K. H., & Rabby, F. (2025). Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques. 2025 ECCE (IEEE)."},{id:"depression-detection-2023",title:"Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques",authors:"Farhan Kabir, Md. Ali Hossain, A. F. M. Minhazur Rahman, Sadia Zaman Mishu",journal:"IEEE ICCIT",year:2023,abstract:"Linguistic anomalies on social media serve as crucial early indicators of clinical depression. We present a machine learning and transformer-based framework analyzing Reddit text discourse. Mapped negative pronoun density, sleep patterns, and vocabulary shifts, demonstrating strong predictive capabilities for diagnostic support.",methodology:"Fine-tuned RoBERTa models on clinical-grade Reddit depression datasets (r/depression) with custom POS weighting matrices.",dataset:"120,000 distinct anonymized posts annotated by clinical practitioners.",pipeline:"Text Normalization -> Feature Extraction (Lexical & Pronoun) -> RoBERTa Classification -> Clinician Alerts.",results:[{metric:"RoBERTa-Clinical F1",score:"0.914"},{metric:"Baseline Zero-shot F1",score:"0.781"},{metric:"Sensitivity",score:"0.893"},{metric:"Specificity",score:"0.942"}],citation:"Kabir, F., Hossain, M. A., Rahman, A. F. M. M., & Mishu, S. Z. (2023). Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques. 2023 26th ICCIT (IEEE)."}],timeline:[{year:2026,title:"Architect & AI Researcher",company:"Cognitive Diagnostics Lab",role:"Principal systems designer for text analytics and mental wellness semantic mapping NLP assets.",description:"Leading research on LLMs as clinical screening support tooling, authoring publications on clinical mental state evaluation.",achievements:["Designed custom zero-shot and classification-optimized clinical prediction systems","Implemented modern low-latency model evaluation dashboards processing high-volume text queues","Established rigid testing criteria ensuring patient confidentiality and data safety parameters"],technologies:["PyTorch","Transformer NLP","React/Next.js","Go","TailwindCSS v4"]},{year:2024,title:"Senior AI System Dev",company:"Synthetix Solutions",role:"Backend AI systems Architect constructing robust SaaS solutions for custom automation.",description:"Engineered backend pipeline components for TypeRush and SafeSide, connecting client data stores securely with deep learning backends.",achievements:["Decreased standard inference lag by over 30% through selective quantization and model distillation techniques","Built real-time telemetry systems capturing user performance states with sub-10ms capture profiles","Orchestrated automated data extraction workers scaling securely according to traffic profiles"],technologies:["Express/Node.js","Redis","Python","Docker","Google Cloud Platform"]},{year:2022,title:"Full Stack Engineer & Researcher",company:"Mental Health Tech",role:"Frontend lead and mental wellness text classifier research dev.",description:"Conducted rigorous fine-tuning experiments on classic BERT structures, designing clinical-grade data visualizers.",achievements:["Created the first generation interactive mental wellness support system evaluating distress levels","Co-authored 2 high-impact research publications outlining bimodal emotion evaluation metrics","Designed completely responsive portfolio workspaces utilizing high-frequency animations"],technologies:["React","Redux","D3.js","Hugging Face Transformers","Python/Flask"]},{year:2020,title:"Open Source Contributor & Dev",company:"Independent / Farhan Lab",role:"Developing open source utilities and studying linguistic text processing.",description:"Began building interactive web layouts, contributing heavily to developer workspaces and Markdown tooling libraries.",achievements:["Built and deployed TypeRush, an open-source terminal typing game","Developed interactive developer portfolios earning deep community feedback","Acquired expertise in system design, Docker containers, and React orchestration"],technologies:["React","Docker","Framer Motion","Node.js","SQLite"]}],articles:[{id:"nlp-advances-2026",title:"The Shift Towards Fine-Grained Semantic Analysis in Diagnostic AI",category:"Research",readTime:"6 min read",date:"May 12, 2026",excerpt:"Why generic instruction-tuned LLMs cannot compete with ultra-targeted, tiny Transformers when diagnosing specific cognitive markers.",content:"Large Language Models (LLMs) excel at general reasoning, but clinical settings demand specialized models. A generic LLM trained to answer general queries frequently fails to spot the highly nuanced structural degradation occurring in clinical depression or early cognitive decline. Under closer evaluation, fine-tuning lightweight models (such as RoBERTa or custom BERT variations) on certified mental health datasets yields vastly superior classification accuracies. Furthermore, targeted models are small enough to run serverless, offering massive cost reductions and absolute data privacy compliance by executing locally on self-hosted servers."},{id:"saas-architecture-2025",title:"Designing Zero-Cold-Start SaaS Applications for Hugging Face Models",category:"Engineering",readTime:"8 min read",date:"Nov 24, 2025",excerpt:"An architect's blueprint on deploying containerized neural workloads for serverless pricing tiers without degrading user experience.",content:"Hosting large machine learning models is expensive, and container startup latency remains a significant friction point. By quantizing standard transformer architectures to ONNX and compiling models directly to WebAssembly (WASM), we can shift computational loads directly on the user's client device. In cases where server-side classification is mandatory, configuring Docker layers to preload weights during the container build stage reduces cold starts by over 70%. When combined with Redis caching, scale-to-zero serverless environments run smoothly without missing a beat."},{id:"ux-design-developers",title:"The Aesthetic Developer Engine: Why High-Performance Styling is Critical",category:"Design",readTime:"5 min read",date:"Jan 15, 2025",excerpt:"Crafting UI layouts that mirror real-time operational flows. How premium typography, subtle shadows, and responsive motion reinforce user trust.",content:"Developers commonly prioritize raw functional code over visual appearance, but human-computer interaction research demonstrates that visual aesthetics dictate user trust. A high-contrast, responsive interface with precise layout alignments communicates professional craftsmanship and reliability. By utilizing modern web styling frameworks, we can create incredibly smooth, beautiful, and accessible environments that enhance the user experience."}],buildLogs:[{id:"bl-v1.4",date:"May 2026",version:"v1.4.2",title:"Audio Node Fusion & Neural Voice Synthesizer",description:"Integrated server-side Text-to-Speech API directly using Gemini TTS models, delivering high-fidelity audio narration on-demand across FarhanOS articles.",tasksCompleted:["Constructed custom caching layer for audio binaries on the server","Implemented voice control deck with visual waveform indicator","Configured optimized low-footprint audio transmission protocols"],metricsChanged:[{metric:"Voice rendering",before:"Not Supported",after:"1.2s avg"},{metric:"Client weight",before:"1.4MB",after:"1.1MB"}]},{id:"bl-v1.3",date:"Feb 2026",version:"v1.3.0",title:"Command Palette & Context Engine Upgrade",description:"Engineered a global search utility enabling visitors to query project, research, and contact systems instantly via a keyboard-triggered modal.",tasksCompleted:["Built full-text token matching indexing portfolio vectors","Added smooth canvas overlays using Framer Motion","Mapped custom system operations (AI Site Tour, OS Theme Presets)"],metricsChanged:[{metric:"Search launch lag",before:"420ms",after:"3ms"},{metric:"Indices cached",before:"0",after:"48 items"}]}],skills:[{name:"PyTorch",category:"AI/ML",weight:5},{name:"Large Language Models",category:"AI/ML",weight:5},{name:"Hugging Face & BERT",category:"AI/ML",weight:5},{name:"Clinical NLP Pipelines",category:"AI/ML",weight:5},{name:"Python (NumPy, SciPy)",category:"AI/ML",weight:4},{name:"React / Next.js",category:"Frontend",weight:5},{name:"Tailwind CSS v4",category:"Frontend",weight:5},{name:"Framer Motion",category:"Frontend",weight:4},{name:"D3.js Visualization",category:"Frontend",weight:4},{name:"Node.js & Express",category:"Backend",weight:5},{name:"Go (Golang)",category:"Backend",weight:4},{name:"Redis Caching",category:"Backend",weight:4},{name:"PostgreSQL",category:"Backend",weight:5},{name:"Docker / Containers",category:"Systems & Devops",weight:5},{name:"Git & Linux",category:"Systems & Devops",weight:5},{name:"Academic Research",category:"Research & Science",weight:5},{name:"Mental Health Tech",category:"Research & Science",weight:5}],gardenNodes:[{id:"nlp",label:"Clinical NLP",category:"Research"},{id:"transformers",label:"Transformers",category:"Intelligence"},{id:"bert",label:"BERT Models",category:"Intelligence"},{id:"depression",label:"Depression Dialectics",category:"Research"},{id:"autism",label:"Autism Micro-shifts",category:"Research"},{id:"ethics",label:"Research Ethics",category:"Humanity"},{id:"saas",label:"AI SaaS Architectures",category:"Engineering"},{id:"telemetry",label:"Telemetry Profiling",category:"Engineering"},{id:"databases",label:"PostgreSQL Schema",category:"Engineering"}]};async function iS(o){const t=window.atob(o),i=t.length,s=new Uint8Array(i);for(let v=0;v<i;v++)s[v]=t.charCodeAt(v);const l=Math.floor(i/2),c=new Int16Array(s.buffer,0,l),d=window.AudioContext||window.webkitAudioContext;if(!d)throw new Error("Web Audio API is not supported in this browser.");const m=new d,p=m.createBuffer(1,l,24e3),S=p.getChannelData(0);for(let v=0;v<l;v++)S[v]=c[v]/32768;const b=m.createBufferSource();return b.buffer=p,b.connect(m.destination),b.start(0),{source:b,ctx:m,stop:()=>{try{b.stop(),m.close()}catch{}}}}function xd(o=800,t=.03){try{const i=window.AudioContext||window.webkitAudioContext;if(!i)return;const s=new i,l=s.createOscillator(),c=s.createGain();l.type="sine",l.frequency.setValueAtTime(o,s.currentTime),l.frequency.exponentialRampToValueAtTime(100,s.currentTime+t),c.gain.setValueAtTime(.015,s.currentTime),c.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+t),l.connect(c),c.connect(s.destination),l.start(),l.stop(s.currentTime+t),setTimeout(()=>s.close(),200)}catch{}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xh="184",aS=0,rx=1,sS=2,Fc=1,rS=2,Yo=3,ps=0,ei=1,Ai=2,Na=0,kr=1,jc=2,ox=3,lx=4,oS=5,Hs=100,lS=101,cS=102,uS=103,fS=104,dS=200,hS=201,pS=202,mS=203,Jd=204,$d=205,gS=206,xS=207,vS=208,_S=209,bS=210,yS=211,SS=212,MS=213,ES=214,eh=0,th=1,nh=2,jr=3,ih=4,ah=5,sh=6,rh=7,lv=0,TS=1,AS=2,na=0,cv=1,uv=2,fv=3,dv=4,hv=5,pv=6,mv=7,gv=300,js=301,Xr=302,vd=303,_d=304,Jc=306,oh=1e3,Ca=1001,lh=1002,Pn=1003,wS=1004,hc=1005,Gn=1006,bd=1007,ks=1008,wi=1009,xv=1010,vv=1011,Qo=1012,Wh=1013,aa=1014,ea=1015,Ua=1016,qh=1017,Yh=1018,Jo=1020,_v=35902,bv=35899,yv=1021,Sv=1022,Hi=1023,La=1026,Vs=1027,Mv=1028,Zh=1029,Xs=1030,Kh=1031,Qh=1033,Bc=33776,Hc=33777,Gc=33778,kc=33779,ch=35840,uh=35841,fh=35842,dh=35843,hh=36196,ph=37492,mh=37496,gh=37488,xh=37489,Xc=37490,vh=37491,_h=37808,bh=37809,yh=37810,Sh=37811,Mh=37812,Eh=37813,Th=37814,Ah=37815,wh=37816,Rh=37817,Ch=37818,Nh=37819,Dh=37820,Uh=37821,Lh=36492,zh=36494,Oh=36495,Ph=36283,Ih=36284,Wc=36285,Fh=36286,RS=3200,cx=0,CS=1,ds="",Ei="srgb",qc="srgb-linear",Yc="linear",qt="srgb",Tr=7680,ux=519,NS=512,DS=513,US=514,Jh=515,LS=516,zS=517,$h=518,OS=519,fx=35044,dx="300 es",ta=2e3,Zc=2001;function PS(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function IS(){const o=Kc("canvas");return o.style.display="block",o}const hx={};function px(...o){const t="THREE."+o.shift();console.log(t,...o)}function Ev(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ct(...o){o=Ev(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Ut(...o){o=Ev(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Bh(...o){const t=o.join(" ");t in hx||(hx[t]=!0,ct(...o))}function FS(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const BS={[eh]:th,[nh]:sh,[ih]:rh,[jr]:ah,[th]:eh,[sh]:nh,[rh]:ih,[ah]:jr};class qs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=Math.PI/180,Hh=180/Math.PI;function $o(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function Ct(o,t,i){return Math.max(t,Math.min(i,o))}function HS(o,t){return(o%t+t)%t}function Sd(o,t,i){return(1-i)*o+i*t}function Go(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Jn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const ap=class ap{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ct(this.x,t.x,i.x),this.y=Ct(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ct(this.x,t,i),this.y=Ct(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ct(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ct(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ap.prototype.isVector2=!0;let Yt=ap;class Yr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,m){let g=s[l+0],p=s[l+1],S=s[l+2],b=s[l+3],v=c[d+0],E=c[d+1],A=c[d+2],D=c[d+3];if(b!==D||g!==v||p!==E||S!==A){let M=g*v+p*E+S*A+b*D;M<0&&(v=-v,E=-E,A=-A,D=-D,M=-M);let y=1-m;if(M<.9995){const N=Math.acos(M),I=Math.sin(N);y=Math.sin(y*N)/I,m=Math.sin(m*N)/I,g=g*y+v*m,p=p*y+E*m,S=S*y+A*m,b=b*y+D*m}else{g=g*y+v*m,p=p*y+E*m,S=S*y+A*m,b=b*y+D*m;const N=1/Math.sqrt(g*g+p*p+S*S+b*b);g*=N,p*=N,S*=N,b*=N}}t[i]=g,t[i+1]=p,t[i+2]=S,t[i+3]=b}static multiplyQuaternionsFlat(t,i,s,l,c,d){const m=s[l],g=s[l+1],p=s[l+2],S=s[l+3],b=c[d],v=c[d+1],E=c[d+2],A=c[d+3];return t[i]=m*A+S*b+g*E-p*v,t[i+1]=g*A+S*v+p*b-m*E,t[i+2]=p*A+S*E+m*v-g*b,t[i+3]=S*A-m*b-g*v-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,m=Math.cos,g=Math.sin,p=m(s/2),S=m(l/2),b=m(c/2),v=g(s/2),E=g(l/2),A=g(c/2);switch(d){case"XYZ":this._x=v*S*b+p*E*A,this._y=p*E*b-v*S*A,this._z=p*S*A+v*E*b,this._w=p*S*b-v*E*A;break;case"YXZ":this._x=v*S*b+p*E*A,this._y=p*E*b-v*S*A,this._z=p*S*A-v*E*b,this._w=p*S*b+v*E*A;break;case"ZXY":this._x=v*S*b-p*E*A,this._y=p*E*b+v*S*A,this._z=p*S*A+v*E*b,this._w=p*S*b-v*E*A;break;case"ZYX":this._x=v*S*b-p*E*A,this._y=p*E*b+v*S*A,this._z=p*S*A-v*E*b,this._w=p*S*b+v*E*A;break;case"YZX":this._x=v*S*b+p*E*A,this._y=p*E*b+v*S*A,this._z=p*S*A-v*E*b,this._w=p*S*b-v*E*A;break;case"XZY":this._x=v*S*b-p*E*A,this._y=p*E*b-v*S*A,this._z=p*S*A+v*E*b,this._w=p*S*b+v*E*A;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],m=i[5],g=i[9],p=i[2],S=i[6],b=i[10],v=s+m+b;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(S-g)*E,this._y=(c-p)*E,this._z=(d-l)*E}else if(s>m&&s>b){const E=2*Math.sqrt(1+s-m-b);this._w=(S-g)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(c+p)/E}else if(m>b){const E=2*Math.sqrt(1+m-s-b);this._w=(c-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(g+S)/E}else{const E=2*Math.sqrt(1+b-s-m);this._w=(d-l)/E,this._x=(c+p)/E,this._y=(g+S)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ct(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,m=i._x,g=i._y,p=i._z,S=i._w;return this._x=s*S+d*m+l*p-c*g,this._y=l*S+d*g+c*m-s*p,this._z=c*S+d*p+s*g-l*m,this._w=d*S-s*m-l*g-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,m=this.dot(t);m<0&&(s=-s,l=-l,c=-c,d=-d,m=-m);let g=1-i;if(m<.9995){const p=Math.acos(m),S=Math.sin(p);g=Math.sin(g*p)/S,i=Math.sin(i*p)/S,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+d*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sp=class sp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(mx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(mx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,m=t.z,g=t.w,p=2*(d*l-m*s),S=2*(m*i-c*l),b=2*(c*s-d*i);return this.x=i+g*p+d*b-m*S,this.y=s+g*S+m*p-c*b,this.z=l+g*b+c*S-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ct(this.x,t.x,i.x),this.y=Ct(this.y,t.y,i.y),this.z=Ct(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ct(this.x,t,i),this.y=Ct(this.y,t,i),this.z=Ct(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ct(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,m=i.y,g=i.z;return this.x=l*g-c*m,this.y=c*d-s*g,this.z=s*m-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Md.copy(this).projectOnVector(t),this.sub(Md)}reflect(t){return this.sub(Md.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ct(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sp.prototype.isVector3=!0;let re=sp;const Md=new re,mx=new Yr,rp=class rp{constructor(t,i,s,l,c,d,m,g,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,m,g,p)}set(t,i,s,l,c,d,m,g,p){const S=this.elements;return S[0]=t,S[1]=l,S[2]=m,S[3]=i,S[4]=c,S[5]=g,S[6]=s,S[7]=d,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],m=s[3],g=s[6],p=s[1],S=s[4],b=s[7],v=s[2],E=s[5],A=s[8],D=l[0],M=l[3],y=l[6],N=l[1],I=l[4],L=l[7],X=l[2],P=l[5],B=l[8];return c[0]=d*D+m*N+g*X,c[3]=d*M+m*I+g*P,c[6]=d*y+m*L+g*B,c[1]=p*D+S*N+b*X,c[4]=p*M+S*I+b*P,c[7]=p*y+S*L+b*B,c[2]=v*D+E*N+A*X,c[5]=v*M+E*I+A*P,c[8]=v*y+E*L+A*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],m=t[5],g=t[6],p=t[7],S=t[8];return i*d*S-i*m*p-s*c*S+s*m*g+l*c*p-l*d*g}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],m=t[5],g=t[6],p=t[7],S=t[8],b=S*d-m*p,v=m*g-S*c,E=p*c-d*g,A=i*b+s*v+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/A;return t[0]=b*D,t[1]=(l*p-S*s)*D,t[2]=(m*s-l*d)*D,t[3]=v*D,t[4]=(S*i-l*g)*D,t[5]=(l*c-m*i)*D,t[6]=E*D,t[7]=(s*g-p*i)*D,t[8]=(d*i-s*c)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,m){const g=Math.cos(c),p=Math.sin(c);return this.set(s*g,s*p,-s*(g*d+p*m)+d+t,-l*p,l*g,-l*(-p*d+g*m)+m+i,0,0,1),this}scale(t,i){return this.premultiply(Ed.makeScale(t,i)),this}rotate(t){return this.premultiply(Ed.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ed.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};rp.prototype.isMatrix3=!0;let xt=rp;const Ed=new xt,gx=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xx=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GS(){const o={enabled:!0,workingColorSpace:qc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===qt&&(l.r=Da(l.r),l.g=Da(l.g),l.b=Da(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qt&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ds?Yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Bh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Bh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[qc]:{primaries:t,whitePoint:s,transfer:Yc,toXYZ:gx,fromXYZ:xx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:t,whitePoint:s,transfer:qt,toXYZ:gx,fromXYZ:xx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),o}const Rt=GS();function Da(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Vr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ar;class kS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ar===void 0&&(Ar=Kc("canvas")),Ar.width=t.width,Ar.height=t.height;const l=Ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ar}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Kc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Da(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Da(i[s]/255)*255):i[s]=Da(i[s]);return{data:i,width:t.width,height:t.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let VS=0;class ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=$o(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,m=l.length;d<m;d++)l[d].isDataTexture?c.push(Td(l[d].image)):c.push(Td(l[d]))}else c=Td(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Td(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?kS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let jS=0;const Ad=new re;class jn extends qs{constructor(t=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,s=Ca,l=Ca,c=Gn,d=ks,m=Hi,g=wi,p=jn.DEFAULT_ANISOTROPY,S=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=$o(),this.name="",this.source=new ep(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=m,this.internalFormat=null,this.type=g,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ad).x}get height(){return this.source.getSize(Ad).y}get depth(){return this.source.getSize(Ad).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oh:t.x=t.x-Math.floor(t.x);break;case Ca:t.x=t.x<0?0:1;break;case lh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oh:t.y=t.y-Math.floor(t.y);break;case Ca:t.y=t.y<0?0:1;break;case lh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=gv;jn.DEFAULT_ANISOTROPY=1;const op=class op{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const g=t.elements,p=g[0],S=g[4],b=g[8],v=g[1],E=g[5],A=g[9],D=g[2],M=g[6],y=g[10];if(Math.abs(S-v)<.01&&Math.abs(b-D)<.01&&Math.abs(A-M)<.01){if(Math.abs(S+v)<.1&&Math.abs(b+D)<.1&&Math.abs(A+M)<.1&&Math.abs(p+E+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(p+1)/2,L=(E+1)/2,X=(y+1)/2,P=(S+v)/4,B=(b+D)/4,w=(A+M)/4;return I>L&&I>X?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=P/s,c=B/s):L>X?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=P/l,c=w/l):X<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(X),s=B/c,l=w/c),this.set(s,l,c,i),this}let N=Math.sqrt((M-A)*(M-A)+(b-D)*(b-D)+(v-S)*(v-S));return Math.abs(N)<.001&&(N=1),this.x=(M-A)/N,this.y=(b-D)/N,this.z=(v-S)/N,this.w=Math.acos((p+E+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ct(this.x,t.x,i.x),this.y=Ct(this.y,t.y,i.y),this.z=Ct(this.z,t.z,i.z),this.w=Ct(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ct(this.x,t,i),this.y=Ct(this.y,t,i),this.z=Ct(this.z,t,i),this.w=Ct(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ct(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};op.prototype.isVector4=!0;let mn=op;class XS extends qs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new mn(0,0,t,i),this.scissorTest=!1,this.viewport=new mn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new jn(l),d=s.count;for(let m=0;m<d;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new ep(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends XS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Tv extends jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class WS extends jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qc=class Qc{constructor(t,i,s,l,c,d,m,g,p,S,b,v,E,A,D,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,m,g,p,S,b,v,E,A,D,M)}set(t,i,s,l,c,d,m,g,p,S,b,v,E,A,D,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=d,y[9]=m,y[13]=g,y[2]=p,y[6]=S,y[10]=b,y[14]=v,y[3]=E,y[7]=A,y[11]=D,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qc().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/wr.setFromMatrixColumn(t,0).length(),c=1/wr.setFromMatrixColumn(t,1).length(),d=1/wr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),m=Math.sin(s),g=Math.cos(l),p=Math.sin(l),S=Math.cos(c),b=Math.sin(c);if(t.order==="XYZ"){const v=d*S,E=d*b,A=m*S,D=m*b;i[0]=g*S,i[4]=-g*b,i[8]=p,i[1]=E+A*p,i[5]=v-D*p,i[9]=-m*g,i[2]=D-v*p,i[6]=A+E*p,i[10]=d*g}else if(t.order==="YXZ"){const v=g*S,E=g*b,A=p*S,D=p*b;i[0]=v+D*m,i[4]=A*m-E,i[8]=d*p,i[1]=d*b,i[5]=d*S,i[9]=-m,i[2]=E*m-A,i[6]=D+v*m,i[10]=d*g}else if(t.order==="ZXY"){const v=g*S,E=g*b,A=p*S,D=p*b;i[0]=v-D*m,i[4]=-d*b,i[8]=A+E*m,i[1]=E+A*m,i[5]=d*S,i[9]=D-v*m,i[2]=-d*p,i[6]=m,i[10]=d*g}else if(t.order==="ZYX"){const v=d*S,E=d*b,A=m*S,D=m*b;i[0]=g*S,i[4]=A*p-E,i[8]=v*p+D,i[1]=g*b,i[5]=D*p+v,i[9]=E*p-A,i[2]=-p,i[6]=m*g,i[10]=d*g}else if(t.order==="YZX"){const v=d*g,E=d*p,A=m*g,D=m*p;i[0]=g*S,i[4]=D-v*b,i[8]=A*b+E,i[1]=b,i[5]=d*S,i[9]=-m*S,i[2]=-p*S,i[6]=E*b+A,i[10]=v-D*b}else if(t.order==="XZY"){const v=d*g,E=d*p,A=m*g,D=m*p;i[0]=g*S,i[4]=-b,i[8]=p*S,i[1]=v*b+D,i[5]=d*S,i[9]=E*b-A,i[2]=A*b-E,i[6]=m*S,i[10]=D*b+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qS,t,YS)}lookAt(t,i,s){const l=this.elements;return di.subVectors(t,i),di.lengthSq()===0&&(di.z=1),di.normalize(),rs.crossVectors(s,di),rs.lengthSq()===0&&(Math.abs(s.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),rs.crossVectors(s,di)),rs.normalize(),pc.crossVectors(di,rs),l[0]=rs.x,l[4]=pc.x,l[8]=di.x,l[1]=rs.y,l[5]=pc.y,l[9]=di.y,l[2]=rs.z,l[6]=pc.z,l[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],m=s[4],g=s[8],p=s[12],S=s[1],b=s[5],v=s[9],E=s[13],A=s[2],D=s[6],M=s[10],y=s[14],N=s[3],I=s[7],L=s[11],X=s[15],P=l[0],B=l[4],w=l[8],F=l[12],Q=l[1],G=l[5],K=l[9],ue=l[13],he=l[2],W=l[6],z=l[10],H=l[14],le=l[3],ge=l[7],ae=l[11],C=l[15];return c[0]=d*P+m*Q+g*he+p*le,c[4]=d*B+m*G+g*W+p*ge,c[8]=d*w+m*K+g*z+p*ae,c[12]=d*F+m*ue+g*H+p*C,c[1]=S*P+b*Q+v*he+E*le,c[5]=S*B+b*G+v*W+E*ge,c[9]=S*w+b*K+v*z+E*ae,c[13]=S*F+b*ue+v*H+E*C,c[2]=A*P+D*Q+M*he+y*le,c[6]=A*B+D*G+M*W+y*ge,c[10]=A*w+D*K+M*z+y*ae,c[14]=A*F+D*ue+M*H+y*C,c[3]=N*P+I*Q+L*he+X*le,c[7]=N*B+I*G+L*W+X*ge,c[11]=N*w+I*K+L*z+X*ae,c[15]=N*F+I*ue+L*H+X*C,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],m=t[5],g=t[9],p=t[13],S=t[2],b=t[6],v=t[10],E=t[14],A=t[3],D=t[7],M=t[11],y=t[15],N=g*E-p*v,I=m*E-p*b,L=m*v-g*b,X=d*E-p*S,P=d*v-g*S,B=d*b-m*S;return i*(D*N-M*I+y*L)-s*(A*N-M*X+y*P)+l*(A*I-D*X+y*B)-c*(A*L-D*P+M*B)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],m=t[5],g=t[6],p=t[7],S=t[8],b=t[9],v=t[10],E=t[11],A=t[12],D=t[13],M=t[14],y=t[15],N=i*m-s*d,I=i*g-l*d,L=i*p-c*d,X=s*g-l*m,P=s*p-c*m,B=l*p-c*g,w=S*D-b*A,F=S*M-v*A,Q=S*y-E*A,G=b*M-v*D,K=b*y-E*D,ue=v*y-E*M,he=N*ue-I*K+L*G+X*Q-P*F+B*w;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/he;return t[0]=(m*ue-g*K+p*G)*W,t[1]=(l*K-s*ue-c*G)*W,t[2]=(D*B-M*P+y*X)*W,t[3]=(v*P-b*B-E*X)*W,t[4]=(g*Q-d*ue-p*F)*W,t[5]=(i*ue-l*Q+c*F)*W,t[6]=(M*L-A*B-y*I)*W,t[7]=(S*B-v*L+E*I)*W,t[8]=(d*K-m*Q+p*w)*W,t[9]=(s*Q-i*K-c*w)*W,t[10]=(A*P-D*L+y*N)*W,t[11]=(b*L-S*P-E*N)*W,t[12]=(m*F-d*G-g*w)*W,t[13]=(i*G-s*F+l*w)*W,t[14]=(D*I-A*X-M*N)*W,t[15]=(S*X-b*I+v*N)*W,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,m=t.y,g=t.z,p=c*d,S=c*m;return this.set(p*d+s,p*m-l*g,p*g+l*m,0,p*m+l*g,S*m+s,S*g-l*d,0,p*g-l*m,S*g+l*d,c*g*g+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,m=i._z,g=i._w,p=c+c,S=d+d,b=m+m,v=c*p,E=c*S,A=c*b,D=d*S,M=d*b,y=m*b,N=g*p,I=g*S,L=g*b,X=s.x,P=s.y,B=s.z;return l[0]=(1-(D+y))*X,l[1]=(E+L)*X,l[2]=(A-I)*X,l[3]=0,l[4]=(E-L)*P,l[5]=(1-(v+y))*P,l[6]=(M+N)*P,l[7]=0,l[8]=(A+I)*B,l[9]=(M-N)*B,l[10]=(1-(v+D))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=wr.set(l[0],l[1],l[2]).length();const m=wr.set(l[4],l[5],l[6]).length(),g=wr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Pi.copy(this);const p=1/d,S=1/m,b=1/g;return Pi.elements[0]*=p,Pi.elements[1]*=p,Pi.elements[2]*=p,Pi.elements[4]*=S,Pi.elements[5]*=S,Pi.elements[6]*=S,Pi.elements[8]*=b,Pi.elements[9]*=b,Pi.elements[10]*=b,i.setFromRotationMatrix(Pi),s.x=d,s.y=m,s.z=g,this}makePerspective(t,i,s,l,c,d,m=ta,g=!1){const p=this.elements,S=2*c/(i-t),b=2*c/(s-l),v=(i+t)/(i-t),E=(s+l)/(s-l);let A,D;if(g)A=c/(d-c),D=d*c/(d-c);else if(m===ta)A=-(d+c)/(d-c),D=-2*d*c/(d-c);else if(m===Zc)A=-d/(d-c),D=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return p[0]=S,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=b,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,d,m=ta,g=!1){const p=this.elements,S=2/(i-t),b=2/(s-l),v=-(i+t)/(i-t),E=-(s+l)/(s-l);let A,D;if(g)A=1/(d-c),D=d/(d-c);else if(m===ta)A=-2/(d-c),D=-(d+c)/(d-c);else if(m===Zc)A=-1/(d-c),D=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return p[0]=S,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=b,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=A,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Qc.prototype.isMatrix4=!0;let Mn=Qc;const wr=new re,Pi=new Mn,qS=new re(0,0,0),YS=new re(1,1,1),rs=new re,pc=new re,di=new re,vx=new Mn,_x=new Yr;class Ws{constructor(t=0,i=0,s=0,l=Ws.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],m=l[8],g=l[1],p=l[5],S=l[9],b=l[2],v=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ct(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(m,E),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-b,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-b,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-Ct(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ct(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-b,c)):(this._x=0,this._y=Math.atan2(m,E));break;case"XZY":this._z=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-S,E),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return vx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return _x.setFromEuler(this),this.setFromQuaternion(_x,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ws.DEFAULT_ORDER="XYZ";class Av{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ZS=0;const bx=new re,Rr=new Yr,Ea=new Mn,mc=new re,ko=new re,KS=new re,QS=new Yr,yx=new re(1,0,0),Sx=new re(0,1,0),Mx=new re(0,0,1),Ex={type:"added"},JS={type:"removed"},Cr={type:"childadded",child:null},wd={type:"childremoved",child:null};class ti extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const t=new re,i=new Ws,s=new Yr,l=new re(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Mn},normalMatrix:{value:new xt}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(yx,t)}rotateY(t){return this.rotateOnAxis(Sx,t)}rotateZ(t){return this.rotateOnAxis(Mx,t)}translateOnAxis(t,i){return bx.copy(t).applyQuaternion(this.quaternion),this.position.add(bx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(yx,t)}translateY(t){return this.translateOnAxis(Sx,t)}translateZ(t){return this.translateOnAxis(Mx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?mc.copy(t):mc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(ko,mc,this.up):Ea.lookAt(mc,ko,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Rr.setFromRotationMatrix(Ea),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ex),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(JS),wd.child=t,this.dispatchEvent(wd),wd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ex),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,KS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,QS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(m,g){return m[g.uuid]===void 0&&(m[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const g=m.shapes;if(Array.isArray(g))for(let p=0,S=g.length;p<S;p++){const b=g[p];c(t.shapes,b)}else c(t.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let g=0,p=this.material.length;g<p;g++)m.push(c(t.materials,this.material[g]));l.material=m}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const g=this.animations[m];l.animations.push(c(t.animations,g))}}if(i){const m=d(t.geometries),g=d(t.materials),p=d(t.textures),S=d(t.images),b=d(t.shapes),v=d(t.skeletons),E=d(t.animations),A=d(t.nodes);m.length>0&&(s.geometries=m),g.length>0&&(s.materials=g),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),b.length>0&&(s.shapes=b),v.length>0&&(s.skeletons=v),E.length>0&&(s.animations=E),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(m){const g=[];for(const p in m){const S=m[p];delete S.metadata,g.push(S)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}ti.DEFAULT_UP=new re(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gc extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $S={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const m=this._targetRay,g=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const D of t.hand.values()){const M=i.getJointPose(D,s),y=this._getHandJoint(p,D);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const S=p.joints["index-finger-tip"],b=p.joints["thumb-tip"],v=S.position.distanceTo(b.position),E=.02,A=.005;p.inputState.pinching&&v>E+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=E-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:t,target:this})));m!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent($S)))}return m!==null&&(m.visible=l!==null),g!==null&&(g.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new gc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Cd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ft{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Rt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Rt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Rt.workingColorSpace){if(t=HS(t,1),i=Ct(i,0,1),s=Ct(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Cd(d,c,t+1/3),this.g=Cd(d,c,t),this.b=Cd(d,c,t-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(t,i=Ei){function s(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],m=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ct("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ei){const s=wv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ei){return Rt.workingToColorSpace(Hn.copy(this),t),Math.round(Ct(Hn.r*255,0,255))*65536+Math.round(Ct(Hn.g*255,0,255))*256+Math.round(Ct(Hn.b*255,0,255))}getHexString(t=Ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Rt.workingColorSpace){Rt.workingToColorSpace(Hn.copy(this),i);const s=Hn.r,l=Hn.g,c=Hn.b,d=Math.max(s,l,c),m=Math.min(s,l,c);let g,p;const S=(m+d)/2;if(m===d)g=0,p=0;else{const b=d-m;switch(p=S<=.5?b/(d+m):b/(2-d-m),d){case s:g=(l-c)/b+(l<c?6:0);break;case l:g=(c-s)/b+2;break;case c:g=(s-l)/b+4;break}g/=6}return t.h=g,t.s=p,t.l=S,t}getRGB(t,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Hn.copy(this),i),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=Ei){Rt.workingToColorSpace(Hn.copy(this),t);const i=Hn.r,s=Hn.g,l=Hn.b;return t!==Ei?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(os),this.setHSL(os.h+t,os.s+i,os.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(os),t.getHSL(xc);const s=Sd(os.h,xc.h,i),l=Sd(os.s,xc.s,i),c=Sd(os.l,xc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Ft;Ft.NAMES=wv;class tp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(t),this.density=i}clone(){return new tp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class e1 extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ws,this.environmentIntensity=1,this.environmentRotation=new Ws,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ii=new re,Ta=new re,Nd=new re,Aa=new re,Nr=new re,Dr=new re,Tx=new re,Dd=new re,Ud=new re,Ld=new re,zd=new mn,Od=new mn,Pd=new mn;class Bi{constructor(t=new re,i=new re,s=new re){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ii.subVectors(t,i),l.cross(Ii);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ii.subVectors(l,i),Ta.subVectors(s,i),Nd.subVectors(t,i);const d=Ii.dot(Ii),m=Ii.dot(Ta),g=Ii.dot(Nd),p=Ta.dot(Ta),S=Ta.dot(Nd),b=d*p-m*m;if(b===0)return c.set(0,0,0),null;const v=1/b,E=(p*g-m*S)*v,A=(d*S-m*g)*v;return c.set(1-E-A,A,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(t,i,s,l,c,d,m,g){return this.getBarycoord(t,i,s,l,Aa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,Aa.x),g.addScaledVector(d,Aa.y),g.addScaledVector(m,Aa.z),g)}static getInterpolatedAttribute(t,i,s,l,c,d){return zd.setScalar(0),Od.setScalar(0),Pd.setScalar(0),zd.fromBufferAttribute(t,i),Od.fromBufferAttribute(t,s),Pd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(zd,c.x),d.addScaledVector(Od,c.y),d.addScaledVector(Pd,c.z),d}static isFrontFacing(t,i,s,l){return Ii.subVectors(s,i),Ta.subVectors(t,i),Ii.cross(Ta).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Ii.cross(Ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Bi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,m;Nr.subVectors(l,s),Dr.subVectors(c,s),Dd.subVectors(t,s);const g=Nr.dot(Dd),p=Dr.dot(Dd);if(g<=0&&p<=0)return i.copy(s);Ud.subVectors(t,l);const S=Nr.dot(Ud),b=Dr.dot(Ud);if(S>=0&&b<=S)return i.copy(l);const v=g*b-S*p;if(v<=0&&g>=0&&S<=0)return d=g/(g-S),i.copy(s).addScaledVector(Nr,d);Ld.subVectors(t,c);const E=Nr.dot(Ld),A=Dr.dot(Ld);if(A>=0&&E<=A)return i.copy(c);const D=E*p-g*A;if(D<=0&&p>=0&&A<=0)return m=p/(p-A),i.copy(s).addScaledVector(Dr,m);const M=S*A-E*b;if(M<=0&&b-S>=0&&E-A>=0)return Tx.subVectors(c,l),m=(b-S)/(b-S+(E-A)),i.copy(l).addScaledVector(Tx,m);const y=1/(M+D+v);return d=D*y,m=v*y,i.copy(s).addScaledVector(Nr,d).addScaledVector(Dr,m)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class el{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Fi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Fi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Fi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,m=c.count;d<m;d++)t.isMesh===!0?t.getVertexPosition(d,Fi):Fi.fromBufferAttribute(c,d),Fi.applyMatrix4(t.matrixWorld),this.expandByPoint(Fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fi),Fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vo),_c.subVectors(this.max,Vo),Ur.subVectors(t.a,Vo),Lr.subVectors(t.b,Vo),zr.subVectors(t.c,Vo),ls.subVectors(Lr,Ur),cs.subVectors(zr,Lr),Os.subVectors(Ur,zr);let i=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Os.z,Os.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Os.z,0,-Os.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Os.y,Os.x,0];return!Id(i,Ur,Lr,zr,_c)||(i=[1,0,0,0,1,0,0,0,1],!Id(i,Ur,Lr,zr,_c))?!1:(bc.crossVectors(ls,cs),i=[bc.x,bc.y,bc.z],Id(i,Ur,Lr,zr,_c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wa=[new re,new re,new re,new re,new re,new re,new re,new re],Fi=new re,vc=new el,Ur=new re,Lr=new re,zr=new re,ls=new re,cs=new re,Os=new re,Vo=new re,_c=new re,bc=new re,Ps=new re;function Id(o,t,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){Ps.fromArray(o,c);const m=l.x*Math.abs(Ps.x)+l.y*Math.abs(Ps.y)+l.z*Math.abs(Ps.z),g=t.dot(Ps),p=i.dot(Ps),S=s.dot(Ps);if(Math.max(-Math.max(g,p,S),Math.min(g,p,S))>m)return!1}return!0}const Sn=new re,yc=new Yt;let t1=0;class Gi extends qs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t1++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=fx,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(t),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Go(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Go(i,this.array)),i}setX(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Go(i,this.array)),i}setY(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Go(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Go(i,this.array)),i}setW(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array),c=Jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fx&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Rv extends Gi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Cv extends Gi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Nn extends Gi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const n1=new el,jo=new re,Fd=new re;class $c{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):n1.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jo.subVectors(t,this.center);const i=jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(jo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jo.copy(t.center).add(Fd)),this.expandByPoint(jo.copy(t.center).sub(Fd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let i1=0;const Mi=new Mn,Bd=new ti,Or=new re,hi=new el,Xo=new el,Cn=new re;class ni extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(PS(t)?Cv:Rv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xt().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,i,s){return Mi.makeTranslation(t,i,s),this.applyMatrix4(Mi),this}scale(t,i,s){return Mi.makeScale(t,i,s),this.applyMatrix4(Mi),this}lookAt(t){return Bd.lookAt(t),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Nn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $c);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const s=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const m=i[c];Xo.setFromBufferAttribute(m),this.morphTargetsRelative?(Cn.addVectors(hi.min,Xo.min),hi.expandByPoint(Cn),Cn.addVectors(hi.max,Xo.max),hi.expandByPoint(Cn)):(hi.expandByPoint(Xo.min),hi.expandByPoint(Xo.max))}hi.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Cn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Cn));if(i)for(let c=0,d=i.length;c<d;c++){const m=i[c],g=this.morphTargetsRelative;for(let p=0,S=m.count;p<S;p++)Cn.fromBufferAttribute(m,p),g&&(Or.fromBufferAttribute(t,p),Cn.add(Or)),l=Math.max(l,s.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),m=[],g=[];for(let w=0;w<s.count;w++)m[w]=new re,g[w]=new re;const p=new re,S=new re,b=new re,v=new Yt,E=new Yt,A=new Yt,D=new re,M=new re;function y(w,F,Q){p.fromBufferAttribute(s,w),S.fromBufferAttribute(s,F),b.fromBufferAttribute(s,Q),v.fromBufferAttribute(c,w),E.fromBufferAttribute(c,F),A.fromBufferAttribute(c,Q),S.sub(p),b.sub(p),E.sub(v),A.sub(v);const G=1/(E.x*A.y-A.x*E.y);isFinite(G)&&(D.copy(S).multiplyScalar(A.y).addScaledVector(b,-E.y).multiplyScalar(G),M.copy(b).multiplyScalar(E.x).addScaledVector(S,-A.x).multiplyScalar(G),m[w].add(D),m[F].add(D),m[Q].add(D),g[w].add(M),g[F].add(M),g[Q].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let w=0,F=N.length;w<F;++w){const Q=N[w],G=Q.start,K=Q.count;for(let ue=G,he=G+K;ue<he;ue+=3)y(t.getX(ue+0),t.getX(ue+1),t.getX(ue+2))}const I=new re,L=new re,X=new re,P=new re;function B(w){X.fromBufferAttribute(l,w),P.copy(X);const F=m[w];I.copy(F),I.sub(X.multiplyScalar(X.dot(F))).normalize(),L.crossVectors(P,F);const G=L.dot(g[w])<0?-1:1;d.setXYZW(w,I.x,I.y,I.z,G)}for(let w=0,F=N.length;w<F;++w){const Q=N[w],G=Q.start,K=Q.count;for(let ue=G,he=G+K;ue<he;ue+=3)B(t.getX(ue+0)),B(t.getX(ue+1)),B(t.getX(ue+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,E=s.count;v<E;v++)s.setXYZ(v,0,0,0);const l=new re,c=new re,d=new re,m=new re,g=new re,p=new re,S=new re,b=new re;if(t)for(let v=0,E=t.count;v<E;v+=3){const A=t.getX(v+0),D=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,M),S.subVectors(d,c),b.subVectors(l,c),S.cross(b),m.fromBufferAttribute(s,A),g.fromBufferAttribute(s,D),p.fromBufferAttribute(s,M),m.add(S),g.add(S),p.add(S),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(D,g.x,g.y,g.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,E=i.count;v<E;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),S.subVectors(d,c),b.subVectors(l,c),S.cross(b),s.setXYZ(v+0,S.x,S.y,S.z),s.setXYZ(v+1,S.x,S.y,S.z),s.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Cn.fromBufferAttribute(t,i),Cn.normalize(),t.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(m,g){const p=m.array,S=m.itemSize,b=m.normalized,v=new p.constructor(g.length*S);let E=0,A=0;for(let D=0,M=g.length;D<M;D++){m.isInterleavedBufferAttribute?E=g[D]*m.data.stride+m.offset:E=g[D]*S;for(let y=0;y<S;y++)v[A++]=p[E++]}return new Gi(v,S,b)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ni,s=this.index.array,l=this.attributes;for(const m in l){const g=l[m],p=t(g,s);i.setAttribute(m,p)}const c=this.morphAttributes;for(const m in c){const g=[],p=c[m];for(let S=0,b=p.length;S<b;S++){const v=p[S],E=t(v,s);g.push(E)}i.morphAttributes[m]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let m=0,g=d.length;m<g;m++){const p=d[m];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(t[p]=g[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const p=s[g];t.data.attributes[g]=p.toJSON(t.data)}const l={};let c=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],S=[];for(let b=0,v=p.length;b<v;b++){const E=p[b];S.push(E.toJSON(t.data))}S.length>0&&(l[g]=S,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const m=this.boundingSphere;return m!==null&&(t.data.boundingSphere=m.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const c=t.morphAttributes;for(const p in c){const S=[],b=c[p];for(let v=0,E=b.length;v<E;v++)S.push(b[v].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,S=d.length;p<S;p++){const b=d[p];this.addGroup(b.start,b.count,b.materialIndex)}const m=t.boundingBox;m!==null&&(this.boundingBox=m.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let a1=0;class tl extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=kr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=$d,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ux,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(s.blending=this.blending),this.side!==ps&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Jd&&(s.blendSrc=this.blendSrc),this.blendDst!==$d&&(s.blendDst=this.blendDst),this.blendEquation!==Hs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ux&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const m in c){const g=c[m];delete g.metadata,d.push(g)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ra=new re,Hd=new re,Sc=new re,us=new re,Gd=new re,Mc=new re,kd=new re;class Nv{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ra)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ra.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ra.copy(this.origin).addScaledVector(this.direction,i),Ra.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Hd.copy(t).add(i).multiplyScalar(.5),Sc.copy(i).sub(t).normalize(),us.copy(this.origin).sub(Hd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Sc),m=us.dot(this.direction),g=-us.dot(Sc),p=us.lengthSq(),S=Math.abs(1-d*d);let b,v,E,A;if(S>0)if(b=d*g-m,v=d*m-g,A=c*S,b>=0)if(v>=-A)if(v<=A){const D=1/S;b*=D,v*=D,E=b*(b+d*v+2*m)+v*(d*b+v+2*g)+p}else v=c,b=Math.max(0,-(d*v+m)),E=-b*b+v*(v+2*g)+p;else v=-c,b=Math.max(0,-(d*v+m)),E=-b*b+v*(v+2*g)+p;else v<=-A?(b=Math.max(0,-(-d*c+m)),v=b>0?-c:Math.min(Math.max(-c,-g),c),E=-b*b+v*(v+2*g)+p):v<=A?(b=0,v=Math.min(Math.max(-c,-g),c),E=v*(v+2*g)+p):(b=Math.max(0,-(d*c+m)),v=b>0?c:Math.min(Math.max(-c,-g),c),E=-b*b+v*(v+2*g)+p);else v=d>0?-c:c,b=Math.max(0,-(d*v+m)),E=-b*b+v*(v+2*g)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,b),l&&l.copy(Hd).addScaledVector(Sc,v),E}intersectSphere(t,i){Ra.subVectors(t.center,this.origin);const s=Ra.dot(this.direction),l=Ra.dot(Ra)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),m=s-d,g=s+d;return g<0?null:m<0?this.at(g,i):this.at(m,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,m,g;const p=1/this.direction.x,S=1/this.direction.y,b=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),S>=0?(c=(t.min.y-v.y)*S,d=(t.max.y-v.y)*S):(c=(t.max.y-v.y)*S,d=(t.min.y-v.y)*S),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),b>=0?(m=(t.min.z-v.z)*b,g=(t.max.z-v.z)*b):(m=(t.max.z-v.z)*b,g=(t.min.z-v.z)*b),s>g||m>l)||((m>s||s!==s)&&(s=m),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ra)!==null}intersectTriangle(t,i,s,l,c){Gd.subVectors(i,t),Mc.subVectors(s,t),kd.crossVectors(Gd,Mc);let d=this.direction.dot(kd),m;if(d>0){if(l)return null;m=1}else if(d<0)m=-1,d=-d;else return null;us.subVectors(this.origin,t);const g=m*this.direction.dot(Mc.crossVectors(us,Mc));if(g<0)return null;const p=m*this.direction.dot(Gd.cross(us));if(p<0||g+p>d)return null;const S=-m*us.dot(kd);return S<0?null:this.at(S/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gr extends tl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ws,this.combine=lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ax=new Mn,Is=new Nv,Ec=new $c,wx=new re,Tc=new re,Ac=new re,wc=new re,Vd=new re,Rc=new re,Rx=new re,Cc=new re;class $n extends ti{constructor(t=new ni,i=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const m=this.morphTargetInfluences;if(c&&m){Rc.set(0,0,0);for(let g=0,p=c.length;g<p;g++){const S=m[g],b=c[g];S!==0&&(Vd.fromBufferAttribute(b,t),d?Rc.addScaledVector(Vd,S):Rc.addScaledVector(Vd.sub(i),S))}i.add(Rc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ec.copy(s.boundingSphere),Ec.applyMatrix4(c),Is.copy(t.ray).recast(t.near),!(Ec.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Ec,wx)===null||Is.origin.distanceToSquared(wx)>(t.far-t.near)**2))&&(Ax.copy(c).invert(),Is.copy(t.ray).applyMatrix4(Ax),!(s.boundingBox!==null&&Is.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Is)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,m=c.index,g=c.attributes.position,p=c.attributes.uv,S=c.attributes.uv1,b=c.attributes.normal,v=c.groups,E=c.drawRange;if(m!==null)if(Array.isArray(d))for(let A=0,D=v.length;A<D;A++){const M=v[A],y=d[M.materialIndex],N=Math.max(M.start,E.start),I=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let L=N,X=I;L<X;L+=3){const P=m.getX(L),B=m.getX(L+1),w=m.getX(L+2);l=Nc(this,y,t,s,p,S,b,P,B,w),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),D=Math.min(m.count,E.start+E.count);for(let M=A,y=D;M<y;M+=3){const N=m.getX(M),I=m.getX(M+1),L=m.getX(M+2);l=Nc(this,d,t,s,p,S,b,N,I,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(d))for(let A=0,D=v.length;A<D;A++){const M=v[A],y=d[M.materialIndex],N=Math.max(M.start,E.start),I=Math.min(g.count,Math.min(M.start+M.count,E.start+E.count));for(let L=N,X=I;L<X;L+=3){const P=L,B=L+1,w=L+2;l=Nc(this,y,t,s,p,S,b,P,B,w),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),D=Math.min(g.count,E.start+E.count);for(let M=A,y=D;M<y;M+=3){const N=M,I=M+1,L=M+2;l=Nc(this,d,t,s,p,S,b,N,I,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function s1(o,t,i,s,l,c,d,m){let g;if(t.side===ei?g=s.intersectTriangle(d,c,l,!0,m):g=s.intersectTriangle(l,c,d,t.side===ps,m),g===null)return null;Cc.copy(m),Cc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Cc);return p<i.near||p>i.far?null:{distance:p,point:Cc.clone(),object:o}}function Nc(o,t,i,s,l,c,d,m,g,p){o.getVertexPosition(m,Tc),o.getVertexPosition(g,Ac),o.getVertexPosition(p,wc);const S=s1(o,t,i,s,Tc,Ac,wc,Rx);if(S){const b=new re;Bi.getBarycoord(Rx,Tc,Ac,wc,b),l&&(S.uv=Bi.getInterpolatedAttribute(l,m,g,p,b,new Yt)),c&&(S.uv1=Bi.getInterpolatedAttribute(c,m,g,p,b,new Yt)),d&&(S.normal=Bi.getInterpolatedAttribute(d,m,g,p,b,new re),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const v={a:m,b:g,c:p,normal:new re,materialIndex:0};Bi.getNormal(Tc,Ac,wc,v.normal),S.face=v,S.barycoord=b}return S}class r1 extends jn{constructor(t=null,i=1,s=1,l,c,d,m,g,p=Pn,S=Pn,b,v){super(null,d,m,g,p,S,l,c,b,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jd=new re,o1=new re,l1=new xt;class Bs{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=jd.subVectors(s,i).cross(o1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(jd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||l1.getNormalMatrix(t),l=this.coplanarPoint(jd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new $c,c1=new Yt(.5,.5),Dc=new re;class Dv{constructor(t=new Bs,i=new Bs,s=new Bs,l=new Bs,c=new Bs,d=new Bs){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const m=this.planes;return m[0].copy(t),m[1].copy(i),m[2].copy(s),m[3].copy(l),m[4].copy(c),m[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ta,s=!1){const l=this.planes,c=t.elements,d=c[0],m=c[1],g=c[2],p=c[3],S=c[4],b=c[5],v=c[6],E=c[7],A=c[8],D=c[9],M=c[10],y=c[11],N=c[12],I=c[13],L=c[14],X=c[15];if(l[0].setComponents(p-d,E-S,y-A,X-N).normalize(),l[1].setComponents(p+d,E+S,y+A,X+N).normalize(),l[2].setComponents(p+m,E+b,y+D,X+I).normalize(),l[3].setComponents(p-m,E-b,y-D,X-I).normalize(),s)l[4].setComponents(g,v,M,L).normalize(),l[5].setComponents(p-g,E-v,y-M,X-L).normalize();else if(l[4].setComponents(p-g,E-v,y-M,X-L).normalize(),i===ta)l[5].setComponents(p+g,E+v,y+M,X+L).normalize();else if(i===Zc)l[5].setComponents(g,v,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);const i=c1.distanceTo(t.center);return Fs.radius=.7071067811865476+i,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Dc.x=l.normal.x>0?t.max.x:t.min.x,Dc.y=l.normal.y>0?t.max.y:t.min.y,Dc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uv extends tl{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cx=new Mn,Gh=new Nv,Uc=new $c,Lc=new re;class u1 extends ti{constructor(t=new ni,i=new Uv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=c,t.ray.intersectsSphere(Uc)===!1)return;Cx.copy(l).invert(),Gh.copy(t.ray).applyMatrix4(Cx);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=m*m,p=s.index,b=s.attributes.position;if(p!==null){const v=Math.max(0,d.start),E=Math.min(p.count,d.start+d.count);for(let A=v,D=E;A<D;A++){const M=p.getX(A);Lc.fromBufferAttribute(b,M),Nx(Lc,M,g,l,t,i,this)}}else{const v=Math.max(0,d.start),E=Math.min(b.count,d.start+d.count);for(let A=v,D=E;A<D;A++)Lc.fromBufferAttribute(b,A),Nx(Lc,A,g,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function Nx(o,t,i,s,l,c,d){const m=Gh.distanceSqToPoint(o);if(m<i){const g=new re;Gh.closestPointToPoint(o,g),g.applyMatrix4(s);const p=l.ray.origin.distanceTo(g);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(m),point:g,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class Lv extends jn{constructor(t=[],i=js,s,l,c,d,m,g,p,S){super(t,i,s,l,c,d,m,g,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wr extends jn{constructor(t,i,s=aa,l,c,d,m=Pn,g=Pn,p,S=La,b=1){if(S!==La&&S!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:b};super(v,l,c,d,m,g,S,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ep(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class f1 extends Wr{constructor(t,i=aa,s=js,l,c,d=Pn,m=Pn,g,p=La){const S={width:t,height:t,depth:1},b=[S,S,S,S,S,S];super(t,t,i,s,l,c,d,m,g,p),this.image=b,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class zv extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class nl extends ni{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const m=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const g=[],p=[],S=[],b=[];let v=0,E=0;A("z","y","x",-1,-1,s,i,t,d,c,0),A("z","y","x",1,-1,s,i,-t,d,c,1),A("x","z","y",1,1,t,s,i,l,d,2),A("x","z","y",1,-1,t,s,-i,l,d,3),A("x","y","z",1,-1,t,i,s,l,c,4),A("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new Nn(p,3)),this.setAttribute("normal",new Nn(S,3)),this.setAttribute("uv",new Nn(b,2));function A(D,M,y,N,I,L,X,P,B,w,F){const Q=L/B,G=X/w,K=L/2,ue=X/2,he=P/2,W=B+1,z=w+1;let H=0,le=0;const ge=new re;for(let ae=0;ae<z;ae++){const C=ae*G-ue;for(let j=0;j<W;j++){const fe=j*Q-K;ge[D]=fe*N,ge[M]=C*I,ge[y]=he,p.push(ge.x,ge.y,ge.z),ge[D]=0,ge[M]=0,ge[y]=P>0?1:-1,S.push(ge.x,ge.y,ge.z),b.push(j/B),b.push(1-ae/w),H+=1}}for(let ae=0;ae<w;ae++)for(let C=0;C<B;C++){const j=v+C+W*ae,fe=v+C+W*(ae+1),Ee=v+(C+1)+W*(ae+1),we=v+(C+1)+W*ae;g.push(j,fe,we),g.push(fe,Ee,we),le+=6}m.addGroup(E,le,F),E+=le,v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ko extends ni{constructor(t=1,i=1,s=1,l=32,c=1,d=!1,m=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:m,thetaLength:g};const p=this;l=Math.floor(l),c=Math.floor(c);const S=[],b=[],v=[],E=[];let A=0;const D=[],M=s/2;let y=0;N(),d===!1&&(t>0&&I(!0),i>0&&I(!1)),this.setIndex(S),this.setAttribute("position",new Nn(b,3)),this.setAttribute("normal",new Nn(v,3)),this.setAttribute("uv",new Nn(E,2));function N(){const L=new re,X=new re;let P=0;const B=(i-t)/s;for(let w=0;w<=c;w++){const F=[],Q=w/c,G=Q*(i-t)+t;for(let K=0;K<=l;K++){const ue=K/l,he=ue*g+m,W=Math.sin(he),z=Math.cos(he);X.x=G*W,X.y=-Q*s+M,X.z=G*z,b.push(X.x,X.y,X.z),L.set(W,B,z).normalize(),v.push(L.x,L.y,L.z),E.push(ue,1-Q),F.push(A++)}D.push(F)}for(let w=0;w<l;w++)for(let F=0;F<c;F++){const Q=D[F][w],G=D[F+1][w],K=D[F+1][w+1],ue=D[F][w+1];(t>0||F!==0)&&(S.push(Q,G,ue),P+=3),(i>0||F!==c-1)&&(S.push(G,K,ue),P+=3)}p.addGroup(y,P,0),y+=P}function I(L){const X=A,P=new Yt,B=new re;let w=0;const F=L===!0?t:i,Q=L===!0?1:-1;for(let K=1;K<=l;K++)b.push(0,M*Q,0),v.push(0,Q,0),E.push(.5,.5),A++;const G=A;for(let K=0;K<=l;K++){const he=K/l*g+m,W=Math.cos(he),z=Math.sin(he);B.x=F*z,B.y=M*Q,B.z=F*W,b.push(B.x,B.y,B.z),v.push(0,Q,0),P.x=W*.5+.5,P.y=z*.5*Q+.5,E.push(P.x,P.y),A++}for(let K=0;K<l;K++){const ue=X+K,he=G+K;L===!0?S.push(he,he+1,ue):S.push(he+1,he,ue),w+=3}p.addGroup(y,w,L===!0?1:2),y+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class eu extends ni{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,m=Math.floor(s),g=Math.floor(l),p=m+1,S=g+1,b=t/m,v=i/g,E=[],A=[],D=[],M=[];for(let y=0;y<S;y++){const N=y*v-d;for(let I=0;I<p;I++){const L=I*b-c;A.push(L,-N,0),D.push(0,0,1),M.push(I/m),M.push(1-y/g)}}for(let y=0;y<g;y++)for(let N=0;N<m;N++){const I=N+p*y,L=N+p*(y+1),X=N+1+p*(y+1),P=N+1+p*y;E.push(I,L,P),E.push(L,X,P)}this.setIndex(E),this.setAttribute("position",new Nn(A,3)),this.setAttribute("normal",new Nn(D,3)),this.setAttribute("uv",new Nn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eu(t.width,t.height,t.widthSegments,t.heightSegments)}}class np extends ni{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,d=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:m},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const g=Math.min(d+m,Math.PI);let p=0;const S=[],b=new re,v=new re,E=[],A=[],D=[],M=[];for(let y=0;y<=s;y++){const N=[],I=y/s;let L=0;y===0&&d===0?L=.5/i:y===s&&g===Math.PI&&(L=-.5/i);for(let X=0;X<=i;X++){const P=X/i;b.x=-t*Math.cos(l+P*c)*Math.sin(d+I*m),b.y=t*Math.cos(d+I*m),b.z=t*Math.sin(l+P*c)*Math.sin(d+I*m),A.push(b.x,b.y,b.z),v.copy(b).normalize(),D.push(v.x,v.y,v.z),M.push(P+L,1-I),N.push(p++)}S.push(N)}for(let y=0;y<s;y++)for(let N=0;N<i;N++){const I=S[y][N+1],L=S[y][N],X=S[y+1][N],P=S[y+1][N+1];(y!==0||d>0)&&E.push(I,L,P),(y!==s-1||g<Math.PI)&&E.push(L,X,P)}this.setIndex(E),this.setAttribute("position",new Nn(A,3)),this.setAttribute("normal",new Nn(D,3)),this.setAttribute("uv",new Nn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new np(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ip extends ni{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,d=0,m=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:d,thetaLength:m},s=Math.floor(s),l=Math.floor(l);const g=[],p=[],S=[],b=[],v=new re,E=new re,A=new re;for(let D=0;D<=s;D++){const M=d+D/s*m;for(let y=0;y<=l;y++){const N=y/l*c;E.x=(t+i*Math.cos(M))*Math.cos(N),E.y=(t+i*Math.cos(M))*Math.sin(N),E.z=i*Math.sin(M),p.push(E.x,E.y,E.z),v.x=t*Math.cos(N),v.y=t*Math.sin(N),A.subVectors(E,v).normalize(),S.push(A.x,A.y,A.z),b.push(y/l),b.push(D/s)}}for(let D=1;D<=s;D++)for(let M=1;M<=l;M++){const y=(l+1)*D+M-1,N=(l+1)*(D-1)+M-1,I=(l+1)*(D-1)+M,L=(l+1)*D+M;g.push(y,N,L),g.push(N,I,L)}this.setIndex(g),this.setAttribute("position",new Nn(p,3)),this.setAttribute("normal",new Nn(S,3)),this.setAttribute("uv",new Nn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ip(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function qr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(Dx(l))l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(Dx(l[0])){const c=[];for(let d=0,m=l.length;d<m;d++)c[d]=l[d].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Vn(o){const t={};for(let i=0;i<o.length;i++){const s=qr(o[i]);for(const l in s)t[l]=s[l]}return t}function Dx(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function d1(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Ov(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Rt.workingColorSpace}const h1={clone:qr,merge:Vn};var p1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends tl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p1,this.fragmentShader=m1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=d1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class g1 extends ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class x1 extends tl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class v1 extends tl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zc=new re,Oc=new Yr,Qi=new re;class Pv extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zc,Oc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Oc,Qi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(zc,Oc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Oc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fs=new re,Ux=new Yt,Lx=new Yt;class Ti extends Pv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Hh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-t/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(fs.x,fs.y).multiplyScalar(-t/fs.z)}getViewSize(t,i){return this.getViewBounds(t,Ux,Lx),i.subVectors(Lx,Ux)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(yd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/g,i-=d.offsetY*s/p,l*=d.width/g,s*=d.height/p}const m=this.filmOffset;m!==0&&(c+=t*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Iv extends Pv{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,m=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,m-=S*this.view.offsetY,g=m-S*this.view.height}this.projectionMatrix.makeOrthographic(c,d,m,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Pr=-90,Ir=1;class _1 extends ti{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ti(Pr,Ir,t,i);l.layers=this.layers,this.add(l);const c=new Ti(Pr,Ir,t,i);c.layers=this.layers,this.add(c);const d=new Ti(Pr,Ir,t,i);d.layers=this.layers,this.add(d);const m=new Ti(Pr,Ir,t,i);m.layers=this.layers,this.add(m);const g=new Ti(Pr,Ir,t,i);g.layers=this.layers,this.add(g);const p=new Ti(Pr,Ir,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,m,g]=i;for(const p of i)this.remove(p);if(t===ta)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===Zc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,m,g,p,S]=this.children,b=t.getRenderTarget(),v=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=D,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,S),t.setRenderTarget(b,v,E),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class b1 extends Ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const lp=class lp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};lp.prototype.isMatrix2=!0;let zx=lp;function Ox(o,t,i,s){const l=y1(s);switch(i){case yv:return o*t;case Mv:return o*t/l.components*l.byteLength;case Zh:return o*t/l.components*l.byteLength;case Xs:return o*t*2/l.components*l.byteLength;case Kh:return o*t*2/l.components*l.byteLength;case Sv:return o*t*3/l.components*l.byteLength;case Hi:return o*t*4/l.components*l.byteLength;case Qh:return o*t*4/l.components*l.byteLength;case Bc:case Hc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Gc:case kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case uh:case dh:return Math.max(o,16)*Math.max(t,8)/4;case ch:case fh:return Math.max(o,8)*Math.max(t,8)/2;case hh:case ph:case gh:case xh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case mh:case Xc:case vh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case _h:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case bh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case yh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Th:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Ah:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case wh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Ch:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Nh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Dh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Uh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Lh:case zh:case Oh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Ph:case Ih:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Wc:case Fh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function y1(o){switch(o){case wi:case xv:return{byteLength:1,components:1};case Qo:case vv:case Ua:return{byteLength:2,components:1};case qh:case Yh:return{byteLength:2,components:4};case aa:case Wh:case ea:return{byteLength:4,components:1};case _v:case bv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xh}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fv(){let o=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function S1(o){const t=new WeakMap;function i(m,g){const p=m.array,S=m.usage,b=p.byteLength,v=o.createBuffer();o.bindBuffer(g,v),o.bufferData(g,p,S),m.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)m.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:m.version,size:b}}function s(m,g,p){const S=g.array,b=g.updateRanges;if(o.bindBuffer(p,m),b.length===0)o.bufferSubData(p,0,S);else{b.sort((E,A)=>E.start-A.start);let v=0;for(let E=1;E<b.length;E++){const A=b[v],D=b[E];D.start<=A.start+A.count+1?A.count=Math.max(A.count,D.start+D.count-A.start):(++v,b[v]=D)}b.length=v+1;for(let E=0,A=b.length;E<A;E++){const D=b[E];o.bufferSubData(p,D.start*S.BYTES_PER_ELEMENT,S,D.start,D.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),t.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=t.get(m);g&&(o.deleteBuffer(g.buffer),t.delete(m))}function d(m,g){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const S=t.get(m);(!S||S.version<m.version)&&t.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const p=t.get(m);if(p===void 0)t.set(m,i(m,g));else if(p.version<m.version){if(p.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,m,g),p.version=m.version}}return{get:l,remove:c,update:d}}var M1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E1=`#ifdef USE_ALPHAHASH
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
#endif`,T1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C1=`#ifdef USE_AOMAP
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
#endif`,N1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D1=`#ifdef USE_BATCHING
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
#endif`,U1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P1=`#ifdef USE_IRIDESCENCE
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
#endif`,I1=`#ifdef USE_BUMPMAP
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
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,j1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,X1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,W1=`#define PI 3.141592653589793
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
} // validated`,q1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Y1=`vec3 transformedNormal = objectNormal;
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
#endif`,Z1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$1="gl_FragColor = linearToOutputTexel( gl_FragColor );",eM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tM=`#ifdef USE_ENVMAP
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
#endif`,nM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iM=`#ifdef USE_ENVMAP
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
#endif`,aM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uM=`#ifdef USE_GRADIENTMAP
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
}`,fM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bM=`PhysicalMaterial material;
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
#endif`,yM=`uniform sampler2D dfgLUT;
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
}`,SM=`
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
#endif`,MM=`#if defined( RE_IndirectDiffuse )
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
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,AM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LM=`#if defined( USE_POINTS_UV )
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
#endif`,zM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BM=`#ifdef USE_MORPHTARGETS
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
#endif`,HM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WM=`#ifdef USE_NORMALMAP
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
#endif`,qM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$M=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lE=`float getShadowMask() {
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
}`,cE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uE=`#ifdef USE_SKINNING
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
#endif`,fE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dE=`#ifdef USE_SKINNING
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
#endif`,hE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xE=`#ifdef USE_TRANSMISSION
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
#endif`,vE=`#ifdef USE_TRANSMISSION
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ME=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EE=`uniform sampler2D t2D;
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
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`#include <common>
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
}`,NE=`#if DEPTH_PACKING == 3200
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
}`,DE=`#define DISTANCE
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
}`,UE=`#define DISTANCE
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`uniform float scale;
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
}`,PE=`uniform vec3 diffuse;
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
}`,IE=`#include <common>
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
}`,FE=`uniform vec3 diffuse;
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
}`,BE=`#define LAMBERT
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
}`,HE=`#define LAMBERT
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
}`,GE=`#define MATCAP
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
}`,kE=`#define MATCAP
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
}`,VE=`#define NORMAL
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
}`,jE=`#define NORMAL
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
}`,XE=`#define PHONG
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
}`,WE=`#define PHONG
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
}`,qE=`#define STANDARD
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
}`,YE=`#define STANDARD
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
}`,ZE=`#define TOON
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
}`,KE=`#define TOON
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
}`,QE=`uniform float size;
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
}`,JE=`uniform vec3 diffuse;
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
}`,$E=`#include <common>
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
}`,eT=`uniform vec3 color;
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
}`,tT=`uniform float rotation;
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
}`,nT=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:M1,alphahash_pars_fragment:E1,alphamap_fragment:T1,alphamap_pars_fragment:A1,alphatest_fragment:w1,alphatest_pars_fragment:R1,aomap_fragment:C1,aomap_pars_fragment:N1,batching_pars_vertex:D1,batching_vertex:U1,begin_vertex:L1,beginnormal_vertex:z1,bsdfs:O1,iridescence_fragment:P1,bumpmap_pars_fragment:I1,clipping_planes_fragment:F1,clipping_planes_pars_fragment:B1,clipping_planes_pars_vertex:H1,clipping_planes_vertex:G1,color_fragment:k1,color_pars_fragment:V1,color_pars_vertex:j1,color_vertex:X1,common:W1,cube_uv_reflection_fragment:q1,defaultnormal_vertex:Y1,displacementmap_pars_vertex:Z1,displacementmap_vertex:K1,emissivemap_fragment:Q1,emissivemap_pars_fragment:J1,colorspace_fragment:$1,colorspace_pars_fragment:eM,envmap_fragment:tM,envmap_common_pars_fragment:nM,envmap_pars_fragment:iM,envmap_pars_vertex:aM,envmap_physical_pars_fragment:mM,envmap_vertex:sM,fog_vertex:rM,fog_pars_vertex:oM,fog_fragment:lM,fog_pars_fragment:cM,gradientmap_pars_fragment:uM,lightmap_pars_fragment:fM,lights_lambert_fragment:dM,lights_lambert_pars_fragment:hM,lights_pars_begin:pM,lights_toon_fragment:gM,lights_toon_pars_fragment:xM,lights_phong_fragment:vM,lights_phong_pars_fragment:_M,lights_physical_fragment:bM,lights_physical_pars_fragment:yM,lights_fragment_begin:SM,lights_fragment_maps:MM,lights_fragment_end:EM,lightprobes_pars_fragment:TM,logdepthbuf_fragment:AM,logdepthbuf_pars_fragment:wM,logdepthbuf_pars_vertex:RM,logdepthbuf_vertex:CM,map_fragment:NM,map_pars_fragment:DM,map_particle_fragment:UM,map_particle_pars_fragment:LM,metalnessmap_fragment:zM,metalnessmap_pars_fragment:OM,morphinstance_vertex:PM,morphcolor_vertex:IM,morphnormal_vertex:FM,morphtarget_pars_vertex:BM,morphtarget_vertex:HM,normal_fragment_begin:GM,normal_fragment_maps:kM,normal_pars_fragment:VM,normal_pars_vertex:jM,normal_vertex:XM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:qM,clearcoat_normal_fragment_maps:YM,clearcoat_pars_fragment:ZM,iridescence_pars_fragment:KM,opaque_fragment:QM,packing:JM,premultiplied_alpha_fragment:$M,project_vertex:eE,dithering_fragment:tE,dithering_pars_fragment:nE,roughnessmap_fragment:iE,roughnessmap_pars_fragment:aE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:rE,shadowmap_vertex:oE,shadowmask_pars_fragment:lE,skinbase_vertex:cE,skinning_pars_vertex:uE,skinning_vertex:fE,skinnormal_vertex:dE,specularmap_fragment:hE,specularmap_pars_fragment:pE,tonemapping_fragment:mE,tonemapping_pars_fragment:gE,transmission_fragment:xE,transmission_pars_fragment:vE,uv_pars_fragment:_E,uv_pars_vertex:bE,uv_vertex:yE,worldpos_vertex:SE,background_vert:ME,background_frag:EE,backgroundCube_vert:TE,backgroundCube_frag:AE,cube_vert:wE,cube_frag:RE,depth_vert:CE,depth_frag:NE,distance_vert:DE,distance_frag:UE,equirect_vert:LE,equirect_frag:zE,linedashed_vert:OE,linedashed_frag:PE,meshbasic_vert:IE,meshbasic_frag:FE,meshlambert_vert:BE,meshlambert_frag:HE,meshmatcap_vert:GE,meshmatcap_frag:kE,meshnormal_vert:VE,meshnormal_frag:jE,meshphong_vert:XE,meshphong_frag:WE,meshphysical_vert:qE,meshphysical_frag:YE,meshtoon_vert:ZE,meshtoon_frag:KE,points_vert:QE,points_frag:JE,shadow_vert:$E,shadow_frag:eT,sprite_vert:tT,sprite_frag:nT},ke={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new re},probesMax:{value:new re},probesResolution:{value:new re}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},$i={basic:{uniforms:Vn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:Vn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:Vn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:Vn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:Vn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ft(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:Vn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:Vn([ke.points,ke.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:Vn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:Vn([ke.common,ke.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:Vn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:Vn([ke.sprite,ke.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:Vn([ke.common,ke.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:Vn([ke.lights,ke.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};$i.physical={uniforms:Vn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const Pc={r:0,b:0,g:0},iT=new Mn,Bv=new xt;Bv.set(-1,0,0,0,1,0,0,0,1);function aT(o,t,i,s,l,c){const d=new Ft(0);let m=l===!0?0:1,g,p,S=null,b=0,v=null;function E(N){let I=N.isScene===!0?N.background:null;if(I&&I.isTexture){const L=N.backgroundBlurriness>0;I=t.get(I,L)}return I}function A(N){let I=!1;const L=E(N);L===null?M(d,m):L&&L.isColor&&(M(L,1),I=!0);const X=o.xr.getEnvironmentBlendMode();X==="additive"?i.buffers.color.setClear(0,0,0,1,c):X==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function D(N,I){const L=E(I);L&&(L.isCubeTexture||L.mapping===Jc)?(p===void 0&&(p=new $n(new nl(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:qr($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(X,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(iT.makeRotationFromEuler(I.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Bv),p.material.toneMapped=Rt.getTransfer(L.colorSpace)!==qt,(S!==L||b!==L.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,S=L,b=L.version,v=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(g===void 0&&(g=new $n(new eu(2,2),new ki({name:"BackgroundMaterial",uniforms:qr($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=L,g.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,g.material.toneMapped=Rt.getTransfer(L.colorSpace)!==qt,L.matrixAutoUpdate===!0&&L.updateMatrix(),g.material.uniforms.uvTransform.value.copy(L.matrix),(S!==L||b!==L.version||v!==o.toneMapping)&&(g.material.needsUpdate=!0,S=L,b=L.version,v=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function M(N,I){N.getRGB(Pc,Ov(o)),i.buffers.color.setClear(Pc.r,Pc.g,Pc.b,I,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,I=1){d.set(N),m=I,M(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,M(d,m)},render:A,addToRenderList:D,dispose:y}}function sT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,d=!1;function m(G,K,ue,he,W){let z=!1;const H=b(G,he,ue,K);c!==H&&(c=H,p(c.object)),z=E(G,he,ue,W),z&&A(G,he,ue,W),W!==null&&t.update(W,o.ELEMENT_ARRAY_BUFFER),(z||d)&&(d=!1,L(G,K,ue,he),W!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function g(){return o.createVertexArray()}function p(G){return o.bindVertexArray(G)}function S(G){return o.deleteVertexArray(G)}function b(G,K,ue,he){const W=he.wireframe===!0;let z=s[K.id];z===void 0&&(z={},s[K.id]=z);const H=G.isInstancedMesh===!0?G.id:0;let le=z[H];le===void 0&&(le={},z[H]=le);let ge=le[ue.id];ge===void 0&&(ge={},le[ue.id]=ge);let ae=ge[W];return ae===void 0&&(ae=v(g()),ge[W]=ae),ae}function v(G){const K=[],ue=[],he=[];for(let W=0;W<i;W++)K[W]=0,ue[W]=0,he[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ue,attributeDivisors:he,object:G,attributes:{},index:null}}function E(G,K,ue,he){const W=c.attributes,z=K.attributes;let H=0;const le=ue.getAttributes();for(const ge in le)if(le[ge].location>=0){const C=W[ge];let j=z[ge];if(j===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),C===void 0||C.attribute!==j||j&&C.data!==j.data)return!0;H++}return c.attributesNum!==H||c.index!==he}function A(G,K,ue,he){const W={},z=K.attributes;let H=0;const le=ue.getAttributes();for(const ge in le)if(le[ge].location>=0){let C=z[ge];C===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(C=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(C=G.instanceColor));const j={};j.attribute=C,C&&C.data&&(j.data=C.data),W[ge]=j,H++}c.attributes=W,c.attributesNum=H,c.index=he}function D(){const G=c.newAttributes;for(let K=0,ue=G.length;K<ue;K++)G[K]=0}function M(G){y(G,0)}function y(G,K){const ue=c.newAttributes,he=c.enabledAttributes,W=c.attributeDivisors;ue[G]=1,he[G]===0&&(o.enableVertexAttribArray(G),he[G]=1),W[G]!==K&&(o.vertexAttribDivisor(G,K),W[G]=K)}function N(){const G=c.newAttributes,K=c.enabledAttributes;for(let ue=0,he=K.length;ue<he;ue++)K[ue]!==G[ue]&&(o.disableVertexAttribArray(ue),K[ue]=0)}function I(G,K,ue,he,W,z,H){H===!0?o.vertexAttribIPointer(G,K,ue,W,z):o.vertexAttribPointer(G,K,ue,he,W,z)}function L(G,K,ue,he){D();const W=he.attributes,z=ue.getAttributes(),H=K.defaultAttributeValues;for(const le in z){const ge=z[le];if(ge.location>=0){let ae=W[le];if(ae===void 0&&(le==="instanceMatrix"&&G.instanceMatrix&&(ae=G.instanceMatrix),le==="instanceColor"&&G.instanceColor&&(ae=G.instanceColor)),ae!==void 0){const C=ae.normalized,j=ae.itemSize,fe=t.get(ae);if(fe===void 0)continue;const Ee=fe.buffer,we=fe.type,ee=fe.bytesPerElement,Se=we===o.INT||we===o.UNSIGNED_INT||ae.gpuType===Wh;if(ae.isInterleavedBufferAttribute){const Me=ae.data,He=Me.stride,Qe=ae.offset;if(Me.isInstancedInterleavedBuffer){for(let Ye=0;Ye<ge.locationSize;Ye++)y(ge.location+Ye,Me.meshPerAttribute);G.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ye=0;Ye<ge.locationSize;Ye++)M(ge.location+Ye);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let Ye=0;Ye<ge.locationSize;Ye++)I(ge.location+Ye,j/ge.locationSize,we,C,He*ee,(Qe+j/ge.locationSize*Ye)*ee,Se)}else{if(ae.isInstancedBufferAttribute){for(let Me=0;Me<ge.locationSize;Me++)y(ge.location+Me,ae.meshPerAttribute);G.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Me=0;Me<ge.locationSize;Me++)M(ge.location+Me);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let Me=0;Me<ge.locationSize;Me++)I(ge.location+Me,j/ge.locationSize,we,C,j*ee,j/ge.locationSize*Me*ee,Se)}}else if(H!==void 0){const C=H[le];if(C!==void 0)switch(C.length){case 2:o.vertexAttrib2fv(ge.location,C);break;case 3:o.vertexAttrib3fv(ge.location,C);break;case 4:o.vertexAttrib4fv(ge.location,C);break;default:o.vertexAttrib1fv(ge.location,C)}}}}N()}function X(){F();for(const G in s){const K=s[G];for(const ue in K){const he=K[ue];for(const W in he){const z=he[W];for(const H in z)S(z[H].object),delete z[H];delete he[W]}}delete s[G]}}function P(G){if(s[G.id]===void 0)return;const K=s[G.id];for(const ue in K){const he=K[ue];for(const W in he){const z=he[W];for(const H in z)S(z[H].object),delete z[H];delete he[W]}}delete s[G.id]}function B(G){for(const K in s){const ue=s[K];for(const he in ue){const W=ue[he];if(W[G.id]===void 0)continue;const z=W[G.id];for(const H in z)S(z[H].object),delete z[H];delete W[G.id]}}}function w(G){for(const K in s){const ue=s[K],he=G.isInstancedMesh===!0?G.id:0,W=ue[he];if(W!==void 0){for(const z in W){const H=W[z];for(const le in H)S(H[le].object),delete H[le];delete W[z]}delete ue[he],Object.keys(ue).length===0&&delete s[K]}}}function F(){Q(),d=!0,c!==l&&(c=l,p(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:F,resetDefaultState:Q,dispose:X,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:B,initAttributes:D,enableAttribute:M,disableUnusedAttributes:N}}function rT(o,t,i){let s;function l(g){s=g}function c(g,p){o.drawArrays(s,g,p),i.update(p,s,1)}function d(g,p,S){S!==0&&(o.drawArraysInstanced(s,g,p,S),i.update(p,s,S))}function m(g,p,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,p,0,S);let v=0;for(let E=0;E<S;E++)v+=p[E];i.update(v,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=m}function oT(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Hi&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(B){const w=B===Ua&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==wi&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ea&&!w)}function g(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=g(p);S!==p&&(ct("WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const b=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:m,precision:p,logarithmicDepthBuffer:b,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:A,maxTextureSize:D,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:N,maxVaryings:I,maxFragmentUniforms:L,maxSamples:X,samples:P}}function lT(o){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Bs,m=new xt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(b,v){const E=b.length!==0||v||s!==0||l;return l=v,s=b.length,E},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(b,v){i=S(b,v,0)},this.setState=function(b,v,E){const A=b.clippingPlanes,D=b.clipIntersection,M=b.clipShadows,y=o.get(b);if(!l||A===null||A.length===0||c&&!M)c?S(null):p();else{const N=c?0:s,I=N*4;let L=y.clippingState||null;g.value=L,L=S(A,v,I,E);for(let X=0;X!==I;++X)L[X]=i[X];y.clippingState=L,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=N}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function S(b,v,E,A){const D=b!==null?b.length:0;let M=null;if(D!==0){if(M=g.value,A!==!0||M===null){const y=E+D*4,N=v.matrixWorldInverse;m.getNormalMatrix(N),(M===null||M.length<y)&&(M=new Float32Array(y));for(let I=0,L=E;I!==D;++I,L+=4)d.copy(b[I]).applyMatrix4(N,m),d.normal.toArray(M,L),M[L+3]=d.constant}g.value=M,g.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,M}}const hs=4,Px=[.125,.215,.35,.446,.526,.582],Gs=20,cT=256,Wo=new Iv,Ix=new Ft;let Xd=null,Wd=0,qd=0,Yd=!1;const uT=new re;class Fx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:m=uT}=c;Xd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(t,s,l,g,m),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xd,Wd,qd),this._renderer.xr.enabled=Yd,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===js||t.mapping===Xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Ua,format:Hi,colorSpace:qc,depthBuffer:!1},l=Bx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fT(c)),this._blurMaterial=hT(c,t,i),this._ggxMaterial=dT(c,t,i)}return l}_compileMaterial(t){const i=new $n(new ni,t);this._renderer.compile(i,Wo)}_sceneToCubeUV(t,i,s,l,c){const g=new Ti(90,1,i,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],b=this._renderer,v=b.autoClear,E=b.toneMapping;b.getClearColor(Ix),b.toneMapping=na,b.autoClear=!1,b.state.buffers.depth.getReversed()&&(b.setRenderTarget(l),b.clearDepth(),b.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $n(new nl,new Gr({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,M=D.material;let y=!1;const N=t.background;N?N.isColor&&(M.color.copy(N),t.background=null,y=!0):(M.color.copy(Ix),y=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(g.up.set(0,p[I],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+S[I],c.y,c.z)):L===1?(g.up.set(0,0,p[I]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+S[I],c.z)):(g.up.set(0,p[I],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+S[I]));const X=this._cubeSize;Fr(l,L*X,I>2?X:0,X,X),b.setRenderTarget(l),y&&b.render(D,g),b.render(t,g)}b.toneMapping=E,b.autoClear=v,t.background=N}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===js||t.mapping===Xr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hx());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const m=c.uniforms;m.envMap.value=t;const g=this._cubeSize;Fr(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(d,Wo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,m=this._lodMeshes[s];m.material=d;const g=d.uniforms,p=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),b=Math.sqrt(p*p-S*S),v=0+p*1.25,E=b*v,{_lodMax:A}=this,D=this._sizeLods[s],M=3*D*(s>A-hs?s-A+hs:0),y=4*(this._cubeSize-D);g.envMap.value=t.texture,g.roughness.value=E,g.mipInt.value=A-i,Fr(c,M,y,3*D,2*D),l.setRenderTarget(c),l.render(m,Wo),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=A-s,Fr(t,M,y,3*D,2*D),l.setRenderTarget(t),l.render(m,Wo)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,m){const g=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const S=3,b=this._lodMeshes[l];b.material=p;const v=p.uniforms,E=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Gs-1),D=c/A,M=isFinite(c)?1+Math.floor(S*D):Gs;M>Gs&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Gs}`);const y=[];let N=0;for(let B=0;B<Gs;++B){const w=B/D,F=Math.exp(-w*w/2);y.push(F),B===0?N+=F:B<M&&(N+=2*F)}for(let B=0;B<y.length;B++)y[B]=y[B]/N;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=y,v.latitudinal.value=d==="latitudinal",m&&(v.poleAxis.value=m);const{_lodMax:I}=this;v.dTheta.value=A,v.mipInt.value=I-s;const L=this._sizeLods[l],X=3*L*(l>I-hs?l-I+hs:0),P=4*(this._cubeSize-L);Fr(i,X,P,3*L,2*L),g.setRenderTarget(i),g.render(b,Wo)}}function fT(o){const t=[],i=[],s=[];let l=o;const c=o-hs+1+Px.length;for(let d=0;d<c;d++){const m=Math.pow(2,l);t.push(m);let g=1/m;d>o-hs?g=Px[d-o+hs-1]:d===0&&(g=0),i.push(g);const p=1/(m-2),S=-p,b=1+p,v=[S,S,b,S,b,b,S,S,b,b,S,b],E=6,A=6,D=3,M=2,y=1,N=new Float32Array(D*A*E),I=new Float32Array(M*A*E),L=new Float32Array(y*A*E);for(let P=0;P<E;P++){const B=P%3*2/3-1,w=P>2?0:-1,F=[B,w,0,B+2/3,w,0,B+2/3,w+1,0,B,w,0,B+2/3,w+1,0,B,w+1,0];N.set(F,D*A*P),I.set(v,M*A*P);const Q=[P,P,P,P,P,P];L.set(Q,y*A*P)}const X=new ni;X.setAttribute("position",new Gi(N,D)),X.setAttribute("uv",new Gi(I,M)),X.setAttribute("faceIndex",new Gi(L,y)),s.push(new $n(X,null)),l>hs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Bx(o,t,i){const s=new ia(o,t,i);return s.texture.mapping=Jc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function dT(o,t,i){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function hT(o,t,i){const s=new Float32Array(Gs),l=new re(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Hx(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Gx(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

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
	`}class Hv extends ia{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Lv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new nl(5,5,5),c=new ki({name:"CubemapFromEquirect",uniforms:qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ei,blending:Na});c.uniforms.tEquirect.value=i;const d=new $n(l,c),m=i.minFilter;return i.minFilter===ks&&(i.minFilter=Gn),new _1(1,10,this).update(t,d),i.minFilter=m,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function pT(o){let t=new WeakMap,i=new WeakMap,s=null;function l(v,E=!1){return v==null?null:E?d(v):c(v)}function c(v){if(v&&v.isTexture){const E=v.mapping;if(E===vd||E===_d)if(t.has(v)){const A=t.get(v).texture;return m(A,v.mapping)}else{const A=v.image;if(A&&A.height>0){const D=new Hv(A.height);return D.fromEquirectangularTexture(o,v),t.set(v,D),v.addEventListener("dispose",p),m(D.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const E=v.mapping,A=E===vd||E===_d,D=E===js||E===Xr;if(A||D){let M=i.get(v);const y=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return s===null&&(s=new Fx(o)),M=A?s.fromEquirectangular(v,M):s.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const N=v.image;return A&&N&&N.height>0||D&&N&&g(N)?(s===null&&(s=new Fx(o)),M=A?s.fromEquirectangular(v):s.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",S),M.texture):null}}}return v}function m(v,E){return E===vd?v.mapping=js:E===_d&&(v.mapping=Xr),v}function g(v){let E=0;const A=6;for(let D=0;D<A;D++)v[D]!==void 0&&E++;return E===A}function p(v){const E=v.target;E.removeEventListener("dispose",p);const A=t.get(E);A!==void 0&&(t.delete(E),A.dispose())}function S(v){const E=v.target;E.removeEventListener("dispose",S);const A=i.get(E);A!==void 0&&(i.delete(E),A.dispose())}function b(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:b}}function mT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Bh("WebGLRenderer: "+s+" extension not supported."),l}}}function gT(o,t,i,s){const l={},c=new WeakMap;function d(b){const v=b.target;v.index!==null&&t.remove(v.index);for(const A in v.attributes)t.remove(v.attributes[A]);v.removeEventListener("dispose",d),delete l[v.id];const E=c.get(v);E&&(t.remove(E),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function m(b,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function g(b){const v=b.attributes;for(const E in v)t.update(v[E],o.ARRAY_BUFFER)}function p(b){const v=[],E=b.index,A=b.attributes.position;let D=0;if(A===void 0)return;if(E!==null){const N=E.array;D=E.version;for(let I=0,L=N.length;I<L;I+=3){const X=N[I+0],P=N[I+1],B=N[I+2];v.push(X,P,P,B,B,X)}}else{const N=A.array;D=A.version;for(let I=0,L=N.length/3-1;I<L;I+=3){const X=I+0,P=I+1,B=I+2;v.push(X,P,P,B,B,X)}}const M=new(A.count>=65535?Cv:Rv)(v,1);M.version=D;const y=c.get(b);y&&t.remove(y),c.set(b,M)}function S(b){const v=c.get(b);if(v){const E=b.index;E!==null&&v.version<E.version&&p(b)}else p(b);return c.get(b)}return{get:m,update:g,getWireframeAttribute:S}}function xT(o,t,i){let s;function l(b){s=b}let c,d;function m(b){c=b.type,d=b.bytesPerElement}function g(b,v){o.drawElements(s,v,c,b*d),i.update(v,s,1)}function p(b,v,E){E!==0&&(o.drawElementsInstanced(s,v,c,b*d,E),i.update(v,s,E))}function S(b,v,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,c,b,0,E);let D=0;for(let M=0;M<E;M++)D+=v[M];i.update(D,s,1)}this.setMode=l,this.setIndex=m,this.render=g,this.renderInstances=p,this.renderMultiDraw=S}function vT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,m){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=m*(c/3);break;case o.LINES:i.lines+=m*(c/2);break;case o.LINE_STRIP:i.lines+=m*(c-1);break;case o.LINE_LOOP:i.lines+=m*c;break;case o.POINTS:i.points+=m*c;break;default:Ut("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function _T(o,t,i){const s=new WeakMap,l=new mn;function c(d,m,g){const p=d.morphTargetInfluences,S=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,b=S!==void 0?S.length:0;let v=s.get(m);if(v===void 0||v.count!==b){let Q=function(){w.dispose(),s.delete(m),m.removeEventListener("dispose",Q)};var E=Q;v!==void 0&&v.texture.dispose();const A=m.morphAttributes.position!==void 0,D=m.morphAttributes.normal!==void 0,M=m.morphAttributes.color!==void 0,y=m.morphAttributes.position||[],N=m.morphAttributes.normal||[],I=m.morphAttributes.color||[];let L=0;A===!0&&(L=1),D===!0&&(L=2),M===!0&&(L=3);let X=m.attributes.position.count*L,P=1;X>t.maxTextureSize&&(P=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const B=new Float32Array(X*P*4*b),w=new Tv(B,X,P,b);w.type=ea,w.needsUpdate=!0;const F=L*4;for(let G=0;G<b;G++){const K=y[G],ue=N[G],he=I[G],W=X*P*4*G;for(let z=0;z<K.count;z++){const H=z*F;A===!0&&(l.fromBufferAttribute(K,z),B[W+H+0]=l.x,B[W+H+1]=l.y,B[W+H+2]=l.z,B[W+H+3]=0),D===!0&&(l.fromBufferAttribute(ue,z),B[W+H+4]=l.x,B[W+H+5]=l.y,B[W+H+6]=l.z,B[W+H+7]=0),M===!0&&(l.fromBufferAttribute(he,z),B[W+H+8]=l.x,B[W+H+9]=l.y,B[W+H+10]=l.z,B[W+H+11]=he.itemSize===4?l.w:1)}}v={count:b,texture:w,size:new Yt(X,P)},s.set(m,v),m.addEventListener("dispose",Q)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const D=m.morphTargetsRelative?1:1-A;g.getUniforms().setValue(o,"morphTargetBaseInfluence",D),g.getUniforms().setValue(o,"morphTargetInfluences",p)}g.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function bT(o,t,i,s,l){let c=new WeakMap;function d(p){const S=l.render.frame,b=p.geometry,v=t.get(p,b);if(c.get(v)!==S&&(t.update(v),c.set(v,S)),p.isInstancedMesh&&(p.hasEventListener("dispose",g)===!1&&p.addEventListener("dispose",g),c.get(p)!==S&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),c.set(p,S))),p.isSkinnedMesh){const E=p.skeleton;c.get(E)!==S&&(E.update(),c.set(E,S))}return v}function m(){c=new WeakMap}function g(p){const S=p.target;S.removeEventListener("dispose",g),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:m}}const yT={[cv]:"LINEAR_TONE_MAPPING",[uv]:"REINHARD_TONE_MAPPING",[fv]:"CINEON_TONE_MAPPING",[dv]:"ACES_FILMIC_TONE_MAPPING",[pv]:"AGX_TONE_MAPPING",[mv]:"NEUTRAL_TONE_MAPPING",[hv]:"CUSTOM_TONE_MAPPING"};function ST(o,t,i,s,l){const c=new ia(t,i,{type:o,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Wr(t,i):void 0}),d=new ia(t,i,{type:Ua,depthBuffer:!1,stencilBuffer:!1}),m=new ni;m.setAttribute("position",new Nn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Nn([0,2,0,0,2,0],2));const g=new g1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new $n(m,g),S=new Iv(-1,1,1,-1,0,1);let b=null,v=null,E=!1,A,D=null,M=[],y=!1;this.setSize=function(N,I){c.setSize(N,I),d.setSize(N,I);for(let L=0;L<M.length;L++){const X=M[L];X.setSize&&X.setSize(N,I)}},this.setEffects=function(N){M=N,y=M.length>0&&M[0].isRenderPass===!0;const I=c.width,L=c.height;for(let X=0;X<M.length;X++){const P=M[X];P.setSize&&P.setSize(I,L)}},this.begin=function(N,I){if(E||N.toneMapping===na&&M.length===0)return!1;if(D=I,I!==null){const L=I.width,X=I.height;(c.width!==L||c.height!==X)&&this.setSize(L,X)}return y===!1&&N.setRenderTarget(c),A=N.toneMapping,N.toneMapping=na,!0},this.hasRenderPass=function(){return y},this.end=function(N,I){N.toneMapping=A,E=!0;let L=c,X=d;for(let P=0;P<M.length;P++){const B=M[P];if(B.enabled!==!1&&(B.render(N,X,L,I),B.needsSwap!==!1)){const w=L;L=X,X=w}}if(b!==N.outputColorSpace||v!==N.toneMapping){b=N.outputColorSpace,v=N.toneMapping,g.defines={},Rt.getTransfer(b)===qt&&(g.defines.SRGB_TRANSFER="");const P=yT[v];P&&(g.defines[P]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=L.texture,N.setRenderTarget(D),N.render(p,S),D=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),m.dispose(),g.dispose()}}const Gv=new jn,kh=new Wr(1,1),kv=new Tv,Vv=new WS,jv=new Lv,kx=[],Vx=[],jx=new Float32Array(16),Xx=new Float32Array(9),Wx=new Float32Array(4);function Zr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=kx[l];if(c===void 0&&(c=new Float32Array(l),kx[l]=c),t!==0){s.toArray(c,0);for(let d=1,m=0;d!==t;++d)m+=i,o[d].toArray(c,m)}return c}function An(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function wn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function nu(o,t){let i=Vx[t];i===void 0&&(i=new Int32Array(t),Vx[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function MT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function ET(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;o.uniform2fv(this.addr,t),wn(i,t)}}function TT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(An(i,t))return;o.uniform3fv(this.addr,t),wn(i,t)}}function AT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;o.uniform4fv(this.addr,t),wn(i,t)}}function wT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;Wx.set(s),o.uniformMatrix2fv(this.addr,!1,Wx),wn(i,s)}}function RT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;Xx.set(s),o.uniformMatrix3fv(this.addr,!1,Xx),wn(i,s)}}function CT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;jx.set(s),o.uniformMatrix4fv(this.addr,!1,jx),wn(i,s)}}function NT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function DT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;o.uniform2iv(this.addr,t),wn(i,t)}}function UT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;o.uniform3iv(this.addr,t),wn(i,t)}}function LT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;o.uniform4iv(this.addr,t),wn(i,t)}}function zT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function OT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;o.uniform2uiv(this.addr,t),wn(i,t)}}function PT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;o.uniform3uiv(this.addr,t),wn(i,t)}}function IT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;o.uniform4uiv(this.addr,t),wn(i,t)}}function FT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(kh.compareFunction=i.isReversedDepthBuffer()?$h:Jh,c=kh):c=Gv,i.setTexture2D(t||c,l)}function BT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Vv,l)}function HT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||jv,l)}function GT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||kv,l)}function kT(o){switch(o){case 5126:return MT;case 35664:return ET;case 35665:return TT;case 35666:return AT;case 35674:return wT;case 35675:return RT;case 35676:return CT;case 5124:case 35670:return NT;case 35667:case 35671:return DT;case 35668:case 35672:return UT;case 35669:case 35673:return LT;case 5125:return zT;case 36294:return OT;case 36295:return PT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}function VT(o,t){o.uniform1fv(this.addr,t)}function jT(o,t){const i=Zr(t,this.size,2);o.uniform2fv(this.addr,i)}function XT(o,t){const i=Zr(t,this.size,3);o.uniform3fv(this.addr,i)}function WT(o,t){const i=Zr(t,this.size,4);o.uniform4fv(this.addr,i)}function qT(o,t){const i=Zr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function YT(o,t){const i=Zr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ZT(o,t){const i=Zr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function KT(o,t){o.uniform1iv(this.addr,t)}function QT(o,t){o.uniform2iv(this.addr,t)}function JT(o,t){o.uniform3iv(this.addr,t)}function $T(o,t){o.uniform4iv(this.addr,t)}function eA(o,t){o.uniform1uiv(this.addr,t)}function tA(o,t){o.uniform2uiv(this.addr,t)}function nA(o,t){o.uniform3uiv(this.addr,t)}function iA(o,t){o.uniform4uiv(this.addr,t)}function aA(o,t,i){const s=this.cache,l=t.length,c=nu(i,l);An(s,c)||(o.uniform1iv(this.addr,c),wn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=kh:d=Gv;for(let m=0;m!==l;++m)i.setTexture2D(t[m]||d,c[m])}function sA(o,t,i){const s=this.cache,l=t.length,c=nu(i,l);An(s,c)||(o.uniform1iv(this.addr,c),wn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Vv,c[d])}function rA(o,t,i){const s=this.cache,l=t.length,c=nu(i,l);An(s,c)||(o.uniform1iv(this.addr,c),wn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||jv,c[d])}function oA(o,t,i){const s=this.cache,l=t.length,c=nu(i,l);An(s,c)||(o.uniform1iv(this.addr,c),wn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||kv,c[d])}function lA(o){switch(o){case 5126:return VT;case 35664:return jT;case 35665:return XT;case 35666:return WT;case 35674:return qT;case 35675:return YT;case 35676:return ZT;case 5124:case 35670:return KT;case 35667:case 35671:return QT;case 35668:case 35672:return JT;case 35669:case 35673:return $T;case 5125:return eA;case 36294:return tA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return aA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return oA}}class cA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=kT(i.type)}}class uA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=lA(i.type)}}class fA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const m=l[c];m.setValue(t,i[m.id],s)}}}const Zd=/(\w+)(\])?(\[|\.)?/g;function qx(o,t){o.seq.push(t),o.map[t.id]=t}function dA(o,t,i){const s=o.name,l=s.length;for(Zd.lastIndex=0;;){const c=Zd.exec(s),d=Zd.lastIndex;let m=c[1];const g=c[2]==="]",p=c[3];if(g&&(m=m|0),p===void 0||p==="["&&d+2===l){qx(i,p===void 0?new cA(m,o,t):new uA(m,o,t));break}else{let b=i.map[m];b===void 0&&(b=new fA(m),qx(i,b)),i=b}}}class Vc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const m=t.getActiveUniform(i,d),g=t.getUniformLocation(i,m.name);dA(m,g,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const m=i[c],g=s[m.id];g.needsUpdate!==!1&&m.setValue(t,g.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function Yx(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const hA=37297;let pA=0;function mA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const m=d+1;s.push(`${m===t?">":" "} ${m}: ${i[d]}`)}return s.join(`
`)}const Zx=new xt;function gA(o){Rt._getMatrix(Zx,Rt.workingColorSpace,o);const t=`mat3( ${Zx.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(o)){case Yc:return[t,"LinearTransferOETF"];case qt:return[t,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Kx(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const m=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+mA(o.getShaderSource(t),m)}else return c}function xA(o,t){const i=gA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const vA={[cv]:"Linear",[uv]:"Reinhard",[fv]:"Cineon",[dv]:"ACESFilmic",[pv]:"AgX",[mv]:"Neutral",[hv]:"Custom"};function _A(o,t){const i=vA[t];return i===void 0?(ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ic=new re;function bA(){Rt.getLuminanceCoefficients(Ic);const o=Ic.x.toFixed(4),t=Ic.y.toFixed(4),i=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function SA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function MA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),d=c.name;let m=1;c.type===o.FLOAT_MAT2&&(m=2),c.type===o.FLOAT_MAT3&&(m=3),c.type===o.FLOAT_MAT4&&(m=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:m}}return i}function Zo(o){return o!==""}function Qx(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const EA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(o){return o.replace(EA,AA)}const TA=new Map;function AA(o,t){let i=bt[t];if(i===void 0){const s=TA.get(t);if(s!==void 0)i=bt[s],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Vh(i)}const wA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $x(o){return o.replace(wA,RA)}function RA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function ev(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const CA={[Fc]:"SHADOWMAP_TYPE_PCF",[Yo]:"SHADOWMAP_TYPE_VSM"};function NA(o){return CA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const DA={[js]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[Jc]:"ENVMAP_TYPE_CUBE_UV"};function UA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":DA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const LA={[Xr]:"ENVMAP_MODE_REFRACTION"};function zA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":LA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OA={[lv]:"ENVMAP_BLENDING_MULTIPLY",[TS]:"ENVMAP_BLENDING_MIX",[AS]:"ENVMAP_BLENDING_ADD"};function PA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":OA[o.combine]||"ENVMAP_BLENDING_NONE"}function IA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function FA(o,t,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,m=i.fragmentShader;const g=NA(i),p=UA(i),S=zA(i),b=PA(i),v=IA(i),E=yA(i),A=SA(c),D=l.createProgram();let M,y,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Zo).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Zo).join(`
`),y.length>0&&(y+=`
`)):(M=[ev(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),y=[ev(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+b:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==na?"#define TONE_MAPPING":"",i.toneMapping!==na?bt.tonemapping_pars_fragment:"",i.toneMapping!==na?_A("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,xA("linearToOutputTexel",i.outputColorSpace),bA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Zo).join(`
`)),d=Vh(d),d=Qx(d,i),d=Jx(d,i),m=Vh(m),m=Qx(m,i),m=Jx(m,i),d=$x(d),m=$x(m),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=N+M+d,L=N+y+m,X=Yx(l,l.VERTEX_SHADER,I),P=Yx(l,l.FRAGMENT_SHADER,L);l.attachShader(D,X),l.attachShader(D,P),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function B(G){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(D)||"",ue=l.getShaderInfoLog(X)||"",he=l.getShaderInfoLog(P)||"",W=K.trim(),z=ue.trim(),H=he.trim();let le=!0,ge=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(le=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,X,P);else{const ae=Kx(l,X,"vertex"),C=Kx(l,P,"fragment");Ut("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+W+`
`+ae+`
`+C)}else W!==""?ct("WebGLProgram: Program Info Log:",W):(z===""||H==="")&&(ge=!1);ge&&(G.diagnostics={runnable:le,programLog:W,vertexShader:{log:z,prefix:M},fragmentShader:{log:H,prefix:y}})}l.deleteShader(X),l.deleteShader(P),w=new Vc(l,D),F=MA(l,D)}let w;this.getUniforms=function(){return w===void 0&&B(this),w};let F;this.getAttributes=function(){return F===void 0&&B(this),F};let Q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=l.getProgramParameter(D,hA)),Q},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pA++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=X,this.fragmentShader=P,this}let BA=0;class HA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new GA(t),i.set(t,s)),s}}class GA{constructor(t){this.id=BA++,this.code=t,this.usedTimes=0}}function kA(o){return o===Xs||o===Xc||o===Wc}function VA(o,t,i,s,l,c){const d=new Av,m=new HA,g=new Set,p=[],S=new Map,b=s.logarithmicDepthBuffer;let v=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return g.add(w),w===0?"uv":`uv${w}`}function D(w,F,Q,G,K,ue){const he=G.fog,W=K.geometry,z=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,H=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,le=t.get(w.envMap||z,H),ge=le&&le.mapping===Jc?le.image.height:null,ae=E[w.type];w.precision!==null&&(v=s.getMaxPrecision(w.precision),v!==w.precision&&ct("WebGLProgram.getParameters:",w.precision,"not supported, using",v,"instead."));const C=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,j=C!==void 0?C.length:0;let fe=0;W.morphAttributes.position!==void 0&&(fe=1),W.morphAttributes.normal!==void 0&&(fe=2),W.morphAttributes.color!==void 0&&(fe=3);let Ee,we,ee,Se;if(ae){const at=$i[ae];Ee=at.vertexShader,we=at.fragmentShader}else Ee=w.vertexShader,we=w.fragmentShader,m.update(w),ee=m.getVertexShaderID(w),Se=m.getFragmentShaderID(w);const Me=o.getRenderTarget(),He=o.state.buffers.depth.getReversed(),Qe=K.isInstancedMesh===!0,Ye=K.isBatchedMesh===!0,ft=!!w.map,ot=!!w.matcap,lt=!!le,At=!!w.aoMap,rt=!!w.lightMap,dt=!!w.bumpMap,ht=!!w.normalMap,$e=!!w.displacementMap,q=!!w.emissiveMap,Nt=!!w.metalnessMap,ut=!!w.roughnessMap,zt=w.anisotropy>0,Ue=w.clearcoat>0,Zt=w.dispersion>0,U=w.iridescence>0,T=w.sheen>0,ie=w.transmission>0,_e=zt&&!!w.anisotropyMap,Te=Ue&&!!w.clearcoatMap,Le=Ue&&!!w.clearcoatNormalMap,Ne=Ue&&!!w.clearcoatRoughnessMap,pe=U&&!!w.iridescenceMap,me=U&&!!w.iridescenceThicknessMap,Pe=T&&!!w.sheenColorMap,Fe=T&&!!w.sheenRoughnessMap,Oe=!!w.specularMap,ze=!!w.specularColorMap,nt=!!w.specularIntensityMap,it=ie&&!!w.transmissionMap,pt=ie&&!!w.thicknessMap,Y=!!w.gradientMap,Re=!!w.alphaMap,xe=w.alphaTest>0,Be=!!w.alphaHash,De=!!w.extensions;let Ae=na;w.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Ae=o.toneMapping);const We={shaderID:ae,shaderType:w.type,shaderName:w.name,vertexShader:Ee,fragmentShader:we,defines:w.defines,customVertexShaderID:ee,customFragmentShaderID:Se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:v,batching:Ye,batchingColor:Ye&&K._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&K.instanceColor!==null,instancingMorph:Qe&&K.morphTexture!==null,outputColorSpace:Me===null?o.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:ft,matcap:ot,envMap:lt,envMapMode:lt&&le.mapping,envMapCubeUVHeight:ge,aoMap:At,lightMap:rt,bumpMap:dt,normalMap:ht,displacementMap:$e,emissiveMap:q,normalMapObjectSpace:ht&&w.normalMapType===CS,normalMapTangentSpace:ht&&w.normalMapType===cx,packedNormalMap:ht&&w.normalMapType===cx&&kA(w.normalMap.format),metalnessMap:Nt,roughnessMap:ut,anisotropy:zt,anisotropyMap:_e,clearcoat:Ue,clearcoatMap:Te,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ne,dispersion:Zt,iridescence:U,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:T,sheenColorMap:Pe,sheenRoughnessMap:Fe,specularMap:Oe,specularColorMap:ze,specularIntensityMap:nt,transmission:ie,transmissionMap:it,thicknessMap:pt,gradientMap:Y,opaque:w.transparent===!1&&w.blending===kr&&w.alphaToCoverage===!1,alphaMap:Re,alphaTest:xe,alphaHash:Be,combine:w.combine,mapUv:ft&&A(w.map.channel),aoMapUv:At&&A(w.aoMap.channel),lightMapUv:rt&&A(w.lightMap.channel),bumpMapUv:dt&&A(w.bumpMap.channel),normalMapUv:ht&&A(w.normalMap.channel),displacementMapUv:$e&&A(w.displacementMap.channel),emissiveMapUv:q&&A(w.emissiveMap.channel),metalnessMapUv:Nt&&A(w.metalnessMap.channel),roughnessMapUv:ut&&A(w.roughnessMap.channel),anisotropyMapUv:_e&&A(w.anisotropyMap.channel),clearcoatMapUv:Te&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:me&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&A(w.sheenRoughnessMap.channel),specularMapUv:Oe&&A(w.specularMap.channel),specularColorMapUv:ze&&A(w.specularColorMap.channel),specularIntensityMapUv:nt&&A(w.specularIntensityMap.channel),transmissionMapUv:it&&A(w.transmissionMap.channel),thicknessMapUv:pt&&A(w.thicknessMap.channel),alphaMapUv:Re&&A(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ht||zt),vertexNormals:!!W.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!W.attributes.uv&&(ft||Re),fog:!!he,useFog:w.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||W.attributes.normal===void 0&&ht===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:b,reversedDepthBuffer:He,skinning:K.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:fe,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&Q.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ft&&w.map.isVideoTexture===!0&&Rt.getTransfer(w.map.colorSpace)===qt,decodeVideoTextureEmissive:q&&w.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(w.emissiveMap.colorSpace)===qt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ai,flipSided:w.side===ei,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:De&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&w.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return We.vertexUv1s=g.has(1),We.vertexUv2s=g.has(2),We.vertexUv3s=g.has(3),g.clear(),We}function M(w){const F=[];if(w.shaderID?F.push(w.shaderID):(F.push(w.customVertexShaderID),F.push(w.customFragmentShaderID)),w.defines!==void 0)for(const Q in w.defines)F.push(Q),F.push(w.defines[Q]);return w.isRawShaderMaterial===!1&&(y(F,w),N(F,w),F.push(o.outputColorSpace)),F.push(w.customProgramCacheKey),F.join()}function y(w,F){w.push(F.precision),w.push(F.outputColorSpace),w.push(F.envMapMode),w.push(F.envMapCubeUVHeight),w.push(F.mapUv),w.push(F.alphaMapUv),w.push(F.lightMapUv),w.push(F.aoMapUv),w.push(F.bumpMapUv),w.push(F.normalMapUv),w.push(F.displacementMapUv),w.push(F.emissiveMapUv),w.push(F.metalnessMapUv),w.push(F.roughnessMapUv),w.push(F.anisotropyMapUv),w.push(F.clearcoatMapUv),w.push(F.clearcoatNormalMapUv),w.push(F.clearcoatRoughnessMapUv),w.push(F.iridescenceMapUv),w.push(F.iridescenceThicknessMapUv),w.push(F.sheenColorMapUv),w.push(F.sheenRoughnessMapUv),w.push(F.specularMapUv),w.push(F.specularColorMapUv),w.push(F.specularIntensityMapUv),w.push(F.transmissionMapUv),w.push(F.thicknessMapUv),w.push(F.combine),w.push(F.fogExp2),w.push(F.sizeAttenuation),w.push(F.morphTargetsCount),w.push(F.morphAttributeCount),w.push(F.numDirLights),w.push(F.numPointLights),w.push(F.numSpotLights),w.push(F.numSpotLightMaps),w.push(F.numHemiLights),w.push(F.numRectAreaLights),w.push(F.numDirLightShadows),w.push(F.numPointLightShadows),w.push(F.numSpotLightShadows),w.push(F.numSpotLightShadowsWithMaps),w.push(F.numLightProbes),w.push(F.shadowMapType),w.push(F.toneMapping),w.push(F.numClippingPlanes),w.push(F.numClipIntersection),w.push(F.depthPacking)}function N(w,F){d.disableAll(),F.instancing&&d.enable(0),F.instancingColor&&d.enable(1),F.instancingMorph&&d.enable(2),F.matcap&&d.enable(3),F.envMap&&d.enable(4),F.normalMapObjectSpace&&d.enable(5),F.normalMapTangentSpace&&d.enable(6),F.clearcoat&&d.enable(7),F.iridescence&&d.enable(8),F.alphaTest&&d.enable(9),F.vertexColors&&d.enable(10),F.vertexAlphas&&d.enable(11),F.vertexUv1s&&d.enable(12),F.vertexUv2s&&d.enable(13),F.vertexUv3s&&d.enable(14),F.vertexTangents&&d.enable(15),F.anisotropy&&d.enable(16),F.alphaHash&&d.enable(17),F.batching&&d.enable(18),F.dispersion&&d.enable(19),F.batchingColor&&d.enable(20),F.gradientMap&&d.enable(21),F.packedNormalMap&&d.enable(22),F.vertexNormals&&d.enable(23),w.push(d.mask),d.disableAll(),F.fog&&d.enable(0),F.useFog&&d.enable(1),F.flatShading&&d.enable(2),F.logarithmicDepthBuffer&&d.enable(3),F.reversedDepthBuffer&&d.enable(4),F.skinning&&d.enable(5),F.morphTargets&&d.enable(6),F.morphNormals&&d.enable(7),F.morphColors&&d.enable(8),F.premultipliedAlpha&&d.enable(9),F.shadowMapEnabled&&d.enable(10),F.doubleSided&&d.enable(11),F.flipSided&&d.enable(12),F.useDepthPacking&&d.enable(13),F.dithering&&d.enable(14),F.transmission&&d.enable(15),F.sheen&&d.enable(16),F.opaque&&d.enable(17),F.pointsUvs&&d.enable(18),F.decodeVideoTexture&&d.enable(19),F.decodeVideoTextureEmissive&&d.enable(20),F.alphaToCoverage&&d.enable(21),F.numLightProbeGrids>0&&d.enable(22),w.push(d.mask)}function I(w){const F=E[w.type];let Q;if(F){const G=$i[F];Q=h1.clone(G.uniforms)}else Q=w.uniforms;return Q}function L(w,F){let Q=S.get(F);return Q!==void 0?++Q.usedTimes:(Q=new FA(o,F,w,l),p.push(Q),S.set(F,Q)),Q}function X(w){if(--w.usedTimes===0){const F=p.indexOf(w);p[F]=p[p.length-1],p.pop(),S.delete(w.cacheKey),w.destroy()}}function P(w){m.remove(w)}function B(){m.dispose()}return{getParameters:D,getProgramCacheKey:M,getUniforms:I,acquireProgram:L,releaseProgram:X,releaseShaderCache:P,programs:p,dispose:B}}function jA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let m=o.get(d);return m===void 0&&(m={},o.set(d,m)),m}function s(d){o.delete(d)}function l(d,m,g){o.get(d)[m]=g}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function XA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function tv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function nv(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(v){let E=0;return v.isInstancedMesh&&(E+=2),v.isSkinnedMesh&&(E+=1),E}function m(v,E,A,D,M,y){let N=o[t];return N===void 0?(N={id:v.id,object:v,geometry:E,material:A,materialVariant:d(v),groupOrder:D,renderOrder:v.renderOrder,z:M,group:y},o[t]=N):(N.id=v.id,N.object=v,N.geometry=E,N.material=A,N.materialVariant=d(v),N.groupOrder=D,N.renderOrder=v.renderOrder,N.z=M,N.group=y),t++,N}function g(v,E,A,D,M,y){const N=m(v,E,A,D,M,y);A.transmission>0?s.push(N):A.transparent===!0?l.push(N):i.push(N)}function p(v,E,A,D,M,y){const N=m(v,E,A,D,M,y);A.transmission>0?s.unshift(N):A.transparent===!0?l.unshift(N):i.unshift(N)}function S(v,E){i.length>1&&i.sort(v||XA),s.length>1&&s.sort(E||tv),l.length>1&&l.sort(E||tv)}function b(){for(let v=t,E=o.length;v<E;v++){const A=o[v];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:g,unshift:p,finish:b,sort:S}}function WA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let d;return c===void 0?(d=new nv,o.set(s,[d])):l>=c.length?(d=new nv,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function qA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new Ft};break;case"SpotLight":i={position:new re,direction:new re,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":i={color:new Ft,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function YA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let ZA=0;function KA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function QA(o){const t=new qA,i=YA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new re);const l=new re,c=new Mn,d=new Mn;function m(p){let S=0,b=0,v=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let E=0,A=0,D=0,M=0,y=0,N=0,I=0,L=0,X=0,P=0,B=0;p.sort(KA);for(let F=0,Q=p.length;F<Q;F++){const G=p[F],K=G.color,ue=G.intensity,he=G.distance;let W=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Xs?W=G.shadow.map.texture:W=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)S+=K.r*ue,b+=K.g*ue,v+=K.b*ue;else if(G.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(G.sh.coefficients[z],ue);B++}else if(G.isDirectionalLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,le=i.get(G);le.shadowIntensity=H.intensity,le.shadowBias=H.bias,le.shadowNormalBias=H.normalBias,le.shadowRadius=H.radius,le.shadowMapSize=H.mapSize,s.directionalShadow[E]=le,s.directionalShadowMap[E]=W,s.directionalShadowMatrix[E]=G.shadow.matrix,N++}s.directional[E]=z,E++}else if(G.isSpotLight){const z=t.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(K).multiplyScalar(ue),z.distance=he,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,s.spot[D]=z;const H=G.shadow;if(G.map&&(s.spotLightMap[X]=G.map,X++,H.updateMatrices(G),G.castShadow&&P++),s.spotLightMatrix[D]=H.matrix,G.castShadow){const le=i.get(G);le.shadowIntensity=H.intensity,le.shadowBias=H.bias,le.shadowNormalBias=H.normalBias,le.shadowRadius=H.radius,le.shadowMapSize=H.mapSize,s.spotShadow[D]=le,s.spotShadowMap[D]=W,L++}D++}else if(G.isRectAreaLight){const z=t.get(G);z.color.copy(K).multiplyScalar(ue),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=z,M++}else if(G.isPointLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const H=G.shadow,le=i.get(G);le.shadowIntensity=H.intensity,le.shadowBias=H.bias,le.shadowNormalBias=H.normalBias,le.shadowRadius=H.radius,le.shadowMapSize=H.mapSize,le.shadowCameraNear=H.camera.near,le.shadowCameraFar=H.camera.far,s.pointShadow[A]=le,s.pointShadowMap[A]=W,s.pointShadowMatrix[A]=G.shadow.matrix,I++}s.point[A]=z,A++}else if(G.isHemisphereLight){const z=t.get(G);z.skyColor.copy(G.color).multiplyScalar(ue),z.groundColor.copy(G.groundColor).multiplyScalar(ue),s.hemi[y]=z,y++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ke.LTC_FLOAT_1,s.rectAreaLTC2=ke.LTC_FLOAT_2):(s.rectAreaLTC1=ke.LTC_HALF_1,s.rectAreaLTC2=ke.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=b,s.ambient[2]=v;const w=s.hash;(w.directionalLength!==E||w.pointLength!==A||w.spotLength!==D||w.rectAreaLength!==M||w.hemiLength!==y||w.numDirectionalShadows!==N||w.numPointShadows!==I||w.numSpotShadows!==L||w.numSpotMaps!==X||w.numLightProbes!==B)&&(s.directional.length=E,s.spot.length=D,s.rectArea.length=M,s.point.length=A,s.hemi.length=y,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=L+X-P,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=B,w.directionalLength=E,w.pointLength=A,w.spotLength=D,w.rectAreaLength=M,w.hemiLength=y,w.numDirectionalShadows=N,w.numPointShadows=I,w.numSpotShadows=L,w.numSpotMaps=X,w.numLightProbes=B,s.version=ZA++)}function g(p,S){let b=0,v=0,E=0,A=0,D=0;const M=S.matrixWorldInverse;for(let y=0,N=p.length;y<N;y++){const I=p[y];if(I.isDirectionalLight){const L=s.directional[b];L.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),b++}else if(I.isSpotLight){const L=s.spot[E];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),E++}else if(I.isRectAreaLight){const L=s.rectArea[A];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(M),d.identity(),c.copy(I.matrixWorld),c.premultiply(M),d.extractRotation(c),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),A++}else if(I.isPointLight){const L=s.point[v];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(M),v++}else if(I.isHemisphereLight){const L=s.hemi[D];L.direction.setFromMatrixPosition(I.matrixWorld),L.direction.transformDirection(M),D++}}}return{setup:m,setupView:g,state:s}}function iv(o){const t=new QA(o),i=[],s=[],l=[];function c(v){b.camera=v,i.length=0,s.length=0,l.length=0}function d(v){i.push(v)}function m(v){s.push(v)}function g(v){l.push(v)}function p(){t.setup(i)}function S(v){t.setupView(i,v)}const b={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:b,setupLights:p,setupLightsView:S,pushLight:d,pushShadow:m,pushLightProbeGrid:g}}function JA(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let m;return d===void 0?(m=new iv(o),t.set(l,[m])):c>=d.length?(m=new iv(o),d.push(m)):m=d[c],m}function s(){t=new WeakMap}return{get:i,dispose:s}}const $A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e2=`uniform sampler2D shadow_pass;
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
}`,t2=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],n2=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],av=new Mn,qo=new re,Kd=new re;function i2(o,t,i){let s=new Dv;const l=new Yt,c=new Yt,d=new mn,m=new x1,g=new v1,p={},S=i.maxTextureSize,b={[ps]:ei,[ei]:ps,[Ai]:Ai},v=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:$A,fragmentShader:e2}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const A=new ni;A.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new $n(A,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let y=this.type;this.render=function(P,B,w){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;this.type===rS&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fc);const F=o.getRenderTarget(),Q=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),K=o.state;K.setBlending(Na),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ue=y!==this.type;ue&&B.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(W=>W.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,W=P.length;he<W;he++){const z=P[he],H=z.shadow;if(H===void 0){ct("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const le=H.getFrameExtents();l.multiply(le),c.copy(H.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/le.x),l.x=c.x*le.x,H.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/le.y),l.y=c.y*le.y,H.mapSize.y=c.y));const ge=o.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ge,H.map===null||ue===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Yo){if(z.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ia(l.x,l.y,{format:Xs,type:Ua,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Wr(l.x,l.y,ea),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=La,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn}else z.isPointLight?(H.map=new Hv(l.x),H.map.depthTexture=new f1(l.x,aa)):(H.map=new ia(l.x,l.y),H.map.depthTexture=new Wr(l.x,l.y,aa)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=La,this.type===Fc?(H.map.depthTexture.compareFunction=ge?$h:Jh,H.map.depthTexture.minFilter=Gn,H.map.depthTexture.magFilter=Gn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn);H.camera.updateProjectionMatrix()}const ae=H.map.isWebGLCubeRenderTarget?6:1;for(let C=0;C<ae;C++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,C),o.clear();else{C===0&&(o.setRenderTarget(H.map),o.clear());const j=H.getViewport(C);d.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),K.viewport(d)}if(z.isPointLight){const j=H.camera,fe=H.matrix,Ee=z.distance||j.far;Ee!==j.far&&(j.far=Ee,j.updateProjectionMatrix()),qo.setFromMatrixPosition(z.matrixWorld),j.position.copy(qo),Kd.copy(j.position),Kd.add(t2[C]),j.up.copy(n2[C]),j.lookAt(Kd),j.updateMatrixWorld(),fe.makeTranslation(-qo.x,-qo.y,-qo.z),av.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),H._frustum.setFromProjectionMatrix(av,j.coordinateSystem,j.reversedDepth)}else H.updateMatrices(z);s=H.getFrustum(),L(B,w,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Yo&&N(H,w),H.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(F,Q,G)};function N(P,B){const w=t.update(D);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ia(l.x,l.y,{format:Xs,type:Ua})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(B,null,w,v,D,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value=P.mapSize,E.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(B,null,w,E,D,null)}function I(P,B,w,F){let Q=null;const G=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)Q=G;else if(Q=w.isPointLight===!0?g:m,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const K=Q.uuid,ue=B.uuid;let he=p[K];he===void 0&&(he={},p[K]=he);let W=he[ue];W===void 0&&(W=Q.clone(),he[ue]=W,B.addEventListener("dispose",X)),Q=W}if(Q.visible=B.visible,Q.wireframe=B.wireframe,F===Yo?Q.side=B.shadowSide!==null?B.shadowSide:B.side:Q.side=B.shadowSide!==null?B.shadowSide:b[B.side],Q.alphaMap=B.alphaMap,Q.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,Q.map=B.map,Q.clipShadows=B.clipShadows,Q.clippingPlanes=B.clippingPlanes,Q.clipIntersection=B.clipIntersection,Q.displacementMap=B.displacementMap,Q.displacementScale=B.displacementScale,Q.displacementBias=B.displacementBias,Q.wireframeLinewidth=B.wireframeLinewidth,Q.linewidth=B.linewidth,w.isPointLight===!0&&Q.isMeshDistanceMaterial===!0){const K=o.properties.get(Q);K.light=w}return Q}function L(P,B,w,F,Q){if(P.visible===!1)return;if(P.layers.test(B.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&Q===Yo)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const ue=t.update(P),he=P.material;if(Array.isArray(he)){const W=ue.groups;for(let z=0,H=W.length;z<H;z++){const le=W[z],ge=he[le.materialIndex];if(ge&&ge.visible){const ae=I(P,ge,F,Q);P.onBeforeShadow(o,P,B,w,ue,ae,le),o.renderBufferDirect(w,null,ue,ae,P,le),P.onAfterShadow(o,P,B,w,ue,ae,le)}}}else if(he.visible){const W=I(P,he,F,Q);P.onBeforeShadow(o,P,B,w,ue,W,null),o.renderBufferDirect(w,null,ue,W,P,null),P.onAfterShadow(o,P,B,w,ue,W,null)}}const K=P.children;for(let ue=0,he=K.length;ue<he;ue++)L(K[ue],B,w,F,Q)}function X(P){P.target.removeEventListener("dispose",X);for(const w in p){const F=p[w],Q=P.target.uuid;Q in F&&(F[Q].dispose(),delete F[Q])}}}function a2(o,t){function i(){let Y=!1;const Re=new mn;let xe=null;const Be=new mn(0,0,0,0);return{setMask:function(De){xe!==De&&!Y&&(o.colorMask(De,De,De,De),xe=De)},setLocked:function(De){Y=De},setClear:function(De,Ae,We,at,$t){$t===!0&&(De*=at,Ae*=at,We*=at),Re.set(De,Ae,We,at),Be.equals(Re)===!1&&(o.clearColor(De,Ae,We,at),Be.copy(Re))},reset:function(){Y=!1,xe=null,Be.set(-1,0,0,0)}}}function s(){let Y=!1,Re=!1,xe=null,Be=null,De=null;return{setReversed:function(Ae){if(Re!==Ae){const We=t.get("EXT_clip_control");Ae?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Re=Ae;const at=De;De=null,this.setClear(at)}},getReversed:function(){return Re},setTest:function(Ae){Ae?Me(o.DEPTH_TEST):He(o.DEPTH_TEST)},setMask:function(Ae){xe!==Ae&&!Y&&(o.depthMask(Ae),xe=Ae)},setFunc:function(Ae){if(Re&&(Ae=BS[Ae]),Be!==Ae){switch(Ae){case eh:o.depthFunc(o.NEVER);break;case th:o.depthFunc(o.ALWAYS);break;case nh:o.depthFunc(o.LESS);break;case jr:o.depthFunc(o.LEQUAL);break;case ih:o.depthFunc(o.EQUAL);break;case ah:o.depthFunc(o.GEQUAL);break;case sh:o.depthFunc(o.GREATER);break;case rh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Be=Ae}},setLocked:function(Ae){Y=Ae},setClear:function(Ae){De!==Ae&&(De=Ae,Re&&(Ae=1-Ae),o.clearDepth(Ae))},reset:function(){Y=!1,xe=null,Be=null,De=null,Re=!1}}}function l(){let Y=!1,Re=null,xe=null,Be=null,De=null,Ae=null,We=null,at=null,$t=null;return{setTest:function(Dt){Y||(Dt?Me(o.STENCIL_TEST):He(o.STENCIL_TEST))},setMask:function(Dt){Re!==Dt&&!Y&&(o.stencilMask(Dt),Re=Dt)},setFunc:function(Dt,Ze,Dn){(xe!==Dt||Be!==Ze||De!==Dn)&&(o.stencilFunc(Dt,Ze,Dn),xe=Dt,Be=Ze,De=Dn)},setOp:function(Dt,Ze,Dn){(Ae!==Dt||We!==Ze||at!==Dn)&&(o.stencilOp(Dt,Ze,Dn),Ae=Dt,We=Ze,at=Dn)},setLocked:function(Dt){Y=Dt},setClear:function(Dt){$t!==Dt&&(o.clearStencil(Dt),$t=Dt)},reset:function(){Y=!1,Re=null,xe=null,Be=null,De=null,Ae=null,We=null,at=null,$t=null}}}const c=new i,d=new s,m=new l,g=new WeakMap,p=new WeakMap;let S={},b={},v={},E=new WeakMap,A=[],D=null,M=!1,y=null,N=null,I=null,L=null,X=null,P=null,B=null,w=new Ft(0,0,0),F=0,Q=!1,G=null,K=null,ue=null,he=null,W=null;const z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,le=0;const ge=o.getParameter(o.VERSION);ge.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ge)[1]),H=le>=1):ge.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),H=le>=2);let ae=null,C={};const j=o.getParameter(o.SCISSOR_BOX),fe=o.getParameter(o.VIEWPORT),Ee=new mn().fromArray(j),we=new mn().fromArray(fe);function ee(Y,Re,xe,Be){const De=new Uint8Array(4),Ae=o.createTexture();o.bindTexture(Y,Ae),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let We=0;We<xe;We++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Re,0,o.RGBA,1,1,Be,0,o.RGBA,o.UNSIGNED_BYTE,De):o.texImage2D(Re+We,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,De);return Ae}const Se={};Se[o.TEXTURE_2D]=ee(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=ee(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=ee(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=ee(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),m.setClear(0),Me(o.DEPTH_TEST),d.setFunc(jr),dt(!1),ht(rx),Me(o.CULL_FACE),At(Na);function Me(Y){S[Y]!==!0&&(o.enable(Y),S[Y]=!0)}function He(Y){S[Y]!==!1&&(o.disable(Y),S[Y]=!1)}function Qe(Y,Re){return v[Y]!==Re?(o.bindFramebuffer(Y,Re),v[Y]=Re,Y===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Re),Y===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ye(Y,Re){let xe=A,Be=!1;if(Y){xe=E.get(Re),xe===void 0&&(xe=[],E.set(Re,xe));const De=Y.textures;if(xe.length!==De.length||xe[0]!==o.COLOR_ATTACHMENT0){for(let Ae=0,We=De.length;Ae<We;Ae++)xe[Ae]=o.COLOR_ATTACHMENT0+Ae;xe.length=De.length,Be=!0}}else xe[0]!==o.BACK&&(xe[0]=o.BACK,Be=!0);Be&&o.drawBuffers(xe)}function ft(Y){return D!==Y?(o.useProgram(Y),D=Y,!0):!1}const ot={[Hs]:o.FUNC_ADD,[lS]:o.FUNC_SUBTRACT,[cS]:o.FUNC_REVERSE_SUBTRACT};ot[uS]=o.MIN,ot[fS]=o.MAX;const lt={[dS]:o.ZERO,[hS]:o.ONE,[pS]:o.SRC_COLOR,[Jd]:o.SRC_ALPHA,[bS]:o.SRC_ALPHA_SATURATE,[vS]:o.DST_COLOR,[gS]:o.DST_ALPHA,[mS]:o.ONE_MINUS_SRC_COLOR,[$d]:o.ONE_MINUS_SRC_ALPHA,[_S]:o.ONE_MINUS_DST_COLOR,[xS]:o.ONE_MINUS_DST_ALPHA,[yS]:o.CONSTANT_COLOR,[SS]:o.ONE_MINUS_CONSTANT_COLOR,[MS]:o.CONSTANT_ALPHA,[ES]:o.ONE_MINUS_CONSTANT_ALPHA};function At(Y,Re,xe,Be,De,Ae,We,at,$t,Dt){if(Y===Na){M===!0&&(He(o.BLEND),M=!1);return}if(M===!1&&(Me(o.BLEND),M=!0),Y!==oS){if(Y!==y||Dt!==Q){if((N!==Hs||X!==Hs)&&(o.blendEquation(o.FUNC_ADD),N=Hs,X=Hs),Dt)switch(Y){case kr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jc:o.blendFunc(o.ONE,o.ONE);break;case ox:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case lx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ut("WebGLState: Invalid blending: ",Y);break}else switch(Y){case kr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case ox:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lx:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",Y);break}I=null,L=null,P=null,B=null,w.set(0,0,0),F=0,y=Y,Q=Dt}return}De=De||Re,Ae=Ae||xe,We=We||Be,(Re!==N||De!==X)&&(o.blendEquationSeparate(ot[Re],ot[De]),N=Re,X=De),(xe!==I||Be!==L||Ae!==P||We!==B)&&(o.blendFuncSeparate(lt[xe],lt[Be],lt[Ae],lt[We]),I=xe,L=Be,P=Ae,B=We),(at.equals(w)===!1||$t!==F)&&(o.blendColor(at.r,at.g,at.b,$t),w.copy(at),F=$t),y=Y,Q=!1}function rt(Y,Re){Y.side===Ai?He(o.CULL_FACE):Me(o.CULL_FACE);let xe=Y.side===ei;Re&&(xe=!xe),dt(xe),Y.blending===kr&&Y.transparent===!1?At(Na):At(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),d.setFunc(Y.depthFunc),d.setTest(Y.depthTest),d.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Be=Y.stencilWrite;m.setTest(Be),Be&&(m.setMask(Y.stencilWriteMask),m.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),m.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),q(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Me(o.SAMPLE_ALPHA_TO_COVERAGE):He(o.SAMPLE_ALPHA_TO_COVERAGE)}function dt(Y){G!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),G=Y)}function ht(Y){Y!==aS?(Me(o.CULL_FACE),Y!==K&&(Y===rx?o.cullFace(o.BACK):Y===sS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):He(o.CULL_FACE),K=Y}function $e(Y){Y!==ue&&(H&&o.lineWidth(Y),ue=Y)}function q(Y,Re,xe){Y?(Me(o.POLYGON_OFFSET_FILL),(he!==Re||W!==xe)&&(he=Re,W=xe,d.getReversed()&&(Re=-Re),o.polygonOffset(Re,xe))):He(o.POLYGON_OFFSET_FILL)}function Nt(Y){Y?Me(o.SCISSOR_TEST):He(o.SCISSOR_TEST)}function ut(Y){Y===void 0&&(Y=o.TEXTURE0+z-1),ae!==Y&&(o.activeTexture(Y),ae=Y)}function zt(Y,Re,xe){xe===void 0&&(ae===null?xe=o.TEXTURE0+z-1:xe=ae);let Be=C[xe];Be===void 0&&(Be={type:void 0,texture:void 0},C[xe]=Be),(Be.type!==Y||Be.texture!==Re)&&(ae!==xe&&(o.activeTexture(xe),ae=xe),o.bindTexture(Y,Re||Se[Y]),Be.type=Y,Be.texture=Re)}function Ue(){const Y=C[ae];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Zt(){try{o.compressedTexImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function U(){try{o.compressedTexImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function T(){try{o.texSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function ie(){try{o.texSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function _e(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Te(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Le(){try{o.texStorage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Ne(){try{o.texStorage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function pe(){try{o.texImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function me(){try{o.texImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Pe(Y){return b[Y]!==void 0?b[Y]:o.getParameter(Y)}function Fe(Y,Re){b[Y]!==Re&&(o.pixelStorei(Y,Re),b[Y]=Re)}function Oe(Y){Ee.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),Ee.copy(Y))}function ze(Y){we.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),we.copy(Y))}function nt(Y,Re){let xe=p.get(Re);xe===void 0&&(xe=new WeakMap,p.set(Re,xe));let Be=xe.get(Y);Be===void 0&&(Be=o.getUniformBlockIndex(Re,Y.name),xe.set(Y,Be))}function it(Y,Re){const Be=p.get(Re).get(Y);g.get(Re)!==Be&&(o.uniformBlockBinding(Re,Be,Y.__bindingPointIndex),g.set(Re,Be))}function pt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},b={},ae=null,C={},v={},E=new WeakMap,A=[],D=null,M=!1,y=null,N=null,I=null,L=null,X=null,P=null,B=null,w=new Ft(0,0,0),F=0,Q=!1,G=null,K=null,ue=null,he=null,W=null,Ee.set(0,0,o.canvas.width,o.canvas.height),we.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),m.reset()}return{buffers:{color:c,depth:d,stencil:m},enable:Me,disable:He,bindFramebuffer:Qe,drawBuffers:Ye,useProgram:ft,setBlending:At,setMaterial:rt,setFlipSided:dt,setCullFace:ht,setLineWidth:$e,setPolygonOffset:q,setScissorTest:Nt,activeTexture:ut,bindTexture:zt,unbindTexture:Ue,compressedTexImage2D:Zt,compressedTexImage3D:U,texImage2D:pe,texImage3D:me,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:Le,texStorage3D:Ne,texSubImage2D:T,texSubImage3D:ie,compressedTexSubImage2D:_e,compressedTexSubImage3D:Te,scissor:Oe,viewport:ze,reset:pt}}function s2(o,t,i,s,l,c,d){const m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Yt,S=new WeakMap,b=new Set;let v;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(U,T){return A?new OffscreenCanvas(U,T):Kc("canvas")}function M(U,T,ie){let _e=1;const Te=Zt(U);if((Te.width>ie||Te.height>ie)&&(_e=ie/Math.max(Te.width,Te.height)),_e<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Le=Math.floor(_e*Te.width),Ne=Math.floor(_e*Te.height);v===void 0&&(v=D(Le,Ne));const pe=T?D(Le,Ne):v;return pe.width=Le,pe.height=Ne,pe.getContext("2d").drawImage(U,0,0,Le,Ne),ct("WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+Le+"x"+Ne+")."),pe}else return"data"in U&&ct("WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),U;return U}function y(U){return U.generateMipmaps}function N(U){o.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,T,ie,_e,Te,Le=!1){if(U!==null){if(o[U]!==void 0)return o[U];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ne;_e&&(Ne=t.get("EXT_texture_norm16"),Ne||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=T;if(T===o.RED&&(ie===o.FLOAT&&(pe=o.R32F),ie===o.HALF_FLOAT&&(pe=o.R16F),ie===o.UNSIGNED_BYTE&&(pe=o.R8),ie===o.UNSIGNED_SHORT&&Ne&&(pe=Ne.R16_EXT),ie===o.SHORT&&Ne&&(pe=Ne.R16_SNORM_EXT)),T===o.RED_INTEGER&&(ie===o.UNSIGNED_BYTE&&(pe=o.R8UI),ie===o.UNSIGNED_SHORT&&(pe=o.R16UI),ie===o.UNSIGNED_INT&&(pe=o.R32UI),ie===o.BYTE&&(pe=o.R8I),ie===o.SHORT&&(pe=o.R16I),ie===o.INT&&(pe=o.R32I)),T===o.RG&&(ie===o.FLOAT&&(pe=o.RG32F),ie===o.HALF_FLOAT&&(pe=o.RG16F),ie===o.UNSIGNED_BYTE&&(pe=o.RG8),ie===o.UNSIGNED_SHORT&&Ne&&(pe=Ne.RG16_EXT),ie===o.SHORT&&Ne&&(pe=Ne.RG16_SNORM_EXT)),T===o.RG_INTEGER&&(ie===o.UNSIGNED_BYTE&&(pe=o.RG8UI),ie===o.UNSIGNED_SHORT&&(pe=o.RG16UI),ie===o.UNSIGNED_INT&&(pe=o.RG32UI),ie===o.BYTE&&(pe=o.RG8I),ie===o.SHORT&&(pe=o.RG16I),ie===o.INT&&(pe=o.RG32I)),T===o.RGB_INTEGER&&(ie===o.UNSIGNED_BYTE&&(pe=o.RGB8UI),ie===o.UNSIGNED_SHORT&&(pe=o.RGB16UI),ie===o.UNSIGNED_INT&&(pe=o.RGB32UI),ie===o.BYTE&&(pe=o.RGB8I),ie===o.SHORT&&(pe=o.RGB16I),ie===o.INT&&(pe=o.RGB32I)),T===o.RGBA_INTEGER&&(ie===o.UNSIGNED_BYTE&&(pe=o.RGBA8UI),ie===o.UNSIGNED_SHORT&&(pe=o.RGBA16UI),ie===o.UNSIGNED_INT&&(pe=o.RGBA32UI),ie===o.BYTE&&(pe=o.RGBA8I),ie===o.SHORT&&(pe=o.RGBA16I),ie===o.INT&&(pe=o.RGBA32I)),T===o.RGB&&(ie===o.UNSIGNED_SHORT&&Ne&&(pe=Ne.RGB16_EXT),ie===o.SHORT&&Ne&&(pe=Ne.RGB16_SNORM_EXT),ie===o.UNSIGNED_INT_5_9_9_9_REV&&(pe=o.RGB9_E5),ie===o.UNSIGNED_INT_10F_11F_11F_REV&&(pe=o.R11F_G11F_B10F)),T===o.RGBA){const me=Le?Yc:Rt.getTransfer(Te);ie===o.FLOAT&&(pe=o.RGBA32F),ie===o.HALF_FLOAT&&(pe=o.RGBA16F),ie===o.UNSIGNED_BYTE&&(pe=me===qt?o.SRGB8_ALPHA8:o.RGBA8),ie===o.UNSIGNED_SHORT&&Ne&&(pe=Ne.RGBA16_EXT),ie===o.SHORT&&Ne&&(pe=Ne.RGBA16_SNORM_EXT),ie===o.UNSIGNED_SHORT_4_4_4_4&&(pe=o.RGBA4),ie===o.UNSIGNED_SHORT_5_5_5_1&&(pe=o.RGB5_A1)}return(pe===o.R16F||pe===o.R32F||pe===o.RG16F||pe===o.RG32F||pe===o.RGBA16F||pe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),pe}function X(U,T){let ie;return U?T===null||T===aa||T===Jo?ie=o.DEPTH24_STENCIL8:T===ea?ie=o.DEPTH32F_STENCIL8:T===Qo&&(ie=o.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===aa||T===Jo?ie=o.DEPTH_COMPONENT24:T===ea?ie=o.DEPTH_COMPONENT32F:T===Qo&&(ie=o.DEPTH_COMPONENT16),ie}function P(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Pn&&U.minFilter!==Gn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function B(U){const T=U.target;T.removeEventListener("dispose",B),F(T),T.isVideoTexture&&S.delete(T),T.isHTMLTexture&&b.delete(T)}function w(U){const T=U.target;T.removeEventListener("dispose",w),G(T)}function F(U){const T=s.get(U);if(T.__webglInit===void 0)return;const ie=U.source,_e=E.get(ie);if(_e){const Te=_e[T.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&Q(U),Object.keys(_e).length===0&&E.delete(ie)}s.remove(U)}function Q(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const ie=U.source,_e=E.get(ie);delete _e[T.__cacheKey],d.memory.textures--}function G(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(T.__webglFramebuffer[_e]))for(let Te=0;Te<T.__webglFramebuffer[_e].length;Te++)o.deleteFramebuffer(T.__webglFramebuffer[_e][Te]);else o.deleteFramebuffer(T.__webglFramebuffer[_e]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[_e])}else{if(Array.isArray(T.__webglFramebuffer))for(let _e=0;_e<T.__webglFramebuffer.length;_e++)o.deleteFramebuffer(T.__webglFramebuffer[_e]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _e=0;_e<T.__webglColorRenderbuffer.length;_e++)T.__webglColorRenderbuffer[_e]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[_e]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ie=U.textures;for(let _e=0,Te=ie.length;_e<Te;_e++){const Le=s.get(ie[_e]);Le.__webglTexture&&(o.deleteTexture(Le.__webglTexture),d.memory.textures--),s.remove(ie[_e])}s.remove(U)}let K=0;function ue(){K=0}function he(){return K}function W(U){K=U}function z(){const U=K;return U>=l.maxTextures&&ct("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),K+=1,U}function H(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function le(U,T){const ie=s.get(U);if(U.isVideoTexture&&zt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&ie.__version!==U.version){const _e=U.image;if(_e===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{He(ie,U,T);return}}else U.isExternalTexture&&(ie.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,ie.__webglTexture,o.TEXTURE0+T)}function ge(U,T){const ie=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ie.__version!==U.version){He(ie,U,T);return}else U.isExternalTexture&&(ie.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,ie.__webglTexture,o.TEXTURE0+T)}function ae(U,T){const ie=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ie.__version!==U.version){He(ie,U,T);return}i.bindTexture(o.TEXTURE_3D,ie.__webglTexture,o.TEXTURE0+T)}function C(U,T){const ie=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&ie.__version!==U.version){Qe(ie,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture,o.TEXTURE0+T)}const j={[oh]:o.REPEAT,[Ca]:o.CLAMP_TO_EDGE,[lh]:o.MIRRORED_REPEAT},fe={[Pn]:o.NEAREST,[wS]:o.NEAREST_MIPMAP_NEAREST,[hc]:o.NEAREST_MIPMAP_LINEAR,[Gn]:o.LINEAR,[bd]:o.LINEAR_MIPMAP_NEAREST,[ks]:o.LINEAR_MIPMAP_LINEAR},Ee={[NS]:o.NEVER,[OS]:o.ALWAYS,[DS]:o.LESS,[Jh]:o.LEQUAL,[US]:o.EQUAL,[$h]:o.GEQUAL,[LS]:o.GREATER,[zS]:o.NOTEQUAL};function we(U,T){if(T.type===ea&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Gn||T.magFilter===bd||T.magFilter===hc||T.magFilter===ks||T.minFilter===Gn||T.minFilter===bd||T.minFilter===hc||T.minFilter===ks)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,j[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,j[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,j[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,fe[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,fe[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Ee[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Pn||T.minFilter!==hc&&T.minFilter!==ks||T.type===ea&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const ie=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ee(U,T){let ie=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",B));const _e=T.source;let Te=E.get(_e);Te===void 0&&(Te={},E.set(_e,Te));const Le=H(T);if(Le!==U.__cacheKey){Te[Le]===void 0&&(Te[Le]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),Te[Le].usedTimes++;const Ne=Te[U.__cacheKey];Ne!==void 0&&(Te[U.__cacheKey].usedTimes--,Ne.usedTimes===0&&Q(T)),U.__cacheKey=Le,U.__webglTexture=Te[Le].texture}return ie}function Se(U,T,ie){return Math.floor(Math.floor(U/ie)/T)}function Me(U,T,ie,_e){const Le=U.updateRanges;if(Le.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,ie,_e,T.data);else{Le.sort((Fe,Oe)=>Fe.start-Oe.start);let Ne=0;for(let Fe=1;Fe<Le.length;Fe++){const Oe=Le[Ne],ze=Le[Fe],nt=Oe.start+Oe.count,it=Se(ze.start,T.width,4),pt=Se(Oe.start,T.width,4);ze.start<=nt+1&&it===pt&&Se(ze.start+ze.count-1,T.width,4)===it?Oe.count=Math.max(Oe.count,ze.start+ze.count-Oe.start):(++Ne,Le[Ne]=ze)}Le.length=Ne+1;const pe=i.getParameter(o.UNPACK_ROW_LENGTH),me=i.getParameter(o.UNPACK_SKIP_PIXELS),Pe=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Fe=0,Oe=Le.length;Fe<Oe;Fe++){const ze=Le[Fe],nt=Math.floor(ze.start/4),it=Math.ceil(ze.count/4),pt=nt%T.width,Y=Math.floor(nt/T.width),Re=it,xe=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,pt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(o.TEXTURE_2D,0,pt,Y,Re,xe,ie,_e,T.data)}U.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,pe),i.pixelStorei(o.UNPACK_SKIP_PIXELS,me),i.pixelStorei(o.UNPACK_SKIP_ROWS,Pe)}}function He(U,T,ie){let _e=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_e=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_e=o.TEXTURE_3D);const Te=ee(U,T),Le=T.source;i.bindTexture(_e,U.__webglTexture,o.TEXTURE0+ie);const Ne=s.get(Le);if(Le.version!==Ne.__version||Te===!0){if(i.activeTexture(o.TEXTURE0+ie),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const xe=Rt.getPrimaries(Rt.workingColorSpace),Be=T.colorSpace===ds?null:Rt.getPrimaries(T.colorSpace),De=T.colorSpace===ds||xe===Be?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment);let me=M(T.image,!1,l.maxTextureSize);me=Ue(T,me);const Pe=c.convert(T.format,T.colorSpace),Fe=c.convert(T.type);let Oe=L(T.internalFormat,Pe,Fe,T.normalized,T.colorSpace,T.isVideoTexture);we(_e,T);let ze;const nt=T.mipmaps,it=T.isVideoTexture!==!0,pt=Ne.__version===void 0||Te===!0,Y=Le.dataReady,Re=P(T,me);if(T.isDepthTexture)Oe=X(T.format===Vs,T.type),pt&&(it?i.texStorage2D(o.TEXTURE_2D,1,Oe,me.width,me.height):i.texImage2D(o.TEXTURE_2D,0,Oe,me.width,me.height,0,Pe,Fe,null));else if(T.isDataTexture)if(nt.length>0){it&&pt&&i.texStorage2D(o.TEXTURE_2D,Re,Oe,nt[0].width,nt[0].height);for(let xe=0,Be=nt.length;xe<Be;xe++)ze=nt[xe],it?Y&&i.texSubImage2D(o.TEXTURE_2D,xe,0,0,ze.width,ze.height,Pe,Fe,ze.data):i.texImage2D(o.TEXTURE_2D,xe,Oe,ze.width,ze.height,0,Pe,Fe,ze.data);T.generateMipmaps=!1}else it?(pt&&i.texStorage2D(o.TEXTURE_2D,Re,Oe,me.width,me.height),Y&&Me(T,me,Pe,Fe)):i.texImage2D(o.TEXTURE_2D,0,Oe,me.width,me.height,0,Pe,Fe,me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Oe,nt[0].width,nt[0].height,me.depth);for(let xe=0,Be=nt.length;xe<Be;xe++)if(ze=nt[xe],T.format!==Hi)if(Pe!==null)if(it){if(Y)if(T.layerUpdates.size>0){const De=Ox(ze.width,ze.height,T.format,T.type);for(const Ae of T.layerUpdates){const We=ze.data.subarray(Ae*De/ze.data.BYTES_PER_ELEMENT,(Ae+1)*De/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,Ae,ze.width,ze.height,1,Pe,We)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,0,ze.width,ze.height,me.depth,Pe,ze.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xe,Oe,ze.width,ze.height,me.depth,0,ze.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?Y&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,0,ze.width,ze.height,me.depth,Pe,Fe,ze.data):i.texImage3D(o.TEXTURE_2D_ARRAY,xe,Oe,ze.width,ze.height,me.depth,0,Pe,Fe,ze.data)}else{it&&pt&&i.texStorage2D(o.TEXTURE_2D,Re,Oe,nt[0].width,nt[0].height);for(let xe=0,Be=nt.length;xe<Be;xe++)ze=nt[xe],T.format!==Hi?Pe!==null?it?Y&&i.compressedTexSubImage2D(o.TEXTURE_2D,xe,0,0,ze.width,ze.height,Pe,ze.data):i.compressedTexImage2D(o.TEXTURE_2D,xe,Oe,ze.width,ze.height,0,ze.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?Y&&i.texSubImage2D(o.TEXTURE_2D,xe,0,0,ze.width,ze.height,Pe,Fe,ze.data):i.texImage2D(o.TEXTURE_2D,xe,Oe,ze.width,ze.height,0,Pe,Fe,ze.data)}else if(T.isDataArrayTexture)if(it){if(pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Oe,me.width,me.height,me.depth),Y)if(T.layerUpdates.size>0){const xe=Ox(me.width,me.height,T.format,T.type);for(const Be of T.layerUpdates){const De=me.data.subarray(Be*xe/me.data.BYTES_PER_ELEMENT,(Be+1)*xe/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Be,me.width,me.height,1,Pe,Fe,De)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Pe,Fe,me.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Oe,me.width,me.height,me.depth,0,Pe,Fe,me.data);else if(T.isData3DTexture)it?(pt&&i.texStorage3D(o.TEXTURE_3D,Re,Oe,me.width,me.height,me.depth),Y&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Pe,Fe,me.data)):i.texImage3D(o.TEXTURE_3D,0,Oe,me.width,me.height,me.depth,0,Pe,Fe,me.data);else if(T.isFramebufferTexture){if(pt)if(it)i.texStorage2D(o.TEXTURE_2D,Re,Oe,me.width,me.height);else{let xe=me.width,Be=me.height;for(let De=0;De<Re;De++)i.texImage2D(o.TEXTURE_2D,De,Oe,xe,Be,0,Pe,Fe,null),xe>>=1,Be>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in o){const xe=o.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),me.parentNode!==xe){xe.appendChild(me),b.add(T),xe.onpaint=at=>{const $t=at.changedElements;for(const Dt of b)$t.includes(Dt.image)&&(Dt.needsUpdate=!0)},xe.requestPaint();return}const Be=0,De=o.RGBA,Ae=o.RGBA,We=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,Be,De,Ae,We,me),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(nt.length>0){if(it&&pt){const xe=Zt(nt[0]);i.texStorage2D(o.TEXTURE_2D,Re,Oe,xe.width,xe.height)}for(let xe=0,Be=nt.length;xe<Be;xe++)ze=nt[xe],it?Y&&i.texSubImage2D(o.TEXTURE_2D,xe,0,0,Pe,Fe,ze):i.texImage2D(o.TEXTURE_2D,xe,Oe,Pe,Fe,ze);T.generateMipmaps=!1}else if(it){if(pt){const xe=Zt(me);i.texStorage2D(o.TEXTURE_2D,Re,Oe,xe.width,xe.height)}Y&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pe,Fe,me)}else i.texImage2D(o.TEXTURE_2D,0,Oe,Pe,Fe,me);y(T)&&N(_e),Ne.__version=Le.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Qe(U,T,ie){if(T.image.length!==6)return;const _e=ee(U,T),Te=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+ie);const Le=s.get(Te);if(Te.version!==Le.__version||_e===!0){i.activeTexture(o.TEXTURE0+ie);const Ne=Rt.getPrimaries(Rt.workingColorSpace),pe=T.colorSpace===ds?null:Rt.getPrimaries(T.colorSpace),me=T.colorSpace===ds||Ne===pe?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Pe=T.isCompressedTexture||T.image[0].isCompressedTexture,Fe=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let Ae=0;Ae<6;Ae++)!Pe&&!Fe?Oe[Ae]=M(T.image[Ae],!0,l.maxCubemapSize):Oe[Ae]=Fe?T.image[Ae].image:T.image[Ae],Oe[Ae]=Ue(T,Oe[Ae]);const ze=Oe[0],nt=c.convert(T.format,T.colorSpace),it=c.convert(T.type),pt=L(T.internalFormat,nt,it,T.normalized,T.colorSpace),Y=T.isVideoTexture!==!0,Re=Le.__version===void 0||_e===!0,xe=Te.dataReady;let Be=P(T,ze);we(o.TEXTURE_CUBE_MAP,T);let De;if(Pe){Y&&Re&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,pt,ze.width,ze.height);for(let Ae=0;Ae<6;Ae++){De=Oe[Ae].mipmaps;for(let We=0;We<De.length;We++){const at=De[We];T.format!==Hi?nt!==null?Y?xe&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,We,0,0,at.width,at.height,nt,at.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,We,pt,at.width,at.height,0,at.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?xe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,We,0,0,at.width,at.height,nt,it,at.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,We,pt,at.width,at.height,0,nt,it,at.data)}}}else{if(De=T.mipmaps,Y&&Re){De.length>0&&Be++;const Ae=Zt(Oe[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,pt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Fe){Y?xe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Oe[Ae].width,Oe[Ae].height,nt,it,Oe[Ae].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,pt,Oe[Ae].width,Oe[Ae].height,0,nt,it,Oe[Ae].data);for(let We=0;We<De.length;We++){const $t=De[We].image[Ae].image;Y?xe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,We+1,0,0,$t.width,$t.height,nt,it,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,We+1,pt,$t.width,$t.height,0,nt,it,$t.data)}}else{Y?xe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,nt,it,Oe[Ae]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,pt,nt,it,Oe[Ae]);for(let We=0;We<De.length;We++){const at=De[We];Y?xe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,We+1,0,0,nt,it,at.image[Ae]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,We+1,pt,nt,it,at.image[Ae])}}}y(T)&&N(o.TEXTURE_CUBE_MAP),Le.__version=Te.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Ye(U,T,ie,_e,Te,Le){const Ne=c.convert(ie.format,ie.colorSpace),pe=c.convert(ie.type),me=L(ie.internalFormat,Ne,pe,ie.normalized,ie.colorSpace),Pe=s.get(T),Fe=s.get(ie);if(Fe.__renderTarget=T,!Pe.__hasExternalTextures){const Oe=Math.max(1,T.width>>Le),ze=Math.max(1,T.height>>Le);Te===o.TEXTURE_3D||Te===o.TEXTURE_2D_ARRAY?i.texImage3D(Te,Le,me,Oe,ze,T.depth,0,Ne,pe,null):i.texImage2D(Te,Le,me,Oe,ze,0,Ne,pe,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),ut(T)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_e,Te,Fe.__webglTexture,0,Nt(T)):(Te===o.TEXTURE_2D||Te>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_e,Te,Fe.__webglTexture,Le),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ft(U,T,ie){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const _e=T.depthTexture,Te=_e&&_e.isDepthTexture?_e.type:null,Le=X(T.stencilBuffer,Te),Ne=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;ut(T)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Nt(T),Le,T.width,T.height):ie?o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt(T),Le,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Le,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ne,o.RENDERBUFFER,U)}else{const _e=T.textures;for(let Te=0;Te<_e.length;Te++){const Le=_e[Te],Ne=c.convert(Le.format,Le.colorSpace),pe=c.convert(Le.type),me=L(Le.internalFormat,Ne,pe,Le.normalized,Le.colorSpace);ut(T)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Nt(T),me,T.width,T.height):ie?o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt(T),me,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,me,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ot(U,T,ie){const _e=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Te=s.get(T.depthTexture);if(Te.__renderTarget=T,(!Te.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),_e){if(Te.__webglInit===void 0&&(Te.__webglInit=!0,T.depthTexture.addEventListener("dispose",B)),Te.__webglTexture===void 0){Te.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Te.__webglTexture),we(o.TEXTURE_CUBE_MAP,T.depthTexture);const Pe=c.convert(T.depthTexture.format),Fe=c.convert(T.depthTexture.type);let Oe;T.depthTexture.format===La?Oe=o.DEPTH_COMPONENT24:T.depthTexture.format===Vs&&(Oe=o.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Oe,T.width,T.height,0,Pe,Fe,null)}}else le(T.depthTexture,0);const Le=Te.__webglTexture,Ne=Nt(T),pe=_e?o.TEXTURE_CUBE_MAP_POSITIVE_X+ie:o.TEXTURE_2D,me=T.depthTexture.format===Vs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===La)ut(T)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,pe,Le,0,Ne):o.framebufferTexture2D(o.FRAMEBUFFER,me,pe,Le,0);else if(T.depthTexture.format===Vs)ut(T)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,pe,Le,0,Ne):o.framebufferTexture2D(o.FRAMEBUFFER,me,pe,Le,0);else throw new Error("Unknown depthTexture format")}function lt(U){const T=s.get(U),ie=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const _e=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_e){const Te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_e.removeEventListener("dispose",Te)};_e.addEventListener("dispose",Te),T.__depthDisposeCallback=Te}T.__boundDepthTexture=_e}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if(ie)for(let _e=0;_e<6;_e++)ot(T.__webglFramebuffer[_e],U,_e);else{const _e=U.texture.mipmaps;_e&&_e.length>0?ot(T.__webglFramebuffer[0],U,0):ot(T.__webglFramebuffer,U,0)}else if(ie){T.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[_e]),T.__webglDepthbuffer[_e]===void 0)T.__webglDepthbuffer[_e]=o.createRenderbuffer(),ft(T.__webglDepthbuffer[_e],U,!1);else{const Te=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=T.__webglDepthbuffer[_e];o.bindRenderbuffer(o.RENDERBUFFER,Le),o.framebufferRenderbuffer(o.FRAMEBUFFER,Te,o.RENDERBUFFER,Le)}}else{const _e=U.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),ft(T.__webglDepthbuffer,U,!1);else{const Te=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Le),o.framebufferRenderbuffer(o.FRAMEBUFFER,Te,o.RENDERBUFFER,Le)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function At(U,T,ie){const _e=s.get(U);T!==void 0&&Ye(_e.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ie!==void 0&&lt(U)}function rt(U){const T=U.texture,ie=s.get(U),_e=s.get(T);U.addEventListener("dispose",w);const Te=U.textures,Le=U.isWebGLCubeRenderTarget===!0,Ne=Te.length>1;if(Ne||(_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture()),_e.__version=T.version,d.memory.textures++),Le){ie.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(T.mipmaps&&T.mipmaps.length>0){ie.__webglFramebuffer[pe]=[];for(let me=0;me<T.mipmaps.length;me++)ie.__webglFramebuffer[pe][me]=o.createFramebuffer()}else ie.__webglFramebuffer[pe]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ie.__webglFramebuffer=[];for(let pe=0;pe<T.mipmaps.length;pe++)ie.__webglFramebuffer[pe]=o.createFramebuffer()}else ie.__webglFramebuffer=o.createFramebuffer();if(Ne)for(let pe=0,me=Te.length;pe<me;pe++){const Pe=s.get(Te[pe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&ut(U)===!1){ie.__webglMultisampledFramebuffer=o.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let pe=0;pe<Te.length;pe++){const me=Te[pe];ie.__webglColorRenderbuffer[pe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ie.__webglColorRenderbuffer[pe]);const Pe=c.convert(me.format,me.colorSpace),Fe=c.convert(me.type),Oe=L(me.internalFormat,Pe,Fe,me.normalized,me.colorSpace,U.isXRRenderTarget===!0),ze=Nt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ze,Oe,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+pe,o.RENDERBUFFER,ie.__webglColorRenderbuffer[pe])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(ie.__webglDepthRenderbuffer=o.createRenderbuffer(),ft(ie.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Le){i.bindTexture(o.TEXTURE_CUBE_MAP,_e.__webglTexture),we(o.TEXTURE_CUBE_MAP,T);for(let pe=0;pe<6;pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)Ye(ie.__webglFramebuffer[pe][me],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else Ye(ie.__webglFramebuffer[pe],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(T)&&N(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ne){for(let pe=0,me=Te.length;pe<me;pe++){const Pe=Te[pe],Fe=s.get(Pe);let Oe=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Oe=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Oe,Fe.__webglTexture),we(Oe,Pe),Ye(ie.__webglFramebuffer,U,Pe,o.COLOR_ATTACHMENT0+pe,Oe,0),y(Pe)&&N(Oe)}i.unbindTexture()}else{let pe=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pe=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(pe,_e.__webglTexture),we(pe,T),T.mipmaps&&T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)Ye(ie.__webglFramebuffer[me],U,T,o.COLOR_ATTACHMENT0,pe,me);else Ye(ie.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,pe,0);y(T)&&N(pe),i.unbindTexture()}U.depthBuffer&&lt(U)}function dt(U){const T=U.textures;for(let ie=0,_e=T.length;ie<_e;ie++){const Te=T[ie];if(y(Te)){const Le=I(U),Ne=s.get(Te).__webglTexture;i.bindTexture(Le,Ne),N(Le),i.unbindTexture()}}}const ht=[],$e=[];function q(U){if(U.samples>0){if(ut(U)===!1){const T=U.textures,ie=U.width,_e=U.height;let Te=o.COLOR_BUFFER_BIT;const Le=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ne=s.get(U),pe=T.length>1;if(pe)for(let Pe=0;Pe<T.length;Pe++)i.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const me=U.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Pe=0;Pe<T.length;Pe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Te|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Te|=o.STENCIL_BUFFER_BIT)),pe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ne.__webglColorRenderbuffer[Pe]);const Fe=s.get(T[Pe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Fe,0)}o.blitFramebuffer(0,0,ie,_e,0,0,ie,_e,Te,o.NEAREST),g===!0&&(ht.length=0,$e.length=0,ht.push(o.COLOR_ATTACHMENT0+Pe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ht.push(Le),$e.push(Le),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,$e)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ht))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),pe)for(let Pe=0;Pe<T.length;Pe++){i.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pe,o.RENDERBUFFER,Ne.__webglColorRenderbuffer[Pe]);const Fe=s.get(T[Pe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pe,o.TEXTURE_2D,Fe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&g){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Nt(U){return Math.min(l.maxSamples,U.samples)}function ut(U){const T=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function zt(U){const T=d.render.frame;S.get(U)!==T&&(S.set(U,T),U.update())}function Ue(U,T){const ie=U.colorSpace,_e=U.format,Te=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ie!==qc&&ie!==ds&&(Rt.getTransfer(ie)===qt?(_e!==Hi||Te!==wi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",ie)),T}function Zt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=z,this.resetTextureUnits=ue,this.getTextureUnits=he,this.setTextureUnits=W,this.setTexture2D=le,this.setTexture2DArray=ge,this.setTexture3D=ae,this.setTextureCube=C,this.rebindTextures=At,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function r2(o,t){function i(s,l=ds){let c;const d=Rt.getTransfer(l);if(s===wi)return o.UNSIGNED_BYTE;if(s===qh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Yh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===_v)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===bv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===xv)return o.BYTE;if(s===vv)return o.SHORT;if(s===Qo)return o.UNSIGNED_SHORT;if(s===Wh)return o.INT;if(s===aa)return o.UNSIGNED_INT;if(s===ea)return o.FLOAT;if(s===Ua)return o.HALF_FLOAT;if(s===yv)return o.ALPHA;if(s===Sv)return o.RGB;if(s===Hi)return o.RGBA;if(s===La)return o.DEPTH_COMPONENT;if(s===Vs)return o.DEPTH_STENCIL;if(s===Mv)return o.RED;if(s===Zh)return o.RED_INTEGER;if(s===Xs)return o.RG;if(s===Kh)return o.RG_INTEGER;if(s===Qh)return o.RGBA_INTEGER;if(s===Bc||s===Hc||s===Gc||s===kc)if(d===qt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Bc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Bc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ch||s===uh||s===fh||s===dh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hh||s===ph||s===mh||s===gh||s===xh||s===Xc||s===vh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===hh||s===ph)return d===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===mh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===gh)return c.COMPRESSED_R11_EAC;if(s===xh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Xc)return c.COMPRESSED_RG11_EAC;if(s===vh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===_h||s===bh||s===yh||s===Sh||s===Mh||s===Eh||s===Th||s===Ah||s===wh||s===Rh||s===Ch||s===Nh||s===Dh||s===Uh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===_h)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Mh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Eh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Th)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ah)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ch)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Lh||s===zh||s===Oh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Lh)return d===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Oh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ph||s===Ih||s===Wc||s===Fh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ph)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ih)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const o2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l2=`
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

}`;class c2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new zv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ki({vertexShader:o2,fragmentShader:l2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $n(new eu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u2 extends qs{constructor(t,i){super();const s=this;let l=null,c=1,d=null,m="local-floor",g=1,p=null,S=null,b=null,v=null,E=null,A=null;const D=typeof XRWebGLBinding<"u",M=new c2,y={},N=i.getContextAttributes();let I=null,L=null;const X=[],P=[],B=new Yt;let w=null;const F=new Ti;F.viewport=new mn;const Q=new Ti;Q.viewport=new mn;const G=[F,Q],K=new b1;let ue=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Se=X[ee];return Se===void 0&&(Se=new Rd,X[ee]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ee){let Se=X[ee];return Se===void 0&&(Se=new Rd,X[ee]=Se),Se.getGripSpace()},this.getHand=function(ee){let Se=X[ee];return Se===void 0&&(Se=new Rd,X[ee]=Se),Se.getHandSpace()};function W(ee){const Se=P.indexOf(ee.inputSource);if(Se===-1)return;const Me=X[Se];Me!==void 0&&(Me.update(ee.inputSource,ee.frame,p||d),Me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function z(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",H);for(let ee=0;ee<X.length;ee++){const Se=P[ee];Se!==null&&(P[ee]=null,X[ee].disconnect(Se))}ue=null,he=null,M.reset();for(const ee in y)delete y[ee];t.setRenderTarget(I),E=null,v=null,b=null,l=null,L=null,we.stop(),s.isPresenting=!1,t.setPixelRatio(w),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,s.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){m=ee,s.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return b===null&&D&&(b=new XRWebGLBinding(l,i)),b},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",z),l.addEventListener("inputsourceschange",H),N.xrCompatible!==!0&&await i.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(B),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,He=null,Qe=null;N.depth&&(Qe=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=N.stencil?Vs:La,He=N.stencil?Jo:aa);const Ye={colorFormat:i.RGBA8,depthFormat:Qe,scaleFactor:c};b=this.getBinding(),v=b.createProjectionLayer(Ye),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new ia(v.textureWidth,v.textureHeight,{format:Hi,type:wi,depthTexture:new Wr(v.textureWidth,v.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Me={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new ia(E.framebufferWidth,E.framebufferHeight,{format:Hi,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(g),p=null,d=await l.requestReferenceSpace(m),we.setContext(l),we.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(ee){for(let Se=0;Se<ee.removed.length;Se++){const Me=ee.removed[Se],He=P.indexOf(Me);He>=0&&(P[He]=null,X[He].disconnect(Me))}for(let Se=0;Se<ee.added.length;Se++){const Me=ee.added[Se];let He=P.indexOf(Me);if(He===-1){for(let Ye=0;Ye<X.length;Ye++)if(Ye>=P.length){P.push(Me),He=Ye;break}else if(P[Ye]===null){P[Ye]=Me,He=Ye;break}if(He===-1)break}const Qe=X[He];Qe&&Qe.connect(Me)}}const le=new re,ge=new re;function ae(ee,Se,Me){le.setFromMatrixPosition(Se.matrixWorld),ge.setFromMatrixPosition(Me.matrixWorld);const He=le.distanceTo(ge),Qe=Se.projectionMatrix.elements,Ye=Me.projectionMatrix.elements,ft=Qe[14]/(Qe[10]-1),ot=Qe[14]/(Qe[10]+1),lt=(Qe[9]+1)/Qe[5],At=(Qe[9]-1)/Qe[5],rt=(Qe[8]-1)/Qe[0],dt=(Ye[8]+1)/Ye[0],ht=ft*rt,$e=ft*dt,q=He/(-rt+dt),Nt=q*-rt;if(Se.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Nt),ee.translateZ(q),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Qe[10]===-1)ee.projectionMatrix.copy(Se.projectionMatrix),ee.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const ut=ft+q,zt=ot+q,Ue=ht-Nt,Zt=$e+(He-Nt),U=lt*ot/zt*ut,T=At*ot/zt*ut;ee.projectionMatrix.makePerspective(Ue,Zt,U,T,ut,zt),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function C(ee,Se){Se===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Se.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let Se=ee.near,Me=ee.far;M.texture!==null&&(M.depthNear>0&&(Se=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),K.near=Q.near=F.near=Se,K.far=Q.far=F.far=Me,(ue!==K.near||he!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ue=K.near,he=K.far),K.layers.mask=ee.layers.mask|6,F.layers.mask=K.layers.mask&-5,Q.layers.mask=K.layers.mask&-3;const He=ee.parent,Qe=K.cameras;C(K,He);for(let Ye=0;Ye<Qe.length;Ye++)C(Qe[Ye],He);Qe.length===2?ae(K,F,Q):K.projectionMatrix.copy(F.projectionMatrix),j(ee,K,He)};function j(ee,Se,Me){Me===null?ee.matrix.copy(Se.matrixWorld):(ee.matrix.copy(Me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Se.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Se.projectionMatrix),ee.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Hh*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(v===null&&E===null))return g},this.setFoveation=function(ee){g=ee,v!==null&&(v.fixedFoveation=ee),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ee)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(ee){return y[ee]};let fe=null;function Ee(ee,Se){if(S=Se.getViewerPose(p||d),A=Se,S!==null){const Me=S.views;E!==null&&(t.setRenderTargetFramebuffer(L,E.framebuffer),t.setRenderTarget(L));let He=!1;Me.length!==K.cameras.length&&(K.cameras.length=0,He=!0);for(let ot=0;ot<Me.length;ot++){const lt=Me[ot];let At=null;if(E!==null)At=E.getViewport(lt);else{const dt=b.getViewSubImage(v,lt);At=dt.viewport,ot===0&&(t.setRenderTargetTextures(L,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(L))}let rt=G[ot];rt===void 0&&(rt=new Ti,rt.layers.enable(ot),rt.viewport=new mn,G[ot]=rt),rt.matrix.fromArray(lt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(lt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(At.x,At.y,At.width,At.height),ot===0&&(K.matrix.copy(rt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),He===!0&&K.cameras.push(rt)}const Qe=l.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){b=s.getBinding();const ot=b.getDepthInformation(Me[0]);ot&&ot.isValid&&ot.texture&&M.init(ot,l.renderState)}if(Qe&&Qe.includes("camera-access")&&D){t.state.unbindTexture(),b=s.getBinding();for(let ot=0;ot<Me.length;ot++){const lt=Me[ot].camera;if(lt){let At=y[lt];At||(At=new zv,y[lt]=At);const rt=b.getCameraImage(lt);At.sourceTexture=rt}}}}for(let Me=0;Me<X.length;Me++){const He=P[Me],Qe=X[Me];He!==null&&Qe!==void 0&&Qe.update(He,Se,p||d)}fe&&fe(ee,Se),Se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Se}),A=null}const we=new Fv;we.setAnimationLoop(Ee),this.setAnimationLoop=function(ee){fe=ee},this.dispose=function(){}}}const f2=new Mn,Xv=new xt;Xv.set(-1,0,0,0,1,0,0,0,1);function d2(o,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,Ov(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,N,I,L){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),b(M,y)):y.isMeshPhongMaterial?(c(M,y),S(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),v(M,y),y.isMeshPhysicalMaterial&&E(M,y,L)):y.isMeshMatcapMaterial?(c(M,y),A(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),D(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(d(M,y),y.isLineDashedMaterial&&m(M,y)):y.isPointsMaterial?g(M,y,N,I):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ei&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ei&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const N=t.get(y),I=N.envMap,L=N.envMapRotation;I&&(M.envMap.value=I,M.envMapRotation.value.setFromMatrix4(f2.makeRotationFromEuler(L)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Xv),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function m(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function g(M,y,N,I){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*N,M.scale.value=I*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function S(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function b(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function E(M,y,N){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ei&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,y){y.matcap&&(M.matcap.value=y.matcap)}function D(M,y){const N=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function h2(o,t,i,s){let l={},c={},d=[];const m=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(N,I){const L=I.program;s.uniformBlockBinding(N,L)}function p(N,I){let L=l[N.id];L===void 0&&(A(N),L=S(N),l[N.id]=L,N.addEventListener("dispose",M));const X=I.program;s.updateUBOMapping(N,X);const P=t.render.frame;c[N.id]!==P&&(v(N),c[N.id]=P)}function S(N){const I=b();N.__bindingPointIndex=I;const L=o.createBuffer(),X=N.__size,P=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,X,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,L),L}function b(){for(let N=0;N<m;N++)if(d.indexOf(N)===-1)return d.push(N),N;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const I=l[N.id],L=N.uniforms,X=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let P=0,B=L.length;P<B;P++){const w=Array.isArray(L[P])?L[P]:[L[P]];for(let F=0,Q=w.length;F<Q;F++){const G=w[F];if(E(G,P,F,X)===!0){const K=G.__offset,ue=Array.isArray(G.value)?G.value:[G.value];let he=0;for(let W=0;W<ue.length;W++){const z=ue[W],H=D(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,K+he,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):ArrayBuffer.isView(z)?G.__data.set(new z.constructor(z.buffer,z.byteOffset,G.__data.length)):(z.toArray(G.__data,he),he+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(N,I,L,X){const P=N.value,B=I+"_"+L;if(X[B]===void 0)return typeof P=="number"||typeof P=="boolean"?X[B]=P:ArrayBuffer.isView(P)?X[B]=P.slice():X[B]=P.clone(),!0;{const w=X[B];if(typeof P=="number"||typeof P=="boolean"){if(w!==P)return X[B]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(w.equals(P)===!1)return w.copy(P),!0}}return!1}function A(N){const I=N.uniforms;let L=0;const X=16;for(let B=0,w=I.length;B<w;B++){const F=Array.isArray(I[B])?I[B]:[I[B]];for(let Q=0,G=F.length;Q<G;Q++){const K=F[Q],ue=Array.isArray(K.value)?K.value:[K.value];for(let he=0,W=ue.length;he<W;he++){const z=ue[he],H=D(z),le=L%X,ge=le%H.boundary,ae=le+ge;L+=ge,ae!==0&&X-ae<H.storage&&(L+=X-ae),K.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=L,L+=H.storage}}}const P=L%X;return P>0&&(L+=X-P),N.__size=L,N.__cache={},this}function D(N){const I={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(I.boundary=4,I.storage=4):N.isVector2?(I.boundary=8,I.storage=8):N.isVector3||N.isColor?(I.boundary=16,I.storage=12):N.isVector4?(I.boundary=16,I.storage=16):N.isMatrix3?(I.boundary=48,I.storage=48):N.isMatrix4?(I.boundary=64,I.storage=64):N.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(I.boundary=16,I.storage=N.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",N),I}function M(N){const I=N.target;I.removeEventListener("dispose",M);const L=d.indexOf(I.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function y(){for(const N in l)o.deleteBuffer(l[N]);d=[],l={},c={}}return{bind:g,update:p,dispose:y}}const p2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function m2(){return Ji===null&&(Ji=new r1(p2,16,16,Xs,Ua),Ji.name="DFG_LUT",Ji.minFilter=Gn,Ji.magFilter=Gn,Ji.wrapS=Ca,Ji.wrapT=Ca,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class g2{constructor(t={}){const{canvas:i=IS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:m=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:b=!1,reversedDepthBuffer:v=!1,outputBufferType:E=wi}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const D=E,M=new Set([Qh,Kh,Zh]),y=new Set([wi,aa,Qo,Jo,qh,Yh]),N=new Uint32Array(4),I=new Int32Array(4),L=new re;let X=null,P=null;const B=[],w=[];let F=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Q=this;let G=!1,K=null;this._outputColorSpace=Ei;let ue=0,he=0,W=null,z=-1,H=null;const le=new mn,ge=new mn;let ae=null;const C=new Ft(0);let j=0,fe=i.width,Ee=i.height,we=1,ee=null,Se=null;const Me=new mn(0,0,fe,Ee),He=new mn(0,0,fe,Ee);let Qe=!1;const Ye=new Dv;let ft=!1,ot=!1;const lt=new Mn,At=new re,rt=new mn,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function $e(){return W===null?we:1}let q=s;function Nt(x,O){return i.getContext(x,O)}try{const x={alpha:!0,depth:l,stencil:c,antialias:m,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:b};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Xh}`),i.addEventListener("webglcontextlost",Ae,!1),i.addEventListener("webglcontextrestored",We,!1),i.addEventListener("webglcontextcreationerror",at,!1),q===null){const O="webgl2";if(q=Nt(O,x),q===null)throw Nt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw Ut("WebGLRenderer: "+x.message),x}let ut,zt,Ue,Zt,U,T,ie,_e,Te,Le,Ne,pe,me,Pe,Fe,Oe,ze,nt,it,pt,Y,Re,xe;function Be(){ut=new mT(q),ut.init(),Y=new r2(q,ut),zt=new oT(q,ut,t,Y),Ue=new a2(q,ut),zt.reversedDepthBuffer&&v&&Ue.buffers.depth.setReversed(!0),Zt=new vT(q),U=new jA,T=new s2(q,ut,Ue,U,zt,Y,Zt),ie=new pT(Q),_e=new S1(q),Re=new sT(q,_e),Te=new gT(q,_e,Zt,Re),Le=new bT(q,Te,_e,Re,Zt),nt=new _T(q,zt,T),Fe=new lT(U),Ne=new VA(Q,ie,ut,zt,Re,Fe),pe=new d2(Q,U),me=new WA,Pe=new JA(ut),ze=new aT(Q,ie,Ue,Le,A,g),Oe=new i2(Q,Le,zt),xe=new h2(q,Zt,zt,Ue),it=new rT(q,ut,Zt),pt=new xT(q,ut,Zt),Zt.programs=Ne.programs,Q.capabilities=zt,Q.extensions=ut,Q.properties=U,Q.renderLists=me,Q.shadowMap=Oe,Q.state=Ue,Q.info=Zt}Be(),D!==wi&&(F=new ST(D,i.width,i.height,l,c));const De=new u2(Q,q);this.xr=De,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const x=ut.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ut.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(x){x!==void 0&&(we=x,this.setSize(fe,Ee,!1))},this.getSize=function(x){return x.set(fe,Ee)},this.setSize=function(x,O,k=!0){if(De.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=x,Ee=O,i.width=Math.floor(x*we),i.height=Math.floor(O*we),k===!0&&(i.style.width=x+"px",i.style.height=O+"px"),F!==null&&F.setSize(i.width,i.height),this.setViewport(0,0,x,O)},this.getDrawingBufferSize=function(x){return x.set(fe*we,Ee*we).floor()},this.setDrawingBufferSize=function(x,O,k){fe=x,Ee=O,we=k,i.width=Math.floor(x*k),i.height=Math.floor(O*k),this.setViewport(0,0,x,O)},this.setEffects=function(x){if(D===wi){Ut("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let O=0;O<x.length;O++)if(x[O].isOutputPass===!0){ct("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(le)},this.getViewport=function(x){return x.copy(Me)},this.setViewport=function(x,O,k,J){x.isVector4?Me.set(x.x,x.y,x.z,x.w):Me.set(x,O,k,J),Ue.viewport(le.copy(Me).multiplyScalar(we).round())},this.getScissor=function(x){return x.copy(He)},this.setScissor=function(x,O,k,J){x.isVector4?He.set(x.x,x.y,x.z,x.w):He.set(x,O,k,J),Ue.scissor(ge.copy(He).multiplyScalar(we).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(x){Ue.setScissorTest(Qe=x)},this.setOpaqueSort=function(x){ee=x},this.setTransparentSort=function(x){Se=x},this.getClearColor=function(x){return x.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(x=!0,O=!0,k=!0){let J=0;if(x){let ne=!1;if(W!==null){const Ie=W.texture.format;ne=M.has(Ie)}if(ne){const Ie=W.texture.type,Ve=y.has(Ie),$=ze.getClearColor(),Ce=ze.getClearAlpha(),Ge=$.r,Je=$.g,mt=$.b;Ve?(N[0]=Ge,N[1]=Je,N[2]=mt,N[3]=Ce,q.clearBufferuiv(q.COLOR,0,N)):(I[0]=Ge,I[1]=Je,I[2]=mt,I[3]=Ce,q.clearBufferiv(q.COLOR,0,I))}else J|=q.COLOR_BUFFER_BIT}O&&(J|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(J|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&q.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),K=x},this.dispose=function(){i.removeEventListener("webglcontextlost",Ae,!1),i.removeEventListener("webglcontextrestored",We,!1),i.removeEventListener("webglcontextcreationerror",at,!1),ze.dispose(),me.dispose(),Pe.dispose(),U.dispose(),ie.dispose(),Le.dispose(),Re.dispose(),xe.dispose(),Ne.dispose(),De.dispose(),De.removeEventListener("sessionstart",za),De.removeEventListener("sessionend",Oa),Gt.stop()};function Ae(x){x.preventDefault(),px("WebGLRenderer: Context Lost."),G=!0}function We(){px("WebGLRenderer: Context Restored."),G=!1;const x=Zt.autoReset,O=Oe.enabled,k=Oe.autoUpdate,J=Oe.needsUpdate,ne=Oe.type;Be(),Zt.autoReset=x,Oe.enabled=O,Oe.autoUpdate=k,Oe.needsUpdate=J,Oe.type=ne}function at(x){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function $t(x){const O=x.target;O.removeEventListener("dispose",$t),Dt(O)}function Dt(x){Ze(x),U.remove(x)}function Ze(x){const O=U.get(x).programs;O!==void 0&&(O.forEach(function(k){Ne.releaseProgram(k)}),x.isShaderMaterial&&Ne.releaseShaderCache(x))}this.renderBufferDirect=function(x,O,k,J,ne,Ie){O===null&&(O=dt);const Ve=ne.isMesh&&ne.matrixWorld.determinant()<0,$=Xi(x,O,k,J,ne);Ue.setMaterial(J,Ve);let Ce=k.index,Ge=1;if(J.wireframe===!0){if(Ce=Te.getWireframeAttribute(k),Ce===void 0)return;Ge=2}const Je=k.drawRange,mt=k.attributes.position;let et=Je.start*Ge,Ot=(Je.start+Je.count)*Ge;Ie!==null&&(et=Math.max(et,Ie.start*Ge),Ot=Math.min(Ot,(Ie.start+Ie.count)*Ge)),Ce!==null?(et=Math.max(et,0),Ot=Math.min(Ot,Ce.count)):mt!=null&&(et=Math.max(et,0),Ot=Math.min(Ot,mt.count));const sn=Ot-et;if(sn<0||sn===1/0)return;Re.setup(ne,J,$,k,Ce);let en,kt=it;if(Ce!==null&&(en=_e.get(Ce),kt=pt,kt.setIndex(en)),ne.isMesh)J.wireframe===!0?(Ue.setLineWidth(J.wireframeLinewidth*$e()),kt.setMode(q.LINES)):kt.setMode(q.TRIANGLES);else if(ne.isLine){let Vt=J.linewidth;Vt===void 0&&(Vt=1),Ue.setLineWidth(Vt*$e()),ne.isLineSegments?kt.setMode(q.LINES):ne.isLineLoop?kt.setMode(q.LINE_LOOP):kt.setMode(q.LINE_STRIP)}else ne.isPoints?kt.setMode(q.POINTS):ne.isSprite&&kt.setMode(q.TRIANGLES);if(ne.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))kt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Vt=ne._multiDrawStarts,Xe=ne._multiDrawCounts,In=ne._multiDrawCount,yt=Ce?_e.get(Ce).bytesPerElement:1,En=U.get(J).currentProgram.getUniforms();for(let ii=0;ii<In;ii++)En.setValue(q,"_gl_DrawID",ii),kt.render(Vt[ii]/yt,Xe[ii])}else if(ne.isInstancedMesh)kt.renderInstances(et,sn,ne.count);else if(k.isInstancedBufferGeometry){const Vt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Xe=Math.min(k.instanceCount,Vt);kt.renderInstances(et,sn,Xe)}else kt.render(et,sn)};function Dn(x,O,k){x.transparent===!0&&x.side===Ai&&x.forceSinglePass===!1?(x.side=ei,x.needsUpdate=!0,sa(x,O,k),x.side=ps,x.needsUpdate=!0,sa(x,O,k),x.side=Ai):sa(x,O,k)}this.compile=function(x,O,k=null){k===null&&(k=x),P=Pe.get(k),P.init(O),w.push(P),k.traverseVisible(function(ne){ne.isLight&&ne.layers.test(O.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),x!==k&&x.traverseVisible(function(ne){ne.isLight&&ne.layers.test(O.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),P.setupLights();const J=new Set;return x.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ie=ne.material;if(Ie)if(Array.isArray(Ie))for(let Ve=0;Ve<Ie.length;Ve++){const $=Ie[Ve];Dn($,k,ne),J.add($)}else Dn(Ie,k,ne),J.add(Ie)}),P=w.pop(),J},this.compileAsync=function(x,O,k=null){const J=this.compile(x,O,k);return new Promise(ne=>{function Ie(){if(J.forEach(function(Ve){U.get(Ve).currentProgram.isReady()&&J.delete(Ve)}),J.size===0){ne(x);return}setTimeout(Ie,10)}ut.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Vi=null;function ms(x){Vi&&Vi(x)}function za(){Gt.stop()}function Oa(){Gt.start()}const Gt=new Fv;Gt.setAnimationLoop(ms),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(x){Vi=x,De.setAnimationLoop(x),x===null?Gt.stop():Gt.start()},De.addEventListener("sessionstart",za),De.addEventListener("sessionend",Oa),this.render=function(x,O){if(O!==void 0&&O.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;K!==null&&K.renderStart(x,O);const k=De.enabled===!0&&De.isPresenting===!0,J=F!==null&&(W===null||k)&&F.begin(Q,W);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(O),O=De.getCamera()),x.isScene===!0&&x.onBeforeRender(Q,x,O,W),P=Pe.get(x,w.length),P.init(O),P.state.textureUnits=T.getTextureUnits(),w.push(P),lt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ye.setFromProjectionMatrix(lt,ta,O.reversedDepth),ot=this.localClippingEnabled,ft=Fe.init(this.clippingPlanes,ot),X=me.get(x,B.length),X.init(),B.push(X),De.enabled===!0&&De.isPresenting===!0){const Ve=Q.xr.getDepthSensingMesh();Ve!==null&&ln(Ve,O,-1/0,Q.sortObjects)}ln(x,O,0,Q.sortObjects),X.finish(),Q.sortObjects===!0&&X.sort(ee,Se),ht=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,ht&&ze.addToRenderList(X,x),this.info.render.frame++,ft===!0&&Fe.beginShadows();const ne=P.state.shadowsArray;if(Oe.render(ne,x,O),ft===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&F.hasRenderPass())===!1){const Ve=X.opaque,$=X.transmissive;if(P.setupLights(),O.isArrayCamera){const Ce=O.cameras;if($.length>0)for(let Ge=0,Je=Ce.length;Ge<Je;Ge++){const mt=Ce[Ge];Ri(Ve,$,x,mt)}ht&&ze.render(x);for(let Ge=0,Je=Ce.length;Ge<Je;Ge++){const mt=Ce[Ge];gn(X,x,mt,mt.viewport)}}else $.length>0&&Ri(Ve,$,x,O),ht&&ze.render(x),gn(X,x,O)}W!==null&&he===0&&(T.updateMultisampleRenderTarget(W),T.updateRenderTargetMipmap(W)),J&&F.end(Q),x.isScene===!0&&x.onAfterRender(Q,x,O),Re.resetDefaultState(),z=-1,H=null,w.pop(),w.length>0?(P=w[w.length-1],T.setTextureUnits(P.state.textureUnits),ft===!0&&Fe.setGlobalState(Q.clippingPlanes,P.state.camera)):P=null,B.pop(),B.length>0?X=B[B.length-1]:X=null,K!==null&&K.renderEnd()};function ln(x,O,k,J){if(x.visible===!1)return;if(x.layers.test(O.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(O);else if(x.isLightProbeGrid)P.pushLightProbeGrid(x);else if(x.isLight)P.pushLight(x),x.castShadow&&P.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ye.intersectsSprite(x)){J&&rt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(lt);const Ve=Le.update(x),$=x.material;$.visible&&X.push(x,Ve,$,k,rt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ye.intersectsObject(x))){const Ve=Le.update(x),$=x.material;if(J&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),rt.copy(x.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),rt.copy(Ve.boundingSphere.center)),rt.applyMatrix4(x.matrixWorld).applyMatrix4(lt)),Array.isArray($)){const Ce=Ve.groups;for(let Ge=0,Je=Ce.length;Ge<Je;Ge++){const mt=Ce[Ge],et=$[mt.materialIndex];et&&et.visible&&X.push(x,Ve,et,k,rt.z,mt)}}else $.visible&&X.push(x,Ve,$,k,rt.z,null)}}const Ie=x.children;for(let Ve=0,$=Ie.length;Ve<$;Ve++)ln(Ie[Ve],O,k,J)}function gn(x,O,k,J){const{opaque:ne,transmissive:Ie,transparent:Ve}=x;P.setupLightsView(k),ft===!0&&Fe.setGlobalState(Q.clippingPlanes,k),J&&Ue.viewport(le.copy(J)),ne.length>0&&Xn(ne,O,k),Ie.length>0&&Xn(Ie,O,k),Ve.length>0&&Xn(Ve,O,k),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Ri(x,O,k,J){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[J.id]===void 0){const et=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[J.id]=new ia(1,1,{generateMipmaps:!0,type:et?Ua:wi,minFilter:ks,samples:Math.max(4,zt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ie=P.state.transmissionRenderTarget[J.id],Ve=J.viewport||le;Ie.setSize(Ve.z*Q.transmissionResolutionScale,Ve.w*Q.transmissionResolutionScale);const $=Q.getRenderTarget(),Ce=Q.getActiveCubeFace(),Ge=Q.getActiveMipmapLevel();Q.setRenderTarget(Ie),Q.getClearColor(C),j=Q.getClearAlpha(),j<1&&Q.setClearColor(16777215,.5),Q.clear(),ht&&ze.render(k);const Je=Q.toneMapping;Q.toneMapping=na;const mt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),P.setupLightsView(J),ft===!0&&Fe.setGlobalState(Q.clippingPlanes,J),Xn(x,k,J),T.updateMultisampleRenderTarget(Ie),T.updateRenderTargetMipmap(Ie),ut.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ot=0,sn=O.length;Ot<sn;Ot++){const en=O[Ot],{object:kt,geometry:Vt,material:Xe,group:In}=en;if(Xe.side===Ai&&kt.layers.test(J.layers)){const yt=Xe.side;Xe.side=ei,Xe.needsUpdate=!0,ji(kt,k,J,Vt,Xe,In),Xe.side=yt,Xe.needsUpdate=!0,et=!0}}et===!0&&(T.updateMultisampleRenderTarget(Ie),T.updateRenderTargetMipmap(Ie))}Q.setRenderTarget($,Ce,Ge),Q.setClearColor(C,j),mt!==void 0&&(J.viewport=mt),Q.toneMapping=Je}function Xn(x,O,k){const J=O.isScene===!0?O.overrideMaterial:null;for(let ne=0,Ie=x.length;ne<Ie;ne++){const Ve=x[ne],{object:$,geometry:Ce,group:Ge}=Ve;let Je=Ve.material;Je.allowOverride===!0&&J!==null&&(Je=J),$.layers.test(k.layers)&&ji($,O,k,Ce,Je,Ge)}}function ji(x,O,k,J,ne,Ie){x.onBeforeRender(Q,O,k,J,ne,Ie),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),ne.onBeforeRender(Q,O,k,J,x,Ie),ne.transparent===!0&&ne.side===Ai&&ne.forceSinglePass===!1?(ne.side=ei,ne.needsUpdate=!0,Q.renderBufferDirect(k,O,J,ne,x,Ie),ne.side=ps,ne.needsUpdate=!0,Q.renderBufferDirect(k,O,J,ne,x,Ie),ne.side=Ai):Q.renderBufferDirect(k,O,J,ne,x,Ie),x.onAfterRender(Q,O,k,J,ne,Ie)}function sa(x,O,k){O.isScene!==!0&&(O=dt);const J=U.get(x),ne=P.state.lights,Ie=P.state.shadowsArray,Ve=ne.state.version,$=Ne.getParameters(x,ne.state,Ie,O,k,P.state.lightProbeGridArray),Ce=Ne.getProgramCacheKey($);let Ge=J.programs;J.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?O.environment:null,J.fog=O.fog;const Je=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;J.envMap=ie.get(x.envMap||J.environment,Je),J.envMapRotation=J.environment!==null&&x.envMap===null?O.environmentRotation:x.envMapRotation,Ge===void 0&&(x.addEventListener("dispose",$t),Ge=new Map,J.programs=Ge);let mt=Ge.get(Ce);if(mt!==void 0){if(J.currentProgram===mt&&J.lightsStateVersion===Ve)return Ci(x,$),mt}else $.uniforms=Ne.getUniforms(x),K!==null&&x.isNodeMaterial&&K.build(x,k,$),x.onBeforeCompile($,Q),mt=Ne.acquireProgram($,Ce),Ge.set(Ce,mt),J.uniforms=$.uniforms;const et=J.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(et.clippingPlanes=Fe.uniform),Ci(x,$),J.needsLights=Ni(x),J.lightsStateVersion=Ve,J.needsLights&&(et.ambientLightColor.value=ne.state.ambient,et.lightProbe.value=ne.state.probe,et.directionalLights.value=ne.state.directional,et.directionalLightShadows.value=ne.state.directionalShadow,et.spotLights.value=ne.state.spot,et.spotLightShadows.value=ne.state.spotShadow,et.rectAreaLights.value=ne.state.rectArea,et.ltc_1.value=ne.state.rectAreaLTC1,et.ltc_2.value=ne.state.rectAreaLTC2,et.pointLights.value=ne.state.point,et.pointLightShadows.value=ne.state.pointShadow,et.hemisphereLights.value=ne.state.hemi,et.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,et.spotLightMatrix.value=ne.state.spotLightMatrix,et.spotLightMap.value=ne.state.spotLightMap,et.pointShadowMatrix.value=ne.state.pointShadowMatrix),J.lightProbeGrid=P.state.lightProbeGridArray.length>0,J.currentProgram=mt,J.uniformsList=null,mt}function gs(x){if(x.uniformsList===null){const O=x.currentProgram.getUniforms();x.uniformsList=Vc.seqWithValue(O.seq,x.uniforms)}return x.uniformsList}function Ci(x,O){const k=U.get(x);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.batchingColor=O.batchingColor,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function xs(x,O){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;L.setFromMatrixPosition(O.matrixWorld);for(let k=0,J=x.length;k<J;k++){const ne=x[k];if(ne.texture!==null&&ne.boundingBox.containsPoint(L))return ne}return null}function Xi(x,O,k,J,ne){O.isScene!==!0&&(O=dt),T.resetTextureUnits();const Ie=O.fog,Ve=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?O.environment:null,$=W===null?Q.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Rt.workingColorSpace,Ce=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Ge=ie.get(J.envMap||Ve,Ce),Je=J.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,mt=!!k.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),et=!!k.morphAttributes.position,Ot=!!k.morphAttributes.normal,sn=!!k.morphAttributes.color;let en=na;J.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(en=Q.toneMapping);const kt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Vt=kt!==void 0?kt.length:0,Xe=U.get(J),In=P.state.lights;if(ft===!0&&(ot===!0||x!==H)){const Ht=x===H&&J.id===z;Fe.setState(J,x,Ht)}let yt=!1;J.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==In.state.version||Xe.outputColorSpace!==$||ne.isBatchedMesh&&Xe.batching===!1||!ne.isBatchedMesh&&Xe.batching===!0||ne.isBatchedMesh&&Xe.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Xe.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Xe.instancing===!1||!ne.isInstancedMesh&&Xe.instancing===!0||ne.isSkinnedMesh&&Xe.skinning===!1||!ne.isSkinnedMesh&&Xe.skinning===!0||ne.isInstancedMesh&&Xe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Xe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Xe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Xe.instancingMorph===!1&&ne.morphTexture!==null||Xe.envMap!==Ge||J.fog===!0&&Xe.fog!==Ie||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Fe.numPlanes||Xe.numIntersection!==Fe.numIntersection)||Xe.vertexAlphas!==Je||Xe.vertexTangents!==mt||Xe.morphTargets!==et||Xe.morphNormals!==Ot||Xe.morphColors!==sn||Xe.toneMapping!==en||Xe.morphTargetsCount!==Vt||!!Xe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Xe.__version=J.version);let En=Xe.currentProgram;yt===!0&&(En=sa(J,O,ne),K&&J.isNodeMaterial&&K.onUpdateProgram(J,En,Xe));let ii=!1,Di=!1,ai=!1;const jt=En.getUniforms(),rn=Xe.uniforms;if(Ue.useProgram(En.program)&&(ii=!0,Di=!0,ai=!0),J.id!==z&&(z=J.id,Di=!0),Xe.needsLights){const Ht=xs(P.state.lightProbeGridArray,ne);Xe.lightProbeGrid!==Ht&&(Xe.lightProbeGrid=Ht,Di=!0)}if(ii||H!==x){Ue.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),jt.setValue(q,"projectionMatrix",x.projectionMatrix),jt.setValue(q,"viewMatrix",x.matrixWorldInverse);const Wi=jt.map.cameraPosition;Wi!==void 0&&Wi.setValue(q,At.setFromMatrixPosition(x.matrixWorld)),zt.logarithmicDepthBuffer&&jt.setValue(q,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&jt.setValue(q,"isOrthographic",x.isOrthographicCamera===!0),H!==x&&(H=x,Di=!0,ai=!0)}if(Xe.needsLights&&(In.state.directionalShadowMap.length>0&&jt.setValue(q,"directionalShadowMap",In.state.directionalShadowMap,T),In.state.spotShadowMap.length>0&&jt.setValue(q,"spotShadowMap",In.state.spotShadowMap,T),In.state.pointShadowMap.length>0&&jt.setValue(q,"pointShadowMap",In.state.pointShadowMap,T)),ne.isSkinnedMesh){jt.setOptional(q,ne,"bindMatrix"),jt.setOptional(q,ne,"bindMatrixInverse");const Ht=ne.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),jt.setValue(q,"boneTexture",Ht.boneTexture,T))}ne.isBatchedMesh&&(jt.setOptional(q,ne,"batchingTexture"),jt.setValue(q,"batchingTexture",ne._matricesTexture,T),jt.setOptional(q,ne,"batchingIdTexture"),jt.setValue(q,"batchingIdTexture",ne._indirectTexture,T),jt.setOptional(q,ne,"batchingColorTexture"),ne._colorsTexture!==null&&jt.setValue(q,"batchingColorTexture",ne._colorsTexture,T));const Ui=k.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&nt.update(ne,k,En),(Di||Xe.receiveShadow!==ne.receiveShadow)&&(Xe.receiveShadow=ne.receiveShadow,jt.setValue(q,"receiveShadow",ne.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&O.environment!==null&&(rn.envMapIntensity.value=O.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=m2()),Di){if(jt.setValue(q,"toneMappingExposure",Q.toneMappingExposure),Xe.needsLights&&ra(rn,ai),Ie&&J.fog===!0&&pe.refreshFogUniforms(rn,Ie),pe.refreshMaterialUniforms(rn,J,we,Ee,P.state.transmissionRenderTarget[x.id]),Xe.needsLights&&Xe.lightProbeGrid){const Ht=Xe.lightProbeGrid;rn.probesSH.value=Ht.texture,rn.probesMin.value.copy(Ht.boundingBox.min),rn.probesMax.value.copy(Ht.boundingBox.max),rn.probesResolution.value.copy(Ht.resolution)}Vc.upload(q,gs(Xe),rn,T)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Vc.upload(q,gs(Xe),rn,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&jt.setValue(q,"center",ne.center),jt.setValue(q,"modelViewMatrix",ne.modelViewMatrix),jt.setValue(q,"normalMatrix",ne.normalMatrix),jt.setValue(q,"modelMatrix",ne.matrixWorld),J.uniformsGroups!==void 0){const Ht=J.uniformsGroups;for(let Wi=0,Pa=Ht.length;Wi<Pa;Wi++){const vs=Ht[Wi];xe.update(vs,En),xe.bind(vs,En)}}return En}function ra(x,O){x.ambientLightColor.needsUpdate=O,x.lightProbe.needsUpdate=O,x.directionalLights.needsUpdate=O,x.directionalLightShadows.needsUpdate=O,x.pointLights.needsUpdate=O,x.pointLightShadows.needsUpdate=O,x.spotLights.needsUpdate=O,x.spotLightShadows.needsUpdate=O,x.rectAreaLights.needsUpdate=O,x.hemisphereLights.needsUpdate=O}function Ni(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return he},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(x,O,k){const J=U.get(x);J.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),U.get(x.texture).__webglTexture=O,U.get(x.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:k,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,O){const k=U.get(x);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0};const pi=q.createFramebuffer();this.setRenderTarget=function(x,O=0,k=0){W=x,ue=O,he=k;let J=null,ne=!1,Ie=!1;if(x){const $=U.get(x);if($.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(q.FRAMEBUFFER,$.__webglFramebuffer),le.copy(x.viewport),ge.copy(x.scissor),ae=x.scissorTest,Ue.viewport(le),Ue.scissor(ge),Ue.setScissorTest(ae),z=-1;return}else if($.__webglFramebuffer===void 0)T.setupRenderTarget(x);else if($.__hasExternalTextures)T.rebindTextures(x,U.get(x.texture).__webglTexture,U.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Je=x.depthTexture;if($.__boundDepthTexture!==Je){if(Je!==null&&U.has(Je)&&(x.width!==Je.image.width||x.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(x)}}const Ce=x.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Ie=!0);const Ge=U.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?J=Ge[O][k]:J=Ge[O],ne=!0):x.samples>0&&T.useMultisampledRTT(x)===!1?J=U.get(x).__webglMultisampledFramebuffer:Array.isArray(Ge)?J=Ge[k]:J=Ge,le.copy(x.viewport),ge.copy(x.scissor),ae=x.scissorTest}else le.copy(Me).multiplyScalar(we).floor(),ge.copy(He).multiplyScalar(we).floor(),ae=Qe;if(k!==0&&(J=pi),Ue.bindFramebuffer(q.FRAMEBUFFER,J)&&Ue.drawBuffers(x,J),Ue.viewport(le),Ue.scissor(ge),Ue.setScissorTest(ae),ne){const $=U.get(x.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+O,$.__webglTexture,k)}else if(Ie){const $=O;for(let Ce=0;Ce<x.textures.length;Ce++){const Ge=U.get(x.textures[Ce]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ce,Ge.__webglTexture,k,$)}}else if(x!==null&&k!==0){const $=U.get(x.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,$.__webglTexture,k)}z=-1},this.readRenderTargetPixels=function(x,O,k,J,ne,Ie,Ve,$=0){if(!(x&&x.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=U.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ce=Ce[Ve]),Ce){Ue.bindFramebuffer(q.FRAMEBUFFER,Ce);try{const Ge=x.textures[$],Je=Ge.format,mt=Ge.type;if(x.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+$),!zt.textureFormatReadable(Je)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(mt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=x.width-J&&k>=0&&k<=x.height-ne&&q.readPixels(O,k,J,ne,Y.convert(Je),Y.convert(mt),Ie)}finally{const Ge=W!==null?U.get(W).__webglFramebuffer:null;Ue.bindFramebuffer(q.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(x,O,k,J,ne,Ie,Ve,$=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=U.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ce=Ce[Ve]),Ce)if(O>=0&&O<=x.width-J&&k>=0&&k<=x.height-ne){Ue.bindFramebuffer(q.FRAMEBUFFER,Ce);const Ge=x.textures[$],Je=Ge.format,mt=Ge.type;if(x.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+$),!zt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,et),q.bufferData(q.PIXEL_PACK_BUFFER,Ie.byteLength,q.STREAM_READ),q.readPixels(O,k,J,ne,Y.convert(Je),Y.convert(mt),0);const Ot=W!==null?U.get(W).__webglFramebuffer:null;Ue.bindFramebuffer(q.FRAMEBUFFER,Ot);const sn=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await FS(q,sn,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,et),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ie),q.deleteBuffer(et),q.deleteSync(sn),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,O=null,k=0){const J=Math.pow(2,-k),ne=Math.floor(x.image.width*J),Ie=Math.floor(x.image.height*J),Ve=O!==null?O.x:0,$=O!==null?O.y:0;T.setTexture2D(x,0),q.copyTexSubImage2D(q.TEXTURE_2D,k,0,0,Ve,$,ne,Ie),Ue.unbindTexture()};const dn=q.createFramebuffer(),xn=q.createFramebuffer();this.copyTextureToTexture=function(x,O,k=null,J=null,ne=0,Ie=0){let Ve,$,Ce,Ge,Je,mt,et,Ot,sn;const en=x.isCompressedTexture?x.mipmaps[Ie]:x.image;if(k!==null)Ve=k.max.x-k.min.x,$=k.max.y-k.min.y,Ce=k.isBox3?k.max.z-k.min.z:1,Ge=k.min.x,Je=k.min.y,mt=k.isBox3?k.min.z:0;else{const rn=Math.pow(2,-ne);Ve=Math.floor(en.width*rn),$=Math.floor(en.height*rn),x.isDataArrayTexture?Ce=en.depth:x.isData3DTexture?Ce=Math.floor(en.depth*rn):Ce=1,Ge=0,Je=0,mt=0}J!==null?(et=J.x,Ot=J.y,sn=J.z):(et=0,Ot=0,sn=0);const kt=Y.convert(O.format),Vt=Y.convert(O.type);let Xe;O.isData3DTexture?(T.setTexture3D(O,0),Xe=q.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),Xe=q.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),Xe=q.TEXTURE_2D),Ue.activeTexture(q.TEXTURE0),Ue.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,O.flipY),Ue.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Ue.pixelStorei(q.UNPACK_ALIGNMENT,O.unpackAlignment);const In=Ue.getParameter(q.UNPACK_ROW_LENGTH),yt=Ue.getParameter(q.UNPACK_IMAGE_HEIGHT),En=Ue.getParameter(q.UNPACK_SKIP_PIXELS),ii=Ue.getParameter(q.UNPACK_SKIP_ROWS),Di=Ue.getParameter(q.UNPACK_SKIP_IMAGES);Ue.pixelStorei(q.UNPACK_ROW_LENGTH,en.width),Ue.pixelStorei(q.UNPACK_IMAGE_HEIGHT,en.height),Ue.pixelStorei(q.UNPACK_SKIP_PIXELS,Ge),Ue.pixelStorei(q.UNPACK_SKIP_ROWS,Je),Ue.pixelStorei(q.UNPACK_SKIP_IMAGES,mt);const ai=x.isDataArrayTexture||x.isData3DTexture,jt=O.isDataArrayTexture||O.isData3DTexture;if(x.isDepthTexture){const rn=U.get(x),Ui=U.get(O),Ht=U.get(rn.__renderTarget),Wi=U.get(Ui.__renderTarget);Ue.bindFramebuffer(q.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Ue.bindFramebuffer(q.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Pa=0;Pa<Ce;Pa++)ai&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,U.get(x).__webglTexture,ne,mt+Pa),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,U.get(O).__webglTexture,Ie,sn+Pa)),q.blitFramebuffer(Ge,Je,Ve,$,et,Ot,Ve,$,q.DEPTH_BUFFER_BIT,q.NEAREST);Ue.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ne!==0||x.isRenderTargetTexture||U.has(x)){const rn=U.get(x),Ui=U.get(O);Ue.bindFramebuffer(q.READ_FRAMEBUFFER,dn),Ue.bindFramebuffer(q.DRAW_FRAMEBUFFER,xn);for(let Ht=0;Ht<Ce;Ht++)ai?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,rn.__webglTexture,ne,mt+Ht):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,rn.__webglTexture,ne),jt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ui.__webglTexture,Ie,sn+Ht):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ui.__webglTexture,Ie),ne!==0?q.blitFramebuffer(Ge,Je,Ve,$,et,Ot,Ve,$,q.COLOR_BUFFER_BIT,q.NEAREST):jt?q.copyTexSubImage3D(Xe,Ie,et,Ot,sn+Ht,Ge,Je,Ve,$):q.copyTexSubImage2D(Xe,Ie,et,Ot,Ge,Je,Ve,$);Ue.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else jt?x.isDataTexture||x.isData3DTexture?q.texSubImage3D(Xe,Ie,et,Ot,sn,Ve,$,Ce,kt,Vt,en.data):O.isCompressedArrayTexture?q.compressedTexSubImage3D(Xe,Ie,et,Ot,sn,Ve,$,Ce,kt,en.data):q.texSubImage3D(Xe,Ie,et,Ot,sn,Ve,$,Ce,kt,Vt,en):x.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ie,et,Ot,Ve,$,kt,Vt,en.data):x.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ie,et,Ot,en.width,en.height,kt,en.data):q.texSubImage2D(q.TEXTURE_2D,Ie,et,Ot,Ve,$,kt,Vt,en);Ue.pixelStorei(q.UNPACK_ROW_LENGTH,In),Ue.pixelStorei(q.UNPACK_IMAGE_HEIGHT,yt),Ue.pixelStorei(q.UNPACK_SKIP_PIXELS,En),Ue.pixelStorei(q.UNPACK_SKIP_ROWS,ii),Ue.pixelStorei(q.UNPACK_SKIP_IMAGES,Di),Ie===0&&O.generateMipmaps&&q.generateMipmap(Xe),Ue.unbindTexture()},this.initRenderTarget=function(x){U.get(x).__webglFramebuffer===void 0&&T.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?T.setTextureCube(x,0):x.isData3DTexture?T.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?T.setTexture2DArray(x,0):T.setTexture2D(x,0),Ue.unbindTexture()},this.resetState=function(){ue=0,he=0,W=null,Ue.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Rt._getUnpackColorSpace()}}function x2({isWarping:o,theme:t="dark"}){const i=je.useRef(null),s=je.useRef(null);return je.useEffect(()=>{const l=i.current,c=s.current;if(!l||!c)return;let d=6514417,m=440020,g=16777215;t==="cyberpunk"?(d=16711765,m=65484,g=16776960):t==="ai"?(d=9133302,m=6514417,g=3718648):t==="terminal"?(d=2278750,m=1483594,g=8843180):t==="light"&&(d=5195493,m=440020,g=5195493);const p=new e1;p.fog=new tp(131848,.015);const S=l.clientWidth/l.clientHeight,b=new Ti(75,S,.1,1e3);b.position.set(0,0,10);const v=new g2({canvas:c,antialias:!0,alpha:!0,powerPreference:"high-performance"});v.setSize(l.clientWidth,l.clientHeight),v.setPixelRatio(Math.min(window.devicePixelRatio,2));const E=120,A=100,D=8,M=new Ko(D,D,E,32,A,!0);M.rotateX(Math.PI/2);const y=new Gr({color:d,wireframe:!0,transparent:!0,opacity:.14,side:Ai}),N=new $n(M,y);p.add(N);const I=new ki({vertexShader:`
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

          float finalAlpha = intensity * (0.12 + uWarpProgress * 0.68) * depthFade;
          finalAlpha = clamp(finalAlpha, 0.0, 1.0);

          gl_FragColor = vec4(finalColor, finalAlpha);
        }
      `,uniforms:{uTime:{value:0},uWarpProgress:{value:0},uPrimaryColor:{value:new Ft(d)},uSecondaryColor:{value:new Ft(m)}},transparent:!0,side:Ai,blending:jc,depthWrite:!1}),L=new Ko(D-.1,D-.1,E,48,A,!0);L.rotateX(Math.PI/2);const X=new $n(L,I);p.add(X);const P=new Ko(D+1.2,D+1.2,E,12,35,!0);P.rotateX(Math.PI/2);const B=new Gr({color:m,wireframe:!0,transparent:!0,opacity:.09,side:Ai}),w=new $n(P,B);p.add(w);const F=15,Q=[],G=new ip(D+.3,.08,8,48);for(let dt=0;dt<F;dt++){const ht=new Gr({color:dt%2===0?d:m,transparent:!0,opacity:.65}),$e=new $n(G,ht);$e.position.z=dt/F*E-E/2,p.add($e),Q.push($e)}const K=750,ue=new Float32Array(K*3),he=[],W=[],z=[],H=new Float32Array(K*3);for(let dt=0;dt<K;dt++){const ht=Math.random()*(D-.4)+.2,$e=Math.random()*Math.PI*2,q=(Math.random()-.5)*E,Nt=Math.cos($e)*ht,ut=Math.sin($e)*ht;ue[dt*3]=Nt,ue[dt*3+1]=ut,ue[dt*3+2]=q,H[dt*3]=Nt,H[dt*3+1]=ut,H[dt*3+2]=q,he.push(Math.random()*.4+.1),W.push($e),z.push(ht)}const le=new ni;le.setAttribute("position",new Gi(ue,3));const ge=new Uv({color:g,size:.12,transparent:!0,opacity:.85,blending:jc,sizeAttenuation:!0}),ae=new u1(le,ge);p.add(ae);const C=new np(1.5,32,32),j=new Gr({color:16777215,transparent:!0,opacity:0}),fe=new $n(C,j);fe.position.set(0,0,-45),p.add(fe);let Ee=0,we=0,ee=0,Se=0;const Me=dt=>{Ee=(dt.clientX-window.innerWidth/2)/110,we=(dt.clientY-window.innerHeight/2)/110};window.addEventListener("mousemove",Me);const He=()=>{if(!l||!c)return;const dt=l.clientWidth,ht=l.clientHeight;b.aspect=dt/ht,b.updateProjectionMatrix(),v.setSize(dt,ht)},Qe=new ResizeObserver(()=>{He()});Qe.observe(l);let Ye=.25,ft=.0015,ot=0,lt=0,At;const rt=()=>{lt+=o?.024:.012,o?(ot=Math.min(1,ot+.018),Ye=Math.min(4.8,Ye+.15),ft=Math.min(.06,ft+.0018),b.fov=Math.min(136,b.fov+1.2),b.updateProjectionMatrix(),j.opacity=Math.min(1,j.opacity+.045),fe.scale.addScalar(.4)):(ot=Math.max(0,ot-.03),Ye=Math.max(.25,Ye-.05),ft=Math.max(.0015,ft-.001),b.fov=Math.max(75,b.fov-1.5),b.updateProjectionMatrix(),j.opacity=Math.max(0,j.opacity-.05),fe.scale.x>1&&fe.scale.set(1,1,1)),I.uniforms.uWarpProgress.value=ot,I.uniforms.uTime.value=lt,N.rotation.z+=ft,w.rotation.z-=ft*.7,X.rotation.z+=ft*.4;const dt=Date.now()*.002;Q.forEach(($e,q)=>{$e.position.z,$e.position.z+=Ye,$e.position.z>15&&($e.position.z=-55);const Nt=1+Math.sin(dt+q)*.03+(o?.08:0);$e.scale.set(Nt,Nt,1)}),ee+=(Ee-ee)*.06,Se+=(we-Se)*.06,b.position.x=ee,b.position.y=-Se,b.lookAt(0,0,-50);const ht=le.attributes.position.array;for(let $e=0;$e<K;$e++){const q=$e*3;W[$e]+=ft*($e%2===0?1:-1)*.7,ht[q]=Math.cos(W[$e])*z[$e],ht[q+1]=Math.sin(W[$e])*z[$e];const Nt=he[$e]*(o?14.5:1)+Ye;ht[q+2]+=Nt,ht[q+2]>12&&(ht[q+2]=-55,ht[q]=Math.cos(W[$e])*z[$e],ht[q+1]=Math.sin(W[$e])*z[$e])}o?ge.size=Math.min(.42,ge.size+.015):ge.size=Math.max(.12,ge.size-.01),le.attributes.position.needsUpdate=!0,v.render(p,b),At=requestAnimationFrame(rt)};return rt(),()=>{cancelAnimationFrame(At),window.removeEventListener("mousemove",Me),Qe.disconnect(),v.dispose(),M.dispose(),y.dispose(),L.dispose(),I.dispose(),P.dispose(),B.dispose(),G.dispose(),le.dispose(),ge.dispose(),C.dispose(),j.dispose()}},[o,t]),h.jsx("div",{ref:i,className:"absolute inset-0 w-full h-full pointer-events-none -z-10 bg-[#020308] overflow-hidden",children:h.jsx("canvas",{ref:s,className:"w-full h-full block",style:{filter:o?"contrast(1.15) brightness(1.1)":"none"}})})}function v2({theme:o,triggerSound:t}){const i=je.useRef(null),s=je.useRef(null),[l,c]=je.useState(!1),[d,m]=je.useState("#6366f1"),[g,p]=je.useState(4),[S,b]=je.useState(!1),[v,E]=je.useState("theme"),[A,D]=je.useState([]),[M,y]=je.useState([]),[N,I]=je.useState([]),[L,X]=je.useState({width:600,height:400}),w=v==="theme"?(()=>{switch(o){case"cyberpunk":return[{name:"Neon Pink",value:"#ff007f"},{name:"Matrix Green",value:"#39ff14"},{name:"Neon Blue",value:"#00ffff"},{name:"Cyber Purple",value:"#9d00ff"},{name:"Hot Orange",value:"#ff5e00"},{name:"Pure White",value:"#ffffff"}];case"terminal":return[{name:"Classic Green",value:"#33ff33"},{name:"Amber Glow",value:"#ffb000"},{name:"Terminal White",value:"#e5e5e5"},{name:"Phosphor Green",value:"#00ff66"},{name:"Dim Gray",value:"#7f7f7f"}];case"ai":return[{name:"Deep Cosmic",value:"#4f46e5"},{name:"Quantum Cyan",value:"#06b6d4"},{name:"Neural Violet",value:"#d946ef"},{name:"Supernova",value:"#f43f5e"},{name:"Logic White",value:"#fafafa"}];case"light":return[{name:"Royal Blue",value:"#2563eb"},{name:"Rose Red",value:"#dc2626"},{name:"Forest Green",value:"#16a34a"},{name:"Vibrant Orange",value:"#ea580c"},{name:"Slate Gray",value:"#475569"},{name:"Deep Charcoal",value:"#0f172a"}];default:return[{name:"Indigo Aura",value:"#818cf8"},{name:"Nebula Pink",value:"#f472b6"},{name:"Aurora Teal",value:"#2dd4bf"},{name:"Solar Yellow",value:"#fbbf24"},{name:"Coral Rose",value:"#fb7185"},{name:"Pure White",value:"#ffffff"}]}})():[{name:"Pure Black",value:"#000000"},{name:"Crimson Red",value:"#ef4444"},{name:"Cobalt Blue",value:"#3b82f6"},{name:"Emerald Green",value:"#22c55e"},{name:"Amber Yellow",value:"#eab308"},{name:"Pure White",value:"#ffffff"}];je.useEffect(()=>{m(w[0].value),b(!1)},[o,v]),je.useEffect(()=>{const ae=i.current;if(!ae)return;const C=new ResizeObserver(j=>{if(!j||j.length===0)return;const{width:fe,height:Ee}=j[0].contentRect,we=Math.floor(fe||600),ee=Math.floor(Ee||400);X({width:we,height:ee})});return C.observe(ae),()=>{C.disconnect()}},[]),je.useEffect(()=>{const ae=s.current;ae&&(ae.width=L.width,ae.height=L.height,F())},[L,A,N]);const F=()=>{const ae=s.current;if(!ae)return;const C=ae.getContext("2d");if(!C)return;C.clearRect(0,0,ae.width,ae.height),C.lineCap="round",C.lineJoin="round";const j=fe=>{if(!(fe.points.length<1))if(C.beginPath(),fe.isEraser?C.globalCompositeOperation="destination-out":(C.globalCompositeOperation="source-over",C.strokeStyle=fe.color),C.lineWidth=fe.width,fe.points.length===1){const Ee=fe.points[0];C.arc(Ee.x,Ee.y,fe.width/2,0,2*Math.PI),C.fillStyle=fe.isEraser?"rgba(0,0,0,1)":fe.color,C.fill()}else{const Ee=fe.points[0];C.moveTo(Ee.x,Ee.y);for(let we=1;we<fe.points.length;we++){const ee=fe.points[we];C.lineTo(ee.x,ee.y)}C.stroke()}};A.forEach(fe=>{j(fe)}),N.length>0&&j({points:N,color:d,width:g,isEraser:S}),C.globalCompositeOperation="source-over"},Q=ae=>{const C=s.current;if(!C)return null;const j=C.getBoundingClientRect();let fe=0,Ee=0;if("touches"in ae){if(ae.touches.length===0)return null;fe=ae.touches[0].clientX,Ee=ae.touches[0].clientY}else fe=ae.clientX,Ee=ae.clientY;return{x:(fe-j.left)/j.width*C.width,y:(Ee-j.top)/j.height*C.height}},G=ae=>{ae.preventDefault();const C=Q(ae);C&&(c(!0),I([C]),y([]),t&&t(700,.015))},K=ae=>{if(!l)return;ae.preventDefault();const C=Q(ae);C&&I(j=>[...j,C])},ue=()=>{if(l){if(c(!1),N.length>0){const ae={points:N,color:d,width:g,isEraser:S};D(C=>[...C,ae])}I([]),t&&t(850,.02)}},he=()=>{if(A.length===0)return;const ae=[...A],C=ae.pop();C&&(y(j=>[...j,C]),D(ae),t&&t(500,.03))},W=()=>{if(M.length===0)return;const ae=[...M],C=ae.pop();C&&(D(j=>[...j,C]),y(ae),t&&t(900,.03))},z=()=>{A.length!==0&&confirm("Clear the entire ideation sketch pad?")&&(D([]),y([]),I([]),t&&t(350,.07))},H=()=>{const ae=s.current;if(!ae)return;const C=document.createElement("canvas");C.width=ae.width,C.height=ae.height;const j=C.getContext("2d");if(!j)return;o==="light"?j.fillStyle="#f8fafc":o==="cyberpunk"?j.fillStyle="#010206":o==="terminal"?j.fillStyle="#050705":j.fillStyle="#090a12",j.fillRect(0,0,C.width,C.height),j.strokeStyle=o==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.03)",j.lineWidth=1;const fe=30;for(let ee=0;ee<C.width;ee+=fe)j.beginPath(),j.moveTo(ee,0),j.lineTo(ee,C.height),j.stroke();for(let ee=0;ee<C.height;ee+=fe)j.beginPath(),j.moveTo(0,ee),j.lineTo(C.width,ee),j.stroke();j.drawImage(ae,0,0),j.font="10px monospace",j.fillStyle=o==="light"?"rgba(15, 23, 42, 0.4)":"rgba(255, 255, 255, 0.3)",j.textAlign="right",j.fillText("FARHAN KABIR CORE OS v2.4 // VISUAL IDEATION UNIT",C.width-20,C.height-20);const Ee=C.toDataURL("image/png"),we=document.createElement("a");we.href=Ee,we.download=`FarhanOS_Whiteboard_${Date.now()}.png`,document.body.appendChild(we),we.click(),document.body.removeChild(we),t&&t(1100,.08)},le=o==="cyberpunk"?"border-[#ff007f]/40 text-pink-400 font-mono":o==="terminal"?"border-[#33ff33]/40 text-[#33ff33] font-mono":o==="ai"?"border-indigo-500/40 text-indigo-400 font-sans":o==="light"?"border-slate-300 text-slate-800 font-sans":"border-zinc-800 text-slate-200 font-sans",ge=ae=>{m(ae),b(!1),t&&t(900,.015)};return h.jsxs("div",{className:"flex flex-col h-full gap-3 select-none",children:[h.jsxs("div",{className:`p-2 rounded-lg border flex flex-wrap items-center justify-between gap-3 bg-black/35 backdrop-blur-md ${le}`,children:[h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("button",{onClick:he,disabled:A.length===0,className:`p-1.5 rounded transition-all duration-200 ${A.length===0?"opacity-30 cursor-not-allowed":"hover:bg-white/10 hover:scale-110 active:scale-90 text-zinc-350 hover:text-white"}`,title:"Undo stroke (Ctrl+Z)",children:h.jsx(Qy,{className:"w-4 h-4"})}),h.jsx("button",{onClick:W,disabled:M.length===0,className:`p-1.5 rounded transition-all duration-200 ${M.length===0?"opacity-30 cursor-not-allowed":"hover:bg-white/10 hover:scale-110 active:scale-90 text-zinc-350 hover:text-white"}`,title:"Redo stroke (Ctrl+Y)",children:h.jsx(ky,{className:"w-4 h-4"})}),h.jsx("span",{className:"h-4 w-px bg-zinc-850 mx-1"}),h.jsxs("button",{onClick:()=>{b(!1),t&&t(800,.01)},className:`p-1.5 rounded transition-all duration-200 flex items-center gap-1 ${S?"hover:bg-white/10 hover:scale-105 active:scale-95 text-zinc-400 hover:text-zinc-200":"bg-indigo-600/30 font-bold border border-indigo-500/35 text-indigo-300"}`,title:"Paint Brush Mode",children:[h.jsx($g,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"hidden sm:inline text-[9px] uppercase tracking-wider",children:"Paint"})]}),h.jsxs("button",{onClick:()=>{b(!0),t&&t(600,.01)},className:`p-1.5 rounded transition-all duration-200 flex items-center gap-1 ${S?"bg-indigo-600/30 font-bold border border-indigo-500/35 text-indigo-300":"hover:bg-white/10 hover:scale-105 active:scale-95 text-zinc-400 hover:text-zinc-200"}`,title:"Eraser tool",children:[h.jsx(Ey,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"hidden sm:inline text-[9px] uppercase tracking-wider",children:"Eraser"})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("div",{className:"flex items-center gap-1 bg-black/40 p-1 rounded-md border border-zinc-900/80 text-[9px] font-mono",children:[h.jsx("button",{onClick:()=>{E("theme"),t&&t(700,.012)},className:`px-1.5 py-0.5 rounded transition uppercase font-bold tracking-tight ${v==="theme"?"bg-indigo-600/30 text-indigo-300 border border-indigo-500/20":"text-zinc-500 hover:text-zinc-300"}`,title:"Switch to Theme-specific colors",children:"OS Aura"}),h.jsx("button",{onClick:()=>{E("classic"),t&&t(700,.012)},className:`px-1.5 py-0.5 rounded transition uppercase font-bold tracking-tight ${v==="classic"?"bg-indigo-600/30 text-indigo-300 border border-indigo-500/20":"text-zinc-500 hover:text-zinc-300"}`,title:"Switch to classic drawing colors (Black, Red, Blue, Green, etc.)",children:"Classic"})]}),h.jsxs("div",{className:"flex items-center gap-1 bg-black/40 px-2 py-1 rounded-md border border-zinc-900",children:[w.map(ae=>{const C=d===ae.value&&!S;return h.jsxs("button",{onClick:()=>ge(ae.value),className:"relative group w-4 h-4 rounded-full transition duration-300 border border-black/50",style:{backgroundColor:ae.value},title:`${ae.name}`,children:[C&&h.jsx("span",{className:"absolute inset-0 flex items-center justify-center scale-75 text-white filter drop-shadow",children:h.jsx(ov,{className:"w-3.5 h-3.5 text-white stroke-[3.5px]",style:{mixBlendMode:"difference"}})}),h.jsx("span",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-1.5 py-0.5 text-[8px] bg-zinc-950 text-white rounded opacity-0 pointer-events-none group-hover:opacity-100 transition whitespace-nowrap z-50",children:ae.name})]},ae.value)}),h.jsx("span",{className:"h-3 w-px bg-zinc-800 mx-1"}),h.jsxs("div",{className:"relative group w-4 h-4 rounded-full overflow-hidden border border-zinc-700/50 flex items-center justify-center bg-gradient-to-tr from-rose-500 via-emerald-500 to-sky-500 shadow-sm",title:"Choose custom color spectrum",children:[h.jsx("input",{type:"color",value:d,onChange:ae=>ge(ae.target.value),className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer"}),h.jsx("span",{className:"text-[10px] font-black text-white pointer-events-none filter drop-shadow-sm",children:"+"}),h.jsx("span",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-1.5 py-0.5 text-[8px] bg-zinc-950 text-white rounded opacity-0 pointer-events-none group-hover:opacity-100 transition whitespace-nowrap z-50",children:"Custom Color"})]})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("div",{className:"flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-md border border-zinc-900",children:[h.jsxs("span",{className:"text-[9px] text-zinc-500 font-mono select-none uppercase tracking-tight hidden xs:inline",children:["Width: ",g,"px"]}),h.jsx("input",{type:"range",min:"1",max:"40",value:g,onChange:ae=>{const C=parseInt(ae.target.value,10);p(C),t&&t(750+C*3,.005)},className:"w-16 sm:w-20 md:w-24 accent-indigo-500 bg-zinc-800 h-1 rounded-lg appearance-none cursor-pointer",title:"Slide to adjust brush thickness"})]}),h.jsx("div",{className:"flex items-center gap-1",children:[2,4,8,16].map(ae=>h.jsx("button",{onClick:()=>{p(ae),t&&t(750,.01)},className:`w-5 h-5 rounded flex items-center justify-center transition border ${g===ae?"bg-white/10 border-indigo-500/50 text-indigo-400":"border-transparent hover:bg-white/5 text-zinc-400"}`,title:`Brush size ${ae}px`,children:h.jsx("span",{className:"relative flex items-center justify-center",children:h.jsx("span",{className:"rounded-full bg-current",style:{width:`${Math.max(2,ae/1.5)}px`,height:`${Math.max(2,ae/1.5)}px`}})})},ae))}),h.jsx("span",{className:"h-4 w-px bg-zinc-850"}),h.jsx("button",{onClick:z,className:"p-1.5 rounded transition-all duration-200 hover:bg-rose-500/20 hover:scale-110 active:scale-90 text-rose-400 hover:text-rose-300",title:"Clear canvas",children:h.jsx(sx,{className:"w-3.5 h-3.5"})}),h.jsx("button",{onClick:H,className:"p-1.5 rounded transition-all duration-200 hover:bg-emerald-500/20 hover:scale-110 active:scale-90 text-emerald-400 hover:text-emerald-300",title:"Download visual sketch (.png)",children:h.jsx(Qd,{className:"w-3.5 h-3.5"})})]})]}),h.jsxs("div",{ref:i,className:`whiteboard-canvas-container flex-1 min-h-[280px] max-h-[50vh] rounded-lg border-2 border-dashed flex relative overflow-hidden bg-black/45 shadow-inner transition-colors duration-350 cursor-crosshair ${o==="cyberpunk"?"border-pink-500/25 shadow-pink-500/5 bg-[#000]":o==="terminal"?"border-[#33ff33]/25 shadow-emerald-500/5":"border-zinc-800/80 shadow-sky-500/5"}`,children:[h.jsxs("button",{onClick:z,disabled:A.length===0,className:`absolute top-3 right-3 z-30 flex items-center gap-1.5 px-3 py-1.5 text-[9px] uppercase tracking-wider font-bold rounded border shadow-lg transition-all duration-200 select-none ${A.length===0?"opacity-40 cursor-not-allowed bg-zinc-900/40 text-zinc-500 border-zinc-800/40":"hover:scale-105 active:scale-95 "+(o==="cyberpunk"?"bg-black/90 hover:bg-pink-500/20 text-pink-400 hover:text-pink-300 border-pink-500/30 hover:border-pink-500/50":o==="terminal"?"bg-black/90 hover:bg-[#33ff33]/20 text-[#33ff33] border-[#33ff33]/30 hover:border-[#33ff33]/50 font-mono":o==="light"?"bg-white/90 hover:bg-slate-100 text-slate-800 hover:text-slate-900 border-slate-200 hover:border-slate-300":"bg-zinc-950/90 hover:bg-indigo-500/20 text-indigo-400 hover:text-indigo-300 border-indigo-500/25 hover:border-indigo-500/45")}`,title:"Clear canvas to a blank state",children:[h.jsx(sx,{className:"w-3 h-3"}),h.jsx("span",{children:"Clear Board"})]}),h.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-screen overflow-hidden",children:h.jsx("div",{className:"w-full h-full",style:{backgroundImage:"linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",backgroundSize:"24px 24px",color:o==="terminal"?"#33ff33":o==="cyberpunk"?"#ff007f":"#6366f1"}})}),A.length===0&&!l&&h.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center p-4",children:[h.jsx("div",{className:"p-3 rounded-full bg-indigo-500/5 border border-indigo-500/10 mb-2",children:h.jsx($g,{className:"w-6 h-6 text-indigo-400/55 animate-pulse"})}),h.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest text-zinc-550",children:"Visual Ideation Pad"}),h.jsx("span",{className:"text-[9px] text-zinc-600 mt-1",children:"Press and drag anywhere on this sandbox grid canvas to sketch plans"})]}),h.jsx("canvas",{ref:s,onMouseDown:G,onMouseMove:K,onMouseUp:ue,onMouseLeave:ue,onTouchStart:G,onTouchMove:K,onTouchEnd:ue,className:"absolute inset-0 w-full h-full select-none touch-none bg-transparent"}),h.jsxs("div",{className:"absolute bottom-2 left-2 pointer-events-none flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/60 border border-zinc-900/50 text-[8px] font-mono text-zinc-500",children:[h.jsxs("span",{children:["COORDS: ",L.width,"x",L.height]}),h.jsx("span",{children:"•"}),h.jsxs("span",{children:["STROKESTACK: ",A.length]})]})]}),h.jsxs("div",{className:"flex items-center justify-between mt-auto",children:[h.jsxs("div",{className:"flex items-center gap-1 text-[9px] text-zinc-500 font-mono",children:[h.jsx(Hr,{className:"w-3 h-3 text-indigo-400"}),h.jsx("span",{children:"IDEATION UNIT DEPLOYED SECURELY WITHIN THE OPERATING SYSTEM ENVIRONMENT"})]}),h.jsx("div",{className:"text-[9px] font-mono text-zinc-500",children:"v2.4.6_canvas"})]})]})}const sv="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*-_+=[]{}<>/";function Br({text:o,speed:t=30,delay:i=0,className:s=""}){const[l,c]=je.useState("");return je.useEffect(()=>{let d,m,g=0;const p=()=>{m=setInterval(()=>{c(()=>o.split("").map((S,b)=>b<g?o[b]:S===" "?" ":sv[Math.floor(Math.random()*sv.length)]).join("")),g>=o.length&&(clearInterval(m),c(o)),g+=1/2},t)};return i>0?d=setTimeout(p,i):p(),()=>{clearTimeout(d),clearInterval(m)}},[o,t,i]),h.jsx("span",{className:s,children:l})}function _2(){const[o,t]=je.useState("landing"),[i,s]=je.useState(!1),[l,c]=je.useState(""),[d,m]=je.useState(""),[g,p]=je.useState(!1),[S,b]=je.useState(null),[v,E]=je.useState(!1),[A,D]=je.useState(0),[M,y]=je.useState([]),[N,I]=je.useState("dark"),[L,X]=je.useState(!0),[P,B]=je.useState(!0),[w,F]=je.useState(""),[Q,G]=je.useState(["twin"]),[K,ue]=je.useState([]),[he,W]=je.useState("twin"),[z,H]=je.useState({twin:{x:50,y:70,isMaximized:!1},projects:{x:120,y:140,isMaximized:!1},research:{x:180,y:90,isMaximized:!1},github:{x:220,y:160,isMaximized:!1},writing:{x:80,y:220,isMaximized:!1},garden:{x:260,y:40,isMaximized:!1},resume:{x:300,y:200,isMaximized:!1},timeline:{x:140,y:300,isMaximized:!1},skills:{x:400,y:80,isMaximized:!1},brief:{x:350,y:150,isMaximized:!1},builds:{x:200,y:350,isMaximized:!1},whiteboard:{x:240,y:110,isMaximized:!1}}),[le,ge]=je.useState(12);je.useEffect(()=>{const x=setInterval(()=>{ge(Math.floor(Math.random()*10)+7)},2500);return()=>clearInterval(x)},[]);const[ae,C]=je.useState(typeof window<"u"?window.innerWidth:1024);je.useEffect(()=>{const x=()=>{C(window.innerWidth)};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]);const j=()=>{const x=["dark","cyberpunk","ai","terminal","light"],O=(x.indexOf(N)+1)%x.length;I(x[O]),Ze(750,.03)},fe=x=>{t("os"),E(!0),Q.includes(x)||G([...Q,x]),W(x),Ze(900,.05)},Ee=x=>{Se(x),fe("projects")},we=x=>{Ye(x),fe("writing")},[ee,Se]=je.useState(fn.projects[0]),[Me,He]=je.useState(fn.papers[0]),[Qe,Ye]=je.useState(fn.articles[0]),[ft,ot]=je.useState(fn.timeline[0]),[lt,At]=je.useState("all"),[rt,dt]=je.useState("recruiter"),[ht,$e]=je.useState(!1),[q,Nt]=je.useState(""),[ut,zt]=je.useState(""),[Ue,Zt]=je.useState([{role:"assistant",content:"Systems fully operational. I am Farhan's certified neural clone. Feel free to enquire about my NLP predictive pipelines, clinical depression research, full-stack architectures, or project command maps."}]),[U,T]=je.useState(!1),[ie,_e]=je.useState(null),[Te,Le]=je.useState(null),[Ne,pe]=je.useState({projectType:"AI Engineering",budget:"$5,000 - $10,000",timeline:"1-3 Months",goals:"",comments:""}),[me,Pe]=je.useState(null),[Fe,Oe]=je.useState(!1),[ze,nt]=je.useState(!1),[it,pt]=je.useState(0),[Y,Re]=je.useState(""),[xe,Be]=je.useState(!1),[De,Ae]=je.useState(null),[We,at]=je.useState(null),[$t,Dt]=je.useState({x:0,y:0}),Ze=(x=800,O=.03)=>{L&&xd(x,O)};je.useEffect(()=>{const x=()=>{F(new Date().toLocaleString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}))};x();const O=setInterval(x,1e3);return()=>clearInterval(O)},[]),je.useEffect(()=>{if(!v){const x=["INIT: Booting FarhanOS Kernel v2.4.6...","SYS: Loading digital neural parameters...","SYS: Grounding publications corpus index...","NETWORK: Establishing proxy connection secure rails...","AI: Initializing Gemini bimodal model instances...","GRAPH: Parsing topological clinical coordinates...","SYS: Systems compiled. Ready for operational execution."];let O=0;const k=setInterval(()=>{D(J=>{if(J>=100)return clearInterval(k),setTimeout(()=>{E(!0),Ze(1e3,.15)},600),100;const ne=Math.floor(Math.random()*15)+5,Ie=Math.min(J+ne,100);return Ie>O*15&&O<x.length&&(y(Ve=>[...Ve,x[O]]),O++,Ze(600+O*50,.02)),Ie})},120);return()=>clearInterval(k)}},[v]);const Dn=()=>{if(i)return;Ze(1200,.4),s(!0);let x=0;const O=setInterval(()=>{x<7?(Ze(150+x*200,.05),x++):clearInterval(O)},100);setTimeout(()=>{t("os"),D(0),y([]),E(!1),s(!1)},1800)},Vi=async()=>{if(!l.trim()||g)return;const x=l.trim();c(""),m(""),p(!0),Ze(1050,.03);try{const k=await(await fetch("/api/ask-twin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:x,history:[]})})).json();if(k.reply)m(k.reply);else throw new Error}catch{m("Simulation matrix synced. I can verify Farhan's robust TypeScript integrations, clinical research pipelines, and mental health classifiers.")}finally{p(!1)}};je.useEffect(()=>{const x=O=>{(O.metaKey||O.ctrlKey)&&O.key==="k"&&(O.preventDefault(),$e(k=>!k),Ze(900,.04)),O.key==="Escape"&&$e(!1)};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[L]);const ms=(x,O)=>{var k,J,ne;(k=z[x])!=null&&k.isMaximized||(W(x),at(x),Dt({x:O.clientX-(((J=z[x])==null?void 0:J.x)||0),y:O.clientY-(((ne=z[x])==null?void 0:ne.y)||0)}),Ze(500,.01))},za=x=>{if(We){const O=x.clientX-$t.x,k=x.clientY-$t.y;H(J=>({...J,[We]:{...J[We],x:Math.max(0,O),y:Math.max(0,k)}}))}},Oa=()=>{at(null)};je.useEffect(()=>(We&&(window.addEventListener("mousemove",za),window.addEventListener("mouseup",Oa)),()=>{window.removeEventListener("mousemove",za),window.removeEventListener("mouseup",Oa)}),[We,$t]);const Gt=x=>{Ze(700,.05),Q.includes(x)||G(O=>[...O,x]),ue(O=>O.filter(k=>k!==x)),W(x)},ln=x=>{Ze(400,.06),G(O=>O.filter(k=>k!==x))},gn=x=>{Ze(450,.04),K.includes(x)||ue(k=>[...k,x]);const O=Q.filter(k=>k!==x&&!K.includes(k));O.length>0&&W(O[O.length-1])},Ri=x=>{Ze(800,.04),H(O=>{var k;return{...O,[x]:{...O[x],isMaximized:!((k=O[x])!=null&&k.isMaximized)}}})},Xn=async(x,O=null,k="narrate")=>{if(P)try{Te&&(Te.stop(),Le(null)),_e(O);const ne=await(await fetch("/api/tts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:x,type:k})})).json();if(ne.audio){const Ie=await iS(ne.audio);Le(Ie);const Ve=ne.audio.length*.75/24e3;setTimeout(()=>{_e(null)},Ve*1e3)}}catch(J){console.error("Narrator service unreachable:",J),_e(null)}},ji=()=>{Te&&(Te.stop(),Le(null)),_e(null)},sa=async()=>{if(!ut.trim())return;const x=ut.trim();zt(""),Zt(O=>[...O,{role:"user",content:x}]),T(!0),Ze(1100,.03);try{const O=Ue.map(ne=>({role:ne.role==="user"?"user":"assistant",content:ne.content})),J=await(await fetch("/api/ask-twin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:x,history:O})})).json();if(J.reply)Zt(ne=>[...ne,{role:"assistant",content:J.reply}]),T(!1),P&&Xn(J.reply,Ue.length+1);else throw new Error(J.error||"General twin system fault.")}catch(O){Zt(k=>[...k,{role:"assistant",content:`Error compiling neural thoughts: ${O.message||"System failed to fetch reply."}`}]),T(!1)}},gs=async()=>{if(Ne.goals.trim()){Oe(!0),Ze(950,.05);try{const O=await(await fetch("/api/summarize-brief",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ne)})).json();O.summary&&Pe(O.summary)}catch{Pe("Unable to complete AI Feasibility Assessment. Please check internet connection.")}finally{Oe(!1)}}},Ci=async()=>{Ze(1200,.1),nt(!0),Be(!0),pt(1);const x=[{id:"twin",title:"Neural Core Clone",text:"This is the Ask Farhan AI Clone, trained on Farhan's complete portfolio. You can query clinical results, NLP models, and full-stack architecture profiles."},{id:"projects",title:"Project Galaxy Command",text:"Review the high-precision mission panels showing fine-tuned Transformers, custom Go microservices, and metrics-driven SaaS applications."},{id:"research",title:"Linguistic Research Laboratory",text:"Inspect peer-reviewed NLP models, specialized Reddit depression classifiers, topological architectures, and citation modules."},{id:"skills",title:"Skill Observational Map",text:"Explore interactive visual expertise nodes across deep ML, distributed scalable systems, and fully secure client UI architectures."},{id:"brief",title:"Mission Collaboration Brief",text:"Submit custom initiatives to initiate automated feasibility evaluations driven directly by the Gemini reasoning framework."}];await(async k=>{const J=x[k-1];if(!J){nt(!1),pt(0);return}pt(k),Re(J.text),Gt(J.id),Be(!0),P&&await Xn(J.text,null,"tour"),Be(!1)})(1)},xs=()=>{if(it<5){const x=it+1;pt(x),Ze(800,.04);const O=["Review the high-precision mission panels showing fine-tuned Transformers, custom Go microservices, and metrics-driven SaaS applications.","Inspect peer-reviewed NLP models, specialized Reddit depression classifiers, topological architectures, and citation modules.","Explore interactive visual expertise nodes across deep ML, distributed scalable systems, and fully secure client UI architectures.","Submit custom initiatives to initiate automated feasibility evaluations driven directly by the Gemini reasoning framework."];Gt(["projects","research","skills","brief"][x-1]),Re(O[x-2]),P&&Xn(O[x-2],null,"tour")}else nt(!1),pt(0),ji(),Ze(1300,.05)},Xi=fn.skills.filter(x=>lt==="all"||lt==="AI/ML"&&x.category==="AI/ML"||lt==="Frontend"&&x.category==="Frontend"||lt==="Backend"&&x.category==="Backend"||lt==="Research"&&x.category==="Research & Science"||lt==="Systems"&&x.category==="Systems & Devops"),Ni=(()=>{const x=q.toLowerCase().trim();if(!x)return[];const O=[];return fn.projects.forEach(k=>{(k.title.toLowerCase().includes(x)||k.techStack.some(J=>J.toLowerCase().includes(x)))&&O.push({type:"Project",title:k.title,subtitle:k.category,action:()=>{Gt("projects"),Se(k),$e(!1)}})}),fn.papers.forEach(k=>{(k.title.toLowerCase().includes(x)||k.abstract.toLowerCase().includes(x))&&O.push({type:"Research Paper",title:k.title,subtitle:`${k.year} - ${k.journal}`,action:()=>{Gt("research"),He(k),$e(!1)}})}),fn.articles.forEach(k=>{(k.title.toLowerCase().includes(x)||k.excerpt.toLowerCase().includes(x))&&O.push({type:"Blog/Article",title:k.title,subtitle:k.category,action:()=>{Gt("writing"),Ye(k),$e(!1)}})}),fn.skills.forEach(k=>{k.name.toLowerCase().includes(x)&&O.push({type:"Tech Stack",title:k.name,subtitle:k.category,action:()=>{Gt("skills"),At(k.category==="Research & Science"?"Research":k.category==="Systems & Devops"?"Systems":k.category),$e(!1)}})}),("whiteboard".includes(x)||"ideation".includes(x)||"canvas".includes(x)||"drawing".includes(x)||"sketch".includes(x)||"paint".includes(x))&&O.push({type:"OS Utility",title:"Ideation Pad (Whiteboard)",subtitle:"HTML5 digital canvas for sketching visual ideas",action:()=>{Gt("whiteboard"),$e(!1)}}),O})(),pi=[{id:"twin",label:"Ask Twin AI",icon:Hr,color:"text-purple-400 bg-purple-500/10 border-purple-500/20"},{id:"projects",label:"Mission Control",icon:Ho,color:"text-sky-400 bg-sky-500/10 border-sky-500/20"},{id:"research",label:"Research Lab",icon:Jg,color:"text-emerald-400 bg-emerald-500/10 border-emerald-500/20"},{id:"github",label:"GitHub Monitor",icon:pd,color:"text-zinc-400 bg-zinc-500/10 border-zinc-500/20"},{id:"writing",label:"Writing Hub",icon:ex,color:"text-amber-400 bg-amber-500/10 border-amber-500/20"},{id:"garden",label:"Garden Graph",icon:Py,color:"text-cyan-400 bg-cyan-500/10 border-cyan-500/20"},{id:"resume",label:"Resume Gen",icon:Ay,color:"text-pink-400 bg-pink-500/10 border-pink-500/20"},{id:"timeline",label:"Career Index",icon:py,color:"text-blue-400 bg-blue-500/10 border-blue-500/20"},{id:"skills",label:"Skill Observatory",icon:hd,color:"text-indigo-400 bg-indigo-500/10 border-indigo-500/20"},{id:"brief",label:"Mission Brief",icon:md,color:"text-rose-400 bg-rose-500/10 border-rose-500/20"},{id:"builds",label:"Release Logs",icon:Ny,color:"text-teal-400 bg-teal-500/10 border-teal-500/20"},{id:"whiteboard",label:"Ideation Pad",icon:tx,color:"text-orange-400 bg-orange-500/10 border-orange-500/20"}],xn=(()=>{switch(N){case"cyberpunk":return{bg:"bg-[#030610] text-[#00ffcc] font-mono selection:bg-pink-500/30 selection:text-white",glass:"bg-black/80 border-2 border-pink-500/60 shadow-[0_0_20px_rgba(236,72,153,0.15)]",windowHeader:"bg-gradient-to-r from-pink-600 to-indigo-900 text-white border-b-2 border-pink-500/60 font-mono",btnPrimary:"bg-pink-600 hover:bg-pink-500 text-white border-2 border-pink-400 font-mono transition-transform duration-150 transform active:scale-95",btnSecondary:"bg-zinc-900 border-2 border-[#00ffcc] text-[#00ffcc] hover:bg-[#00ffcc]/10 font-mono",accentColor:"text-pink-500",accentBorder:"border-pink-500/40",indicator:"bg-[#00ffcc] shadow-[0_0_8px_#00ffcc]",panelHeader:"text-pink-400 uppercase tracking-widest text-[11px] font-bold",badge:"bg-pink-500/20 border border-pink-500/40 text-pink-300"};case"ai":return{bg:"bg-[#050414] text-slate-100 selection:bg-purple-600/30 selection:text-white",glass:"bg-purple-950/20 backdrop-blur-xl border border-purple-500/30 shadow-[0_20px_50px_rgba(147,51,234,0.15)] ring-1 ring-white/10",windowHeader:"bg-gradient-to-r from-purple-950/50 via-slate-900 to-indigo-950/50 text-slate-100 border-b border-purple-500/30 font-sans backdrop-blur-md",btnPrimary:"bg-gradient-to-r from-purple-600 to-cyan-500 text-white border border-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:opacity-90 transition-all active:scale-95 duration-100",btnSecondary:"bg-purple-950/40 border border-cyan-500/40 text-cyan-200 hover:bg-purple-950/80 transition-all",accentColor:"text-purple-400",accentBorder:"border-purple-500/30",indicator:"bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse",panelHeader:"text-purple-400 tracking-wider text-xs font-semibold",badge:"bg-purple-500/20 border border-purple-500/30 text-purple-200 text-xs"};case"terminal":return{bg:"bg-black text-[#33ff33] font-mono selection:bg-[#33ff33]/20",glass:"bg-black border border-[#33ff33] shadow-[0_0_15px_rgba(51,255,51,0.1)]",windowHeader:"bg-zinc-950 text-[#33ff33] border-b border-[#33ff33] font-mono",btnPrimary:"bg-[#33ff33] text-black border border-[#33ff33] font-bold hover:bg-[#33ff33]/80 transition-all",btnSecondary:"bg-black border border-[#33ff33] text-[#33ff33] hover:bg-[#33ff33]/15 transition-all",accentColor:"text-[#33ff33]",accentBorder:"border-[#33ff33]/30",indicator:"bg-[#33ff33] shadow-[0_0_10px_#33ff33]",panelHeader:"text-[#33ff33] font-bold uppercase tracking-wider text-[11px]",badge:"bg-transparent border border-[#33ff33] text-[#33ff33] text-xs"};case"light":return{bg:"bg-[#f8fafc] text-[#0f172a] selection:bg-sky-500/20",glass:"bg-white/85 backdrop-blur-md border border-slate-200 shadow-xl",windowHeader:"bg-slate-50 text-slate-800 border-b border-slate-200 font-sans",btnPrimary:"bg-slate-900 hover:bg-slate-800 text-white transition-all duration-100 active:scale-95",btnSecondary:"bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all",accentColor:"text-indigo-600",accentBorder:"border-slate-300",indicator:"bg-indigo-600 shadow-[0_0_5px_rgba(79,70,229,0.5)]",panelHeader:"text-slate-500 uppercase tracking-widest text-[11px] font-bold",badge:"bg-slate-100 border border-slate-200 text-slate-700 text-xs"};default:return{bg:"bg-[#090a10] text-[#f1f5f9] selection:bg-sky-500/20",glass:"bg-[#11121d]/75 backdrop-blur-xl border border-[#2c2d3a] shadow-2xl shadow-black/80",windowHeader:"bg-[#161726]/90 text-slate-200 border-b border-[#2c2d3a] font-sans",btnPrimary:"bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-950/50 border border-sky-450 transition-all duration-150 active:scale-95",btnSecondary:"bg-[#1a1b26] border border-[#2d2f3d] text-slate-300 hover:bg-[#202231] transition-all",accentColor:"text-sky-400",accentBorder:"border-sky-500/20",indicator:"bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse",panelHeader:"text-sky-450 uppercase tracking-wider text-[11px] font-bold",badge:"bg-sky-500/10 border border-sky-500/20 text-sky-300"}}})();return h.jsx("div",{className:`min-h-screen ${xn.bg} transition-colors duration-500 overflow-hidden select-none flex flex-col relative`,children:o==="landing"?h.jsxs("div",{className:"absolute inset-0 z-50 flex flex-col min-h-screen w-full relative",children:[h.jsx(x2,{isWarping:i,theme:N}),h.jsxs("header",{className:`h-14 px-6 flex items-center justify-between border-b border-zinc-850/50 backdrop-blur-md bg-black/45 z-20 select-none transition-all duration-700 ${i?"opacity-0 translate-y-[-20px]":"opacity-100"}`,children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_#6366f1]"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-xs font-black tracking-widest text-slate-100 uppercase font-sans",children:"FARHAN KABIR"}),h.jsx("span",{className:"text-[8.5px] font-mono text-zinc-550 uppercase tracking-widest",children:"CLINICAL NLP & SAAS ENGINE v2.4"})]})]}),h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsxs("div",{className:"hidden md:flex items-center gap-1 bg-zinc-950/70 border border-zinc-900 px-1.5 py-0.5 rounded-lg",children:[h.jsx("span",{className:"text-[9.5px] text-zinc-550 font-bold mr-1",children:"MOOD:"}),["dark","cyberpunk","ai","terminal","light"].map(x=>h.jsx("button",{onClick:()=>{I(x),Ze(800,.02)},className:`text-[9.5px] px-1.5 py-0.5 rounded capitalize transition-all cursor-pointer ${N===x?"bg-[#1e1b4b] text-indigo-300 font-bold border border-indigo-500/20":"text-zinc-550 hover:text-zinc-355"}`,children:x},x))]}),h.jsx("button",{onClick:()=>{X(!L),xd(1e3,.02)},className:`p-1.5 rounded-lg border border-zinc-900 bg-zinc-950/60 cursor-pointer hover:bg-zinc-90 w ${L?"text-indigo-400":"text-zinc-650"}`,title:"Toggle Sound Effects",children:L?h.jsx(fc,{className:"w-3.5 h-3.5"}):h.jsx(dc,{className:"w-3.5 h-3.5"})}),h.jsx("button",{onClick:Dn,className:"bg-indigo-650 hover:bg-indigo-600 font-sans text-white font-extrabold p-1.5 px-4 border border-indigo-400/50 rounded-lg text-[10px] cursor-pointer shadow-lg tracking-tight uppercase transition-all active:scale-95 animate-pulse",children:"Launch OS"})]})]}),S&&h.jsx("div",{className:"fixed inset-0 bg-black/95 z-[2000] flex items-center justify-center p-4 backdrop-blur-md animate-scale-up select-text",children:h.jsxs("div",{className:"bg-zinc-950 border border-indigo-500/35 rounded-2xl w-full max-w-2xl p-6 relative shadow-[0_0_50px_rgba(99,102,241,0.25)] select-text",children:[h.jsx("button",{onClick:()=>{b(null),Ze(400,.03)},className:"absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 cursor-pointer",children:h.jsx(gd,{className:"w-4 h-4"})}),h.jsxs("div",{className:"border-b border-zinc-900 pb-3 mb-3",children:[h.jsx("span",{className:"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase tracking-widest",children:"CLINICAL NLP SCIENTIFIC PAPER ABSTRACT"}),h.jsx("h3",{className:"text-sm font-black text-white leading-relaxed mt-2 select-text",children:S.title}),h.jsxs("div",{className:"flex items-center gap-2 mt-1.5 text-[10px] text-zinc-500 font-mono",children:[h.jsxs("span",{children:["Year: ",S.year||"2025"]}),h.jsx("span",{children:"·"}),h.jsx("span",{children:"Index: Cognitive Sentiment Computing Matrix"})]})]}),h.jsxs("div",{className:"space-y-4 text-xs text-slate-300 leading-relaxed pr-2 select-text font-normal max-h-[300px] overflow-y-auto",children:[h.jsxs("div",{children:[h.jsx("span",{className:"block font-bold text-indigo-300 uppercase font-mono text-[9.5px] tracking-wide mb-1",children:"Theoretical Abstract:"}),h.jsx("p",{children:S.abstract})]}),h.jsxs("div",{children:[h.jsx("span",{className:"block font-bold text-indigo-300 uppercase font-mono text-[9.5px] tracking-wide mb-1",children:"Findings Outline:"}),h.jsxs("ul",{className:"list-disc pl-4 space-y-1",children:[h.jsxs("li",{children:["Evaluated state-of-the-art classifier accuracies of ",S.accuracy||"91.4%"," using custom fine-tuned weighted matrices."]}),h.jsx("li",{children:"Calculated topological maps mapping emotional distress patterns across social wellness forums."}),h.jsx("li",{children:"Configured strict data anonymity frameworks matching peak health security standards."})]})]})]}),h.jsxs("div",{className:"border-t border-zinc-900 pt-3 mt-4 flex items-center justify-between",children:[h.jsx("span",{className:"text-[9.5px] text-zinc-500 font-mono",children:"FARHANOS MEDICAL RESEARCH ARCHIVE"}),h.jsx("button",{onClick:()=>{b(null),Ze(500,.02)},className:"bg-zinc-900 border border-zinc-800 text-zinc-350 px-4 py-1.5 rounded-lg text-[10.5px] cursor-pointer hover:text-white font-bold",children:"Close Abstract PDF Reader"})]})]})}),h.jsxs("main",{className:"flex-1 flex flex-col justify-center items-center px-4 py-6 md:py-10 select-none overflow-y-auto max-h-[calc(100vh-3.5rem)] scrollbar-none z-10 relative",children:[h.jsxs("div",{className:"flex flex-col items-center justify-center text-center max-w-4xl w-full mb-10",children:[h.jsxs("div",{className:"relative mb-6 select-none flex items-center justify-center",children:[h.jsx("div",{className:"absolute w-36 h-36 md:w-44 md:h-44 rounded-full border border-dashed border-sky-450/20 animate-spin-slow"}),h.jsx("div",{className:"absolute w-40 h-40 md:w-48 md:h-48 rounded-full border border-indigo-500/10 animate-spin-reverse"}),h.jsx("div",{className:"absolute -inset-4 bg-sky-500/5 rounded-full filter blur-xl animate-pulse"}),h.jsxs("div",{onClick:Dn,className:"relative w-28 h-28 md:w-34 md:h-34 rounded-full bg-black/85 border-2 border-indigo-500/35 hover:border-[#00ffcc] flex flex-col items-center justify-center p-2 shadow-2xl z-10 overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105",children:[h.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-[#00ffcc]/10 to-[#818cf8]/10 opacity-30 group-hover:opacity-100 transition-opacity"}),h.jsxs("div",{className:"relative text-center z-10",children:[h.jsx(hd,{className:"w-8 h-8 md:w-10 md:h-10 text-sky-400 mx-auto animate-spin-slow group-hover:text-[#00ffcc]"}),h.jsx("span",{className:"text-[7.5px] font-mono tracking-widest text-[#00ffcc] block mt-1 uppercase animate-pulse",children:i?"Warp Active":"Gateway Ready"})]})]})]}),h.jsxs("div",{className:`transition-all duration-500 ${i?"opacity-0 scale-90 blur-xs":"opacity-100 scale-100"}`,children:[h.jsx("span",{className:"bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full text-center",children:h.jsx(Br,{text:"FARHAN KABIR // CLINICAL NLP ARCHITECT",speed:25})}),h.jsx("h1",{className:"text-3xl md:text-5xl font-black text-white uppercase mt-4 mb-2 tracking-tight leading-none font-sans",children:h.jsx(Br,{text:"COGNITIVE DIALECTICS OS",speed:30,delay:400})}),h.jsx("p",{className:"text-xs text-zinc-400 font-sans max-w-xl mx-auto leading-relaxed mb-6 font-normal",children:"Explore clinical linguistics research papers, conceptual garden maps, and AI SaaS agent architectures within an interactive, high-fidelity windowed operating system simulator."}),h.jsx("button",{onClick:Dn,disabled:i,className:"group relative bg-[#0d0f1c] border border-indigo-500/40 hover:border-[#00ffcc] px-8 py-4 rounded-xl text-[11px] font-mono text-indigo-300 hover:text-[#00ffcc] tracking-widest select-none cursor-pointer transition-all duration-200 uppercase shadow-lg shadow-indigo-950/20 hover:shadow-[0_0_30px_rgba(0,255,204,0.25)] active:scale-95",children:h.jsxs("span",{className:"relative z-10 flex items-center justify-center gap-2 font-black",children:[h.jsx(md,{className:"w-4 h-4 text-indigo-400 group-hover:text-[#00ffcc] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"}),h.jsx("span",{children:i?"CHARGING CORES WARPING...":"ACTIVATE COSMIC PORTAL"})]})}),h.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 mt-6 max-w-lg mx-auto font-mono text-[9.5px]",children:[h.jsxs("button",{onClick:()=>fe("resume"),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/70 hover:bg-indigo-500/10 hover:border-indigo-500/30 text-indigo-300 hover:text-indigo-200 transition-all cursor-pointer shadow-xs active:scale-95",children:[h.jsx(Qd,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"GET RESUME (CV)"})]}),h.jsxs("button",{onClick:()=>fe("brief"),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/70 hover:bg-rose-500/10 hover:border-rose-500/30 text-rose-300 hover:text-rose-200 transition-all cursor-pointer shadow-xs active:scale-95",children:[h.jsx(nx,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"MISSION BRIEF (CONTACT)"})]}),h.jsxs("button",{onClick:()=>fe("github"),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/70 hover:bg-zinc-855 hover:text-white transition-all cursor-pointer shadow-xs active:scale-95 text-zinc-400",children:[h.jsx(pd,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"GITHUB MONITOR"})]}),h.jsxs("button",{onClick:()=>fe("twin"),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/70 hover:bg-purple-500/10 hover:border-purple-500/30 text-purple-300 hover:text-purple-200 transition-all cursor-pointer shadow-xs active:scale-95",children:[h.jsx(Hr,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"LAUNCH AI CO-PILOT"})]})]})]})]}),h.jsxs("div",{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full select-none transition-all duration-750 ${i?"opacity-0 translate-y-36 blur-lg":"opacity-100 translate-y-0"}`,children:[h.jsxs("div",{className:"bg-[#0b0c14]/75 backdrop-blur-md border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between hover:border-indigo-500/25 transition-all",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 mb-2 pb-2 border-b border-zinc-900 font-mono",children:[h.jsx(ax,{className:"w-4 h-4 text-purple-400 animate-pulse"}),h.jsx("span",{className:"text-[10px] uppercase font-bold text-zinc-300",children:h.jsx(Br,{text:"CLONE TERMINAL v1",speed:20,delay:600})})]}),h.jsx("p",{className:"text-[11px] text-zinc-400 leading-normal font-sans mb-3 select-text select-none",children:"Engage Farhan's certified virtual clone. Real-time predictive response matrices."}),h.jsx("div",{className:"bg-black/55 border border-zinc-900 p-2.5 rounded-lg mb-2 select-text",children:h.jsx("div",{className:"text-[9.5px] font-mono leading-relaxed select-text min-h-[50px] max-h-[120px] overflow-y-auto scrollbar-none",children:g?h.jsx("div",{className:"text-purple-400 animate-pulse",children:"⏳ Compiling token layers..."}):d?h.jsx("p",{className:"text-zinc-300 font-sans",children:d}):h.jsx("span",{className:"text-zinc-650 block italic font-sans text-[10px]",children:"Submit query details in input matrix..."})})}),h.jsx("div",{className:"flex flex-wrap gap-1 mb-2.5",children:[{label:"F1 Metrics?",text:"What are your classifier F1 scores?"},{label:"Clinical Focus?",text:"What is your clinical NLP focus?"},{label:"SaaS Products?",text:"What SaaS products have you built?"}].map(x=>h.jsx("button",{onClick:()=>{c(x.text),Ze(900,.02)},className:"text-[8px] font-mono px-1.5 py-0.5 rounded border border-zinc-900 hover:border-indigo-500/40 hover:text-indigo-300 bg-zinc-950/40 text-zinc-500 cursor-pointer transition-colors",children:x.label},x.label))})]}),h.jsx("div",{className:"space-y-2",children:h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("input",{type:"text",value:l,onChange:x=>c(x.target.value),onKeyDown:x=>x.key==="Enter"&&Vi(),placeholder:"e.g. F1 Diagnostic scores?",className:"flex-1 bg-black/60 border border-zinc-900 rounded-lg px-2 py-1 text-[10px] text-white focus:outline-hidden focus:border-indigo-500/55 font-mono"}),h.jsx("button",{onClick:Vi,disabled:!l.trim()||g,className:"bg-indigo-650 hover:bg-indigo-600 border border-indigo-400/45 p-1 px-3.5 rounded-lg text-white font-bold text-[10px] cursor-pointer",children:"Send"})]})})]}),h.jsx("div",{className:"bg-[#0b0c14]/75 backdrop-blur-md border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between hover:border-indigo-500/25 transition-all",children:h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 mb-2 pb-2 border-b border-zinc-900 font-mono",children:[h.jsx(Jg,{className:"w-4 h-4 text-emerald-400"}),h.jsx("span",{className:"text-[10px] uppercase font-bold text-zinc-300",children:h.jsx(Br,{text:"MONOGRAPHS & PATENTS",speed:20,delay:800})})]}),h.jsx("p",{className:"text-[11px] text-zinc-400 leading-normal font-sans mb-3 select-none",children:"Select indices below to read theoretic clinical abstracts:"}),h.jsx("div",{className:"space-y-2",children:[{title:"Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs",abstract:"A perplexity-based real-time detection framework identifying adversarial prompt injection attacks. Maps input token perplexity metrics before core LLM propagation to secure safety alignments.",accuracy:"94.2% accuracy target",year:2025},{title:"AI-Driven Live Interview System for Candidate Evaluation Using NLP & Computer Vision",abstract:"Dynamic interview pipeline combining Wav2Vec transcript NLP processing and MediaPipe posture keypoint detection for real-time candidate suitability scoring.",accuracy:"91.6% late-fusion accuracy",year:2025}].map((x,O)=>h.jsxs("button",{onClick:()=>{b(x),Ze(950,.03)},className:"w-full text-left p-2 rounded-lg bg-black/45 border border-zinc-900 flex flex-col hover:border-[#00ffcc]/30 text-indigo-400 hover:text-emerald-300 transition-all font-mono",children:[h.jsx("span",{className:"text-[9.5px] font-bold truncate block",children:x.title}),h.jsxs("div",{className:"flex items-center justify-between text-[7px] text-zinc-500 mt-1 font-mono",children:[h.jsx("span",{children:x.accuracy}),h.jsxs("span",{children:["Year: ",x.year]})]})]},O))})]})}),h.jsxs("div",{className:"bg-[#0b0c14]/75 backdrop-blur-md border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between hover:border-indigo-500/25 transition-all",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 mb-2 pb-2 border-b border-zinc-900 font-mono",children:[h.jsx(Ho,{className:"w-4 h-4 text-indigo-400 animate-spin-slow"}),h.jsx("span",{className:"text-[10px] uppercase font-bold text-zinc-300",children:h.jsx(Br,{text:"ENGINE MATRIX",speed:20,delay:1e3})})]}),h.jsx("p",{className:"text-[11px] text-zinc-400 leading-normal font-sans mb-3 select-none",children:"Pristine frontend elements matched with scalable server systems."}),h.jsx("div",{className:"grid grid-cols-2 gap-1 px-0.5",children:[{name:"TypeScript",role:"Type Safety"},{name:"PyTorch",role:"Transformers"},{name:"React 19",role:"Vite App"},{name:"GCP Cloud",role:"Docker containers"}].map(x=>h.jsxs("div",{onClick:()=>Ze(900,.02),className:"p-1 rounded-lg border border-zinc-900 bg-black/20 text-center font-mono hover:text-[#00ffcc] text-[9px] cursor-pointer",children:[h.jsx("span",{className:"font-bold block text-slate-300",children:x.name}),h.jsx("span",{className:"text-[7.1px] text-zinc-500 block",children:x.role})]},x.name))})]}),h.jsx("div",{className:"pt-2",children:h.jsx("button",{onClick:()=>{t("os"),Ze(800,.04)},className:"w-full text-center py-1.5 rounded-lg border border-zinc-900 bg-zinc-950 text-[10px] font-mono text-zinc-500 hover:text-white hover:border-zinc-800 transition-all cursor-pointer",children:"Bypass Wormhole Portal"})})]}),h.jsxs("div",{className:"bg-[#0b0c14]/75 backdrop-blur-md border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between hover:border-[#00ffcc]/25 transition-all font-mono",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 mb-2 pb-2 border-b border-zinc-900",children:[h.jsx(uy,{className:"w-4 h-4 text-sky-400 animate-pulse"}),h.jsx("span",{className:"text-[10px] uppercase font-bold text-zinc-300",children:h.jsx(Br,{text:"SYSTEM TELEMETRY",speed:20,delay:1200})})]}),h.jsx("p",{className:"text-[11px] text-zinc-400 leading-normal font-sans mb-3 select-none",children:"Real-time status monitor of clinical NLP nodes and active pipelines."}),h.jsxs("div",{className:"space-y-2 text-[9px]",children:[h.jsxs("div",{className:"flex justify-between border-b border-zinc-900 pb-1",children:[h.jsx("span",{className:"text-zinc-500",children:"CPU LOAD:"}),h.jsxs("span",{className:"text-sky-400 font-bold",children:[le,"%"]})]}),h.jsxs("div",{className:"flex justify-between border-b border-zinc-900 pb-1",children:[h.jsx("span",{className:"text-zinc-500",children:"MEMORY:"}),h.jsx("span",{className:"text-indigo-400",children:"142MB / 512MB"})]}),h.jsxs("div",{className:"flex justify-between border-b border-zinc-900 pb-1",children:[h.jsx("span",{className:"text-zinc-500",children:"CLINICAL HEAD:"}),h.jsx("span",{className:"text-emerald-400 font-bold",children:"RoBERTa (v2.4)"})]}),h.jsxs("div",{className:"flex justify-between border-b border-zinc-900 pb-1",children:[h.jsx("span",{className:"text-zinc-500",children:"F1-ACCURACY:"}),h.jsx("span",{className:"text-emerald-400",children:"0.914 ACTIVE"})]}),h.jsxs("div",{className:"flex justify-between pb-1",children:[h.jsx("span",{className:"text-zinc-500",children:"TTS QUEUE:"}),h.jsx("span",{className:"text-purple-400",children:"0ms LATENCY"})]})]})]}),h.jsxs("div",{className:"bg-zinc-950/60 border border-zinc-900 p-1.5 rounded-lg text-center mt-2",children:[h.jsx("span",{className:"text-[8px] text-zinc-500 uppercase tracking-widest block font-bold",children:"Linguistic Engine"}),h.jsx("span",{className:"text-[8.5px] text-emerald-400 font-bold block mt-0.5",children:"ONLINE & AGENT SYNCED"})]})]})]}),h.jsxs("div",{className:`mt-16 w-full max-w-6xl space-y-16 pb-12 select-text transition-all duration-750 ${i?"opacity-0 translate-y-36 blur-lg":"opacity-100 translate-y-0"}`,children:[h.jsxs("section",{className:"space-y-6",children:[h.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900 pb-3 font-mono",children:[h.jsx("span",{className:"w-2 h-2 rounded bg-indigo-500 shadow-[0_0_8px_#6366f1]"}),h.jsx("h2",{className:"text-sm font-black tracking-widest text-slate-100 uppercase",children:"FEATURED INNOVATIONS"}),h.jsx("span",{className:"text-[10px] text-zinc-550 ml-auto uppercase font-mono",children:"SANDBOX MODULES READY"})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:fn.projects.slice(0,3).map(x=>h.jsxs("div",{className:"bg-[#0b0c14]/60 backdrop-blur-md border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between hover:border-indigo-500/30 transition-all group shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.05)]",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-3 font-mono",children:[h.jsx("span",{className:"text-[9px] px-2 py-0.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 uppercase tracking-wider font-bold",children:x.category}),h.jsx("span",{className:"text-[9px] text-zinc-550",children:x.timeline})]}),h.jsx("h3",{className:"text-sm font-extrabold text-white group-hover:text-indigo-400 transition-colors leading-snug",children:x.title}),h.jsx("p",{className:"text-[11px] text-zinc-400 leading-relaxed font-sans mt-2",children:x.description}),h.jsx("div",{className:"grid grid-cols-3 gap-1.5 my-4 bg-zinc-950/40 border border-zinc-900/60 p-2 rounded-xl font-mono text-center",children:x.metrics.slice(0,3).map(O=>h.jsxs("div",{className:"p-1",children:[h.jsx("span",{className:"text-[8.5px] text-[#00ffcc] font-bold block",children:O.value}),h.jsx("span",{className:"text-[7.2px] text-zinc-650 block uppercase tracking-tight mt-0.5 line-clamp-1",children:O.label})]},O.label))})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsx("div",{className:"flex flex-wrap gap-1",children:x.techStack.slice(0,4).map(O=>h.jsx("span",{className:"text-[8.5px] font-mono px-1.5 py-0.5 rounded bg-zinc-900/60 text-zinc-400 border border-zinc-900/40",children:O},O))}),h.jsx("button",{onClick:()=>Ee(x),className:"w-full text-center py-2 rounded-xl border border-zinc-800 bg-zinc-950/80 hover:bg-indigo-650 hover:border-indigo-500/30 hover:text-white text-[10px] font-mono text-zinc-350 transition-all cursor-pointer font-bold active:scale-98",children:"LAUNCH SANDBOX VIEW →"})]})]},x.id))})]}),h.jsxs("section",{className:"space-y-6",children:[h.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900 pb-3 font-mono",children:[h.jsx("span",{className:"w-2 h-2 rounded bg-sky-400 shadow-[0_0_8px_#38bdf8]"}),h.jsx("h2",{className:"text-sm font-black tracking-widest text-slate-100 uppercase",children:"LINGUISTIC & ARCHITECTURAL STACK"}),h.jsx("span",{className:"text-[10px] text-zinc-550 ml-auto uppercase font-mono",children:"MODEL WEIGHTS SYNCHRONIZED"})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono",children:["AI/ML","Frontend","Backend","Systems & Devops"].map(x=>{const O=fn.skills.filter(k=>k.category===x||x==="Systems & Devops"&&k.category==="Systems & Devops");return h.jsxs("div",{className:"bg-[#0b0c14]/50 border border-zinc-900 p-5 rounded-2xl space-y-4",children:[h.jsx("span",{className:"text-[10px] text-sky-400 font-bold uppercase tracking-wider block border-b border-zinc-900/50 pb-1.5",children:x==="AI/ML"?"AI / MACHINE LEARNING":x==="Systems & Devops"?"SYSTEMS & DEVOPS":x.toUpperCase()}),h.jsx("div",{className:"space-y-3",children:O.slice(0,4).map(k=>h.jsxs("div",{className:"space-y-1",children:[h.jsxs("div",{className:"flex justify-between text-[9px] text-slate-300",children:[h.jsx("span",{children:k.name}),h.jsxs("span",{className:"text-zinc-550",children:[k.weight*20,"%"]})]}),h.jsx("div",{className:"w-full h-1 bg-zinc-950 rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full",style:{width:`${k.weight*20}%`}})})]},k.name))})]},x)})})]}),h.jsxs("section",{className:"space-y-6",children:[h.jsxs("div",{className:"flex items-center gap-3 border-b border-zinc-900 pb-3 font-mono",children:[h.jsx("span",{className:"w-2 h-2 rounded bg-purple-500 shadow-[0_0_8px_#a855f7]"}),h.jsx("h2",{className:"text-sm font-black tracking-widest text-slate-100 uppercase",children:"PUBLICATIONS & RESEARCH NOTES"}),h.jsx("span",{className:"text-[10px] text-zinc-550 ml-auto uppercase font-mono",children:"KNOWLEDGE ARCHIVES ONLINE"})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 font-sans",children:fn.articles.slice(0,2).map(x=>h.jsxs("div",{className:"bg-[#0b0c14]/60 backdrop-blur-md border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between hover:border-purple-500/30 transition-all group shadow-sm font-normal",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-3 font-mono text-[9px]",children:[h.jsx("span",{className:"text-purple-400 uppercase font-bold tracking-wider",children:x.category}),h.jsxs("div",{className:"flex items-center gap-2 text-zinc-550",children:[h.jsx("span",{children:x.date}),h.jsx("span",{children:"·"}),h.jsx("span",{children:x.readTime})]})]}),h.jsx("h3",{className:"text-sm font-bold text-white group-hover:text-purple-300 transition-colors leading-relaxed",children:x.title}),h.jsx("p",{className:"text-[11px] text-zinc-400 leading-relaxed mt-2.5",children:x.excerpt})]}),h.jsxs("div",{className:"mt-5 border-t border-zinc-900 pt-4 flex items-center justify-between select-none",children:[h.jsx("span",{className:"text-[9.5px] text-zinc-550 font-mono",children:"FARHANOS ARCHIVE NODE"}),h.jsxs("button",{onClick:()=>we(x),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950 hover:bg-purple-950/20 hover:border-purple-500/20 text-purple-400 hover:text-purple-300 text-[10px] font-mono transition-all cursor-pointer active:scale-95",children:[h.jsx(ex,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"READ & NARRATE IN OS →"})]})]})]},x.id))})]})]})]})]}):h.jsxs(h.Fragment,{children:[!v&&h.jsxs("div",{className:"absolute inset-0 bg-[#020308] z-[9999] flex flex-col items-center justify-center font-mono text-xs px-6",children:[h.jsxs("div",{className:"w-full max-w-lg bg-[#080b15]/90 border border-zinc-800 p-6 rounded-lg shadow-2xl relative overflow-hidden",children:[h.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500",style:{width:`${A}%`}}),h.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-800 pb-3 mb-4",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500/80 animate-ping"}),h.jsx("span",{className:"text-zinc-400 font-bold tracking-wider",children:"FARHAN KABIR CORE OS v2.4"})]}),h.jsxs("span",{className:"text-zinc-500 tracking-wider",children:["BOOT: ",A,"%"]})]}),h.jsxs("div",{className:"space-y-1.5 h-48 overflow-y-auto mb-4 scrollbar-none pr-1",children:[M.map((x,O)=>h.jsxs("div",{className:"text-[#33ff33] opacity-90 font-mono text-[11px] leading-relaxed select-text flex items-start gap-1 justify-between",children:[h.jsx("span",{className:"flex-1 whitespace-pre-wrap",children:x}),h.jsx("span",{className:"text-zinc-600 text-[9px]",children:"[SUCCESS]"})]},O)),A<100&&h.jsx("div",{className:"text-white animate-pulse font-mono text-[11px]",children:"⏳ Orchestrating linguistic vectors, please standby..."})]}),h.jsxs("div",{className:"flex items-center justify-between border-t border-zinc-800 pt-3 text-[10px] text-zinc-500",children:[h.jsx("span",{children:"SYSTEM HOST: OOS LOCAL HOST INSTANCE"}),h.jsx("span",{children:"PORT: 3001 ACTIVE"})]})]}),h.jsx("div",{className:"mt-8 text-zinc-600 text-center text-[10px] uppercase tracking-widest max-w-xs font-mono",children:"Designed for low-latency cognitive linguistics analysis with fully responsive modular desktop client matrices."})]}),h.jsxs("header",{className:"h-10 bg-black/40 backdrop-blur-md border-b border-zinc-800/40 flex items-center justify-between px-4 z-[99] select-none text-xs font-mono",children:[h.jsxs("div",{className:"flex items-center gap-5",children:[h.jsxs("div",{className:"flex items-center gap-2 cursor-pointer font-bold tracking-tight text-white hover:opacity-85",onClick:()=>Ze(900,.05),children:[h.jsx("span",{className:"w-2 h-2 rounded bg-sky-400 opacity-90 shadow-[0_0_6px_#38bdf8]"}),h.jsx("span",{children:"FarhanOS"}),h.jsx("span",{className:"text-[9px] text-sky-400 px-1 border border-sky-500/20 rounded font-mono font-medium",children:"BETA"})]}),h.jsxs("button",{onClick:()=>{t("landing"),Ze(1105,.06)},className:"flex items-center gap-1.5 px-2 py-0.5 rounded text-indigo-400 hover:text-indigo-300 font-mono text-[10px] border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 cursor-pointer",title:"Return to Cosmos Portal",children:[h.jsx(hd,{className:"w-3.5 h-3.5 text-indigo-400 animate-spin-slow"}),h.jsx("span",{children:"Return to Cosmos"})]}),h.jsxs("nav",{className:"hidden md:flex items-center gap-4 text-zinc-400 font-medium select-none",children:[h.jsxs("button",{onClick:()=>{$e(!0),Ze(800,.03)},className:"hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer",children:[h.jsx(ix,{className:"w-3.5 h-3.5"}),h.jsxs("span",{children:["Search ",h.jsx("kbd",{className:"text-[10px] font-mono text-zinc-600 bg-zinc-900 border border-zinc-800 rounded px-1 ml-0.5",children:"Cmd+K"})]})]}),h.jsxs("button",{onClick:Ci,className:"hover:text-white transition-colors flex items-center gap-1 cursor-pointer text-purple-400 hover:text-purple-300",children:[h.jsx(Hr,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"AI Site Tour"})]}),h.jsxs("button",{onClick:()=>Gt("brief"),className:"hover:text-white transition-colors flex items-center gap-1 cursor-pointer",children:[h.jsx(nx,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Mission Brief"})]})]})]}),h.jsxs("div",{className:"flex items-center gap-4 select-none",children:[h.jsxs("div",{className:"hidden md:flex items-center gap-1 bg-zinc-950/60 border border-zinc-800/40 rounded px-1.5 py-0.5",children:[h.jsx("span",{className:"text-[10px] text-zinc-500 font-medium mr-1.5",children:"Mood Theme:"}),["dark","cyberpunk","ai","terminal","light"].map(x=>h.jsx("button",{onClick:()=>{I(x),Ze(750,.03)},className:`text-[10px] px-1.5 py-0.5 rounded capitalize transition-all cursor-pointer ${N===x?"bg-[#181926] text-white font-bold border border-zinc-700/60":"text-zinc-500 hover:text-zinc-300"}`,children:x},x))]}),h.jsxs("button",{onClick:j,className:"md:hidden flex items-center gap-1.5 bg-zinc-950/60 border border-zinc-800/40 rounded px-2 py-1 text-[10px] text-zinc-300 hover:text-white capitalize cursor-pointer active:scale-95 transition-all",title:"Cycle Theme",children:[h.jsx(tx,{className:"w-3.5 h-3.5 text-sky-400 animate-pulse"}),h.jsxs("span",{children:["Theme: ",N]})]}),h.jsxs("div",{className:"flex items-center gap-3 border-l border-zinc-800/60 pl-3",children:[h.jsx("button",{onClick:()=>{X(!L),xd(1e3,.02)},className:`p-1 rounded cursor-pointer hover:bg-zinc-900 ${L?"text-zinc-300":"text-zinc-600"}`,title:"Toggle Audio Feedback",children:L?h.jsx(fc,{className:"w-3.5 h-3.5"}):h.jsx(dc,{className:"w-3.5 h-3.5"})}),h.jsxs("button",{onClick:()=>{B(!P),ie!==null&&ji()},className:`text-[10px] font-semibold flex items-center gap-1.5 px-1.5 py-0.5 rounded cursor-pointer select-none ${P?"text-purple-400 border border-purple-500/20 bg-purple-500/5":"text-zinc-600 border border-zinc-800"}`,title:"Toggle Voice synthesizer narration output",children:[h.jsx(Ho,{className:"w-3 h-3 text-purple-400"}),h.jsx("span",{className:"hidden sm:inline",children:"OS Voice"})]}),h.jsxs("div",{className:"hidden sm:flex items-center gap-1.5 text-zinc-400 font-mono tracking-wider font-semibold bg-zinc-950/45 border border-zinc-800/40 px-2 py-0.5 rounded select-none",children:[h.jsx(xy,{className:"w-3.5 h-3.5 text-sky-400"}),h.jsxs("span",{children:[w||"14:37:33"," (UTC)"]})]})]})]})]}),ze&&h.jsxs("div",{className:"absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-xl bg-purple-950/80 backdrop-blur-2xl border-2 border-purple-500/50 p-4 rounded-xl shadow-[0_10px_40px_rgba(168,85,247,0.3)] z-[999] flex items-start gap-4 select-text animate-bounce-short",children:[h.jsx("div",{className:"p-2.5 bg-purple-500/20 rounded-lg border border-purple-400/40 text-purple-300",children:h.jsx(Hr,{className:"w-5 h-5 text-purple-400 animate-spin-slow"})}),h.jsxs("div",{className:"flex-1",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("h4",{className:"text-xs font-cyan-50 font-bold uppercase tracking-wider text-purple-200",children:["AI SYSTEM TOUR — ZONE ",it," OF 5"]}),xe&&h.jsx("span",{className:"text-[10px] text-purple-300 animate-pulse font-mono select-none",children:"Rendering Synthesized Voice..."})]}),h.jsx("p",{className:"text-xs text-[#ebd8fb] mt-1 pr-4 leading-relaxed font-sans",children:Y||"Preparing..."}),h.jsxs("div",{className:"flex items-center gap-2 mt-3",children:[h.jsx("button",{onClick:xs,className:"bg-purple-600 hover:bg-purple-500 text-white text-[10px] px-3 py-1 rounded border border-purple-400 transition-all font-bold tracking-tight cursor-pointer",children:it===5?"Conclude Integration Tour":"Acknowledge & Sync Next Area"}),h.jsx("button",{onClick:()=>{nt(!1),pt(0),ji(),Ze(400,.05)},className:"text-zinc-400 hover:text-white text-[10px] ml-2 font-medium cursor-pointer",children:"Exit Tour"})]})]})]}),h.jsxs("main",{className:"flex-1 relative overflow-auto p-4 md:p-6 scrollbar-none",children:[h.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 opacity-35",children:[h.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem]"}),h.jsx("div",{className:"absolute top-1/4 left-1/3 w-[30rem] h-[30rem] bg-gradient-to-tr from-sky-500/10 to-transparent rounded-full filter blur-[120px] animate-pulse-slow"}),h.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full filter blur-[100px] animate-pulse-slow"})]}),h.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-6 max-w-5xl relative z-10 p-2 pointer-events-auto",children:pi.map(x=>{const O=x.icon,k=Q.includes(x.id),J=he===x.id&&!K.includes(x.id);return h.jsxs("div",{onClick:()=>Gt(x.id),className:`flex flex-col items-center justify-center p-2.5 rounded-xl border border-transparent hover:border-zinc-800/40 hover:bg-zinc-950/20 hover:backdrop-blur-md cursor-pointer transition-all duration-150 active:scale-95 group text-center relative ${k?"bg-zinc-950/10":""}`,children:[h.jsxs("div",{className:`p-4 rounded-2xl ${x.color} transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200 relative`,children:[h.jsx(O,{className:"w-6 h-6"}),k&&h.jsx("span",{className:"absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900 shadow-[0_0_6px_#10b981]"})]}),h.jsx("span",{className:"text-slate-300 group-hover:text-white font-sans text-[11px] font-semibold mt-2.5 tracking-tight line-clamp-1",children:x.label}),J&&h.jsx("span",{className:"absolute inset-x-4 -bottom-1 h-0.5 bg-gradient-to-r from-sky-450 to-purple-500 rounded filter blur-xs"})]},x.id)})}),Q.map(x=>{if(K.includes(x))return null;const O=he===x,k=z[x]||{x:100,y:100,isMaximized:!1},J=pi.find($=>$.id===x),ne=J?J.icon:ax,Ve=ae<768||k.isMaximized?{position:"fixed",top:"2.5rem",left:0,right:0,bottom:"4rem",zIndex:O?50:20}:{position:"absolute",left:`${k.x}px`,top:`${k.y}px`,width:x==="twin"||x==="garden"||x==="skills"?"540px":"720px",height:x==="twin"?"480px":"550px",maxHeight:"85vh",zIndex:O?50:20};return h.jsxs("div",{id:`window-${x}`,style:Ve,onClick:()=>{W(x),Ze(400,.01)},className:`flex flex-col rounded-xl overflow-hidden shadow-2xl transition-all duration-150 transform ${xn.glass} ${O?"ring-2 ring-sky-500/35 scale-[1.002]":"opacity-90"}`,children:[h.jsxs("div",{onMouseDown:$=>ms(x,$),className:`h-9 px-3 flex items-center justify-between cursor-move select-none ${xn.windowHeader}`,children:[h.jsxs("div",{className:"flex items-center gap-2 font-semibold tracking-tight text-xs",children:[h.jsx(ne,{className:"w-3.5 h-3.5 opacity-80"}),h.jsx("span",{children:J?J.label:"FarhanOS Sandbox"}),O&&h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"})]}),h.jsxs("div",{className:"flex items-center gap-2",onMouseDown:$=>$.stopPropagation(),children:[h.jsx("button",{onClick:()=>gn(x),className:"p-1 text-slate-400 hover:text-white rounded hover:bg-white/10",title:"Minimize",children:h.jsx(zy,{className:"w-3 h-3"})}),h.jsx("button",{onClick:()=>Ri(x),className:"p-1 text-slate-400 hover:text-white rounded hover:bg-white/10",title:"Toggle Maximize",children:h.jsx(Uy,{className:"w-3 h-3"})}),h.jsx("button",{onClick:()=>ln(x),className:"p-1 text-rose-400 hover:text-rose-500 rounded hover:bg-rose-500/10",title:"Close Window",children:h.jsx(gd,{className:"w-3 h-3"})})]})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-5 text-xs font-sans scrollbar-thin scrollbar-thumb-zinc-800",children:[x==="twin"&&h.jsxs("div",{className:"flex flex-col h-full gap-3",children:[h.jsxs("div",{className:"border-b border-zinc-800/60 pb-2 mb-1",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Hr,{className:"w-4 h-4 text-purple-400"}),h.jsx("span",{className:"font-bold text-slate-100 tracking-tight",children:"Interactive Ask Twin Engine"})]}),h.jsx("p",{className:"text-zinc-400 text-[10px] mt-0.5 leading-relaxed font-normal",children:"Enter any prompt below. The model responds based on Farhan's publications, NLP methodologies, and complete career achievements."})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto space-y-3 p-1 scrollbar-none text-[11px] leading-relaxed select-text font-normal max-h-[220px]",children:[Ue.map(($,Ce)=>h.jsxs("div",{className:`flex flex-col gap-1 w-full ${$.role==="user"?"items-end":"items-start"}`,children:[h.jsx("div",{className:`p-3 rounded-xl max-w-[90%] whitespace-pre-wrap select-text border shadow-xs ${$.role==="user"?"bg-sky-500/10 border-sky-500/20 text-slate-100":"bg-zinc-950/40 border-zinc-900 text-slate-300"}`,children:$.content}),$.role==="assistant"&&h.jsx("button",{onClick:()=>{ie===Ce?ji():Xn($.content,Ce)},className:"text-[9px] text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer font-semibold",children:ie===Ce?h.jsxs(h.Fragment,{children:[h.jsx(dc,{className:"w-3 h-3 text-rose-400 animate-pulse"}),h.jsx("span",{className:"text-rose-400",children:"Silence Audio Narrator"})]}):h.jsxs(h.Fragment,{children:[h.jsx(fc,{className:"w-3 h-3 text-purple-400"}),h.jsx("span",{children:"Speak Response Model"})]})})]},Ce)),U&&h.jsxs("div",{className:"flex items-center gap-2 text-purple-400 animate-pulse font-mono text-[10px]",children:[h.jsx(Ho,{className:"w-3.5 h-3.5 animate-spin"}),h.jsx("span",{children:"FarhanTwin thinking processes synchronized..."})]})]}),h.jsx("div",{className:"border-t border-zinc-800/40 pt-2 grid grid-cols-2 gap-1.5 z-10",children:["Explain depression text research","What bimodal stack is in use?","What SaaS packages did Farhan build?","Give brief overview of Farhan"].map($=>h.jsxs("button",{onClick:()=>{zt($),Ze(900,.02)},className:"text-[10px] text-left p-1.5 rounded-lg bg-zinc-950/30 hover:bg-zinc-950/80 border border-zinc-900 text-zinc-400 hover:text-slate-200 truncate cursor-pointer transition-colors",children:["→ ",$]},$))}),h.jsxs("div",{className:"flex items-center gap-2 mt-auto border-t border-zinc-800/40 pt-2 select-none",children:[h.jsx("input",{type:"text",value:ut,onChange:$=>zt($.target.value),onKeyDown:$=>$.key==="Enter"&&sa(),placeholder:"Inquire about clinical studies, model performance parameters...",className:"flex-1 scroll-p-2 bg-black/60 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-hidden focus:border-purple-500/50 text-[11px] text-slate-100 placeholder-zinc-500"}),h.jsx("button",{onClick:sa,disabled:!ut.trim()||U,className:`p-2.5 rounded-lg cursor-pointer ${xn.btnPrimary}`,children:h.jsx(Wy,{className:"w-3.5 h-3.5"})})]})]}),x==="projects"&&h.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[h.jsxs("div",{className:"w-full md:w-52 border-r border-zinc-800/60 pr-4 flex flex-col gap-2",children:[h.jsx("span",{className:xn.panelHeader,children:"CATEGORIES"}),h.jsx("div",{className:"flex flex-wrap md:flex-col gap-1 select-none mb-3",children:["AI","NLP","SaaS","Open Source","Research","Productivity","Design"].map($=>h.jsxs("button",{onClick:()=>{Se(fn.projects.find(Ce=>Ce.category===$)||fn.projects[0]),Ze(800,.02)},className:`text-[10px] text-left px-2 py-1.5 rounded-md capitalize transition-all cursor-pointer ${ee.category===$?"bg-zinc-950 text-sky-400 border border-zinc-800 font-bold":"text-zinc-500 hover:text-zinc-300"}`,children:["🎨 ",$]},$))}),h.jsx("span",{className:xn.panelHeader,children:"ACTIVE PLATFORMS"}),h.jsx("div",{className:"space-y-1 overflow-y-auto max-h-[160px] scrollbar-none select-none",children:fn.projects.map($=>h.jsxs("button",{onClick:()=>{Se($),Ze(800,.03)},className:`w-full text-[10px] text-left p-2 rounded-md border flex flex-col gap-0.5 transition-colors cursor-pointer ${ee.id===$.id?"bg-sky-500/10 border-sky-500/30 text-sky-300":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[h.jsx("span",{className:"font-bold truncate",children:$.title}),h.jsx("span",{className:"text-[9px] opacity-75",children:$.category})]},$.id))})]}),h.jsxs("div",{className:"flex-1 space-y-4",children:[h.jsxs("div",{className:"flex items-start justify-between border-b border-zinc-800/40 pb-2",children:[h.jsxs("div",{children:[h.jsxs("span",{className:xn.badge,children:[ee.category," PROJECT"]}),h.jsx("h3",{className:"text-sm font-extrabold text-white mt-1",children:ee.title}),h.jsxs("span",{className:"text-[10px] text-zinc-500 font-mono tracking-wide",children:["TIMELINE: ",ee.timeline]})]}),h.jsxs("div",{className:"flex items-center gap-1.5 select-none",children:[h.jsxs("button",{onClick:()=>Ze(1e3,.05),className:"p-1 px-2.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-400 hover:text-white flex items-center gap-1",children:[h.jsx(pd,{className:"w-3 h-3"}),h.jsx("span",{children:"Code"})]}),h.jsxs("button",{onClick:()=>{Ze(1100,.05),Gt("brief")},className:"p-1 px-2.5 rounded bg-sky-500/10 border border-sky-500/20 text-[10px] text-sky-300 hover:text-sky-200 flex items-center gap-1",children:[h.jsx(md,{className:"w-3 h-3"}),h.jsx("span",{children:"Deploy"})]})]})]}),h.jsx("p",{className:"text-zinc-300 leading-relaxed font-sans mt-1 text-[11px] select-text",children:ee.description}),h.jsx("div",{className:"grid grid-cols-3 gap-2.5",children:ee.metrics.map(($,Ce)=>h.jsxs("div",{className:"bg-zinc-950/40 border border-zinc-900 rounded-lg p-2.5 text-center relative overflow-hidden",children:[h.jsx("div",{className:"absolute top-0 left-0 right-0 h-0.5 bg-sky-400/20"}),h.jsx("div",{className:"text-[10px] text-zinc-500 capitalize",children:$.label}),h.jsx("div",{className:"text-xs font-black text-sky-300 mt-1",children:$.value})]},Ce))}),h.jsxs("div",{className:"space-y-3 mt-4 text-[11px]",children:[h.jsxs("div",{className:"bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text",children:[h.jsx("span",{className:"font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1",children:"Architecture Pipeline:"}),h.jsx("span",{className:"text-slate-400 leading-relaxed font-sans",children:ee.architecture})]}),h.jsxs("div",{className:"bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text",children:[h.jsx("span",{className:"font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1",children:"Design Problem:"}),h.jsx("span",{className:"text-slate-400 leading-relaxed font-sans",children:ee.problem})]}),h.jsxs("div",{className:"bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text",children:[h.jsx("span",{className:"font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1",children:"Integrated Tech-Stack Matrix:"}),h.jsx("div",{className:"flex flex-wrap gap-1.5 mt-1 select-none",children:ee.techStack.map($=>h.jsx("span",{className:"bg-zinc-900 text-slate-300 border border-zinc-800 rounded px-1.5 py-0.5 text-[9px] font-mono leading-tight",children:$},$))})]})]})]})]}),x==="research"&&h.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[h.jsxs("div",{className:"w-full md:w-56 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2",children:[h.jsx("span",{className:xn.panelHeader,children:"PUBLICATIONS CATALOG"}),h.jsx("div",{className:"space-y-1 select-none",children:fn.papers.map($=>h.jsxs("button",{onClick:()=>{He($),Ze(800,.03)},className:`w-full text-left p-2 rounded-lg border flex flex-col gap-1 transition-all cursor-pointer ${Me.id===$.id?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.1)]":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[h.jsx("span",{className:"font-bold text-[10px] line-clamp-2 leading-snug",children:$.title}),h.jsxs("span",{className:"text-[9px] opacity-75 font-mono",children:[$.journal," (",$.year,")"]})]},$.id))}),h.jsxs("div",{className:"p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg mt-auto text-[10px] select-text",children:[h.jsx("span",{className:"font-bold text-emerald-300",children:"Clinician Alerts"}),h.jsx("p",{className:"text-zinc-500 leading-normal font-sans mt-1",children:"Automatic alert pipeline triggers clinical assessment support metrics on exceeding distress metrics threshold."})]})]}),h.jsxs("div",{className:"flex-1 space-y-4",children:[h.jsxs("div",{className:"border-b border-zinc-800/40 pb-2 flex-col gap-0.5 justify-start",children:[h.jsx("span",{className:"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded px-2 py-0.5 text-[9.5px]",children:"PEER-REVIEWED JOURNAL"}),h.jsx("h3",{className:"text-xs font-black text-slate-100 tracking-tight leading-relaxed select-text mt-1.5",children:Me.title}),h.jsxs("div",{className:"text-[9.5px] text-zinc-500 italic mt-0.5 select-text",children:["Authors: ",Me.authors," · Published in ",Me.journal," (",Me.year,")"]})]}),h.jsxs("div",{className:"bg-zinc-950/40 border border-zinc-900 rounded-lg p-3 relative select-text",children:[h.jsx("span",{className:"font-bold text-zinc-300 text-[10px] block uppercase tracking-wide mb-1",children:"Anatomical Abstract:"}),h.jsx("p",{className:"text-slate-400 font-sans leading-normal text-[10px]",children:Me.abstract})]}),h.jsxs("div",{children:[h.jsx("span",{className:xn.panelHeader,children:"CLASSIFIER PIPELINE DATAFLOW"}),h.jsxs("div",{className:"flex items-center gap-1 mt-1.5 select-none text-[9px] bg-zinc-950/30 p-2 border border-zinc-900 rounded-lg justify-around overflow-x-auto text-center font-mono",children:[h.jsx("div",{className:"bg-zinc-900 border border-zinc-800 p-1 px-1.5 rounded text-slate-400",children:"Ingestion"}),h.jsx("span",{className:"text-zinc-600",children:"→"}),h.jsx("div",{className:"bg-zinc-900 border border-zinc-800 p-1 px-1.5 rounded text-slate-400",children:"POS normalise"}),h.jsx("span",{className:"text-[#33ff33]",children:"→"}),h.jsx("span",{className:"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 p-1 px-1.5 rounded animate-pulse",children:"RoBERTa Tensor Matrix"}),h.jsx("span",{className:"text-[#33ff33]",children:"→"}),h.jsx("div",{className:"bg-red-500/20 text-red-300 border border-red-500/30 p-1 px-1.5 rounded",children:"Clinician Alert"})]})]}),h.jsxs("div",{children:[h.jsx("span",{className:xn.panelHeader,children:"EVALUATION ACCURACY STATISTICS"}),h.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2 mt-1.5 font-mono text-[10px]",children:Me.results.map(($,Ce)=>h.jsxs("div",{className:"bg-zinc-950 p-2 border border-zinc-900 rounded-md text-center",children:[h.jsx("div",{className:"text-zinc-500 text-[9px] truncate",title:$.metric,children:$.metric}),h.jsx("div",{className:"font-bold text-emerald-400 text-xs mt-0.5",children:$.score})]},Ce))})]}),h.jsxs("div",{className:"border border-zinc-900 bg-zinc-950/60 p-2.5 rounded-lg",children:[h.jsxs("div",{className:"flex items-center justify-between pointer-events-auto select-none mb-1",children:[h.jsx("span",{className:"text-[10px] text-zinc-500 font-bold block",children:"BIBTEX CITATION RESOURCE"}),h.jsxs("button",{onClick:()=>{navigator.clipboard.writeText(Me.citation),Ze(1200,.05)},className:"bg-zinc-900 text-zinc-400 hover:text-white px-1.5 py-0.5 rounded text-[9.5px] border border-zinc-850 flex items-center gap-0.5 cursor-pointer",children:[h.jsx(by,{className:"w-2.5 h-2.5"}),h.jsx("span",{children:"Copy Citation"})]})]}),h.jsx("code",{className:"text-[9.5px] text-zinc-400 font-mono select-all block leading-tight",children:Me.citation})]})]})]}),x==="github"&&h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2c2d3a] pb-2",children:[h.jsxs("div",{children:[h.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"VIRTUALIZED TELEMETRY STREAM"}),h.jsx("h3",{className:"text-sm font-extrabold text-white mt-1",children:"Linguistic & Engineering Pipelines Stream"})]}),h.jsx("span",{className:"text-[11px] text-stone-400 font-mono bg-zinc-950/60 px-2 py-0.5 border border-zinc-850 rounded",children:"STREAK: 142 DAYS"})]}),h.jsxs("div",{children:[h.jsx("span",{className:xn.panelHeader,children:"CODE INTEL CLASSIFIER CALENDAR (MOCK-GRID)"}),h.jsx("div",{className:"grid grid-cols-12 lg:grid-cols-24 gap-1 mt-1.5 bg-zinc-950 p-3 border border-zinc-900 rounded-lg",children:Array.from({length:48}).map(($,Ce)=>{const Ge=Ce%7===0?"bg-green-500 shadow-[0_0_4px_#22c55e]":Ce%5===0?"bg-green-600":Ce%3===0?"bg-green-800":"bg-zinc-900";return h.jsx("div",{onClick:()=>Ze(900+Ce%5*100,.02),className:`w-3.5 h-3.5 rounded-xs transition-colors hover:scale-110 cursor-pointer ${Ge}`,title:`Telemetry day ${Ce+1}: Commits verified`},Ce)})})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-[11px]",children:[h.jsxs("div",{className:"bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg",children:[h.jsx("span",{className:"font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2",children:"INTELLIGENT SYSTEMS"}),h.jsxs("div",{className:"space-y-2 font-mono",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-sky-300",children:"typerush-cockpit"}),h.jsx("span",{className:"text-zinc-500 text-[10px]",children:"Stars: 184"})]}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-sky-300",children:"the-ink-home-portal"}),h.jsx("span",{className:"text-zinc-500 text-[10px]",children:"Stars: 142"})]}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-sky-300",children:"safeside-predictor"}),h.jsx("span",{className:"text-zinc-500 text-[10px]",children:"Stars: 211"})]})]})]}),h.jsxs("div",{className:"bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg",children:[h.jsx("span",{className:"font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2",children:"LIVE COMPILING ACTIONS FEED"}),h.jsxs("div",{className:"space-y-2 leading-relaxed text-[10.5px]",children:[h.jsxs("div",{className:"flex items-start gap-1",children:[h.jsx("span",{className:"text-emerald-400",children:"●"}),h.jsxs("p",{className:"text-zinc-400",children:["Pushed update to ",h.jsx("code",{className:"text-[#33ff33] font-mono",children:"typerush"}),": Configured Web Audio procedural oscillators & dynamic BPM heartbeats."]})]}),h.jsxs("div",{className:"flex items-start gap-1",children:[h.jsx("span",{className:"text-amber-400",children:"●"}),h.jsx("p",{className:"text-zinc-400",children:"Released version 1.4.2 containing live Audio Synthesis narrated profiles."})]})]})]})]})]}),x==="writing"&&h.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[h.jsxs("div",{className:"w-full md:w-56 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2 select-none",children:[h.jsx("span",{className:xn.panelHeader,children:"NARRATIVE CHRONICLES"}),h.jsx("div",{className:"space-y-1",children:fn.articles.map($=>h.jsxs("button",{onClick:()=>{Ye($),Ze(800,.03)},className:`w-full text-left p-2 rounded-lg border flex flex-col gap-0.5 transition-all cursor-pointer ${Qe.id===$.id?"bg-amber-500/10 border-amber-500/30 text-amber-300":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[h.jsx("span",{className:"font-extrabold text-[10.5px] line-clamp-1 truncate",children:$.title}),h.jsxs("div",{className:"flex items-center justify-between text-[8.5px] text-zinc-500 mt-0.5 font-mono",children:[h.jsx("span",{children:$.category}),h.jsx("span",{children:$.readTime})]})]},$.id))}),h.jsxs("div",{className:"p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg mt-auto text-[10px]",children:[h.jsx("span",{className:"font-bold text-amber-300 block mb-0.5",children:"Medium Syndicate"}),h.jsx("p",{className:"text-zinc-500 leading-normal font-sans",children:"Curated articles focus on the overlapping spheres of diagnostic ML architectures and UX."})]})]}),h.jsxs("div",{className:"flex-1 space-y-3 relative",children:[h.jsxs("div",{className:"bg-zinc-950/60 border border-zinc-900 p-3 rounded-lg flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(fc,{className:"w-4 h-4 text-amber-400 animate-pulse"}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[10px] text-zinc-400 uppercase font-mono border-zinc-800 pr-1 select-none",children:"SYSTÉME NARRATOR"}),h.jsx("p",{className:"text-[11px] text-white font-bold select-text",children:"Read aloud with synthesized clinical AI speech?"})]})]}),h.jsx("div",{className:"flex items-center gap-1",children:ie===999?h.jsxs("button",{onClick:ji,className:"bg-red-950 hover:bg-red-900 text-red-300 border border-red-800 px-3 py-1 text-[10px] rounded flex items-center gap-1 cursor-pointer font-bold",children:[h.jsx(dc,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Stop Narration"})]}):h.jsxs("button",{onClick:()=>Xn(Qe.content,999),className:"bg-amber-600 hover:bg-amber-500 text-white border border-amber-400 px-3 py-1 text-[10px] rounded flex items-center gap-1 cursor-pointer font-bold",children:[h.jsx(Hy,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Play Voiceover"})]})})]}),h.jsxs("div",{className:"border-b border-zinc-850 pb-2",children:[h.jsxs("span",{className:"text-[9.5px] bg-amber-500/20 text-amber-300 border border-amber-500/35 px-1.5 py-0.5 rounded uppercase font-mono",children:[Qe.category," COLUMN"]}),h.jsx("h3",{className:"text-xs font-black text-white tracking-snug mt-1.5 leading-relaxed select-text",children:Qe.title}),h.jsxs("span",{className:"text-[9px] text-zinc-500 font-mono uppercase tracking-wider block mt-1",children:["Written on ",Qe.date," · ",Qe.readTime]})]}),h.jsx("div",{className:"text-[10.5px] leading-relaxed text-slate-300 font-sans select-all font-normal space-y-2 mt-2 max-h-[180px] overflow-y-auto pr-1",children:h.jsx("p",{children:Qe.content})})]})]}),x==="garden"&&h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[h.jsx("span",{className:"bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"Topological Semantics Mapping"}),h.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Interconnected Semantic Knowledge Field"})]}),h.jsxs("div",{children:[h.jsx("span",{className:xn.panelHeader,children:"INTERACTIVE CONCEPT NODES"}),h.jsxs("div",{className:"relative h-44 bg-zinc-950 p-2 border border-zinc-900 rounded-lg overflow-hidden flex items-center justify-center",children:[h.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-35"}),h.jsx("div",{className:"relative w-full h-full",children:fn.gardenNodes.map(($,Ce)=>{const Ge=Ce*11%80+10,Je=Ce*7%65+15,mt=De===$.id;return h.jsx("button",{onMouseEnter:()=>{Ae($.id),Ze(1100,.01)},onMouseLeave:()=>Ae(null),style:{left:`${Ge}%`,top:`${Je}%`},className:`absolute -translate-x-1/2 -translate-y-1/2 p-1.5 py-0.5 rounded border text-[9px] transition-all cursor-pointer font-mono ${mt?"bg-[#00ffcc] text-black border-[#00ffcc] scale-110 shadow-[0_0_8px_#00ffcc] z-50":"bg-zinc-900/60 border-zinc-800 text-zinc-400"}`,children:$.label},$.id)})})]})]}),h.jsxs("div",{className:"bg-zinc-950 p-3 border border-zinc-900 rounded-lg min-h-[50px] select-text",children:[h.jsx("span",{className:"font-bold text-cyan-300 block text-[9.5px] uppercase font-mono tracking-widest mb-1",children:"Active Node Spectrum Details:"}),De?h.jsxs("p",{className:"text-[10px] text-zinc-400 leading-normal font-sans",children:[De==="nlp"&&"Clinical NLP: Integrates semantic transformers explicitly tuned on Reddit discourse corpus mapping mental distress.",De==="transformers"&&"Transformers: Multi-attention neural architectures providing topological weights maps.",De==="depression"&&"Depression Dialectics: Analysis of negation markers and cognitive distortions.",De==="ethics"&&"Research Ethics: Strict patient confidentiality controls verified against strict healthcare safety parameters.",De==="saas"&&"AI SaaS: Low-latency scale-to-zero container workloads deployed across GCP Kubernetes mesh integrations.",!["nlp","transformers","depression","ethics","saas"].includes(De)&&`Semantic connection active on ${De}. High performance clustering coefficient evaluated.`]}):h.jsx("p",{className:"text-[10px] text-zinc-500 font-sans",children:"Hover on any interactive concept node above to evaluate corresponding diagnostic dependencies..."})]})]}),x==="resume"&&h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2c2d3a] pb-2",children:[h.jsxs("div",{children:[h.jsx("span",{className:"bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"VIRTUAL RESUME ARCHITECT"}),h.jsx("h3",{className:"text-sm font-extrabold text-white mt-1",children:"Interactively Tailored Professional Profile"})]}),h.jsxs("button",{onClick:()=>{window.print(),Ze(1100,.05)},className:"bg-zinc-950 text-zinc-300 border border-zinc-800 hover:text-white px-2.5 py-1 rounded text-[10px] flex items-center gap-1 cursor-pointer font-bold mt-2 sm:mt-0",children:[h.jsx(Qd,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Print Resume Draft"})]})]}),h.jsxs("div",{className:"bg-zinc-950 p-2.5 border border-zinc-900 rounded-lg select-none",children:[h.jsx("span",{className:"text-[10px] text-zinc-500 font-bold block mb-1",children:"CONFIGURE AUDIENCE TAILORING SYSTEM:"}),h.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1.5 text-center",children:[{id:"recruiter",label:"HR / Recruiter",text:"Stresses full-stack frameworks, production scale parameters, and GCP deployment latency F1 scores."},{id:"investor",label:"Venture Capital",text:"Emphasizes SaaS monetization indices, model scaling cost reductions, and architectural automation."},{id:"founder",label:"Startups / Founder",text:"Highlights rapid zero-to-one product engineering, Docker stacks, and low-latency API integration."},{id:"researcher",label:"Clinical Academics",text:"Focuses on linguistic models, peer-reviewed indices, topological sentiment classification levels, and statistical dataset weights."}].map($=>h.jsxs("button",{onClick:()=>{dt($.id),Ze(800,.02)},className:`p-2 rounded-lg border text-[10px] text-left flex flex-col gap-0.5 capitalize transition-all cursor-pointer ${rt===$.id?"bg-pink-500/10 border-pink-500/30 text-pink-300 font-bold":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[h.jsxs("span",{children:["👤 ",$.label]}),h.jsx("span",{className:"text-[8px] opacity-70 font-normal leading-normal",children:$.text})]},$.id))})]}),h.jsxs("div",{className:"bg-zinc-950 p-4 border border-zinc-900 rounded-lg text-[10.5px] leading-relaxed max-h-[220px] overflow-y-auto font-sans text-slate-300 pr-1 select-text",children:[h.jsxs("div",{className:"border-b border-zinc-850 pb-2 mb-2 text-center select-text",children:[h.jsx("h4",{className:"text-xs font-black text-white uppercase tracking-wider",children:fn.name}),h.jsx("span",{className:"text-[9px] text-[#00ffcc] font-mono tracking-widest",children:fn.title})]}),rt==="recruiter"&&h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-extrabold text-[#00ffcc] block text-[9.5px] uppercase font-mono",children:"EXECUTIVE SUMMARY (RECRUITER ALIGNED)"}),h.jsx("p",{children:"Result-oriented AI engineer possessing over 6 years of contiguous development building fast-response classification models and robust, horizontally-scaled TypeScript SaaS applications with absolute type-safety protocols."})]}),h.jsxs("div",{children:[h.jsx("span",{className:"font-extrabold text-[#00ffcc] block text-[9.5px] uppercase font-mono",children:"CORE TECHNICAL SPECIFICATIONS"}),h.jsx("p",{children:"React/Next.js, Tailwind v4, Node.js, Go microservices, Python PyTorch matrix operations, PostgreSQL schemas, Redis caches, and Docker container orchestration."})]})]}),rt==="investor"&&h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-extrabold text-[#ebd8fb] block text-[9.5px] uppercase font-mono",children:"STRATEGIC SYNOPSIS (VENTURE CAPITAL ALIGNED)"}),h.jsx("p",{children:"Product developer specializing in compiling scalable business models. Highly skilled at engineering zero-cold-start ML SaaS containers, driving serverless scale-to-zero GCP costs, and structuring predictive customer diagnostics panels decreasing friction indices by up to 42%."})]}),h.jsxs("div",{children:[h.jsx("span",{className:"font-extrabold text-[#ebd8fb] block text-[9.5px] uppercase font-mono",children:"PROVEN MONETIZATION HIGHLIGHTS"}),h.jsx("p",{children:"Built SafeSide prediction engines processing live football simulation data in real-time, executing Poisson risk evaluation algorithms with 0.88 F1 metric scores."})]})]}),rt==="founder"&&h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-extrabold text-amber-300 block text-[9.5px] uppercase font-mono",children:"PRODUCT FOUNDRY PROTOCOL (FOUNDER ALIGNED)"}),h.jsx("p",{children:"High-tempo zero-to-one software architect constructing high-performance platforms immediately on demand. Combines outstanding visual UI craftsmanship with decoupled scalable database designs, providing functional, production-ready systems without overhead."})]}),h.jsxs("div",{children:[h.jsx("span",{className:"font-extrabold text-amber-300 block text-[9.5px] uppercase font-mono",children:"CORE FLUIDITY TOOLS"}),h.jsx("p",{children:"TypeScript endpoints, instant responsive Tailwind designs, container networks, vector caches, and real-time bimodal communication interfaces."})]})]}),rt==="researcher"&&h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-extrabold text-emerald-300 block text-[9.5px] uppercase font-mono",children:"RESEARCH STATEMENT (ACADEMIC ALIGNED)"}),h.jsx("p",{children:"Quantitative researcher researching the diagnostic intersection of linguistics analytics and mental wellness forums. Formulating custom bidirectional classification weights metrics that leverage fine-grained RoBERTa embeddings to map emotional distress on social media platforms."})]}),h.jsxs("div",{children:[h.jsx("span",{className:"font-extrabold text-emerald-300 block text-[9.5px] uppercase font-mono",children:"ACADEMIC RESEARCH TRACK RECORD"}),h.jsx("p",{children:"First-named author on clinical papers (RoBERTa depression classifier F1 accuracy of 0.914 against traditional baselines of 0.781). Outlined topological multidimensional sentiment models."})]})]})]})]}),x==="timeline"&&h.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[h.jsxs("div",{className:"w-full md:w-52 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2 select-none",children:[h.jsx("span",{className:xn.panelHeader,children:"CHRONOLOGY INDEX"}),h.jsx("div",{className:"space-y-1.5",children:fn.timeline.map($=>h.jsxs("button",{onClick:()=>{ot($),Ze(800,.03)},className:`w-full text-left p-2 rounded-lg border flex items-center justify-between transition-all cursor-pointer ${ft.year===$.year?"bg-sky-500/10 border-sky-500/30 text-sky-300 font-bold":"bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950"}`,children:[h.jsx("span",{className:"text-[10.5px]",children:$.company}),h.jsx("span",{className:"bg-zinc-900 px-1.5 py-0.5 rounded text-[8.5px] font-mono",children:$.year})]},$.year))})]}),h.jsxs("div",{className:"flex-1 space-y-3",children:[h.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[h.jsxs("span",{className:"bg-sky-500/10 text-sky-300 border border-sky-500/20 px-1 py-0.5 rounded text-[9.5px] font-mono",children:["YEAR: ",ft.year," EXP"]}),h.jsx("h4",{className:"text-xs font-black text-white mt-1.5",children:ft.title}),h.jsxs("span",{className:"text-[9.5px] text-zinc-500 font-serif block",children:[ft.company," · Role: ",ft.role]})]}),h.jsx("p",{className:"text-[11px] leading-relaxed text-zinc-400 font-sans select-text",children:ft.description}),h.jsxs("div",{className:"space-y-2 select-text",children:[h.jsx("span",{className:xn.panelHeader,children:"HIGHLIGHT ACCOMPLISHMENTS"}),h.jsx("ul",{className:"space-y-1.5 pl-3 list-disc text-[10.5px] text-slate-300 leading-normal",children:ft.achievements.map(($,Ce)=>h.jsx("li",{className:"marker:text-sky-400",children:$},Ce))})]}),h.jsxs("div",{className:"bg-zinc-950/40 p-2.5 border border-zinc-900 rounded-lg mt-3",children:[h.jsx("span",{className:"font-bold text-zinc-300 block text-[9.5px] uppercase font-mono tracking-widest mb-1.5",children:"INTEGRATED TECH GRID"}),h.jsx("div",{className:"flex flex-wrap gap-1 select-none",children:ft.technologies.map($=>h.jsx("span",{className:"bg-zinc-900 text-slate-400 border border-zinc-800 rounded px-1.5 font-mono text-[9px]",children:$},$))})]})]})]}),x==="skills"&&h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2 flex-col gap-0.5",children:[h.jsx("span",{className:"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"Observatory Deck"}),h.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Linguistic, Structural & Compute Matrices"})]}),h.jsx("div",{className:"flex items-center gap-2 bg-zinc-950/60 p-1 border border-zinc-900 rounded-lg overflow-x-auto scrollbar-none select-none",children:["all","AI/ML","Frontend","Backend","Research","Systems"].map($=>h.jsx("button",{onClick:()=>{At($),Ze(800,.02)},className:`text-[9.5px] px-2.5 py-1 rounded capitalize cursor-pointer transition-colors ${lt===$?"bg-indigo-600 font-bold text-white shadow-[0_0_8px_#4f46e5]":"bg-transparent text-zinc-500 hover:text-zinc-300"}`,children:$==="all"?"All Matrices":$},$))}),h.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[220px] overflow-y-auto p-1 scrollbar-none",children:Xi.map($=>{const Ce=$.weight===5?"border-sky-500/50 bg-sky-500/5 text-sky-200":$.weight===4?"border-indigo-500/30 bg-indigo-500/5 text-indigo-200":"border-zinc-800 bg-zinc-900/40 text-zinc-400";return h.jsxs("div",{onClick:()=>Ze(700+$.weight*100,.03),className:`p-2.5 rounded-lg border text-center cursor-pointer transition-all hover:scale-103 select-none flex flex-col items-center justify-center gap-1 relative overflow-hidden ${Ce}`,children:[h.jsx("span",{className:"text-[10.5px] font-bold md:tracking-tight font-sans text-stone-100",children:$.name}),h.jsx("span",{className:"text-[8px] opacity-75 uppercase tracking-widest font-mono text-zinc-400",children:$.category}),h.jsx("div",{className:"flex items-center gap-0.5 mt-1",children:Array.from({length:5}).map((Ge,Je)=>h.jsx("span",{className:`w-1 h-1 rounded-full ${Je<$.weight?"bg-indigo-400 shadow-[0_0_4px_#818cf8]":"bg-zinc-800"}`},Je))})]},$.name)})})]}),x==="brief"&&h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2",children:[h.jsx("span",{className:"bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase",children:"INTELLIGENT INTAKE PROCESS"}),h.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Initiate Feasibility Evaluation Strategy"})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"space-y-2.5",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"VENTURE DOMAIN:"}),h.jsxs("select",{value:Ne.projectType,onChange:$=>pe({...Ne,projectType:$.target.value}),className:"w-full bg-black/60 border border-zinc-800 rounded px-2.5 py-1.5 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 cursor-pointer",children:[h.jsx("option",{children:"AI Engineering & LLMs"}),h.jsx("option",{children:"Clinical NLP & Mental State analysis"}),h.jsx("option",{children:"SaaS Automation Development"}),h.jsx("option",{children:"Interactive UI/UX Projects"})]})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"FINANCIAL BOUNDS:"}),h.jsxs("select",{value:Ne.budget,onChange:$=>pe({...Ne,budget:$.target.value}),className:"w-full bg-black/60 border border-zinc-800 rounded px-2 text-slate-100 text-[10.5px] py-1.5 outline-hidden cursor-pointer",children:[h.jsx("option",{children:"$5k - $10k"}),h.jsx("option",{children:"$10k - $25k"}),h.jsx("option",{children:"$25k+"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"TIMELINE PROFILE:"}),h.jsxs("select",{value:Ne.timeline,onChange:$=>pe({...Ne,timeline:$.target.value}),className:"w-full bg-black/60 border border-zinc-800 rounded px-2 text-slate-100 text-[10.5px] py-1.5 outline-hidden cursor-pointer",children:[h.jsx("option",{children:"1-3 Months"}),h.jsx("option",{children:"3 Months-half year"}),h.jsx("option",{children:"Complex Multiphase"})]})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-[10px] text-zinc-400 block mb-1 uppercase font-mono",children:"STRATEGIC GOALS / OBJECTIVES:"}),h.jsx("textarea",{value:Ne.goals,onChange:$=>pe({...Ne,goals:$.target.value}),rows:3,placeholder:"Detail parameters (e.g. evaluating clinical texts via custom token systems, building offline CRDT platforms)",className:"w-full bg-black/60 border border-zinc-800 rounded p-2 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 placeholder-zinc-650"})]}),h.jsx("button",{onClick:gs,disabled:!Ne.goals.trim()||Fe,className:"w-full bg-rose-600 hover:bg-rose-500 text-white border border-rose-400 py-2 rounded-lg text-[10.5px] cursor-pointer font-bold tracking-tight shadow-lg shadow-rose-950/50 flex items-center justify-center gap-1.5",children:Fe?h.jsxs(h.Fragment,{children:[h.jsx(Ho,{className:"w-3.5 h-3.5 animate-spin"}),h.jsx("span",{children:"Deconstruct parameters algorithms..."})]}):h.jsxs(h.Fragment,{children:[h.jsx(tS,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Evaluate Feasibility Strategy"})]})})]}),h.jsxs("div",{className:"bg-zinc-950/40 border border-zinc-900 rounded-lg p-3.5 flex flex-col justify-between min-h-[220px]",children:[h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-rose-300 block text-[9.5px] uppercase font-mono tracking-widest border-b border-zinc-850 pb-1.5 mb-2.5",children:"ASSESSMENT & ARCHITECTURE STRATEGY:"}),me?h.jsx("p",{className:"text-[11px] text-slate-300 leading-relaxed font-sans select-text",children:me}):h.jsx("div",{className:"text-zinc-600 font-sans text-[10.5px] italic text-center py-10",children:"Formulate objectives on LHS & execute evaluation to render Gemini predictive architecture recommendations..."})]}),me&&h.jsxs("div",{className:"border-t border-zinc-900 pt-2 text-[10px] flex items-center justify-between mt-4",children:[h.jsxs("span",{className:"text-zinc-500 flex items-center gap-1 font-mono",children:[h.jsx(ov,{className:"w-3 h-3 text-emerald-400"})," API SECURE Rails"]}),h.jsx("button",{onClick:()=>{alert("Strategy Brief dispatched. Farhan's team will contact you securely."),Pe(null),Ze(1100,.05)},className:"bg-emerald-600 hover:bg-emerald-500 text-white font-bold p-1 px-3 border border-emerald-400 rounded text-[9.5px] cursor-pointer",children:"Dispatch Brief"})]})]})]})]}),x==="whiteboard"&&h.jsx(v2,{theme:N,triggerSound:Ze}),x==="builds"&&h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"border-b border-[#2c2d3a] pb-2 flex-col gap-0.5",children:[h.jsx("span",{className:"bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono",children:"TELEMETRY DIAGNOSTICS"}),h.jsx("h3",{className:"text-xs font-black text-white mt-1",children:"Continuous Development & Deployment Releases"})]}),h.jsx("div",{className:"space-y-3.5 max-h-[300px] overflow-y-auto pr-1",children:fn.buildLogs.map($=>h.jsxs("div",{className:"bg-zinc-950/40 p-3.5 border border-[#2d2f3d] rounded-lg space-y-2 select-text",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-850 pb-1.5",children:[h.jsxs("div",{className:"flex items-center gap-1.5 text-white font-bold",children:[h.jsx("span",{className:"text-teal-400 font-mono text-[9.5px] p-0.5 px-1.5 border border-teal-500/20 bg-teal-500/5 rounded",children:$.version}),h.jsx("span",{className:"text-[11px] font-sans truncate",children:$.title})]}),h.jsx("span",{className:"text-[9.5px] text-zinc-500 font-mono",children:$.date})]}),h.jsx("p",{className:"text-[10.5px] text-slate-400 leading-relaxed font-sans",children:$.description}),h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-zinc-300 block text-[9px] uppercase font-mono tracking-widest mb-1",children:"TASKS DEPLOYED"}),h.jsx("ul",{className:"space-y-1 pl-3 text-[10px] text-zinc-400 list-disc leading-normal font-sans",children:$.tasksCompleted.map((Ce,Ge)=>h.jsx("li",{children:Ce},Ge))})]}),h.jsxs("div",{className:"border-t border-zinc-900 pt-1.5",children:[h.jsx("span",{className:"font-bold text-teal-300 block text-[9px] uppercase font-mono tracking-widest mb-1",children:"METRIC SHIFTS DETECTED"}),h.jsx("div",{className:"flex flex-wrap gap-2 text-[10px] font-mono select-none",children:$.metricsChanged.map((Ce,Ge)=>h.jsxs("span",{className:"bg-zinc-90 w-full flex items-center justify-between p-1.5 rounded border border-zinc-900 text-stone-300",children:[h.jsxs("span",{children:[Ce.metric,":"]}),h.jsxs("span",{className:"text-teal-400 font-bold",children:[Ce.before," ➔ ",Ce.after]})]},Ge))})]})]},$.id))})]})]})]},x)})]}),h.jsxs("footer",{className:"h-16 bg-black/45 backdrop-blur-2xl border-t border-zinc-800/40 flex items-center justify-center relative select-none",children:[h.jsx("div",{className:"flex items-center gap-2 px-4 py-1.5 bg-zinc-950/65 border border-zinc-800/60 rounded-2xl shadow-xl max-w-[95vw] overflow-x-auto scrollbar-none select-none",children:pi.map(x=>{const O=x.icon,k=Q.includes(x.id),J=he===x.id&&!K.includes(x.id);return h.jsxs("button",{onClick:()=>{k?J?gn(x.id):(W(x.id),ue(ne=>ne.filter(Ie=>Ie!==x.id))):Gt(x.id)},className:`p-2 rounded-xl transition-all relative cursor-pointer ${x.color} transform hover:scale-129 active:scale-95 duration-100`,title:x.label,children:[h.jsx(O,{className:"w-5 h-5"}),k&&h.jsx("span",{className:"absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_5px_#38bdf8]"}),J&&h.jsx("span",{className:"absolute inset-x-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#00ffcc] to-purple-500 rounded filter blur-xs"})]},x.id)})}),h.jsx("div",{className:"absolute right-4 hidden md:flex items-center gap-1.5",children:h.jsx("button",{type:"button",onClick:()=>{$e(!0),Ze(800,.03)},className:"p-1 px-3 text-slate-400 hover:text-white rounded border border-zinc-800/80 hover:bg-zinc-950 text-[10px] font-mono cursor-pointer",children:"Terminal Commands (CMD+K)"})})]}),ht&&h.jsx("div",{className:"fixed inset-0 bg-[#020204]/85 z-[1000] flex items-start justify-center pt-[15vh] px-4 font-normal",children:h.jsxs("div",{className:"w-full max-w-lg bg-[#0e0f17] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[60vh] select-none animate-scale-up",children:[h.jsxs("div",{className:"flex items-center gap-3 p-3 bg-zinc-950 border-b border-zinc-850",children:[h.jsx(ix,{className:"w-4 h-4 text-sky-400"}),h.jsx("input",{type:"text",value:q,onChange:x=>Nt(x.target.value),placeholder:"Search projects, research papers, tech stack node keys, commands...",className:"flex-1 bg-transparent text-slate-105 font-sans outline-hidden border-none text-xs text-white",autoFocus:!0}),h.jsx("button",{onClick:()=>{$e(!1),Ze(400,.02)},className:"p-1 text-zinc-500 hover:text-white rounded",children:h.jsx(gd,{className:"w-4 h-4"})})]}),h.jsx("div",{className:"flex-1 overflow-y-auto p-2 scrollbar-none max-h-[300px]",children:q.trim().length===0?h.jsxs("div",{className:"space-y-2",children:[h.jsx("div",{className:"text-[10px] text-zinc-500 font-bold px-2 block uppercase tracking-wide",children:"SYSTEM DIAGNOSTIC CORES:"}),h.jsx("button",{onClick:()=>{Ci(),$e(!1)},className:"w-full text-left p-2 hover:bg-zinc-900 rounded-lg text-emerald-300 font-bold flex items-center gap-2 cursor-pointer text-[10.5px]",children:"🚀 Trigger system AI Guided Tour with synthesized Voice narrations"}),h.jsx("button",{onClick:()=>{Gt("brief"),$e(!1)},className:"w-full text-left p-2 hover:bg-zinc-900 rounded-lg text-indigo-300 font-bold flex items-center gap-2 cursor-pointer text-[10.5px]",children:"💡 Open Mission Intake Consultation Workspace"}),h.jsx("div",{className:"text-[10px] text-zinc-550 italic font-sans px-2",children:"Enter queries parsing index models above to match academic research text parameters..."})]}):h.jsxs("div",{className:"space-y-1",children:[h.jsxs("div",{className:"text-[10px] text-zinc-500 px-2 font-bold uppercase tracking-widest border-b border-zinc-900 pb-1 mb-1.5",children:["MATCHED WORKSPACE PARAMS (",Ni.length,")"]}),Ni.length>0?Ni.map((x,O)=>h.jsxs("button",{onClick:x.action,className:"w-full text-left p-3 hover:bg-zinc-900 rounded-lg flex items-center justify-between transition-colors border border-transparent hover:border-zinc-800 cursor-pointer text-[11px]",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[9px] bg-sky-500/10 text-sky-400 border border-sky-500/20 px-1 py-0.5 rounded font-mono mr-2 uppercase",children:x.type}),h.jsx("span",{className:"text-white font-bold font-sans",children:x.title})]}),h.jsx("span",{className:"text-[10px] text-zinc-500",children:x.subtitle})]},O)):h.jsx("div",{className:"text-center text-zinc-500 text-[11px] py-6 font-sans",children:"No matching intelligence indices found. Retry key parameters."})]})}),h.jsxs("div",{className:"p-2.5 bg-zinc-950 border-t border-zinc-850 flex items-center justify-between text-[10px] text-zinc-500",children:[h.jsx("span",{className:"font-mono",children:"SEARCH GRID INTEGRATION READY"}),h.jsx("span",{children:"ESC TO EXIT"})]})]})})]})})}iy.createRoot(document.getElementById("root")).render(h.jsx(je.StrictMode,{children:h.jsx(_2,{})}));
