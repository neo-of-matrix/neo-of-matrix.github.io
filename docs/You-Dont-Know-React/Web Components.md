# Web Components

Web Components 为可复用组件提供了强大的封装，而 React 则提供了声明式的解决方案，使 DOM 与数据保持同步。

### 在 React 中使用 Web Components

```jsx
class HelloMessage extends React.Component {
  render() {
    return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
  }
}
```

- 要访问 Web Components 的命令式 API，你需要使用 `ref` 直接与 DOM 节点进行交互
- 第三方 Web Components，编写 React 组件包装该 Web Components
- Web Components 触发的事件可能无法通过 React 渲染树正确的传递
    
    React 组件中手动添加事件处理器来处理这些事件
    
- 使用className

### 在 Web Components 中使用 React

```jsx
class XSearch extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const name = this.getAttribute('name');
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
  }
}
customElements.define('x-search', XSearch);
```

> 注意：
> 
> 
> 如果使用 Babel 来转换 class，此代码将**不会**起作用。请查阅该 [issue](https://github.com/w3c/webcomponents/issues/587) 了解相关讨论。
> 在加载 Web Components 前请引入 [custom-elements-es5-adapter](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs#custom-elements-es5-adapterjs) 来解决该 issue。
>