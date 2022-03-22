"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7726],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,f=d["".concat(u,".").concat(k)]||d[k]||p[k]||o;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9749:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={slug:"Hooks, State, Closures, and useReducer\uff08\u8bd1\uff09",title:"Hooks, State, Closures, and useReducer\uff08\u8bd1\uff09",authors:["neo-of-matrix"],tags:["\u8bd1"]},u=void 0,c={permalink:"/blog/Hooks, State, Closures, and useReducer\uff08\u8bd1\uff09",source:"@site/blog\\2022-03-10\\Hooks, State, Closures, and useReducer\uff08\u8bd1\uff09.md",title:"Hooks, State, Closures, and useReducer\uff08\u8bd1\uff09",description:"\u4f7f\u7528 useState \u548c context \u53ef\u4ee5\u6ee1\u8db3\u4f7f\u7528\uff0c\u4e3a\u4ec0\u4e48\u8981\u7528 useReducer \uff1f",date:"2022-03-10T00:00:00.000Z",formattedDate:"March 10, 2022",tags:[{label:"\u8bd1",permalink:"/blog/tags/\u8bd1"}],readingTime:2.295,truncated:!1,authors:[{name:"neo-of-matrix",title:"Software Engineer",url:"https://github.com/neo-of-matrix",imageURL:"https://avatars.githubusercontent.com/u/27358131?v=4",key:"neo-of-matrix"}],frontMatter:{slug:"Hooks, State, Closures, and useReducer\uff08\u8bd1\uff09",title:"Hooks, State, Closures, and useReducer\uff08\u8bd1\uff09",authors:["neo-of-matrix"],tags:["\u8bd1"]},nextItem:{title:"\u7ec4\u4ef6\u6ca1\u6709\u6302\u8f7d\uff0c\u5982\u4f55\u5904\u7406\u5f02\u6b65\u8bf7\u6c42setState\uff08\u8bd1\uff09",permalink:"/blog/\u7ec4\u4ef6\u6ca1\u6709\u6302\u8f7d\uff0c\u5982\u4f55\u5904\u7406\u5f02\u6b65\u8bf7\u6c42setState\uff08\u8bd1\uff09"}},l={authorsImageUrls:[void 0]},p=[{value:"\u4f7f\u7528 <code>useState</code> \u548c <code>context</code> \u53ef\u4ee5\u6ee1\u8db3\u4f7f\u7528\uff0c\u4e3a\u4ec0\u4e48\u8981\u7528 <code>useReducer</code> \uff1f",id:"\u4f7f\u7528-usestate-\u548c-context-\u53ef\u4ee5\u6ee1\u8db3\u4f7f\u7528\u4e3a\u4ec0\u4e48\u8981\u7528-usereducer-",level:3},{value:"\u95ee\u9898",id:"\u95ee\u9898",level:3},{value:"\u89e3\u51b3",id:"\u89e3\u51b3",level:3},{value:"\u4e3a\u4ec0\u4e48\u4e0d\u7528\u51fd\u6570\u5f0fsetState\u89e3\u51b3\u95ed\u5305\u95ee\u9898\uff1f",id:"\u4e3a\u4ec0\u4e48\u4e0d\u7528\u51fd\u6570\u5f0fsetstate\u89e3\u51b3\u95ed\u5305\u95ee\u9898",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3}],d={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u4f7f\u7528-usestate-\u548c-context-\u53ef\u4ee5\u6ee1\u8db3\u4f7f\u7528\u4e3a\u4ec0\u4e48\u8981\u7528-usereducer-"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h3"},"useState")," \u548c ",(0,o.kt)("inlineCode",{parentName:"h3"},"context")," \u53ef\u4ee5\u6ee1\u8db3\u4f7f\u7528\uff0c\u4e3a\u4ec0\u4e48\u8981\u7528 ",(0,o.kt)("inlineCode",{parentName:"h3"},"useReducer")," \uff1f"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer")," \u53ef\u4ee5\u66f4\u5bb9\u6613\u7ba1\u7406 ",(0,o.kt)("inlineCode",{parentName:"p"},"state")),(0,o.kt)("p",null,"\u4f8b\u5b50 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/arackaf/booklist"},"https://github.com/arackaf/booklist")),(0,o.kt)("p",null,"\u4f7f\u7528websocket\u76d1\u542c\u4e8b\u4ef6\uff0c\u6839\u636e\u8fd4\u56de\u6570\u636e\u7684\u4e0d\u540c\u72b6\u6001\u66f4\u65b0\u4e66\u7c4d\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const BookEntryList = props => {\n  const [pending, setPending] = useState(0);\n  const [booksJustSaved, setBooksJustSaved] = useState([]);\n\n  useEffect(() => {\n    const ws = new WebSocket(webSocketAddress("/bookEntryWS"));\n\n    ws.onmessage = ({ data }) => {\n      let packet = JSON.parse(data);\n      if (packet._messageType == "initial") {\n        setPending(packet.pending);\n      } else if (packet._messageType == "bookAdded") {\n        setPending(pending - 1 || 0);\n        setBooksJustSaved([packet, ...booksJustSaved]);\n      } else if (packet._messageType == "pendingBookAdded") {\n        setPending(+pending + 1 || 0);\n      } else if (packet._messageType == "bookLookupFailed") {\n        setPending(pending - 1 || 0);\n        setBooksJustSaved([\n          {\n            _id: "" + new Date(),\n            title: `Failed lookup for ${packet.isbn}`,\n            success: false\n          },\n          ...booksJustSaved\n        ]);\n      }\n    };\n    return () => {\n      try {\n        ws.close();\n      } catch (e) {}\n    };\n  }, []);\n\n  //...\n};\n')),(0,o.kt)("h3",{id:"\u95ee\u9898"},"\u95ee\u9898"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u4f9d\u8d56\u5217\u8868 []\uff0c\u7b2c\u4e00\u6b21\u6302\u8f7d\u8c03\u7528\uff0c\u540e\u9762\u4e0d\u4f1a\u6267\u884c\uff1b"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u662f\u4e00\u4e2a\u95ed\u5305\uff0c\u800c\u4e14\u4f9d\u8d56\u5217\u8868\u6ca1\u6709\u5305\u542bstate\u6570\u636e\uff08pending\u7b49\u7b49\uff09, ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," \u59cb\u7ec8\u662f\u521d\u59cb\u72b6\u6001\u6570\u636e"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount")," \u4e0d\u80fd\u76f4\u63a5\u8f6c\u5316\u4e3a\u4f9d\u8d56\u5217\u8868[]\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")),(0,o.kt)("p",null,"\u4f46\u662f\u5982\u679cstate\u52a0\u5165\u4f9d\u8d56\u5217\u8868\uff0c\u6bcf\u6b21\u66f4\u65b0websocket\u5c31\u4f1a\u5173\u95ed\u3001\u5f00\u542f"),(0,o.kt)("h3",{id:"\u89e3\u51b3"},"\u89e3\u51b3"),(0,o.kt)("p",null,"state\u7ba1\u7406\u903b\u8f91\u653e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"reducer")," \u91cc\u9762"),(0,o.kt)("p",null,"useEffect \u7b80\u5316\uff0c\u4e0d\u5fc5\u5904\u7406\u95ed\u5305\uff0c\u5bb9\u6613\u8fdb\u884c\u6d4b\u8bd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function scanReducer(state, **[type, payload]**) {\n  switch (type) {\n    case "initial":\n      return { ...state, pending: payload.pending };\n    case "pendingBookAdded":\n      return { ...state, pending: state.pending + 1 };\n    case "bookAdded":\n      return {\n        ...state,\n        pending: state.pending - 1,\n        booksSaved: [payload, ...state.booksSaved]\n      };\n    case "bookLookupFailed":\n      return {\n        ...state,\n        pending: state.pending - 1,\n        booksSaved: [\n          {\n            _id: "" + new Date(),\n            title: `Failed lookup for ${payload.isbn}`,\n            success: false\n          },\n          ...state.booksSaved\n        ]\n      };\n  }\n  return state;\n}\nconst initialState = { pending: 0, booksSaved: [] };\n\nconst BookEntryList = props => {\n  const [state, dispatch] = useReducer(scanReducer, initialState);\n\n  useEffect(() => {\n    const ws = new WebSocket(webSocketAddress("/bookEntryWS"));\n\n    ws.onmessage = ({ data }) => {\n      let packet = JSON.parse(data);\n      dispatch([packet._messageType, packet]);\n    };\n    return () => {\n      try {\n        ws.close();\n      } catch (e) {}\n    };\n  }, []);\n\n  //...\n};\n')),(0,o.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4e0d\u7528\u51fd\u6570\u5f0fsetstate\u89e3\u51b3\u95ed\u5305\u95ee\u9898"},"\u4e3a\u4ec0\u4e48\u4e0d\u7528\u51fd\u6570\u5f0fsetState\u89e3\u51b3\u95ed\u5305\u95ee\u9898\uff1f"),(0,o.kt)("p",null,"\u56e0\u4e3a\u6ca1\u6709\u89e3\u51b3\u6bcf\u4e2astate\u4f9d\u8d56\u5173\u7cfb"),(0,o.kt)("h3",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u539f\u6587\u94fe\u63a5\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://adamrackis.dev/state-and-use-reducer"},"https://adamrackis.dev/state-and-use-reducer"))))}k.isMDXComponent=!0}}]);