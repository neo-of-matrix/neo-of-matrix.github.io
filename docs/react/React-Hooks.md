---
sidebar_position: 1
---

# React-Hooks

### 不要使用 eslint-plugin-react-hooks 插件，或者可以选择性忽略该插件的警告

### 变量变化时，需要触发 useEffect 函数执行需要把变量放到 deps 数组中

### 在有延迟调用场景时，可以通过 ref 来解决闭包问题

- 使用 [setState 的函数式更新形式](https://zh-hans.reactjs.org/docs/hooks-reference.html#functional-updates)
    
    ```jsx
    function Counter() {
      const [count, setCount] = useState(0);
      useEffect(() => {
        const id = setInterval(() => {
          setCount((c) => c + 1); // ✅ 在这不依赖于外部的 `count` 变量
        }, 1000);
        return () => clearInterval(id);
      }, []); // ✅ 我们的 effect 不使用组件作用域中的任何变量
      return <h1>{count}</h1>;
    }
    ```
    
- 延迟调用场景
    - 使用 setTimeout、setInterval、Promise.then 等
    - useEffect 的卸载函数
    
    ```jsx
    const getUsername = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('John');
        }, 3000);
      })
    }
    
    function Demo() {
      const [count, setCount] = useState(0);
      // setTimeout 会造成闭包问题
      useEffect(() => {
        const timer = setTimeout(() => {
          console.log(count);
        }, 3000);
        return () => {
          clearTimeout(timer);
        }
      }, [])
    
      // setInterval 会造成闭包问题
      useEffect(() => {
        const timer = setInterval(() => {
          console.log(count);
        }, 3000);
        return () => {
          clearInterval(timer);
        }
      }, [])
    
      // Promise.then 会造成闭包问题
      useEffect(() => {
        getUsername().then(() => {
          console.log(count);
        });
      }, [])
    
      // useEffect 卸载函数会造成闭包问题
      useEffect(() => {
        return () => {
          console.log(count);
        }
      }, []);
      return (
        <button
          onClick={() => setCount(c => c + 1)}
        >
          click
        </button>
      )
    }
    ```
    
    ```jsx
    	const [count, setCount] = useState(0);
    // 通过 ref 来记忆最新的 count
    const countRef = useRef(count);
    countRef.current = count;
    	
    useEffect(() => {
      const timer = setTimeout(() => {
        console.log(countRef.current)
      }, 3000);
      return () => {
        clearTimeout(timer);
      }
    }, [])
    ```
    

### 尽量不要用 useCallback

useCallback 是要和 shouldComponentUpdate/React.memo 配套使用

### useMemo 建议大量使用

### useState

```jsx
const [state, setState] = useState(initialState);
<button onClick={() => setCount(initialCount)}>Reset</button>
<button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
```

- 惰性初始 state
    
    initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略
    
    ```jsx
    const [state, setState] = useState(() => {
      const initialState = someExpensiveComputation(props);
      return initialState;
    });
    ```
    
- 跳过 state 更新
    
    调用 State Hook 的更新函数并传入当前的 state 时，React 将跳过子组件的渲染及 effect 的执行，可以获取最新state的值
    
- useState 的正确使用姿势
    - 一个 state 必须不能通过其它 state/props 直接计算出来，否则就不用定义 state。
    - 在项目中同一个数据，保证只存储在一个地方。
    - 不要既存在 redux 中，又在组件中定义了一个 state 存储。
    - 不要既存在父级组件中，又在当前组件中定义了一个 state 存储。
    - 不要既存在 url query 中，又在组件中定义了一个 state 存储。
    - useState 适当合并
        
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
        

### useEffect

- 注意点
    - 需要在渲染后执行某些操作，改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作
    - 第一次渲染之后和每次更新之后都会执行
    - 每次我们重新渲染，都会生成*新的* effect   任何新的渲染前执行
    - 按照 effect 声明的顺序依次调用组件中的*每一个* effectz
    - 调用一个新的 effect 之前对前一个 effect 进行清理
    - 数组中有多个元素，即使只有一个元素发生变化，React 也会执行 effect
    - React 会在组件卸载的时候执行清除操作   每次重新渲染时都会执行
- 建议
    
    Hook 按照代码的用途分离他们
    
- 依赖列表优化
    - 如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React **跳过**对 effect 的调用，只要传递数组作为 `useEffect`的第二个可选参数即可，对于有清除操作的 effect 同样适用
    - 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数
    - 确保数组中包含了所有外部作用域中会发生变化且在 effect 中使用的变量（包括 props、state，以及任何由它们衍生而来的东西），否则你的代码会引用到先前渲染中的旧变量
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
        
- effect内部调用函数使用方法
    - 当函数（以及它所调用的函数）  包括 props、state，以及任何由它们衍生而来的东西  把那个函数移动到你的 effect *内部*
        
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
    - 如果你所调用的方法是一个纯计算，并且可以在渲染时调用，你可以 转而在 effect 之外调用它， 并让 effect 依赖于它的返回值
    - 万不得已的情况下，你可以 把函数加入 effect 的依赖但 把它的定义包裹进 [useCallback](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback) Hook。这就确保了它不随渲染而改变，除非它自身的依赖发生了改变：
        
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
        

- 在所有的 DOM 变更之后同步调用 effect
- 可以使用它来读取 DOM 布局并同步触发重渲染
- 在浏览器执行绘制之前，`useLayoutEffect` 内部的更新计划将被同步刷新
- 如果你使用服务端渲染，请记住，*无论* `useLayoutEffect` *还是* `useEffect` 都无法在 Javascript 代码加载完成之前执行
    - 服务端渲染组件将代码逻辑移至 `useEffect`中（如果首次渲染不需要这段逻辑的情况下）
    - 该组件延迟到客户端渲染完成后再显示（如果直到 `useLayoutEffect`  执行之前 HTML 都显示错乱的情况下）
- 若要从服务端渲染的 HTML 中排除依赖布局 effect 的组件，使用 `useEffect(() => { setShowChild(true); }, [])` 延迟展示组件，UI避免错乱。