"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4352],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(n),y=o,f=d["".concat(l,".").concat(y)]||d[y]||p[y]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5301:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),c=["components"],s={},l="useSyncExternalStore",i={unversionedId:"You-Dont-Know-React/React Hook/Library Hook/useSyncExt 08a87",id:"You-Dont-Know-React/React Hook/Library Hook/useSyncExt 08a87",title:"useSyncExternalStore",description:"\u4e00\u79cd\u8bfb\u53d6\u548c\u8ba2\u9605\u5176\u4ed6\u6570\u636e\u6e90\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u548c selective hydration and time slicing \u914d\u5408\u4f7f\u7528",source:"@site/docs/You-Dont-Know-React/React Hook/Library Hook/useSyncExt 08a87.md",sourceDirName:"You-Dont-Know-React/React Hook/Library Hook",slug:"/You-Dont-Know-React/React Hook/Library Hook/useSyncExt 08a87",permalink:"/docs/You-Dont-Know-React/React Hook/Library Hook/useSyncExt 08a87",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useInsertionEffect",permalink:"/docs/You-Dont-Know-React/React Hook/Library Hook/useInserti 2b8ae"},next:{title:"React Hooks",permalink:"/docs/You-Dont-Know-React/React Hook/React Hook 3c6eb"}},u={},p=[{value:"\u8ba2\u9605\u6574\u4e2astore",id:"\u8ba2\u9605\u6574\u4e2astore",level:3},{value:"\u8ba2\u9605\u67d0\u4e2a\u57df\u503c",id:"\u8ba2\u9605\u67d0\u4e2a\u57df\u503c",level:3},{value:"\u670d\u52a1\u7aef\u5fc5\u987b\u5e8f\u5217\u5316store",id:"\u670d\u52a1\u7aef\u5fc5\u987b\u5e8f\u5217\u5316store",level:3},{value:"\u517c\u5bb9",id:"\u517c\u5bb9",level:3}],d={toc:p};function y(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usesyncexternalstore"},"useSyncExternalStore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const state = useSyncExternalStore(subscribe, getSnapshot[, getServerSnapshot]);\n")),(0,a.kt)("p",null,"\u4e00\u79cd\u8bfb\u53d6\u548c\u8ba2\u9605\u5176\u4ed6\u6570\u636e\u6e90\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u548c selective hydration and time slicing \u914d\u5408\u4f7f\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"subscribe","  \u8ba2\u9605\u56de\u8c03\u51fd\u6570\uff0c store \u6539\u53d8\u65f6\u8c03\u7528\n"),(0,a.kt)("li",{parentName:"ul"},"getSnapshot","  \u83b7\u53d6\u5f53\u524dstore\u7684\u51fd\u6570","  \u5fc5\u987b\u8fd4\u56de\u4e00\u4e2acached value\uff0c\uff08store\u4e0d\u53d8\u6bcf\u6b21\u8c03\u7528\u8fd4\u56de\u76f8\u540c\u7684\u503c\uff09\n"),(0,a.kt)("li",{parentName:"ul"},"getServerSnapshot","  \u670d\u52a1\u7aef\u6e32\u67d3\u8fd4\u56desnapshot\n")),(0,a.kt)("h3",{id:"\u8ba2\u9605\u6574\u4e2astore"},"\u8ba2\u9605\u6574\u4e2astore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const state = useSyncExternalStore(store.subscribe, store.getSnapshot);\n")),(0,a.kt)("h3",{id:"\u8ba2\u9605\u67d0\u4e2a\u57df\u503c"},"\u8ba2\u9605\u67d0\u4e2a\u57df\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const selectedField = useSyncExternalStore(\n  store.subscribe,\n  () => store.getSnapshot().selectedField,\n);\n")),(0,a.kt)("h3",{id:"\u670d\u52a1\u7aef\u5fc5\u987b\u5e8f\u5217\u5316store"},"\u670d\u52a1\u7aef\u5fc5\u987b\u5e8f\u5217\u5316store"),(0,a.kt)("p",null,"React\u4f1a\u5728hydration\u65f6\u4f7f\u7528snapshot\u4ee5\u9632\u5185\u5bb9\u4e0d\u80fd\u5339\u914d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const selectedField = useSyncExternalStore(\n  store.subscribe,\n  () => store.getSnapshot().selectedField,\n  () => INITIAL_SERVER_SNAPSHOT.selectedField,\n);\n")),(0,a.kt)("h3",{id:"\u517c\u5bb9"},"\u517c\u5bb9"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"use-sync-external-store/shim")," ",(0,a.kt)("inlineCode",{parentName:"p"},"useSyncExternalStore")," \u548c user-space implementation"))}y.isMDXComponent=!0}}]);