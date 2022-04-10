# ReactDOMServer

### **概览**

允许你将组件渲染成静态标记

```jsx
// ES modules
import ReactDOMServer from 'react-dom/server';
// CommonJS
var ReactDOMServer = require('react-dom/server');
```

### 不支持流的环境

- `[renderToString()](https://zh-hans.reactjs.org/docs/react-dom-server.html#rendertostring)`
    - 将 React 元素渲染为初始 HTML
    - 在已有服务端渲染标记的节点上调用 `[ReactDOM.hydrate()](https://zh-hans.reactjs.org/docs/react-dom.html#hydrate)` 方法，React 将会保留该节点且只进行事件处理绑定
- `[renderToStaticMarkup()](https://zh-hans.reactjs.org/docs/react-dom-server.html#rendertostaticmarkup)`
    - 不会在 React 内部创建的额外 DOM 属性
    - React 当作静态页面生成器来使用
    - 如果你计划在前端使用 React 以使得标记可交互，请不要使用此方法
        
        服务端上使用 `[renderToString](https://zh-hans.reactjs.org/docs/react-dom-server.html#rendertostring)` 或在前端上使用 `[ReactDOM.hydrate()](https://zh-hans.reactjs.org/docs/react-dom.html#hydrate)` 来代替
        

### Node流环境

- `ReactDOMServer.renderToPipeableStream(element, options)`
    - 渲染react元素为原始html
    - 返回一个流，里面有 pipe 和 abort 方法
    - 支持Suspense and streaming of HTML
- `[renderToNodeStream()](https://zh-hans.reactjs.org/docs/react-dom-server.html#rendertonodestream)`(Deprecated)
    
    `ReactDOMServer.renderToNodeStream(element)`
    
    - 返回一个可输出 HTML 字符串utf-8 编码的[可读流](https://nodejs.org/api/stream.html#stream_readable_streams)（[iconv-lite](https://www.npmjs.com/package/iconv-lite)）
    - 在已有服务端渲染标记的节点上调用 `[ReactDOM.hydrate()](https://zh-hans.reactjs.org/docs/react-dom.html#hydrate)` 方法，React 将会保留该节点且只进行事件处理绑定
- `[renderToStaticNodeStream()](https://zh-hans.reactjs.org/docs/react-dom-server.html#rendertostaticnodestream)`
    - 不会在 React 内部创建的额外 DOM 属性
    - React 当作静态页面生成器来使用
    - 如果你计划在前端使用 React 以使得标记可交互，请不要使用此方法
        
        服务端上使用 `[renderToNodeStream](https://zh-hans.reactjs.org/docs/react-dom-server.html#rendertonodestream)` 或在前端上使用 `[ReactDOM.hydrate()](https://zh-hans.reactjs.org/docs/react-dom.html#hydrate)` 来代替
        

### web 流（browsers, Deno, and some modern edge runtimes）

`ReactDOMServer.renderToReadableStream(element, options);`

- react 元素使用strea转化为原始html
- 返回一个可读流promise
- 支持Suspense and streaming of HTML