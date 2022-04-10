"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1005],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2816:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),c=["components"],i={},p="Suspense",l={unversionedId:"You-Dont-Know-React/API/React/Suspense f8e1e",id:"You-Dont-Know-React/API/React/Suspense f8e1e",title:"Suspense",description:"- React.lazy",source:"@site/docs/You-Dont-Know-React/API/React/Suspense f8e1e.md",sourceDirName:"You-Dont-Know-React/API/React",slug:"/You-Dont-Know-React/API/React/Suspense f8e1e",permalink:"/docs/You-Dont-Know-React/API/React/Suspense f8e1e",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Refs",permalink:"/docs/You-Dont-Know-React/API/React/Refs a8830"},next:{title:"\u521b\u5efa React \u5143\u7d20",permalink:"/docs/You-Dont-Know-React/API/React/\u521b\u5efa React \u5143 6a677"}},u={},s=[],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"suspense"},"Suspense"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[React.lazy](https://zh-hans.reactjs.org/docs/react-api.html#reactlazy)"),"  \u521d\u6b21\u6e32\u67d3\u65f6\u672a\u7528\u5230\u7684\u7ec4\u4ef6\u5ef6\u8fdf\u52a0\u8f7d","  ",(0,o.kt)("inlineCode",{parentName:"li"},"lazy()")," \u5219\u53ef\u88ab\u653e\u7f6e\u4e8e\u4efb\u4f55\u4f60\u60f3\u8981\u505a\u4ee3\u7801\u5206\u5272\u7684\u5730\u65b9",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u8fd9\u4e2a\u7ec4\u4ef6\u662f\u52a8\u6001\u52a0\u8f7d\u7684\nconst SomeComponent = React.lazy(() => import('./SomeComponent'));\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[React.Suspense](https://zh-hans.reactjs.org/docs/react-api.html#reactsuspense)"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u8be5\u7ec4\u4ef6\u662f\u52a8\u6001\u52a0\u8f7d\u7684\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n  return (\n    // \u663e\u793a <Spinner> \u7ec4\u4ef6\u76f4\u81f3 OtherComponent \u52a0\u8f7d\u5b8c\u6210\n    <React.Suspense fallback={<Spinner />}>\n      <div>\n        <OtherComponent />\n      </div>\n    </React.Suspense>\n  );\n}\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0loading\u6548\u679c"),(0,o.kt)("li",{parentName:"ul"},"\u5b50\u5143\u7d20\u5fc5\u987b\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"React.lazy")," \u5305\u88f9\u7684\u7ec4\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u5c06 ",(0,o.kt)("inlineCode",{parentName:"li"},"<Suspense>")," \u7f6e\u4e8e\u4f60\u60f3\u5c55\u793a\u52a0\u8f7d\u6307\u793a\u5668\uff08loading indicator\uff09\u7684\u4f4d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u6e32\u67d3\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"React.Suspense")),(0,o.kt)("li",{parentName:"ul"},"hydrate \u8fc7\u7a0b\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"React.Suspense"))))))}f.isMDXComponent=!0}}]);