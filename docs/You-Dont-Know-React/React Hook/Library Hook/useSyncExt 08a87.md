# useSyncExternalStore

```jsx
const state = useSyncExternalStore(subscribe, getSnapshot[, getServerSnapshot]);
```

一种读取和订阅其他数据源的方式，可以和 selective hydration and time slicing 配合使用

- subscribe
    
    订阅回调函数， store 改变时调用
    
- getSnapshot
    
    获取当前store的函数
    
    必须返回一个cached value，（store不变每次调用返回相同的值）
    
- getServerSnapshot
    
    服务端渲染返回snapshot
    

### 订阅整个store

```jsx
const state = useSyncExternalStore(store.subscribe, store.getSnapshot);
```

### 订阅某个域值

```jsx
const selectedField = useSyncExternalStore(
  store.subscribe,
  () => store.getSnapshot().selectedField,
);
```

### 服务端必须序列化store

React会在hydration时使用snapshot以防内容不能匹配

```jsx
const selectedField = useSyncExternalStore(
  store.subscribe,
  () => store.getSnapshot().selectedField,
  () => INITIAL_SERVER_SNAPSHOT.selectedField,
);
```

### 兼容

`use-sync-external-store/shim` `useSyncExternalStore` 和 user-space implementation