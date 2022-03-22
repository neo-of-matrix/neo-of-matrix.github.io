"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8948],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),b=r,f=m["".concat(p,".").concat(b)]||m[b]||i[b]||a;return n?o.createElement(f,c(c({ref:t},u),{},{components:n})):o.createElement(f,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8065:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return i}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],s={},p="Web Components",l={unversionedId:"You-Dont-Know-React/Web Components",id:"You-Dont-Know-React/Web Components",title:"Web Components",description:"Web Components \u4e3a\u53ef\u590d\u7528\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u5c01\u88c5\uff0c\u800c React \u5219\u63d0\u4f9b\u4e86\u58f0\u660e\u5f0f\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4f7f DOM \u4e0e\u6570\u636e\u4fdd\u6301\u540c\u6b65\u3002",source:"@site/docs/You-Dont-Know-React/Web Components.md",sourceDirName:"You-Dont-Know-React",slug:"/You-Dont-Know-React/Web Components",permalink:"/docs/You-Dont-Know-React/Web Components",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"State",permalink:"/docs/You-Dont-Know-React/State"},next:{title:"key",permalink:"/docs/You-Dont-Know-React/key"}},u={},i=[{value:"\u5728 React \u4e2d\u4f7f\u7528 Web Components",id:"\u5728-react-\u4e2d\u4f7f\u7528-web-components",level:3},{value:"\u5728 Web Components \u4e2d\u4f7f\u7528 React",id:"\u5728-web-components-\u4e2d\u4f7f\u7528-react",level:3}],m={toc:i};function b(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web-components"},"Web Components"),(0,a.kt)("p",null,"Web Components \u4e3a\u53ef\u590d\u7528\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u5c01\u88c5\uff0c\u800c React \u5219\u63d0\u4f9b\u4e86\u58f0\u660e\u5f0f\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4f7f DOM \u4e0e\u6570\u636e\u4fdd\u6301\u540c\u6b65\u3002"),(0,a.kt)("h3",{id:"\u5728-react-\u4e2d\u4f7f\u7528-web-components"},"\u5728 React \u4e2d\u4f7f\u7528 Web Components"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"class HelloMessage extends React.Component {\n  render() {\n    return <div>Hello <x-search>{this.props.name}</x-search>!</div>;\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8981\u8bbf\u95ee Web Components \u7684\u547d\u4ee4\u5f0f API\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"ref")," \u76f4\u63a5\u4e0e DOM \u8282\u70b9\u8fdb\u884c\u4ea4\u4e92"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9 Web Components\uff0c\u7f16\u5199 React \u7ec4\u4ef6\u5305\u88c5\u8be5 Web Components"),(0,a.kt)("li",{parentName:"ul"},"Web Components \u89e6\u53d1\u7684\u4e8b\u4ef6\u53ef\u80fd\u65e0\u6cd5\u901a\u8fc7 React \u6e32\u67d3\u6811\u6b63\u786e\u7684\u4f20\u9012","  React \u7ec4\u4ef6\u4e2d\u624b\u52a8\u6dfb\u52a0\u4e8b\u4ef6\u5904\u7406\u5668\u6765\u5904\u7406\u8fd9\u4e9b\u4e8b\u4ef6\n"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528className")),(0,a.kt)("h3",{id:"\u5728-web-components-\u4e2d\u4f7f\u7528-react"},"\u5728 Web Components \u4e2d\u4f7f\u7528 React"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"class XSearch extends HTMLElement {\n  connectedCallback() {\n    const mountPoint = document.createElement('span');\n    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);\n\n    const name = this.getAttribute('name');\n    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);\n    ReactDOM.render(<a href={url}>{name}</a>, mountPoint);\n  }\n}\ncustomElements.define('x-search', XSearch);\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f7f\u7528 Babel \u6765\u8f6c\u6362 class\uff0c\u6b64\u4ee3\u7801\u5c06",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a"),"\u8d77\u4f5c\u7528\u3002\u8bf7\u67e5\u9605\u8be5 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/w3c/webcomponents/issues/587"},"issue")," \u4e86\u89e3\u76f8\u5173\u8ba8\u8bba\u3002\n\u5728\u52a0\u8f7d Web Components \u524d\u8bf7\u5f15\u5165 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs#custom-elements-es5-adapterjs"},"custom-elements-es5-adapter")," \u6765\u89e3\u51b3\u8be5 issue\u3002")))}b.isMDXComponent=!0}}]);