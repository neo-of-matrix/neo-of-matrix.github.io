"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[881],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},819:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={sidebar_position:4},s="\u6761\u4ef6\u6e32\u67d3",c={unversionedId:"You-Dont-Know-React/\u6761\u4ef6\u6e32\u67d3",id:"You-Dont-Know-React/\u6761\u4ef6\u6e32\u67d3",title:"\u6761\u4ef6\u6e32\u67d3",description:"- if \u6216\u8005\u6761\u4ef6\u8fd0\u7b97\u7b26",source:"@site/docs\\You-Dont-Know-React\\\u6761\u4ef6\u6e32\u67d3.md",sourceDirName:"You-Dont-Know-React",slug:"/You-Dont-Know-React/\u6761\u4ef6\u6e32\u67d3",permalink:"/docs/You-Dont-Know-React/\u6761\u4ef6\u6e32\u67d3",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"State",permalink:"/docs/You-Dont-Know-React/State"},next:{title:"key",permalink:"/docs/You-Dont-Know-React/key"}},u={},p=[],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6761\u4ef6\u6e32\u67d3"},"\u6761\u4ef6\u6e32\u67d3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else"},"if")," \u6216\u8005",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"},"\u6761\u4ef6\u8fd0\u7b97\u7b26"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function Greeting(props) {\n  const isLoggedIn = props.isLoggedIn;\n  if (isLoggedIn) {\n    return <UserGreeting />;\n  }\n  return <GuestGreeting />;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5143\u7d20\u53d8\u91cf","  \u4f7f\u7528\u53d8\u91cf\u6765\u50a8\u5b58\u5143\u7d20",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"let button;\nif (isLoggedIn) {\n  button = <LogoutButton onClick={this.handleLogoutClick} />;\n} else {\n  button = <LoginButton onClick={this.handleLoginClick} />;\n}\n"))),(0,a.kt)("li",{parentName:"ul"},"\u4e0e\u8fd0\u7b97\u7b26 &&",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function Mailbox(props) {\n  const unreadMessages = props.unreadMessages;\n  return (\n    <div>\n      <h1>Hello!</h1>\n      {unreadMessages.length > 0 && (\n        <h2> You have {unreadMessages.length} unread messages. </h2>\n      )}\n    </div>\n  );\n}\n\nconst messages = ["React", "Re: React", "Re:Re: React"];\nReactDOM.render(\n  <Mailbox unreadMessages={messages} />,\n  document.getElementById("root")\n);\n')),"  \u8fd4\u56de false \u7684\u8868\u8fbe\u5f0f\u4f1a\u4f7f ",(0,a.kt)("inlineCode",{parentName:"li"},"&&")," \u540e\u9762\u7684\u5143\u7d20\u88ab\u8df3\u8fc7\uff0c\u4f46\u4f1a\u8fd4\u56de false \u8868\u8fbe\u5f0f",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"render() {\n    const count = 0;  return (\n        <div>\n            { count && <h1>Messages: {count}</h1>}\n       </div>\n    );\n}\n"))),(0,a.kt)("li",{parentName:"ul"},"\u4e09\u76ee\u8fd0\u7b97\u7b26",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"render() {\n    const isLoggedIn = this.state.isLoggedIn;\n    return (\n        <div>\n            The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.\n        </div>\n    );\n  }\n"))),(0,a.kt)("li",{parentName:"ul"},"\u963b\u6b62\u7ec4\u4ef6\u6e32\u67d3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"render")," \u65b9\u6cd5\u76f4\u63a5\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"li"},"null")),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u5f71\u54cd\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f")))))}m.isMDXComponent=!0}}]);