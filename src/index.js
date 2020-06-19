/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import { store } from './js/store/ReduxStore';
import { Router, Route, Switch, Redirect } from "react-router-dom";

//import Default from "./js/components/layout/Default";
import Dashboard from "./js/components/view/dashboard/Main";
import Settings from "./js/components/view/dashboard/Settings";
import Schedule from "./js/components/view/schedule/scheduleMain";
import EventDetail from "./js/components/view/schedule/eventDetails";

import Matters from "./js/components/view/matter/matterMain";
import CreateMatter from "./js/components/view/matter/createMatter";

import Clients from "./js/components/view/client/clientList";
import Invoices from "./js/components/view/invoice/invoiceList";
import Profile from "./js/components/view/user/userDetail";
import Notification from "./js/components/view/user/userNotifications";

//default landing page
//import Home from "./components/view/Home";
//dashboard home page
//import Dashboard from "./components/view/Dashboard";

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
         
         {/*<AppRoutes exact path="/" layout={Default} component={Home} />*/}
         
         <Route exact path={"/"} component={Dashboard} />
         <Route path={"/schedule"} component={Schedule} />
         <Route path={"/event"} component={EventDetail} />
         <Route path={"/matters"} component={Matters} />
         <Route path={"/clients"} component={Clients} />
         <Route path={"/invoices"} component={Invoices} />
         <Route path={"/profile"} component={Profile} />
         <Route path={"/notifications"} component={Notification} />
         <Route path={"/settings"} component={Settings} />
         
         {/**CRUD CREATE UPDATE */}
         <Route path={"/createMatter"} component={CreateMatter} />
         
         </Switch>      
     </Router>
  </Provider>,
  document.getElementById("root")
);


