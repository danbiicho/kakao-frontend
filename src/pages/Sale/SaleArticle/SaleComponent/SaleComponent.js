import React, { Component } from "react";
import "./SaleComponent.scss";

class SaleComponent extends Component {
  constructor() {
    super()
    this.state = {
      items:[],
    }
  }

  componentDidMount = () => {
    fetch("http://10.58.5.133:8000/product/mainSaleProduct")
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        items: res.sale_item
      })
    })
  }

  render() {
    const { items } = this.state;
    const SaleCards = items.map((data) => {
      return (
        <div className="Card">
          <img className="saleImg" src={data.image_url} alt=""/>
          <div className="saleInfo">
            <div className="itemName">{data.name}</div>
            <div className="itemCost">
              <div>
                <span className="saleCost">{data.discount_percentage} {data.discount_percentage * data.price * 0.01}</span>
                <span className="won1">원</span>
              </div>
              <div>
                <span className="originCost">{data.price}</span>
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