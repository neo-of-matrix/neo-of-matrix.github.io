# useReducer

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init);
// reducer:(state, action) => newState ========> action:{type:string, payload:string}
// initialArg: 初始state
// init: state 将被设置为 init(initialArg)
```

- 使用场景
    - **state 逻辑较复杂且包含多个子值**
    - **下一个 state 依赖于之前的 state**
    
    ```jsx
    const initialState = { count: 0 };
    
    function reducer(state, action) {
      switch (action.type) {
        case "increment":
          return { count: state.count + 1 };
        case "decrement":
          return { count: state.count - 1 };
        default:
          throw new Error();
      }
    }
    
    function Counter() {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
        <>
          Count: {state.count}
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </>
      );
    }
    ```
    
- 指定初始化值
    
    ```jsx
    const [state, dispatch] = useReducer(reducer, {count: initialCount});
    ```
    
- 惰性初始化
    
    计算 state 的逻辑提取到 reducer 外部，这也为将来对重置 state 的 action 做处理
    
    ```jsx
    function init(initialCount) {
      return { count: initialCount };
    }
    function reducer(state, action) {
      switch (action.type) {
        case "increment":
          return { count: state.count + 1 };
        case "decrement":
          return { count: state.count - 1 };
        case "reset":
          return init(action.payload);
        default:
          throw new Error();
      }
    }
    
    function Counter({ initialCount }) {
      const [state, dispatch] = useReducer(reducer, initialCount, init);
      return (
        <>
          Count: {state.count}
          <button
            onClick={() => dispatch({ type: "reset", payload: initialCount })}
          >
            Reset
          </button>
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </>
      );
    }
    ```
    
- 跳过 dispatch
    
    如果 Reducer Hook 的返回值与当前 state 相同，React 将跳过子组件的渲染及effect 的执行。