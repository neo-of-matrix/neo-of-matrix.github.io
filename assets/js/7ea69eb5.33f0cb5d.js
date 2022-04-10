"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4849],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},i=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return n?o.createElement(d,u(u({ref:t},i),{},{components:n})):o.createElement(d,u({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var p=2;p<a;p++)u[p]=n[p];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},758:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),u=["components"],c={},l="useContext",p={unversionedId:"You-Dont-Know-React/React Hook/useContext 80f62",id:"You-Dont-Know-React/React Hook/useContext 80f62",title:"useContext",description:"\u83b7\u53d6ThemeContext.Provider value\u503c",source:"@site/docs/You-Dont-Know-React/React Hook/useContext 80f62.md",sourceDirName:"You-Dont-Know-React/React Hook",slug:"/You-Dont-Know-React/React Hook/useContext 80f62",permalink:"/docs/You-Dont-Know-React/React Hook/useContext 80f62",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useCallback",permalink:"/docs/You-Dont-Know-React/React Hook/useCallbac b2271"},next:{title:"useDebugValue",permalink:"/docs/You-Dont-Know-React/React Hook/useDebugVa 6913c"}},i={},s=[],m={toc:s};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usecontext"},"useContext"),(0,a.kt)("p",null,"\u83b7\u53d6ThemeContext.Provider value\u503c"),(0,a.kt)("p",null,"\u5f53\u524d\u7684 context \u503c\u7531\u4e0a\u5c42\u7ec4\u4ef6\u4e2d\u8ddd\u79bb\u5f53\u524d\u7ec4\u4ef6\u6700\u8fd1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"<MyContext.Provider>")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop \u51b3\u5b9a"),(0,a.kt)("p",null,"\u7ec4\u4ef6\u4e0a\u5c42\u6700\u8fd1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"<MyContext.Provider>")," value \u66f4\u65b0\u65f6\uff0c\u8be5 Hook \u4f1a\u89e6\u53d1\u91cd\u6e32\u67d3"),(0,a.kt)("p",null,"\u5373\u4f7f\u7956\u5148\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"[React.memo](https://zh-hans.reactjs.org/docs/react-api.html#reactmemo)")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"[shouldComponentUpdate](https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate)"),"\uff0c\u4e5f\u4f1a\u91cd\u65b0\u6e32\u67d3"),(0,a.kt)("p",null,"\u91cd\u6e32\u67d3\u7ec4\u4ef6\u7684\u5f00\u9500\u8f83\u5927\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/issues/15156#issuecomment-474590693"},"\u901a\u8fc7\u4f7f\u7528 memoization \u6765\u4f18\u5316")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u62c6\u5206context\uff0c\u4ece\u539f\u6709context\u5185\u90e8\u62c6\u5206\u4e3a\u53e6\u4e00context",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function Button() {\n  let theme = useContext(ThemeContext);\n  // The rest of your rendering logic\n  return <ExpensiveTree className={theme} />;\n}\n"))),(0,a.kt)("li",{parentName:"ul"},"\u62c6\u5206\u7ec4\u4ef6\uff0c\u63a5\u6536context\u7ec4\u4ef6\u62c6\u5206\u4e3a\u4e24\u4e2a\u7ec4\u4ef6\uff0c\u7236\u7ec4\u4ef6\u63a5\u6536context\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\uff0c\u5b50\u7ec4\u4ef6\u4f7f\u7528memo",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function Button() {\n  let appContextValue = useContext(AppContext);\n  let theme = appContextValue.theme; // Your "selector"\n  return <ThemedButton theme={theme} />\n}\n\nconst ThemedButton = memo(({ theme }) => {\n  // The rest of your rendering logic\n  return <ExpensiveTree className={theme} />;\n});\n'))),(0,a.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5185\u90e8 return \u4e00\u4e2a useMemo\u51fd\u6570\uff0c\u6307\u5b9a\u4f9d\u8d56\u5217\u8868",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function Button() {\n  let appContextValue = useContext(AppContext);\n  let theme = appContextValue.theme; // Your "selector"\n\n  return useMemo(() => {\n    // The rest of your rendering logic\n    return <ExpensiveTree className={theme} />;\n  }, [theme])\n}\n')))))}f.isMDXComponent=!0}}]);