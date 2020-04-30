import React, { Component } from "react";
import { API } from "../../../../config";
import "./SaleComponent.scss";

class SaleComponent extends Component {
  constructor() {
    super()
    this.state = {
      items:[],
    }
  }

  componentDidMount = () => {
    fetch(`${API}/product/mainSaleProduct`)
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        items: res.sale_item
      })
    })
  }

  render() {
    const { items } = this.state;
    const SaleCards = items.map((item) => {
      return (
        <div className="Card">
          <img className="saleImg" src={item.image_url} alt=""/>
          <div className="saleInfo">
            <div className="itemName">{item.name}</div>
            <div className="itemCost">
              <div>
                <span className="saleCost">{Math.floor(item.discount_percentage)}% {(Math.floor((item.price - (item.discount_percentage * item.price * 0.01))/100)*100).toLocaleString()}</span>
                <span className="won1">원</span>
              </div>
              <div>
                <span className="originCost">{item.price}</span>
                <span className="won2">원</span>
              </div>
              <img className="bucket" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/basket-default-large-3.png" alt="" />
            </div>
          </div>
        </div>
      )
    })
    return(
      <div className="SaleComponent">
        <div className="saleTop">
          {SaleCards}
        </div>
      </div>
    )
  }
}

export default SaleComponent;