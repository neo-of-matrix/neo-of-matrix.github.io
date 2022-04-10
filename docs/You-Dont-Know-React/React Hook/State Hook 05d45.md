# State Hook

`useState` 是允许你在 React 函数组件中添加 state 的 Hook

```jsx
const [state, setState] = useState(initialState);
```

### **声明 State 变量**

`调用 useState` 定义一个 “state 变量”，会被 React 保留

**`useState`** 唯一的参数初始 state可以是任何值

**`useState`** 返回值为：当前 state 以及更新 state 的函数

### **读取 State**

直接读取变量

### **更新 State**

- 调用state函数直接赋值
    
    ```jsx
    const [state, setState] = useState(initialState);
    <button onClick={() => setCount(initialCount)}>Reset</button>
    ```
    
- 函数式更新
    
    ```jsx
    const [state, setState] = useState(initialState);
    <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    // 更新对象
    const [state, setState] = useState({});
    setState(prevState => {
      // 也可以使用 Object.assign
      return {...prevState, ...updatedValues};
    });
    ```
    
- 惰性初始 state
    
    **initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略**
    
    ```jsx
    const [state, setState] = useState(() => {
      const initialState = someExpensiveComputation(props);
      return initialState;
    });
    ```
    
- 跳过 state 更新
    
    如果 State Hook 的返回值与当前 state 相同，React 将跳过子组件的渲染及 effect 的执行，可以获取最新state的值
    
- useState 的正确使用姿势
    - **一个 state 必须是不能通过其它 state/props 直接计算出来，否则就不用定义 state。**
    - **在项目中同一个数据，保证只存储在一个地方。**
        - 不要既存在 redux 中，又在组件中定义了一个 state 存储。
        - 不要既存在父级组件中，又在当前组件中定义了一个 state 存储。
        - 不要既存在 url query 中，又在组件中定义了一个 state 存储。
    - **useState 适当合并**
        
        ```jsx
        const [userInfo, setUserInfo] = useState({
          firstName,
          lastName,
          school,
          age,
          address
        });
        setUserInfo(s=> ({
          ...s,
          fristName,
        }))
        ```