# Suspense

- `[React.lazy](https://zh-hans.reactjs.org/docs/react-api.html#reactlazy)`
    
    初次渲染时未用到的组件延迟加载
    
    `lazy()` 则可被放置于任何你想要做代码分割的地方
    
    ```jsx
    // 这个组件是动态加载的
    const SomeComponent = React.lazy(() => import('./SomeComponent'));
    ```
    
- `[React.Suspense](https://zh-hans.reactjs.org/docs/react-api.html#reactsuspense)`
    
    ```jsx
    // 该组件是动态加载的
    const OtherComponent = React.lazy(() => import('./OtherComponent'));
    
    function MyComponent() {
      return (
        // 显示 <Spinner> 组件直至 OtherComponent 加载完成
        <React.Suspense fallback={<Spinner />}>
          <div>
            <OtherComponent />
          </div>
        </React.Suspense>
      );
    }
    ```
    
    - 添加loading效果
    - 子元素必须是 `React.lazy` 包裹的组件
    - 将 `<Suspense>` 置于你想展示加载指示器（loading indicator）的位置
    - 服务端渲染中的 `React.Suspense`
    - hydrate 过程中的 `React.Suspense`