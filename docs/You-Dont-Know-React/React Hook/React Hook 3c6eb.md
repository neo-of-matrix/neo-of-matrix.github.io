# React Hooks

### 延迟调用场景闭包问题

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
