# ReactDOM

### **概览**

在应用顶层使用的 DOM（DOM-specific）方法

用于 React 模型以外的地方

### 浏览器支持

React 支持所有的现代浏览器，包括 IE9 及以上版本，但是需要为旧版浏览器比如 IE9 和 IE10 引入[相关的 polyfills 依赖](https://zh-hans.reactjs.org/docs/javascript-environment-requirements.html)

### API

- **`render()`**
    
    `ReactDOM.render(element, container[, callback])`
    
    - container 里渲染 element 元素或者组件，并返回对该组件的引用（函数组件和React 元素返回 null）
        
        推荐为根元素添加 callback ref
        
    - 回调函数在组件被渲染或更新之后被执行
    - ReactDOM.render() 首次调用时，容器节点里的所有 DOM 元素都会被替换
        
        后续的调用则会使用diff进行高效的更新
        
    - ReactDOM.render() 不会修改容器节点
        - 只会修改容器的子节点
        - 可以在不覆盖现有子节点的情况下，将组件插入已有的 DOM 节点中
- **`hydrate()`**
    
    `ReactDOM.hydrate(element, container[, callback])`
    
- **`unmountComponentAtNode()`**
    
    `ReactDOM.unmountComponentAtNode(container)`
    
    - 从 DOM 中卸载组件，会将其事件处理器（event handlers）和 state 一并清除
    - 组件被移除将会返回 `true`，如果没有组件可被移除将会返回 `false`
- **`findDOMNode()`**
    - [严格模式下该方法已弃用](https://zh-hans.reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage)
    - 返回浏览器中相应的原生 DOM 元素
    - 当组件渲染的内容为 `null` 或 `false` 时，`findDOMNode` 也会返回 `null`
    - 当组件渲染的是字符串时，`findDOMNode` 返回的是字符串对应的 DOM 节点
    - 返回有多个子节点的 fragment，`findDOMNode` 会返回第一个非空子节点对应的 DOM 节点。
    - `findDOMNode` 不能用于函数组件
- **`createPortal()`**
    
    `ReactDOM.createPortal(child, container)`
    
    将子节点渲染到 DOM 节点
    
- **`flushSync`**
    
    ```jsx
    flushSync(callback)
    ```
    
    强制同步更新回调函数内容
    
    - 影响性能尽量少用
    - Suspense 可能展示 fallback
    - 可以使用副作用返回之前同步应用它们所包含的任何更新
    - 当需要刷新内部的更新时，`flushSync` 也可以在回调外部刷新更新
        
        例如，如果有来自点击的未决更新。React 可能会在刷新回调之前刷新这些更新