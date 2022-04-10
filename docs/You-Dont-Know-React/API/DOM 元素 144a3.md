# DOM 元素

在 React 中，所有的 DOM 特性和属性（包括事件处理）都应该是小驼峰命名的方式

`aria-*` 以及 `data-*` 属性，一律使用小写字母命名

### **属性差异**

- **checked**
    - 当 `<input>` 组件的 type 类型为 `checkbox` 或 `radio` 时，组件支持 `checked` 属性
    - `defaultChecked` 则是非受控组件的属性，用于设置组件首次挂载时是否被选中
- **className**
    - 所有常规 DOM 节点和 SVG 元素
    - Web Components使用class
- **dangerouslySetInnerHTML**
    - React 为浏览器 DOM 提供 `innerHTML` 的替换方案
    - `__html`对象
- htmlFor 代替 for
- onChange
    
    每当表单字段变化时，该事件都会被触发
    
- **selected**
    
    `<option>` 标记为已选中状态
    
- **style**
    - 在渲染过程中添加动态计算的样式
    - 小驼峰命名属性的 JavaScript 对象
    - 样式不会自动补齐前缀
        
        ```jsx
        const divStyle = {
          WebkitTransition: 'all', // note the capital 'W' here
          msTransition: 'all' // 'ms' is the only lowercase vendor prefix
        };
        
        function ComponentWithTransition() {
          return <div style={divStyle}>This should work cross-browser</div>;
        }
        ```
        
    - 自动添加 ”px” 后缀到内联样式为数字的属性后
- **suppressContentEditableWarning**
    
    子节点的元素被标记为 `contentEditable`关闭警告
    
- suppressHydrationWarning
不会警告服务端和客户端属性与元素内容不一致
- **value**
    - `<input>`、`<select>` 和 `<textarea>` 组件支持 `value` 属性
    - `defaultValue` 属性对应的是非受控组件的属性，用于设置组件第一次挂载时的 value
- 自定义属性，属性名全都为小写