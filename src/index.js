import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import "antd/dist/antd.css";
import './index.css';
import store from './store/createStore'
import {routes} from './routes'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { PrivateRoute } from './components'

ReactDOM.render(
  <Provider store={store()}>
      <Router>
        <Switch>
          {routes.openRoutes.map((route,i) => <Route key={i} {...route} />)}
          {routes.secureRoutes.map((route,i) => <PrivateRoute key={i} {...route} />)}
        </Switch>
      </Router>
  </Provider>, document.getElementById('root'));
