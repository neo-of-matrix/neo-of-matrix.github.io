# 自定义 Hook

### 目的

- 自定义hook可以把组件逻辑封装成函数
- 减少组件数量[render props](https://reactjs.org/docs/render-props.html) and [higher-order components](https://reactjs.org/docs/higher-order-components.html)

### 操作

- 抽离组件逻辑，并且遵守hook规则
- **自定义 Hook 必须以 “`use`” 开头**

### 注意

- hook内部独立不会在其他组件共享state
- hook之间可以传递state