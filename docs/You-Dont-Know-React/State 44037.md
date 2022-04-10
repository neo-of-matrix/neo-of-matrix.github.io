# State

### **不要直接修改 State**

```jsx
// Correct
this.setState({comment: 'Hello'});
```

**State 的更新可能是异步的**

- 多个 `setState()` 调用合并成一个调用
- 因为 `this.props` 和 `this.state` 可能会异步更新，所以你**不要依赖他们的值来更新下一个状态**。

```jsx
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

**State 修改不会影响其他state**