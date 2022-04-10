# ReactDOMClient

```jsx
import * as ReactDOM from 'react-dom/client';
```

### **`createRoot()`**

```jsx
const root = createRoot(container[, options]);
root.render(element);
root.unmount();
```

创建root节点，返回root节点，包含render方法

控制container里面内容

不会修改container节点

options

- `onRecoverableError`
    
    React从错误恢复时执行
    
- `identifierPrefix`
    - id前缀，React.useId
    - 服务端必须是相同前缀

### **`hydrateRoot()`**

```jsx
hydrateRoot(container, element[, options])
```

填充container，里面内容通过`[ReactDOMServer](https://reactjs.org/docs/react-dom-server.html)`渲染

options

- `onRecoverableError`
    
    React从错误恢复时执行
    
- `identifierPrefix`
    - id前缀，React.useId
    - 服务端必须是相同前缀

一定解决不匹配的错误提示