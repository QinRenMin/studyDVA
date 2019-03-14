# 学习ＤＶＡ
* 安装dva开发环境　

  1.安装dva-cli初始化项目 
  
  ```yarn glbal  add dva-cli```或者
  ``npm install -g dva-cli``
  
  2.检查版本 
  
   ```dva -v```
  
  3.创建项目 
  
  ```dva new myApp --demo```
  或者:
  
  ```mkdir your-progect```->```cd your-project```->```dva init```
  
  4.启动项目 
  
  ```npm start```或者```yarn start```  
  
  5 安装antd 
 
    ```yarn add antd```  
    
  6 安装babel-plugin-import  
  
  按需加载 antd 的脚本和样式的 
  
  ```yarn add babel-plugin-import```  
  7 编辑.webpackrc文件,使 babel-plugin-import 插件生效。
  ```{
       "extraBabelPlugins": [
         ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
       ]
     }
```

 * 文件解释  
 
   mock 存放用于 mock 数据的文件；
  
   public 一般用于存放静态文件，打包时会被直接复制到输出目录(./dist)； 
   
   src 文件夹用于存放项目源代码；
  
   assets 用于存放静态资源，打包时会经过 webpack 处理； 
  
   components 用于存放 React 组件，一般是该项目公用的无状态组件； 
  
   models 用于存放模型文件 
  
   routes 用于存放需要 connect model 的路由组件； 
  
   services 用于存放服务文件，一般是网络请求等； 
  
   utils 工具类库 
  
   router.js 路由文件 
   
   index.js 项目的入口文件 
  
   index.css 一般是共用的样式
  
   .editorconfig 编辑器配置文件
  
   .eslintrc ESLint配置文件 
   
   .gitignore Git忽略文件 
  
   .roadhogrc.mock.js Mock配置文件 
  
   .webpackrc 自定义的webpack配置文件，JSON格式，如果需要 JS 格式，可修改为 .webpackrc.js
  
 
  * 编写第一个测试例子
  1.在routes下建立Hello.js
  ```
  import React, {Component}from "react"; 

     class Hello extends Component{
       render(){
         return(<h2>Hello List of Hello</h2>)
       }
     }
     export  default  Hello;
     
   ``` 
  2.在router.js里添加路由
   ```
   import Hello from './routes/Hello';
   <Route path="/products" exact component={Hello} />
  
   ```
   
  3.在http://localhost:8000/#/products下看到输入的文字
  
  * 编写用表格的形式展示信息
  1.在components/ProductList.js下编写组件信息
  
  2.定义model
  新建 models/products.js,包含同步更新 state 的 reducers，处理异步逻辑的 effects，订阅数据源的 subscriptions 。

  3.在index.js中载入
  
  ```
  app.model(require('./models/products').default);
  
 ```
 4.connect
 将model和component连接起来
 编辑routes/Products.js
 
 5.在index.js中添加数据
  ```
  const app = dva({
          initialState: {
           products: [
                { name: 'dva', year:'2',id: 1 },
               { name: 'antd', year:'3',id: 2 },
               { name: 'react',year:'1', id: 3 },
               { name: 'redux', year:'4',id: 4 },
               { name: 'vue', year:'6',id: 5 },
               { name: 'html',year:'2', id: 6 },
              ],
            },
      });
      ```
