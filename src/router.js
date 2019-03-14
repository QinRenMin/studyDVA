import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import  Hello from './routes/Hello'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products"  component={Hello}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
