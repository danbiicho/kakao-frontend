import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';

class Routes extends Component {
  render() {
    return(
      <Router>
          <Switch>
            <Route exact path="/" component={Menu} />                    
          </Switch>
      </Router>
    );
  }
}
export default Routes;