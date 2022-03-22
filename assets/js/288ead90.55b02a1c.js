"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9097],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=o,d=s["".concat(p,".").concat(f)]||s[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8773:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},p="Profiler\u7ec4\u4ef6",c={unversionedId:"You-Dont-Know-React/Profiler\u7ec4\u4ef6",id:"You-Dont-Know-React/Profiler\u7ec4\u4ef6",title:"Profiler\u7ec4\u4ef6",description:"- \u6d4b\u91cf\u6e32\u67d3\u65f6\u95f4\uff0c\u627e\u51fa\u6e32\u67d3\u8f83\u6162\u7684\u90e8\u5206\uff0c\u4f7f\u7528\u7c7b\u4f3c memoization \u4f18\u5316",source:"@site/docs\\You-Dont-Know-React\\Profiler\u7ec4\u4ef6.md",sourceDirName:"You-Dont-Know-React",slug:"/You-Dont-Know-React/Profiler\u7ec4\u4ef6",permalink:"/docs/You-Dont-Know-React/Profiler\u7ec4\u4ef6",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Portals",permalink:"/docs/You-Dont-Know-React/Portals"},next:{title:"Props",permalink:"/docs/You-Dont-Know-React/Props"}},m={},u=[],s={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"profiler\u7ec4\u4ef6"},"Profiler\u7ec4\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d4b\u91cf\u6e32\u67d3\u65f6\u95f4\uff0c\u627e\u51fa\u6e32\u67d3\u8f83\u6162\u7684\u90e8\u5206\uff0c\u4f7f\u7528",(0,a.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-memoize-calculations"},"\u7c7b\u4f3c memoization \u4f18\u5316"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'render(\n  <App>\n    <Profiler id="Panel" onRender={callback}>\n      <Panel {...props}>\n        <Profiler id="Content" onRender={callback}>\n          <Content {...props} />\n        </Profiler>\n        <Profiler id="PreviewPane" onRender={callback}>\n          <PreviewPane {...props} />\n        </Profiler>\n      </Panel>\n    </Profiler>\n  </App>\n);\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u56de\u8c03\u53c2\u6570",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"id: string"))," - \u53d1\u751f\u63d0\u4ea4\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Profiler")," \u6811\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"id")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},'phase: "mount" | "update"'))," - \u5224\u65ad\u662f\u7ec4\u4ef6\u6811\u7684\u7b2c\u4e00\u6b21\u88c5\u8f7d\u5f15\u8d77\u7684\u91cd\u6e32\u67d3\uff0c\u8fd8\u662f\u7531 props\u3001state \u6216\u662f hooks \u6539\u53d8\u5f15\u8d77\u7684\u91cd\u6e32\u67d3"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"actualDuration: number"))," - \u672c\u6b21\u66f4\u65b0\u5728\u6e32\u67d3 ",(0,a.kt)("inlineCode",{parentName:"li"},"Profiler")," \u548c\u5b83\u7684\u5b50\u4ee3\u4e0a\u82b1\u8d39\u7684\u65f6\u95f4\u3002\n\u8fd9\u4e2a\u6570\u503c\u8868\u660e\u4f7f\u7528 memoization \u4e4b\u540e\u80fd\u8868\u73b0\u5f97\u591a\u597d\u3002\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"[React.memo](https://zh-hans.reactjs.org/docs/react-api.html#reactmemo)"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"[useMemo](https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo)"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"[shouldComponentUpdate](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-do-i-implement-shouldcomponentupdate)"),"\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"baseDuration: number"))," - \u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Profiler")," \u6811\u4e2d\u6700\u8fd1\u4e00\u6b21\u6bcf\u4e00\u4e2a\u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"li"},"render")," \u7684\u6301\u7eed\u65f6\u95f4\u3002\n\u8fd9\u4e2a\u503c\u4f30\u8ba1\u4e86\u6700\u5dee\u7684\u6e32\u67d3\u65f6\u95f4\u3002\uff08\u4f8b\u5982\u5f53\u5b83\u662f\u7b2c\u4e00\u6b21\u52a0\u8f7d\u6216\u8005\u7ec4\u4ef6\u6811\u6ca1\u6709\u4f7f\u7528 memoization\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"startTime: number"))," - \u672c\u6b21\u66f4\u65b0\u4e2d React \u5f00\u59cb\u6e32\u67d3\u7684\u65f6\u95f4\u6233"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"commitTime: number"))," - \u672c\u6b21\u66f4\u65b0\u4e2d React commit \u9636\u6bb5\u7ed3\u675f\u7684\u65f6\u95f4\u6233\u3002\u5728\u4e00\u6b21 commit \u4e2d\u8fd9\u4e2a\u503c\u5728\u6240\u6709\u7684 profiler \u4e4b\u95f4\u662f\u5171\u4eab\u7684\uff0c\u53ef\u4ee5\u5c06\u5b83\u4eec\u6309\u9700\u5206\u7ec4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"interactions: Set"))," - \u5f53\u66f4\u65b0\u88ab\u5236\u5b9a\u65f6\uff0c",(0,a.kt)("a",{parentName:"li",href:"https://fb.me/react-interaction-tracing"},"\u201cinteractions\u201d")," \u7684\u96c6\u5408\u4f1a\u88ab\u8ffd\u8e2a\u3002\uff08\u4f8b\u5982\u5f53 ",(0,a.kt)("inlineCode",{parentName:"li"},"render")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"li"},"setState")," \u88ab\u8c03\u7528\u65f6\uff09")))))}f.isMDXComponent=!0}}]);