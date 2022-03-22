# 性能优化

- 使用生产版本
    
    Create React App
    
    ```jsx
    npm run build
    ```
    
    webpack
    
    ```jsx
    module.exports = merge(common, {
      mode: "production",
    });
    ```
    
- 虚拟化长列表
    
    [react-window](https://react-window.now.sh/) 和 [react-virtualized](https://bvaughn.github.io/react-virtualized/)
    
- `shouldComponentUpdate` 和 `[React.PureComponent](https://zh-hans.reactjs.org/docs/react-api.html#reactpurecomponent)`
    
    `shouldComponentUpdate` 中返回 `false` 来跳过整个渲染过程。其包括该组件的 `render` 调用以及之后的操作
    
    ```jsx
    class CounterButton extends React.Component {
      constructor(props) {
        super(props);
        this.state = {count: 1};
      }
    
      shouldComponentUpdate(nextProps, nextState) {
        if (this.props.color !== nextProps.color) {
          return true;
        }
        if (this.state.count !== nextState.count) {
          return true;
        }
        return false;
      }
    
      render() {
        return (
          <button
            color={this.props.color}
            onClick={() => this.setState(state => ({count: state.count + 1}))}>
            Count: {this.state.count}
          </button>
        );
      }
    }
    ```
    
    检查 `props` 和 `state` 中所有的字段浅比较，使用 `React.PureComponent`
    
- 不可变数据
    - `concat`
    
    ```jsx
    this.setState(state => ({
        words: [...state.words, 'marklar'],
      }));
    ```
    
    - [扩展运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
    
    ```jsx
    function updateColorMap(colormap) {
      return {...colormap, right: 'blue'};
    }
    ```
    
    - [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
    
    ```jsx
    function updateColorMap(colormap) {
      return Object.assign({}, colormap, {right: 'blue'});
    }
    ```
    
    - [Immer](https://github.com/mweststrate/immer)
    - [immutability-helper](https://github.com/kolodny/immutability-helper)