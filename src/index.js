/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import { store } from './js/stores/ReduxStore';i
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Default from "./components/layout/Default";
//default landing page
import Home from "./components/view/Home";
//dashboard home page
import Dashboard from "./components/view/Dashboard";

//profile page
//settings page
//law firms page
// case/matter details page
//

import { createBrowserHistory } from "history";
const hist = createBrowserHistory();
const AppRoutes = ({ layout: Layout, component: Component, ...rest }) => {
  return (
      <Route {...rest} render={props => (
          <Layout>
              <Component {...props} />
          </Layout>
      )} />
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
         <Switch> 
         
         <AppRoutes exact path="/" layout={Default} component={Home} />
         
         <Route path={"/home"} component={Home} />
         
         </Switch>      
     </Router>
  </Provider>,
  document.getElementById("root")
);


