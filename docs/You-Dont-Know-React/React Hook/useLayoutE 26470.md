# useLayoutEffect

- 在所有的 DOM 变更之后同步调用 effect（`componentDidMount` 和 `componentDidUpdate` 触发时机一样）
- 可以使用它来读取 DOM 布局并进行修改触发渲染
- 在浏览器执行绘制之前，`useLayoutEffect` 内部的更新计划将被同步刷新
- 如果你使用服务端渲染，请记住，*无论* `useLayoutEffect` *还是* `useEffect` 都无法在 Javascript 代码加载完成之前执行
    - 服务端渲染组件将代码逻辑移至 `useEffect`中（如果首次渲染不需要这段逻辑的情况下）
    - 该组件延迟到客户端渲染完成后再显示（如果直到 `useLayoutEffect`  执行之前 HTML 都显示错乱的情况下）
- 若要从服务端渲染的 HTML 中排除依赖布局 effect 的组件，使用 `useEffect(() => { setShowChild(true); }, [])` 延迟展示组件，UI避免错乱。