# React.Component

### **概览**

React 的组件可以定义为 class 或函数的形式

如需定义 class 组件，需要继承 `React.Component`

在 `React.Component`的子类中有个必须定义的 `[render()](https://zh-hans.reactjs.org/docs/react-component.html#render)`函数

### **组件的生命周期**

**[生命周期图谱](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)**

[React Lifecycle Methods diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

挂载

当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

- **`[constructor()](https://zh-hans.reactjs.org/docs/react-component.html#constructor)`**
    - 通过给 `this.state` 赋值对象来初始化[内部 state](https://zh-hans.reactjs.org/docs/state-and-lifecycle.html)
    - 为[事件处理函数](https://zh-hans.reactjs.org/docs/handling-events.html)绑定实例
    - 在 React 组件挂载之前，会调用它的构造函数
    - 其他语句之前调用 `super(props)`，否则，`this.props` 在构造函数中可能会出现未定义的 bug
    - 在 `constructor()` 函数中**不要调用 `setState()` 方法**
    - 不要在构造函数中引入任何副作用或订阅
        
        放在 `componentDidMount` 中
        
    - **避免将 props 的值复制给 state**
        - 产生了 bug，更新 prop 中的 `color` 时，state 不会改变
        - **刻意忽略 prop 更新的情况下使用**
            - prop 添加`initial` 或 `default` 前缀
            - 通过[修改它的 `key`](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key)，以强制“重置”其内部 state
- `static getDerivedStateFromProps(props, state)`
    - 调用 render 方法之前调用
    - 返回一个对象来更新 state，如果返回 `null` 则不更新任何内容
    - state 的值在任何时候都取决于 props `<Transition>` 组件
    - 无权访问组件实例
        
        通过提取组件 props 的纯函数及 class 之外的状态，在`getDerivedStateFromProps()`
        和其他 class 方法之间重用代码
        
    - [替代方案](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)
        - 如果你需要**执行副作用**（例如，数据提取或动画）以响应 props 中的更改，请改用 `[componentDidUpdate](https://zh-hans.reactjs.org/docs/react-component.html#componentdidupdate)`
        - 如果只想在 **prop 更改时重新计算某些数据**，[请使用 memoization helper 代替](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)
        - 如果你想**在 prop 更改时“重置”某些 state**，请考虑使组件[完全受控](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component)或[使用 `key` 使组件完全不受控](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) 代替
- **`[render()](https://zh-hans.reactjs.org/docs/react-component.html#render)`**
    - 获取 `this.props` 和 `this.state`，并返回以下类型
        - React 元素
            - <div /> 会被 React 渲染为 DOM 节点
            - <MyComponent /> 会被 React 渲染为自定义组件
        - 数组或 fragments
            
            使得 render 方法可以返回多个元素
            
        - Portals
            
            可以渲染子节点到不同的 DOM 子树中
            
        - 字符串或数值类型
        DOM 中会被渲染为文本节点
        - 布尔类型或 null
        什么都不渲染
    - 纯函数，这意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互
    - `shouldComponentUpdate()` 返回 false，则不会调用 `render()`
- **`[componentDidMount()](https://zh-hans.reactjs.org/docs/react-component.html#componentdidmount)`**
    - 组件挂载后（插入 DOM 树中）立即调用
    - 依赖于 DOM 节点的初始化，modals 和 tooltips
    - 网络请求获取数据
    - 添加订阅
    - **直接调用 `setState()`，调用两次render**，但此渲染会发生在浏览器更新屏幕之前，导致性能问题

更新

当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

- `static getDerivedStateFromProps(props, state)`
- `shouldComponentUpdate(nextProps, nextState)`
    - 根据 `shouldComponentUpdate()` 的返回值判断是否调用render
    - 默认行为是 state 和 props 每次发生变化组件都会重新渲染
    - 首次渲染或使用 `forceUpdate()` 时不会调用该方法
    - `this.props` 与 `nextProps` 以及 `this.state` 与`nextState` 进行比较，并返回 `false` 以告知 React 可以跳过更新
    - 返回 `false` 并不会阻止子组件在 state 更改时重新渲染
    - 不要进行深层比较或使用 `JSON.stringify()`
    - 不会调用 `[render()](https://zh-hans.reactjs.org/docs/react-component.html#render)` 和 `[componentDidUpdate()](https://zh-hans.reactjs.org/docs/react-component.html#componentdidupdate)`
- **`[render()](https://zh-hans.reactjs.org/docs/react-component.html#render)`**
- `getSnapshotBeforeUpdate(prevProps, prevState)`
    - render 和 commit 之间调用
    - 捕获DOM一些信息（例如，滚动位置）
    - 返回值将作为参数传递给 `componentDidUpdate()`
- `componentDidUpdate(prevProps, prevState, snapshot)`
    - 首次渲染不会执行此方法
    - 对 DOM 进行操作
    - 更新前后的 props 进行了比较进行网络请求
    - 调用 `setState()` 增加判断条件，导致额外的重新渲染
    - `snapshot` 默认为 undefined

卸载

当组件从 DOM 中移除时会调用如下方法：

- **`[componentWillUnmount()](https://zh-hans.reactjs.org/docs/react-component.html#componentwillunmount)`**
    - 组件卸载及销毁之前直接调用
    - 清除 timer，取消网络请求或清除在 `componentDidMount()` 中创建的订阅

错误处理

当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

- `static getDerivedStateFromError(error)`
    - 后代组件抛出错误后被调用
    - 抛出的错误作为参数
    - 返回一个值以更新 state
    - 不允许出现副作用
- `componentDidCatch(error, info)`
    - 后代组件抛出错误后被调用
    - 在“提交”阶段被调用，因此允许上传错误信息
    - `error` —— 抛出的错误
    - `info`.`componentStack`  —— [有关组件引发错误的栈信息](https://zh-hans.reactjs.org/docs/error-boundaries.html#component-stack-traces)
    - React 的开发和生产构建版本在 `componentDidCatch()` 的方式上有轻微差别
        - 在开发模式下，`componentDidCatch()`处理错误以后错误还是会冒泡至 `window`
        - 在生产模式下，错误不会冒泡

### 其他 APIs

组件还提供了一些额外的 API：

- `setState(updater, [callback])`
    - `setState()` 将对组件 state 的更改排入队列，并通知 React 需要使用更新后的 state 重新渲染此组件及其子组件
    - 并不总是立即更新组件
        - `componentDidUpdate` 或者 `setState` 的回调函数（`setState(updater, callback)`）
    - `updater` 函数
        - `(state, props) => stateChange`
        - updater 的返回值会与 `state` 进行浅合并
    - updater 对象
        - 传入的对象浅层合并到新的 state 中
    - `callback` 函数
        - `setState` 完成合并并重新渲染组件后执行
        - 使用 `componentDidUpdate()` 来代替此方式
- `component.forceUpdate(callback)`
    - `render()` 方法依赖于其他数据，则可以调用 `forceUpdate()` 强制让组件重新渲染
    - 跳过该组件的 `shouldComponentUpdate()`
    - 子组件会触发正常的生命周期方法

class 属性

- `[defaultProps](https://zh-hans.reactjs.org/docs/react-component.html#defaultprops)`
    
    Class 组件添加默认 props
    
- `[displayName](https://zh-hans.reactjs.org/docs/react-component.html#displayname)`
    
    显示名称或创建高阶组件
    

实例属性

- `[props](https://zh-hans.reactjs.org/docs/react-component.html#props)`
    
    `this.props.children` 是一个特殊的 prop，通常由 JSX 表达式中的子组件组成，而非组件本身定义
    
- `[state](https://zh-hans.reactjs.org/docs/react-component.html#state)`
    
    如果某些值未用于渲染或数据流（例如，计时器 ID），则不必将其设置为 state。此类值可以在组件实例上定义。