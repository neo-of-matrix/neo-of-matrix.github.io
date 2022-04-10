"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6044],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,h=m["".concat(c,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},510:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],o={},c="\u8f6c\u6362\u5143\u7d20",p={unversionedId:"You-Dont-Know-React/API/React/\u8f6c\u6362\u5143\u7d20 03d6e",id:"You-Dont-Know-React/API/React/\u8f6c\u6362\u5143\u7d20 03d6e",title:"\u8f6c\u6362\u5143\u7d20",description:"- cloneElement()",source:"@site/docs\\You-Dont-Know-React\\API\\React\\\u8f6c\u6362\u5143\u7d20 03d6e.md",sourceDirName:"You-Dont-Know-React/API/React",slug:"/You-Dont-Know-React/API/React/\u8f6c\u6362\u5143\u7d20 03d6e",permalink:"/docs/You-Dont-Know-React/API/React/\u8f6c\u6362\u5143\u7d20 03d6e",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7ec4\u4ef6",permalink:"/docs/You-Dont-Know-React/API/React/\u7ec4\u4ef6 9f17a"},next:{title:"React.Component",permalink:"/docs/You-Dont-Know-React/API/React Comp 19041"}},u={},d=[{value:"<code>[React.Children](https://zh-hans.reactjs.org/docs/react-api.html#reactchildren)</code>\u76f8\u5173\u51fd\u6570",id:"reactchildrenhttpszh-hansreactjsorgdocsreact-apihtmlreactchildren\u76f8\u5173\u51fd\u6570",level:3}],m={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8f6c\u6362\u5143\u7d20"},"\u8f6c\u6362\u5143\u7d20"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[cloneElement()](https://zh-hans.reactjs.org/docs/react-api.html#cloneelement)"),"  \u514b\u9686element\u5143\u7d20","  config\u5b9a\u4e49\u65b0props\uff0ckey\uff0cref\uff0c\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\u4f7f\u7528\u539f\u59cb\u5143\u7d20props\uff0ckey\uff0cref",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"React.cloneElement(\n  element,\n  [config],\n  [...children]\n)\n<element.type {...element.props} {...props}>{children}</element.type>\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[isValidElement()](https://zh-hans.reactjs.org/docs/react-api.html#isvalidelement)"),"  \u9a8c\u8bc1\u5bf9\u8c61\u662f\u5426\u4e3a React \u5143\u7d20",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"React.isValidElement(object)\n")))),(0,i.kt)("h3",{id:"reactchildrenhttpszh-hansreactjsorgdocsreact-apihtmlreactchildren\u76f8\u5173\u51fd\u6570"},(0,i.kt)("inlineCode",{parentName:"h3"},"[React.Children](https://zh-hans.reactjs.org/docs/react-api.html#reactchildren)"),"\u76f8\u5173\u51fd\u6570"),(0,i.kt)("p",null,"\u5904\u7406\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"this.props.children")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"React.Children.map(children, function[(thisArg)])"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"children"),"\xa0\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u5b83\u5c06\u88ab\u904d\u5386\u5e76\u4e3a\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5b50\u8282\u70b9\u8c03\u7528\u8be5\u51fd\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u5b50\u8282\u70b9\u4e3a\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"\xa0\u6216\u662f\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"\uff0c\u5219\u6b64\u65b9\u6cd5\u5c06\u8fd4\u56de\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"\xa0\u6216\u662f\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"\uff0c\u800c\u4e0d\u4f1a\u8fd4\u56de\u6570\u7ec4"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"children"),"\xa0\u662f\u4e00\u4e2a\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"Fragment"),"\xa0\u5bf9\u8c61\uff0c\u5b83\u5c06\u88ab\u89c6\u4e3a\u5355\u4e00\u5b50\u8282\u70b9\u7684\u60c5\u51b5\u5904\u7406\uff0c\u800c\u4e0d\u4f1a\u88ab\u904d\u5386"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"React.Children.forEach(children, function[(thisArg)])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"React.Children.count(children)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"React.Children.only(children)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"children"),"\xa0\u662f\u5426\u53ea\u6709\u4e00\u4e2a\u5b50\u8282\u70b9\uff08\u4e00\u4e2a React \u5143\u7d20\uff09\uff0c\u5982\u679c\u6709\u5219\u8fd4\u56de\u5b83\uff0c\u5426\u5219\u6b64\u65b9\u6cd5\u4f1a\u629b\u51fa\u9519\u8bef"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"React.Children.only()"),"\xa0\u4e0d\u63a5\u53d7\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"[React.Children.map()](https://zh-hans.reactjs.org/docs/react-api.html#reactchildrenmap)"),"\xa0\u7684\u8fd4\u56de\u503c\uff0c\u56e0\u4e3a\u5b83\u662f\u4e00\u4e2a\u6570\u7ec4\u800c\u5e76\u4e0d\u662f React \u5143\u7d20"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"React.Children.toArray(children)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5c06\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"children"),"\xa0\u8fd9\u4e2a\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\u4ee5\u6570\u7ec4\u7684\u65b9\u5f0f\u6241\u5e73\u5c55\u5f00\u5e76\u8fd4\u56de\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u5b50\u8282\u70b9\u5206\u914d\u4e00\u4e2a key"),(0,i.kt)("li",{parentName:"ul"},"\u5411\u4e0b\u4f20\u9012\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"this.props.children"),"\xa0\u4e4b\u524d\u5bf9\u5185\u5bb9\u91cd\u65b0\u6392\u5e8f\u6216\u83b7\u53d6\u5b50\u96c6")))))}s.isMDXComponent=!0}}]);