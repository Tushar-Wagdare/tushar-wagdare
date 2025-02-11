(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var L0={exports:{}},Ru={},D0={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=Symbol.for("react.element"),nM=Symbol.for("react.portal"),iM=Symbol.for("react.fragment"),rM=Symbol.for("react.strict_mode"),sM=Symbol.for("react.profiler"),oM=Symbol.for("react.provider"),aM=Symbol.for("react.context"),lM=Symbol.for("react.forward_ref"),uM=Symbol.for("react.suspense"),cM=Symbol.for("react.memo"),fM=Symbol.for("react.lazy"),lm=Symbol.iterator;function dM(t){return t===null||typeof t!="object"?null:(t=lm&&t[lm]||t["@@iterator"],typeof t=="function"?t:null)}var I0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U0=Object.assign,N0={};function co(t,e,n){this.props=t,this.context=e,this.refs=N0,this.updater=n||I0}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function F0(){}F0.prototype=co.prototype;function ph(t,e,n){this.props=t,this.context=e,this.refs=N0,this.updater=n||I0}var mh=ph.prototype=new F0;mh.constructor=ph;U0(mh,co.prototype);mh.isPureReactComponent=!0;var um=Array.isArray,O0=Object.prototype.hasOwnProperty,gh={current:null},k0={key:!0,ref:!0,__self:!0,__source:!0};function B0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)O0.call(e,i)&&!k0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ta,type:t,key:s,ref:o,props:r,_owner:gh.current}}function hM(t,e){return{$$typeof:Ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ta}function pM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cm=/\/+/g;function nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pM(""+t.key):e.toString(36)}function Rl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ta:case nM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+nc(o,0):i,um(r)?(n="",t!=null&&(n=t.replace(cm,"$&/")+"/"),Rl(r,e,n,"",function(u){return u})):r!=null&&(vh(r)&&(r=hM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(cm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",um(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+nc(s,a);o+=Rl(s,e,n,l,r)}else if(l=dM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+nc(s,a++),o+=Rl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Va(t,e,n){if(t==null)return t;var i=[],r=0;return Rl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function mM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Pl={transition:null},gM={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Pl,ReactCurrentOwner:gh};function V0(){throw Error("act(...) is not supported in production builds of React.")}Be.Children={map:Va,forEach:function(t,e,n){Va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Va(t,function(){e++}),e},toArray:function(t){return Va(t,function(e){return e})||[]},only:function(t){if(!vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=co;Be.Fragment=iM;Be.Profiler=sM;Be.PureComponent=ph;Be.StrictMode=rM;Be.Suspense=uM;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gM;Be.act=V0;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=U0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)O0.call(e,l)&&!k0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ta,type:t.type,key:r,ref:s,props:i,_owner:o}};Be.createContext=function(t){return t={$$typeof:aM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:oM,_context:t},t.Consumer=t};Be.createElement=B0;Be.createFactory=function(t){var e=B0.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:lM,render:t}};Be.isValidElement=vh;Be.lazy=function(t){return{$$typeof:fM,_payload:{_status:-1,_result:t},_init:mM}};Be.memo=function(t,e){return{$$typeof:cM,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=Pl.transition;Pl.transition={};try{t()}finally{Pl.transition=e}};Be.unstable_act=V0;Be.useCallback=function(t,e){return Zt.current.useCallback(t,e)};Be.useContext=function(t){return Zt.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};Be.useEffect=function(t,e){return Zt.current.useEffect(t,e)};Be.useId=function(){return Zt.current.useId()};Be.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return Zt.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};Be.useRef=function(t){return Zt.current.useRef(t)};Be.useState=function(t){return Zt.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return Zt.current.useTransition()};Be.version="18.3.1";D0.exports=Be;var Te=D0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vM=Te,_M=Symbol.for("react.element"),yM=Symbol.for("react.fragment"),xM=Object.prototype.hasOwnProperty,SM=vM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MM={key:!0,ref:!0,__self:!0,__source:!0};function z0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)xM.call(e,i)&&!MM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_M,type:t,key:s,ref:o,props:r,_owner:SM.current}}Ru.Fragment=yM;Ru.jsx=z0;Ru.jsxs=z0;L0.exports=Ru;var Q=L0.exports,H0={exports:{}},yn={},G0={exports:{}},W0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,W){var q=L.length;L.push(W);e:for(;0<q;){var oe=q-1>>>1,Se=L[oe];if(0<r(Se,W))L[oe]=W,L[q]=Se,q=oe;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var W=L[0],q=L.pop();if(q!==W){L[0]=q;e:for(var oe=0,Se=L.length,qe=Se>>>1;oe<qe;){var G=2*(oe+1)-1,ne=L[G],pe=G+1,se=L[pe];if(0>r(ne,q))pe<Se&&0>r(se,ne)?(L[oe]=se,L[pe]=q,oe=pe):(L[oe]=ne,L[G]=q,oe=G);else if(pe<Se&&0>r(se,q))L[oe]=se,L[pe]=q,oe=pe;else break e}}return W}function r(L,W){var q=L.sortIndex-W.sortIndex;return q!==0?q:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var W=n(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=L)i(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function x(L){if(y=!1,v(L),!_)if(n(l)!==null)_=!0,j(P);else{var W=n(u);W!==null&&X(x,W.startTime-L)}}function P(L,W){_=!1,y&&(y=!1,h(C),C=-1),p=!0;var q=f;try{for(v(W),d=n(l);d!==null&&(!(d.expirationTime>W)||L&&!b());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,f=d.priorityLevel;var Se=oe(d.expirationTime<=W);W=t.unstable_now(),typeof Se=="function"?d.callback=Se:d===n(l)&&i(l),v(W)}else i(l);d=n(l)}if(d!==null)var qe=!0;else{var G=n(u);G!==null&&X(x,G.startTime-W),qe=!1}return qe}finally{d=null,f=q,p=!1}}var A=!1,w=null,C=-1,T=5,S=-1;function b(){return!(t.unstable_now()-S<T)}function z(){if(w!==null){var L=t.unstable_now();S=L;var W=!0;try{W=w(!0,L)}finally{W?V():(A=!1,w=null)}}else A=!1}var V;if(typeof m=="function")V=function(){m(z)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,J=$.port2;$.port1.onmessage=z,V=function(){J.postMessage(null)}}else V=function(){g(z,0)};function j(L){w=L,A||(A=!0,V())}function X(L,W){C=g(function(){L(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,j(P))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var q=f;f=W;try{return L()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=f;f=L;try{return W()}finally{f=q}},t.unstable_scheduleCallback=function(L,W,q){var oe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?oe+q:oe):q=oe,L){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=q+Se,L={id:c++,callback:W,priorityLevel:L,startTime:q,expirationTime:Se,sortIndex:-1},q>oe?(L.sortIndex=q,e(u,L),n(l)===null&&L===n(u)&&(y?(h(C),C=-1):y=!0,X(x,q-oe))):(L.sortIndex=Se,e(l,L),_||p||(_=!0,j(P))),L},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(L){var W=f;return function(){var q=f;f=W;try{return L.apply(this,arguments)}finally{f=q}}}})(W0);G0.exports=W0;var EM=G0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TM=Te,vn=EM;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var X0=new Set,na={};function ts(t,e){$s(t,e),$s(t+"Capture",e)}function $s(t,e){for(na[t]=e,t=0;t<e.length;t++)X0.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yf=Object.prototype.hasOwnProperty,wM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fm={},dm={};function AM(t){return yf.call(dm,t)?!0:yf.call(fm,t)?!1:wM.test(t)?dm[t]=!0:(fm[t]=!0,!1)}function CM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function RM(t,e,n,i){if(e===null||typeof e>"u"||CM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _h=/[\-:]([a-z])/g;function yh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_h,yh);Ft[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_h,yh);Ft[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_h,yh);Ft[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function xh(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(RM(e,n,r,i)&&(n=null),i||r===null?AM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=TM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),Sh=Symbol.for("react.strict_mode"),xf=Symbol.for("react.profiler"),j0=Symbol.for("react.provider"),Y0=Symbol.for("react.context"),Mh=Symbol.for("react.forward_ref"),Sf=Symbol.for("react.suspense"),Mf=Symbol.for("react.suspense_list"),Eh=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),$0=Symbol.for("react.offscreen"),hm=Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,ic;function No(t){if(ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ic=e&&e[1]||""}return`
`+ic+t}var rc=!1;function sc(t,e){if(!t||rc)return"";rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?No(t):""}function PM(t){switch(t.tag){case 5:return No(t.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return t=sc(t.type,!1),t;case 11:return t=sc(t.type.render,!1),t;case 1:return t=sc(t.type,!0),t;default:return""}}function Ef(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case xs:return"Portal";case xf:return"Profiler";case Sh:return"StrictMode";case Sf:return"Suspense";case Mf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Y0:return(t.displayName||"Context")+".Consumer";case j0:return(t._context.displayName||"Context")+".Provider";case Mh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Eh:return e=t.displayName||null,e!==null?e:Ef(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return Ef(t(e))}catch{}}return null}function bM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ef(e);case 8:return e===Sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function q0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LM(t){var e=q0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ha(t){t._valueTracker||(t._valueTracker=LM(t))}function K0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=q0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tf(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Z0(t,e){e=e.checked,e!=null&&xh(t,"checked",e,!1)}function wf(t,e){Z0(t,e);var n=fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Af(t,e.type,n):e.hasOwnProperty("defaultValue")&&Af(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Af(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fo=Array.isArray;function Bs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Cf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Fo(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function Q0(t,e){var n=fr(e.value),i=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function J0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?J0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ga,e_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DM=["Webkit","ms","Moz","O"];Object.keys(Wo).forEach(function(t){DM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wo[e]=Wo[t]})});function t_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wo.hasOwnProperty(t)&&Wo[t]?(""+e).trim():e+"px"}function n_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=t_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var IM=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pf(t,e){if(e){if(IM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function bf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lf=null;function Th(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Df=null,Vs=null,zs=null;function _m(t){if(t=Ca(t)){if(typeof Df!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Iu(e),Df(t.stateNode,t.type,e))}}function i_(t){Vs?zs?zs.push(t):zs=[t]:Vs=t}function r_(){if(Vs){var t=Vs,e=zs;if(zs=Vs=null,_m(t),e)for(t=0;t<e.length;t++)_m(e[t])}}function s_(t,e){return t(e)}function o_(){}var oc=!1;function a_(t,e,n){if(oc)return t(e,n);oc=!0;try{return s_(t,e,n)}finally{oc=!1,(Vs!==null||zs!==null)&&(o_(),r_())}}function ra(t,e){var n=t.stateNode;if(n===null)return null;var i=Iu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var If=!1;if(Li)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){If=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{If=!1}function UM(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Xo=!1,Kl=null,Zl=!1,Uf=null,NM={onError:function(t){Xo=!0,Kl=t}};function FM(t,e,n,i,r,s,o,a,l){Xo=!1,Kl=null,UM.apply(NM,arguments)}function OM(t,e,n,i,r,s,o,a,l){if(FM.apply(this,arguments),Xo){if(Xo){var u=Kl;Xo=!1,Kl=null}else throw Error(te(198));Zl||(Zl=!0,Uf=u)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function l_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ym(t){if(ns(t)!==t)throw Error(te(188))}function kM(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ym(r),t;if(s===i)return ym(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function u_(t){return t=kM(t),t!==null?c_(t):null}function c_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=c_(t);if(e!==null)return e;t=t.sibling}return null}var f_=vn.unstable_scheduleCallback,xm=vn.unstable_cancelCallback,BM=vn.unstable_shouldYield,VM=vn.unstable_requestPaint,Et=vn.unstable_now,zM=vn.unstable_getCurrentPriorityLevel,wh=vn.unstable_ImmediatePriority,d_=vn.unstable_UserBlockingPriority,Ql=vn.unstable_NormalPriority,HM=vn.unstable_LowPriority,h_=vn.unstable_IdlePriority,Pu=null,ri=null;function GM(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(Pu,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:jM,WM=Math.log,XM=Math.LN2;function jM(t){return t>>>=0,t===0?32:31-(WM(t)/XM|0)|0}var Wa=64,Xa=4194304;function Oo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Oo(a):(s&=o,s!==0&&(i=Oo(s)))}else o=n&~r,o!==0?i=Oo(o):s!==0&&(i=Oo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function YM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $M(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=YM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function p_(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function qM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ah(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function m_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var g_,Ch,v_,__,y_,Ff=!1,ja=[],tr=null,nr=null,ir=null,sa=new Map,oa=new Map,Ki=[],KM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sm(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(e.pointerId)}}function Eo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ca(e),e!==null&&Ch(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ZM(t,e,n,i,r){switch(e){case"focusin":return tr=Eo(tr,t,e,n,i,r),!0;case"dragenter":return nr=Eo(nr,t,e,n,i,r),!0;case"mouseover":return ir=Eo(ir,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return sa.set(s,Eo(sa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,oa.set(s,Eo(oa.get(s)||null,t,e,n,i,r)),!0}return!1}function x_(t){var e=Br(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=l_(n),e!==null){t.blockedOn=e,y_(t.priority,function(){v_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Lf=i,n.target.dispatchEvent(i),Lf=null}else return e=Ca(n),e!==null&&Ch(e),t.blockedOn=n,!1;e.shift()}return!0}function Mm(t,e,n){bl(t)&&n.delete(e)}function QM(){Ff=!1,tr!==null&&bl(tr)&&(tr=null),nr!==null&&bl(nr)&&(nr=null),ir!==null&&bl(ir)&&(ir=null),sa.forEach(Mm),oa.forEach(Mm)}function To(t,e){t.blockedOn===e&&(t.blockedOn=null,Ff||(Ff=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,QM)))}function aa(t){function e(r){return To(r,t)}if(0<ja.length){To(ja[0],t);for(var n=1;n<ja.length;n++){var i=ja[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&To(tr,t),nr!==null&&To(nr,t),ir!==null&&To(ir,t),sa.forEach(e),oa.forEach(e),n=0;n<Ki.length;n++)i=Ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)x_(n),n.blockedOn===null&&Ki.shift()}var Hs=Fi.ReactCurrentBatchConfig,eu=!0;function JM(t,e,n,i){var r=et,s=Hs.transition;Hs.transition=null;try{et=1,Rh(t,e,n,i)}finally{et=r,Hs.transition=s}}function eE(t,e,n,i){var r=et,s=Hs.transition;Hs.transition=null;try{et=4,Rh(t,e,n,i)}finally{et=r,Hs.transition=s}}function Rh(t,e,n,i){if(eu){var r=Of(t,e,n,i);if(r===null)vc(t,e,i,tu,n),Sm(t,i);else if(ZM(r,t,e,n,i))i.stopPropagation();else if(Sm(t,i),e&4&&-1<KM.indexOf(t)){for(;r!==null;){var s=Ca(r);if(s!==null&&g_(s),s=Of(t,e,n,i),s===null&&vc(t,e,i,tu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else vc(t,e,i,null,n)}}var tu=null;function Of(t,e,n,i){if(tu=null,t=Th(i),t=Br(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=l_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tu=t,null}function S_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zM()){case wh:return 1;case d_:return 4;case Ql:case HM:return 16;case h_:return 536870912;default:return 16}default:return 16}}var Ji=null,Ph=null,Ll=null;function M_(){if(Ll)return Ll;var t,e=Ph,n=e.length,i,r="value"in Ji?Ji.value:Ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ll=r.slice(t,1<i?1-i:void 0)}function Dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ya(){return!0}function Em(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ya:Em,this.isPropagationStopped=Em,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ya)},persist:function(){},isPersistent:Ya}),e}var fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bh=xn(fo),Aa=gt({},fo,{view:0,detail:0}),tE=xn(Aa),lc,uc,wo,bu=gt({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(lc=t.screenX-wo.screenX,uc=t.screenY-wo.screenY):uc=lc=0,wo=t),lc)},movementY:function(t){return"movementY"in t?t.movementY:uc}}),Tm=xn(bu),nE=gt({},bu,{dataTransfer:0}),iE=xn(nE),rE=gt({},Aa,{relatedTarget:0}),cc=xn(rE),sE=gt({},fo,{animationName:0,elapsedTime:0,pseudoElement:0}),oE=xn(sE),aE=gt({},fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lE=xn(aE),uE=gt({},fo,{data:0}),wm=xn(uE),cE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dE[t])?!!e[t]:!1}function Lh(){return hE}var pE=gt({},Aa,{key:function(t){if(t.key){var e=cE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lh,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mE=xn(pE),gE=gt({},bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Am=xn(gE),vE=gt({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lh}),_E=xn(vE),yE=gt({},fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),xE=xn(yE),SE=gt({},bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ME=xn(SE),EE=[9,13,27,32],Dh=Li&&"CompositionEvent"in window,jo=null;Li&&"documentMode"in document&&(jo=document.documentMode);var TE=Li&&"TextEvent"in window&&!jo,E_=Li&&(!Dh||jo&&8<jo&&11>=jo),Cm=" ",Rm=!1;function T_(t,e){switch(t){case"keyup":return EE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function wE(t,e){switch(t){case"compositionend":return w_(e);case"keypress":return e.which!==32?null:(Rm=!0,Cm);case"textInput":return t=e.data,t===Cm&&Rm?null:t;default:return null}}function AE(t,e){if(Ms)return t==="compositionend"||!Dh&&T_(t,e)?(t=M_(),Ll=Ph=Ji=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E_&&e.locale!=="ko"?null:e.data;default:return null}}var CE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CE[t.type]:e==="textarea"}function A_(t,e,n,i){i_(i),e=nu(e,"onChange"),0<e.length&&(n=new bh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Yo=null,la=null;function RE(t){O_(t,0)}function Lu(t){var e=ws(t);if(K0(e))return t}function PE(t,e){if(t==="change")return e}var C_=!1;if(Li){var fc;if(Li){var dc="oninput"in document;if(!dc){var bm=document.createElement("div");bm.setAttribute("oninput","return;"),dc=typeof bm.oninput=="function"}fc=dc}else fc=!1;C_=fc&&(!document.documentMode||9<document.documentMode)}function Lm(){Yo&&(Yo.detachEvent("onpropertychange",R_),la=Yo=null)}function R_(t){if(t.propertyName==="value"&&Lu(la)){var e=[];A_(e,la,t,Th(t)),a_(RE,e)}}function bE(t,e,n){t==="focusin"?(Lm(),Yo=e,la=n,Yo.attachEvent("onpropertychange",R_)):t==="focusout"&&Lm()}function LE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lu(la)}function DE(t,e){if(t==="click")return Lu(e)}function IE(t,e){if(t==="input"||t==="change")return Lu(e)}function UE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:UE;function ua(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!yf.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function Dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Im(t,e){var n=Dm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dm(n)}}function P_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?P_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function b_(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function Ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NE(t){var e=b_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&P_(n.ownerDocument.documentElement,n)){if(i!==null&&Ih(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Im(n,s);var o=Im(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FE=Li&&"documentMode"in document&&11>=document.documentMode,Es=null,kf=null,$o=null,Bf=!1;function Um(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bf||Es==null||Es!==ql(i)||(i=Es,"selectionStart"in i&&Ih(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$o&&ua($o,i)||($o=i,i=nu(kf,"onSelect"),0<i.length&&(e=new bh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Es)))}function $a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},hc={},L_={};Li&&(L_=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Du(t){if(hc[t])return hc[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in L_)return hc[t]=e[n];return t}var D_=Du("animationend"),I_=Du("animationiteration"),U_=Du("animationstart"),N_=Du("transitionend"),F_=new Map,Nm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){F_.set(t,e),ts(e,[t])}for(var pc=0;pc<Nm.length;pc++){var mc=Nm[pc],OE=mc.toLowerCase(),kE=mc[0].toUpperCase()+mc.slice(1);_r(OE,"on"+kE)}_r(D_,"onAnimationEnd");_r(I_,"onAnimationIteration");_r(U_,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(N_,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function Fm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,OM(i,e,void 0,t),t.currentTarget=null}function O_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Fm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Fm(r,a,u),s=l}}}if(Zl)throw t=Uf,Zl=!1,Uf=null,t}function ut(t,e){var n=e[Wf];n===void 0&&(n=e[Wf]=new Set);var i=t+"__bubble";n.has(i)||(k_(e,t,2,!1),n.add(i))}function gc(t,e,n){var i=0;e&&(i|=4),k_(n,t,i,e)}var qa="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[qa]){t[qa]=!0,X0.forEach(function(n){n!=="selectionchange"&&(BE.has(n)||gc(n,!1,t),gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qa]||(e[qa]=!0,gc("selectionchange",!1,e))}}function k_(t,e,n,i){switch(S_(e)){case 1:var r=JM;break;case 4:r=eE;break;default:r=Rh}n=r.bind(null,e,n,t),r=void 0,!If||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function vc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Br(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}a_(function(){var u=s,c=Th(n),d=[];e:{var f=F_.get(t);if(f!==void 0){var p=bh,_=t;switch(t){case"keypress":if(Dl(n)===0)break e;case"keydown":case"keyup":p=mE;break;case"focusin":_="focus",p=cc;break;case"focusout":_="blur",p=cc;break;case"beforeblur":case"afterblur":p=cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=iE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_E;break;case D_:case I_:case U_:p=oE;break;case N_:p=xE;break;case"scroll":p=tE;break;case"wheel":p=ME;break;case"copy":case"cut":case"paste":p=lE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Am}var y=(e&4)!==0,g=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var m=u,v;m!==null;){v=m;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,h!==null&&(x=ra(m,h),x!=null&&y.push(fa(m,x,v)))),g)break;m=m.return}0<y.length&&(f=new p(f,_,null,n,c),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Lf&&(_=n.relatedTarget||n.fromElement)&&(Br(_)||_[Di]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Br(_):null,_!==null&&(g=ns(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=Tm,x="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Am,x="onPointerLeave",h="onPointerEnter",m="pointer"),g=p==null?f:ws(p),v=_==null?f:ws(_),f=new y(x,m+"leave",p,n,c),f.target=g,f.relatedTarget=v,x=null,Br(c)===u&&(y=new y(h,m+"enter",_,n,c),y.target=v,y.relatedTarget=g,x=y),g=x,p&&_)t:{for(y=p,h=_,m=0,v=y;v;v=ss(v))m++;for(v=0,x=h;x;x=ss(x))v++;for(;0<m-v;)y=ss(y),m--;for(;0<v-m;)h=ss(h),v--;for(;m--;){if(y===h||h!==null&&y===h.alternate)break t;y=ss(y),h=ss(h)}y=null}else y=null;p!==null&&Om(d,f,p,y,!1),_!==null&&g!==null&&Om(d,g,_,y,!0)}}e:{if(f=u?ws(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var P=PE;else if(Pm(f))if(C_)P=IE;else{P=LE;var A=bE}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=DE);if(P&&(P=P(t,u))){A_(d,P,n,c);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Af(f,"number",f.value)}switch(A=u?ws(u):window,t){case"focusin":(Pm(A)||A.contentEditable==="true")&&(Es=A,kf=u,$o=null);break;case"focusout":$o=kf=Es=null;break;case"mousedown":Bf=!0;break;case"contextmenu":case"mouseup":case"dragend":Bf=!1,Um(d,n,c);break;case"selectionchange":if(FE)break;case"keydown":case"keyup":Um(d,n,c)}var w;if(Dh)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ms?T_(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(E_&&n.locale!=="ko"&&(Ms||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ms&&(w=M_()):(Ji=c,Ph="value"in Ji?Ji.value:Ji.textContent,Ms=!0)),A=nu(u,C),0<A.length&&(C=new wm(C,t,null,n,c),d.push({event:C,listeners:A}),w?C.data=w:(w=w_(n),w!==null&&(C.data=w)))),(w=TE?wE(t,n):AE(t,n))&&(u=nu(u,"onBeforeInput"),0<u.length&&(c=new wm("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=w))}O_(d,e)})}function fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ra(t,n),s!=null&&i.unshift(fa(t,s,r)),s=ra(t,e),s!=null&&i.push(fa(t,s,r))),t=t.return}return i}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Om(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ra(n,s),l!=null&&o.unshift(fa(n,l,a))):r||(l=ra(n,s),l!=null&&o.push(fa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var VE=/\r\n?/g,zE=/\u0000|\uFFFD/g;function km(t){return(typeof t=="string"?t:""+t).replace(VE,`
`).replace(zE,"")}function Ka(t,e,n){if(e=km(e),km(t)!==e&&n)throw Error(te(425))}function iu(){}var Vf=null,zf=null;function Hf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gf=typeof setTimeout=="function"?setTimeout:void 0,HE=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,GE=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(t){return Bm.resolve(null).then(t).catch(WE)}:Gf;function WE(t){setTimeout(function(){throw t})}function _c(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),aa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);aa(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ho=Math.random().toString(36).slice(2),ni="__reactFiber$"+ho,da="__reactProps$"+ho,Di="__reactContainer$"+ho,Wf="__reactEvents$"+ho,XE="__reactListeners$"+ho,jE="__reactHandles$"+ho;function Br(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Di]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vm(t);t!==null;){if(n=t[ni])return n;t=Vm(t)}return e}t=n,n=t.parentNode}return null}function Ca(t){return t=t[ni]||t[Di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Iu(t){return t[da]||null}var Xf=[],As=-1;function yr(t){return{current:t}}function ct(t){0>As||(t.current=Xf[As],Xf[As]=null,As--)}function st(t,e){As++,Xf[As]=t.current,t.current=e}var dr={},Yt=yr(dr),sn=yr(!1),$r=dr;function qs(t,e){var n=t.type.contextTypes;if(!n)return dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function ru(){ct(sn),ct(Yt)}function zm(t,e,n){if(Yt.current!==dr)throw Error(te(168));st(Yt,e),st(sn,n)}function B_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,bM(t)||"Unknown",r));return gt({},n,i)}function su(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,$r=Yt.current,st(Yt,t),st(sn,sn.current),!0}function Hm(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=B_(t,e,$r),i.__reactInternalMemoizedMergedChildContext=t,ct(sn),ct(Yt),st(Yt,t)):ct(sn),st(sn,n)}var _i=null,Uu=!1,yc=!1;function V_(t){_i===null?_i=[t]:_i.push(t)}function YE(t){Uu=!0,V_(t)}function xr(){if(!yc&&_i!==null){yc=!0;var t=0,e=et;try{var n=_i;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,Uu=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),f_(wh,xr),r}finally{et=e,yc=!1}}return null}var Cs=[],Rs=0,ou=null,au=0,Cn=[],Rn=0,qr=null,xi=1,Si="";function Lr(t,e){Cs[Rs++]=au,Cs[Rs++]=ou,ou=t,au=e}function z_(t,e,n){Cn[Rn++]=xi,Cn[Rn++]=Si,Cn[Rn++]=qr,qr=t;var i=xi;t=Si;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xi=1<<32-Yn(e)+r|n<<r|i,Si=s+t}else xi=1<<s|n<<r|i,Si=t}function Uh(t){t.return!==null&&(Lr(t,1),z_(t,1,0))}function Nh(t){for(;t===ou;)ou=Cs[--Rs],Cs[Rs]=null,au=Cs[--Rs],Cs[Rs]=null;for(;t===qr;)qr=Cn[--Rn],Cn[Rn]=null,Si=Cn[--Rn],Cn[Rn]=null,xi=Cn[--Rn],Cn[Rn]=null}var mn=null,pn=null,ft=!1,Wn=null;function H_(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:xi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yf(t){if(ft){var e=pn;if(e){var n=e;if(!Gm(t,e)){if(jf(t))throw Error(te(418));e=rr(n.nextSibling);var i=mn;e&&Gm(t,e)?H_(i,n):(t.flags=t.flags&-4097|2,ft=!1,mn=t)}}else{if(jf(t))throw Error(te(418));t.flags=t.flags&-4097|2,ft=!1,mn=t}}}function Wm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Za(t){if(t!==mn)return!1;if(!ft)return Wm(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hf(t.type,t.memoizedProps)),e&&(e=pn)){if(jf(t))throw G_(),Error(te(418));for(;e;)H_(t,e),e=rr(e.nextSibling)}if(Wm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?rr(t.stateNode.nextSibling):null;return!0}function G_(){for(var t=pn;t;)t=rr(t.nextSibling)}function Ks(){pn=mn=null,ft=!1}function Fh(t){Wn===null?Wn=[t]:Wn.push(t)}var $E=Fi.ReactCurrentBatchConfig;function Ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Qa(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xm(t){var e=t._init;return e(t._payload)}function W_(t){function e(h,m){if(t){var v=h.deletions;v===null?(h.deletions=[m],h.flags|=16):v.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=lr(h,m),h.index=0,h.sibling=null,h}function s(h,m,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<m?(h.flags|=2,m):v):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,m,v,x){return m===null||m.tag!==6?(m=Ac(v,h.mode,x),m.return=h,m):(m=r(m,v),m.return=h,m)}function l(h,m,v,x){var P=v.type;return P===Ss?c(h,m,v.props.children,x,v.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===$i&&Xm(P)===m.type)?(x=r(m,v.props),x.ref=Ao(h,m,v),x.return=h,x):(x=Bl(v.type,v.key,v.props,null,h.mode,x),x.ref=Ao(h,m,v),x.return=h,x)}function u(h,m,v,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Cc(v,h.mode,x),m.return=h,m):(m=r(m,v.children||[]),m.return=h,m)}function c(h,m,v,x,P){return m===null||m.tag!==7?(m=jr(v,h.mode,x,P),m.return=h,m):(m=r(m,v),m.return=h,m)}function d(h,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ac(""+m,h.mode,v),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case za:return v=Bl(m.type,m.key,m.props,null,h.mode,v),v.ref=Ao(h,null,m),v.return=h,v;case xs:return m=Cc(m,h.mode,v),m.return=h,m;case $i:var x=m._init;return d(h,x(m._payload),v)}if(Fo(m)||So(m))return m=jr(m,h.mode,v,null),m.return=h,m;Qa(h,m)}return null}function f(h,m,v,x){var P=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(h,m,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case za:return v.key===P?l(h,m,v,x):null;case xs:return v.key===P?u(h,m,v,x):null;case $i:return P=v._init,f(h,m,P(v._payload),x)}if(Fo(v)||So(v))return P!==null?null:c(h,m,v,x,null);Qa(h,v)}return null}function p(h,m,v,x,P){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(v)||null,a(m,h,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case za:return h=h.get(x.key===null?v:x.key)||null,l(m,h,x,P);case xs:return h=h.get(x.key===null?v:x.key)||null,u(m,h,x,P);case $i:var A=x._init;return p(h,m,v,A(x._payload),P)}if(Fo(x)||So(x))return h=h.get(v)||null,c(m,h,x,P,null);Qa(m,x)}return null}function _(h,m,v,x){for(var P=null,A=null,w=m,C=m=0,T=null;w!==null&&C<v.length;C++){w.index>C?(T=w,w=null):T=w.sibling;var S=f(h,w,v[C],x);if(S===null){w===null&&(w=T);break}t&&w&&S.alternate===null&&e(h,w),m=s(S,m,C),A===null?P=S:A.sibling=S,A=S,w=T}if(C===v.length)return n(h,w),ft&&Lr(h,C),P;if(w===null){for(;C<v.length;C++)w=d(h,v[C],x),w!==null&&(m=s(w,m,C),A===null?P=w:A.sibling=w,A=w);return ft&&Lr(h,C),P}for(w=i(h,w);C<v.length;C++)T=p(w,h,C,v[C],x),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?C:T.key),m=s(T,m,C),A===null?P=T:A.sibling=T,A=T);return t&&w.forEach(function(b){return e(h,b)}),ft&&Lr(h,C),P}function y(h,m,v,x){var P=So(v);if(typeof P!="function")throw Error(te(150));if(v=P.call(v),v==null)throw Error(te(151));for(var A=P=null,w=m,C=m=0,T=null,S=v.next();w!==null&&!S.done;C++,S=v.next()){w.index>C?(T=w,w=null):T=w.sibling;var b=f(h,w,S.value,x);if(b===null){w===null&&(w=T);break}t&&w&&b.alternate===null&&e(h,w),m=s(b,m,C),A===null?P=b:A.sibling=b,A=b,w=T}if(S.done)return n(h,w),ft&&Lr(h,C),P;if(w===null){for(;!S.done;C++,S=v.next())S=d(h,S.value,x),S!==null&&(m=s(S,m,C),A===null?P=S:A.sibling=S,A=S);return ft&&Lr(h,C),P}for(w=i(h,w);!S.done;C++,S=v.next())S=p(w,h,C,S.value,x),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?C:S.key),m=s(S,m,C),A===null?P=S:A.sibling=S,A=S);return t&&w.forEach(function(z){return e(h,z)}),ft&&Lr(h,C),P}function g(h,m,v,x){if(typeof v=="object"&&v!==null&&v.type===Ss&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case za:e:{for(var P=v.key,A=m;A!==null;){if(A.key===P){if(P=v.type,P===Ss){if(A.tag===7){n(h,A.sibling),m=r(A,v.props.children),m.return=h,h=m;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===$i&&Xm(P)===A.type){n(h,A.sibling),m=r(A,v.props),m.ref=Ao(h,A,v),m.return=h,h=m;break e}n(h,A);break}else e(h,A);A=A.sibling}v.type===Ss?(m=jr(v.props.children,h.mode,x,v.key),m.return=h,h=m):(x=Bl(v.type,v.key,v.props,null,h.mode,x),x.ref=Ao(h,m,v),x.return=h,h=x)}return o(h);case xs:e:{for(A=v.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(h,m.sibling),m=r(m,v.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=Cc(v,h.mode,x),m.return=h,h=m}return o(h);case $i:return A=v._init,g(h,m,A(v._payload),x)}if(Fo(v))return _(h,m,v,x);if(So(v))return y(h,m,v,x);Qa(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(h,m.sibling),m=r(m,v),m.return=h,h=m):(n(h,m),m=Ac(v,h.mode,x),m.return=h,h=m),o(h)):n(h,m)}return g}var Zs=W_(!0),X_=W_(!1),lu=yr(null),uu=null,Ps=null,Oh=null;function kh(){Oh=Ps=uu=null}function Bh(t){var e=lu.current;ct(lu),t._currentValue=e}function $f(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Gs(t,e){uu=t,Oh=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Oh!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(uu===null)throw Error(te(308));Ps=t,uu.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var Vr=null;function Vh(t){Vr===null?Vr=[t]:Vr.push(t)}function j_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Vh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ii(t,i)}function Ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qi=!1;function zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ii(t,n)}return r=i.interleaved,r===null?(e.next=e,Vh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ii(t,n)}function Il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ah(t,n)}}function jm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cu(t,e,n,i){var r=t.updateQueue;qi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=gt({},d,f);break e;case 2:qi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=d}}function Ym(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ra={},si=yr(Ra),ha=yr(Ra),pa=yr(Ra);function zr(t){if(t===Ra)throw Error(te(174));return t}function Hh(t,e){switch(st(pa,e),st(ha,t),st(si,Ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rf(e,t)}ct(si),st(si,e)}function Qs(){ct(si),ct(ha),ct(pa)}function $_(t){zr(pa.current);var e=zr(si.current),n=Rf(e,t.type);e!==n&&(st(ha,t),st(si,n))}function Gh(t){ha.current===t&&(ct(si),ct(ha))}var ht=yr(0);function fu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xc=[];function Wh(){for(var t=0;t<xc.length;t++)xc[t]._workInProgressVersionPrimary=null;xc.length=0}var Ul=Fi.ReactCurrentDispatcher,Sc=Fi.ReactCurrentBatchConfig,Kr=0,mt=null,At=null,Lt=null,du=!1,qo=!1,ma=0,qE=0;function kt(){throw Error(te(321))}function Xh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function jh(t,e,n,i,r,s){if(Kr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ul.current=t===null||t.memoizedState===null?JE:eT,t=n(i,r),qo){s=0;do{if(qo=!1,ma=0,25<=s)throw Error(te(301));s+=1,Lt=At=null,e.updateQueue=null,Ul.current=tT,t=n(i,r)}while(qo)}if(Ul.current=hu,e=At!==null&&At.next!==null,Kr=0,Lt=At=mt=null,du=!1,e)throw Error(te(300));return t}function Yh(){var t=ma!==0;return ma=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?mt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Un(){if(At===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Lt===null?mt.memoizedState:Lt.next;if(e!==null)Lt=e,At=t;else{if(t===null)throw Error(te(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Lt===null?mt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function ga(t,e){return typeof e=="function"?e(t):e}function Mc(t){var e=Un(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Kr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,mt.lanes|=c,Zr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Kn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ec(t){var e=Un(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Kn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function q_(){}function K_(t,e){var n=mt,i=Un(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,$h(J_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,va(9,Q_.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(te(349));Kr&30||Z_(n,e,r)}return r}function Z_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q_(t,e,n,i){e.value=n,e.getSnapshot=i,ey(e)&&ty(t)}function J_(t,e,n){return n(function(){ey(e)&&ty(t)})}function ey(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function ty(t){var e=Ii(t,1);e!==null&&$n(e,t,1,-1)}function $m(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},e.queue=t,t=t.dispatch=QE.bind(null,mt,t),[e.memoizedState,t]}function va(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ny(){return Un().memoizedState}function Nl(t,e,n,i){var r=ei();mt.flags|=t,r.memoizedState=va(1|e,n,void 0,i===void 0?null:i)}function Nu(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&Xh(i,o.deps)){r.memoizedState=va(e,n,s,i);return}}mt.flags|=t,r.memoizedState=va(1|e,n,s,i)}function qm(t,e){return Nl(8390656,8,t,e)}function $h(t,e){return Nu(2048,8,t,e)}function iy(t,e){return Nu(4,2,t,e)}function ry(t,e){return Nu(4,4,t,e)}function sy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function oy(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4,4,sy.bind(null,e,t),n)}function qh(){}function ay(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ly(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function uy(t,e,n){return Kr&21?(Kn(n,e)||(n=p_(),mt.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function KE(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Sc.transition;Sc.transition={};try{t(!1),e()}finally{et=n,Sc.transition=i}}function cy(){return Un().memoizedState}function ZE(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},fy(t))dy(e,n);else if(n=j_(t,e,n,i),n!==null){var r=Kt();$n(n,t,i,r),hy(n,e,i)}}function QE(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(fy(t))dy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Kn(a,o)){var l=e.interleaved;l===null?(r.next=r,Vh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=j_(t,e,r,i),n!==null&&(r=Kt(),$n(n,t,i,r),hy(n,e,i))}}function fy(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function dy(t,e){qo=du=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ah(t,n)}}var hu={readContext:In,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},JE={readContext:In,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:qm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,sy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ZE.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:$m,useDebugValue:qh,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=$m(!1),e=t[0];return t=KE.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=ei();if(ft){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Dt===null)throw Error(te(349));Kr&30||Z_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,qm(J_.bind(null,i,s,t),[t]),i.flags|=2048,va(9,Q_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Dt.identifierPrefix;if(ft){var n=Si,i=xi;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eT={readContext:In,useCallback:ay,useContext:In,useEffect:$h,useImperativeHandle:oy,useInsertionEffect:iy,useLayoutEffect:ry,useMemo:ly,useReducer:Mc,useRef:ny,useState:function(){return Mc(ga)},useDebugValue:qh,useDeferredValue:function(t){var e=Un();return uy(e,At.memoizedState,t)},useTransition:function(){var t=Mc(ga)[0],e=Un().memoizedState;return[t,e]},useMutableSource:q_,useSyncExternalStore:K_,useId:cy,unstable_isNewReconciler:!1},tT={readContext:In,useCallback:ay,useContext:In,useEffect:$h,useImperativeHandle:oy,useInsertionEffect:iy,useLayoutEffect:ry,useMemo:ly,useReducer:Ec,useRef:ny,useState:function(){return Ec(ga)},useDebugValue:qh,useDeferredValue:function(t){var e=Un();return At===null?e.memoizedState=t:uy(e,At.memoizedState,t)},useTransition:function(){var t=Ec(ga)[0],e=Un().memoizedState;return[t,e]},useMutableSource:q_,useSyncExternalStore:K_,useId:cy,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fu={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=ar(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&($n(e,t,r,i),Il(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=ar(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&($n(e,t,r,i),Il(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=ar(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=sr(t,r,i),e!==null&&($n(e,t,i,n),Il(e,t,i))}};function Km(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ua(n,i)||!ua(r,s):!0}function py(t,e,n){var i=!1,r=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=on(e)?$r:Yt.current,i=e.contextTypes,s=(i=i!=null)?qs(t,r):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Fu.enqueueReplaceState(e,e.state,null)}function Kf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},zh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=on(e)?$r:Yt.current,r.context=qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Fu.enqueueReplaceState(r,r.state,null),cu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",i=e;do n+=PM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nT=typeof WeakMap=="function"?WeakMap:Map;function my(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){mu||(mu=!0,ad=i),Zf(t,e)},n}function gy(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Zf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zf(t,e),typeof i!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new nT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=gT.bind(null,t,e,n),e.then(t,t))}function Jm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function eg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var iT=Fi.ReactCurrentOwner,rn=!1;function qt(t,e,n,i){e.child=t===null?X_(e,null,n,i):Zs(e,t.child,n,i)}function tg(t,e,n,i,r){n=n.render;var s=e.ref;return Gs(e,r),i=jh(t,e,n,i,s,r),n=Yh(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(ft&&n&&Uh(e),e.flags|=1,qt(t,e,i,r),e.child)}function ng(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ip(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vy(t,e,s,i,r)):(t=Bl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ua,n(o,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function vy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ua(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return Qf(t,e,n,i,r)}function _y(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(Ls,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(Ls,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(Ls,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(Ls,hn),hn|=i;return qt(t,e,r,n),e.child}function yy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qf(t,e,n,i,r){var s=on(n)?$r:Yt.current;return s=qs(e,s),Gs(e,r),n=jh(t,e,n,i,s,r),i=Yh(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(ft&&i&&Uh(e),e.flags|=1,qt(t,e,n,r),e.child)}function ig(t,e,n,i,r){if(on(n)){var s=!0;su(e)}else s=!1;if(Gs(e,r),e.stateNode===null)Fl(t,e),py(e,n,i),Kf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=In(u):(u=on(n)?$r:Yt.current,u=qs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Zm(e,o,i,u),qi=!1;var f=e.memoizedState;o.state=f,cu(e,i,o,r),l=e.memoizedState,a!==i||f!==l||sn.current||qi?(typeof c=="function"&&(qf(e,n,c,i),l=e.memoizedState),(a=qi||Km(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Y_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=on(n)?$r:Yt.current,l=qs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Zm(e,o,i,l),qi=!1,f=e.memoizedState,o.state=f,cu(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||sn.current||qi?(typeof p=="function"&&(qf(e,n,p,i),_=e.memoizedState),(u=qi||Km(e,n,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Jf(t,e,n,i,s,r)}function Jf(t,e,n,i,r,s){yy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Hm(e,n,!1),Ui(t,e,s);i=e.stateNode,iT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Zs(e,t.child,null,s),e.child=Zs(e,null,a,s)):qt(t,e,a,s),e.memoizedState=i.state,r&&Hm(e,n,!0),e.child}function xy(t){var e=t.stateNode;e.pendingContext?zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zm(t,e.context,!1),Hh(t,e.containerInfo)}function rg(t,e,n,i,r){return Ks(),Fh(r),e.flags|=256,qt(t,e,n,i),e.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sy(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ht,r&1),t===null)return Yf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bu(o,i,0,null),t=jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=td(n),e.memoizedState=ed,t):Kh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return rT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=lr(a,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ed,i}return s=t.child,t=s.sibling,i=lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Kh(t,e){return e=Bu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,i){return i!==null&&Fh(i),Zs(e,t.child,null,n),t=Kh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Tc(Error(te(422))),Ja(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Bu({mode:"visible",children:i.children},r,0,null),s=jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Zs(e,t.child,null,o),e.child.memoizedState=td(o),e.memoizedState=ed,s);if(!(e.mode&1))return Ja(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Tc(s,i,void 0),Ja(t,e,o,i)}if(a=(o&t.childLanes)!==0,rn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ii(t,r),$n(i,t,r,-1))}return np(),i=Tc(Error(te(421))),Ja(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=vT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=rr(r.nextSibling),mn=e,ft=!0,Wn=null,t!==null&&(Cn[Rn++]=xi,Cn[Rn++]=Si,Cn[Rn++]=qr,xi=t.id,Si=t.overflow,qr=e),e=Kh(e,i.children),e.flags|=4096,e)}function sg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),$f(t.return,e,n)}function wc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function My(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sg(t,n,e);else if(t.tag===19)sg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&fu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),wc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&fu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}wc(e,!0,n,null,s);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sT(t,e,n){switch(e.tag){case 3:xy(e),Ks();break;case 5:$_(e);break;case 1:on(e.type)&&su(e);break;case 4:Hh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(lu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?Sy(t,e,n):(st(ht,ht.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);st(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return My(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,_y(t,e,n)}return Ui(t,e,n)}var Ey,nd,Ty,wy;Ey=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nd=function(){};Ty=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(si.current);var s=null;switch(n){case"input":r=Tf(t,r),i=Tf(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=Cf(t,r),i=Cf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=iu)}Pf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(na.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(na.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};wy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Co(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function oT(t,e,n){var i=e.pendingProps;switch(Nh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return on(e.type)&&ru(),Bt(e),null;case 3:return i=e.stateNode,Qs(),ct(sn),ct(Yt),Wh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(cd(Wn),Wn=null))),nd(t,e),Bt(e),null;case 5:Gh(e);var r=zr(pa.current);if(n=e.type,t!==null&&e.stateNode!=null)Ty(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Bt(e),null}if(t=zr(si.current),Za(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[da]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<ko.length;r++)ut(ko[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":pm(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":gm(i,s),ut("invalid",i)}Pf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,a,t),r=["children",""+a]):na.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":Ha(i),mm(i,s,!0);break;case"textarea":Ha(i),vm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=iu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=J0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[da]=i,Ey(t,e,!1,!1),e.stateNode=t;e:{switch(o=bf(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<ko.length;r++)ut(ko[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":pm(t,i),r=Tf(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":gm(t,i),r=Cf(t,i),ut("invalid",t);break;default:r=i}Pf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?n_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&e_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ia(t,l):typeof l=="number"&&ia(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(na.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&xh(t,s,l,o))}switch(n){case"input":Ha(t),mm(t,i,!1);break;case"textarea":Ha(t),vm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Bs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Bs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=iu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)wy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=zr(pa.current),zr(si.current),Za(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ka(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Bt(e),null;case 13:if(ct(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&pn!==null&&e.mode&1&&!(e.flags&128))G_(),Ks(),e.flags|=98560,s=!1;else if(s=Za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ni]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Wn!==null&&(cd(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?Ct===0&&(Ct=3):np())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Qs(),nd(t,e),t===null&&ca(e.stateNode.containerInfo),Bt(e),null;case 10:return Bh(e.type._context),Bt(e),null;case 17:return on(e.type)&&ru(),Bt(e),null;case 19:if(ct(ht),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Co(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fu(t),o!==null){for(e.flags|=128,Co(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>eo&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304)}else{if(!i)if(t=fu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Bt(e),null}else 2*Et()-s.renderingStartTime>eo&&n!==1073741824&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=ht.current,st(ht,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return tp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function aT(t,e){switch(Nh(e),e.tag){case 1:return on(e.type)&&ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),ct(sn),ct(Yt),Wh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gh(e),null;case 13:if(ct(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ht),null;case 4:return Qs(),null;case 10:return Bh(e.type._context),null;case 22:case 23:return tp(),null;case 24:return null;default:return null}}var el=!1,Gt=!1,lT=typeof WeakSet=="function"?WeakSet:Set,he=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function id(t,e,n){try{n()}catch(i){_t(t,e,i)}}var og=!1;function uT(t,e){if(Vf=eu,t=b_(),Ih(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zf={focusedElem:t,selectionRange:n},eu=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:zn(e.type,y),g);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){_t(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return _=og,og=!1,_}function Ko(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&id(e,n,s)}r=r.next}while(r!==i)}}function Ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function rd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ay(t){var e=t.alternate;e!==null&&(t.alternate=null,Ay(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[da],delete e[Wf],delete e[XE],delete e[jE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cy(t){return t.tag===5||t.tag===3||t.tag===4}function ag(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=iu));else if(i!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}function od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}var It=null,Gn=!1;function Vi(t,e,n){for(n=n.child;n!==null;)Ry(t,e,n),n=n.sibling}function Ry(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(Pu,n)}catch{}switch(n.tag){case 5:Gt||bs(n,e);case 6:var i=It,r=Gn;It=null,Vi(t,e,n),It=i,Gn=r,It!==null&&(Gn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Gn?(t=It,n=n.stateNode,t.nodeType===8?_c(t.parentNode,n):t.nodeType===1&&_c(t,n),aa(t)):_c(It,n.stateNode));break;case 4:i=It,r=Gn,It=n.stateNode.containerInfo,Gn=!0,Vi(t,e,n),It=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&id(n,e,o),r=r.next}while(r!==i)}Vi(t,e,n);break;case 1:if(!Gt&&(bs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){_t(n,e,a)}Vi(t,e,n);break;case 21:Vi(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Vi(t,e,n),Gt=i):Vi(t,e,n);break;default:Vi(t,e,n)}}function lg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lT),e.forEach(function(i){var r=_T.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Gn=!1;break e;case 3:It=a.stateNode.containerInfo,Gn=!0;break e;case 4:It=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(It===null)throw Error(te(160));Ry(s,o,r),It=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){_t(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Py(e,t),e=e.sibling}function Py(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Jn(t),i&4){try{Ko(3,t,t.return),Ou(3,t)}catch(y){_t(t,t.return,y)}try{Ko(5,t,t.return)}catch(y){_t(t,t.return,y)}}break;case 1:On(e,t),Jn(t),i&512&&n!==null&&bs(n,n.return);break;case 5:if(On(e,t),Jn(t),i&512&&n!==null&&bs(n,n.return),t.flags&32){var r=t.stateNode;try{ia(r,"")}catch(y){_t(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Z0(r,s),bf(a,o);var u=bf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?n_(r,d):c==="dangerouslySetInnerHTML"?e_(r,d):c==="children"?ia(r,d):xh(r,c,d,u)}switch(a){case"input":wf(r,s);break;case"textarea":Q0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Bs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Bs(r,!!s.multiple,s.defaultValue,!0):Bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[da]=s}catch(y){_t(t,t.return,y)}}break;case 6:if(On(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){_t(t,t.return,y)}}break;case 3:if(On(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(e.containerInfo)}catch(y){_t(t,t.return,y)}break;case 4:On(e,t),Jn(t);break;case 13:On(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Jh=Et())),i&4&&lg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||c,On(e,t),Gt=u):On(e,t),Jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(he=t,c=t.child;c!==null;){for(d=he=c;he!==null;){switch(f=he,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ko(4,f,f.return);break;case 1:bs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){_t(i,n,y)}}break;case 5:bs(f,f.return);break;case 22:if(f.memoizedState!==null){cg(d);continue}}p!==null?(p.return=f,he=p):cg(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=t_("display",o))}catch(y){_t(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){_t(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:On(e,t),Jn(t),i&4&&lg(t);break;case 21:break;default:On(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Cy(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ia(r,""),i.flags&=-33);var s=ag(t);od(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=ag(t);sd(t,a,o);break;default:throw Error(te(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cT(t,e,n){he=t,by(t)}function by(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||el;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=el;var u=Gt;if(el=o,(Gt=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?fg(r):l!==null?(l.return=o,he=l):fg(r);for(;s!==null;)he=s,by(s),s=s.sibling;he=r,el=a,Gt=u}ug(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):ug(t)}}function ug(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||Ou(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ym(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ym(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&aa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Gt||e.flags&512&&rd(e)}catch(f){_t(e,e.return,f)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function cg(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function fg(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ou(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{rd(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{rd(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var fT=Math.ceil,pu=Fi.ReactCurrentDispatcher,Zh=Fi.ReactCurrentOwner,Dn=Fi.ReactCurrentBatchConfig,$e=0,Dt=null,wt=null,Nt=0,hn=0,Ls=yr(0),Ct=0,_a=null,Zr=0,ku=0,Qh=0,Zo=null,tn=null,Jh=0,eo=1/0,vi=null,mu=!1,ad=null,or=null,tl=!1,er=null,gu=0,Qo=0,ld=null,Ol=-1,kl=0;function Kt(){return $e&6?Et():Ol!==-1?Ol:Ol=Et()}function ar(t){return t.mode&1?$e&2&&Nt!==0?Nt&-Nt:$E.transition!==null?(kl===0&&(kl=p_()),kl):(t=et,t!==0||(t=window.event,t=t===void 0?16:S_(t.type)),t):1}function $n(t,e,n,i){if(50<Qo)throw Qo=0,ld=null,Error(te(185));wa(t,n,i),(!($e&2)||t!==Dt)&&(t===Dt&&(!($e&2)&&(ku|=n),Ct===4&&Zi(t,Nt)),an(t,i),n===1&&$e===0&&!(e.mode&1)&&(eo=Et()+500,Uu&&xr()))}function an(t,e){var n=t.callbackNode;$M(t,e);var i=Jl(t,t===Dt?Nt:0);if(i===0)n!==null&&xm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&xm(n),e===1)t.tag===0?YE(dg.bind(null,t)):V_(dg.bind(null,t)),GE(function(){!($e&6)&&xr()}),n=null;else{switch(m_(i)){case 1:n=wh;break;case 4:n=d_;break;case 16:n=Ql;break;case 536870912:n=h_;break;default:n=Ql}n=ky(n,Ly.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ly(t,e){if(Ol=-1,kl=0,$e&6)throw Error(te(327));var n=t.callbackNode;if(Ws()&&t.callbackNode!==n)return null;var i=Jl(t,t===Dt?Nt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=vu(t,i);else{e=i;var r=$e;$e|=2;var s=Iy();(Dt!==t||Nt!==e)&&(vi=null,eo=Et()+500,Xr(t,e));do try{pT();break}catch(a){Dy(t,a)}while(!0);kh(),pu.current=s,$e=r,wt!==null?e=0:(Dt=null,Nt=0,e=Ct)}if(e!==0){if(e===2&&(r=Nf(t),r!==0&&(i=r,e=ud(t,r))),e===1)throw n=_a,Xr(t,0),Zi(t,i),an(t,Et()),n;if(e===6)Zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!dT(r)&&(e=vu(t,i),e===2&&(s=Nf(t),s!==0&&(i=s,e=ud(t,s))),e===1))throw n=_a,Xr(t,0),Zi(t,i),an(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Dr(t,tn,vi);break;case 3:if(Zi(t,i),(i&130023424)===i&&(e=Jh+500-Et(),10<e)){if(Jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gf(Dr.bind(null,t,tn,vi),e);break}Dr(t,tn,vi);break;case 4:if(Zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fT(i/1960))-i,10<i){t.timeoutHandle=Gf(Dr.bind(null,t,tn,vi),i);break}Dr(t,tn,vi);break;case 5:Dr(t,tn,vi);break;default:throw Error(te(329))}}}return an(t,Et()),t.callbackNode===n?Ly.bind(null,t):null}function ud(t,e){var n=Zo;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=vu(t,e),t!==2&&(e=tn,tn=n,e!==null&&cd(e)),t}function cd(t){tn===null?tn=t:tn.push.apply(tn,t)}function dT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(t,e){for(e&=~Qh,e&=~ku,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function dg(t){if($e&6)throw Error(te(327));Ws();var e=Jl(t,0);if(!(e&1))return an(t,Et()),null;var n=vu(t,e);if(t.tag!==0&&n===2){var i=Nf(t);i!==0&&(e=i,n=ud(t,i))}if(n===1)throw n=_a,Xr(t,0),Zi(t,e),an(t,Et()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,tn,vi),an(t,Et()),null}function ep(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(eo=Et()+500,Uu&&xr())}}function Qr(t){er!==null&&er.tag===0&&!($e&6)&&Ws();var e=$e;$e|=1;var n=Dn.transition,i=et;try{if(Dn.transition=null,et=1,t)return t()}finally{et=i,Dn.transition=n,$e=e,!($e&6)&&xr()}}function tp(){hn=Ls.current,ct(Ls)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HE(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Nh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ru();break;case 3:Qs(),ct(sn),ct(Yt),Wh();break;case 5:Gh(i);break;case 4:Qs();break;case 13:ct(ht);break;case 19:ct(ht);break;case 10:Bh(i.type._context);break;case 22:case 23:tp()}n=n.return}if(Dt=t,wt=t=lr(t.current,null),Nt=hn=e,Ct=0,_a=null,Qh=ku=Zr=0,tn=Zo=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Vr=null}return t}function Dy(t,e){do{var n=wt;try{if(kh(),Ul.current=hu,du){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}du=!1}if(Kr=0,Lt=At=mt=null,qo=!1,ma=0,Zh.current=null,n===null||n.return===null){Ct=1,_a=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Jm(o);if(p!==null){p.flags&=-257,eg(p,o,a,s,e),p.mode&1&&Qm(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Qm(s,u,e),np();break e}l=Error(te(426))}}else if(ft&&a.mode&1){var g=Jm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),eg(g,o,a,s,e),Fh(Js(l,a));break e}}s=l=Js(l,a),Ct!==4&&(Ct=2),Zo===null?Zo=[s]:Zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=my(s,l,e);jm(s,h);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(or===null||!or.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=gy(s,a,e);jm(s,x);break e}}s=s.return}while(s!==null)}Ny(n)}catch(P){e=P,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function Iy(){var t=pu.current;return pu.current=hu,t===null?hu:t}function np(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Dt===null||!(Zr&268435455)&&!(ku&268435455)||Zi(Dt,Nt)}function vu(t,e){var n=$e;$e|=2;var i=Iy();(Dt!==t||Nt!==e)&&(vi=null,Xr(t,e));do try{hT();break}catch(r){Dy(t,r)}while(!0);if(kh(),$e=n,pu.current=i,wt!==null)throw Error(te(261));return Dt=null,Nt=0,Ct}function hT(){for(;wt!==null;)Uy(wt)}function pT(){for(;wt!==null&&!BM();)Uy(wt)}function Uy(t){var e=Oy(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?Ny(t):wt=e,Zh.current=null}function Ny(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aT(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,wt=null;return}}else if(n=oT(n,e,hn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Ct===0&&(Ct=5)}function Dr(t,e,n){var i=et,r=Dn.transition;try{Dn.transition=null,et=1,mT(t,e,n,i)}finally{Dn.transition=r,et=i}return null}function mT(t,e,n,i){do Ws();while(er!==null);if($e&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(qM(t,s),t===Dt&&(wt=Dt=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,ky(Ql,function(){return Ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=et;et=1;var a=$e;$e|=4,Zh.current=null,uT(t,n),Py(n,t),NE(zf),eu=!!Vf,zf=Vf=null,t.current=n,cT(n),VM(),$e=a,et=o,Dn.transition=s}else t.current=n;if(tl&&(tl=!1,er=t,gu=r),s=t.pendingLanes,s===0&&(or=null),GM(n.stateNode),an(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(mu)throw mu=!1,t=ad,ad=null,t;return gu&1&&t.tag!==0&&Ws(),s=t.pendingLanes,s&1?t===ld?Qo++:(Qo=0,ld=t):Qo=0,xr(),null}function Ws(){if(er!==null){var t=m_(gu),e=Dn.transition,n=et;try{if(Dn.transition=null,et=16>t?16:t,er===null)var i=!1;else{if(t=er,er=null,gu=0,$e&6)throw Error(te(331));var r=$e;for($e|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var c=he;switch(c.tag){case 0:case 11:case 15:Ko(8,c,s)}var d=c.child;if(d!==null)d.return=c,he=d;else for(;he!==null;){c=he;var f=c.sibling,p=c.return;if(Ay(c),c===u){he=null;break}if(f!==null){f.return=p,he=f;break}he=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ko(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,he=h;break e}he=s.return}}var m=t.current;for(he=m;he!==null;){o=he;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,he=v;else e:for(o=m;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ou(9,a)}}catch(P){_t(a,a.return,P)}if(a===o){he=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,he=x;break e}he=a.return}}if($e=r,xr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(Pu,t)}catch{}i=!0}return i}finally{et=n,Dn.transition=e}}return!1}function hg(t,e,n){e=Js(n,e),e=my(t,e,1),t=sr(t,e,1),e=Kt(),t!==null&&(wa(t,1,e),an(t,e))}function _t(t,e,n){if(t.tag===3)hg(t,t,n);else for(;e!==null;){if(e.tag===3){hg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(or===null||!or.has(i))){t=Js(n,t),t=gy(e,t,1),e=sr(e,t,1),t=Kt(),e!==null&&(wa(e,1,t),an(e,t));break}}e=e.return}}function gT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Nt&n)===n&&(Ct===4||Ct===3&&(Nt&130023424)===Nt&&500>Et()-Jh?Xr(t,0):Qh|=n),an(t,e)}function Fy(t,e){e===0&&(t.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var n=Kt();t=Ii(t,e),t!==null&&(wa(t,e,n),an(t,n))}function vT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fy(t,n)}function _T(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Fy(t,n)}var Oy;Oy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,sT(t,e,n);rn=!!(t.flags&131072)}else rn=!1,ft&&e.flags&1048576&&z_(e,au,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fl(t,e),t=e.pendingProps;var r=qs(e,Yt.current);Gs(e,n),r=jh(null,e,i,t,r,n);var s=Yh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,su(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zh(e),r.updater=Fu,e.stateNode=r,r._reactInternals=e,Kf(e,i,t,n),e=Jf(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&Uh(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Fl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=xT(i),t=zn(i,t),r){case 0:e=Qf(null,e,i,t,n);break e;case 1:e=ig(null,e,i,t,n);break e;case 11:e=tg(null,e,i,t,n);break e;case 14:e=ng(null,e,i,zn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Qf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),ig(t,e,i,r,n);case 3:e:{if(xy(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Y_(t,e),cu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Js(Error(te(423)),e),e=rg(t,e,i,n,r);break e}else if(i!==r){r=Js(Error(te(424)),e),e=rg(t,e,i,n,r);break e}else for(pn=rr(e.stateNode.containerInfo.firstChild),mn=e,ft=!0,Wn=null,n=X_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),i===r){e=Ui(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return $_(e),t===null&&Yf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Hf(i,r)?o=null:s!==null&&Hf(i,s)&&(e.flags|=32),yy(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&Yf(e),null;case 13:return Sy(t,e,n);case 4:return Hh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Zs(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),tg(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(lu,i._currentValue),i._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===r.children&&!sn.current){e=Ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$f(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$f(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Gs(e,n),r=In(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),ng(t,e,i,r,n);case 15:return vy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Fl(t,e),e.tag=1,on(i)?(t=!0,su(e)):t=!1,Gs(e,n),py(e,i,r),Kf(e,i,r,n),Jf(null,e,i,!0,t,n);case 19:return My(t,e,n);case 22:return _y(t,e,n)}throw Error(te(156,e.tag))};function ky(t,e){return f_(t,e)}function yT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new yT(t,e,n,i)}function ip(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xT(t){if(typeof t=="function")return ip(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mh)return 11;if(t===Eh)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ip(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return jr(n.children,r,s,e);case Sh:o=8,r|=8;break;case xf:return t=bn(12,n,e,r|2),t.elementType=xf,t.lanes=s,t;case Sf:return t=bn(13,n,e,r),t.elementType=Sf,t.lanes=s,t;case Mf:return t=bn(19,n,e,r),t.elementType=Mf,t.lanes=s,t;case $0:return Bu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case j0:o=10;break e;case Y0:o=9;break e;case Mh:o=11;break e;case Eh:o=14;break e;case $i:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function Bu(t,e,n,i){return t=bn(22,t,i,e),t.elementType=$0,t.lanes=n,t.stateNode={isHidden:!1},t}function Ac(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Cc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ST(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ac(0),this.expirationTimes=ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function rp(t,e,n,i,r,s,o,a,l){return t=new ST(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zh(s),t}function MT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function By(t){if(!t)return dr;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(on(n))return B_(t,n,e)}return e}function Vy(t,e,n,i,r,s,o,a,l){return t=rp(n,i,!0,t,r,s,o,a,l),t.context=By(null),n=t.current,i=Kt(),r=ar(n),s=wi(i,r),s.callback=e??null,sr(n,s,r),t.current.lanes=r,wa(t,r,i),an(t,i),t}function Vu(t,e,n,i){var r=e.current,s=Kt(),o=ar(r);return n=By(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=sr(r,e,o),t!==null&&($n(t,r,o,s),Il(t,r,o)),o}function _u(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sp(t,e){pg(t,e),(t=t.alternate)&&pg(t,e)}function ET(){return null}var zy=typeof reportError=="function"?reportError:function(t){console.error(t)};function op(t){this._internalRoot=t}zu.prototype.render=op.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Vu(t,e,null,null)};zu.prototype.unmount=op.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Vu(null,t,null,null)}),e[Di]=null}};function zu(t){this._internalRoot=t}zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=__();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ki.length&&e!==0&&e<Ki[n].priority;n++);Ki.splice(n,0,t),n===0&&x_(t)}};function ap(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mg(){}function TT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=_u(o);s.call(u)}}var o=Vy(e,i,t,0,null,!1,!1,"",mg);return t._reactRootContainer=o,t[Di]=o.current,ca(t.nodeType===8?t.parentNode:t),Qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=_u(l);a.call(u)}}var l=rp(t,0,!1,null,null,!1,!1,"",mg);return t._reactRootContainer=l,t[Di]=l.current,ca(t.nodeType===8?t.parentNode:t),Qr(function(){Vu(e,l,n,i)}),l}function Gu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=_u(o);a.call(l)}}Vu(e,o,t,r)}else o=TT(n,e,t,r,i);return _u(o)}g_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oo(e.pendingLanes);n!==0&&(Ah(e,n|1),an(e,Et()),!($e&6)&&(eo=Et()+500,xr()))}break;case 13:Qr(function(){var i=Ii(t,1);if(i!==null){var r=Kt();$n(i,t,1,r)}}),sp(t,1)}};Ch=function(t){if(t.tag===13){var e=Ii(t,134217728);if(e!==null){var n=Kt();$n(e,t,134217728,n)}sp(t,134217728)}};v_=function(t){if(t.tag===13){var e=ar(t),n=Ii(t,e);if(n!==null){var i=Kt();$n(n,t,e,i)}sp(t,e)}};__=function(){return et};y_=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Df=function(t,e,n){switch(e){case"input":if(wf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Iu(i);if(!r)throw Error(te(90));K0(i),wf(i,r)}}}break;case"textarea":Q0(t,n);break;case"select":e=n.value,e!=null&&Bs(t,!!n.multiple,e,!1)}};s_=ep;o_=Qr;var wT={usingClientEntryPoint:!1,Events:[Ca,ws,Iu,i_,r_,ep]},Ro={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AT={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=u_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||ET,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Pu=nl.inject(AT),ri=nl}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wT;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ap(e))throw Error(te(200));return MT(t,e,null,n)};yn.createRoot=function(t,e){if(!ap(t))throw Error(te(299));var n=!1,i="",r=zy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=rp(t,1,!1,null,null,n,!1,i,r),t[Di]=e.current,ca(t.nodeType===8?t.parentNode:t),new op(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=u_(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Qr(t)};yn.hydrate=function(t,e,n){if(!Hu(e))throw Error(te(200));return Gu(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!ap(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=zy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Vy(e,null,t,1,n??null,r,!1,s,o),t[Di]=e.current,ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zu(e)};yn.render=function(t,e,n){if(!Hu(e))throw Error(te(200));return Gu(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Hu(t))throw Error(te(40));return t._reactRootContainer?(Qr(function(){Gu(null,null,t,!1,function(){t._reactRootContainer=null,t[Di]=null})}),!0):!1};yn.unstable_batchedUpdates=ep;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Hu(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Gu(t,e,n,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function Hy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hy)}catch(t){console.error(t)}}Hy(),H0.exports=yn;var CT=H0.exports,Gy,gg=CT;Gy=gg.createRoot,gg.hydrateRoot;function RT(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}function Wu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const fd=t=>Array.isArray(t);function Wy(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function ya(t){return typeof t=="string"||Array.isArray(t)}function vg(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function lp(t,e,n,i){if(typeof e=="function"){const[r,s]=vg(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=vg(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function Xu(t,e,n){const i=t.getProps();return lp(i,e,n!==void 0?n:i.custom,t)}const up=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],cp=["initial",...up],Pa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],is=new Set(Pa),Ai=t=>t*1e3,Ci=t=>t/1e3,PT={type:"spring",stiffness:500,damping:25,restSpeed:10},bT=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),LT={type:"keyframes",duration:.8},DT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},IT=(t,{keyframes:e})=>e.length>2?LT:is.has(t)?t.startsWith("scale")?bT(e[1]):PT:DT;function fp(t,e){return t?t[e]||t.default||t:void 0}const UT={skipAnimations:!1,useManualTiming:!1},NT=t=>t!==null;function ju(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(NT),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const Xt=t=>t;function FT(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(u){s.has(u)&&(l.schedule(u),t()),u(o)}const l={schedule:(u,c=!1,d=!1)=>{const p=d&&i?e:n;return c&&s.add(u),p.has(u)||p.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,i){r=!0;return}i=!0,[e,n]=[n,e],n.clear(),e.forEach(a),i=!1,r&&(r=!1,l.process(u))}};return l}const il=["read","resolveKeyframes","update","preRender","render","postRender"],OT=40;function Xy(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=il.reduce((h,m)=>(h[m]=FT(s),h),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:f}=o,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,OT),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),d.process(r),f.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},_=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:il.reduce((h,m)=>{const v=o[m];return h[m]=(x,P=!1,A=!1)=>(n||_(),v.schedule(x,P,A)),h},{}),cancel:h=>{for(let m=0;m<il.length;m++)o[il[m]].cancel(h)},state:r,steps:o}}const{schedule:nt,cancel:hr,state:Ut,steps:Rc}=Xy(typeof requestAnimationFrame<"u"?requestAnimationFrame:Xt,!0),jy=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,kT=1e-7,BT=12;function VT(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=jy(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>kT&&++a<BT);return o}function ba(t,e,n,i){if(t===e&&n===i)return Xt;const r=s=>VT(s,0,1,t,n);return s=>s===0||s===1?s:jy(r(s),e,i)}const Yy=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,$y=t=>e=>1-t(1-e),qy=ba(.33,1.53,.69,.99),dp=$y(qy),Ky=Yy(dp),Zy=t=>(t*=2)<1?.5*dp(t):.5*(2-Math.pow(2,-10*(t-1))),hp=t=>1-Math.sin(Math.acos(t)),Qy=$y(hp),Jy=Yy(hp),ex=t=>/^0[^.\s]+$/u.test(t);function zT(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||ex(t):!0}let dd=Xt;const tx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),nx=t=>e=>typeof e=="string"&&e.startsWith(t),ix=nx("--"),HT=nx("var(--"),pp=t=>HT(t)?GT.test(t.split("/*")[0].trim()):!1,GT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,WT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function XT(t){const e=WT.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function rx(t,e,n=1){const[i,r]=XT(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return tx(o)?parseFloat(o):o}return pp(r)?rx(r,e,n+1):r}const pr=(t,e,n)=>n>e?e:n<t?t:n,po={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},xa={...po,transform:t=>pr(0,1,t)},rl={...po,default:1},La=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Yi=La("deg"),oi=La("%"),Ae=La("px"),jT=La("vh"),YT=La("vw"),_g={...oi,parse:t=>oi.parse(t)/100,transform:t=>oi.transform(t*100)},$T=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),yg=t=>t===po||t===Ae,xg=(t,e)=>parseFloat(t.split(", ")[e]),Sg=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return xg(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?xg(s[1],t):0}},qT=new Set(["x","y","z"]),KT=Pa.filter(t=>!qT.has(t));function ZT(t){const e=[];return KT.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const to={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Sg(4,13),y:Sg(5,14)};to.translateX=to.x;to.translateY=to.y;const sx=t=>e=>e.test(t),QT={test:t=>t==="auto",parse:t=>t},ox=[po,Ae,oi,Yi,YT,jT,QT],Mg=t=>ox.find(sx(t)),Yr=new Set;let hd=!1,pd=!1;function ax(){if(pd){const t=Array.from(Yr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=ZT(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}pd=!1,hd=!1,Yr.forEach(t=>t.complete()),Yr.clear()}function lx(){Yr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(pd=!0)})}function JT(){lx(),ax()}class mp{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Yr.add(this),hd||(hd=!0,nt.read(lx),nt.resolveKeyframes(ax))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Yr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Yr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Jo=t=>Math.round(t*1e5)/1e5,gp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function e1(t){return t==null}const t1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,vp=(t,e)=>n=>!!(typeof n=="string"&&t1.test(n)&&n.startsWith(t)||e&&!e1(n)&&Object.prototype.hasOwnProperty.call(n,e)),ux=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(gp);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},n1=t=>pr(0,255,t),Pc={...po,transform:t=>Math.round(n1(t))},Hr={test:vp("rgb","red"),parse:ux("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Pc.transform(t)+", "+Pc.transform(e)+", "+Pc.transform(n)+", "+Jo(xa.transform(i))+")"};function i1(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const md={test:vp("#"),parse:i1,transform:Hr.transform},Ds={test:vp("hsl","hue"),parse:ux("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+oi.transform(Jo(e))+", "+oi.transform(Jo(n))+", "+Jo(xa.transform(i))+")"},Ht={test:t=>Hr.test(t)||md.test(t)||Ds.test(t),parse:t=>Hr.test(t)?Hr.parse(t):Ds.test(t)?Ds.parse(t):md.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Hr.transform(t):Ds.transform(t)},r1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function s1(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(gp))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(r1))===null||n===void 0?void 0:n.length)||0)>0}const cx="number",fx="color",o1="var",a1="var(",Eg="${}",l1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Sa(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(l1,l=>(Ht.test(l)?(i.color.push(s),r.push(fx),n.push(Ht.parse(l))):l.startsWith(a1)?(i.var.push(s),r.push(o1),n.push(l)):(i.number.push(s),r.push(cx),n.push(parseFloat(l))),++s,Eg)).split(Eg);return{values:n,split:a,indexes:i,types:r}}function dx(t){return Sa(t).values}function hx(t){const{split:e,types:n}=Sa(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===cx?s+=Jo(r[o]):a===fx?s+=Ht.transform(r[o]):s+=r[o]}return s}}const u1=t=>typeof t=="number"?0:t;function c1(t){const e=dx(t);return hx(t)(e.map(u1))}const mr={test:s1,parse:dx,createTransformer:hx,getAnimatableNone:c1},f1=new Set(["brightness","contrast","saturate","opacity"]);function d1(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(gp)||[];if(!i)return t;const r=n.replace(i,"");let s=f1.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const h1=/\b([a-z-]*)\(.*?\)/gu,gd={...mr,getAnimatableNone:t=>{const e=t.match(h1);return e?e.map(d1).join(" "):t}},p1={borderWidth:Ae,borderTopWidth:Ae,borderRightWidth:Ae,borderBottomWidth:Ae,borderLeftWidth:Ae,borderRadius:Ae,radius:Ae,borderTopLeftRadius:Ae,borderTopRightRadius:Ae,borderBottomRightRadius:Ae,borderBottomLeftRadius:Ae,width:Ae,maxWidth:Ae,height:Ae,maxHeight:Ae,top:Ae,right:Ae,bottom:Ae,left:Ae,padding:Ae,paddingTop:Ae,paddingRight:Ae,paddingBottom:Ae,paddingLeft:Ae,margin:Ae,marginTop:Ae,marginRight:Ae,marginBottom:Ae,marginLeft:Ae,backgroundPositionX:Ae,backgroundPositionY:Ae},m1={rotate:Yi,rotateX:Yi,rotateY:Yi,rotateZ:Yi,scale:rl,scaleX:rl,scaleY:rl,scaleZ:rl,skew:Yi,skewX:Yi,skewY:Yi,distance:Ae,translateX:Ae,translateY:Ae,translateZ:Ae,x:Ae,y:Ae,z:Ae,perspective:Ae,transformPerspective:Ae,opacity:xa,originX:_g,originY:_g,originZ:Ae},Tg={...po,transform:Math.round},_p={...p1,...m1,zIndex:Tg,size:Ae,fillOpacity:xa,strokeOpacity:xa,numOctaves:Tg},g1={..._p,color:Ht,backgroundColor:Ht,outlineColor:Ht,fill:Ht,stroke:Ht,borderColor:Ht,borderTopColor:Ht,borderRightColor:Ht,borderBottomColor:Ht,borderLeftColor:Ht,filter:gd,WebkitFilter:gd},yp=t=>g1[t];function px(t,e){let n=yp(t);return n!==gd&&(n=mr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const v1=new Set(["auto","none","0"]);function _1(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!v1.has(s)&&Sa(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=px(n,r)}class mx extends mp{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="string"&&(u=u.trim(),pp(u))){const c=rx(u,n.current);c!==void 0&&(e[l]=c),l===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!$T.has(i)||e.length!==2)return;const[r,s]=e,o=Mg(r),a=Mg(s);if(o!==a)if(yg(o)&&yg(a))for(let l=0;l<e.length;l++){const u=e[l];typeof u=="string"&&(e[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)zT(e[r])&&i.push(r);i.length&&_1(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=to[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=to[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function xp(t){return typeof t=="function"}let Vl;function y1(){Vl=void 0}const ai={now:()=>(Vl===void 0&&ai.set(Ut.isProcessing||UT.useManualTiming?Ut.timestamp:performance.now()),Vl),set:t=>{Vl=t,queueMicrotask(y1)}},wg=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(mr.test(t)||t==="0")&&!t.startsWith("url("));function x1(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function S1(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=wg(r,e),a=wg(s,e);return!o||!a?!1:x1(t)||(n==="spring"||xp(n))&&i}const M1=40;class gx{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ai.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>M1?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&JT(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=ai.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!S1(e,i,r,s))if(o)this.options.duration=0;else{l==null||l(ju(e,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const c=this.initPlayback(e,n);c!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function vx(t,e){return e?t*(1e3/e):0}const E1=5;function _x(t,e,n){const i=Math.max(e-E1,0);return vx(n-t(i),e-i)}const bc=.001,T1=.01,w1=10,A1=.05,C1=1;function R1({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s,o=1-e;o=pr(A1,C1,o),t=pr(T1,w1,Ci(t)),o<1?(r=u=>{const c=u*o,d=c*t,f=c-n,p=vd(u,o),_=Math.exp(-d);return bc-f/p*_},s=u=>{const d=u*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(u,2)*t,_=Math.exp(-d),y=vd(Math.pow(u,2),o);return(-r(u)+bc>0?-1:1)*((f-p)*_)/y}):(r=u=>{const c=Math.exp(-u*t),d=(u-n)*t+1;return-bc+c*d},s=u=>{const c=Math.exp(-u*t),d=(n-u)*(t*t);return c*d});const a=5/t,l=b1(r,s,a);if(t=Ai(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const P1=12;function b1(t,e,n){let i=n;for(let r=1;r<P1;r++)i=i-t(i)/e(i);return i}function vd(t,e){return t*Math.sqrt(1-e*e)}const L1=["duration","bounce"],D1=["stiffness","damping","mass"];function Ag(t,e){return e.some(n=>t[n]!==void 0)}function I1(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Ag(t,D1)&&Ag(t,L1)){const n=R1(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function yx({keyframes:t,restDelta:e,restSpeed:n,...i}){const r=t[0],s=t[t.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:u,duration:c,velocity:d,isResolvedFromDuration:f}=I1({...i,velocity:-Ci(i.velocity||0)}),p=d||0,_=l/(2*Math.sqrt(a*u)),y=s-r,g=Ci(Math.sqrt(a/u)),h=Math.abs(y)<5;n||(n=h?.01:2),e||(e=h?.005:.5);let m;if(_<1){const v=vd(g,_);m=x=>{const P=Math.exp(-_*g*x);return s-P*((p+_*g*y)/v*Math.sin(v*x)+y*Math.cos(v*x))}}else if(_===1)m=v=>s-Math.exp(-g*v)*(y+(p+g*y)*v);else{const v=g*Math.sqrt(_*_-1);m=x=>{const P=Math.exp(-_*g*x),A=Math.min(v*x,300);return s-P*((p+_*g*y)*Math.sinh(A)+v*y*Math.cosh(A))/v}}return{calculatedDuration:f&&c||null,next:v=>{const x=m(v);if(f)o.done=v>=c;else{let P=0;_<1&&(P=v===0?Ai(p):_x(m,v,x));const A=Math.abs(P)<=n,w=Math.abs(s-x)<=e;o.done=A&&w}return o.value=o.done?s:x,o}}}function Cg({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=t[0],f={done:!1,value:d},p=C=>a!==void 0&&C<a||l!==void 0&&C>l,_=C=>a===void 0?l:l===void 0||Math.abs(a-C)<Math.abs(l-C)?a:l;let y=n*e;const g=d+y,h=o===void 0?g:o(g);h!==g&&(y=h-d);const m=C=>-y*Math.exp(-C/i),v=C=>h+m(C),x=C=>{const T=m(C),S=v(C);f.done=Math.abs(T)<=u,f.value=f.done?h:S};let P,A;const w=C=>{p(f.value)&&(P=C,A=yx({keyframes:[f.value,_(f.value)],velocity:_x(v,C,f.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return w(0),{calculatedDuration:null,next:C=>{let T=!1;return!A&&P===void 0&&(T=!0,x(C),w(C)),P!==void 0&&C>=P?A.next(C-P):(!T&&x(C),f)}}}const U1=ba(.42,0,1,1),N1=ba(0,0,.58,1),xx=ba(.42,0,.58,1),F1=t=>Array.isArray(t)&&typeof t[0]!="number",Sp=t=>Array.isArray(t)&&typeof t[0]=="number",Rg={linear:Xt,easeIn:U1,easeInOut:xx,easeOut:N1,circIn:hp,circInOut:Jy,circOut:Qy,backIn:dp,backInOut:Ky,backOut:qy,anticipate:Zy},Pg=t=>{if(Sp(t)){dd(t.length===4);const[e,n,i,r]=t;return ba(e,n,i,r)}else if(typeof t=="string")return dd(Rg[t]!==void 0),Rg[t];return t},O1=(t,e)=>n=>e(t(n)),Ri=(...t)=>t.reduce(O1),no=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},pt=(t,e,n)=>t+(e-t)*n;function Lc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function k1({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Lc(l,a,t+1/3),s=Lc(l,a,t),o=Lc(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function yu(t,e){return n=>n>0?e:t}const Dc=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},B1=[md,Hr,Ds],V1=t=>B1.find(e=>e.test(t));function bg(t){const e=V1(t);if(!e)return!1;let n=e.parse(t);return e===Ds&&(n=k1(n)),n}const Lg=(t,e)=>{const n=bg(t),i=bg(e);if(!n||!i)return yu(t,e);const r={...n};return s=>(r.red=Dc(n.red,i.red,s),r.green=Dc(n.green,i.green,s),r.blue=Dc(n.blue,i.blue,s),r.alpha=pt(n.alpha,i.alpha,s),Hr.transform(r))},_d=new Set(["none","hidden"]);function z1(t,e){return _d.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function H1(t,e){return n=>pt(t,e,n)}function Mp(t){return typeof t=="number"?H1:typeof t=="string"?pp(t)?yu:Ht.test(t)?Lg:X1:Array.isArray(t)?Sx:typeof t=="object"?Ht.test(t)?Lg:G1:yu}function Sx(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Mp(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function G1(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Mp(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function W1(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const X1=(t,e)=>{const n=mr.createTransformer(e),i=Sa(t),r=Sa(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?_d.has(t)&&!r.values.length||_d.has(e)&&!i.values.length?z1(t,e):Ri(Sx(W1(i,r),r.values),n):yu(t,e)};function Mx(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?pt(t,e,n):Mp(t)(t,e)}function j1(t,e,n){const i=[],r=n||Mx,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Xt:e;a=Ri(l,a)}i.push(a)}return i}function Y1(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(dd(s===e.length),s===1)return()=>e[0];if(s===2&&t[0]===t[1])return()=>e[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=j1(e,i,r),a=o.length,l=u=>{let c=0;if(a>1)for(;c<t.length-2&&!(u<t[c+1]);c++);const d=no(t[c],t[c+1],u);return o[c](d)};return n?u=>l(pr(t[0],t[s-1],u)):l}function $1(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=no(0,e,i);t.push(pt(n,1,r))}}function q1(t){const e=[0];return $1(e,t.length-1),e}function K1(t,e){return t.map(n=>n*e)}function Z1(t,e){return t.map(()=>e||xx).splice(0,t.length-1)}function xu({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=F1(i)?i.map(Pg):Pg(i),s={done:!1,value:e[0]},o=K1(n&&n.length===e.length?n:q1(e),t),a=Y1(o,e,{ease:Array.isArray(r)?r:Z1(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const Dg=2e4;function Q1(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Dg;)e+=n,i=t.next(e);return e>=Dg?1/0:e}const J1=t=>{const e=({timestamp:n})=>t(n);return{start:()=>nt.update(e,!0),stop:()=>hr(e),now:()=>Ut.isProcessing?Ut.timestamp:ai.now()}},ew={decay:Cg,inertia:Cg,tween:xu,keyframes:xu,spring:yx},tw=t=>t/100;class Ep extends gx{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||mp,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=xp(n)?n:ew[n]||xu;let l,u;a!==xu&&typeof e[0]!="number"&&(l=Ri(tw,Mx(e[0],e[1])),e=[0,100]);const c=a({...this.options,keyframes:e});s==="mirror"&&(u=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Q1(c));const{calculatedDuration:d}=c,f=d+r,p=f*(i+1)-r;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:C}=this.options;return{done:!0,value:C[C.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:f,repeat:p,repeatType:_,repeatDelay:y,onUpdate:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-f*(this.speed>=0?1:-1),m=this.speed>=0?h<0:h>c;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let v=this.currentTime,x=s;if(p){const C=Math.min(this.currentTime,c)/d;let T=Math.floor(C),S=C%1;!S&&C>=1&&(S=1),S===1&&T--,T=Math.min(T,p+1),!!(T%2)&&(_==="reverse"?(S=1-S,y&&(S-=y/d)):_==="mirror"&&(x=o)),v=pr(0,1,S)*d}const P=m?{done:!1,value:l[0]}:x.next(v);a&&(P.value=a(P.value));let{done:A}=P;!m&&u!==null&&(A=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const w=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return w&&r!==void 0&&(P.value=ju(l,this.options,r)),g&&g(P.value),w&&this.finish(),P}get duration(){const{resolved:e}=this;return e?Ci(e.calculatedDuration):0}get time(){return Ci(this.currentTime)}set time(e){e=Ai(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Ci(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=J1,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const nw=new Set(["opacity","clipPath","filter","transform"]),iw=10,rw=(t,e)=>{let n="";const i=Math.max(Math.round(e/iw),2);for(let r=0;r<i;r++)n+=t(no(0,i-1,r))+", ";return`linear(${n.substring(0,n.length-2)})`};function Tp(t){let e;return()=>(e===void 0&&(e=t()),e)}const sw={linearEasing:void 0};function ow(t,e){const n=Tp(t);return()=>{var i;return(i=sw[e])!==null&&i!==void 0?i:n()}}const Su=ow(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function Ex(t){return!!(typeof t=="function"&&Su()||!t||typeof t=="string"&&(t in yd||Su())||Sp(t)||Array.isArray(t)&&t.every(Ex))}const Bo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,yd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bo([0,.65,.55,1]),circOut:Bo([.55,0,1,.45]),backIn:Bo([.31,.01,.66,-.59]),backOut:Bo([.33,1.53,.69,.99])};function Tx(t,e){if(t)return typeof t=="function"&&Su()?rw(t,e):Sp(t)?Bo(t):Array.isArray(t)?t.map(n=>Tx(n,e)||yd.easeOut):yd[t]}function aw(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=Tx(a,r);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function Ig(t,e){t.timeline=e,t.onfinish=null}const lw=Tp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Mu=10,uw=2e4;function cw(t){return xp(t.type)||t.type==="spring"||!Ex(t.ease)}function fw(t,e){const n=new Ep({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<uw;)i=n.sample(s),r.push(i.value),s+=Mu;return{times:void 0,keyframes:r,duration:s-Mu,ease:"linear"}}const wx={anticipate:Zy,backInOut:Ky,circInOut:Jy};function dw(t){return t in wx}class Ug extends gx{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new mx(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){var i;let{duration:r=300,times:s,ease:o,type:a,motionValue:l,name:u,startTime:c}=this.options;if(!(!((i=l.owner)===null||i===void 0)&&i.current))return!1;if(typeof o=="string"&&Su()&&dw(o)&&(o=wx[o]),cw(this.options)){const{onComplete:f,onUpdate:p,motionValue:_,element:y,...g}=this.options,h=fw(e,g);e=h.keyframes,e.length===1&&(e[1]=e[0]),r=h.duration,s=h.times,o=h.ease,a="keyframes"}const d=aw(l.owner.current,u,e,{...this.options,duration:r,times:s,ease:o});return d.startTime=c??this.calcStartTime(),this.pendingTimeline?(Ig(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;l.set(ju(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:s,type:a,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Ci(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Ci(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Ai(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Xt;const{animation:i}=n;Ig(i,e)}return Xt}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:d,element:f,...p}=this.options,_=new Ep({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),y=Ai(this.time);u.setWithVelocity(_.sample(y-Mu).value,_.sample(y).value,Mu)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;return lw()&&i&&nw.has(i)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const hw=Tp(()=>window.ScrollTimeline!==void 0);class pw{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,n){return Promise.all(this.animations).then(e).catch(n)}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>hw()&&r.attachTimeline?r.attachTimeline(e):n(r));return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function mw({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const wp=(t,e,n,i={},r,s)=>o=>{const a=fp(i,t)||{},l=a.delay||i.delay||0;let{elapsed:u=0}=i;u=u-Ai(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};mw(a)||(c={...c,...IT(t,c)}),c.duration&&(c.duration=Ai(c.duration)),c.repeatDelay&&(c.repeatDelay=Ai(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const f=ju(c.keyframes,a);if(f!==void 0)return nt.update(()=>{c.onUpdate(f),c.onComplete()}),new pw([])}return!s&&Ug.supports(c)?new Ug(c):new Ep(c)},gw=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),vw=t=>fd(t)?t[t.length-1]||0:t;function Ap(t,e){t.indexOf(e)===-1&&t.push(e)}function Cp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Rp{constructor(){this.subscriptions=[]}add(e){return Ap(this.subscriptions,e),()=>Cp(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ng=30,_w=t=>!isNaN(parseFloat(t));class yw{constructor(e,n={}){this.version="11.11.11",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=ai.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ai.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=_w(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Rp);const i=this.events[e].add(n);return e==="change"?()=>{i(),nt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ai.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ng)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Ng);return vx(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ma(t,e){return new yw(t,e)}function xw(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ma(n))}function Sw(t,e){const n=Xu(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=vw(s[o]);xw(t,o,a)}}const Pp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Mw="framerAppearId",Ax="data-"+Pp(Mw);function Cx(t){return t.props[Ax]}const Wt=t=>!!(t&&t.getVelocity);function Ew(t){return!!(Wt(t)&&t.add)}function xd(t,e){const n=t.getValue("willChange");if(Ew(n))return n.add(e)}function Tw({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function Rx(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const u=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const f=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||c&&Tw(c,d))continue;const _={delay:n,...fp(o||{},d)};let y=!1;if(window.MotionHandoffAnimation){const h=Cx(t);if(h){const m=window.MotionHandoffAnimation(h,d,nt);m!==null&&(_.startTime=m,y=!0)}}xd(t,d),f.start(wp(d,f,p,t.shouldReduceMotion&&is.has(d)?{type:!1}:_,t,y));const g=f.animation;g&&u.push(g)}return a&&Promise.all(u).then(()=>{nt.update(()=>{a&&Sw(t,a)})}),u}function Sd(t,e,n={}){var i;const r=Xu(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(Rx(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=s;return ww(t,e,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,c]=l==="beforeChildren"?[o,a]:[a,o];return u().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function ww(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(Aw).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(Sd(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function Aw(t,e){return t.sortNodePosition(e)}function Cw(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Sd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Sd(t,e,n);else{const r=typeof e=="function"?Xu(t,e,n.custom):e;i=Promise.all(Rx(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const Rw=cp.length;function Px(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?Px(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<Rw;n++){const i=cp[n],r=t.props[i];(ya(r)||r===!1)&&(e[i]=r)}return e}const Pw=[...up].reverse(),bw=up.length;function Lw(t){return e=>Promise.all(e.map(({animation:n,options:i})=>Cw(t,n,i)))}function Dw(t){let e=Lw(t),n=Fg(),i=!0;const r=l=>(u,c)=>{var d;const f=Xu(t,c,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:p,transitionEnd:_,...y}=f;u={...u,...y,..._}}return u};function s(l){e=l(t)}function o(l){const{props:u}=t,c=Px(t.parent)||{},d=[],f=new Set;let p={},_=1/0;for(let g=0;g<bw;g++){const h=Pw[g],m=n[h],v=u[h]!==void 0?u[h]:c[h],x=ya(v),P=h===l?m.isActive:null;P===!1&&(_=g);let A=v===c[h]&&v!==u[h]&&x;if(A&&i&&t.manuallyAnimateOnMount&&(A=!1),m.protectedKeys={...p},!m.isActive&&P===null||!v&&!m.prevProp||Wu(v)||typeof v=="boolean")continue;const w=Iw(m.prevProp,v);let C=w||h===l&&m.isActive&&!A&&x||g>_&&x,T=!1;const S=Array.isArray(v)?v:[v];let b=S.reduce(r(h),{});P===!1&&(b={});const{prevResolvedValues:z={}}=m,V={...z,...b},$=X=>{C=!0,f.has(X)&&(T=!0,f.delete(X)),m.needsAnimating[X]=!0;const L=t.getValue(X);L&&(L.liveStyle=!1)};for(const X in V){const L=b[X],W=z[X];if(p.hasOwnProperty(X))continue;let q=!1;fd(L)&&fd(W)?q=!Wy(L,W):q=L!==W,q?L!=null?$(X):f.add(X):L!==void 0&&f.has(X)?$(X):m.protectedKeys[X]=!0}m.prevProp=v,m.prevResolvedValues=b,m.isActive&&(p={...p,...b}),i&&t.blockInitialAnimation&&(C=!1),C&&(!(A&&w)||T)&&d.push(...S.map(X=>({animation:X,options:{type:h}})))}if(f.size){const g={};f.forEach(h=>{const m=t.getBaseTarget(h),v=t.getValue(h);v&&(v.liveStyle=!0),g[h]=m??null}),d.push({animation:g})}let y=!!d.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(d):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=t.variantChildren)===null||c===void 0||c.forEach(f=>{var p;return(p=f.animationState)===null||p===void 0?void 0:p.setActive(l,u)}),n[l].isActive=u;const d=o(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Fg(),i=!0}}}function Iw(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Wy(e,t):!1}function Er(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Fg(){return{animate:Er(!0),whileInView:Er(),whileHover:Er(),whileTap:Er(),whileDrag:Er(),whileFocus:Er(),exit:Er()}}class Sr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Uw extends Sr{constructor(e){super(e),e.animationState||(e.animationState=Dw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Wu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let Nw=0;class Fw extends Sr{constructor(){super(...arguments),this.id=Nw++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Ow={animation:{Feature:Uw},exit:{Feature:Fw}},bx=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Yu(t,e="page"){return{point:{x:t[`${e}X`],y:t[`${e}Y`]}}}const kw=t=>e=>bx(e)&&t(e,Yu(e));function Mi(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Pi(t,e,n,i){return Mi(t,e,kw(n),i)}const Og=(t,e)=>Math.abs(t-e);function Bw(t,e){const n=Og(t.x,e.x),i=Og(t.y,e.y);return Math.sqrt(n**2+i**2)}class Lx{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Uc(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=Bw(d.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:_}=d,{timestamp:y}=Ut;this.history.push({..._,timestamp:y});const{onStart:g,onMove:h}=this.handlers;f||(g&&g(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Ic(f,this.transformPagePoint),nt.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:p,onSessionEnd:_,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Uc(d.type==="pointercancel"?this.lastMoveEventInfo:Ic(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,g),_&&_(d,g)},!bx(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Yu(e),a=Ic(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=Ut;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(e,Uc(a,this.history)),this.removeListeners=Ri(Pi(this.contextWindow,"pointermove",this.handlePointerMove),Pi(this.contextWindow,"pointerup",this.handlePointerUp),Pi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),hr(this.updatePoint)}}function Ic(t,e){return e?{point:e(t.point)}:t}function kg(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Uc({point:t},e){return{point:t,delta:kg(t,Dx(e)),offset:kg(t,Vw(e)),velocity:zw(e,.1)}}function Vw(t){return t[0]}function Dx(t){return t[t.length-1]}function zw(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=Dx(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ai(e)));)n--;if(!i)return{x:0,y:0};const s=Ci(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Ix(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Bg=Ix("dragHorizontal"),Vg=Ix("dragVertical");function Ux(t){let e=!1;if(t==="y")e=Vg();else if(t==="x")e=Bg();else{const n=Bg(),i=Vg();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function Nx(){const t=Ux(!0);return t?(t(),!1):!0}function Is(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}const Fx=1e-4,Hw=1-Fx,Gw=1+Fx,Ox=.01,Ww=0-Ox,Xw=0+Ox;function _n(t){return t.max-t.min}function jw(t,e,n){return Math.abs(t-e)<=n}function zg(t,e,n,i=.5){t.origin=i,t.originPoint=pt(e.min,e.max,t.origin),t.scale=_n(n)/_n(e),t.translate=pt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=Hw&&t.scale<=Gw||isNaN(t.scale))&&(t.scale=1),(t.translate>=Ww&&t.translate<=Xw||isNaN(t.translate))&&(t.translate=0)}function ea(t,e,n,i){zg(t.x,e.x,n.x,i?i.originX:void 0),zg(t.y,e.y,n.y,i?i.originY:void 0)}function Hg(t,e,n){t.min=n.min+e.min,t.max=t.min+_n(e)}function Yw(t,e,n){Hg(t.x,e.x,n.x),Hg(t.y,e.y,n.y)}function Gg(t,e,n){t.min=e.min-n.min,t.max=t.min+_n(e)}function ta(t,e,n){Gg(t.x,e.x,n.x),Gg(t.y,e.y,n.y)}function $w(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?pt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?pt(n,t,i.max):Math.min(t,n)),t}function Wg(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function qw(t,{top:e,left:n,bottom:i,right:r}){return{x:Wg(t.x,n,r),y:Wg(t.y,e,i)}}function Xg(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Kw(t,e){return{x:Xg(t.x,e.x),y:Xg(t.y,e.y)}}function Zw(t,e){let n=.5;const i=_n(t),r=_n(e);return r>i?n=no(e.min,e.max-i,t.min):i>r&&(n=no(t.min,t.max-r,e.min)),pr(0,1,n)}function Qw(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Md=.35;function Jw(t=Md){return t===!1?t=0:t===!0&&(t=Md),{x:jg(t,"left","right"),y:jg(t,"top","bottom")}}function jg(t,e,n){return{min:Yg(t,e),max:Yg(t,n)}}function Yg(t,e){return typeof t=="number"?t:t[e]||0}const $g=()=>({translate:0,scale:1,origin:0,originPoint:0}),Us=()=>({x:$g(),y:$g()}),qg=()=>({min:0,max:0}),Mt=()=>({x:qg(),y:qg()});function wn(t){return[t("x"),t("y")]}function kx({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function eA({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function tA(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Nc(t){return t===void 0||t===1}function Ed({scale:t,scaleX:e,scaleY:n}){return!Nc(t)||!Nc(e)||!Nc(n)}function Ir(t){return Ed(t)||Bx(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Bx(t){return Kg(t.x)||Kg(t.y)}function Kg(t){return t&&t!=="0%"}function Eu(t,e,n){const i=t-n,r=e*i;return n+r}function Zg(t,e,n,i,r){return r!==void 0&&(t=Eu(t,r,i)),Eu(t,n,i)+e}function Td(t,e=0,n=1,i,r){t.min=Zg(t.min,e,n,i,r),t.max=Zg(t.max,e,n,i,r)}function Vx(t,{x:e,y:n}){Td(t.x,e.translate,e.scale,e.originPoint),Td(t.y,n.translate,n.scale,n.originPoint)}const Qg=.999999999999,Jg=1.0000000000001;function nA(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Fs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Vx(t,o)),i&&Ir(s.latestValues)&&Fs(t,s.latestValues))}e.x<Jg&&e.x>Qg&&(e.x=1),e.y<Jg&&e.y>Qg&&(e.y=1)}function Ns(t,e){t.min=t.min+e,t.max=t.max+e}function ev(t,e,n,i,r=.5){const s=pt(t.min,t.max,r);Td(t,e,n,s,i)}function Fs(t,e){ev(t.x,e.x,e.scaleX,e.scale,e.originX),ev(t.y,e.y,e.scaleY,e.scale,e.originY)}function zx(t,e){return kx(tA(t.getBoundingClientRect(),e))}function iA(t,e,n){const i=zx(t,n),{scroll:r}=e;return r&&(Ns(i.x,r.offset.x),Ns(i.y,r.offset.y)),i}const Hx=({current:t})=>t?t.ownerDocument.defaultView:null,rA=new WeakMap;class sA{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Mt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Yu(c,"page").point)},s=(c,d)=>{const{drag:f,dragPropagation:p,onDragStart:_}=this.getProps();if(f&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Ux(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),wn(g=>{let h=this.getAxisMotionValue(g).get()||0;if(oi.test(h)){const{projection:m}=this.visualElement;if(m&&m.layout){const v=m.layout.layoutBox[g];v&&(h=_n(v)*(parseFloat(h)/100))}}this.originPoint[g]=h}),_&&nt.postRender(()=>_(c,d)),xd(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(c,d)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:_,onDrag:y}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:g}=d;if(p&&this.currentDirection===null){this.currentDirection=oA(g),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",d.point,g),this.updateAxis("y",d.point,g),this.visualElement.render(),y&&y(c,d)},a=(c,d)=>this.stop(c,d),l=()=>wn(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Lx(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Hx(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&nt.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!sl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=$w(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Is(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=qw(r.layoutBox,n):this.constraints=!1,this.elastic=Jw(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&wn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Qw(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Is(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=iA(i,r.root,this.visualElement.getTransformPagePoint());let o=Kw(r.layout.layoutBox,s);if(n){const a=n(eA(o));this.hasMutatedConstraints=!!a,a&&(o=kx(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=wn(c=>{if(!sl(c,n,this.currentDirection))return;let d=l&&l[c]||{};o&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,_={type:"inertia",velocity:i?e[c]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(c,_)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return xd(this.visualElement,e),i.start(wp(e,i,0,n,this.visualElement,!1))}stopAnimation(){wn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){wn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){wn(n=>{const{drag:i}=this.getProps();if(!sl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-pt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Is(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};wn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=Zw({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),wn(o=>{if(!sl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(pt(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;rA.set(this.visualElement,this);const e=this.visualElement.current,n=Pi(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Is(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),nt.read(i);const o=Mi(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(wn(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Md,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function sl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function oA(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class aA extends Sr{constructor(e){super(e),this.removeGroupControls=Xt,this.removeListeners=Xt,this.controls=new sA(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Xt}unmount(){this.removeGroupControls(),this.removeListeners()}}const tv=t=>(e,n)=>{t&&nt.postRender(()=>t(e,n))};class lA extends Sr{constructor(){super(...arguments),this.removePointerDownListener=Xt}onPointerDown(e){this.session=new Lx(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Hx(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:tv(e),onStart:tv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&nt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Pi(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const bp=Te.createContext(null);function uA(){const t=Te.useContext(bp);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=Te.useId();Te.useEffect(()=>i(r),[]);const s=Te.useCallback(()=>n&&n(r),[r,n]);return!e&&n?[!1,s]:[!0]}const Gx=Te.createContext({}),Wx=Te.createContext({}),zl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function nv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Po={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ae.test(t))t=parseFloat(t);else return t;const n=nv(t,e.target.x),i=nv(t,e.target.y);return`${n}% ${i}%`}},cA={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=mr.parse(t);if(r.length>5)return i;const s=mr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=pt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}},Tu={};function fA(t){Object.assign(Tu,t)}const{schedule:Lp,cancel:EI}=Xy(queueMicrotask,!1);class dA extends Te.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;fA(hA),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),zl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||nt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Lp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Xx(t){const[e,n]=uA(),i=Te.useContext(Gx);return Q.jsx(dA,{...t,layoutGroup:i,switchLayoutGroup:Te.useContext(Wx),isPresent:e,safeToRemove:n})}const hA={borderRadius:{...Po,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Po,borderTopRightRadius:Po,borderBottomLeftRadius:Po,borderBottomRightRadius:Po,boxShadow:cA},jx=["TopLeft","TopRight","BottomLeft","BottomRight"],pA=jx.length,iv=t=>typeof t=="string"?parseFloat(t):t,rv=t=>typeof t=="number"||Ae.test(t);function mA(t,e,n,i,r,s){r?(t.opacity=pt(0,n.opacity!==void 0?n.opacity:1,gA(i)),t.opacityExit=pt(e.opacity!==void 0?e.opacity:1,0,vA(i))):s&&(t.opacity=pt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<pA;o++){const a=`border${jx[o]}Radius`;let l=sv(e,a),u=sv(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||rv(l)===rv(u)?(t[a]=Math.max(pt(iv(l),iv(u),i),0),(oi.test(u)||oi.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=pt(e.rotate||0,n.rotate||0,i))}function sv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const gA=Yx(0,.5,Qy),vA=Yx(.5,.95,Xt);function Yx(t,e,n){return i=>i<t?0:i>e?1:n(no(t,e,i))}function ov(t,e){t.min=e.min,t.max=e.max}function En(t,e){ov(t.x,e.x),ov(t.y,e.y)}function av(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function lv(t,e,n,i,r){return t-=e,t=Eu(t,1/n,i),r!==void 0&&(t=Eu(t,1/r,i)),t}function _A(t,e=0,n=1,i=.5,r,s=t,o=t){if(oi.test(e)&&(e=parseFloat(e),e=pt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=pt(s.min,s.max,i);t===s&&(a-=e),t.min=lv(t.min,e,n,a,r),t.max=lv(t.max,e,n,a,r)}function uv(t,e,[n,i,r],s,o){_A(t,e[n],e[i],e[r],e.scale,s,o)}const yA=["x","scaleX","originX"],xA=["y","scaleY","originY"];function cv(t,e,n,i){uv(t.x,e,yA,n?n.x:void 0,i?i.x:void 0),uv(t.y,e,xA,n?n.y:void 0,i?i.y:void 0)}function fv(t){return t.translate===0&&t.scale===1}function $x(t){return fv(t.x)&&fv(t.y)}function dv(t,e){return t.min===e.min&&t.max===e.max}function SA(t,e){return dv(t.x,e.x)&&dv(t.y,e.y)}function hv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function qx(t,e){return hv(t.x,e.x)&&hv(t.y,e.y)}function pv(t){return _n(t.x)/_n(t.y)}function mv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class MA{constructor(){this.members=[]}add(e){Ap(this.members,e),e.scheduleRender()}remove(e){if(Cp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function EA(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:f,skewX:p,skewY:_}=n;u&&(i=`perspective(${u}px) ${i}`),c&&(i+=`rotate(${c}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),_&&(i+=`skewY(${_}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const TA=(t,e)=>t.depth-e.depth;class wA{constructor(){this.children=[],this.isDirty=!1}add(e){Ap(this.children,e),this.isDirty=!0}remove(e){Cp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(TA),this.isDirty=!1,this.children.forEach(e)}}function Hl(t){const e=Wt(t)?t.get():t;return gw(e)?e.toValue():e}function AA(t,e){const n=ai.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(hr(i),t(s-e))};return nt.read(i,!0),()=>hr(i)}function CA(t){return t instanceof SVGElement&&t.tagName!=="svg"}function RA(t,e,n){const i=Wt(t)?t:Ma(t);return i.start(wp("",i,e,n)),i.animation}const Ur={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Vo=typeof window<"u"&&window.MotionDebug!==void 0,Fc=["","X","Y","Z"],PA={visibility:"hidden"},gv=1e3;let bA=0;function Oc(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function Kx(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Cx(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",nt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&Kx(i)}function Zx({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=bA++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Vo&&(Ur.totalNodes=Ur.resolvedTargetDeltas=Ur.recalculatedProjection=0),this.nodes.forEach(IA),this.nodes.forEach(kA),this.nodes.forEach(BA),this.nodes.forEach(UA),Vo&&window.MotionDebug.record(Ur)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new wA)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Rp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=CA(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let d;const f=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=AA(f,250),zl.hasAnimatedSinceResize&&(zl.hasAnimatedSinceResize=!1,this.nodes.forEach(_v))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||WA,{onLayoutAnimationStart:g,onLayoutAnimationComplete:h}=c.getProps(),m=!this.targetLayout||!qx(this.targetLayout,_)||p,v=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||f&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,v);const x={...fp(y,"layout"),onPlay:g,onComplete:h};(c.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x)}else f||_v(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,hr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(VA),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Kx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(vv);return}this.isUpdating||this.nodes.forEach(FA),this.isUpdating=!1,this.nodes.forEach(OA),this.nodes.forEach(LA),this.nodes.forEach(DA),this.clearAllSnapshots();const a=ai.now();Ut.delta=pr(0,1e3/60,a-Ut.timestamp),Ut.timestamp=a,Ut.isProcessing=!0,Rc.update.process(Ut),Rc.preRender.process(Ut),Rc.render.process(Ut),Ut.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Lp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(NA),this.sharedNodes.forEach(zA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,nt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){nt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Mt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!$x(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||Ir(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),XA(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Mt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(jA))){const{scroll:c}=this.root;c&&(Ns(l.x,c.offset.x),Ns(l.y,c.offset.y))}return l}removeElementScroll(o){var a;const l=Mt();if(En(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:f}=c;c!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&En(l,o),Ns(l.x,d.offset.x),Ns(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=Mt();En(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Fs(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Ir(c.latestValues)&&Fs(l,c.latestValues)}return Ir(this.latestValues)&&Fs(l,this.latestValues),l}removeTransform(o){const a=Mt();En(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Ir(u.latestValues))continue;Ed(u.latestValues)&&u.updateSnapshot();const c=Mt(),d=u.measurePageBox();En(c,d),cv(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Ir(this.latestValues)&&cv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ut.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=Ut.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Mt(),this.relativeTargetOrigin=Mt(),ta(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),En(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Mt(),this.targetWithTransforms=Mt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Yw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):En(this.target,this.layout.layoutBox),Vx(this.target,this.targetDelta)):En(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Mt(),this.relativeTargetOrigin=Mt(),ta(this.relativeTargetOrigin,this.target,p.target),En(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Vo&&Ur.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ed(this.parent.latestValues)||Bx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Ut.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;En(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;nA(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Mt());const{target:_}=a;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(av(this.prevProjectionDelta.x,this.projectionDelta.x),av(this.prevProjectionDelta.y,this.projectionDelta.y)),ea(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!mv(this.projectionDelta.x,this.prevProjectionDelta.x)||!mv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_)),Vo&&Ur.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Us(),this.projectionDelta=Us(),this.projectionDeltaWithTransform=Us()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=Us();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=Mt(),p=l?l.source:void 0,_=this.layout?this.layout.source:void 0,y=p!==_,g=this.getStack(),h=!g||g.members.length<=1,m=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(GA));this.animationProgress=0;let v;this.mixTargetDelta=x=>{const P=x/1e3;yv(d.x,o.x,P),yv(d.y,o.y,P),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ta(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),HA(this.relativeTarget,this.relativeTargetOrigin,f,P),v&&SA(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=Mt()),En(v,this.relativeTarget)),y&&(this.animationValues=c,mA(c,u,this.latestValues,P,m,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(hr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=nt.update(()=>{zl.hasAnimatedSinceResize=!0,this.currentAnimation=RA(0,gv,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&Qx(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Mt();const d=_n(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=_n(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}En(a,l),Fs(a,c),ea(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new MA),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Oc("z",o,u,this.animationValues);for(let c=0;c<Fc.length;c++)Oc(`rotate${Fc[c]}`,o,u,this.animationValues),Oc(`skew${Fc[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return PA;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Hl(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Hl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Ir(this.latestValues)&&(y.transform=c?c({},""):"none",this.hasProjected=!1),y}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=EA(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:p,y:_}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${_.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const y in Tu){if(f[y]===void 0)continue;const{correct:g,applyTo:h}=Tu[y],m=u.transform==="none"?f[y]:g(f[y],d);if(h){const v=h.length;for(let x=0;x<v;x++)u[h[x]]=m}else u[y]=m}return this.options.layoutId&&(u.pointerEvents=d===this?Hl(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(vv),this.root.sharedNodes.clear()}}}function LA(t){t.updateLayout()}function DA(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?wn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=_n(f);f.min=i[d].min,f.max=f.min+p}):Qx(s,n.layoutBox,i)&&wn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=_n(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Us();ea(a,i,n.layoutBox);const l=Us();o?ea(l,t.applyTransform(r,!0),n.measuredBox):ea(l,i,n.layoutBox);const u=!$x(a);let c=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const _=Mt();ta(_,n.layoutBox,f.layoutBox);const y=Mt();ta(y,i,p.layoutBox),qx(_,y)||(c=!0),d.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=_,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function IA(t){Vo&&Ur.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function UA(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function NA(t){t.clearSnapshot()}function vv(t){t.clearMeasurements()}function FA(t){t.isLayoutDirty=!1}function OA(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function _v(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function kA(t){t.resolveTargetDelta()}function BA(t){t.calcProjection()}function VA(t){t.resetSkewAndRotation()}function zA(t){t.removeLeadSnapshot()}function yv(t,e,n){t.translate=pt(e.translate,0,n),t.scale=pt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function xv(t,e,n,i){t.min=pt(e.min,n.min,i),t.max=pt(e.max,n.max,i)}function HA(t,e,n,i){xv(t.x,e.x,n.x,i),xv(t.y,e.y,n.y,i)}function GA(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const WA={duration:.45,ease:[.4,0,.1,1]},Sv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Mv=Sv("applewebkit/")&&!Sv("chrome/")?Math.round:Xt;function Ev(t){t.min=Mv(t.min),t.max=Mv(t.max)}function XA(t){Ev(t.x),Ev(t.y)}function Qx(t,e,n){return t==="position"||t==="preserve-aspect"&&!jw(pv(e),pv(n),.2)}function jA(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const YA=Zx({attachResizeListener:(t,e)=>Mi(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),kc={current:void 0},Jx=Zx({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!kc.current){const t=new YA({});t.mount(window),t.setOptions({layoutScroll:!0}),kc.current=t}return kc.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),$A={pan:{Feature:lA},drag:{Feature:aA,ProjectionNode:Jx,MeasureLayout:Xx}};function Tv(t,e){const n=e?"pointerenter":"pointerleave",i=e?"onHoverStart":"onHoverEnd",r=(s,o)=>{if(s.pointerType==="touch"||Nx())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e);const l=a[i];l&&nt.postRender(()=>l(s,o))};return Pi(t.current,n,r,{passive:!t.getProps()[i]})}class qA extends Sr{mount(){this.unmount=Ri(Tv(this.node,!0),Tv(this.node,!1))}unmount(){}}class KA extends Sr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ri(Mi(this.node.current,"focus",()=>this.onFocus()),Mi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const eS=(t,e)=>e?t===e?!0:eS(t,e.parentElement):!1;function Bc(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Yu(n))}class ZA extends Sr{constructor(){super(...arguments),this.removeStartListeners=Xt,this.removeEndListeners=Xt,this.removeAccessibleListeners=Xt,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=Pi(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:d}=this.node.getProps(),f=!d&&!eS(this.node.current,a.target)?c:u;f&&nt.update(()=>f(a,l))},{passive:!(i.onTap||i.onPointerUp)}),o=Pi(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=Ri(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Bc("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&nt.postRender(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=Mi(this.node.current,"keyup",o),Bc("down",(a,l)=>{this.startPress(a,l)})},n=Mi(this.node.current,"keydown",e),i=()=>{this.isPressing&&Bc("cancel",(s,o)=>this.cancelPress(s,o))},r=Mi(this.node.current,"blur",i);this.removeAccessibleListeners=Ri(n,r)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&nt.postRender(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Nx()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&nt.postRender(()=>i(e,n))}mount(){const e=this.node.getProps(),n=Pi(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=Mi(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Ri(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const wd=new WeakMap,Vc=new WeakMap,QA=t=>{const e=wd.get(t.target);e&&e(t)},JA=t=>{t.forEach(QA)};function eC({root:t,...e}){const n=t||document;Vc.has(n)||Vc.set(n,{});const i=Vc.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(JA,{root:t,...e})),i[r]}function tC(t,e,n){const i=eC(e);return wd.set(t,n),i.observe(t),()=>{wd.delete(t),i.unobserve(t)}}const nC={some:0,all:1};class iC extends Sr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:nC[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return tC(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(rC(e,n))&&this.startObserver()}unmount(){}}function rC({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const sC={inView:{Feature:iC},tap:{Feature:ZA},focus:{Feature:KA},hover:{Feature:qA}},oC={layout:{ProjectionNode:Jx,MeasureLayout:Xx}},tS=Te.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),$u=Te.createContext({}),Dp=typeof window<"u",aC=Dp?Te.useLayoutEffect:Te.useEffect,nS=Te.createContext({strict:!1});function lC(t,e,n,i,r){var s,o;const{visualElement:a}=Te.useContext($u),l=Te.useContext(nS),u=Te.useContext(bp),c=Te.useContext(tS).reducedMotion,d=Te.useRef();i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const f=d.current,p=Te.useContext(Wx);f&&!f.projection&&r&&(f.type==="html"||f.type==="svg")&&uC(d.current,n,r,p);const _=Te.useRef(!1);Te.useInsertionEffect(()=>{f&&_.current&&f.update(n,u)});const y=n[Ax],g=Te.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return aC(()=>{f&&(_.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),Lp.render(f.render),g.current&&f.animationState&&f.animationState.animateChanges())}),Te.useEffect(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,y)}),g.current=!1))}),f}function uC(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:iS(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Is(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:u})}function iS(t){if(t)return t.options.allowProjection!==!1?t.projection:iS(t.parent)}function cC(t,e,n){return Te.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Is(n)&&(n.current=i))},[e])}function qu(t){return Wu(t.animate)||cp.some(e=>ya(t[e]))}function rS(t){return!!(qu(t)||t.variants)}function fC(t,e){if(qu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ya(n)?n:void 0,animate:ya(i)?i:void 0}}return t.inherit!==!1?e:{}}function dC(t){const{initial:e,animate:n}=fC(t,Te.useContext($u));return Te.useMemo(()=>({initial:e,animate:n}),[wv(e),wv(n)])}function wv(t){return Array.isArray(t)?t.join(" "):t}const Av={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},io={};for(const t in Av)io[t]={isEnabled:e=>Av[t].some(n=>!!e[n])};function hC(t){for(const e in t)io[e]={...io[e],...t[e]}}const pC=Symbol.for("motionComponentSymbol");function mC({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&hC(t);function s(a,l){let u;const c={...Te.useContext(tS),...a,layoutId:gC(a)},{isStatic:d}=c,f=dC(a),p=i(a,d);if(!d&&Dp){vC();const _=_C(c);u=_.MeasureLayout,f.visualElement=lC(r,p,c,e,_.ProjectionNode)}return Q.jsxs($u.Provider,{value:f,children:[u&&f.visualElement?Q.jsx(u,{visualElement:f.visualElement,...c}):null,n(r,a,cC(p,f.visualElement,l),p,d,f.visualElement)]})}const o=Te.forwardRef(s);return o[pC]=r,o}function gC({layoutId:t}){const e=Te.useContext(Gx).id;return e&&t!==void 0?e+"-"+t:t}function vC(t,e){Te.useContext(nS).strict}function _C(t){const{drag:e,layout:n}=io;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const yC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ip(t){return typeof t!="string"||t.includes("-")?!1:!!(yC.indexOf(t)>-1||/[A-Z]/u.test(t))}function sS(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const oS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function aS(t,e,n,i){sS(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(oS.has(r)?r:Pp(r),e.attrs[r])}function lS(t,{layout:e,layoutId:n}){return is.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Tu[t]||t==="opacity")}function Up(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(Wt(r[o])||e.style&&Wt(e.style[o])||lS(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function uS(t,e,n){const i=Up(t,e,n);for(const r in t)if(Wt(t[r])||Wt(e[r])){const s=Pa.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function xC(t){const e=Te.useRef(null);return e.current===null&&(e.current=t()),e.current}function SC({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,r,s){const o={latestValues:MC(i,r,s,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const cS=t=>(e,n)=>{const i=Te.useContext($u),r=Te.useContext(bp),s=()=>SC(t,e,i,r);return n?s():xC(s)};function MC(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=Hl(s[f]);let{initial:o,animate:a}=t;const l=qu(t),u=rS(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const d=c?a:o;if(d&&typeof d!="boolean"&&!Wu(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const _=lp(t,f[p]);if(_){const{transitionEnd:y,transition:g,...h}=_;for(const m in h){let v=h[m];if(Array.isArray(v)){const x=c?v.length-1:0;v=v[x]}v!==null&&(r[m]=v)}for(const m in y)r[m]=y[m]}}}return r}const Np=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),fS=()=>({...Np(),attrs:{}}),dS=(t,e)=>e&&typeof t=="number"?e.transform(t):t,EC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},TC=Pa.length;function wC(t,e,n){let i="",r=!0;for(let s=0;s<TC;s++){const o=Pa[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=dS(a,_p[o]);if(!l){r=!1;const c=EC[o]||o;i+=`${c}(${u}) `}n&&(e[o]=u)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Fp(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const u=e[l];if(is.has(l)){o=!0;continue}else if(ix(l)){r[l]=u;continue}else{const c=dS(u,_p[l]);l.startsWith("origin")?(a=!0,s[l]=c):i[l]=c}}if(e.transform||(o||n?i.transform=wC(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;i.transformOrigin=`${l} ${u} ${c}`}}function Cv(t,e,n){return typeof t=="string"?t:Ae.transform(e+n*t)}function AC(t,e,n){const i=Cv(e,t.x,t.width),r=Cv(n,t.y,t.height);return`${i} ${r}`}const CC={offset:"stroke-dashoffset",array:"stroke-dasharray"},RC={offset:"strokeDashoffset",array:"strokeDasharray"};function PC(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?CC:RC;t[s.offset]=Ae.transform(-i);const o=Ae.transform(e),a=Ae.transform(n);t[s.array]=`${o} ${a}`}function Op(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,d){if(Fp(t,u,d),c){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:p,dimensions:_}=t;f.transform&&(_&&(p.transform=f.transform),delete f.transform),_&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=AC(_,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),o!==void 0&&PC(f,o,a,l,!1)}const kp=t=>typeof t=="string"&&t.toLowerCase()==="svg",bC={useVisualState:cS({scrapeMotionValuesFromProps:uS,createRenderState:fS,onMount:(t,e,{renderState:n,latestValues:i})=>{nt.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),nt.render(()=>{Op(n,i,kp(e.tagName),t.transformTemplate),aS(e,n)})}})},LC={useVisualState:cS({scrapeMotionValuesFromProps:Up,createRenderState:Np})};function hS(t,e,n){for(const i in e)!Wt(e[i])&&!lS(i,n)&&(t[i]=e[i])}function DC({transformTemplate:t},e){return Te.useMemo(()=>{const n=Np();return Fp(n,e,t),Object.assign({},n.vars,n.style)},[e])}function IC(t,e){const n=t.style||{},i={};return hS(i,n,t),Object.assign(i,DC(t,e)),i}function UC(t,e){const n={},i=IC(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const NC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function wu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||NC.has(t)}let pS=t=>!wu(t);function FC(t){t&&(pS=e=>e.startsWith("on")?!wu(e):t(e))}try{FC(require("@emotion/is-prop-valid").default)}catch{}function OC(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(pS(r)||n===!0&&wu(r)||!e&&!wu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function kC(t,e,n,i){const r=Te.useMemo(()=>{const s=fS();return Op(s,e,kp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};hS(s,t.style,t),r.style={...s,...r.style}}return r}function BC(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Ip(n)?kC:UC)(i,s,o,n),u=OC(i,typeof n=="string",t),c=n!==Te.Fragment?{...u,...l,ref:r}:{},{children:d}=i,f=Te.useMemo(()=>Wt(d)?d.get():d,[d]);return Te.createElement(n,{...c,children:f})}}function VC(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Ip(i)?bC:LC,preloadedFeatures:t,useRender:BC(r),createVisualElement:e,Component:i};return mC(o)}}const Ad={current:null},mS={current:!1};function zC(){if(mS.current=!0,!!Dp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ad.current=t.matches;t.addListener(e),e()}else Ad.current=!1}function HC(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Wt(r))t.addValue(i,r);else if(Wt(s))t.addValue(i,Ma(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,Ma(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Rv=new WeakMap,GC=[...ox,Ht,mr],WC=t=>GC.find(sx(t)),Pv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class XC{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=mp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=ai.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,nt.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=qu(n),this.isVariantNode=rS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const p=d[f];l[f]!==void 0&&Wt(p)&&p.set(l[f],!1)}}mount(e){this.current=e,Rv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),mS.current||zC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ad.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Rv.delete(this.current),this.projection&&this.projection.unmount(),hr(this.notifyUpdate),hr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=is.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&nt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in io){const n=io[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Mt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Pv.length;i++){const r=Pv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=HC(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ma(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(tx(r)||ex(r))?r=parseFloat(r):!WC(r)&&mr.test(n)&&(r=px(e,n)),this.setBaseTarget(e,Wt(r)?r.get():r)),Wt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=lp(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Wt(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Rp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class gS extends XC{constructor(){super(...arguments),this.KeyframeResolver=mx}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}}function jC(t){return window.getComputedStyle(t)}class YC extends gS{constructor(){super(...arguments),this.type="html",this.renderInstance=sS}readValueFromInstance(e,n){if(is.has(n)){const i=yp(n);return i&&i.default||0}else{const i=jC(e),r=(ix(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return zx(e,n)}build(e,n,i){Fp(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Up(e,n,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Wt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class $C extends gS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Mt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(is.has(n)){const i=yp(n);return i&&i.default||0}return n=oS.has(n)?n:Pp(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return uS(e,n,i)}build(e,n,i){Op(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){aS(e,n,i,r)}mount(e){this.isSVGTag=kp(e.tagName),super.mount(e)}}const qC=(t,e)=>Ip(t)?new $C(e):new YC(e,{allowProjection:t!==Te.Fragment}),KC=VC({...Ow,...sC,...$A,...oC},qC),ol=RT(KC);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vS=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=Te.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>Te.createElement("svg",{ref:l,...QC,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:vS("lucide",r),...a},[...o.map(([u,c])=>Te.createElement(u,c)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=(t,e)=>{const n=Te.forwardRef(({className:i,...r},s)=>Te.createElement(JC,{ref:s,iconNode:e,className:vS(`lucide-${ZC(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=Da("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=Da("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=Da("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=Da("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=Da("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bp="170",sR=0,bv=1,oR=2,_S=1,aR=2,gi=3,gr=0,ln=1,yi=2,ur=0,Xs=1,Lv=2,Dv=3,Iv=4,lR=5,Or=100,uR=101,cR=102,fR=103,dR=104,hR=200,pR=201,mR=202,gR=203,Cd=204,Rd=205,vR=206,_R=207,yR=208,xR=209,SR=210,MR=211,ER=212,TR=213,wR=214,Pd=0,bd=1,Ld=2,ro=3,Dd=4,Id=5,Ud=6,Nd=7,Vp=0,AR=1,CR=2,cr=0,RR=1,PR=2,bR=3,LR=4,DR=5,IR=6,UR=7,yS=300,so=301,oo=302,Fd=303,Od=304,Ku=306,kd=1e3,Gr=1001,Bd=1002,qn=1003,NR=1004,al=1005,ii=1006,zc=1007,Wr=1008,Ni=1009,xS=1010,SS=1011,Ea=1012,zp=1013,Jr=1014,Ei=1015,Ia=1016,Hp=1017,Gp=1018,ao=1020,MS=35902,ES=1021,TS=1022,jn=1023,wS=1024,AS=1025,js=1026,lo=1027,CS=1028,Wp=1029,RS=1030,Xp=1031,jp=1033,Gl=33776,Wl=33777,Xl=33778,jl=33779,Vd=35840,zd=35841,Hd=35842,Gd=35843,Wd=36196,Xd=37492,jd=37496,Yd=37808,$d=37809,qd=37810,Kd=37811,Zd=37812,Qd=37813,Jd=37814,eh=37815,th=37816,nh=37817,ih=37818,rh=37819,sh=37820,oh=37821,Yl=36492,ah=36494,lh=36495,PS=36283,uh=36284,ch=36285,fh=36286,FR=3200,OR=3201,Yp=0,kR=1,Qi="",An="srgb",mo="srgb-linear",Zu="linear",tt="srgb",os=7680,Uv=519,BR=512,VR=513,zR=514,bS=515,HR=516,GR=517,WR=518,XR=519,Nv=35044,Fv="300 es",Ti=2e3,Au=2001;class go{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hc=Math.PI/180,dh=180/Math.PI;function Ua(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function jR(t,e){return(t%e+e)%e}function Gc(t,e,n){return(1-n)*t+n*e}function bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,n,i,r,s,o,a,l,u){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],y=r[0],g=r[3],h=r[6],m=r[1],v=r[4],x=r[7],P=r[2],A=r[5],w=r[8];return s[0]=o*y+a*m+l*P,s[3]=o*g+a*v+l*A,s[6]=o*h+a*x+l*w,s[1]=u*y+c*m+d*P,s[4]=u*g+c*v+d*A,s[7]=u*h+c*x+d*w,s[2]=f*y+p*m+_*P,s[5]=f*g+p*v+_*A,s[8]=f*h+p*x+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,_=n*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Wc.makeScale(e,n)),this}rotate(e){return this.premultiply(Wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wc=new Ne;function LS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function YR(){const t=Cu("canvas");return t.style.display="block",t}const Ov={};function zo(t){t in Ov||(Ov[t]=!0,console.warn(t))}function $R(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function qR(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function KR(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===tt&&(t.r=bi(t.r),t.g=bi(t.g),t.b=bi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===tt&&(t.r=Ys(t.r),t.g=Ys(t.g),t.b=Ys(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Qi?Zu:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ys(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const kv=[.64,.33,.3,.6,.15,.06],Bv=[.2126,.7152,.0722],Vv=[.3127,.329],zv=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hv=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[mo]:{primaries:kv,whitePoint:Vv,transfer:Zu,toXYZ:zv,fromXYZ:Hv,luminanceCoefficients:Bv,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:kv,whitePoint:Vv,transfer:tt,toXYZ:zv,fromXYZ:Hv,luminanceCoefficients:Bv,outputColorSpaceConfig:{drawingBufferColorSpace:An}}});let as;class ZR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{as===void 0&&(as=Cu("canvas")),as.width=e.width,as.height=e.height;const i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=as}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bi(n[i]/255)*255):n[i]=bi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let QR=0;class DS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QR++}),this.uuid=Ua(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xc(r[o].image)):s.push(Xc(r[o]))}else s=Xc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ZR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JR=0;class un extends go{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Gr,r=Gr,s=ii,o=Wr,a=jn,l=Ni,u=un.DEFAULT_ANISOTROPY,c=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JR++}),this.uuid=Ua(),this.name="",this.source=new DS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case Bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case Bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=yS;un.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,n=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],y=l[2],g=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+y)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,x=(p+1)/2,P=(h+1)/2,A=(c+f)/4,w=(d+y)/4,C=(_+g)/4;return v>x&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=w/i):x>P?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=C/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=C/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(d-y)*(d-y)+(f-c)*(f-c));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(d-y)/m,this.z=(f-c)/m,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eP extends go{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new DS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends eP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class IS extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tP extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Na{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(d!==y||l!==f||u!==p||c!==_){let g=1-a;const h=l*f+u*p+c*_+d*y,m=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const P=Math.sqrt(v),A=Math.atan2(P,h*m);g=Math.sin(g*A)/P,a=Math.sin(a*A)/P}const x=a*m;if(l=l*g+f*x,u=u*g+p*x,c=c*g+_*x,d=d*g+y*x,g===1-a){const P=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=P,u*=P,c*=P,d*=P}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+c*d+l*p-u*f,e[n+1]=l*_+c*f+u*d-a*p,e[n+2]=u*_+c*p+a*f-l*d,e[n+3]=c*_-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Gv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Gv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jc=new F,Gv=new Na;class Fa{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ll.copy(i.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),ul.subVectors(this.max,Lo),ls.subVectors(e.a,Lo),us.subVectors(e.b,Lo),cs.subVectors(e.c,Lo),zi.subVectors(us,ls),Hi.subVectors(cs,us),Tr.subVectors(ls,cs);let n=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-Tr.z,Tr.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,Tr.z,0,-Tr.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-Tr.y,Tr.x,0];return!Yc(n,ls,us,cs,ul)||(n=[1,0,0,0,1,0,0,0,1],!Yc(n,ls,us,cs,ul))?!1:(cl.crossVectors(zi,Hi),n=[cl.x,cl.y,cl.z],Yc(n,ls,us,cs,ul))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new F,new F,new F,new F,new F,new F,new F,new F],kn=new F,ll=new Fa,ls=new F,us=new F,cs=new F,zi=new F,Hi=new F,Tr=new F,Lo=new F,ul=new F,cl=new F,wr=new F;function Yc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){wr.fromArray(t,s);const a=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),u=n.dot(wr),c=i.dot(wr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const nP=new Fa,Do=new F,$c=new F;class $p{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):nP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add($c)),this.expandByPoint(Do.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new F,qc=new F,fl=new F,Gi=new F,Kc=new F,dl=new F,Zc=new F;class iP{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qc.copy(e).add(n).multiplyScalar(.5),fl.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(qc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(fl),a=Gi.dot(this.direction),l=-Gi.dot(fl),u=Gi.lengthSq(),c=Math.abs(1-o*o);let d,f,p,_;if(c>0)if(d=o*l-a,f=o*a-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const y=1/c;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(qc).addScaledVector(fl,f),p}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){Kc.subVectors(n,e),dl.subVectors(i,e),Zc.crossVectors(Kc,dl);let o=this.direction.dot(Zc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(dl.crossVectors(Gi,dl));if(l<0)return null;const u=a*this.direction.dot(Kc.cross(Gi));if(u<0||l+u>o)return null;const c=-a*Gi.dot(Zc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,u,c,d,f,p,_,y,g){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,d,f,p,_,y,g)}set(e,n,i,r,s,o,a,l,u,c,d,f,p,_,y,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,_=a*c,y=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+_*u,n[5]=f-y*u,n[9]=-a*l,n[2]=y-f*u,n[6]=_+p*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,y=u*d;n[0]=f+y*a,n[4]=_*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=p*a-_,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,y=u*d;n[0]=f-y*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*c,n[9]=y-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,_=a*c,y=a*d;n[0]=l*c,n[4]=_*u-p,n[8]=f*u+y,n[1]=l*d,n[5]=y*u+f,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*c,n[4]=y-f*d,n[8]=_*d+p,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*d+_,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+y,n[5]=o*c,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*c,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rP,e,sP)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Wi.crossVectors(i,fn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Wi.crossVectors(i,fn)),Wi.normalize(),hl.crossVectors(fn,Wi),r[0]=Wi.x,r[4]=hl.x,r[8]=fn.x,r[1]=Wi.y,r[5]=hl.y,r[9]=fn.y,r[2]=Wi.z,r[6]=hl.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],y=i[6],g=i[10],h=i[14],m=i[3],v=i[7],x=i[11],P=i[15],A=r[0],w=r[4],C=r[8],T=r[12],S=r[1],b=r[5],z=r[9],V=r[13],$=r[2],J=r[6],j=r[10],X=r[14],L=r[3],W=r[7],q=r[11],oe=r[15];return s[0]=o*A+a*S+l*$+u*L,s[4]=o*w+a*b+l*J+u*W,s[8]=o*C+a*z+l*j+u*q,s[12]=o*T+a*V+l*X+u*oe,s[1]=c*A+d*S+f*$+p*L,s[5]=c*w+d*b+f*J+p*W,s[9]=c*C+d*z+f*j+p*q,s[13]=c*T+d*V+f*X+p*oe,s[2]=_*A+y*S+g*$+h*L,s[6]=_*w+y*b+g*J+h*W,s[10]=_*C+y*z+g*j+h*q,s[14]=_*T+y*V+g*X+h*oe,s[3]=m*A+v*S+x*$+P*L,s[7]=m*w+v*b+x*J+P*W,s[11]=m*C+v*z+x*j+P*q,s[15]=m*T+v*V+x*X+P*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],y=e[7],g=e[11],h=e[15];return _*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+y*(+n*l*p-n*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+g*(+n*u*d-n*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-n*l*d+n*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],y=e[13],g=e[14],h=e[15],m=d*g*u-y*f*u+y*l*p-a*g*p-d*l*h+a*f*h,v=_*f*u-c*g*u-_*l*p+o*g*p+c*l*h-o*f*h,x=c*y*u-_*d*u+_*a*p-o*y*p-c*a*h+o*d*h,P=_*d*l-c*y*l-_*a*f+o*y*f+c*a*g-o*d*g,A=n*m+i*v+r*x+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=m*w,e[1]=(y*f*s-d*g*s-y*r*p+i*g*p+d*r*h-i*f*h)*w,e[2]=(a*g*s-y*l*s+y*r*u-i*g*u-a*r*h+i*l*h)*w,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*w,e[4]=v*w,e[5]=(c*g*s-_*f*s+_*r*p-n*g*p-c*r*h+n*f*h)*w,e[6]=(_*l*s-o*g*s-_*r*u+n*g*u+o*r*h-n*l*h)*w,e[7]=(o*f*s-c*l*s+c*r*u-n*f*u-o*r*p+n*l*p)*w,e[8]=x*w,e[9]=(_*d*s-c*y*s-_*i*p+n*y*p+c*i*h-n*d*h)*w,e[10]=(o*y*s-_*a*s+_*i*u-n*y*u-o*i*h+n*a*h)*w,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*p-n*a*p)*w,e[12]=P*w,e[13]=(c*y*r-_*d*r+_*i*f-n*y*f-c*i*g+n*d*g)*w,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*g-n*a*g)*w,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*f+n*a*f)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,_=s*d,y=o*c,g=o*d,h=a*d,m=l*u,v=l*c,x=l*d,P=i.x,A=i.y,w=i.z;return r[0]=(1-(y+h))*P,r[1]=(p+x)*P,r[2]=(_-v)*P,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(f+h))*A,r[6]=(g+m)*A,r[7]=0,r[8]=(_+v)*w,r[9]=(g-m)*w,r[10]=(1-(f+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=fs.set(r[0],r[1],r[2]).length();const o=fs.set(r[4],r[5],r[6]).length(),a=fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const u=1/s,c=1/o,d=1/a;return Bn.elements[0]*=u,Bn.elements[1]*=u,Bn.elements[2]*=u,Bn.elements[4]*=c,Bn.elements[5]*=c,Bn.elements[6]*=c,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ti){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(a===Ti)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Au)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ti){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(o-s),f=(n+e)*u,p=(i+r)*c;let _,y;if(a===Ti)_=(o+s)*d,y=-2*d;else if(a===Au)_=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const fs=new F,Bn=new xt,rP=new F(0,0,0),sP=new F(1,1,1),Wi=new F,hl=new F,fn=new F,Wv=new xt,Xv=new Na;class Zn{constructor(e=0,n=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xv.setFromEuler(this),this.setFromQuaternion(Xv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class US{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oP=0;const jv=new F,ds=new Na,hi=new xt,pl=new F,Io=new F,aP=new F,lP=new Na,Yv=new F(1,0,0),$v=new F(0,1,0),qv=new F(0,0,1),Kv={type:"added"},uP={type:"removed"},hs={type:"childadded",child:null},Qc={type:"childremoved",child:null};class jt extends go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oP++}),this.uuid=Ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new F,n=new Zn,i=new Na,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ne}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new US,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Yv,e)}rotateY(e){return this.rotateOnAxis($v,e)}rotateZ(e){return this.rotateOnAxis(qv,e)}translateOnAxis(e,n){return jv.copy(e).applyQuaternion(this.quaternion),this.position.add(jv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yv,e)}translateY(e){return this.translateOnAxis($v,e)}translateZ(e){return this.translateOnAxis(qv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?pl.copy(e):pl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Io,pl,this.up):hi.lookAt(pl,Io,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(hi),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kv),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(uP),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kv),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,aP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,lP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new F(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new F,pi=new F,Jc=new F,mi=new F,ps=new F,ms=new F,Zv=new F,ef=new F,tf=new F,nf=new F,rf=new yt,sf=new yt,of=new yt;class Xn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),pi.subVectors(i,n),Jc.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(pi),l=Vn.dot(Jc),u=pi.dot(pi),c=pi.dot(Jc),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return rf.setScalar(0),sf.setScalar(0),of.setScalar(0),rf.fromBufferAttribute(e,n),sf.fromBufferAttribute(e,i),of.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(rf,s.x),o.addScaledVector(sf,s.y),o.addScaledVector(of,s.z),o}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),pi.subVectors(e,n),Vn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Vn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ps.subVectors(r,i),ms.subVectors(s,i),ef.subVectors(e,i);const l=ps.dot(ef),u=ms.dot(ef);if(l<=0&&u<=0)return n.copy(i);tf.subVectors(e,r);const c=ps.dot(tf),d=ms.dot(tf);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(ps,o);nf.subVectors(e,s);const p=ps.dot(nf),_=ms.dot(nf);if(_>=0&&p<=_)return n.copy(s);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(ms,a);const g=c*_-p*d;if(g<=0&&d-c>=0&&p-_>=0)return Zv.subVectors(s,r),a=(d-c)/(d-c+(p-_)),n.copy(r).addScaledVector(Zv,a);const h=1/(g+y+f);return o=y*h,a=f*h,n.copy(i).addScaledVector(ps,o).addScaledVector(ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const NS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ml={h:0,s:0,l:0};function af(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=jR(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=af(o,s,e+1/3),this.g=af(o,s,e),this.b=af(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,n=An){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=An){const i=NS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Ye.fromWorkingColorSpace(zt.copy(this),e),Math.round(nn(zt.r*255,0,255))*65536+Math.round(nn(zt.g*255,0,255))*256+Math.round(nn(zt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=An){Ye.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==An?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(ml);const i=Gc(Xi.h,ml.h,n),r=Gc(Xi.s,ml.s,n),s=Gc(Xi.l,ml.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ge;Ge.NAMES=NS;let cP=0;class vo extends go{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cP++}),this.uuid=Ua(),this.name="",this.blending=Xs,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Rd,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cd&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class FS extends vo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new F,gl=new We;class li{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Nv,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)gl.fromBufferAttribute(this,n),gl.applyMatrix3(e),this.setXY(n,gl.x,gl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=bo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nv&&(e.usage=this.usage),e}}class OS extends li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class kS extends li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gn extends li{constructor(e,n,i){super(new Float32Array(e),n,i)}}let fP=0;const Tn=new xt,lf=new jt,gs=new F,dn=new Fa,Uo=new Fa,bt=new F;class Oi extends go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fP++}),this.uuid=Ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LS(e)?kS:OS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return lf.lookAt(e),lf.updateMatrix(),this.applyMatrix4(lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gn(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $p);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(dn.min,Uo.min),dn.expandByPoint(bt),bt.addVectors(dn.max,Uo.max),dn.expandByPoint(bt)):(dn.expandByPoint(Uo.min),dn.expandByPoint(Uo.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)bt.fromBufferAttribute(a,u),l&&(gs.fromBufferAttribute(e,u),bt.add(gs)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new F,l[C]=new F;const u=new F,c=new F,d=new F,f=new We,p=new We,_=new We,y=new F,g=new F;function h(C,T,S){u.fromBufferAttribute(i,C),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,S),c.sub(u),d.sub(u),p.sub(f),_.sub(f);const b=1/(p.x*_.y-_.x*p.y);isFinite(b)&&(y.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(b),g.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(b),a[C].add(y),a[T].add(y),a[S].add(y),l[C].add(g),l[T].add(g),l[S].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let C=0,T=m.length;C<T;++C){const S=m[C],b=S.start,z=S.count;for(let V=b,$=b+z;V<$;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const v=new F,x=new F,P=new F,A=new F;function w(C){P.fromBufferAttribute(r,C),A.copy(P);const T=a[C];v.copy(T),v.sub(P.multiplyScalar(P.dot(T))).normalize(),x.crossVectors(A,T);const b=x.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,b)}for(let C=0,T=m.length;C<T;++C){const S=m[C],b=S.start,z=S.count;for(let V=b,$=b+z;V<$;V+=3)w(e.getX(V+0)),w(e.getX(V+1)),w(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,c=new F,d=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new li(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Oi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qv=new xt,Ar=new iP,vl=new $p,Jv=new F,_l=new F,yl=new F,xl=new F,uf=new F,Sl=new F,e0=new F,Ml=new F;class Ln extends jt{constructor(e=new Oi,n=new FS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Sl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(uf.fromBufferAttribute(d,e),o?Sl.addScaledVector(uf,c):Sl.addScaledVector(uf.sub(n),c))}n.add(Sl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(vl.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(vl,Jv)===null||Ar.origin.distanceToSquared(Jv)>(e.far-e.near)**2))&&(Qv.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Qv),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const g=f[_],h=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,P=v;x<P;x+=3){const A=a.getX(x),w=a.getX(x+1),C=a.getX(x+2);r=El(this,h,e,i,u,c,d,A,w,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=_,h=y;g<h;g+=3){const m=a.getX(g),v=a.getX(g+1),x=a.getX(g+2);r=El(this,o,e,i,u,c,d,m,v,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const g=f[_],h=o[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,P=v;x<P;x+=3){const A=x,w=x+1,C=x+2;r=El(this,h,e,i,u,c,d,A,w,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=_,h=y;g<h;g+=3){const m=g,v=g+1,x=g+2;r=El(this,o,e,i,u,c,d,m,v,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function dP(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===gr,a),l===null)return null;Ml.copy(a),Ml.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ml);return u<n.near||u>n.far?null:{distance:u,point:Ml.clone(),object:t}}function El(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,_l),t.getVertexPosition(l,yl),t.getVertexPosition(u,xl);const c=dP(t,e,n,i,_l,yl,xl,e0);if(c){const d=new F;Xn.getBarycoord(e0,_l,yl,xl,d),r&&(c.uv=Xn.getInterpolatedAttribute(r,a,l,u,d,new We)),s&&(c.uv1=Xn.getInterpolatedAttribute(s,a,l,u,d,new We)),o&&(c.normal=Xn.getInterpolatedAttribute(o,a,l,u,d,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new F,materialIndex:0};Xn.getNormal(_l,yl,xl,f.normal),c.face=f,c.barycoord=d}return c}class Oa extends Oi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gn(u,3)),this.setAttribute("normal",new gn(c,3)),this.setAttribute("uv",new gn(d,2));function _(y,g,h,m,v,x,P,A,w,C,T){const S=x/w,b=P/C,z=x/2,V=P/2,$=A/2,J=w+1,j=C+1;let X=0,L=0;const W=new F;for(let q=0;q<j;q++){const oe=q*b-V;for(let Se=0;Se<J;Se++){const qe=Se*S-z;W[y]=qe*m,W[g]=oe*v,W[h]=$,u.push(W.x,W.y,W.z),W[y]=0,W[g]=0,W[h]=A>0?1:-1,c.push(W.x,W.y,W.z),d.push(Se/w),d.push(1-q/C),X+=1}}for(let q=0;q<C;q++)for(let oe=0;oe<w;oe++){const Se=f+oe+J*q,qe=f+oe+J*(q+1),G=f+(oe+1)+J*(q+1),ne=f+(oe+1)+J*q;l.push(Se,qe,ne),l.push(qe,G,ne),L+=6}a.addGroup(p,L,T),p+=L,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=uo(t[n]);for(const r in i)e[r]=i[r]}return e}function hP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function BS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const pP={clone:uo,merge:$t};var mP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends vo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mP,this.fragmentShader=gP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=hP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class VS extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Ti}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new F,t0=new We,n0=new We;class Pn extends VS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=dh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dh*2*Math.atan(Math.tan(Hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,t0,n0),n.subVectors(n0,t0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vs=-90,_s=1;class vP extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(vs,_s,e,n);r.layers=this.layers,this.add(r);const s=new Pn(vs,_s,e,n);s.layers=this.layers,this.add(s);const o=new Pn(vs,_s,e,n);o.layers=this.layers,this.add(o);const a=new Pn(vs,_s,e,n);a.layers=this.layers,this.add(a);const l=new Pn(vs,_s,e,n);l.layers=this.layers,this.add(l);const u=new Pn(vs,_s,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Au)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class zS extends un{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:so,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _P extends es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ii}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Oa(5,5,5),s=new vr({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:ur});s.uniforms.tEquirect.value=n;const o=new Ln(r,s),a=n.minFilter;return n.minFilter===Wr&&(n.minFilter=ii),new vP(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const cf=new F,yP=new F,xP=new Ne;class Nr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=cf.subVectors(i,n).cross(yP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(cf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||xP.getNormalMatrix(e),r=this.coplanarPoint(cf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new $p,Tl=new F;class qp{constructor(e=new Nr,n=new Nr,i=new Nr,r=new Nr,s=new Nr,o=new Nr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],_=r[9],y=r[10],g=r[11],h=r[12],m=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,f-u,g-p,x-h).normalize(),i[1].setComponents(l+s,f+u,g+p,x+h).normalize(),i[2].setComponents(l+o,f+c,g+_,x+m).normalize(),i[3].setComponents(l-o,f-c,g-_,x-m).normalize(),i[4].setComponents(l-a,f-d,g-y,x-v).normalize(),n===Ti)i[5].setComponents(l+a,f+d,g+y,x+v).normalize();else if(n===Au)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Tl.x=r.normal.x>0?e.max.x:e.min.x,Tl.y=r.normal.y>0?e.max.y:e.min.y,Tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function HS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function SP(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(t.bindBuffer(u,a),d.length===0)t.bufferSubData(u,0,c);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],y=d[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const y=d[p];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Qu extends Oi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,p=[],_=[],y=[],g=[];for(let h=0;h<c;h++){const m=h*f-o;for(let v=0;v<u;v++){const x=v*d-s;_.push(x,-m,0),y.push(0,0,1),g.push(v/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<a;m++){const v=m+u*h,x=m+u*(h+1),P=m+1+u*(h+1),A=m+1+u*h;p.push(v,x,A),p.push(x,P,A)}this.setIndex(p),this.setAttribute("position",new gn(_,3)),this.setAttribute("normal",new gn(y,3)),this.setAttribute("uv",new gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qu(e.width,e.height,e.widthSegments,e.heightSegments)}}var MP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EP=`#ifdef USE_ALPHAHASH
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
#endif`,TP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RP=`#ifdef USE_AOMAP
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
#endif`,PP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bP=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,LP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UP=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NP=`#ifdef USE_IRIDESCENCE
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
#endif`,FP=`#ifdef USE_BUMPMAP
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
#endif`,OP=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,XP=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,jP=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,YP=`vec3 transformedNormal = objectNormal;
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
#endif`,$P=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QP="gl_FragColor = linearToOutputTexel( gl_FragColor );",JP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eb=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
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
#endif`,sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ub=`#ifdef USE_GRADIENTMAP
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
}`,cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hb=`uniform bool receiveShadow;
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
#endif`,pb=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,xb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sb=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ab=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lb=`#if defined( USE_POINTS_UV )
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
#endif`,Db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ob=`#ifdef USE_MORPHTARGETS
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
#endif`,kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wb=`#ifdef USE_NORMALMAP
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
#endif`,Xb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,r2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,o2=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,a2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l2=`#ifdef USE_SKINNING
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
#endif`,u2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c2=`#ifdef USE_SKINNING
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
#endif`,f2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m2=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g2=`#ifdef USE_TRANSMISSION
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
#endif`,v2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M2=`uniform sampler2D t2D;
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
}`,E2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C2=`#include <common>
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
}`,R2=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,P2=`#define DISTANCE
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
}`,b2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,L2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I2=`uniform float scale;
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
}`,U2=`uniform vec3 diffuse;
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
}`,N2=`#include <common>
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
}`,F2=`uniform vec3 diffuse;
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
}`,O2=`#define LAMBERT
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
}`,k2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,B2=`#define MATCAP
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
}`,V2=`#define MATCAP
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
}`,z2=`#define NORMAL
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
}`,H2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,G2=`#define PHONG
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
}`,W2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,X2=`#define STANDARD
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
}`,j2=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Y2=`#define TOON
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
}`,$2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,q2=`uniform float size;
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
}`,K2=`uniform vec3 diffuse;
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
}`,Z2=`#include <common>
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
}`,Q2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,J2=`uniform float rotation;
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
}`,eL=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:MP,alphahash_pars_fragment:EP,alphamap_fragment:TP,alphamap_pars_fragment:wP,alphatest_fragment:AP,alphatest_pars_fragment:CP,aomap_fragment:RP,aomap_pars_fragment:PP,batching_pars_vertex:bP,batching_vertex:LP,begin_vertex:DP,beginnormal_vertex:IP,bsdfs:UP,iridescence_fragment:NP,bumpmap_pars_fragment:FP,clipping_planes_fragment:OP,clipping_planes_pars_fragment:kP,clipping_planes_pars_vertex:BP,clipping_planes_vertex:VP,color_fragment:zP,color_pars_fragment:HP,color_pars_vertex:GP,color_vertex:WP,common:XP,cube_uv_reflection_fragment:jP,defaultnormal_vertex:YP,displacementmap_pars_vertex:$P,displacementmap_vertex:qP,emissivemap_fragment:KP,emissivemap_pars_fragment:ZP,colorspace_fragment:QP,colorspace_pars_fragment:JP,envmap_fragment:eb,envmap_common_pars_fragment:tb,envmap_pars_fragment:nb,envmap_pars_vertex:ib,envmap_physical_pars_fragment:pb,envmap_vertex:rb,fog_vertex:sb,fog_pars_vertex:ob,fog_fragment:ab,fog_pars_fragment:lb,gradientmap_pars_fragment:ub,lightmap_pars_fragment:cb,lights_lambert_fragment:fb,lights_lambert_pars_fragment:db,lights_pars_begin:hb,lights_toon_fragment:mb,lights_toon_pars_fragment:gb,lights_phong_fragment:vb,lights_phong_pars_fragment:_b,lights_physical_fragment:yb,lights_physical_pars_fragment:xb,lights_fragment_begin:Sb,lights_fragment_maps:Mb,lights_fragment_end:Eb,logdepthbuf_fragment:Tb,logdepthbuf_pars_fragment:wb,logdepthbuf_pars_vertex:Ab,logdepthbuf_vertex:Cb,map_fragment:Rb,map_pars_fragment:Pb,map_particle_fragment:bb,map_particle_pars_fragment:Lb,metalnessmap_fragment:Db,metalnessmap_pars_fragment:Ib,morphinstance_vertex:Ub,morphcolor_vertex:Nb,morphnormal_vertex:Fb,morphtarget_pars_vertex:Ob,morphtarget_vertex:kb,normal_fragment_begin:Bb,normal_fragment_maps:Vb,normal_pars_fragment:zb,normal_pars_vertex:Hb,normal_vertex:Gb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:Xb,clearcoat_normal_fragment_maps:jb,clearcoat_pars_fragment:Yb,iridescence_pars_fragment:$b,opaque_fragment:qb,packing:Kb,premultiplied_alpha_fragment:Zb,project_vertex:Qb,dithering_fragment:Jb,dithering_pars_fragment:e2,roughnessmap_fragment:t2,roughnessmap_pars_fragment:n2,shadowmap_pars_fragment:i2,shadowmap_pars_vertex:r2,shadowmap_vertex:s2,shadowmask_pars_fragment:o2,skinbase_vertex:a2,skinning_pars_vertex:l2,skinning_vertex:u2,skinnormal_vertex:c2,specularmap_fragment:f2,specularmap_pars_fragment:d2,tonemapping_fragment:h2,tonemapping_pars_fragment:p2,transmission_fragment:m2,transmission_pars_fragment:g2,uv_pars_fragment:v2,uv_pars_vertex:_2,uv_vertex:y2,worldpos_vertex:x2,background_vert:S2,background_frag:M2,backgroundCube_vert:E2,backgroundCube_frag:T2,cube_vert:w2,cube_frag:A2,depth_vert:C2,depth_frag:R2,distanceRGBA_vert:P2,distanceRGBA_frag:b2,equirect_vert:L2,equirect_frag:D2,linedashed_vert:I2,linedashed_frag:U2,meshbasic_vert:N2,meshbasic_frag:F2,meshlambert_vert:O2,meshlambert_frag:k2,meshmatcap_vert:B2,meshmatcap_frag:V2,meshnormal_vert:z2,meshnormal_frag:H2,meshphong_vert:G2,meshphong_frag:W2,meshphysical_vert:X2,meshphysical_frag:j2,meshtoon_vert:Y2,meshtoon_frag:$2,points_vert:q2,points_frag:K2,shadow_vert:Z2,shadow_frag:Q2,sprite_vert:J2,sprite_frag:eL},ae={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},ti={basic:{uniforms:$t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:$t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:$t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:$t([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:$t([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:$t([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:$t([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:$t([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:$t([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:$t([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:$t([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:$t([ae.common,ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:$t([ae.lights,ae.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ti.physical={uniforms:$t([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const wl={r:0,b:0,g:0},Rr=new Zn,tL=new xt;function nL(t,e,n,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function _(m){let v=m.isScene===!0?m.background:null;return v&&v.isTexture&&(v=(m.backgroundBlurriness>0?n:e).get(v)),v}function y(m){let v=!1;const x=_(m);x===null?h(a,l):x&&x.isColor&&(h(x,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(m,v){const x=_(v);x&&(x.isCubeTexture||x.mapping===Ku)?(c===void 0&&(c=new Ln(new Oa(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:uo(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Rr.copy(v.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tL.makeRotationFromEuler(Rr)),c.material.toneMapped=Ye.getTransfer(x.colorSpace)!==tt,(d!==x||f!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Ln(new Qu(2,2),new vr({name:"BackgroundMaterial",uniforms:uo(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(x.colorSpace)!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function h(m,v){m.getRGB(wl,BS(t)),i.buffers.color.setClear(wl.r,wl.g,wl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,h(a,l)},render:y,addToRenderList:g}}function iL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,b,z,V,$){let J=!1;const j=d(V,z,b);s!==j&&(s=j,u(s.object)),J=p(S,V,z,$),J&&_(S,V,z,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(S,b,z,V),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function d(S,b,z){const V=z.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let J=$[b.id];J===void 0&&(J={},$[b.id]=J);let j=J[V];return j===void 0&&(j=f(l()),J[V]=j),j}function f(S){const b=[],z=[],V=[];for(let $=0;$<n;$++)b[$]=0,z[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:z,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,b,z,V){const $=s.attributes,J=b.attributes;let j=0;const X=z.getAttributes();for(const L in X)if(X[L].location>=0){const q=$[L];let oe=J[L];if(oe===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;j++}return s.attributesNum!==j||s.index!==V}function _(S,b,z,V){const $={},J=b.attributes;let j=0;const X=z.getAttributes();for(const L in X)if(X[L].location>=0){let q=J[L];q===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(q=S.instanceColor));const oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),$[L]=oe,j++}s.attributes=$,s.attributesNum=j,s.index=V}function y(){const S=s.newAttributes;for(let b=0,z=S.length;b<z;b++)S[b]=0}function g(S){h(S,0)}function h(S,b){const z=s.newAttributes,V=s.enabledAttributes,$=s.attributeDivisors;z[S]=1,V[S]===0&&(t.enableVertexAttribArray(S),V[S]=1),$[S]!==b&&(t.vertexAttribDivisor(S,b),$[S]=b)}function m(){const S=s.newAttributes,b=s.enabledAttributes;for(let z=0,V=b.length;z<V;z++)b[z]!==S[z]&&(t.disableVertexAttribArray(z),b[z]=0)}function v(S,b,z,V,$,J,j){j===!0?t.vertexAttribIPointer(S,b,z,$,J):t.vertexAttribPointer(S,b,z,V,$,J)}function x(S,b,z,V){y();const $=V.attributes,J=z.getAttributes(),j=b.defaultAttributeValues;for(const X in J){const L=J[X];if(L.location>=0){let W=$[X];if(W===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){const q=W.normalized,oe=W.itemSize,Se=e.get(W);if(Se===void 0)continue;const qe=Se.buffer,G=Se.type,ne=Se.bytesPerElement,pe=G===t.INT||G===t.UNSIGNED_INT||W.gpuType===zp;if(W.isInterleavedBufferAttribute){const se=W.data,Pe=se.stride,De=W.offset;if(se.isInstancedInterleavedBuffer){for(let ke=0;ke<L.locationSize;ke++)h(L.location+ke,se.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ke=0;ke<L.locationSize;ke++)g(L.location+ke);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let ke=0;ke<L.locationSize;ke++)v(L.location+ke,oe/L.locationSize,G,q,Pe*ne,(De+oe/L.locationSize*ke)*ne,pe)}else{if(W.isInstancedBufferAttribute){for(let se=0;se<L.locationSize;se++)h(L.location+se,W.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let se=0;se<L.locationSize;se++)g(L.location+se);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let se=0;se<L.locationSize;se++)v(L.location+se,oe/L.locationSize,G,q,oe*ne,oe/L.locationSize*se*ne,pe)}}else if(j!==void 0){const q=j[X];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(L.location,q);break;case 3:t.vertexAttrib3fv(L.location,q);break;case 4:t.vertexAttrib4fv(L.location,q);break;default:t.vertexAttrib1fv(L.location,q)}}}}m()}function P(){C();for(const S in i){const b=i[S];for(const z in b){const V=b[z];for(const $ in V)c(V[$].object),delete V[$];delete b[z]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const b=i[S.id];for(const z in b){const V=b[z];for(const $ in V)c(V[$].object),delete V[$];delete b[z]}delete i[S.id]}function w(S){for(const b in i){const z=i[b];if(z[S.id]===void 0)continue;const V=z[S.id];for(const $ in V)c(V[$].object),delete V[$];delete z[S.id]}}function C(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:g,disableUnusedAttributes:m}}function rL(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,d){d!==0&&(t.drawArraysInstanced(i,u,c,d),n.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let _=0;_<d;_++)p+=c[_];n.update(p,i,1)}function l(u,c,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let _=0;for(let y=0;y<d;y++)_+=c[y]*f[y];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==jn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===Ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ni&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ei&&!C)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:P,maxSamples:A}}function oL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Nr,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||_===null||_.length===0||s&&!g)s?c(null):u();else{const m=s?0:i,v=m*4;let x=h.clippingState||null;l.value=x,x=c(_,f,v,p);for(let P=0;P!==v;++P)x[P]=n[P];h.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const h=p+y*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let v=0,x=p;v!==y;++v,x+=4)o.copy(d[v]).applyMatrix4(m,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function aL(t){let e=new WeakMap;function n(o,a){return a===Fd?o.mapping=so:a===Od&&(o.mapping=oo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fd||a===Od)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new _P(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class GS extends VS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Os=4,i0=[.125,.215,.35,.446,.526,.582],kr=20,ff=new GS,r0=new Ge;let df=null,hf=0,pf=0,mf=!1;const Fr=(1+Math.sqrt(5))/2,ys=1/Fr,s0=[new F(-Fr,ys,0),new F(Fr,ys,0),new F(-ys,0,Fr),new F(ys,0,Fr),new F(0,Fr,-ys),new F(0,Fr,ys),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class o0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){df=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(df,hf,pf),this._renderer.xr.enabled=mf,e.scissorTest=!1,Al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===so||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),df=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Ia,format:jn,colorSpace:mo,depthBuffer:!1},r=a0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lL(s)),this._blurMaterial=uL(s,e,n)}return r}_compileMaterial(e){const n=new Ln(this._lodPlanes[0],e);this._renderer.compile(n,ff)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(r0),c.toneMapping=cr,c.autoClear=!1;const p=new FS({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new Ln(new Oa,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(r0),y=!0);for(let h=0;h<6;h++){const m=h%3;m===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):m===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const v=this._cubeSize;Al(r,m*v,h>2?v:0,v,v),c.setRenderTarget(r),y&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===so||e.mapping===oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=u0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Al(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ff)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=s0[(r-s-1)%s0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Ln(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*kr-1),y=s/_,g=isFinite(s)?1+Math.floor(c*y):kr;g>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${kr}`);const h=[];let m=0;for(let w=0;w<kr;++w){const C=w/y,T=Math.exp(-C*C/2);h.push(T),w===0?m+=T:w<g&&(m+=2*T)}for(let w=0;w<h.length;w++)h[w]=h[w]/m;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const x=this._sizeLods[r],P=3*x*(r>v-Os?r-v+Os:0),A=4*(this._cubeSize-x);Al(n,P,A,3*x,2*x),l.setRenderTarget(n),l.render(d,ff)}}function lL(t){const e=[],n=[],i=[];let r=t;const s=t-Os+1+i0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Os?l=i0[o-t+Os-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,y=3,g=2,h=1,m=new Float32Array(y*_*p),v=new Float32Array(g*_*p),x=new Float32Array(h*_*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,C=A>2?0:-1,T=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];m.set(T,y*_*A),v.set(f,g*_*A);const S=[A,A,A,A,A,A];x.set(S,h*_*A)}const P=new Oi;P.setAttribute("position",new li(m,y)),P.setAttribute("uv",new li(v,g)),P.setAttribute("faceIndex",new li(x,h)),e.push(P),r>Os&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function a0(t,e,n){const i=new es(t,e,n);return i.texture.mapping=Ku,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Al(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function uL(t,e,n){const i=new Float32Array(kr),r=new F(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kp(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function l0(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kp(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function u0(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Kp(){return`

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
	`}function cL(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Fd||l===Od,c=l===so||l===oo;if(u||c){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new o0(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new o0(t)),d=u?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function fL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&zo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dL(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let g=0,h=y.length;g<h;g++)e.remove(y[g])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const y=p[_];for(let g=0,h=y.length;g<h;g++)e.update(y[g],t.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,_=d.attributes.position;let y=0;if(p!==null){const m=p.array;y=p.version;for(let v=0,x=m.length;v<x;v+=3){const P=m[v+0],A=m[v+1],w=m[v+2];f.push(P,A,A,w,w,P)}}else if(_!==void 0){const m=_.array;y=_.version;for(let v=0,x=m.length/3-1;v<x;v+=3){const P=v+0,A=v+1,w=v+2;f.push(P,A,A,w,w,P)}}else return;const g=new(LS(f)?kS:OS)(f,1);g.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function hL(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function u(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,f*o,_),n.update(p,i,_))}function c(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let g=0;for(let h=0;h<_;h++)g+=p[h];n.update(g,i,1)}function d(f,p,_,y){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)u(f[h]/o,p[h],y[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,_);let h=0;for(let m=0;m<_;m++)h+=p[m]*y[m];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function pL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function mL(t,e,n){const i=new WeakMap,r=new yt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),g===!0&&(x=3);let P=a.attributes.position.count*x,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*A*4*d),C=new IS(w,P,A,d);C.type=Ei,C.needsUpdate=!0;const T=x*4;for(let b=0;b<d;b++){const z=h[b],V=m[b],$=v[b],J=P*A*4*b;for(let j=0;j<z.count;j++){const X=j*T;_===!0&&(r.fromBufferAttribute(z,j),w[J+X+0]=r.x,w[J+X+1]=r.y,w[J+X+2]=r.z,w[J+X+3]=0),y===!0&&(r.fromBufferAttribute(V,j),w[J+X+4]=r.x,w[J+X+5]=r.y,w[J+X+6]=r.z,w[J+X+7]=0),g===!0&&(r.fromBufferAttribute($,j),w[J+X+8]=r.x,w[J+X+9]=r.y,w[J+X+10]=r.z,w[J+X+11]=$.itemSize===4?r.w:1)}}f={count:d,texture:C,size:new We(P,A)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function gL(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class WS extends un{constructor(e,n,i,r,s,o,a,l,u,c=js){if(c!==js&&c!==lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===js&&(i=Jr),i===void 0&&c===lo&&(i=ao),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const XS=new un,c0=new WS(1,1),jS=new IS,YS=new tP,$S=new zS,f0=[],d0=[],h0=new Float32Array(16),p0=new Float32Array(9),m0=new Float32Array(4);function _o(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=f0[r];if(s===void 0&&(s=new Float32Array(r),f0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ju(t,e){let n=d0[e];n===void 0&&(n=new Int32Array(e),d0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _L(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function yL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function xL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function SL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;m0.set(i),t.uniformMatrix2fv(this.addr,!1,m0),Pt(n,i)}}function ML(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;p0.set(i),t.uniformMatrix3fv(this.addr,!1,p0),Pt(n,i)}}function EL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;h0.set(i),t.uniformMatrix4fv(this.addr,!1,h0),Pt(n,i)}}function TL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function wL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function AL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function CL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function RL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function PL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function bL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function LL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function DL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(c0.compareFunction=bS,s=c0):s=XS,n.setTexture2D(e||s,r)}function IL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||YS,r)}function UL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||$S,r)}function NL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||jS,r)}function FL(t){switch(t){case 5126:return vL;case 35664:return _L;case 35665:return yL;case 35666:return xL;case 35674:return SL;case 35675:return ML;case 35676:return EL;case 5124:case 35670:return TL;case 35667:case 35671:return wL;case 35668:case 35672:return AL;case 35669:case 35673:return CL;case 5125:return RL;case 36294:return PL;case 36295:return bL;case 36296:return LL;case 35678:case 36198:case 36298:case 36306:case 35682:return DL;case 35679:case 36299:case 36307:return IL;case 35680:case 36300:case 36308:case 36293:return UL;case 36289:case 36303:case 36311:case 36292:return NL}}function OL(t,e){t.uniform1fv(this.addr,e)}function kL(t,e){const n=_o(e,this.size,2);t.uniform2fv(this.addr,n)}function BL(t,e){const n=_o(e,this.size,3);t.uniform3fv(this.addr,n)}function VL(t,e){const n=_o(e,this.size,4);t.uniform4fv(this.addr,n)}function zL(t,e){const n=_o(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function HL(t,e){const n=_o(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GL(t,e){const n=_o(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function WL(t,e){t.uniform1iv(this.addr,e)}function XL(t,e){t.uniform2iv(this.addr,e)}function jL(t,e){t.uniform3iv(this.addr,e)}function YL(t,e){t.uniform4iv(this.addr,e)}function $L(t,e){t.uniform1uiv(this.addr,e)}function qL(t,e){t.uniform2uiv(this.addr,e)}function KL(t,e){t.uniform3uiv(this.addr,e)}function ZL(t,e){t.uniform4uiv(this.addr,e)}function QL(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||XS,s[o])}function JL(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||YS,s[o])}function eD(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||$S,s[o])}function tD(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||jS,s[o])}function nD(t){switch(t){case 5126:return OL;case 35664:return kL;case 35665:return BL;case 35666:return VL;case 35674:return zL;case 35675:return HL;case 35676:return GL;case 5124:case 35670:return WL;case 35667:case 35671:return XL;case 35668:case 35672:return jL;case 35669:case 35673:return YL;case 5125:return $L;case 36294:return qL;case 36295:return KL;case 36296:return ZL;case 35678:case 36198:case 36298:case 36306:case 35682:return QL;case 35679:case 36299:case 36307:return JL;case 35680:case 36300:case 36308:case 36293:return eD;case 36289:case 36303:case 36311:case 36292:return tD}}class iD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=FL(n.type)}}class rD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nD(n.type)}}class sD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const gf=/(\w+)(\])?(\[|\.)?/g;function g0(t,e){t.seq.push(e),t.map[e.id]=e}function oD(t,e,n){const i=t.name,r=i.length;for(gf.lastIndex=0;;){const s=gf.exec(i),o=gf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){g0(n,u===void 0?new iD(a,t,e):new rD(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new sD(a),g0(n,d)),n=d}}}class $l{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);oD(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function v0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const aD=37297;let lD=0;function uD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const _0=new Ne;function cD(t){Ye._getMatrix(_0,Ye.workingColorSpace,t);const e=`mat3( ${_0.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case Zu:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function y0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+uD(t.getShaderSource(e),o)}else return r}function fD(t,e){const n=cD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function dD(t,e){let n;switch(e){case RR:n="Linear";break;case PR:n="Reinhard";break;case bR:n="Cineon";break;case LR:n="ACESFilmic";break;case IR:n="AgX";break;case UR:n="Neutral";break;case DR:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cl=new F;function hD(){Ye.getLuminanceCoefficients(Cl);const t=Cl.x.toFixed(4),e=Cl.y.toFixed(4),n=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function mD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ho(t){return t!==""}function x0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function S0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vD=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(t){return t.replace(vD,yD)}const _D=new Map;function yD(t,e){let n=Oe[e];if(n===void 0){const i=_D.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hh(n)}const xD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M0(t){return t.replace(xD,SD)}function SD(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function E0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MD(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===_S?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===aR?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function ED(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case so:case oo:e="ENVMAP_TYPE_CUBE";break;case Ku:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function wD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Vp:e="ENVMAP_BLENDING_MULTIPLY";break;case AR:e="ENVMAP_BLENDING_MIX";break;case CR:e="ENVMAP_BLENDING_ADD";break}return e}function AD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function CD(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=MD(n),u=ED(n),c=TD(n),d=wD(n),f=AD(n),p=pD(n),_=mD(s),y=r.createProgram();let g,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ho).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ho).join(`
`),h.length>0&&(h+=`
`)):(g=[E0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),h=[E0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cr?"#define TONE_MAPPING":"",n.toneMapping!==cr?Oe.tonemapping_pars_fragment:"",n.toneMapping!==cr?dD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,fD("linearToOutputTexel",n.outputColorSpace),hD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),o=hh(o),o=x0(o,n),o=S0(o,n),a=hh(a),a=x0(a,n),a=S0(a,n),o=M0(o),a=M0(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Fv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=m+g+o,x=m+h+a,P=v0(r,r.VERTEX_SHADER,v),A=v0(r,r.FRAGMENT_SHADER,x);r.attachShader(y,P),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(b){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(y).trim(),V=r.getShaderInfoLog(P).trim(),$=r.getShaderInfoLog(A).trim();let J=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,A);else{const X=y0(r,P,"vertex"),L=y0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+z+`
`+X+`
`+L)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(V===""||$==="")&&(j=!1);j&&(b.diagnostics={runnable:J,programLog:z,vertexShader:{log:V,prefix:g},fragmentShader:{log:$,prefix:h}})}r.deleteShader(P),r.deleteShader(A),C=new $l(r,y),T=gD(r,y)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,aD)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lD++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=A,this}let RD=0;class PD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bD(e),n.set(e,i)),i}}class bD{constructor(e){this.id=RD++,this.code=e,this.usedTimes=0}}function LD(t,e,n,i,r,s,o){const a=new US,l=new PD,u=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return u.add(T),T===0?"uv":`uv${T}`}function g(T,S,b,z,V){const $=z.fog,J=V.geometry,j=T.isMeshStandardMaterial?z.environment:null,X=(T.isMeshStandardMaterial?n:e).get(T.envMap||j),L=X&&X.mapping===Ku?X.image.height:null,W=_[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const q=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,oe=q!==void 0?q.length:0;let Se=0;J.morphAttributes.position!==void 0&&(Se=1),J.morphAttributes.normal!==void 0&&(Se=2),J.morphAttributes.color!==void 0&&(Se=3);let qe,G,ne,pe;if(W){const Je=ti[W];qe=Je.vertexShader,G=Je.fragmentShader}else qe=T.vertexShader,G=T.fragmentShader,l.update(T),ne=l.getVertexShaderID(T),pe=l.getFragmentShaderID(T);const se=t.getRenderTarget(),Pe=t.state.buffers.depth.getReversed(),De=V.isInstancedMesh===!0,ke=V.isBatchedMesh===!0,dt=!!T.map,Xe=!!T.matcap,St=!!X,N=!!T.aoMap,Sn=!!T.lightMap,Ve=!!T.bumpMap,ze=!!T.normalMap,Ce=!!T.displacementMap,ot=!!T.emissiveMap,we=!!T.metalnessMap,R=!!T.roughnessMap,M=T.anisotropy>0,O=T.clearcoat>0,K=T.dispersion>0,ee=T.iridescence>0,Y=T.sheen>0,Me=T.transmission>0,ue=M&&!!T.anisotropyMap,me=O&&!!T.clearcoatMap,je=O&&!!T.clearcoatNormalMap,ie=O&&!!T.clearcoatRoughnessMap,ge=ee&&!!T.iridescenceMap,Re=ee&&!!T.iridescenceThicknessMap,be=Y&&!!T.sheenColorMap,ve=Y&&!!T.sheenRoughnessMap,He=!!T.specularMap,Fe=!!T.specularColorMap,it=!!T.specularIntensityMap,D=Me&&!!T.transmissionMap,le=Me&&!!T.thicknessMap,H=!!T.gradientMap,Z=!!T.alphaMap,de=T.alphaTest>0,ce=!!T.alphaHash,Ie=!!T.extensions;let vt=cr;T.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(vt=t.toneMapping);const Ot={shaderID:W,shaderType:T.type,shaderName:T.name,vertexShader:qe,fragmentShader:G,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:pe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:ke,batchingColor:ke&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:mo,alphaToCoverage:!!T.alphaToCoverage,map:dt,matcap:Xe,envMap:St,envMapMode:St&&X.mapping,envMapCubeUVHeight:L,aoMap:N,lightMap:Sn,bumpMap:Ve,normalMap:ze,displacementMap:f&&Ce,emissiveMap:ot,normalMapObjectSpace:ze&&T.normalMapType===kR,normalMapTangentSpace:ze&&T.normalMapType===Yp,metalnessMap:we,roughnessMap:R,anisotropy:M,anisotropyMap:ue,clearcoat:O,clearcoatMap:me,clearcoatNormalMap:je,clearcoatRoughnessMap:ie,dispersion:K,iridescence:ee,iridescenceMap:ge,iridescenceThicknessMap:Re,sheen:Y,sheenColorMap:be,sheenRoughnessMap:ve,specularMap:He,specularColorMap:Fe,specularIntensityMap:it,transmission:Me,transmissionMap:D,thicknessMap:le,gradientMap:H,opaque:T.transparent===!1&&T.blending===Xs&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:de,alphaHash:ce,combine:T.combine,mapUv:dt&&y(T.map.channel),aoMapUv:N&&y(T.aoMap.channel),lightMapUv:Sn&&y(T.lightMap.channel),bumpMapUv:Ve&&y(T.bumpMap.channel),normalMapUv:ze&&y(T.normalMap.channel),displacementMapUv:Ce&&y(T.displacementMap.channel),emissiveMapUv:ot&&y(T.emissiveMap.channel),metalnessMapUv:we&&y(T.metalnessMap.channel),roughnessMapUv:R&&y(T.roughnessMap.channel),anisotropyMapUv:ue&&y(T.anisotropyMap.channel),clearcoatMapUv:me&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:je&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:be&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:ve&&y(T.sheenRoughnessMap.channel),specularMapUv:He&&y(T.specularMap.channel),specularColorMapUv:Fe&&y(T.specularColorMap.channel),specularIntensityMapUv:it&&y(T.specularIntensityMap.channel),transmissionMapUv:D&&y(T.transmissionMap.channel),thicknessMapUv:le&&y(T.thicknessMap.channel),alphaMapUv:Z&&y(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ze||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!J.attributes.uv&&(dt||Z),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pe,skinning:V.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:dt&&T.map.isVideoTexture===!0&&Ye.getTransfer(T.map.colorSpace)===tt,decodeVideoTextureEmissive:ot&&T.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(T.emissiveMap.colorSpace)===tt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===yi,flipSided:T.side===ln,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ie&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&T.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ot.vertexUv1s=u.has(1),Ot.vertexUv2s=u.has(2),Ot.vertexUv3s=u.has(3),u.clear(),Ot}function h(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const b in T.defines)S.push(b),S.push(T.defines[b]);return T.isRawShaderMaterial===!1&&(m(S,T),v(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function m(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function v(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const S=_[T.type];let b;if(S){const z=ti[S];b=pP.clone(z.uniforms)}else b=T.uniforms;return b}function P(T,S){let b;for(let z=0,V=c.length;z<V;z++){const $=c[z];if($.cacheKey===S){b=$,++b.usedTimes;break}}return b===void 0&&(b=new CD(t,S,T,s),c.push(b)),b}function A(T){if(--T.usedTimes===0){const S=c.indexOf(T);c[S]=c[c.length-1],c.pop(),T.destroy()}}function w(T){l.remove(T)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:x,acquireProgram:P,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:C}}function DD(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function ID(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function T0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function w0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,_,y,g){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:y,group:g},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=y,h.group=g),e++,h}function a(d,f,p,_,y,g){const h=o(d,f,p,_,y,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,_,y,g){const h=o(d,f,p,_,y,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(d,f){n.length>1&&n.sort(d||ID),i.length>1&&i.sort(f||T0),r.length>1&&r.sort(f||T0)}function c(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function UD(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new w0,t.set(i,[o])):r>=s.length?(o=new w0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function ND(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Ge};break;case"SpotLight":n={position:new F,direction:new F,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function FD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let OD=0;function kD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function BD(t){const e=new ND,n=FD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,s=new xt,o=new xt;function a(u){let c=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,y=0,g=0,h=0,m=0,v=0,x=0,P=0,A=0,w=0;u.sort(kD);for(let T=0,S=u.length;T<S;T++){const b=u[T],z=b.color,V=b.intensity,$=b.distance,J=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)c+=z.r*V,d+=z.g*V,f+=z.b*V;else if(b.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(b.sh.coefficients[j],V);w++}else if(b.isDirectionalLight){const j=e.get(b);if(j.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const X=b.shadow,L=n.get(b);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=b.shadow.matrix,m++}i.directional[p]=j,p++}else if(b.isSpotLight){const j=e.get(b);j.position.setFromMatrixPosition(b.matrixWorld),j.color.copy(z).multiplyScalar(V),j.distance=$,j.coneCos=Math.cos(b.angle),j.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),j.decay=b.decay,i.spot[y]=j;const X=b.shadow;if(b.map&&(i.spotLightMap[P]=b.map,P++,X.updateMatrices(b),b.castShadow&&A++),i.spotLightMatrix[y]=X.matrix,b.castShadow){const L=n.get(b);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=J,x++}y++}else if(b.isRectAreaLight){const j=e.get(b);j.color.copy(z).multiplyScalar(V),j.halfWidth.set(b.width*.5,0,0),j.halfHeight.set(0,b.height*.5,0),i.rectArea[g]=j,g++}else if(b.isPointLight){const j=e.get(b);if(j.color.copy(b.color).multiplyScalar(b.intensity),j.distance=b.distance,j.decay=b.decay,b.castShadow){const X=b.shadow,L=n.get(b);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,L.shadowCameraNear=X.camera.near,L.shadowCameraFar=X.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=J,i.pointShadowMatrix[_]=b.shadow.matrix,v++}i.point[_]=j,_++}else if(b.isHemisphereLight){const j=e.get(b);j.skyColor.copy(b.color).multiplyScalar(V),j.groundColor.copy(b.groundColor).multiplyScalar(V),i.hemi[h]=j,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==p||C.pointLength!==_||C.spotLength!==y||C.rectAreaLength!==g||C.hemiLength!==h||C.numDirectionalShadows!==m||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==P||C.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,C.directionalLength=p,C.pointLength=_,C.spotLength=y,C.rectAreaLength=g,C.hemiLength=h,C.numDirectionalShadows=m,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=P,C.numLightProbes=w,i.version=OD++)}function l(u,c){let d=0,f=0,p=0,_=0,y=0;const g=c.matrixWorldInverse;for(let h=0,m=u.length;h<m;h++){const v=u[h];if(v.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(v.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function A0(t){const e=new BD(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function VD(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new A0(t),e.set(r,[a])):s>=o.length?(a=new A0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class zD extends vo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=FR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HD extends vo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XD(t,e,n){let i=new qp;const r=new We,s=new We,o=new yt,a=new zD({depthPacking:OR}),l=new HD,u={},c=n.maxTextureSize,d={[gr]:ln,[ln]:gr,[yi]:yi},f=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:GD,fragmentShader:WD}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Oi;_.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ln(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_S;let h=this.type;this.render=function(A,w,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),z=t.state;z.setBlending(ur),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=h!==gi&&this.type===gi,$=h===gi&&this.type!==gi;for(let J=0,j=A.length;J<j;J++){const X=A[J],L=X.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const W=L.getFrameExtents();if(r.multiply(W),s.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/W.x),r.x=s.x*W.x,L.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/W.y),r.y=s.y*W.y,L.mapSize.y=s.y)),L.map===null||V===!0||$===!0){const oe=this.type!==gi?{minFilter:qn,magFilter:qn}:{};L.map!==null&&L.map.dispose(),L.map=new es(r.x,r.y,oe),L.map.texture.name=X.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const q=L.getViewportCount();for(let oe=0;oe<q;oe++){const Se=L.getViewport(oe);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),z.viewport(o),L.updateMatrices(X,oe),i=L.getFrustum(),x(w,C,L.camera,X,this.type)}L.isPointLightShadow!==!0&&this.type===gi&&m(L,C),L.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(T,S,b)};function m(A,w){const C=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new es(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,C,f,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,C,p,y,null)}function v(A,w,C,T){let S=null;const b=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)S=b;else if(S=C.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=S.uuid,V=w.uuid;let $=u[z];$===void 0&&($={},u[z]=$);let J=$[V];J===void 0&&(J=S.clone(),$[V]=J,w.addEventListener("dispose",P)),S=J}if(S.visible=w.visible,S.wireframe=w.wireframe,T===gi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=t.properties.get(S);z.light=C}return S}function x(A,w,C,T,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===gi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const V=e.update(A),$=A.material;if(Array.isArray($)){const J=V.groups;for(let j=0,X=J.length;j<X;j++){const L=J[j],W=$[L.materialIndex];if(W&&W.visible){const q=v(A,W,T,S);A.onBeforeShadow(t,A,w,C,V,q,L),t.renderBufferDirect(C,null,V,q,A,L),A.onAfterShadow(t,A,w,C,V,q,L)}}}else if($.visible){const J=v(A,$,T,S);A.onBeforeShadow(t,A,w,C,V,J,null),t.renderBufferDirect(C,null,V,J,A,null),A.onAfterShadow(t,A,w,C,V,J,null)}}const z=A.children;for(let V=0,$=z.length;V<$;V++)x(z[V],w,C,T,S)}function P(A){A.target.removeEventListener("dispose",P);for(const C in u){const T=u[C],S=A.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const jD={[Pd]:bd,[Ld]:Ud,[Dd]:Nd,[ro]:Id,[bd]:Pd,[Ud]:Ld,[Nd]:Dd,[Id]:ro};function YD(t,e){function n(){let D=!1;const le=new yt;let H=null;const Z=new yt(0,0,0,0);return{setMask:function(de){H!==de&&!D&&(t.colorMask(de,de,de,de),H=de)},setLocked:function(de){D=de},setClear:function(de,ce,Ie,vt,Ot){Ot===!0&&(de*=vt,ce*=vt,Ie*=vt),le.set(de,ce,Ie,vt),Z.equals(le)===!1&&(t.clearColor(de,ce,Ie,vt),Z.copy(le))},reset:function(){D=!1,H=null,Z.set(-1,0,0,0)}}}function i(){let D=!1,le=!1,H=null,Z=null,de=null;return{setReversed:function(ce){if(le!==ce){const Ie=e.get("EXT_clip_control");le?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT);const vt=de;de=null,this.setClear(vt)}le=ce},getReversed:function(){return le},setTest:function(ce){ce?se(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(ce){H!==ce&&!D&&(t.depthMask(ce),H=ce)},setFunc:function(ce){if(le&&(ce=jD[ce]),Z!==ce){switch(ce){case Pd:t.depthFunc(t.NEVER);break;case bd:t.depthFunc(t.ALWAYS);break;case Ld:t.depthFunc(t.LESS);break;case ro:t.depthFunc(t.LEQUAL);break;case Dd:t.depthFunc(t.EQUAL);break;case Id:t.depthFunc(t.GEQUAL);break;case Ud:t.depthFunc(t.GREATER);break;case Nd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=ce}},setLocked:function(ce){D=ce},setClear:function(ce){de!==ce&&(le&&(ce=1-ce),t.clearDepth(ce),de=ce)},reset:function(){D=!1,H=null,Z=null,de=null,le=!1}}}function r(){let D=!1,le=null,H=null,Z=null,de=null,ce=null,Ie=null,vt=null,Ot=null;return{setTest:function(Je){D||(Je?se(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(Je){le!==Je&&!D&&(t.stencilMask(Je),le=Je)},setFunc:function(Je,Nn,ui){(H!==Je||Z!==Nn||de!==ui)&&(t.stencilFunc(Je,Nn,ui),H=Je,Z=Nn,de=ui)},setOp:function(Je,Nn,ui){(ce!==Je||Ie!==Nn||vt!==ui)&&(t.stencilOp(Je,Nn,ui),ce=Je,Ie=Nn,vt=ui)},setLocked:function(Je){D=Je},setClear:function(Je){Ot!==Je&&(t.clearStencil(Je),Ot=Je)},reset:function(){D=!1,le=null,H=null,Z=null,de=null,ce=null,Ie=null,vt=null,Ot=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f=new WeakMap,p=[],_=null,y=!1,g=null,h=null,m=null,v=null,x=null,P=null,A=null,w=new Ge(0,0,0),C=0,T=!1,S=null,b=null,z=null,V=null,$=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,X=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(L)[1]),j=X>=1):L.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),j=X>=2);let W=null,q={};const oe=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),qe=new yt().fromArray(oe),G=new yt().fromArray(Se);function ne(D,le,H,Z){const de=new Uint8Array(4),ce=t.createTexture();t.bindTexture(D,ce),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<H;Ie++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(le+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ce}const pe={};pe[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(t.DEPTH_TEST),o.setFunc(ro),Ve(!1),ze(bv),se(t.CULL_FACE),N(ur);function se(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function Pe(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function De(D,le){return d[D]!==le?(t.bindFramebuffer(D,le),d[D]=le,D===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=le),D===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=le),!0):!1}function ke(D,le){let H=p,Z=!1;if(D){H=f.get(le),H===void 0&&(H=[],f.set(le,H));const de=D.textures;if(H.length!==de.length||H[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Ie=de.length;ce<Ie;ce++)H[ce]=t.COLOR_ATTACHMENT0+ce;H.length=de.length,Z=!0}}else H[0]!==t.BACK&&(H[0]=t.BACK,Z=!0);Z&&t.drawBuffers(H)}function dt(D){return _!==D?(t.useProgram(D),_=D,!0):!1}const Xe={[Or]:t.FUNC_ADD,[uR]:t.FUNC_SUBTRACT,[cR]:t.FUNC_REVERSE_SUBTRACT};Xe[fR]=t.MIN,Xe[dR]=t.MAX;const St={[hR]:t.ZERO,[pR]:t.ONE,[mR]:t.SRC_COLOR,[Cd]:t.SRC_ALPHA,[SR]:t.SRC_ALPHA_SATURATE,[yR]:t.DST_COLOR,[vR]:t.DST_ALPHA,[gR]:t.ONE_MINUS_SRC_COLOR,[Rd]:t.ONE_MINUS_SRC_ALPHA,[xR]:t.ONE_MINUS_DST_COLOR,[_R]:t.ONE_MINUS_DST_ALPHA,[MR]:t.CONSTANT_COLOR,[ER]:t.ONE_MINUS_CONSTANT_COLOR,[TR]:t.CONSTANT_ALPHA,[wR]:t.ONE_MINUS_CONSTANT_ALPHA};function N(D,le,H,Z,de,ce,Ie,vt,Ot,Je){if(D===ur){y===!0&&(Pe(t.BLEND),y=!1);return}if(y===!1&&(se(t.BLEND),y=!0),D!==lR){if(D!==g||Je!==T){if((h!==Or||x!==Or)&&(t.blendEquation(t.FUNC_ADD),h=Or,x=Or),Je)switch(D){case Xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lv:t.blendFunc(t.ONE,t.ONE);break;case Dv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Iv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Dv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Iv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,v=null,P=null,A=null,w.set(0,0,0),C=0,g=D,T=Je}return}de=de||le,ce=ce||H,Ie=Ie||Z,(le!==h||de!==x)&&(t.blendEquationSeparate(Xe[le],Xe[de]),h=le,x=de),(H!==m||Z!==v||ce!==P||Ie!==A)&&(t.blendFuncSeparate(St[H],St[Z],St[ce],St[Ie]),m=H,v=Z,P=ce,A=Ie),(vt.equals(w)===!1||Ot!==C)&&(t.blendColor(vt.r,vt.g,vt.b,Ot),w.copy(vt),C=Ot),g=D,T=!1}function Sn(D,le){D.side===yi?Pe(t.CULL_FACE):se(t.CULL_FACE);let H=D.side===ln;le&&(H=!H),Ve(H),D.blending===Xs&&D.transparent===!1?N(ur):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(D){S!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),S=D)}function ze(D){D!==sR?(se(t.CULL_FACE),D!==b&&(D===bv?t.cullFace(t.BACK):D===oR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),b=D}function Ce(D){D!==z&&(j&&t.lineWidth(D),z=D)}function ot(D,le,H){D?(se(t.POLYGON_OFFSET_FILL),(V!==le||$!==H)&&(t.polygonOffset(le,H),V=le,$=H)):Pe(t.POLYGON_OFFSET_FILL)}function we(D){D?se(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function R(D){D===void 0&&(D=t.TEXTURE0+J-1),W!==D&&(t.activeTexture(D),W=D)}function M(D,le,H){H===void 0&&(W===null?H=t.TEXTURE0+J-1:H=W);let Z=q[H];Z===void 0&&(Z={type:void 0,texture:void 0},q[H]=Z),(Z.type!==D||Z.texture!==le)&&(W!==H&&(t.activeTexture(H),W=H),t.bindTexture(D,le||pe[D]),Z.type=D,Z.texture=le)}function O(){const D=q[W];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(D){qe.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),qe.copy(D))}function ve(D){G.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),G.copy(D))}function He(D,le){let H=u.get(le);H===void 0&&(H=new WeakMap,u.set(le,H));let Z=H.get(D);Z===void 0&&(Z=t.getUniformBlockIndex(le,D.name),H.set(D,Z))}function Fe(D,le){const Z=u.get(le).get(D);l.get(le)!==Z&&(t.uniformBlockBinding(le,Z,D.__bindingPointIndex),l.set(le,Z))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},W=null,q={},d={},f=new WeakMap,p=[],_=null,y=!1,g=null,h=null,m=null,v=null,x=null,P=null,A=null,w=new Ge(0,0,0),C=0,T=!1,S=null,b=null,z=null,V=null,$=null,qe.set(0,0,t.canvas.width,t.canvas.height),G.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Pe,bindFramebuffer:De,drawBuffers:ke,useProgram:dt,setBlending:N,setMaterial:Sn,setFlipSided:Ve,setCullFace:ze,setLineWidth:Ce,setPolygonOffset:ot,setScissorTest:we,activeTexture:R,bindTexture:M,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:ee,texImage2D:ge,texImage3D:Re,updateUBOMapping:He,uniformBlockBinding:Fe,texStorage2D:je,texStorage3D:ie,texSubImage2D:Y,texSubImage3D:Me,compressedTexSubImage2D:ue,compressedTexSubImage3D:me,scissor:be,viewport:ve,reset:it}}function C0(t,e,n,i){const r=$D(i);switch(n){case ES:return t*e;case wS:return t*e;case AS:return t*e*2;case CS:return t*e/r.components*r.byteLength;case Wp:return t*e/r.components*r.byteLength;case RS:return t*e*2/r.components*r.byteLength;case Xp:return t*e*2/r.components*r.byteLength;case TS:return t*e*3/r.components*r.byteLength;case jn:return t*e*4/r.components*r.byteLength;case jp:return t*e*4/r.components*r.byteLength;case Gl:case Wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xl:case jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zd:case Gd:return Math.max(t,16)*Math.max(e,8)/4;case Vd:case Hd:return Math.max(t,8)*Math.max(e,8)/2;case Wd:case Xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case qd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case eh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case th:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case nh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ih:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case rh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case sh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case oh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Yl:case ah:case lh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case PS:case uh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ch:case fh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $D(t){switch(t){case Ni:case xS:return{byteLength:1,components:1};case Ea:case SS:case Ia:return{byteLength:2,components:1};case Hp:case Gp:return{byteLength:2,components:4};case Jr:case zp:case Ei:return{byteLength:4,components:1};case MS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function qD(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new We,c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return p?new OffscreenCanvas(R,M):Cu("canvas")}function y(R,M,O){let K=1;const ee=we(R);if((ee.width>O||ee.height>O)&&(K=O/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(K*ee.width),Me=Math.floor(K*ee.height);d===void 0&&(d=_(Y,Me));const ue=M?_(Y,Me):d;return ue.width=Y,ue.height=Me,ue.getContext("2d").drawImage(R,0,0,Y,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Me+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function g(R){return R.generateMipmaps}function h(R){t.generateMipmap(R)}function m(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(R,M,O,K,ee=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=M;if(M===t.RED&&(O===t.FLOAT&&(Y=t.R32F),O===t.HALF_FLOAT&&(Y=t.R16F),O===t.UNSIGNED_BYTE&&(Y=t.R8)),M===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.R8UI),O===t.UNSIGNED_SHORT&&(Y=t.R16UI),O===t.UNSIGNED_INT&&(Y=t.R32UI),O===t.BYTE&&(Y=t.R8I),O===t.SHORT&&(Y=t.R16I),O===t.INT&&(Y=t.R32I)),M===t.RG&&(O===t.FLOAT&&(Y=t.RG32F),O===t.HALF_FLOAT&&(Y=t.RG16F),O===t.UNSIGNED_BYTE&&(Y=t.RG8)),M===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.RG8UI),O===t.UNSIGNED_SHORT&&(Y=t.RG16UI),O===t.UNSIGNED_INT&&(Y=t.RG32UI),O===t.BYTE&&(Y=t.RG8I),O===t.SHORT&&(Y=t.RG16I),O===t.INT&&(Y=t.RG32I)),M===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),O===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),O===t.UNSIGNED_INT&&(Y=t.RGB32UI),O===t.BYTE&&(Y=t.RGB8I),O===t.SHORT&&(Y=t.RGB16I),O===t.INT&&(Y=t.RGB32I)),M===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),O===t.UNSIGNED_INT&&(Y=t.RGBA32UI),O===t.BYTE&&(Y=t.RGBA8I),O===t.SHORT&&(Y=t.RGBA16I),O===t.INT&&(Y=t.RGBA32I)),M===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),M===t.RGBA){const Me=ee?Zu:Ye.getTransfer(K);O===t.FLOAT&&(Y=t.RGBA32F),O===t.HALF_FLOAT&&(Y=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Y=Me===tt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(R,M){let O;return R?M===null||M===Jr||M===ao?O=t.DEPTH24_STENCIL8:M===Ei?O=t.DEPTH32F_STENCIL8:M===Ea&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jr||M===ao?O=t.DEPTH_COMPONENT24:M===Ei?O=t.DEPTH_COMPONENT32F:M===Ea&&(O=t.DEPTH_COMPONENT16),O}function P(R,M){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==qn&&R.minFilter!==ii?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&c.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),S(M)}function C(R){const M=i.get(R);if(M.__webglInit===void 0)return;const O=R.source,K=f.get(O);if(K){const ee=K[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(R),Object.keys(K).length===0&&f.delete(O)}i.remove(R)}function T(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const O=R.source,K=f.get(O);delete K[M.__cacheKey],o.memory.textures--}function S(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let ee=0;ee<M.__webglFramebuffer[K].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[K][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)t.deleteFramebuffer(M.__webglFramebuffer[K]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=R.textures;for(let K=0,ee=O.length;K<ee;K++){const Y=i.get(O[K]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(O[K])}i.remove(R)}let b=0;function z(){b=0}function V(){const R=b;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),b+=1,R}function $(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function J(R,M){const O=i.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(O,R,M);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+M)}function j(R,M){const O=i.get(R);if(R.version>0&&O.__version!==R.version){G(O,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+M)}function X(R,M){const O=i.get(R);if(R.version>0&&O.__version!==R.version){G(O,R,M);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+M)}function L(R,M){const O=i.get(R);if(R.version>0&&O.__version!==R.version){ne(O,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+M)}const W={[kd]:t.REPEAT,[Gr]:t.CLAMP_TO_EDGE,[Bd]:t.MIRRORED_REPEAT},q={[qn]:t.NEAREST,[NR]:t.NEAREST_MIPMAP_NEAREST,[al]:t.NEAREST_MIPMAP_LINEAR,[ii]:t.LINEAR,[zc]:t.LINEAR_MIPMAP_NEAREST,[Wr]:t.LINEAR_MIPMAP_LINEAR},oe={[BR]:t.NEVER,[XR]:t.ALWAYS,[VR]:t.LESS,[bS]:t.LEQUAL,[zR]:t.EQUAL,[WR]:t.GEQUAL,[HR]:t.GREATER,[GR]:t.NOTEQUAL};function Se(R,M){if(M.type===Ei&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ii||M.magFilter===zc||M.magFilter===al||M.magFilter===Wr||M.minFilter===ii||M.minFilter===zc||M.minFilter===al||M.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,W[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,W[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,W[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qn||M.minFilter!==al&&M.minFilter!==Wr||M.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function qe(R,M){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const K=M.source;let ee=f.get(K);ee===void 0&&(ee={},f.set(K,ee));const Y=$(M);if(Y!==R.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[Y].usedTimes++;const Me=ee[R.__cacheKey];Me!==void 0&&(ee[R.__cacheKey].usedTimes--,Me.usedTimes===0&&T(M)),R.__cacheKey=Y,R.__webglTexture=ee[Y].texture}return O}function G(R,M,O){let K=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=t.TEXTURE_3D);const ee=qe(R,M),Y=M.source;n.bindTexture(K,R.__webglTexture,t.TEXTURE0+O);const Me=i.get(Y);if(Y.version!==Me.__version||ee===!0){n.activeTexture(t.TEXTURE0+O);const ue=Ye.getPrimaries(Ye.workingColorSpace),me=M.colorSpace===Qi?null:Ye.getPrimaries(M.colorSpace),je=M.colorSpace===Qi||ue===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ie=y(M.image,!1,r.maxTextureSize);ie=ot(M,ie);const ge=s.convert(M.format,M.colorSpace),Re=s.convert(M.type);let be=v(M.internalFormat,ge,Re,M.colorSpace,M.isVideoTexture);Se(K,M);let ve;const He=M.mipmaps,Fe=M.isVideoTexture!==!0,it=Me.__version===void 0||ee===!0,D=Y.dataReady,le=P(M,ie);if(M.isDepthTexture)be=x(M.format===lo,M.type),it&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,be,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,be,ie.width,ie.height,0,ge,Re,null));else if(M.isDataTexture)if(He.length>0){Fe&&it&&n.texStorage2D(t.TEXTURE_2D,le,be,He[0].width,He[0].height);for(let H=0,Z=He.length;H<Z;H++)ve=He[H],Fe?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,ve.width,ve.height,ge,Re,ve.data):n.texImage2D(t.TEXTURE_2D,H,be,ve.width,ve.height,0,ge,Re,ve.data);M.generateMipmaps=!1}else Fe?(it&&n.texStorage2D(t.TEXTURE_2D,le,be,ie.width,ie.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Re,ie.data)):n.texImage2D(t.TEXTURE_2D,0,be,ie.width,ie.height,0,ge,Re,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,be,He[0].width,He[0].height,ie.depth);for(let H=0,Z=He.length;H<Z;H++)if(ve=He[H],M.format!==jn)if(ge!==null)if(Fe){if(D)if(M.layerUpdates.size>0){const de=C0(ve.width,ve.height,M.format,M.type);for(const ce of M.layerUpdates){const Ie=ve.data.subarray(ce*de/ve.data.BYTES_PER_ELEMENT,(ce+1)*de/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,ce,ve.width,ve.height,1,ge,Ie)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,ie.depth,ge,ve.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,be,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,ie.depth,ge,Re,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,be,ve.width,ve.height,ie.depth,0,ge,Re,ve.data)}else{Fe&&it&&n.texStorage2D(t.TEXTURE_2D,le,be,He[0].width,He[0].height);for(let H=0,Z=He.length;H<Z;H++)ve=He[H],M.format!==jn?ge!==null?Fe?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,H,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,ve.width,ve.height,ge,Re,ve.data):n.texImage2D(t.TEXTURE_2D,H,be,ve.width,ve.height,0,ge,Re,ve.data)}else if(M.isDataArrayTexture)if(Fe){if(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,be,ie.width,ie.height,ie.depth),D)if(M.layerUpdates.size>0){const H=C0(ie.width,ie.height,M.format,M.type);for(const Z of M.layerUpdates){const de=ie.data.subarray(Z*H/ie.data.BYTES_PER_ELEMENT,(Z+1)*H/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,ge,Re,de)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Re,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,ge,Re,ie.data);else if(M.isData3DTexture)Fe?(it&&n.texStorage3D(t.TEXTURE_3D,le,be,ie.width,ie.height,ie.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Re,ie.data)):n.texImage3D(t.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,ge,Re,ie.data);else if(M.isFramebufferTexture){if(it)if(Fe)n.texStorage2D(t.TEXTURE_2D,le,be,ie.width,ie.height);else{let H=ie.width,Z=ie.height;for(let de=0;de<le;de++)n.texImage2D(t.TEXTURE_2D,de,be,H,Z,0,ge,Re,null),H>>=1,Z>>=1}}else if(He.length>0){if(Fe&&it){const H=we(He[0]);n.texStorage2D(t.TEXTURE_2D,le,be,H.width,H.height)}for(let H=0,Z=He.length;H<Z;H++)ve=He[H],Fe?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,ge,Re,ve):n.texImage2D(t.TEXTURE_2D,H,be,ge,Re,ve);M.generateMipmaps=!1}else if(Fe){if(it){const H=we(ie);n.texStorage2D(t.TEXTURE_2D,le,be,H.width,H.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Re,ie)}else n.texImage2D(t.TEXTURE_2D,0,be,ge,Re,ie);g(M)&&h(K),Me.__version=Y.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ne(R,M,O){if(M.image.length!==6)return;const K=qe(R,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+O);const Y=i.get(ee);if(ee.version!==Y.__version||K===!0){n.activeTexture(t.TEXTURE0+O);const Me=Ye.getPrimaries(Ye.workingColorSpace),ue=M.colorSpace===Qi?null:Ye.getPrimaries(M.colorSpace),me=M.colorSpace===Qi||Me===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const je=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!je&&!ie?ge[Z]=y(M.image[Z],!0,r.maxCubemapSize):ge[Z]=ie?M.image[Z].image:M.image[Z],ge[Z]=ot(M,ge[Z]);const Re=ge[0],be=s.convert(M.format,M.colorSpace),ve=s.convert(M.type),He=v(M.internalFormat,be,ve,M.colorSpace),Fe=M.isVideoTexture!==!0,it=Y.__version===void 0||K===!0,D=ee.dataReady;let le=P(M,Re);Se(t.TEXTURE_CUBE_MAP,M);let H;if(je){Fe&&it&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,He,Re.width,Re.height);for(let Z=0;Z<6;Z++){H=ge[Z].mipmaps;for(let de=0;de<H.length;de++){const ce=H[de];M.format!==jn?be!==null?Fe?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,ce.width,ce.height,be,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,He,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,ce.width,ce.height,be,ve,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,He,ce.width,ce.height,0,be,ve,ce.data)}}}else{if(H=M.mipmaps,Fe&&it){H.length>0&&le++;const Z=we(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,He,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){Fe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,be,ve,ge[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,ge[Z].width,ge[Z].height,0,be,ve,ge[Z].data);for(let de=0;de<H.length;de++){const Ie=H[de].image[Z].image;Fe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,Ie.width,Ie.height,be,ve,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,He,Ie.width,Ie.height,0,be,ve,Ie.data)}}else{Fe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,be,ve,ge[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,be,ve,ge[Z]);for(let de=0;de<H.length;de++){const ce=H[de];Fe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,be,ve,ce.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,He,be,ve,ce.image[Z])}}}g(M)&&h(t.TEXTURE_CUBE_MAP),Y.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function pe(R,M,O,K,ee,Y){const Me=s.convert(O.format,O.colorSpace),ue=s.convert(O.type),me=v(O.internalFormat,Me,ue,O.colorSpace),je=i.get(M),ie=i.get(O);if(ie.__renderTarget=M,!je.__hasExternalTextures){const ge=Math.max(1,M.width>>Y),Re=Math.max(1,M.height>>Y);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,Y,me,ge,Re,M.depth,0,Me,ue,null):n.texImage2D(ee,Y,me,ge,Re,0,Me,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ze(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ee,ie.__webglTexture,0,Ve(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ee,ie.__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(R,M,O){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const K=M.depthTexture,ee=K&&K.isDepthTexture?K.type:null,Y=x(M.stencilBuffer,ee),Me=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=Ve(M);ze(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,Y,M.width,M.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,Y,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Y,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,R)}else{const K=M.textures;for(let ee=0;ee<K.length;ee++){const Y=K[ee],Me=s.convert(Y.format,Y.colorSpace),ue=s.convert(Y.type),me=v(Y.internalFormat,Me,ue,Y.colorSpace),je=Ve(M);O&&ze(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,je,me,M.width,M.height):ze(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const ee=K.__webglTexture,Y=Ve(M);if(M.depthTexture.format===js)ze(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===lo)ze(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function De(R){const M=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Pe(M.__webglFramebuffer,R)}else if(O){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=t.createRenderbuffer(),se(M.__webglDepthbuffer[K],R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),se(M.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(R,M,O){const K=i.get(R);M!==void 0&&pe(K.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&De(R)}function dt(R){const M=R.texture,O=i.get(R),K=i.get(M);R.addEventListener("dispose",w);const ee=R.textures,Y=R.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=M.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let me=0;me<M.mipmaps.length;me++)O.__webglFramebuffer[ue][me]=t.createFramebuffer()}else O.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)O.__webglFramebuffer[ue]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ue=0,me=ee.length;ue<me;ue++){const je=i.get(ee[ue]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&ze(R)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const me=ee[ue];O.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);const je=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),ge=v(me.internalFormat,je,ie,me.colorSpace,R.isXRRenderTarget===!0),Re=Ve(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,ge,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),se(O.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Se(t.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)pe(O.__webglFramebuffer[ue][me],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else pe(O.__webglFramebuffer[ue],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ue=0,me=ee.length;ue<me;ue++){const je=ee[ue],ie=i.get(je);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),Se(t.TEXTURE_2D,je),pe(O.__webglFramebuffer,R,je,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),g(je)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,K.__webglTexture),Se(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)pe(O.__webglFramebuffer[me],R,M,t.COLOR_ATTACHMENT0,ue,me);else pe(O.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ue,0);g(M)&&h(ue),n.unbindTexture()}R.depthBuffer&&De(R)}function Xe(R){const M=R.textures;for(let O=0,K=M.length;O<K;O++){const ee=M[O];if(g(ee)){const Y=m(R),Me=i.get(ee).__webglTexture;n.bindTexture(Y,Me),h(Y),n.unbindTexture()}}}const St=[],N=[];function Sn(R){if(R.samples>0){if(ze(R)===!1){const M=R.textures,O=R.width,K=R.height;let ee=t.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(R),ue=M.length>1;if(ue)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let me=0;me<M.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const je=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,je,0)}t.blitFramebuffer(0,0,O,K,0,0,O,K,ee,t.NEAREST),l===!0&&(St.length=0,N.length=0,St.push(t.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(St.push(Y),N.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,St))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const je=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ve(R){return Math.min(r.maxSamples,R.samples)}function ze(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ce(R){const M=o.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function ot(R,M){const O=R.colorSpace,K=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==mo&&O!==Qi&&(Ye.getTransfer(O)===tt?(K!==jn||ee!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=L,this.rebindTextures=ke,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ze}function KD(t,e){function n(i,r=Qi){let s;const o=Ye.getTransfer(r);if(i===Ni)return t.UNSIGNED_BYTE;if(i===Hp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Gp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===MS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===xS)return t.BYTE;if(i===SS)return t.SHORT;if(i===Ea)return t.UNSIGNED_SHORT;if(i===zp)return t.INT;if(i===Jr)return t.UNSIGNED_INT;if(i===Ei)return t.FLOAT;if(i===Ia)return t.HALF_FLOAT;if(i===ES)return t.ALPHA;if(i===TS)return t.RGB;if(i===jn)return t.RGBA;if(i===wS)return t.LUMINANCE;if(i===AS)return t.LUMINANCE_ALPHA;if(i===js)return t.DEPTH_COMPONENT;if(i===lo)return t.DEPTH_STENCIL;if(i===CS)return t.RED;if(i===Wp)return t.RED_INTEGER;if(i===RS)return t.RG;if(i===Xp)return t.RG_INTEGER;if(i===jp)return t.RGBA_INTEGER;if(i===Gl||i===Wl||i===Xl||i===jl)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vd||i===zd||i===Hd||i===Gd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wd||i===Xd||i===jd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wd||i===Xd)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jd)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yd||i===$d||i===qd||i===Kd||i===Zd||i===Qd||i===Jd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yd)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$d)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qd)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kd)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zd)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qd)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jd)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===th)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ih)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===ah||i===lh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Yl)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===PS||i===uh||i===ch||i===fh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Yl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ch)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ao?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class ZD extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ks extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QD={type:"move"};class vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),h=this._getHandJoint(u,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const JD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eI=`
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

}`;class tI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new vr({vertexShader:JD,fragmentShader:eI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ln(new Qu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nI extends go{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const y=new tI,g=n.getContextAttributes();let h=null,m=null;const v=[],x=[],P=new We;let A=null;const w=new Pn;w.viewport=new yt;const C=new Pn;C.viewport=new yt;const T=[w,C],S=new ZD;let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ne=v[G];return ne===void 0&&(ne=new vf,v[G]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(G){let ne=v[G];return ne===void 0&&(ne=new vf,v[G]=ne),ne.getGripSpace()},this.getHand=function(G){let ne=v[G];return ne===void 0&&(ne=new vf,v[G]=ne),ne.getHandSpace()};function V(G){const ne=x.indexOf(G.inputSource);if(ne===-1)return;const pe=v[ne];pe!==void 0&&(pe.update(G.inputSource,G.frame,u||o),pe.dispatchEvent({type:G.type,data:G.inputSource}))}function $(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",J);for(let G=0;G<v.length;G++){const ne=x[G];ne!==null&&(x[G]=null,v[G].disconnect(ne))}b=null,z=null,y.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,m=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",$),r.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new es(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,pe=null,se=null;g.depth&&(se=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=g.stencil?lo:js,pe=g.stencil?ao:Jr);const Pe={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new es(f.textureWidth,f.textureHeight,{format:jn,type:Ni,depthTexture:new WS(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(G){for(let ne=0;ne<G.removed.length;ne++){const pe=G.removed[ne],se=x.indexOf(pe);se>=0&&(x[se]=null,v[se].disconnect(pe))}for(let ne=0;ne<G.added.length;ne++){const pe=G.added[ne];let se=x.indexOf(pe);if(se===-1){for(let De=0;De<v.length;De++)if(De>=x.length){x.push(pe),se=De;break}else if(x[De]===null){x[De]=pe,se=De;break}if(se===-1)break}const Pe=v[se];Pe&&Pe.connect(pe)}}const j=new F,X=new F;function L(G,ne,pe){j.setFromMatrixPosition(ne.matrixWorld),X.setFromMatrixPosition(pe.matrixWorld);const se=j.distanceTo(X),Pe=ne.projectionMatrix.elements,De=pe.projectionMatrix.elements,ke=Pe[14]/(Pe[10]-1),dt=Pe[14]/(Pe[10]+1),Xe=(Pe[9]+1)/Pe[5],St=(Pe[9]-1)/Pe[5],N=(Pe[8]-1)/Pe[0],Sn=(De[8]+1)/De[0],Ve=ke*N,ze=ke*Sn,Ce=se/(-N+Sn),ot=Ce*-N;if(ne.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ot),G.translateZ(Ce),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Pe[10]===-1)G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const we=ke+Ce,R=dt+Ce,M=Ve-ot,O=ze+(se-ot),K=Xe*dt/R*we,ee=St*dt/R*we;G.projectionMatrix.makePerspective(M,O,K,ee,we,R),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function W(G,ne){ne===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ne.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let ne=G.near,pe=G.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(pe=y.depthFar)),S.near=C.near=w.near=ne,S.far=C.far=w.far=pe,(b!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,z=S.far),w.layers.mask=G.layers.mask|2,C.layers.mask=G.layers.mask|4,S.layers.mask=w.layers.mask|C.layers.mask;const se=G.parent,Pe=S.cameras;W(S,se);for(let De=0;De<Pe.length;De++)W(Pe[De],se);Pe.length===2?L(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),q(G,S,se)};function q(G,ne,pe){pe===null?G.matrix.copy(ne.matrixWorld):(G.matrix.copy(pe.matrixWorld),G.matrix.invert(),G.matrix.multiply(ne.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=dh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let oe=null;function Se(G,ne){if(c=ne.getViewerPose(u||o),_=ne,c!==null){const pe=c.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let se=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let De=0;De<pe.length;De++){const ke=pe[De];let dt=null;if(p!==null)dt=p.getViewport(ke);else{const St=d.getViewSubImage(f,ke);dt=St.viewport,De===0&&(e.setRenderTargetTextures(m,St.colorTexture,f.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(m))}let Xe=T[De];Xe===void 0&&(Xe=new Pn,Xe.layers.enable(De),Xe.viewport=new yt,T[De]=Xe),Xe.matrix.fromArray(ke.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(ke.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(dt.x,dt.y,dt.width,dt.height),De===0&&(S.matrix.copy(Xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(Xe)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const De=d.getDepthInformation(pe[0]);De&&De.isValid&&De.texture&&y.init(e,De,r.renderState)}}for(let pe=0;pe<v.length;pe++){const se=x[pe],Pe=v[pe];se!==null&&Pe!==void 0&&Pe.update(se,ne,u||o)}oe&&oe(G,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const qe=new HS;qe.setAnimationLoop(Se),this.setAnimationLoop=function(G){oe=G},this.dispose=function(){}}}const Pr=new Zn,iI=new xt;function rI(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,BS(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,m,v,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),c(g,h)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,x)):h.isMeshMatcapMaterial?(s(g,h),_(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),y(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,m,v):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===ln&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===ln&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const m=e.get(h),v=m.envMap,x=m.envMapRotation;v&&(g.envMap.value=v,Pr.copy(x),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),g.envMapRotation.value.setFromMatrix4(iI.makeRotationFromEuler(Pr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,v){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=v*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,m){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){const m=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sI(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const x=v.program;i.uniformBlockBinding(m,x)}function u(m,v){let x=r[m.id];x===void 0&&(_(m),x=c(m),r[m.id]=x,m.addEventListener("dispose",g));const P=v.program;i.updateUBOMapping(m,P);const A=e.render.frame;s[m.id]!==A&&(f(m),s[m.id]=A)}function c(m){const v=d();m.__bindingPointIndex=v;const x=t.createBuffer(),P=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const v=r[m.id],x=m.uniforms,P=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,w=x.length;A<w;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,S=C.length;T<S;T++){const b=C[T];if(p(b,A,T,P)===!0){const z=b.__offset,V=Array.isArray(b.value)?b.value:[b.value];let $=0;for(let J=0;J<V.length;J++){const j=V[J],X=y(j);typeof j=="number"||typeof j=="boolean"?(b.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,z+$,b.__data)):j.isMatrix3?(b.__data[0]=j.elements[0],b.__data[1]=j.elements[1],b.__data[2]=j.elements[2],b.__data[3]=0,b.__data[4]=j.elements[3],b.__data[5]=j.elements[4],b.__data[6]=j.elements[5],b.__data[7]=0,b.__data[8]=j.elements[6],b.__data[9]=j.elements[7],b.__data[10]=j.elements[8],b.__data[11]=0):(j.toArray(b.__data,$),$+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,v,x,P){const A=m.value,w=v+"_"+x;if(P[w]===void 0)return typeof A=="number"||typeof A=="boolean"?P[w]=A:P[w]=A.clone(),!0;{const C=P[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return P[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function _(m){const v=m.uniforms;let x=0;const P=16;for(let w=0,C=v.length;w<C;w++){const T=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,b=T.length;S<b;S++){const z=T[S],V=Array.isArray(z.value)?z.value:[z.value];for(let $=0,J=V.length;$<J;$++){const j=V[$],X=y(j),L=x%P,W=L%X.boundary,q=L+W;x+=W,q!==0&&P-q<X.storage&&(x+=P-q),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=X.storage}}}const A=x%P;return A>0&&(x+=P-A),m.__size=x,m.__cache={},this}function y(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class oI{constructor(e={}){const{canvas:n=YR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),y=new Int32Array(4);let g=null,h=null;const m=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this.toneMapping=cr,this.toneMappingExposure=1;const x=this;let P=!1,A=0,w=0,C=null,T=-1,S=null;const b=new yt,z=new yt;let V=null;const $=new Ge(0);let J=0,j=n.width,X=n.height,L=1,W=null,q=null;const oe=new yt(0,0,j,X),Se=new yt(0,0,j,X);let qe=!1;const G=new qp;let ne=!1,pe=!1;const se=new xt,Pe=new xt,De=new F,ke=new yt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function St(){return C===null?L:1}let N=i;function Sn(E,I){return n.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bp}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",ce,!1),N===null){const I="webgl2";if(N=Sn(I,E),N===null)throw Sn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ve,ze,Ce,ot,we,R,M,O,K,ee,Y,Me,ue,me,je,ie,ge,Re,be,ve,He,Fe,it,D;function le(){Ve=new fL(N),Ve.init(),Fe=new KD(N,Ve),ze=new sL(N,Ve,e,Fe),Ce=new YD(N,Ve),ze.reverseDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),ot=new pL(N),we=new DD,R=new qD(N,Ve,Ce,we,ze,Fe,ot),M=new aL(x),O=new cL(x),K=new SP(N),it=new iL(N,K),ee=new dL(N,K,ot,it),Y=new gL(N,ee,K,ot),be=new mL(N,ze,R),ie=new oL(we),Me=new LD(x,M,O,Ve,ze,it,ie),ue=new rI(x,we),me=new UD,je=new VD(Ve),Re=new nL(x,M,O,Ce,Y,p,l),ge=new XD(x,Y,ze),D=new sI(N,ot,ze,Ce),ve=new rL(N,Ve,ot),He=new hL(N,Ve,ot),ot.programs=Me.programs,x.capabilities=ze,x.extensions=Ve,x.properties=we,x.renderLists=me,x.shadowMap=ge,x.state=Ce,x.info=ot}le();const H=new nI(x,N);this.xr=H,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(E){E!==void 0&&(L=E,this.setSize(j,X,!1))},this.getSize=function(E){return E.set(j,X)},this.setSize=function(E,I,k=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,X=I,n.width=Math.floor(E*L),n.height=Math.floor(I*L),k===!0&&(n.style.width=E+"px",n.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(j*L,X*L).floor()},this.setDrawingBufferSize=function(E,I,k){j=E,X=I,L=k,n.width=Math.floor(E*k),n.height=Math.floor(I*k),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,I,k,B){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,I,k,B),Ce.viewport(b.copy(oe).multiplyScalar(L).round())},this.getScissor=function(E){return E.copy(Se)},this.setScissor=function(E,I,k,B){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,I,k,B),Ce.scissor(z.copy(Se).multiplyScalar(L).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(E){Ce.setScissorTest(qe=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(E=!0,I=!0,k=!0){let B=0;if(E){let U=!1;if(C!==null){const re=C.texture.format;U=re===jp||re===Xp||re===Wp}if(U){const re=C.texture.type,fe=re===Ni||re===Jr||re===Ea||re===ao||re===Hp||re===Gp,_e=Re.getClearColor(),ye=Re.getClearAlpha(),Le=_e.r,Ue=_e.g,xe=_e.b;fe?(_[0]=Le,_[1]=Ue,_[2]=xe,_[3]=ye,N.clearBufferuiv(N.COLOR,0,_)):(y[0]=Le,y[1]=Ue,y[2]=xe,y[3]=ye,N.clearBufferiv(N.COLOR,0,y))}else B|=N.COLOR_BUFFER_BIT}I&&(B|=N.DEPTH_BUFFER_BIT),k&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),me.dispose(),je.dispose(),we.dispose(),M.dispose(),O.dispose(),Y.dispose(),it.dispose(),D.dispose(),Me.dispose(),H.dispose(),H.removeEventListener("sessionstart",em),H.removeEventListener("sessionend",tm),Mr.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=ot.autoReset,I=ge.enabled,k=ge.autoUpdate,B=ge.needsUpdate,U=ge.type;le(),ot.autoReset=E,ge.enabled=I,ge.autoUpdate=k,ge.needsUpdate=B,ge.type=U}function ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ie(E){const I=E.target;I.removeEventListener("dispose",Ie),vt(I)}function vt(E){Ot(E),we.remove(E)}function Ot(E){const I=we.get(E).programs;I!==void 0&&(I.forEach(function(k){Me.releaseProgram(k)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,k,B,U,re){I===null&&(I=dt);const fe=U.isMesh&&U.matrixWorld.determinant()<0,_e=JS(E,I,k,B,U);Ce.setMaterial(B,fe);let ye=k.index,Le=1;if(B.wireframe===!0){if(ye=ee.getWireframeAttribute(k),ye===void 0)return;Le=2}const Ue=k.drawRange,xe=k.attributes.position;let Ke=Ue.start*Le,rt=(Ue.start+Ue.count)*Le;re!==null&&(Ke=Math.max(Ke,re.start*Le),rt=Math.min(rt,(re.start+re.count)*Le)),ye!==null?(Ke=Math.max(Ke,0),rt=Math.min(rt,ye.count)):xe!=null&&(Ke=Math.max(Ke,0),rt=Math.min(rt,xe.count));const at=rt-Ke;if(at<0||at===1/0)return;it.setup(U,B,_e,k,ye);let Jt,Ze=ve;if(ye!==null&&(Jt=K.get(ye),Ze=He,Ze.setIndex(Jt)),U.isMesh)B.wireframe===!0?(Ce.setLineWidth(B.wireframeLinewidth*St()),Ze.setMode(N.LINES)):Ze.setMode(N.TRIANGLES);else if(U.isLine){let Ee=B.linewidth;Ee===void 0&&(Ee=1),Ce.setLineWidth(Ee*St()),U.isLineSegments?Ze.setMode(N.LINES):U.isLineLoop?Ze.setMode(N.LINE_LOOP):Ze.setMode(N.LINE_STRIP)}else U.isPoints?Ze.setMode(N.POINTS):U.isSprite&&Ze.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ze.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ze.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,ci=U._multiDrawCounts,Qe=U._multiDrawCount,Fn=ye?K.get(ye).bytesPerElement:1,rs=we.get(B).currentProgram.getUniforms();for(let cn=0;cn<Qe;cn++)rs.setValue(N,"_gl_DrawID",cn),Ze.render(Ee[cn]/Fn,ci[cn])}else if(U.isInstancedMesh)Ze.renderInstances(Ke,at,U.count);else if(k.isInstancedBufferGeometry){const Ee=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ci=Math.min(k.instanceCount,Ee);Ze.renderInstances(Ke,at,ci)}else Ze.render(Ke,at)};function Je(E,I,k){E.transparent===!0&&E.side===yi&&E.forceSinglePass===!1?(E.side=ln,E.needsUpdate=!0,Ba(E,I,k),E.side=gr,E.needsUpdate=!0,Ba(E,I,k),E.side=yi):Ba(E,I,k)}this.compile=function(E,I,k=null){k===null&&(k=E),h=je.get(k),h.init(I),v.push(h),k.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),E!==k&&E.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();const B=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const re=U.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const _e=re[fe];Je(_e,k,U),B.add(_e)}else Je(re,k,U),B.add(re)}),v.pop(),h=null,B},this.compileAsync=function(E,I,k=null){const B=this.compile(E,I,k);return new Promise(U=>{function re(){if(B.forEach(function(fe){we.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){U(E);return}setTimeout(re,10)}Ve.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Nn=null;function ui(E){Nn&&Nn(E)}function em(){Mr.stop()}function tm(){Mr.start()}const Mr=new HS;Mr.setAnimationLoop(ui),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(E){Nn=E,H.setAnimationLoop(E),E===null?Mr.stop():Mr.start()},H.addEventListener("sessionstart",em),H.addEventListener("sessionend",tm),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(I),I=H.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,I,C),h=je.get(E,v.length),h.init(I),v.push(h),Pe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G.setFromProjectionMatrix(Pe),pe=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,pe),g=me.get(E,m.length),g.init(),m.push(g),H.enabled===!0&&H.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&tc(re,I,-1/0,x.sortObjects)}tc(E,I,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(W,q),Xe=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Xe&&Re.addToRenderList(g,E),this.info.render.frame++,ne===!0&&ie.beginShadows();const k=h.state.shadowsArray;ge.render(k,E,I),ne===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=g.opaque,U=g.transmissive;if(h.setupLights(),I.isArrayCamera){const re=I.cameras;if(U.length>0)for(let fe=0,_e=re.length;fe<_e;fe++){const ye=re[fe];im(B,U,E,ye)}Xe&&Re.render(E);for(let fe=0,_e=re.length;fe<_e;fe++){const ye=re[fe];nm(g,E,ye,ye.viewport)}}else U.length>0&&im(B,U,E,I),Xe&&Re.render(E),nm(g,E,I);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,I),it.resetDefaultState(),T=-1,S=null,v.pop(),v.length>0?(h=v[v.length-1],ne===!0&&ie.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function tc(E,I,k,B){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){B&&ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pe);const fe=Y.update(E),_e=E.material;_e.visible&&g.push(E,fe,_e,k,ke.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){const fe=Y.update(E),_e=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ke.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),ke.copy(fe.boundingSphere.center)),ke.applyMatrix4(E.matrixWorld).applyMatrix4(Pe)),Array.isArray(_e)){const ye=fe.groups;for(let Le=0,Ue=ye.length;Le<Ue;Le++){const xe=ye[Le],Ke=_e[xe.materialIndex];Ke&&Ke.visible&&g.push(E,fe,Ke,k,ke.z,xe)}}else _e.visible&&g.push(E,fe,_e,k,ke.z,null)}}const re=E.children;for(let fe=0,_e=re.length;fe<_e;fe++)tc(re[fe],I,k,B)}function nm(E,I,k,B){const U=E.opaque,re=E.transmissive,fe=E.transparent;h.setupLightsView(k),ne===!0&&ie.setGlobalState(x.clippingPlanes,k),B&&Ce.viewport(b.copy(B)),U.length>0&&ka(U,I,k),re.length>0&&ka(re,I,k),fe.length>0&&ka(fe,I,k),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function im(E,I,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[B.id]===void 0&&(h.state.transmissionRenderTarget[B.id]=new es(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Ia:Ni,minFilter:Wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const re=h.state.transmissionRenderTarget[B.id],fe=B.viewport||b;re.setSize(fe.z,fe.w);const _e=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor($),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),Xe&&Re.render(k);const ye=x.toneMapping;x.toneMapping=cr;const Le=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),h.setupLightsView(B),ne===!0&&ie.setGlobalState(x.clippingPlanes,B),ka(E,k,B),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let xe=0,Ke=I.length;xe<Ke;xe++){const rt=I[xe],at=rt.object,Jt=rt.geometry,Ze=rt.material,Ee=rt.group;if(Ze.side===yi&&at.layers.test(B.layers)){const ci=Ze.side;Ze.side=ln,Ze.needsUpdate=!0,rm(at,k,B,Jt,Ze,Ee),Ze.side=ci,Ze.needsUpdate=!0,Ue=!0}}Ue===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}x.setRenderTarget(_e),x.setClearColor($,J),Le!==void 0&&(B.viewport=Le),x.toneMapping=ye}function ka(E,I,k){const B=I.isScene===!0?I.overrideMaterial:null;for(let U=0,re=E.length;U<re;U++){const fe=E[U],_e=fe.object,ye=fe.geometry,Le=B===null?fe.material:B,Ue=fe.group;_e.layers.test(k.layers)&&rm(_e,I,k,ye,Le,Ue)}}function rm(E,I,k,B,U,re){E.onBeforeRender(x,I,k,B,U,re),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(x,I,k,B,E,re),U.transparent===!0&&U.side===yi&&U.forceSinglePass===!1?(U.side=ln,U.needsUpdate=!0,x.renderBufferDirect(k,I,B,U,E,re),U.side=gr,U.needsUpdate=!0,x.renderBufferDirect(k,I,B,U,E,re),U.side=yi):x.renderBufferDirect(k,I,B,U,E,re),E.onAfterRender(x,I,k,B,U,re)}function Ba(E,I,k){I.isScene!==!0&&(I=dt);const B=we.get(E),U=h.state.lights,re=h.state.shadowsArray,fe=U.state.version,_e=Me.getParameters(E,U.state,re,I,k),ye=Me.getProgramCacheKey(_e);let Le=B.programs;B.environment=E.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(E.isMeshStandardMaterial?O:M).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",Ie),Le=new Map,B.programs=Le);let Ue=Le.get(ye);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===fe)return om(E,_e),Ue}else _e.uniforms=Me.getUniforms(E),E.onBeforeCompile(_e,x),Ue=Me.acquireProgram(_e,ye),Le.set(ye,Ue),B.uniforms=_e.uniforms;const xe=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(xe.clippingPlanes=ie.uniform),om(E,_e),B.needsLights=tM(E),B.lightsStateVersion=fe,B.needsLights&&(xe.ambientLightColor.value=U.state.ambient,xe.lightProbe.value=U.state.probe,xe.directionalLights.value=U.state.directional,xe.directionalLightShadows.value=U.state.directionalShadow,xe.spotLights.value=U.state.spot,xe.spotLightShadows.value=U.state.spotShadow,xe.rectAreaLights.value=U.state.rectArea,xe.ltc_1.value=U.state.rectAreaLTC1,xe.ltc_2.value=U.state.rectAreaLTC2,xe.pointLights.value=U.state.point,xe.pointLightShadows.value=U.state.pointShadow,xe.hemisphereLights.value=U.state.hemi,xe.directionalShadowMap.value=U.state.directionalShadowMap,xe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,xe.spotShadowMap.value=U.state.spotShadowMap,xe.spotLightMatrix.value=U.state.spotLightMatrix,xe.spotLightMap.value=U.state.spotLightMap,xe.pointShadowMap.value=U.state.pointShadowMap,xe.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Ue,B.uniformsList=null,Ue}function sm(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=$l.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function om(E,I){const k=we.get(E);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function JS(E,I,k,B,U){I.isScene!==!0&&(I=dt),R.resetTextureUnits();const re=I.fog,fe=B.isMeshStandardMaterial?I.environment:null,_e=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:mo,ye=(B.isMeshStandardMaterial?O:M).get(B.envMap||fe),Le=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ue=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),xe=!!k.morphAttributes.position,Ke=!!k.morphAttributes.normal,rt=!!k.morphAttributes.color;let at=cr;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(at=x.toneMapping);const Jt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ze=Jt!==void 0?Jt.length:0,Ee=we.get(B),ci=h.state.lights;if(ne===!0&&(pe===!0||E!==S)){const Mn=E===S&&B.id===T;ie.setState(B,E,Mn)}let Qe=!1;B.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==ci.state.version||Ee.outputColorSpace!==_e||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==ye||B.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==Le||Ee.vertexTangents!==Ue||Ee.morphTargets!==xe||Ee.morphNormals!==Ke||Ee.morphColors!==rt||Ee.toneMapping!==at||Ee.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Ee.__version=B.version);let Fn=Ee.currentProgram;Qe===!0&&(Fn=Ba(B,I,U));let rs=!1,cn=!1,yo=!1;const lt=Fn.getUniforms(),Qn=Ee.uniforms;if(Ce.useProgram(Fn.program)&&(rs=!0,cn=!0,yo=!0),B.id!==T&&(T=B.id,cn=!0),rs||S!==E){Ce.buffers.depth.getReversed()?(se.copy(E.projectionMatrix),qR(se),KR(se),lt.setValue(N,"projectionMatrix",se)):lt.setValue(N,"projectionMatrix",E.projectionMatrix),lt.setValue(N,"viewMatrix",E.matrixWorldInverse);const ki=lt.map.cameraPosition;ki!==void 0&&ki.setValue(N,De.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&lt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&lt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,cn=!0,yo=!0)}if(U.isSkinnedMesh){lt.setOptional(N,U,"bindMatrix"),lt.setOptional(N,U,"bindMatrixInverse");const Mn=U.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),lt.setValue(N,"boneTexture",Mn.boneTexture,R))}U.isBatchedMesh&&(lt.setOptional(N,U,"batchingTexture"),lt.setValue(N,"batchingTexture",U._matricesTexture,R),lt.setOptional(N,U,"batchingIdTexture"),lt.setValue(N,"batchingIdTexture",U._indirectTexture,R),lt.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&lt.setValue(N,"batchingColorTexture",U._colorsTexture,R));const xo=k.morphAttributes;if((xo.position!==void 0||xo.normal!==void 0||xo.color!==void 0)&&be.update(U,k,Fn),(cn||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,lt.setValue(N,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Qn.envMap.value=ye,Qn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(Qn.envMapIntensity.value=I.environmentIntensity),cn&&(lt.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ee.needsLights&&eM(Qn,yo),re&&B.fog===!0&&ue.refreshFogUniforms(Qn,re),ue.refreshMaterialUniforms(Qn,B,L,X,h.state.transmissionRenderTarget[E.id]),$l.upload(N,sm(Ee),Qn,R)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&($l.upload(N,sm(Ee),Qn,R),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&lt.setValue(N,"center",U.center),lt.setValue(N,"modelViewMatrix",U.modelViewMatrix),lt.setValue(N,"normalMatrix",U.normalMatrix),lt.setValue(N,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Mn=B.uniformsGroups;for(let ki=0,Bi=Mn.length;ki<Bi;ki++){const am=Mn[ki];D.update(am,Fn),D.bind(am,Fn)}}return Fn}function eM(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function tM(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,I,k){we.get(E.texture).__webglTexture=I,we.get(E.depthTexture).__webglTexture=k;const B=we.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const k=we.get(E);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,k=0){C=E,A=I,w=k;let B=!0,U=null,re=!1,fe=!1;if(E){const ye=we.get(E);if(ye.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(N.FRAMEBUFFER,null),B=!1;else if(ye.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(ye.__hasExternalTextures)R.rebindTextures(E,we.get(E.texture).__webglTexture,we.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const xe=E.depthTexture;if(ye.__boundDepthTexture!==xe){if(xe!==null&&we.has(xe)&&(E.width!==xe.image.width||E.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(fe=!0);const Ue=we.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[I])?U=Ue[I][k]:U=Ue[I],re=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?U=we.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[k]:U=Ue,b.copy(E.viewport),z.copy(E.scissor),V=E.scissorTest}else b.copy(oe).multiplyScalar(L).floor(),z.copy(Se).multiplyScalar(L).floor(),V=qe;if(Ce.bindFramebuffer(N.FRAMEBUFFER,U)&&B&&Ce.drawBuffers(E,U),Ce.viewport(b),Ce.scissor(z),Ce.setScissorTest(V),re){const ye=we.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,k)}else if(fe){const ye=we.get(E.texture),Le=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.__webglTexture,k||0,Le)}T=-1},this.readRenderTargetPixels=function(E,I,k,B,U,re,fe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){Ce.bindFramebuffer(N.FRAMEBUFFER,_e);try{const ye=E.texture,Le=ye.format,Ue=ye.type;if(!ze.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-B&&k>=0&&k<=E.height-U&&N.readPixels(I,k,B,U,Fe.convert(Le),Fe.convert(Ue),re)}finally{const ye=C!==null?we.get(C).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,I,k,B,U,re,fe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){const ye=E.texture,Le=ye.format,Ue=ye.type;if(!ze.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-B&&k>=0&&k<=E.height-U){Ce.bindFramebuffer(N.FRAMEBUFFER,_e);const xe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,xe),N.bufferData(N.PIXEL_PACK_BUFFER,re.byteLength,N.STREAM_READ),N.readPixels(I,k,B,U,Fe.convert(Le),Fe.convert(Ue),0);const Ke=C!==null?we.get(C).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,Ke);const rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await $R(N,rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,xe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,re),N.deleteBuffer(xe),N.deleteSync(rt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,I=null,k=0){E.isTexture!==!0&&(zo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-k),U=Math.floor(E.image.width*B),re=Math.floor(E.image.height*B),fe=I!==null?I.x:0,_e=I!==null?I.y:0;R.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,fe,_e,U,re),Ce.unbindTexture()},this.copyTextureToTexture=function(E,I,k=null,B=null,U=0){E.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],I=arguments[2],U=arguments[3]||0,k=null);let re,fe,_e,ye,Le,Ue,xe,Ke,rt;const at=E.isCompressedTexture?E.mipmaps[U]:E.image;k!==null?(re=k.max.x-k.min.x,fe=k.max.y-k.min.y,_e=k.isBox3?k.max.z-k.min.z:1,ye=k.min.x,Le=k.min.y,Ue=k.isBox3?k.min.z:0):(re=at.width,fe=at.height,_e=at.depth||1,ye=0,Le=0,Ue=0),B!==null?(xe=B.x,Ke=B.y,rt=B.z):(xe=0,Ke=0,rt=0);const Jt=Fe.convert(I.format),Ze=Fe.convert(I.type);let Ee;I.isData3DTexture?(R.setTexture3D(I,0),Ee=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(R.setTexture2DArray(I,0),Ee=N.TEXTURE_2D_ARRAY):(R.setTexture2D(I,0),Ee=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const ci=N.getParameter(N.UNPACK_ROW_LENGTH),Qe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Fn=N.getParameter(N.UNPACK_SKIP_PIXELS),rs=N.getParameter(N.UNPACK_SKIP_ROWS),cn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,at.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ye),N.pixelStorei(N.UNPACK_SKIP_ROWS,Le),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ue);const yo=E.isDataArrayTexture||E.isData3DTexture,lt=I.isDataArrayTexture||I.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Qn=we.get(E),xo=we.get(I),Mn=we.get(Qn.__renderTarget),ki=we.get(xo.__renderTarget);Ce.bindFramebuffer(N.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Bi=0;Bi<_e;Bi++)yo&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.get(E).__webglTexture,U,Ue+Bi),E.isDepthTexture?(lt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.get(I).__webglTexture,U,rt+Bi),N.blitFramebuffer(ye,Le,re,fe,xe,Ke,re,fe,N.DEPTH_BUFFER_BIT,N.NEAREST)):lt?N.copyTexSubImage3D(Ee,U,xe,Ke,rt+Bi,ye,Le,re,fe):N.copyTexSubImage2D(Ee,U,xe,Ke,rt+Bi,ye,Le,re,fe);Ce.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else lt?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Ee,U,xe,Ke,rt,re,fe,_e,Jt,Ze,at.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Ee,U,xe,Ke,rt,re,fe,_e,Jt,at.data):N.texSubImage3D(Ee,U,xe,Ke,rt,re,fe,_e,Jt,Ze,at):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,xe,Ke,re,fe,Jt,Ze,at.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,xe,Ke,at.width,at.height,Jt,at.data):N.texSubImage2D(N.TEXTURE_2D,U,xe,Ke,re,fe,Jt,Ze,at);N.pixelStorei(N.UNPACK_ROW_LENGTH,ci),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fn),N.pixelStorei(N.UNPACK_SKIP_ROWS,rs),N.pixelStorei(N.UNPACK_SKIP_IMAGES,cn),U===0&&I.generateMipmaps&&N.generateMipmap(Ee),Ce.unbindTexture()},this.copyTextureToTexture3D=function(E,I,k=null,B=null,U=0){return E.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,E=arguments[2],I=arguments[3],U=arguments[4]||0),zo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,I,k,B,U)},this.initRenderTarget=function(E){we.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Ce.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,Ce.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}class aI extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ec extends Oi{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new gn(s,3)),this.setAttribute("normal",new gn(s.slice(),3)),this.setAttribute("uv",new gn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const v=new F,x=new F,P=new F;for(let A=0;A<n.length;A+=3)p(n[A+0],v),p(n[A+1],x),p(n[A+2],P),l(v,x,P,m)}function l(m,v,x,P){const A=P+1,w=[];for(let C=0;C<=A;C++){w[C]=[];const T=m.clone().lerp(x,C/A),S=v.clone().lerp(x,C/A),b=A-C;for(let z=0;z<=b;z++)z===0&&C===A?w[C][z]=T:w[C][z]=T.clone().lerp(S,z/b)}for(let C=0;C<A;C++)for(let T=0;T<2*(A-C)-1;T++){const S=Math.floor(T/2);T%2===0?(f(w[C][S+1]),f(w[C+1][S]),f(w[C][S])):(f(w[C][S+1]),f(w[C+1][S+1]),f(w[C+1][S]))}}function u(m){const v=new F;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(m),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function c(){const m=new F;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const x=g(m)/2/Math.PI+.5,P=h(m)/Math.PI+.5;o.push(x,1-P)}_(),d()}function d(){for(let m=0;m<o.length;m+=6){const v=o[m+0],x=o[m+2],P=o[m+4],A=Math.max(v,x,P),w=Math.min(v,x,P);A>.9&&w<.1&&(v<.2&&(o[m+0]+=1),x<.2&&(o[m+2]+=1),P<.2&&(o[m+4]+=1))}}function f(m){s.push(m.x,m.y,m.z)}function p(m,v){const x=m*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function _(){const m=new F,v=new F,x=new F,P=new F,A=new We,w=new We,C=new We;for(let T=0,S=0;T<s.length;T+=9,S+=6){m.set(s[T+0],s[T+1],s[T+2]),v.set(s[T+3],s[T+4],s[T+5]),x.set(s[T+6],s[T+7],s[T+8]),A.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),P.copy(m).add(v).add(x).divideScalar(3);const b=g(P);y(A,S+0,m,b),y(w,S+2,v,b),y(C,S+4,x,b)}}function y(m,v,x,P){P<0&&m.x===1&&(o[v]=m.x-1),x.x===0&&x.z===0&&(o[v]=P/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function h(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.vertices,e.indices,e.radius,e.details)}}class Zp extends ec{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Zp(e.radius,e.detail)}}class Qp extends ec{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Qp(e.radius,e.detail)}}class Jp extends Oi{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new F,d=new F,f=new F;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const y=_/r*s,g=p/i*Math.PI*2;d.x=(e+n*Math.cos(g))*Math.cos(y),d.y=(e+n*Math.cos(g))*Math.sin(y),d.z=n*Math.sin(g),a.push(d.x,d.y,d.z),c.x=e*Math.cos(y),c.y=e*Math.sin(y),f.subVectors(d,c).normalize(),l.push(f.x,f.y,f.z),u.push(_/r),u.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const y=(r+1)*p+_-1,g=(r+1)*(p-1)+_-1,h=(r+1)*(p-1)+_,m=(r+1)*p+_;o.push(y,g,m),o.push(g,h,m)}this.setIndex(o),this.setAttribute("position",new gn(a,3)),this.setAttribute("normal",new gn(l,3)),this.setAttribute("uv",new gn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class lI extends vo{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yp,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class R0 extends vo{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yp,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qS extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const _f=new xt,P0=new F,b0=new F;class uI{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qp,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;P0.setFromMatrixPosition(e.matrixWorld),n.position.copy(P0),b0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(b0),n.updateMatrixWorld(),_f.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_f),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_f)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cI extends uI{constructor(){super(new GS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fI extends qS{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new cI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dI extends qS{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bp);const hI=()=>{const t=Te.useRef(null);return Te.useEffect(()=>{const e=new aI,n=new Pn(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=500;const i=new oI({antialias:!0,alpha:!0});i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),t.current.appendChild(i.domElement);const r=new dI(16777215,.5);e.add(r);const s=new fI(16777215,1);s.position.set(200,100,200),e.add(s);const o=new ks,a=new Qp(5,0),l=[3653269,15987699,6638016];for(let m=0;m<500;m++){const v=new R0({color:l[Math.floor(Math.random()*l.length)],transparent:!0,opacity:.8,flatShading:!0}),x=new Ln(a,v);x.position.set((Math.random()-.5)*1e3,(Math.random()-.5)*1e3,(Math.random()-.5)*1e3),x.updateMatrix(),x.matrixAutoUpdate=!1,o.add(x)}e.add(o);const u=new ks;u.rotation.set(.4,.3,0);const c=new Zp(100,1),d=new R0({color:3653269,transparent:!0,opacity:.9,flatShading:!0}),f=new Ln(c,d);f.position.set(0,40,0),u.add(f);const p=new Jp(140,12,6,15),_=new lI({color:6638016,transparent:!0,opacity:.8,flatShading:!0}),y=new Ln(p,_);y.position.set(0,40,0),y.rotation.x=Math.PI/2+.4,u.add(y),e.add(u);const g=()=>{requestAnimationFrame(g),o.rotation.x+=.001,o.rotation.y-=.004,u.rotation.y+=.003,i.render(e,n)};g();const h=()=>{const m=window.innerWidth,v=window.innerHeight;n.aspect=m/v,n.updateProjectionMatrix(),i.setSize(m,v)};return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h),t.current.removeChild(i.domElement),i.dispose()}},[]),Q.jsx("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,background:"transparent"}})},Hn={name:"Tushar Wagdare",title:"Software Developer | Realtime Rendering Specialist",location:"Pune, India",email:"tushartwagdare@gmail.com",linkedin:"https://www.linkedin.com/in/tushar-wagdare-715438245/",github:"https://github.com/Tushar-Wagdare",summary:"Software Developer specializing in C++ development with extensive experience in cross-platform applications. Strong foundation in data structures, algorithms, and software testing. Proven ability to write clean, maintainable code and implement efficient solutions while adapting quickly to new technologies and development environments."},KS=[{name:"Programming Languages",skills:["C","C++","JavaScript","HTML","Java","Objective C"]},{name:"Frameworks & APIs",skills:["OpenGL","OpenGL ES","WebGL","DirectX11","Win32 SDK","xLib"]},{name:"Development Tools:",skills:["Visual Studio","XCode","Android Studio","Git version control","Email Systems"]},{name:"Platforms",skills:["Windows","Linux","MacOs","iOS","Android"]},{name:"Other Technologies",skills:["CUDA","OpenCL","Microsoft Office Suite"]},{name:"Core Competencies",skills:["Data Structures","Algorithm Design","Software Testing","Bug Fixing","Database Management"]}],Go=[{title:"Vaat Disu De",description:"A cinematic sequence rendered in real-time using C and OpenGL, involving a perlin noise and a real-time spline implementation.",technologies:["C","OpenGL"],liveDemo:"https://www.youtube.com/watch?v=QFp7CFoTlfg",github:null,image:null,date:"03/2024",details:[]},{title:"Sunderkand",description:"Created a mythological story-based cinematic sequence using C and OpenGL.",technologies:["C","OpenGL"],liveDemo:"https://www.youtube.com/watch?v=D8MvifK1kl8",github:null,image:null,date:"10/2023",details:[]},{title:"Dashavtaram",description:"Created a mythological story-based narration and cinematic sequence using C++ and OpenGL.",technologies:["C++","OpenGL"],liveDemo:"https://youtu.be/z0xTpobLRXI?si=ML7Q1VUQ9iiJOXzt",github:null,image:null,date:"01/2025",details:[]},{title:"OpenGL-ModelLoadingAndAnimation",description:"OpenGL model loading and skeletal animation examples.",technologies:[],liveDemo:"https://github.com/Tushar-Wagdare/OpenGL-ModelLoadingAndAnimation",github:"https://github.com/Tushar-Wagdare/OpenGL-ModelLoadingAndAnimation",image:null,date:"10/2024",details:[]}],ZS=[{degree:"Real Time Rendering",institution:"Astromedicomp",dates:"2023 - 2025",details:"C | C++ | Javascript | Java | OpenGL | DirectX11 | CUDA | OpenCL",grade:"8.5 / 10.0",location:"Pune, India"},{degree:"Bachelor of Engineering",institution:"D.Y Patil Institute Of Engineering And Technology Ambi",dates:"2018 - 2022",details:"Mechanical Engineering",grade:"8.0 / 10.0",location:"Pune, India"},{degree:"HSC",institution:"Deogiri Collage Aurangabad",dates:"2016 - 2018",details:"PCM",grade:"65%",location:"Aurangabad, India"}],QS=[{title:"Graphics Developer",company:null,dates:"03/2023 - Present",location:"Pune, India",responsibilities:["Developed 100+ applications using Modern OpenGL across 6 different platforms","Personal work showcasing various applications developed using OpenGL","Demonstrated ability to work with various operating systems and development environments","Implemented complex features including optimization and performance monitoring","Collaborated with team members to ensure code quality and functionality"]}],br={email:"tushartwagdare@gmail.com",phone:"+91 7083666972",linkedin:"https://www.linkedin.com/in/tushar-wagdare-715438245/",github:"https://github.com/Tushar-Wagdare",location:"Pune, India"};function pI(){return Q.jsxs("section",{id:"home",className:"relative min-h-screen w-full overflow-hidden",children:[Q.jsx(hI,{}),Q.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center",children:[Q.jsx(ol.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-5xl font-bold mb-4 text-white",children:Hn.name}),Q.jsx(ol.h2,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"text-2xl text-gray-300 mb-8",children:Hn.title}),Q.jsx(ol.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.4},children:Q.jsx("a",{href:"#about",className:"bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors",children:"Learn More"})})]}),Q.jsx(ol.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},className:"absolute bottom-10 left-1/2 transform -translate-x-1/2",children:Q.jsx(eR,{className:"animate-bounce text-white",size:32})})]})}function mI(){return Q.jsx("section",{id:"about",className:"py-20 bg-gray-800",children:Q.jsxs("div",{className:"container mx-auto px-6",children:[Q.jsx("h2",{className:"text-3xl font-bold mb-8",children:"About Me"}),Q.jsx("p",{className:"text-lg text-gray-300 mb-6",children:Hn.summary}),Q.jsxs("ul",{className:"list-none text-gray-400",children:[Q.jsxs("li",{children:[Q.jsx("strong",{children:"Name:"})," ",Hn.name]}),Q.jsxs("li",{children:[Q.jsx("strong",{children:"Title:"})," ",Hn.title]}),Q.jsxs("li",{children:[Q.jsx("strong",{children:"Location:"})," ",Hn.location]}),Q.jsxs("li",{children:[Q.jsx("strong",{children:"Email:"})," ",Q.jsx("a",{href:`mailto:${Hn.email}`,className:"text-blue-500 hover:text-blue-400",children:Hn.email})]}),Q.jsxs("li",{children:[Q.jsx("strong",{children:"LinkedIn:"})," ",Q.jsx("a",{href:Hn.linkedin,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:text-blue-400",children:"LinkedIn"})]}),Q.jsxs("li",{children:[Q.jsx("strong",{children:"GitHub:"})," ",Q.jsx("a",{href:Hn.github,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:text-blue-400",children:"GitHub"})]})]})]})})}function gI(){return Q.jsx("section",{id:"experience",className:"py-20",children:Q.jsxs("div",{className:"container mx-auto px-6",children:[Q.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Relevant  Experience"}),QS.map((t,e)=>Q.jsxs("div",{className:"bg-gray-800 rounded-lg p-6 mb-6",children:[Q.jsx("h3",{className:"text-xl font-semibold mb-2",children:t.title}),Q.jsxs("p",{className:"text-gray-400 mb-4",children:[t.company," | ",t.dates," | ",t.location]}),Q.jsx("ul",{className:"list-disc list-inside text-gray-300 space-y-2",children:t.responsibilities.map((n,i)=>Q.jsx("li",{children:n},i))})]},e))]})})}function vI(){return Q.jsx("section",{id:"skills",className:"py-20 bg-gray-800",children:Q.jsxs("div",{className:"container mx-auto px-6",children:[Q.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Skills"}),Q.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:KS.map((t,e)=>Q.jsxs("div",{className:"bg-gray-700 rounded-lg p-6",children:[Q.jsx("h3",{className:"text-xl font-semibold mb-4",children:t.name}),Q.jsx("ul",{className:"space-y-2",children:t.skills.map((n,i)=>Q.jsxs("li",{className:"flex items-center",children:[Q.jsx("span",{className:"w-2 h-2 bg-blue-400 rounded-full mr-2"}),Q.jsx("span",{children:n})]},i))})]},e))})]})})}function _I(){const[t,e]=Te.useState({}),n=async i=>{if(!i)return null;try{const s=new URL(i).searchParams.get("v");if(!s)return null;const o=`https://img.youtube.com/vi/${s}/maxresdefault.jpg`,a=`https://img.youtube.com/vi/${s}/hqdefault.jpg`;return await(c=>new Promise(d=>{const f=new Image;f.onload=()=>d(!0),f.onerror=()=>d(!1),f.src=c}))(o)?o:a}catch(r){return console.error("Error getting YouTube thumbnail:",r),null}};return Te.useEffect(()=>{(async()=>{const r={};for(let s=0;s<Go.length;s++){const o=Go[s];if(o.liveDemo){const a=await n(o.liveDemo);r[s]=a}}e(r)})()},[Go]),Q.jsx("section",{id:"projects",className:"py-20",children:Q.jsxs("div",{className:"container mx-auto px-6",children:[Q.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Personal Projects"}),Q.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:Go.map((i,r)=>Q.jsxs("div",{className:"bg-gray-800 rounded-lg p-6",children:[Q.jsx("h3",{className:"text-xl font-semibold mb-2",children:i.title}),Q.jsx("p",{className:"text-gray-400 mb-4",children:i.date}),Q.jsx("p",{className:"text-gray-300 mb-4",children:i.description}),i.liveDemo&&Q.jsx("a",{href:i.liveDemo,target:"_blank",rel:"noopener noreferrer",className:"block mb-4",children:t[r]?Q.jsx("img",{src:t[r],alt:`${i.title} - YouTube Demo`,className:"rounded-md w-full",style:{maxWidth:"100%",height:"auto"}}):Q.jsx("div",{className:"w-full h-36 bg-gray-700 rounded-md flex items-center justify-center text-gray-500",children:"Loading Thumbnail..."})}),i.image&&!i.liveDemo&&Q.jsx("img",{src:i.image,alt:i.title,className:"mb-4 rounded-md",style:{maxWidth:"100%",height:"auto"}}),i.github&&Q.jsx("a",{href:i.github,target:"_blank",rel:"noopener noreferrer",className:"text-green-400 hover:text-green-300 transition-colors block",children:"View on GitHub"})]},r))})]})})}function yI(){return Q.jsx("section",{id:"education",className:"py-20 bg-gray-800",children:Q.jsxs("div",{className:"container mx-auto px-6",children:[Q.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Education"}),Q.jsx("div",{className:"space-y-6",children:ZS.map((t,e)=>Q.jsxs("div",{className:"bg-gray-700 rounded-lg p-6",children:[Q.jsx("h3",{className:"text-xl font-semibold mb-2",children:t.degree}),Q.jsxs("p",{className:"text-gray-300",children:[t.institution,", ",t.location]}),Q.jsx("p",{className:"text-gray-400",children:t.dates}),t.details&&Q.jsx("p",{className:"text-gray-300 mt-2",children:t.details}),Q.jsx("p",{className:"text-blue-400 mt-2",children:t.grade})]},e))})]})})}function xI(){return Q.jsx("section",{id:"contact",className:"py-20",children:Q.jsxs("div",{className:"container mx-auto px-6",children:[Q.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Contact"}),Q.jsxs("div",{className:"flex flex-col items-center space-y-4",children:[Q.jsxs("a",{href:`mailto:${br.email}`,className:"flex items-center text-lg hover:text-blue-400 transition-colors",children:[Q.jsx(iR,{className:"mr-2"})," ",br.email]}),Q.jsxs("a",{href:`tel:${br.phone}`,className:"flex items-center text-lg hover:text-blue-400 transition-colors",children:[Q.jsx(rR,{className:"mr-2"})," ",br.phone]}),Q.jsxs("a",{href:br.linkedin,target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-lg hover:text-blue-400 transition-colors",children:[Q.jsx(nR,{className:"mr-2"})," LinkedIn"]}),Q.jsxs("a",{href:br.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-lg hover:text-blue-400 transition-colors",children:[Q.jsx(tR,{className:"mr-2"})," GitHub"]}),Q.jsxs("p",{className:"text-gray-300 mt-4",children:["Located in ",br.location]})]})]})})}function SI(){const[t,e]=Te.useState("home");return Te.useEffect(()=>{const n=()=>{const r=["home","about","experience","skills","projects","education","contact"].find(s=>{const o=document.getElementById(s);if(o){const a=o.getBoundingClientRect();return a.top<=100&&a.bottom>=100}return!1});r&&e(r)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),Q.jsxs("div",{className:"bg-gray-900 text-white min-h-screen",children:[Q.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm",children:Q.jsx("nav",{className:"container mx-auto px-6 py-4",children:Q.jsx("ul",{className:"flex justify-center space-x-6 overflow-x-auto md:overflow-visible",children:["Home","About","Experience","Skills","Projects","Education","Contact"].map(n=>Q.jsx("li",{children:Q.jsx("a",{href:`#${n.toLowerCase()}`,className:`text-sm font-medium hover:text-blue-400 transition-colors whitespace-nowrap ${t===n.toLowerCase()?"text-blue-400":""}`,children:n})},n))})})}),Q.jsxs("main",{className:"pt-16",children:[Q.jsx(pI,{}),Q.jsx(mI,{aboutData:Hn}),Q.jsx(gI,{experienceData:QS}),Q.jsx(vI,{skillsData:KS}),Q.jsx(_I,{projectsData:Go}),Q.jsx(yI,{educationData:ZS}),Q.jsx(xI,{})]})]})}function MI(){return Q.jsx(SI,{})}Gy(document.getElementById("root")).render(Q.jsx(Te.StrictMode,{children:Q.jsx(MI,{})}));
