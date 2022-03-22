# Render Props

### 概念

- React组件使用 prop 传递回调函数（返回元素）共享代码的简单技术
- 封装组件插入组件，可以拿到封装组件里面的数据

```jsx
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="/cat.jpg"
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/*
            使用 `render`prop 动态决定要渲染的内容，
            而不是给出一个 <Mouse> 渲染结果的静态表示
          */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </div>
    );
  }
}
```

### 将 Render Props 与 React.PureComponent 一起使用

- 使用 render prop 会抵消使用 `[React.PureComponent](https://zh-hans.reactjs.org/docs/react-api.html#reactpurecomponent)` 带来的优势
- 浅比较 props 的时候总会得到 false，并且在这种情况下每一个 `render` 对于 render prop 将会生成一个新的值
- 定义一个 prop 作为实例方法
    
    ```jsx
    class MouseTracker extends React.Component {
      // 定义为实例方法，`this.renderTheCat`始终
      // 当我们在渲染中使用它时，它指的是相同的函数
      renderTheCat(mouse) {
        return <Cat mouse={mouse} />;
      }
    
      render() {
        return (
          <div>
            <h1>Move the mouse around!</h1>
            <Mouse render={this.renderTheCat} />
          </div>
        );
      }
    }
    ```
    
- 如果你无法静态定义 prop
- 例如，因为你需要控制组件 props 和/或 state 的暴露程度
- 使用 `React.Component`