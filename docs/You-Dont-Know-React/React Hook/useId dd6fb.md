# useId

```jsx
const id = useId();
```

- 生成唯一id，客户端和服务端都可以使用
    
    ```jsx
    function Checkbox() {
      const id = useId();
      return (
        <>
          <label htmlFor={id}>Do you like React?</label>
          <input id={id} type="checkbox" name="react"/>
        </>
      );
    };
    ```
    
- 不用当做key使用
- 不能在css选择器和`querySelectorAll`中使用
- 提供前缀避免在多个root程序中冲突
    
    ```jsx
    function NameFields() {
      const id = useId();
      return (
        <div>
          <label htmlFor={id + '-firstName'}>First Name</label>
          <div>
            <input id={id + '-firstName'} type="text" />
          </div>
          <label htmlFor={id + '-lastName'}>Last Name</label>
          <div>
            <input id={id + '-lastName'} type="text" />
          </div>
        </div>
      );
    }
    ```