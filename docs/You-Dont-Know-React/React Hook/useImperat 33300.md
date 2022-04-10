# useImperativeHandle

```jsx
useImperativeHandle(ref, createHandle, [deps])
```

自定义子组件转发ref暴露给父组件的current的值

```jsx
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```