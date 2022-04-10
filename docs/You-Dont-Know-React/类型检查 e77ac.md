# 类型检查

### **PropTypes**

```jsx
npm install --save prop-types
```

```jsx
import PropTypes from "prop-types";

MyComponent.propTypes = {
  // 你可以将属性声明为 JS 原生类型，默认情况下
  // 这些属性都是可选的
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
  // 任何可被渲染的元素（包括数字、字符串、元素或数组）
  // (或 Fragment) 也包含这些类型。
  optionalNode: PropTypes.node,
  // 一个 React 元素。
  optionalElement: PropTypes.element,
  // 一个 React 元素类型（即，MyComponent）。
  optionalElementType: PropTypes.elementType,
  // 枚举类型
  optionalEnum: PropTypes.oneOf(["News", "Photos"]),
  // 一个对象可以是几种类型中的任意一个类型
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message),
  ]),
  // 可以指定一个数组由某一类型的元素组成
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
  // 可以指定一个对象由某一类型的值组成
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),
  // 可以指定一个对象由特定的类型值组成
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),
  // 你可以在任何 PropTypes 属性后面加上 `isRequired`，确保
  // 这个 prop 没有被提供时，会打印警告信息
  requiredFunc: PropTypes.func.isRequired,
  // 任意类型的必需数据
  requiredAny: PropTypes.any.isRequired,
};
```

### **默认 Prop 值**

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
// 指定 props 的默认值：
Greeting.defaultProps = {
  name: "Stranger",
};
// 渲染出 "Hello, Stranger"：
ReactDOM.render(<Greeting />, document.getElementById("example"));
```

```jsx
class Greeting extends React.Component {
  static defaultProps = {
    name: "stranger",
  };

  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}
```