import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Join from "./pages/Join/Join";
import ToyMiniDoll from "./pages/Categories/CategoryToy/ToyMiniDoll";
import DetailPage from "./components/DetailPage/DetailPage";
import BucketLists from "./pages/BucketLists/BucketLists";
import "./styles/Common.scss"

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/index" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/products/category/subject" component={ToyMiniDoll} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/products" component={DetailPage} />
          <Route exact path="/buscket/products" component={BucketLists}/>
        </Switch>
      </Router>
    );
  }
}
export default Routes;
