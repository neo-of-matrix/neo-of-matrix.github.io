# useRef

```jsx
const refContainer = useRef(initialValue);
// refContainer.current === initialValue
```

- ref 对象在组件的整个生命周期内持续存在
- 可以[很方便地保存任何可变值](https://zh-hans.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables)，类似于一个 class 的实例属性
- 事件处理器中清除循环定时器
    
    ```jsx
    function Timer() {
      const intervalRef = useRef();
      useEffect(() => {
        const id = setInterval(() => {});
        intervalRef.current = id;
        return () => {
          clearInterval(intervalRef.current);
        };
      });
      function handleCancelClick() {
        clearInterval(intervalRef.current);
      }
    }
    ```
    
- 变更 `.current` 属性不会引发组件重新渲染
- ref 是一个对象时它并不会把当前 ref 的值的变化通知，如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用[回调 ref](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node) 来实现
    
    ```jsx
    function MeasureExample() {
      const [height, setHeight] = useState(0);
    
      const measuredRef = useCallback(node => {
        if (node !== null) {
          setHeight(node.getBoundingClientRect().height);
        }
      }, []);
    
      return (
        <>
          <h1 ref={measuredRef}>Hello, world</h1>
          <h2>The above header is {Math.round(height)}px tall</h2>
        </>
      );
    }
    ```