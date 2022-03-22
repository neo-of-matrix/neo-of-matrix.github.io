# React 组合开发模式

### 通用组件：`Sidebar` 和 `Dialog`

有些组件无法提前知晓它们子组件的具体内容

使用 `children` prop 将子组件传递给父组件

```jsx
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}    </div>
  );
}
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title"> Welcome </h1>
      <p className="Dialog-message"> Thank you for visiting our spacecraft! </p>
    </FancyBorder>
  );
}
```

### slot通过props实现

组件可以接受任意 props，包括基本数据类型，React 元素以及函数

```jsx
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left} </div>
      <div className="SplitPane-right">{props.right} </div>
    </div>
  );
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
```

### 衍生特例组件

根据基础组件衍生组件

```jsx
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title} </h1>
      <p className="Dialog-message">{props.message} </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
  );
}
```

### 组件间复用非 UI 的功能

- 将其提取为一个单独的 JavaScript 模块，如函数、对象或者类
- 组件可以直接引入（import）而无需通过 extend 继承它们