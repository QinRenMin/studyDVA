import dva from 'dva';
import './index.css';
// 1. Initialize
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

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
