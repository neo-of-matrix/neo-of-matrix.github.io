# API

### **组件**

- **`React.Component`**React 组件的基类
- **`React.PureComponent`**
    - props 和 state 较为简单时，使用 `React.PureComponent`
    - 在深层数据结构发生变化时调用 `[forceUpdate()](https://zh-hans.reactjs.org/docs/react-component.html#forceupdate)`来确保组件被正确地更新
    - 使用 [immutable 对象](https://facebook.github.io/immutable-js/)加速嵌套数据的比较
- **`React.memo`**
    
    ```jsx
    const MyComponent = React.memo(function MyComponent(props) {
      /* 使用 props 渲染 */
    });
    ```
    
    - 组件在相同 props 的情况下渲染相同的结果使用
    - React 将跳过渲染组件的操作并直接复用最近一次渲染的结果
    - 函数组件被 `React.memo` 包裹，如果使用 `[useState](https://zh-hans.reactjs.org/docs/hooks-state.html)`，`[useReducer](https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer)` 或 `[useContext](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext)` 的 Hook，当 state 或 context 发生变化时，仍会重新渲染
    - 默认情况下其只会对复杂对象做浅层对比
    - 控制对比过程，第二个参数传入函数实现
        
        ```jsx
        function MyComponent(props) {
            /* 使用 props 渲染 */
        }
        function areEqual(prevProps, nextProps) {
            /*
            如果把 nextProps 传入 render 方法的返回结果与
            将 prevProps 传入 render 方法的返回结果一致则返回 true，
            否则返回 false
            */
        }
        export default React.memo(MyComponent, areEqual);
        ```
        

### **创建 React 元素**

**`createElement()`**

```jsx
React.createElement(
  type,
  [props],
  [...children]
)
```

type：标签名、组件名、React fragment

props：props对象

children：DOM结构、组件名、数组

## **转换元素**

- `[cloneElement()](https://zh-hans.reactjs.org/docs/react-api.html#cloneelement)`
    
    克隆element元素
    
    config定义新props，key，ref，如果没有定义使用原始元素props，key，ref
    
    ```jsx
    React.cloneElement(
      element,
      [config],
      [...children]
    )
    <element.type {...element.props} {...props}>{children}</element.type>
    ```
    
- `[isValidElement()](https://zh-hans.reactjs.org/docs/react-api.html#isvalidelement)`
    
    验证对象是否为 React 元素
    
    ```jsx
    React.isValidElement(object)
    ```
    

### `[React.Children](https://zh-hans.reactjs.org/docs/react-api.html#reactchildren)`相关函数

处理 `this.props.children`

- `React.Children.map(children, function[(thisArg)])`
    - 如果 `children` 是一个数组，它将被遍历并为数组中的每个子节点调用该函数。
    - 如果子节点为 `null` 或是 `undefined`，则此方法将返回 `null` 或是 `undefined`，而不会返回数组
    - 如果 `children` 是一个 `Fragment` 对象，它将被视为单一子节点的情况处理，而不会被遍历
- `React.Children.forEach(children, function[(thisArg)])`
- `React.Children.count(children)`
- `React.Children.only(children)`
    - 验证 `children` 是否只有一个子节点（一个 React 元素），如果有则返回它，否则此方法会抛出错误
    - `React.Children.only()` 不接受 `[React.Children.map()](https://zh-hans.reactjs.org/docs/react-api.html#reactchildrenmap)` 的返回值，因为它是一个数组而并不是 React 元素
- `React.Children.toArray(children)`
    - 将 `children` 这个复杂的数据结构以数组的方式扁平展开并返回，并为每个子节点分配一个 key
    - 向下传递 `this.props.children` 之前对内容重新排序或获取子集

### **Fragments**

`[React.Fragment](https://zh-hans.reactjs.org/docs/react-api.html#reactfragment)`****

不额外创建 DOM 元素的情况下，让 `render()` 方法中返回多个元素

### **Refs**

- `[React.createRef](https://zh-hans.reactjs.org/docs/react-api.html#reactcreateref)`
    
    创建一个能够通过 ref 属性附加到 React 元素的 [ref](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html)
    
- `[React.forwardRef](https://zh-hans.reactjs.org/docs/react-api.html#reactforwardref)`
    - [转发 refs 到 DOM 组件](https://zh-hans.reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components)
    - [在高阶组件中转发 refs](https://zh-hans.reactjs.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components)

### **Suspense**

- `[React.lazy](https://zh-hans.reactjs.org/docs/react-api.html#reactlazy)`
    
    初次渲染时未用到的组件延迟加载
    
- `[React.Suspense](https://zh-hans.reactjs.org/docs/react-api.html#reactsuspense)`
    
    ```jsx
    // 该组件是动态加载的
    const OtherComponent = React.lazy(() => import('./OtherComponent'));
    
    function MyComponent() {
      return (
        // 显示 <Spinner> 组件直至 OtherComponent 加载完成
        <React.Suspense fallback={<Spinner />}>
          <div>
            <OtherComponent />
          </div>
        </React.Suspense>
      );
    }
    ```
    
    - 添加loading效果
    - 子元素必须是 `React.lazy` 包裹的组件
    - 尚未在 `ReactDOMServer` 中支持
    

[****React.Component****](API%20946e1/React%20Comp%2019041.md)

[****ReactDOM****](API%20946e1/ReactDOM%209da06.md)

[****ReactDOMServer****](API%20946e1/ReactDOMSe%2005b15.md)

[****DOM 元素****](API%20946e1/DOM%20%E5%85%83%E7%B4%A0%20144a3.md)

[****合成事件****](API%20946e1/%E5%90%88%E6%88%90%E4%BA%8B%E4%BB%B6%2049064.md)

[****Test Utilities****](API%20946e1/Test%20Utili%2057594.md)

[****Test Renderer****](API%20946e1/Test%20Rende%20001ad.md)

[****JavaScript 环境要求****](API%20946e1/JavaScript%20a1d6b.md)