"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8837],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=i(n),k=r,f=m["".concat(s,".").concat(k)]||m[k]||p[k]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},389:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],u={},s="React Hooks",i={unversionedId:"You-Dont-Know-React/React Hook",id:"You-Dont-Know-React/React Hook",title:"React Hooks",description:"useState",source:"@site/docs/You-Dont-Know-React/React Hook.md",sourceDirName:"You-Dont-Know-React",slug:"/You-Dont-Know-React/React Hook",permalink:"/docs/You-Dont-Know-React/React Hook",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Props",permalink:"/docs/You-Dont-Know-React/Props"},next:{title:"React \u7ec4\u5408\u5f00\u53d1\u6a21\u5f0f",permalink:"/docs/You-Dont-Know-React/React \u7ec4\u5408\u5f00\u53d1"}},c={},p=[{value:"useState",id:"usestate",level:3},{value:"useEffect",id:"useeffect",level:3},{value:"useLayoutEffect",id:"uselayouteffect",level:3},{value:"<strong>useReducer</strong>",id:"usereducer",level:3},{value:"useMemo\uff08\u5efa\u8bae\u5927\u91cf\u4f7f\u7528\uff09",id:"usememo\u5efa\u8bae\u5927\u91cf\u4f7f\u7528",level:3},{value:"\u4e0d\u8981\u4f7f\u7528 eslint-plugin-react-hooks \u63d2\u4ef6\uff0c\u6216\u8005\u53ef\u4ee5\u9009\u62e9\u6027\u5ffd\u7565\u8be5\u63d2\u4ef6\u7684\u8b66\u544a",id:"\u4e0d\u8981\u4f7f\u7528-eslint-plugin-react-hooks-\u63d2\u4ef6\u6216\u8005\u53ef\u4ee5\u9009\u62e9\u6027\u5ffd\u7565\u8be5\u63d2\u4ef6\u7684\u8b66\u544a",level:3},{value:"\u5ef6\u8fdf\u8c03\u7528\u573a\u666f\u95ed\u5305\u95ee\u9898",id:"\u5ef6\u8fdf\u8c03\u7528\u573a\u666f\u95ed\u5305\u95ee\u9898",level:3},{value:"useCallback",id:"usecallback",level:3},{value:"<strong>useRef</strong>",id:"useref",level:3},{value:"<strong>Hook \u89c4\u5219</strong>",id:"hook-\u89c4\u5219",level:3}],m={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-hooks"},"React Hooks"),(0,o.kt)("h3",{id:"usestate"},"useState"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const [state, setState] = useState(initialState);\n<button onClick={() => setCount(initialCount)}>Reset</button>\n<button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u60f0\u6027\u521d\u59cb state","  ",(0,o.kt)("strong",{parentName:"li"},"initialState \u53c2\u6570\u53ea\u4f1a\u5728\u7ec4\u4ef6\u7684\u521d\u59cb\u6e32\u67d3\u4e2d\u8d77\u4f5c\u7528\uff0c\u540e\u7eed\u6e32\u67d3\u65f6\u4f1a\u88ab\u5ffd\u7565"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const [state, setState] = useState(() => {\n  const initialState = someExpensiveComputation(props);\n  return initialState;\n});\n"))),(0,o.kt)("li",{parentName:"ul"},"\u8df3\u8fc7 state \u66f4\u65b0","  \u5982\u679c State Hook \u7684\u8fd4\u56de\u503c\u4e0e\u5f53\u524d state \u76f8\u540c\uff0cReact \u5c06\u8df3\u8fc7\u5b50\u7ec4\u4ef6\u7684\u6e32\u67d3\u53ca effect \u7684\u6267\u884c\uff0c\u53ef\u4ee5\u83b7\u53d6\u6700\u65b0state\u7684\u503c\n"),(0,o.kt)("li",{parentName:"ul"},"useState \u7684\u6b63\u786e\u4f7f\u7528\u59ff\u52bf",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4e00\u4e2a state \u5fc5\u987b\u4e0d\u80fd\u901a\u8fc7\u5176\u5b83 state/props \u76f4\u63a5\u8ba1\u7b97\u51fa\u6765\uff0c\u5426\u5219\u5c31\u4e0d\u7528\u5b9a\u4e49 state\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5728\u9879\u76ee\u4e2d\u540c\u4e00\u4e2a\u6570\u636e\uff0c\u4fdd\u8bc1\u53ea\u5b58\u50a8\u5728\u4e00\u4e2a\u5730\u65b9\u3002"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u65e2\u5b58\u5728 redux \u4e2d\uff0c\u53c8\u5728\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a state \u5b58\u50a8\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u65e2\u5b58\u5728\u7236\u7ea7\u7ec4\u4ef6\u4e2d\uff0c\u53c8\u5728\u5f53\u524d\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a state \u5b58\u50a8\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u65e2\u5b58\u5728 url query \u4e2d\uff0c\u53c8\u5728\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a state \u5b58\u50a8\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"useState \u9002\u5f53\u5408\u5e76"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const [userInfo, setUserInfo] = useState({\n  firstName,\n  lastName,\n  school,\n  age,\n  address\n});\nsetUserInfo(s=> ({\n  ...s,\n  fristName,\n}))\n")))))),(0,o.kt)("h3",{id:"useeffect"},"useEffect"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.robinwieruch.de/react-hooks-fetch-data/"},"How to fetch data with React Hooks")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u70b9",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u9700\u8981\u5728\u6e32\u67d3\u540e\u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\uff0c\u6539\u53d8 DOM\u3001\u6dfb\u52a0\u8ba2\u9605\u3001\u8bbe\u7f6e\u5b9a\u65f6\u5668\u3001\u8bb0\u5f55\u65e5\u5fd7\u4ee5\u53ca\u6267\u884c\u5176\u4ed6\u5305\u542b\u526f\u4f5c\u7528\u7684\u64cd\u4f5c"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7b2c\u4e00\u6b21\u6e32\u67d3\u4e4b\u540e\u548c\u6bcf\u6b21\u66f4\u65b0\u4e4b\u540e\u90fd\u4f1a\u6267\u884c")),(0,o.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u6211\u4eec\u91cd\u65b0\u6e32\u67d3\uff0c\u90fd\u4f1a\u751f\u6210",(0,o.kt)("em",{parentName:"li"},"\u65b0\u7684")," effect\uff0c\u4efb\u4f55\u65b0\u7684\u6e32\u67d3\u524d\u6267\u884c"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6309\u7167 effect \u58f0\u660e\u7684\u987a\u5e8f\u4f9d\u6b21\u8c03\u7528\u7ec4\u4ef6\u4e2d\u7684",(0,o.kt)("em",{parentName:"strong"},"\u6bcf\u4e00\u4e2a")," effect")),(0,o.kt)("li",{parentName:"ul"},"\u8c03\u7528\u4e00\u4e2a\u65b0\u7684 effect \u4e4b\u524d\u5bf9\u524d\u4e00\u4e2a effect \u8fdb\u884c\u6e05\u7406"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6570\u7ec4\u4e2d\u6709\u591a\u4e2a\u5143\u7d20\uff0c\u5373\u4f7f\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\u53d1\u751f\u53d8\u5316\uff0cReact \u4e5f\u4f1a\u6267\u884c effect")),(0,o.kt)("li",{parentName:"ul"},"React \u4f1a\u5728\u7ec4\u4ef6\u5378\u8f7d\u7684\u65f6\u5019\u6267\u884c\u6e05\u9664\u64cd\u4f5c   \u6bcf\u6b21\u91cd\u65b0\u6e32\u67d3\u65f6\u90fd\u4f1a\u6267\u884c"))),(0,o.kt)("li",{parentName:"ul"},"\u5efa\u8bae",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hook \u6309\u7167\u4ee3\u7801\u7684\u7528\u9014\u5206\u79bb\u4ed6\u4eec")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u53d8\u91cf\u53d8\u5316\u65f6\uff0c\u9700\u8981\u89e6\u53d1 useEffect \u51fd\u6570\u6267\u884c\u624d\u9700\u8981\u628a\u53d8\u91cf\u653e\u5230 deps \u6570\u7ec4\u4e2d")))),(0,o.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u5217\u8868\u4f18\u5316",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5982\u679c\u67d0\u4e9b\u7279\u5b9a\u503c\u5728\u4e24\u6b21\u91cd\u6e32\u67d3\u4e4b\u95f4\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u4f60\u53ef\u4ee5\u901a\u77e5 React \u8df3\u8fc7\u5bf9 effect \u7684\u8c03\u7528\uff0c\u53ea\u8981\u4f20\u9012\u6570\u7ec4\u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"strong"},"useEffect"),"\u7684\u7b2c\u4e8c\u4e2a\u53ef\u9009\u53c2\u6570\u5373\u53ef\uff0c\u5bf9\u4e8e\u6709\u6e05\u9664\u64cd\u4f5c\u7684 effect \u540c\u6837\u9002\u7528")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5982\u679c\u60f3\u6267\u884c\u53ea\u8fd0\u884c\u4e00\u6b21\u7684 effect\uff08\u4ec5\u5728\u7ec4\u4ef6\u6302\u8f7d\u548c\u5378\u8f7d\u65f6\u6267\u884c\uff09\uff0c\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u7a7a\u6570\u7ec4\uff08[]\uff09\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u786e\u4fdd\u6570\u7ec4\u4e2d\u5305\u542b\u4e86\u6240\u6709\u5916\u90e8\u4f5c\u7528\u57df\u4e2d\u4f1a\u53d1\u751f\u53d8\u5316\u4e14\u5728 effect \u4e2d\u4f7f\u7528\u7684\u53d8\u91cf\uff08\u5305\u62ec props\u3001state\uff0c\u4ee5\u53ca\u4efb\u4f55\u7531\u5b83\u4eec\u884d\u751f\u800c\u6765\u7684\u4e1c\u897f\uff09\uff0c\u5426\u5219\u4f60\u7684\u4ee3\u7801\u4f1a\u5f15\u7528\u5230\u5148\u524d\u6e32\u67d3\u4e2d\u7684\u65e7\u53d8\u91cf")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5728\u4e00\u4e9b\u66f4\u52a0\u590d\u6742\u7684\u573a\u666f\u4e2d\uff08\u6bd4\u5982\u4e00\u4e2a state \u4f9d\u8d56\u4e8e\u53e6\u4e00\u4e2a state\uff09\uff0c\u5c1d\u8bd5\u7528 ",(0,o.kt)("a",{parentName:"strong",href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer"},"useReducer Hook")," \u628a state \u66f4\u65b0\u903b\u8f91\u79fb\u5230 effect \u4e4b\u5916")),(0,o.kt)("li",{parentName:"ul"},"\u4e07\u4e0d\u5f97\u5df2\u7684\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u4f60\u60f3\u8981\u7c7b\u4f3c class \u4e2d\u7684 this \u7684\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5 ",(0,o.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables"},"\u4f7f\u7528\u4e00\u4e2a ref")," \u6765\u4fdd\u5b58\u4e00\u4e2a\u53ef\u53d8\u7684\u53d8\u91cf",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example(props) {\n  // \u628a\u6700\u65b0\u7684 props \u4fdd\u5b58\u5728\u4e00\u4e2a ref \u4e2d\n  const latestProps = useRef(props);\n  useEffect(() => {\n    latestProps.current = props;\n  });\n  useEffect(() => {\n    function tick() {\n      // \u5728\u4efb\u4f55\u65f6\u5019\u8bfb\u53d6\u6700\u65b0\u7684 props\n      console.log(latestProps.current);\n    }\n    const id = setInterval(tick, 1000);\n    return () => clearInterval(id);\n  }, []); // \u8fd9\u4e2a effect \u4ece\u4e0d\u4f1a\u91cd\u65b0\u6267\u884c\n}\n"))))),(0,o.kt)("li",{parentName:"ul"},"effect\u5185\u90e8\u8c03\u7528\u51fd\u6570\u4f7f\u7528\u65b9\u6cd5",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5f53\u51fd\u6570\uff08\u4ee5\u53ca\u5b83\u6240\u8c03\u7528\u7684\u51fd\u6570\uff09  \u5305\u62ec props\u3001state\uff0c\u4ee5\u53ca\u4efb\u4f55\u7531\u5b83\u4eec\u884d\u751f\u800c\u6765\u7684\u4e1c\u897f  \u628a\u90a3\u4e2a\u51fd\u6570\u79fb\u52a8\u5230\u4f60\u7684 effect ",(0,o.kt)("em",{parentName:"strong"},"\u5185\u90e8")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function ProductPage({ productId }) {\n  const [product, setProduct] = useState(null);\n\n  useEffect(() => {\n    // \u628a\u8fd9\u4e2a\u51fd\u6570\u79fb\u52a8\u5230 effect \u5185\u90e8\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u6e05\u695a\u5730\u770b\u5230\u5b83\u7528\u5230\u7684\u503c\u3002\n    async function fetchProduct() {\n      const response = await fetch("http://myapi/product/" + productId);\n      const json = await response.json();\n      setProduct(json);\n    }\n    fetchProduct();\n  }, [productId]); // \u2705 \u6709\u6548\uff0c\u56e0\u4e3a\u6211\u4eec\u7684 effect \u53ea\u7528\u5230\u4e86 productId  // ...\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u628a\u90a3\u4e2a\u51fd\u6570\u79fb\u52a8\u5230\u4f60\u7684\u7ec4\u4ef6\u4e4b\u5916\uff0c\u4e0d\u7528\u51fa\u73b0\u5728\u4f9d\u8d56\u5217\u8868")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5982\u679c\u4f60\u6240\u8c03\u7528\u7684\u65b9\u6cd5\u662f\u4e00\u4e2a\u7eaf\u8ba1\u7b97\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u6e32\u67d3\u65f6\u8c03\u7528\uff0c\u4f60\u53ef\u4ee5 \u8f6c\u800c\u5728 effect \u4e4b\u5916\u8c03\u7528\u5b83\uff0c \u5e76\u8ba9 effect \u4f9d\u8d56\u4e8e\u5b83\u7684\u8fd4\u56de\u503c")),(0,o.kt)("li",{parentName:"ul"},"\u4e07\u4e0d\u5f97\u5df2\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5 \u628a\u51fd\u6570\u52a0\u5165 effect \u7684\u4f9d\u8d56\u4f46 \u628a\u5b83\u7684\u5b9a\u4e49\u5305\u88f9\u8fdb ",(0,o.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback"},"useCallback")," Hook\u3002\u8fd9\u5c31\u786e\u4fdd\u4e86\u5b83\u4e0d\u968f\u6e32\u67d3\u800c\u6539\u53d8\uff0c\u9664\u975e\u5b83\u81ea\u8eab\u7684\u4f9d\u8d56\u53d1\u751f\u4e86\u6539\u53d8\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function ProductPage({ productId }) {\n  // \u2705 \u7528 useCallback \u5305\u88f9\u4ee5\u907f\u514d\u968f\u6e32\u67d3\u53d1\u751f\u6539\u53d8\n  const fetchProduct = useCallback(() => {\n    // ... Does something with productId ...\n  }, [productId]); // \u2705 useCallback \u7684\u6240\u6709\u4f9d\u8d56\u90fd\u88ab\u6307\u5b9a\u4e86\n  return <ProductDetails fetchProduct={fetchProduct} />;\n}\n\nfunction ProductDetails({ fetchProduct }) {\n  useEffect(() => {\n    fetchProduct();\n  }, [fetchProduct]); // \u2705 useEffect \u7684\u6240\u6709\u4f9d\u8d56\u90fd\u88ab\u6307\u5b9a\u4e86\n  // ...\n}\n")))))),(0,o.kt)("h3",{id:"uselayouteffect"},"useLayoutEffect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u6240\u6709\u7684 DOM \u53d8\u66f4\u4e4b\u540e\u540c\u6b65\u8c03\u7528 effect\uff08componentDidMount\u89e6\u53d1\u65f6\u673a\u4e00\u6837\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u8bfb\u53d6 DOM \u5e03\u5c40\u5e76\u8fdb\u884c\u4fee\u6539\u89e6\u53d1\u6e32\u67d3"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u6d4f\u89c8\u5668\u6267\u884c\u7ed8\u5236\u4e4b\u524d\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"useLayoutEffect")," \u5185\u90e8\u7684\u66f4\u65b0\u8ba1\u5212\u5c06\u88ab\u540c\u6b65\u5237\u65b0"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u4f7f\u7528\u670d\u52a1\u7aef\u6e32\u67d3\uff0c\u8bf7\u8bb0\u4f4f\uff0c",(0,o.kt)("em",{parentName:"li"},"\u65e0\u8bba")," ",(0,o.kt)("inlineCode",{parentName:"li"},"useLayoutEffect")," ",(0,o.kt)("em",{parentName:"li"},"\u8fd8\u662f")," ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," \u90fd\u65e0\u6cd5\u5728 Javascript \u4ee3\u7801\u52a0\u8f7d\u5b8c\u6210\u4e4b\u524d\u6267\u884c",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u6e32\u67d3\u7ec4\u4ef6\u5c06\u4ee3\u7801\u903b\u8f91\u79fb\u81f3 ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect"),"\u4e2d\uff08\u5982\u679c\u9996\u6b21\u6e32\u67d3\u4e0d\u9700\u8981\u8fd9\u6bb5\u903b\u8f91\u7684\u60c5\u51b5\u4e0b\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u8be5\u7ec4\u4ef6\u5ef6\u8fdf\u5230\u5ba2\u6237\u7aef\u6e32\u67d3\u5b8c\u6210\u540e\u518d\u663e\u793a\uff08\u5982\u679c\u76f4\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"useLayoutEffect"),"  \u6267\u884c\u4e4b\u524d HTML \u90fd\u663e\u793a\u9519\u4e71\u7684\u60c5\u51b5\u4e0b\uff09"))),(0,o.kt)("li",{parentName:"ul"},"\u82e5\u8981\u4ece\u670d\u52a1\u7aef\u6e32\u67d3\u7684 HTML \u4e2d\u6392\u9664\u4f9d\u8d56\u5e03\u5c40 effect \u7684\u7ec4\u4ef6\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect(() => { setShowChild(true); }, [])")," \u5ef6\u8fdf\u5c55\u793a\u7ec4\u4ef6\uff0cUI\u907f\u514d\u9519\u4e71\u3002")),(0,o.kt)("h3",{id:"usereducer"},(0,o.kt)("strong",{parentName:"h3"},"useReducer")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const [state, dispatch] = useReducer(reducer, initialArg, init);\n// reducer:(state, action) => newState ========> action:{type:string, payload:string}\n// initialArg: \u521d\u59cbstate\n// init: state \u5c06\u88ab\u8bbe\u7f6e\u4e3a init(initialArg)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"state \u903b\u8f91\u8f83\u590d\u6742\u4e14\u5305\u542b\u591a\u4e2a\u5b50\u503c"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u4e0b\u4e00\u4e2a state \u4f9d\u8d56\u4e8e\u4e4b\u524d\u7684 state")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const initialState = { count: 0 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case "increment":\n      return { count: state.count + 1 };\n    case "decrement":\n      return { count: state.count - 1 };\n    default:\n      throw new Error();\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  return (\n    <>\n      Count: {state.count}\n      <button onClick={() => dispatch({ type: "decrement" })}>-</button>\n      <button onClick={() => dispatch({ type: "increment" })}>+</button>\n    </>\n  );\n}\n'))))),(0,o.kt)("li",{parentName:"ul"},"\u60f0\u6027\u521d\u59cb\u5316","  \u8ba1\u7b97 state \u7684\u903b\u8f91\u63d0\u53d6\u5230 reducer \u5916\u90e8\uff0c\u8fd9\u4e5f\u4e3a\u5c06\u6765\u5bf9\u91cd\u7f6e state \u7684 action \u505a\u5904\u7406",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function init(initialCount) {\n  return { count: initialCount };\n}\nfunction reducer(state, action) {\n  switch (action.type) {\n    case "increment":\n      return { count: state.count + 1 };\n    case "decrement":\n      return { count: state.count - 1 };\n    case "reset":\n      return init(action.payload);\n    default:\n      throw new Error();\n  }\n}\n\nfunction Counter({ initialCount }) {\n  const [state, dispatch] = useReducer(reducer, initialCount, init);\n  return (\n    <>\n      Count: {state.count}\n      <button\n        onClick={() => dispatch({ type: "reset", payload: initialCount })}\n      >\n        Reset\n      </button>\n      <button onClick={() => dispatch({ type: "decrement" })}>-</button>\n      <button onClick={() => dispatch({ type: "increment" })}>+</button>\n    </>\n  );\n}\n'))),(0,o.kt)("li",{parentName:"ul"},"\u8df3\u8fc7 dispatch","  \u5982\u679c Reducer Hook \u7684\u8fd4\u56de\u503c\u4e0e\u5f53\u524d state \u76f8\u540c\uff0cReact \u5c06\u8df3\u8fc7\u5b50\u7ec4\u4ef6\u7684\u6e32\u67d3\u53caeffect \u7684\u6267\u884c\u3002\n")),(0,o.kt)("h3",{id:"usememo\u5efa\u8bae\u5927\u91cf\u4f7f\u7528"},"useMemo\uff08\u5efa\u8bae\u5927\u91cf\u4f7f\u7528\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u628a\u201c\u521b\u5efa\u201d\u51fd\u6570\u548c\u4f9d\u8d56\u9879\u6570\u7ec4\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165 ",(0,o.kt)("inlineCode",{parentName:"li"},"useMemo"),"\uff0c\u5b83\u4ec5\u4f1a\u5728\u67d0\u4e2a\u4f9d\u8d56\u9879\u6539\u53d8\u65f6\u624d\u91cd\u65b0\u8ba1\u7b97 memoized \u503c"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u4f9d\u8d56\u9879\u6570\u7ec4\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"useMemo")," \u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u90fd\u4f1a\u8ba1\u7b97\u65b0\u7684\u503c"),(0,o.kt)("li",{parentName:"ul"},"\u4f20\u5165 ",(0,o.kt)("inlineCode",{parentName:"li"},"useMemo")," \u7684\u51fd\u6570\u4f1a\u5728\u6e32\u67d3\u671f\u95f4\u6267\u884c\u3002\u8bf7\u4e0d\u8981\u5728\u8fd9\u4e2a\u51fd\u6570\u5185\u90e8\u6267\u884c\u4e0e\u6e32\u67d3\u65e0\u5173\u7684\u64cd\u4f5c\uff0c\u8bf8\u5982\u526f\u4f5c\u7528\u8fd9\u7c7b\u7684\u64cd\u4f5c\u5c5e\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," \u7684\u9002\u7528\u8303\u7574\uff0c\u800c\u4e0d\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"useMemo"))),(0,o.kt)("h3",{id:"\u4e0d\u8981\u4f7f\u7528-eslint-plugin-react-hooks-\u63d2\u4ef6\u6216\u8005\u53ef\u4ee5\u9009\u62e9\u6027\u5ffd\u7565\u8be5\u63d2\u4ef6\u7684\u8b66\u544a"},"\u4e0d\u8981\u4f7f\u7528 eslint-plugin-react-hooks \u63d2\u4ef6\uff0c\u6216\u8005\u53ef\u4ee5\u9009\u62e9\u6027\u5ffd\u7565\u8be5\u63d2\u4ef6\u7684\u8b66\u544a"),(0,o.kt)("h3",{id:"\u5ef6\u8fdf\u8c03\u7528\u573a\u666f\u95ed\u5305\u95ee\u9898"},"\u5ef6\u8fdf\u8c03\u7528\u573a\u666f\u95ed\u5305\u95ee\u9898"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#functional-updates"},"setState \u7684\u51fd\u6570\u5f0f\u66f4\u65b0\u5f62\u5f0f"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Counter() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    const id = setInterval(() => {\n      setCount((c) => c + 1); // \u2705 \u5728\u8fd9\u4e0d\u4f9d\u8d56\u4e8e\u5916\u90e8\u7684 `count` \u53d8\u91cf\n    }, 1000);\n    return () => clearInterval(id);\n  }, []); // \u2705 \u6211\u4eec\u7684 effect \u4e0d\u4f7f\u7528\u7ec4\u4ef6\u4f5c\u7528\u57df\u4e2d\u7684\u4efb\u4f55\u53d8\u91cf\n  return <h1>{count}</h1>;\n}\n"))),(0,o.kt)("li",{parentName:"ul"},"\u5ef6\u8fdf\u8c03\u7528\u573a\u666f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528 setTimeout\u3001setInterval\u3001Promise.then \u7b49")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"useEffect \u7684\u5378\u8f7d\u51fd\u6570"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const getUsername = () => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('John');\n    }, 3000);\n  })\n}\n\nfunction Demo() {\n  const [count, setCount] = useState(0);\n  // setTimeout \u4f1a\u9020\u6210\u95ed\u5305\u95ee\u9898\n  useEffect(() => {\n    const timer = setTimeout(() => {\n      console.log(count);\n    }, 3000);\n    return () => {\n      clearTimeout(timer);\n    }\n  }, [])\n\n  // setInterval \u4f1a\u9020\u6210\u95ed\u5305\u95ee\u9898\n  useEffect(() => {\n    const timer = setInterval(() => {\n      console.log(count);\n    }, 3000);\n    return () => {\n      clearInterval(timer);\n    }\n  }, [])\n\n  // Promise.then \u4f1a\u9020\u6210\u95ed\u5305\u95ee\u9898\n  useEffect(() => {\n    getUsername().then(() => {\n      console.log(count);\n    });\n  }, [])\n\n  // useEffect \u5378\u8f7d\u51fd\u6570\u4f1a\u9020\u6210\u95ed\u5305\u95ee\u9898\n  useEffect(() => {\n    return () => {\n      console.log(count);\n    }\n  }, []);\n  return (\n    <button\n      onClick={() => setCount(c => c + 1)}\n    >\n      click\n    </button>\n  )\n}\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"    const [count, setCount] = useState(0);\n// \u901a\u8fc7 ref \u6765\u8bb0\u5fc6\u6700\u65b0\u7684 count\nconst countRef = useRef(count);\ncountRef.current = count;\n    \nuseEffect(() => {\n  const timer = setTimeout(() => {\n    console.log(countRef.current)\n  }, 3000);\n  return () => {\n    clearTimeout(timer);\n  }\n}, [])\n")))))),(0,o.kt)("h3",{id:"usecallback"},"useCallback"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u4e0d\u8981\u7528"),(0,o.kt)("li",{parentName:"ul"},"useCallback \u662f\u8981\u548c shouldComponentUpdate/React.memo \u914d\u5957\u4f7f\u7528"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useCallback(fn, deps)")," \u76f8\u5f53\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"useMemo(() => fn, deps)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const memoizedCallback = useCallback(\n  () => {\n    doSomething(a, b);\n  },\n  [a, b],\n);\n")),(0,o.kt)("h3",{id:"useref"},(0,o.kt)("strong",{parentName:"h3"},"useRef")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const refContainer = useRef(initialValue);\n// refContainer.current === initialValue\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ref \u5bf9\u8c61\u5728\u7ec4\u4ef6\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u5185\u6301\u7eed\u5b58\u5728"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5",(0,o.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables"},"\u5f88\u65b9\u4fbf\u5730\u4fdd\u5b58\u4efb\u4f55\u53ef\u53d8\u503c"),"\uff0c\u7c7b\u4f3c\u4e8e\u4e00\u4e2a class \u7684\u5b9e\u4f8b\u5c5e\u6027"),(0,o.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u5904\u7406\u5668\u4e2d\u6e05\u9664\u5faa\u73af\u5b9a\u65f6\u5668",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Timer() {\n  const intervalRef = useRef();\n  useEffect(() => {\n    const id = setInterval(() => {\n      // ...\n    });\n    intervalRef.current = id;\n    return () => {\n      clearInterval(intervalRef.current);\n    };\n  });\n\n  // ...\n}\n// ...\nfunction handleCancelClick() {\n  clearInterval(intervalRef.current);\n}\n// ...\n"))),(0,o.kt)("li",{parentName:"ul"},"\u53d8\u66f4 ",(0,o.kt)("inlineCode",{parentName:"li"},".current")," \u5c5e\u6027\u4e0d\u4f1a\u5f15\u53d1\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3"),(0,o.kt)("li",{parentName:"ul"},"ref \u662f\u4e00\u4e2a\u5bf9\u8c61\u65f6\u5b83\u5e76\u4e0d\u4f1a\u628a\u5f53\u524d ref \u7684\u503c\u7684\u53d8\u5316\u901a\u77e5\uff0c\u5982\u679c\u60f3\u8981\u5728 React \u7ed1\u5b9a\u6216\u89e3\u7ed1 DOM \u8282\u70b9\u7684 ref \u65f6\u8fd0\u884c\u67d0\u4e9b\u4ee3\u7801\uff0c\u5219\u9700\u8981\u4f7f\u7528",(0,o.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node"},"\u56de\u8c03 ref")," \u6765\u5b9e\u73b0",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function MeasureExample() {\n  const [height, setHeight] = useState(0);\n\n  const measuredRef = useCallback(node => {\n    if (node !== null) {\n      setHeight(node.getBoundingClientRect().height);\n    }\n  }, []);\n\n  return (\n    <>\n      <h1 ref={measuredRef}>Hello, world</h1>\n      <h2>The above header is {Math.round(height)}px tall</h2>\n    </>\n  );\n}\n")))),(0,o.kt)("h3",{id:"hook-\u89c4\u5219"},(0,o.kt)("strong",{parentName:"h3"},"Hook \u89c4\u5219")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u53ea\u5728\u6700\u9876\u5c42\u4f7f\u7528 Hook"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5728\u5faa\u73af\uff0c\u6761\u4ef6\u6216\u5d4c\u5957\u51fd\u6570\u4e2d\u8c03\u7528 Hook"),(0,o.kt)("li",{parentName:"ul"},"return \u4e4b\u524d\u8c03\u7528\u4ed6\u4eec"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u53ea\u5728 React \u51fd\u6570\u4e2d\u8c03\u7528 Hook"),"  ",(0,o.kt)("strong",{parentName:"li"},"\u4e0d\u8981\u5728\u666e\u901a\u7684 JavaScript \u51fd\u6570\u4e2d\u8c03\u7528 Hook\u3002"),"\u4f60\u53ef\u4ee5\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u2705 \u5728 React \u7684\u51fd\u6570\u7ec4\u4ef6\u4e2d\u8c03\u7528 Hook"),(0,o.kt)("li",{parentName:"ul"},"\u2705 \u5728\u81ea\u5b9a\u4e49 Hook \u4e2d\u8c03\u7528\u5176\u4ed6 Hook")))))}k.isMDXComponent=!0}}]);