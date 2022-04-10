# Effect Hook

### 概念

*Effect Hook* 需要在渲染后执行某些操作，改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作（`componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount`）

```jsx
useEffect(didUpdate);
```

### **effect 的执行时机**

- 传给 `useEffect` 的函数render之后执行
- `useEffect` 第一次render渲染之后和每次更新之后都会执行，为了解决没有使用`componentDidUpdate`引发的问题
- 特殊情况
    - 用户操作事件和`[flushSync](https://zh-hans.reactjs.org/docs/react-dom.html#flushsync)` 包装的更新结果，传递给 `useEffect` 的函数将在屏幕布局和绘制之前同步执行
        
        这只影响传递给 `useEffect` 的函数被调用时 — 在这些 effect 中执行的更新仍会被推迟
        

### **effect 的条件执行**

effect 所依赖的值数组

- 空数组，只运行一次的 effect（仅在组件挂载和卸载时执行）
- 有值数组，只有声明的变量变化时才会执行
    - seEffect 函数使用了并且会被改变（包括 props、state，以及任何由它们衍生而来的东西），才需要放到 deps 数组中，否则你的代码会引用到先前渲染中的旧变量

### **无需清除的 effect**

- `useEffect` 放在组件内部可以在 effect 中直接访问  state 变量（或其他 props）
    
    Hook 使用了 JavaScript 的闭包机制
    
- 每次重新渲染，都会生成*新的* effect
- `useEffect` 不会阻塞浏览器更新屏幕

### **清除 effect**

- **effect** 返回一个清除函数
    - React 会在组件卸载的时候执行清除操作
    - 调用一个新的 effect 之前执行清除函数清理前一个 effect

```jsx
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // 清除订阅
    subscription.unsubscribe();
  };
});
```

### **使用 Effect 的提示**

- 使用多个 Effect 按照代码的用途实现关注点分离
    
    ```jsx
    function FriendStatusWithCounter(props) {
      const [count, setCount] = useState(0);
      useEffect(() => {
        document.title = `You clicked ${count} times`;
      });
      const [isOnline, setIsOnline] = useState(null);
      useEffect(() => {
        function handleStatusChange(status) {
          setIsOnline(status.isOnline);
        }
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
          ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
      });
    }
    ```
    
- 按照 effect 声明的顺序依次调用组件中的*每一个* effect
    
    ```jsx
    function App() {
      useEffect(() => {console.log(1)});
      useEffect(() => {console.log(2)});
      useEffect(() => {console.log(3)});
      return <div />;
    }
    ```
    
- 依赖列表
    - 在一些更加复杂的场景中（比如一个 state 依赖于另一个 state），尝试用 [useReducer Hook](https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer) 把 state 更新逻辑移到 effect 之外
    - 万不得已的情况下，如果你想要类似 class 中的 this 的功能，你可以 [使用一个 ref](https://zh-hans.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables) 来保存一个可变的变量
        
        ```jsx
        function Example(props) {
          // 把最新的 props 保存在一个 ref 中
          const latestProps = useRef(props);
          useEffect(() => {
            latestProps.current = props;
          });
          useEffect(() => {
            function tick() {
              // 在任何时候读取最新的 props
              console.log(latestProps.current);
            }
            const id = setInterval(tick, 1000);
            return () => clearInterval(id);
          }, []); // 这个 effect 从不会重新执行
        }
        ```
        
- effect和函数
    - 当函数（以及它所调用的函数）  使用了 props、state，以及任何由它们衍生而来的东西，就把那个函数移动到你的 effect *内部*
        
        ```jsx
        function ProductPage({ productId }) {
          const [product, setProduct] = useState(null);
        
          useEffect(() => {
            // 把这个函数移动到 effect 内部后，我们可以清楚地看到它用到的值。
            async function fetchProduct() {
              const response = await fetch("http://myapi/product/" + productId);
              const json = await response.json();
              setProduct(json);
            }
            fetchProduct();
          }, [productId]); // ✅ 有效，因为我们的 effect 只用到了 productId  // ...
        }
        ```
        
    - 你可以尝试把那个函数移动到你的组件之外，不用出现在依赖列表
    - 如果你所调用的方法是一个纯计算，并且可以在渲染时调用，在 effect 之外调用它， 并让 effect 依赖于它的返回值
    - 万不得已的情况下，[useCallback](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback) Hook定义一个函数，添加依赖列表传递给组件，然后 effect 里面调用它并且把这个函数作为依赖数组：
        
        ```jsx
        function ProductPage({ productId }) {
          // ✅ 用 useCallback 包裹以避免随渲染发生改变
          const fetchProduct = useCallback(() => {
            // ... Does something with productId ...
          }, [productId]); // ✅ useCallback 的所有依赖都被指定了
          return <ProductDetails fetchProduct={fetchProduct} />;
        }
        
        function ProductDetails({ fetchProduct }) {
          useEffect(() => {
            fetchProduct();
          }, [fetchProduct]); // ✅ useEffect 的所有依赖都被指定了
          // ...
        }
        ```
        
    - effect 里面的函数包含定时器，使用函数式更新state
        
        ```jsx
        function Counter() {
          const [count, setCount] = useState(0);
        
          useEffect(() => {
            const id = setInterval(() => {
              setCount(c => c + 1); // ✅ This doesn't depend on `count` variable outside    }, 1000);
            return () => clearInterval(id);
          }, []); // ✅ Our effect doesn't use any variables in the component scope
          return <h1>{count}</h1>;
        }
        ```
        
    - hook使用this
    
    ```jsx
    function Example(props) {
      // Keep latest props in a ref.
      const latestProps = useRef(props);
      useEffect(() => {
        latestProps.current = props;
      });
      useEffect(() => {
        function tick() {
          // Read latest props at any time
          console.log(latestProps.current);
        }
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
      }, []); // This effect never re-runs
    }
    ```
    

[How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data/)