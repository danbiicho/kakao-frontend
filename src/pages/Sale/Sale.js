import React, { Component } from 'react';
import SaleArticle from "./SaleArticle/SaleArticle";
import './Sale.scss';

class Sale extends Component {
  render() {
    return(
      <div className="Sale">
        <SaleArticle />
      </div>
    )
  }
}

export default Sale;