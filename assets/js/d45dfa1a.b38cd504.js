"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2199],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=i(n),m=r,k=f["".concat(s,".").concat(m)]||f[m]||p[m]||c;return n?o.createElement(k,a(a({ref:t},l),{},{components:n})):o.createElement(k,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var i=2;i<c;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4004:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return p}});var o=n(3117),r=n(102),c=(n(7294),n(3905)),a=["components"],u={},s="React Hooks",i={unversionedId:"You-Dont-Know-React/React Hook/React Hook 3c6eb",id:"You-Dont-Know-React/React Hook/React Hook 3c6eb",title:"React Hooks",description:"\u5ef6\u8fdf\u8c03\u7528\u573a\u666f\u95ed\u5305\u95ee\u9898",source:"@site/docs/You-Dont-Know-React/React Hook/React Hook 3c6eb.md",sourceDirName:"You-Dont-Know-React/React Hook",slug:"/You-Dont-Know-React/React Hook/React Hook 3c6eb",permalink:"/docs/You-Dont-Know-React/React Hook/React Hook 3c6eb",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useSyncExternalStore",permalink:"/docs/You-Dont-Know-React/React Hook/Library Hook/useSyncExt 08a87"},next:{title:"State Hook",permalink:"/docs/You-Dont-Know-React/React Hook/State Hook 05d45"}},l={},p=[{value:"\u5ef6\u8fdf\u8c03\u7528\u573a\u666f\u95ed\u5305\u95ee\u9898",id:"\u5ef6\u8fdf\u8c03\u7528\u573a\u666f\u95ed\u5305\u95ee\u9898",level:3}],f={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"react-hooks"},"React Hooks"),(0,c.kt)("h3",{id:"\u5ef6\u8fdf\u8c03\u7528\u573a\u666f\u95ed\u5305\u95ee\u9898"},"\u5ef6\u8fdf\u8c03\u7528\u573a\u666f\u95ed\u5305\u95ee\u9898"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,c.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#functional-updates"},"setState \u7684\u51fd\u6570\u5f0f\u66f4\u65b0\u5f62\u5f0f"),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"function Counter() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    const id = setInterval(() => {\n      setCount((c) => c + 1); // \u2705 \u5728\u8fd9\u4e0d\u4f9d\u8d56\u4e8e\u5916\u90e8\u7684 `count` \u53d8\u91cf\n    }, 1000);\n    return () => clearInterval(id);\n  }, []); // \u2705 \u6211\u4eec\u7684 effect \u4e0d\u4f7f\u7528\u7ec4\u4ef6\u4f5c\u7528\u57df\u4e2d\u7684\u4efb\u4f55\u53d8\u91cf\n  return <h1>{count}</h1>;\n}\n"))),(0,c.kt)("li",{parentName:"ul"},"\u5ef6\u8fdf\u8c03\u7528\u573a\u666f",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"\u4f7f\u7528 setTimeout\u3001setInterval\u3001Promise.then \u7b49")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"useEffect \u7684\u5378\u8f7d\u51fd\u6570"),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"const getUsername = () => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('John');\n    }, 3000);\n  })\n}\n\nfunction Demo() {\n  const [count, setCount] = useState(0);\n  // setTimeout \u4f1a\u9020\u6210\u95ed\u5305\u95ee\u9898\n  useEffect(() => {\n    const timer = setTimeout(() => {\n      console.log(count);\n    }, 3000);\n    return () => {\n      clearTimeout(timer);\n    }\n  }, [])\n\n  // setInterval \u4f1a\u9020\u6210\u95ed\u5305\u95ee\u9898\n  useEffect(() => {\n    const timer = setInterval(() => {\n      console.log(count);\n    }, 3000);\n    return () => {\n      clearInterval(timer);\n    }\n  }, [])\n\n  // Promise.then \u4f1a\u9020\u6210\u95ed\u5305\u95ee\u9898\n  useEffect(() => {\n    getUsername().then(() => {\n      console.log(count);\n    });\n  }, [])\n\n  // useEffect \u5378\u8f7d\u51fd\u6570\u4f1a\u9020\u6210\u95ed\u5305\u95ee\u9898\n  useEffect(() => {\n    return () => {\n      console.log(count);\n    }\n  }, []);\n  return (\n    <button\n      onClick={() => setCount(c => c + 1)}\n    >\n      click\n    </button>\n  )\n}\n")),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"    const [count, setCount] = useState(0);\n// \u901a\u8fc7 ref \u6765\u8bb0\u5fc6\u6700\u65b0\u7684 count\nconst countRef = useRef(count);\ncountRef.current = count;\n    \nuseEffect(() => {\n  const timer = setTimeout(() => {\n    console.log(countRef.current)\n  }, 3000);\n  return () => {\n    clearTimeout(timer);\n  }\n}, [])\n")))))))}m.isMDXComponent=!0}}]);