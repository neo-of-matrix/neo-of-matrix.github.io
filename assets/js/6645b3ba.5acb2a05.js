"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8886],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3533:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),c=["components"],i={},l="Fragments",u={unversionedId:"You-Dont-Know-React/Fragments cd886",id:"You-Dont-Know-React/Fragments cd886",title:"Fragments",description:"- Fragment\u4e00\u79cd\u6807\u7b7e\uff0c\u4e0d\u4f1a\u6e32\u67d3\u6210DOM\u7ed3\u6784\uff0c\u9002\u7528\u4e8e\u5217\u8868\u7ed3\u6784\u8fdb\u884c\u5206\u7ec4\u6e32\u67d3",source:"@site/docs/You-Dont-Know-React/Fragments cd886.md",sourceDirName:"You-Dont-Know-React",slug:"/You-Dont-Know-React/Fragments cd886",permalink:"/docs/You-Dont-Know-React/Fragments cd886",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/docs/You-Dont-Know-React/FAQ 852cd"},next:{title:"JSX",permalink:"/docs/You-Dont-Know-React/JSX 4ab1c"}},p={},m=[],s={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fragments"},"Fragments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Fragment"),"\u4e00\u79cd\u6807\u7b7e\uff0c\u4e0d\u4f1a\u6e32\u67d3\u6210DOM\u7ed3\u6784\uff0c\u9002\u7528\u4e8e\u5217\u8868\u7ed3\u6784\u8fdb\u884c\u5206\u7ec4\u6e32\u67d3"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"td"),"\u6807\u7b7e\u5206\u7ec4\u904d\u5386\u653e\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"tr"),"\u6807\u7b7e",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"class Columns extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <td>Hello</td>\n        <td>World</td>\n      </React.Fragment>\n    );\n  }\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key")," \u662f\u552f\u4e00\u53ef\u4ee5\u4f20\u9012\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"li"},"Fragment")," \u7684\u5c5e\u6027",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function Glossary(props) {\n  return (\n    <dl>\n      {props.items.map((item) => (\n        // \u6ca1\u6709`key`\uff0cReact \u4f1a\u53d1\u51fa\u4e00\u4e2a\u5173\u952e\u8b66\u544a\n        <React.Fragment key={item.id}>\n          <dt>{item.term}</dt>\n          <dd>{item.description}</dd>\n        </React.Fragment>\n      ))}\n    </dl>\n  );\n}\n")))))}d.isMDXComponent=!0}}]);