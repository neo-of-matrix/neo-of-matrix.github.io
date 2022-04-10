# FAQ

### [AJAX 及 APIs](https://zh-hans.reactjs.org/docs/faq-ajax.html)

ajax请求在 `[componentDidMount](https://zh-hans.reactjs.org/docs/react-component.html#mounting)` 发起或者`useEffect`空依赖

### [Babel, JSX, 及构建过程](https://zh-hans.reactjs.org/docs/faq-build.html)

```jsx
{/* 注释写在这里 */}
{/* 多行注释 
  也同样有效。 */}
```

### [在组件中使用事件处理函数](https://zh-hans.reactjs.org/docs/faq-functions.html)

- 事件处理器传递给组件
    
    事件处理器作为props
    
- 函数绑定组件实例
    
    ```jsx
    this.handleClick = this.handleClick.bind(this);
    handleClick = () => {};
    <button onClick={this.handleClick.bind(this)}>Click Me</button>;（影响性能）
    <button onClick={() => this.handleClick()}>Click Me</button>;（影响性能）
    ```
    
- 传递函数本身
    
    ```jsx
    <button onClick={this.handleClick}>Click Me</button>
    <button onClick={this.handleClick()}>Click Me</button> wrong
    ```
    
- 传递参数
    - `<button onClick={() => this.handleClick(id)} />` `id第一个参数`
    - `<button onClick={this.handleClick.bind(this, id)} /> e第一个参数，id第二个参数`
    - 通过 data-attributes 传递参数 `e第一个参数`
        
        ```jsx
        <li key={letter} data-letter={letter} onClick={this.handleClick}></li>
        handleClick(e) {
            this.setState({
              justClicked: e.target.dataset.letter
            });
         }
        ```
        
- 函数被调用太快或者太多次
    - 节流：1s内调用一次 (例如 `[_.throttle](https://lodash.com/docs#throttle)`)
        
        ```jsx
        import throttle from 'lodash.throttle';
        
        class LoadMoreButton extends React.Component {
          constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.handleClickThrottled = throttle(this.handleClick, 1000);
          }
        
          componentWillUnmount() {
            this.handleClickThrottled.cancel();
          }
        
          render() {
            return <button onClick={this.handleClickThrottled}>Load More</button>;
          }
        
          handleClick() {
            this.props.loadMore();
          }
        }
        ```
        
    - 防抖：确保函数不会在上一次被调用之后一定量的时间内被执行 (例如 `[_.debounce](https://lodash.com/docs#debounce)`)
        
        鼠标滚动或键盘事件
        
        ```jsx
        import debounce from 'lodash.debounce';
        
        class Searchbox extends React.Component {
          constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.emitChangeDebounced = debounce(this.emitChange, 250);
          }
        
          componentWillUnmount() {
            this.emitChangeDebounced.cancel();
          }
        
          render() {
            return (
              <input
                type="text"
                onChange={this.handleChange}
                placeholder="Search..."
                defaultValue={this.props.value}
              />
            );
          }
        
          handleChange(e) {
            this.emitChangeDebounced(e.target.value);
          }
        
          emitChange(value) {
            this.props.onChange(value);
          }
        }
        ```
        
    - **`requestAnimationFrame`**：一个函数被 `requestAnimationFrame`
     放入队列后将会在下一帧触发 (例如 `[raf-schd](https://github.com/alexreardon/raf-schd)`)
        
        ```jsx
        import rafSchedule from 'raf-schd';
        
        class ScrollListener extends React.Component {
          constructor(props) {
            super(props);
        
            this.handleScroll = this.handleScroll.bind(this);
        
            // Create a new function to schedule updates.
            this.scheduleUpdate = rafSchedule(
              point => this.props.onScroll(point)
            );
          }
        
          handleScroll(e) {
            // When we receive a scroll event, schedule an update.
            // If we receive many updates within a frame, we'll only publish the latest value.
            this.scheduleUpdate({ x: e.clientX, y: e.clientY });
          }
        
          componentWillUnmount() {
            // Cancel any pending updates since we're unmounting.
            this.scheduleUpdate.cancel();
          }
        
          render() {
            return (
              <div
                style={{ overflow: 'scroll' }}
                onScroll={this.handleScroll}
              >
                <img src="/my-huge-image.jpg" />
              </div>
            );
          }
        }
        ```
        

### **组件状态**

**`setState`** 

```jsx
// this.setState({count: this.state.count + 1});
this.setState((state) => {
    // 重要：在更新的时候读取 `state`，而不是 `this.state`。
    return {count: state.count + 1}
 });
```

异步更新

事件处理函数内部的 `setState` 是异步的

- 避免不必要的重新渲染
- 会破坏掉 `props` 和 `state` 之间的一致性，造成一些难以 debug 的问题
- 影响新功能的实现

### 样式与 CSS

使用className，依赖 props 或 state 使用 [classnames](https://www.npmjs.com/package/classnames#usage-with-reactjs)

className性能更好

### **项目文件结构**

- 按功能或路由组织

```jsx
common/
  Avatar.js
  Avatar.css
  APIUtils.js
  APIUtils.test.js
feed/
  index.js
  Feed.js
  Feed.css
  FeedStory.js
  FeedStory.test.js
  FeedAPI.js
profile/
  index.js
  Profile.js
  ProfileHeader.js
  ProfileHeader.css
  ProfileAPI.js
```

- 按文件类型组织

```jsx
api/
  APIUtils.js
  APIUtils.test.js
  ProfileAPI.js
  UserAPI.js
components/
  Avatar.js
  Avatar.css
  Feed.js
  Feed.css
  FeedStory.js
  FeedStory.test.js
  Profile.js
  ProfileHeader.js
  ProfileHeader.css
```

- 根据组件在应用程序中的角色将组件文件组织到不同的目录中
- 避免多层嵌套（最多三到四个层级）