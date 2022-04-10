# useContext

获取ThemeContext.Provider value值

当前的 context 值由上层组件中距离当前组件最近的 `<MyContext.Provider>` 的 `value` prop 决定

组件上层最近的 `<MyContext.Provider>` value 更新时，该 Hook 会触发重渲染

即使祖先使用 `[React.memo](https://zh-hans.reactjs.org/docs/react-api.html#reactmemo)` 或 `[shouldComponentUpdate](https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate)`，也会重新渲染

重渲染组件的开销较大，[通过使用 memoization 来优化](https://github.com/facebook/react/issues/15156#issuecomment-474590693)

- 拆分context，从原有context内部拆分为另一context
    
    ```jsx
    function Button() {
      let theme = useContext(ThemeContext);
      // The rest of your rendering logic
      return <ExpensiveTree className={theme} />;
    }
    ```
    
- 拆分组件，接收context组件拆分为两个组件，父组件接收context传递给子组件，子组件使用memo
    
    ```jsx
    function Button() {
      let appContextValue = useContext(AppContext);
      let theme = appContextValue.theme; // Your "selector"
      return <ThemedButton theme={theme} />
    }
    
    const ThemedButton = memo(({ theme }) => {
      // The rest of your rendering logic
      return <ExpensiveTree className={theme} />;
    });
    ```
    
- 组件内部 return 一个 useMemo函数，指定依赖列表
    
    ```jsx
    function Button() {
      let appContextValue = useContext(AppContext);
      let theme = appContextValue.theme; // Your "selector"
    
      return useMemo(() => {
        // The rest of your rendering logic
        return <ExpensiveTree className={theme} />;
      }, [theme])
    }
    ```