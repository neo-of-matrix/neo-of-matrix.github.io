# Refs

使用 DOM 节点或 render 方法中创建的 React 元素

### 何时使用 Refs

- 管理焦点，文本选择或媒体播放
- 触发强制动画
- 集成第三方 DOM 库

### 注意

- 避免使用 refs 来做任何可以通过声明式实现来完成的事情
- 勿过度使用 Refs尽量使用state提升

### **创建 Refs**

- `React.createRef()`, `useRef` 创建 `Refs`
- 将 `Refs` 分配给实例属性
- 使用 `ref` 属性附加到 React 元素
- 整个组件声明周期内使用它们

### **访问 Refs**

```jsx
const node = this.myRef.current;
```

ref 的值根据节点的类型而有所不同

- 当 `ref` 属性用于 HTML 元素时，使用 `React.createRef()` 创建的 `ref` 接收底层 DOM 元素作为其 `current` 属性
    - React 会在组件挂载时给 `current` 属性传入 DOM 元素，
    - 在组件卸载时传入 `null` 值
    - `ref` 会在 `componentDidMount` 或 `componentDidUpdate` 生命周期钩子触发前更新
- 当 `ref` 属性用于自定义 class 组件时，`ref` 对象接收组件的挂载实例作为其 `current` 属性
    - 用 ref 来获取组件
- 你不能在函数组件上使用 `ref` 属性，因为他们没有实例
    
    可以在函数组件内部使用 `ref` 属性指向一个 DOM 元素或 class 组件
    
    ```jsx
    function CustomTextInput(props) {
      // 这里必须声明 textInput，这样 ref 才可以引用它
      const textInput = useRef(null);
      function handleClick() {
        textInput.current.focus();
      }
      return (
        <div>
          <input type="text" ref={textInput} />
          <input type="button" value="Focus the text input" onClick={handleClick} />
        </div>
      );
    }
    ```
    

### **子组件 DOM Refs 暴露给父组件**

触发焦点或测量子 DOM 节点的大小或位置

- [ref 转发](https://zh-hans.reactjs.org/docs/forwarding-refs.html)
    
    更小力度封装组件
    
    - `React.forwardRef` 包裹子组件 `Render` 方法
    - 父组件创建 `refs` 传入子组件 `ref` 属性
    - 可以转发 `refs` 到 `class` 组件实例
    
    ```jsx
    const FancyButton = React.forwardRef((props, ref) => (
      <button ref={ref} className="FancyButton">
        {props.children}
      </button>
    ));
    
    // 你可以直接获取 DOM button 的 ref：
    const ref = React.createRef();
    <FancyButton ref={ref}>Click me!</FancyButton>;
    ```
    
    - 在高阶组件中转发 refs
        - HOC 添加 ref，该 ref 将引用最外层的容器组件
        
        ```jsx
        function logProps(Component) {
          class LogProps extends React.Component {
            componentDidUpdate(prevProps) {
              console.log("old props:", prevProps);
              console.log("new props:", this.props);
            }
        
            render() {
              const { forwardedRef, ...rest } = this.props;
              // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
              return <Component ref={forwardedRef} {...rest} />;
            }
          }
        
          // 注意 React.forwardRef 回调的第二个参数 “ref”。
          // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
          // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
          return React.forwardRef((props, ref) => {
            return <LogProps {...props} forwardedRef={ref} />;
          });
        }
        ```
        
        在 DevTools 中显示自定义名称
        
        - 函数组件命名render函数
        
        ```jsx
        const WrappedComponent = React.forwardRef(function myFunction(props, ref) {
          return <LogProps {...props} forwardedRef={ref} />;
        });
        ```
        
        - class组件使用`displayName`
        
        ```jsx
        function logProps(Component) {
          class LogProps extends React.Component {
            // ...
          }
          function forwardRef(props, ref) {
            return <LogProps {...props} forwardedRef={ref} />;
          }
          // 在 DevTools 中为该组件提供一个更有用的显示名。
          // 例如 “ForwardRef(logProps(MyComponent))”
          const name = Component.displayName || Component.name;
          forwardRef.displayName = `logProps(${name})`;
          return React.forwardRef(forwardRef);
        }
        ```
        
- 比 `ref` 转发更高的灵活性
    
    通过 `props` 明文传递 `ref` 给子组件的 `ref` 属性
    
    ```jsx
    function CustomTextInput(props) {
      return (
        <div>
          <input ref={props.inputRef} />
        </div>
      );
    }
    
    class Parent extends React.Component {
      constructor(props) {
        super(props);
        this.inputElement = React.createRef();
      }
      render() {
        return <CustomTextInput inputRef={this.inputElement} />;
      }
    }
    ```
    
- 子组件的实现没有控制权使用 `[findDOMNode()](https://zh-hans.reactjs.org/docs/react-dom.html#finddomnode)`
    - 参数是DOM节点或者React元素 `refs`
    - 获取表单字段的值或者执行 DOM 检测组件渲染的内容为 `null` 或 `false` 时，`findDOMNode` 返回 `null`
    - 组件渲染的是字符串时，`findDOMNode` 返回的是字符串对应的 DOM 节点
    - 组件返回有多个子节点的 fragment，`findDOMNode` 会返回第一个非空子节点对应的 DOM 节点
    - `findDOMNode` 只在已挂载的组件上可用（即，已经放置在 DOM 中的组件）
    - `findDOMNode` 不能用于函数组件

```jsx
ReactDOM.findDOMNode(component)
```

### 回调 Refs

精细地控制何时 refs 被设置和解除

- 父组件传递一个回调函数给子组件 `ref` 属性
- 函数参数是React 组件实例或 HTML DOM 元素
- 赋值给组件实例属性
- React 将在组件挂载时，会调用 `ref` 回调函数并传入 DOM 元素，
- 卸载时调用它并传入 `null`
- 在 `componentDidMount` 或 `componentDidUpdate` 触发前，React 会保证 refs 一定是最新的
- `ref` 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;
    this.setTextInputRef = (element) => {
      this.textInput = element;
    };
    this.focusTextInput = () => {
      // 使用原生 DOM API 使 text 输入框获得焦点
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput();
  }

  render() {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

```jsx
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}
class Parent extends React.Component {
  render() {
    return <CustomTextInput inputRef={(el) => (this.inputElement = el)} />;
  }
}
```