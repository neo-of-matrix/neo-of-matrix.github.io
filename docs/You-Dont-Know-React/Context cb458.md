# Context

### 概念

- 共享那些对于一个组件树而言是“全局”的数据
- 只是想避免层层传递一些属性，使用[组件组合（component composition）](https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html)
    - props多个层级传递，替换为props传递整个组件
    - 传递多个子组件，甚至会为这些子组件（children）封装多个单独的“接口（slots）
        - 需要将子组件和直接关联的父组件解耦
        - [render props](https://zh-hans.reactjs.org/docs/render-props.html)
- locale，theme，或者一些缓存数据

### API

**`React.createContext`**

- 只有当组件所处的树中没有匹配到 Provider 时，其 `defaultValue` 参数才会生效
- `undefined` 传递给 Provider 的 value 时，消费组件的 `defaultValue` 不会生效

```jsx
const MyContext = React.createContext(defaultValue);
```

**`Context.Provider`**

- 多个 Provider 嵌套使用，里层的会覆盖外层的数据
- Provider 的 `value` 值发生变化时，它内部的所有消费组件都会重新渲染
- 从 Provider 到其内部 consumer 组件（包括 [.contextType](https://zh-hans.reactjs.org/docs/context.html#classcontexttype) 和 [useContext](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext)）的传播不受制于 `shouldComponentUpdate` 函数，因此当 consumer 组件在其祖先组件跳过更新的情况下也能更新
- 当传递对象给 `value` 时，检测变化的方式会导致一些问题 `[Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description)`

```jsx
<MyContext.Provider value={/* 某个值 */}>
```

**`Class.contextType`**

```jsx
MyClass.contextType = MyContext;
```

```jsx
class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* 基于这个值进行渲染工作 */
  }
}
```

**`Context.Consumer`**

[函数作为子元素（function as a child）](https://zh-hans.reactjs.org/docs/render-props.html#using-props-other-than-render)

传递给函数的 `value` 值等价于组件树上方离这个 context 最近的 Provider 提供的 `value` 值

```jsx
<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>
```

**`Context.displayName`**

```jsx
MyContext.displayName = 'MyDisplayName';
```

### 注意点

- 动态 Context
    
    **Context** `defaultValue` 设置为 `state`，动态改变
    
- 在嵌套组件中更新 Context
    
    **Context** `defaultValue` 设置为对象函数
    
- 消费多个 Context
    
    需要使每一个 consumers 组件的 context 在组件树中成为一个单独的节点