---
slug: /
title: Hooks, State, Closures, and useReducer（译）
authors: [neo-of-matrix]
tags: [译]
---

### 使用 `useState` 和 `context` 可以满足使用，为什么要用 `useReducer` ？

使用 `useReducer` 可以更容易管理 `state`

例子 https://github.com/arackaf/booklist

使用websocket监听事件，根据返回数据的不同状态更新书籍信息

```jsx
const BookEntryList = props => {
  const [pending, setPending] = useState(0);
  const [booksJustSaved, setBooksJustSaved] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(webSocketAddress("/bookEntryWS"));

    ws.onmessage = ({ data }) => {
      let packet = JSON.parse(data);
      if (packet._messageType == "initial") {
        setPending(packet.pending);
      } else if (packet._messageType == "bookAdded") {
        setPending(pending - 1 || 0);
        setBooksJustSaved([packet, ...booksJustSaved]);
      } else if (packet._messageType == "pendingBookAdded") {
        setPending(+pending + 1 || 0);
      } else if (packet._messageType == "bookLookupFailed") {
        setPending(pending - 1 || 0);
        setBooksJustSaved([
          {
            _id: "" + new Date(),
            title: `Failed lookup for ${packet.isbn}`,
            success: false
          },
          ...booksJustSaved
        ]);
      }
    };
    return () => {
      try {
        ws.close();
      } catch (e) {}
    };
  }, []);

  //...
};
```

### 问题

`useEffect` 依赖列表 []，第一次挂载调用，后面不会执行；

`useEffect` 是一个闭包，而且依赖列表没有包含state数据（pending等等）, `state` 始终是初始状态数据

`componentDidMount` 不能直接转化为依赖列表[]的 `useEffect`

但是如果state加入依赖列表，每次更新websocket就会关闭、开启

### 解决

state管理逻辑放在 `reducer` 里面

useEffect 简化，不必处理闭包，容易进行测试

```jsx
function scanReducer(state, **[type, payload]**) {
  switch (type) {
    case "initial":
      return { ...state, pending: payload.pending };
    case "pendingBookAdded":
      return { ...state, pending: state.pending + 1 };
    case "bookAdded":
      return {
        ...state,
        pending: state.pending - 1,
        booksSaved: [payload, ...state.booksSaved]
      };
    case "bookLookupFailed":
      return {
        ...state,
        pending: state.pending - 1,
        booksSaved: [
          {
            _id: "" + new Date(),
            title: `Failed lookup for ${payload.isbn}`,
            success: false
          },
          ...state.booksSaved
        ]
      };
  }
  return state;
}
const initialState = { pending: 0, booksSaved: [] };

const BookEntryList = props => {
  const [state, dispatch] = useReducer(scanReducer, initialState);

  useEffect(() => {
    const ws = new WebSocket(webSocketAddress("/bookEntryWS"));

    ws.onmessage = ({ data }) => {
      let packet = JSON.parse(data);
      dispatch([packet._messageType, packet]);
    };
    return () => {
      try {
        ws.close();
      } catch (e) {}
    };
  }, []);

  //...
};
```

### 为什么不用函数式setState解决闭包问题？

因为没有解决每个state依赖关系

### 参考资料

- 原文链接：[https://adamrackis.dev/state-and-use-reducer](https://adamrackis.dev/state-and-use-reducer)