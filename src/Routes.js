import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

class Routes extends Component {
  render() {
    return(
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />   
            <Route exact path="/login" component={Login} />                  
          </Switch>
      </Router>
    );
  }
}
export default Routes;