import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MainContents from "../../pages/Home/HomeComponents/MainContents/MainContents";
import Menu from "../../components/Menu/Menu";
import "../../styles/Reset.scss";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Menu />
        <MainContents />
        <Footer />
      </div>
    );
  }
}
export default withRouter(Home);
