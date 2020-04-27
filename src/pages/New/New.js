import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";
import Banner from "../../components/Banner/Banner";
import NewArticle from "./NewArticle/NewArticle";
import Footer from  '../../components/Footer/Footer';
import "./New.scss";

class New extends Component {
  render() {
    return (
      <div className="New">
        <NavBar />
        <Menu />
        <Banner />
        <NewArticle />
        <Footer />
      </div>
    );
  }
}

export default withRouter(New);
