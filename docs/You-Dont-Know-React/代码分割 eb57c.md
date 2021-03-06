# 代码分割

减少单一文件过大，拆分成多个文件加载用到的代码

- **`import()`**
    
    ```jsx
    import("./math").then(math => {
      console.log(math.add(16, 26));
    });
    ```
    
- **`React.lazy`**
    - `React.lazy` 和 `Suspense` 技术还不支持服务端渲染
    
    [GitHub - gregberge/loadable-components: The recommended Code Splitting library for React ✂️✨](https://github.com/gregberge/loadable-components)
    
    ```jsx
    import React, { Suspense } from 'react';
    
    const OtherComponent = React.lazy(() => import('./OtherComponent'));
    
    function MyComponent() {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
          </Suspense>
        </div>
      );
    }
    ```
    
    - 只支持默认导出（export default）
        
        命名导出（Named Exports）创建一个中间模块，来重新导出为默认模块
        
    - 基于路由的代码分割
        
        ```jsx
        import React, { Suspense, lazy } from 'react';
        import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
        
        const Home = lazy(() => import('./routes/Home'));
        const About = lazy(() => import('./routes/About'));
        
        const App = () => (
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Suspense>
          </Router>
        );
        ```