import React, { Component } from "react";
import SaleComponent from "./SaleComponent/SaleComponent";
import SaleItemLists from "../SaleItemLists/SaleItemLists";
import "./SaleArticle.scss";

class SaleArticle extends Component {
  render() {
    return(
      <div className="saleArticle">
        <SaleComponent />
        <SaleItemLists />
      </div>
    )
  }
}

export default SaleArticle;