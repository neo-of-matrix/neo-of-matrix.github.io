"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5662],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),b=o,d=f["".concat(i,".").concat(b)]||f[b]||p[b]||u;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<u;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6644:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(3117),o=n(102),u=(n(7294),n(3905)),a=["components"],c={},i="useDebugValue",l={unversionedId:"You-Dont-Know-React/React Hook/useDebugVa 6913c",id:"You-Dont-Know-React/React Hook/useDebugVa 6913c",title:"useDebugValue",description:"\u81ea\u5b9a\u4e49hook\u547d\u540d",source:"@site/docs/You-Dont-Know-React/React Hook/useDebugVa 6913c.md",sourceDirName:"You-Dont-Know-React/React Hook",slug:"/You-Dont-Know-React/React Hook/useDebugVa 6913c",permalink:"/docs/You-Dont-Know-React/React Hook/useDebugVa 6913c",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useContext",permalink:"/docs/You-Dont-Know-React/React Hook/useContext 80f62"},next:{title:"useDeferredValue",permalink:"/docs/You-Dont-Know-React/React Hook/useDeferre 08778"}},s={},p=[],f={toc:p};function b(e){var t=e.components,n=(0,o.Z)(e,a);return(0,u.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"usedebugvalue"},"useDebugValue"),(0,u.kt)("p",null,"\u81ea\u5b9a\u4e49hook\u547d\u540d"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},'function useFriendStatus(friendID) {\n  const [isOnline, setIsOnline] = useState(null);\n  // ...\n  // Show a label in DevTools next to this Hook\n  // e.g. "FriendStatus: Online"\n  useDebugValue(isOnline ? "Online" : "Offline");\n  return isOnline;\n}\n')),(0,u.kt)("p",null,"\u683c\u5f0f\u5316\u663e\u793ahook\u547d\u540d"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},"useDebugValue(date, date => date.toDateString()\n")))}b.isMDXComponent=!0}}]);