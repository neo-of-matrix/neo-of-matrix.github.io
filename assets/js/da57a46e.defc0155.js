"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8355],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2012:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},l="JSX",u={unversionedId:"You-Dont-Know-React/JSX",id:"You-Dont-Know-React/JSX",title:"JSX",description:"- JSX \u9632\u6b62\u6ce8\u5165\u653b\u51fb",source:"@site/docs/You-Dont-Know-React/JSX.md",sourceDirName:"You-Dont-Know-React",slug:"/You-Dont-Know-React/JSX",permalink:"/docs/You-Dont-Know-React/JSX",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fragments",permalink:"/docs/You-Dont-Know-React/Fragments"},next:{title:"JavaScript \u73af\u5883\u8981\u6c42",permalink:"/docs/You-Dont-Know-React/JavaScript"}},p={},s=[],m={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jsx"},"JSX"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JSX \u9632\u6b62\u6ce8\u5165\u653b\u51fb","  React DOM \u5728\u6e32\u67d3\u6240\u6709\u8f93\u5165\u5185\u5bb9\u4e4b\u524d\uff0c\u9ed8\u8ba4\u4f1a\u8fdb\u884c",(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html"},"\u8f6c\u4e49")),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u5f15\u5165react")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u70b9\u8bed\u6cd5\u6765\u5f15\u7528\u4e00\u4e2a React \u7ec4\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u5b9a\u4e49\u7684\u7ec4\u4ef6\u5fc5\u987b\u4ee5\u5927\u5199\u5b57\u6bcd\u5f00\u5934"),(0,a.kt)("li",{parentName:"ul"},"Props \u9ed8\u8ba4\u503c\u4e3a \u201cTrue\u201d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<MyTextBox autocomplete />\n\n<MyTextBox autocomplete={true} />\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u5c55\u5f00")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function App1() {\n  return <Greeting firstName=\"Ben\" lastName=\"Hector\" />;\n}\n\nfunction App2() {\n  const props = {firstName: 'Ben', lastName: 'Hector'};\n  return <Greeting {...props} />;}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u4f5c\u4e3a\u5b50\u5143\u7d20","  \u56de\u8c03\u51fd\u6570\u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"props.children")," \u8fdb\u884c\u4f20\u9012",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u8c03\u7528\u5b50\u5143\u7d20\u56de\u8c03 numTimes \u6b21\uff0c\u6765\u91cd\u590d\u751f\u6210\u7ec4\u4ef6\nfunction Repeat(props) {\n  let items = [];\n  for (let i = 0; i < props.numTimes; i++) {\n    items.push(props.children(i));\n  }\n  return <div>{items}</div>;\n}\n\nfunction ListOfTenThings() {\n  return (\n    <Repeat numTimes={10}>\n      {(index) => <div key={index}>This is item {index} in the list</div>}\n    </Repeat>\n  );\n}\n"))),(0,a.kt)("li",{parentName:"ul"},"\u5e03\u5c14\u7c7b\u578b\u3001Null \u4ee5\u53ca Undefined \u5c06\u4f1a\u5ffd\u7565"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"React.createElement(component, props, ...children)"),"\u8bed\u6cd5\u7cd6")))}f.isMDXComponent=!0}}]);