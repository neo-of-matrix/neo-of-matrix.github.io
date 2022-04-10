"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2680],{3905:function(e,r,n){n.d(r,{Zo:function(){return i},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},i=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,u=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,y=p["".concat(l,".").concat(d)]||p[d]||f[d]||u;return n?t.createElement(y,a(a({ref:r},i),{},{components:n})):t.createElement(y,a({ref:r},i))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<u;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3967:function(e,r,n){n.r(r),n.d(r,{assets:function(){return i},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return f}});var t=n(3117),o=n(102),u=(n(7294),n(3905)),a=["components"],c={},l="useDeferredValue",s={unversionedId:"You-Dont-Know-React/React Hook/useDeferre 08778",id:"You-Dont-Know-React/React Hook/useDeferre 08778",title:"useDeferredValue",description:"\u9891\u7e41\u66f4\u65b0\u7ec4\u4ef6\u8fdb\u884c\u8282\u6d41",source:"@site/docs/You-Dont-Know-React/React Hook/useDeferre 08778.md",sourceDirName:"You-Dont-Know-React/React Hook",slug:"/You-Dont-Know-React/React Hook/useDeferre 08778",permalink:"/docs/You-Dont-Know-React/React Hook/useDeferre 08778",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useDebugValue",permalink:"/docs/You-Dont-Know-React/React Hook/useDebugVa 6913c"},next:{title:"useId",permalink:"/docs/You-Dont-Know-React/React Hook/useId dd6fb"}},i={},f=[{value:"\u7f13\u5b58\u8282\u6d41\u5b50\u7ec4\u4ef6",id:"\u7f13\u5b58\u8282\u6d41\u5b50\u7ec4\u4ef6",level:3}],p={toc:f};function d(e){var r=e.components,n=(0,o.Z)(e,a);return(0,u.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"usedeferredvalue"},"useDeferredValue"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},"const [deferredValue] = useDeferredValue(value);\n")),(0,u.kt)("p",null,"\u9891\u7e41\u66f4\u65b0\u7ec4\u4ef6\u8fdb\u884c\u8282\u6d41"),(0,u.kt)("h3",{id:"\u7f13\u5b58\u8282\u6d41\u5b50\u7ec4\u4ef6"},"\u7f13\u5b58\u8282\u6d41\u5b50\u7ec4\u4ef6"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"useDeferredValue\u53ea\u4f1a\u8282\u6d41\u4f60\u4f20\u7ed9\u5b83\u7684\u503c"),(0,u.kt)("li",{parentName:"ul"},"\u4f7f\u7528React.memo\u6216\u8005React.useMemo\u963b\u6b62\u5b50\u7ec4\u4ef6\u9891\u7e41\u66f4\u65b0")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},"function Typeahead() {\n  const query = useSearchQuery('');\n  const deferredQuery = useDeferredValue(query);\n\n  // Memoizing tells React to only re-render when deferredQuery changes,\n  // not when query changes.\n  const suggestions = useMemo(() =>\n    <SearchSuggestions query={deferredQuery} />,\n    [deferredQuery]\n  );\n\n  return (\n    <>\n      <SearchInput query={query} />\n      <Suspense fallback=\"Loading results...\">\n        {suggestions}\n      </Suspense>\n    </>\n  );\n}\n")))}d.isMDXComponent=!0}}]);