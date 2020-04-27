import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import New from "./pages/New/New";
import Hot from "./pages/Hot/Hot";
import Sale from "./pages/Sale/Sale";
import All from "./pages/All/All";
import ToyMiniDoll from "./pages/Categories/CategoryToy/ToyMiniDoll";
import DetailPage from "./components/DetailPage/DetailPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/new" component={New} />
          <Route exact path="/hot" component={Hot} />
          <Route exact path="/sale" component={Sale} />
          <Route exact path="/all" component={All} />
          <Route exact path="/toyMiniDoll" component={ToyMiniDoll} />
          <Route exact path="/detailPage" component={DetailPage} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
