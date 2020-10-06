import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./redux/reducers/combineReducers.js";
const store = createStore(allReducers);

import RideList from './client/components/ride/rideList.jsx'
import RideForm from './client/components/ride/rideForm.jsx'
import Home from './client/components/supportLandingPage/supportLandingPageLatest.jsx'
import Login from './client/components/login/loginNew.jsx'
import ChildCare from './client/components/childCare/childCareForm.jsx'
import ChildCareTable from './client/components/childCare/childCareTable.jsx'

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <Switch>
      <Route exact path='/' component={Login} />
       <Route exact path='/home' component={Home} />
       <Route exact path='/ride' component={RideList} />
       <Route exact path='/rideForm' component={RideForm} />
       <Route exact path='/childCareForm' component={ChildCare} />
       <Route exact path='/childCare' component={ChildCareTable} />
      </Switch>
  </div>
  </Router>
  </Provider>,
  document.getElementById('app'))
