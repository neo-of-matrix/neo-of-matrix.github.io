# 错误边界

### 概念

- 错误边界是一种 React 组件，捕获子组件树何位置的 JavaScript 错误
- 错误边界可以捕获发生在整个子组件树的渲染期间、生命周期方法以及构造函数中的错误
- 错误边界无法捕获以下场景中产生的错误：
    - 事件处理（[了解更多](https://zh-hans.reactjs.org/docs/error-boundaries.html#how-about-event-handlers)）
        - 使用普通的 JavaScript `try` / `catch` 语句：
    - 异步代码（例如 `setTimeout` 或 `requestAnimationFrame` 回调函数）
    - 服务端渲染
    - 它自身抛出来的错误（并非它的子组件）

### 使用

`static getDerivedStateFromError()` 渲染备用 UI 

`componentDidCatch()` 打印错误信息

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    logErrorToMyService(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

### 错误边界应该放置在哪？

- 最顶层的路由组件
- 单独部件保护应用其他部分正常显示