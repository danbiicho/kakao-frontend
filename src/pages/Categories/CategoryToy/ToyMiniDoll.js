import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../../../components/Navbar/Navbar";
import Menu from '../../../components/Menu/Menu';
import Banner from '../../../components/Banner/Banner';
import CategoryLists from "../../../components/CategoryLists/CategoryLists";
import Footer from "../../../components/Footer/Footer";
import ItemLists from "../../../components/ItemLists/ItemLists";
import "./ToyMiniDoll.scss";

class ToyMiniDoll extends Component {
  render() {
    return (
      <div className="ToyMiniDoll">
        <NavBar />
        <Menu />
        <Banner />
        <CategoryLists />
        <ItemLists />
        <Footer />
      </div>
    );
  }
}

export default withRouter(ToyMiniDoll);
