"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8269],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1932:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),c=["components"],u={},i="useReducer",s={unversionedId:"You-Dont-Know-React/React Hook/useReducer a466c",id:"You-Dont-Know-React/React Hook/useReducer a466c",title:"useReducer",description:"- \u4f7f\u7528\u573a\u666f",source:"@site/docs/You-Dont-Know-React/React Hook/useReducer a466c.md",sourceDirName:"You-Dont-Know-React/React Hook",slug:"/You-Dont-Know-React/React Hook/useReducer a466c",permalink:"/docs/You-Dont-Know-React/React Hook/useReducer a466c",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useMemo",permalink:"/docs/You-Dont-Know-React/React Hook/useMemo 4b8bd"},next:{title:"useRef",permalink:"/docs/You-Dont-Know-React/React Hook/useRef 68553"}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usereducer"},"useReducer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const [state, dispatch] = useReducer(reducer, initialArg, init);\n// reducer:(state, action) => newState ========> action:{type:string, payload:string}\n// initialArg: \u521d\u59cbstate\n// init: state \u5c06\u88ab\u8bbe\u7f6e\u4e3a init(initialArg)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"state \u903b\u8f91\u8f83\u590d\u6742\u4e14\u5305\u542b\u591a\u4e2a\u5b50\u503c"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4e0b\u4e00\u4e2a state \u4f9d\u8d56\u4e8e\u4e4b\u524d\u7684 state")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const initialState = { count: 0 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case "increment":\n      return { count: state.count + 1 };\n    case "decrement":\n      return { count: state.count - 1 };\n    default:\n      throw new Error();\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  return (\n    <>\n      Count: {state.count}\n      <button onClick={() => dispatch({ type: "decrement" })}>-</button>\n      <button onClick={() => dispatch({ type: "increment" })}>+</button>\n    </>\n  );\n}\n'))))),(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u521d\u59cb\u5316\u503c",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const [state, dispatch] = useReducer(reducer, {count: initialCount});\n"))),(0,a.kt)("li",{parentName:"ul"},"\u60f0\u6027\u521d\u59cb\u5316","  \u8ba1\u7b97 state \u7684\u903b\u8f91\u63d0\u53d6\u5230 reducer \u5916\u90e8\uff0c\u8fd9\u4e5f\u4e3a\u5c06\u6765\u5bf9\u91cd\u7f6e state \u7684 action \u505a\u5904\u7406",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function init(initialCount) {\n  return { count: initialCount };\n}\nfunction reducer(state, action) {\n  switch (action.type) {\n    case "increment":\n      return { count: state.count + 1 };\n    case "decrement":\n      return { count: state.count - 1 };\n    case "reset":\n      return init(action.payload);\n    default:\n      throw new Error();\n  }\n}\n\nfunction Counter({ initialCount }) {\n  const [state, dispatch] = useReducer(reducer, initialCount, init);\n  return (\n    <>\n      Count: {state.count}\n      <button\n        onClick={() => dispatch({ type: "reset", payload: initialCount })}\n      >\n        Reset\n      </button>\n      <button onClick={() => dispatch({ type: "decrement" })}>-</button>\n      <button onClick={() => dispatch({ type: "increment" })}>+</button>\n    </>\n  );\n}\n'))),(0,a.kt)("li",{parentName:"ul"},"\u8df3\u8fc7 dispatch","  \u5982\u679c Reducer Hook \u7684\u8fd4\u56de\u503c\u4e0e\u5f53\u524d state \u76f8\u540c\uff0cReact \u5c06\u8df3\u8fc7\u5b50\u7ec4\u4ef6\u7684\u6e32\u67d3\u53caeffect \u7684\u6267\u884c\u3002")))}m.isMDXComponent=!0}}]);