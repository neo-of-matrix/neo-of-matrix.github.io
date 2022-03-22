"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1889],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7610:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],c={},i="\u4e8b\u4ef6\u5904\u7406",u={unversionedId:"You-Dont-Know-React/\u4e8b\u4ef6\u5904\u7406",id:"You-Dont-Know-React/\u4e8b\u4ef6\u5904\u7406",title:"\u4e8b\u4ef6\u5904\u7406",description:"\u7ed1\u5b9athis",source:"@site/docs\\You-Dont-Know-React\\\u4e8b\u4ef6\u5904\u7406.md",sourceDirName:"You-Dont-Know-React",slug:"/You-Dont-Know-React/\u4e8b\u4ef6\u5904\u7406",permalink:"/docs/You-Dont-Know-React/\u4e8b\u4ef6\u5904\u7406",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e25\u683c\u6a21\u5f0f",permalink:"/docs/You-Dont-Know-React/\u4e25\u683c\u6a21\u5f0f"},next:{title:"\u4ee3\u7801\u5206\u5272",permalink:"/docs/You-Dont-Know-React/\u4ee3\u7801\u5206\u5272"}},s={},p=[{value:"\u7ed1\u5b9athis",id:"\u7ed1\u5b9athis",level:3},{value:"<strong>\u4f20\u9012\u53c2\u6570</strong>",id:"\u4f20\u9012\u53c2\u6570",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e8b\u4ef6\u5904\u7406"},"\u4e8b\u4ef6\u5904\u7406"),(0,a.kt)("h3",{id:"\u7ed1\u5b9athis"},"\u7ed1\u5b9athis"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"constructor\u7ed1\u5b9a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"class Toggle extends React.Component {\n  constructor(props) {\n    super(props);\n    // \u4e3a\u4e86\u5728\u56de\u8c03\u4e2d\u4f7f\u7528 `this`\uff0c\u8fd9\u4e2a\u7ed1\u5b9a\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\n    this.handleClick = this.handleClick.bind(this);\n  }\n  handleClick() {}\n  render() {\n    return <button onClick={this.handleClick}></button>;\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/plugins/transform-class-properties/"},"public class fields \u8bed\u6cd5"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"class LoggingButton extends React.Component {\n  handleClick = () => {};\n  render() {\n    return <button onClick={this.handleClick}>Click me</button>;\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u56de\u8c03\u4f7f\u7528",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions"},"\u7bad\u5934\u51fd\u6570"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"class LoggingButton extends React.Component {\n  handleClick() {}\n\n  render() {\n    // \u6b64\u8bed\u6cd5\u786e\u4fdd `handleClick` \u5185\u7684 `this` \u5df2\u88ab\u7ed1\u5b9a\u3002\n    return <button onClick={() => this.handleClick()}> Click me</button>;\n  }\n}\n")),(0,a.kt)("h3",{id:"\u4f20\u9012\u53c2\u6570"},(0,a.kt)("strong",{parentName:"h3"},"\u4f20\u9012\u53c2\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>\n<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>\n")))}f.isMDXComponent=!0}}]);