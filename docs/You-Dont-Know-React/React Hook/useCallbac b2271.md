# useCallback

- 尽量不要用
- useCallback 是要和 shouldComponentUpdate/React.memo 配套使用
- `useCallback(fn, deps)` 相当于 `useMemo(() => fn, deps)`

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```