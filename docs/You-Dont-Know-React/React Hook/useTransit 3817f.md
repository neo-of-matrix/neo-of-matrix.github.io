# useTransition

```jsx
const [isPending, startTransition] = useTransition();
```

返回加载状态和什么时候开始加载

```jsx
function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);
  
  function handleClick() {
    startTransition(() => {
      setCount(c => c + 1);
    })
  }

  return (
    <div>
      {isPending && <Spinner />}
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
```

- 过渡中的Update 相当于一个紧急更新( click )中的的一个 yield
- 过渡中的Update对于重新挂起的内容不会展示失败以后的值
    
    渲染更新内容的时候用户可以和内容进行交互