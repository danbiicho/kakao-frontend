import React, { Component } from 'react';
import NavBar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";
import SaleArticle from "./SaleArticle/SaleArticle";
import Footer from "../../components/Footer/Footer";
import './Sale.scss';

class Sale extends Component {
  render() {
    return(
      <div className="Sale">
        <NavBar />
        <Menu />
        <SaleArticle />
        <Footer />
      </div>
    )
  }
}

export default Sale;