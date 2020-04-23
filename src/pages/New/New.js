import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";
import NewBanner from "./NewBanner/NewBanner";
import NewArticle from "./NewArticle/NewArticle";
import "./New.scss";

class New extends Component {
  render() {
    return (
      <div className="New">
        <NavBar />
        <Menu />
        <NewBanner />
        <NewArticle />
      </div>
    );
  }
}

export default withRouter(New);
