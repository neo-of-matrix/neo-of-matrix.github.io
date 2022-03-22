# key

- key 帮助 React 识别哪些元素改变了，比如被添加或删除
    
    新增元素插入到表头，那么更新开销会比较大
    
    使用 key 来匹配原有树上的子元素以及最新树上的子元素
    
- 一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串（id）
- 当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key
    
    如果列表项目的顺序可能会变化，不要index 用作 key 值
    
    性能变差，组件状态问题
    
- 在 `map()` 方法中的元素需要设置 key 属性
    
    ```jsx
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => (
      <ListItem key={number.toString()} value={number} />
    ));
    ```
    
- key 值在兄弟节点之间必须唯一，不需要是全局唯一的
    
    当我们生成两个不同的数组时，我们可以使用相同的 key 值
    
    ```jsx
    function Blog(props) {
      const sidebar = (
        <ul>
          {props.posts.map((post) => (
            <li key={post.id}> {post.title}</li>
          ))}
        </ul>
      );
      const content = props.posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ));
      return (
        <div>
          {sidebar} <hr />
          {content}
        </div>
      );
    }
    
    const posts = [
      { id: 1, title: "Hello World", content: "Welcome to learning React!" },
      { id: 2, title: "Installation", content: "You can install React from npm." },
    ];
    ReactDOM.render(<Blog posts={posts} />, document.getElementById("root"));
    ```
    
- key 会传递信息给 React ，但不会传递给你的组件
    
    ```jsx
    const content = posts.map((post) => (
      <Post key={post.id} id={post.id} title={post.title} />
    ));
    ```
    
- 不要在 JSX 中嵌入过多 map()
    
    提取一个变量
    
    ```jsx
    function NumberList(props) {
      const numbers = props.numbers;
      const listItems = numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ));
      return <ul>{listItems}</ul>;
    }
    ```