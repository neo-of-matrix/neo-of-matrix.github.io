# JSX

- JSX 防止注入攻击
    
    React DOM 在渲染所有输入内容之前，默认会进行[转义](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html)
    
- 必须引入react

```jsx
import React from 'react';
```

- 可以使用点语法来引用一个 React 组件
- 用户定义的组件必须以大写字母开头
- Props 默认值为 “True”

```jsx
<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />
```

- 属性展开

```jsx
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;}
```

- 函数作为子元素
    
    回调函数作为 `props.children` 进行传递
    
    ```jsx
    // 调用子元素回调 numTimes 次，来重复生成组件
    function Repeat(props) {
      let items = [];
      for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
      }
      return <div>{items}</div>;
    }
    
    function ListOfTenThings() {
      return (
        <Repeat numTimes={10}>
          {(index) => <div key={index}>This is item {index} in the list</div>}
        </Repeat>
      );
    }
    ```
    
- 布尔类型、Null 以及 Undefined 将会忽略
- `React.createElement(component, props, ...children)`语法糖