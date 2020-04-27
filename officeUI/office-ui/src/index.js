import React from 'react';


import Dashboard from './Dashboard';
import Login from './Login';
import './index.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import ReactDOM from 'react-dom';




ReactDOM.render(
  <Router>
    <Route exact path="/login" component={Login} />
    <Route exact path="/dashboard" component={Dashboard} />
  </Router>,document.getElementById('root')
);








  






