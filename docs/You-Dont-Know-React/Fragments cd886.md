# Fragments

- `Fragment`一种标签，不会渲染成DOM结构，适用于列表结构进行分组渲染
- `td`标签分组遍历放入`tr`标签
    
    ```jsx
    class Columns extends React.Component {
      render() {
        return (
          <React.Fragment>
            <td>Hello</td>
            <td>World</td>
          </React.Fragment>
        );
      }
    }
    ```
    
- `key` 是唯一可以传递给 `Fragment` 的属性
    
    ```jsx
    function Glossary(props) {
      return (
        <dl>
          {props.items.map((item) => (
            // 没有`key`，React 会发出一个关键警告
            <React.Fragment key={item.id}>
              <dt>{item.term}</dt>
              <dd>{item.description}</dd>
            </React.Fragment>
          ))}
        </dl>
      );
    }
    ```