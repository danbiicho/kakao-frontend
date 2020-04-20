import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainContents from './components/MainContents/MainContents';

class Routes extends Component {
  render() {
    return(
      <Router>
          <Switch>
            <Route exact path="/" component={MainContents} />                    
          </Switch>
      </Router>
    );
  }
}
export default Routes;