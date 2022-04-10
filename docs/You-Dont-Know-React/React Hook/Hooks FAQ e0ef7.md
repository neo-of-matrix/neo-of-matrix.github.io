# Hooks FAQ

### **[采纳策略](https://zh-hans.reactjs.org/docs/hooks-faq.html#adoption-strategy)**

- 版本支持
    
    16.8.0 开始支持
    
    ```jsx
    React DOM
    React Native
    React DOM Server
    React Test Renderer
    React Shallow Rendere
    ```
    
- hook 不支持`getSnapshotBeforeUpdate`，`getDerivedStateFromError` 和 `componentDidCatch` 生命周期
- Hook  Redux `connect()` 和 React Router
    
    React Redux 从 v7.1.0 开始[支持 Hook API](https://react-redux.js.org/api/hooks) 并暴露了 `useDispatch` 和 `useSelector` 等 hook
    
    React Router 从 v5.1 开始[支持 hook](https://reacttraining.com/react-router/web/api/Hooks)
    
- lint规则
    - 对 Hook 的调用要么在一个`大驼峰法`命名的函数（视作一个组件）内部，要么在另一个 `useSomething` 函数（视作一个自定义 Hook）中。
    - Hook 在每次渲染时都按照相同的顺序被调用。

### **[从 Class 迁移到 Hook](https://zh-hans.reactjs.org/docs/hooks-faq.html#from-classes-to-hooks)**

- **生命周期对应 Hook**
    - `constructor`：函数组件不需要构造函数
        - 你可以通过调用 `[useState](https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate)` 来初始化 state
        - 如果计算的代价比较昂贵，你可以传一个函数给 `useState`
    - `getDerivedStateFromProps`：改为 [在渲染时](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops) 安排一次更新
    - `shouldComponentUpdate`：`React.memo`
    - `render`：这是函数组件体本身
    - `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`：`[useEffect` Hook](https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect) 可以表达所有这些(包括 [不那么](https://zh-hans.reactjs.org/docs/hooks-faq.html#can-i-skip-an-effect-on-updates)[常见](https://zh-hans.reactjs.org/docs/hooks-faq.html#can-i-run-an-effect-only-on-updates) 的场景)的组合。
    - `getSnapshotBeforeUpdate`，`componentDidCatch` 以及 `getDerivedStateFromError`：目前还没有这些方法的 Hook 等价写法
- 实例变量
    
    `[useRef()](https://zh-hans.reactjs.org/docs/hooks-reference.html#useref)`
    
    - 在事件处理器和 effects 中修改 refs
    - 避免在渲染期间设置 refs，[懒加载](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily)
- 单个还是多个 state 变量
    
    尽量拆分state，[用 reducer 来管理它](https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer)或使用自定义 Hook更加方便
    
- 只在更新时运行 effect
    
    [使用一个可变的 ref](https://zh-hans.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables) 手动存储一个布尔值来表示是首次渲染还是后续渲染，然后在你的 effect 中检查这个标识
    
- 获取上一轮的 props 或 state
    
    可以使用 props， state，或任何其他计算出来的值的
    
    ```jsx
    function usePrevious(value) {
      const ref = useRef();
      useEffect(() => {
        ref.current = value;
      });
      return ref.current;
    }
    ```
    
- 陈旧的 props 和 state
    - 事件处理函数和 effect都会获取当初创建时的state和props
        
        获取最新的值使用ref进行存储
        
        ```jsx
        function Example() {
          const [count, setCount] = useState(0);
          const storageRef = useRef();
          useEffect(() => {
            storageRef.current = count;
          });
          function handleAlertClick() {
            setTimeout(() => {
              console.log("You clicked on: " + count);
              console.log(storageRef.current);
            }, 3000);
          }
          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>Click me</button>
              <button onClick={handleAlertClick}>Show alert</button>
            </div>
          );
        }
        ```
        
    - 依赖数组没有正确指定
- 实现 `getDerivedStateFromProps`
    
    ```jsx
    function ScrollView({ row }) {
      const [isScrollingDown, setIsScrollingDown] = useState(false);
      const [prevRow, setPrevRow] = useState(null);
      if (row !== prevRow) {
        // Row 自上次渲染以来发生过改变。更新 isScrollingDown。
        setIsScrollingDown(prevRow !== null && row > prevRow);
        setPrevRow(row);
      }
    
      return `Scrolling down: ${isScrollingDown}`;
    }
    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          row: 0,
        };
        this.onScroll = this.onScroll.bind(this);
      }
      onScroll() {
        this.setState({
          row: 100,
        });
      }
      render() {
        const { row } = this.state;
        return (
          <div>
            <ScrollView row={row} />
            <button onClick={this.onScroll}>滚动</button>
          </div>
        );
      }
    }
    ```
    
- **forceUpdate**
    
    ```jsx
    const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
    function handleClick() {
        forceUpdate();
    }
    ```
    
- 引用一个函数组件
    
    `[useImperativeHandle](https://zh-hans.reactjs.org/docs/hooks-reference.html#useimperativehandle)` Hook
    
- 测量 DOM 节点
    
    使用 [callback ref](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#callback-refs)
    
    ```jsx
    function MeasureExample() {
      const [rect, ref] = useClientRect();  return (
        <>
          <h1 ref={ref}>Hello, world</h1>
          {rect !== null &&
            <h2>The above header is {Math.round(rect.height)}px tall</h2>
          }
        </>
      );
    }
    
    function useClientRect() {
      const [rect, setRect] = useState(null);
      const ref = useCallback(node => {
        if (node !== null) {
          setRect(node.getBoundingClientRect());
        }
      }, []);
      return [rect, ref];
    }
    ```
    

### **[性能优化](https://zh-hans.reactjs.org/docs/hooks-faq.html#performance-optimizations)**

- 更新时跳过 effect
    
    effect 内部使用条件判断
    
- [依赖列表](https://zh-hans.reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect)
作为 `useEffect`、`useLayoutEffect`、`useMemo`、`useCallback` 或 `useImperativeHandle` 的最后一个参数，它必须包含回调中的所有值，并参与 React 数据流。这就包括 props、state，以及任何由它们衍生而来的东西
- effect 的依赖频繁变化
    - 使用 `[setState` 的函数式更新形式](https://zh-hans.reactjs.org/docs/hooks-reference.html#functional-updates)
    - [使用一个 ref](https://zh-hans.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables) 来保存一个可变的变量
- **`shouldComponentUpdate`**
    
    props 进行浅比较
    
    ```jsx
    const Button = React.memo((props) => {
      // 你的组件
    });
    ```
    
- 记忆计算结果
    - 依赖数组 `[a, b]` 自上次赋值以来没有改变过，`useMemo` 会跳过二次调用，只是简单复用它上一次返回的值
        
        ```jsx
        const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
        ```
        
    - 跳过一次子节点的昂贵的重新渲染
        
        ```jsx
        function Parent({ a, b }) {
          // Only re-rendered if `a` changes:
          const child1 = useMemo(() => <Child1 a={a} />, [a]);
          // Only re-rendered if `b` changes:
          const child2 = useMemo(() => <Child2 b={b} />, [b]);
          return (
            <>
              {child1}
              {child2}
            </>
          )
        }
        ```
        
- 惰性初始
    - 创建初始 state
        
        传一个 **函数**给 `useState`
        
        ```jsx
        function Table(props) {
          // ✅ createRows() 只会被调用一次
          const [rows, setRows] = useState(() => createRows(props.count));
          // ...
        }
        ```
        
    - 创建 `useRef()` 的初始值
        
        ```jsx
        function Image(props) {
          const ref = useRef(null);
        
          // ✅ IntersectionObserver 只会被惰性创建一次
          function getObserver() {
            if (ref.current === null) {
              ref.current = new IntersectionObserver(onIntersect);
            }
            return ref.current;
          }
        
          // 当你需要时，调用 getObserver()
          // ...
        }
        ```
        
- 避免向下传递回调
    
    dispatch 和 state 分别指定不同 context
    
    ```jsx
    const initialState = { count: 0 };
    const TodosDispatch = React.createContext(null);
    const TodosState = React.createContext(null);
    
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
    
    function TodosApp() {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
        <TodosState.Provider value={state}>
        <TodosDispatch.Provider value={dispatch}>
          {/* Count: {state.count} */}
          <DeepTree />
        </TodosDispatch.Provider>
        </TodosState.Provider>
      );
    }
    function DeepTree() {
      return <DeepChild />;
    }
    function DeepChild() {
      const state = useContext(TodosState);
      const dispatch = useContext(TodosDispatch);
      return (
        <>
          Count: {state.count}
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </>
      );
    }
    ```
    
- 从 `useCallback` 读取一个经常变化的值
    
    ```jsx
    function Form() {
      const [text, updateText] = useState("");
      // 即便 `text` 变了也会被记住:
      const handleSubmit = useEventCallback(() => {
        alert(text);
      }, [text]);
    
      return (
        <>
          <input value={text} onChange={(e) => updateText(e.target.value)} />
          <ExpensiveTree onSubmit={handleSubmit} />
        </>
      );
    }
    
    function useEventCallback(fn, dependencies) {
      const ref = useRef(() => {
        throw new Error("Cannot call an event handler while rendering.");
      });
    
      useEffect(() => {
        ref.current = fn;
      }, [fn, ...dependencies]);
    
      return useCallback(() => {
        const fn = ref.current;
        return fn();
      }, [ref]);
    }
    ```
    

### **[底层原理](https://zh-hans.reactjs.org/docs/hooks-faq.html#under-the-hood)**

- React 是如何把对 Hook 的调用和组件联系起来的？
    
    每个组件内部都有一个「记忆单元格」列表，当你用 `useState()` 调用一个 Hook 的时候，它会读取当前的单元格，然后把指针移动到下一个。这就是多个 `useState()` 调用会得到各自独立的本地 state 的原因****
    
- Hook 使用了哪些现有技术
    - [react-future](https://github.com/reactjs/react-future/tree/master/07%20-%20Returning%20State) 这个仓库中包含我们对函数式 API 的老旧实验
    - React 社区对 render prop API 的实验，其中包括 [Ryan Florence](https://github.com/ryanflorence) 的 [Reactions Component](https://github.com/reactions/component)
    - [Dominic Gannaway](https://github.com/trueadm) 的用 `[adopt` 关键字](https://gist.github.com/trueadm/17beb64288e30192f3aa29cad0218067) 作为 render props 的语法糖的提案
    - [DisplayScript](http://displayscript.org/introduction.html) 中的 state 变量和 state 单元格
    - ReasonReact 中的 [Reducer components](https://reasonml.github.io/reason-react/docs/en/state-actions-reducer.html)
    - Rx 中的 [Subscriptions](http://reactivex.io/rxjs/class/es6/Subscription.js~Subscription.html)
    - Multicore OCaml 提到的 [Algebraic effects](https://github.com/ocamllabs/ocaml-effects-tutorial#2-effectful-computations-in-a-pure-setting)