# JavaScript 环境要求

React 16 依赖集合类型 Map 和 Set（IE > 11）

```jsx
import 'core-js/es/map';
import 'core-js/es/set';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

依赖于 `requestAnimationFram`

```jsx
import 'raf/polyfill';
```