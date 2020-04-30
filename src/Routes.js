import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import New from "./pages/New/New";
import Hot from "./pages/Hot/Hot";
import Sale from "./pages/Sale/Sale";
import All from "./pages/All/All";
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
          <Route exact path="/index1" component={New} />
          <Route exact path="/index2" component={Hot} />
          <Route exact path="/index3" component={Sale} />
          <Route exact path="/index4" component={All} />
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
