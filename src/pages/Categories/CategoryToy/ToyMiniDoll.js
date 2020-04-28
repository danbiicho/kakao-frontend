import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../../../components/Navbar/Navbar";
import ToyBanner from './ToyBanner/ToyBanner';
import CategoryLists from "../../../components/CategoryLists/CategoryLists";
import Footer from "../../../components/Footer/Footer";
import ItemLists from "../../../components/ItemLists/ItemLists";
import "./ToyMiniDoll.scss";

class ToyMiniDoll extends Component {
  render() {
    return (
      <div className="ToyMiniDoll">
        <NavBar />
        <ToyBanner />
        <CategoryLists />
        <ItemLists />
        <Footer />
      </div>
    );
  }
}

export default withRouter(ToyMiniDoll);
