---
slug: 组件没有挂载，如何处理异步请求setState（译）
title: 组件没有挂载，如何处理异步请求setState（译）
authors: [neo-of-matrix]
tags: [译]
---

### 警告提示

- Warning: Can only update a mounted or mounting component. This usually means you called setState, replaceState, or forceUpdate on an unmounted component. This is a no-op.
- Warning: Can't call setState (or forceUpdate) on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
- 组件没有挂载，但是调用`setState`, `replaceState`, or `forceUpdate`方法
- 可能内存泄漏，在`componentWillUnmount`方法里取消订阅方法和异步任务

### 组件卸载问题

- 条件渲染
- 使用路由导航
- 异步请求然后调用`this.setState()`，请求没有返回组件就卸载了
    - **使用class 变量，初始化Ffalse,  组件挂载改为true，组件卸载重置为false**
        
        ```jsx
        class News extends Component {
          _isMounted = false;
        
          constructor(props) {
            super(props);
        
            this.state = {
              news: [],
            };
          }
        
          componentDidMount() {
            this._isMounted = true;
        
            axios
              .get('https://hn.algolia.com/api/v1/search?query=react')
              .then(result => {
                if (this._isMounted) {
                  this.setState({
                    news: result.data.hits,
                  });
                }
              });
          }
        
          componentWillUnmount() {
            this._isMounted = false;
          }
        
          render() {
            ...
          }
        }
        ```
        
- 没有在 `componentWillUnmount()` 取消监听或者定时器

### 参考资料

- 原文链接：[https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component](https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component/)