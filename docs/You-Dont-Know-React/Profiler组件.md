# Profiler组件

- 测量渲染时间，找出渲染较慢的部分，使用[类似 memoization 优化](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-memoize-calculations)

```jsx
render(
  <App>
    <Profiler id="Panel" onRender={callback}>
      <Panel {...props}>
        <Profiler id="Content" onRender={callback}>
          <Content {...props} />
        </Profiler>
        <Profiler id="PreviewPane" onRender={callback}>
          <PreviewPane {...props} />
        </Profiler>
      </Panel>
    </Profiler>
  </App>
);
```

- 回调参数
    - **`id: string`** - 发生提交的 `Profiler` 树的 `id`
    - **`phase: "mount" | "update"`** - 判断是组件树的第一次装载引起的重渲染，还是由 props、state 或是 hooks 改变引起的重渲染
    - **`actualDuration: number`** - 本次更新在渲染 `Profiler` 和它的子代上花费的时间。
    这个数值表明使用 memoization 之后能表现得多好。（例如 `[React.memo](https://zh-hans.reactjs.org/docs/react-api.html#reactmemo)`，`[useMemo](https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo)`，`[shouldComponentUpdate](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-do-i-implement-shouldcomponentupdate)`）
    - **`baseDuration: number`** - 在 `Profiler` 树中最近一次每一个组件 `render` 的持续时间。
    这个值估计了最差的渲染时间。（例如当它是第一次加载或者组件树没有使用 memoization）
    - **`startTime: number`** - 本次更新中 React 开始渲染的时间戳
    - **`commitTime: number`** - 本次更新中 React commit 阶段结束的时间戳。在一次 commit 中这个值在所有的 profiler 之间是共享的，可以将它们按需分组
    - **`interactions: Set`** - 当更新被制定时，[“interactions”](https://fb.me/react-interaction-tracing) 的集合会被追踪。（例如当 `render` 或者 `setState` 被调用时）