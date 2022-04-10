# Portals

- 将子节点渲染到存在于父组件以外的 DOM 节点
    
    ```jsx
    ReactDOM.createPortal(child, container)
    
    render() {
      // React 并*没有*创建一个新的 div。它只是把子元素渲染到 `domNode` 中。
      // `domNode` 是一个可以在任何位置的有效 DOM 节点。
      return ReactDOM.createPortal(
        this.props.children,
        domNode);
    }
    ```
    
- 父组件有 `overflow: hidden` 或 `z-index` 样式时，但你需要子组件能够在视觉上“跳出”其容器
    
    例如，对话框、悬浮卡以及提示框
    
- Portal 事件冒泡
    
    child 如果没有阻止冒泡，就会冒泡触发父组件以及上面的事件
    
    ```jsx
    // These two containers are siblings in the DOM
    const appRoot = document.getElementById('app-root');
    const modalRoot = document.getElementById('modal-root');
    
    class Modal extends React.Component {
      constructor(props) {
        super(props);
        this.el = document.createElement('div');
      }
    
      componentDidMount() {
        modalRoot.appendChild(this.el);
      }
    
      componentWillUnmount() {
        modalRoot.removeChild(this.el);
      }
      
      render() {
        return ReactDOM.createPortal(
          this.props.children,
          this.el,
        );
      }
    }
    
    class Parent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        // This will fire when the button in Child is clicked,
        // updating Parent's state, even though button
        // is not direct descendant in the DOM. 
        this.setState(prevState => ({
          clicks: prevState.clicks + 1
        }));
      }
    
      render() {
        return (
          <div onClick={this.handleClick}>
            <p>Number of clicks: {this.state.clicks}</p>
            <p>
              Open up the browser DevTools
              to observe that the button
              is not a child of the div
              with the onClick handler.
            </p>
            <Modal>
              <Child />
            </Modal>
          </div>
        );
      }
    }
    
    function Child() {
      // The click event on this button will bubble up to parent,
      // because there is no 'onClick' attribute defined
      return (
        <div className="modal">
          <button>Click</button>
        </div>
      );
    }
    
    ReactDOM.render(<Parent />, appRoot);
    ```