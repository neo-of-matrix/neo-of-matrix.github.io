# useInsertionEffect

```jsx
useInsertionEffect(didUpdate);
```

css-in-js 类库使用

- DOM改变之前同步触发
- 可以在`[useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)`之前注入样式
- 不能使用ref和更新操作