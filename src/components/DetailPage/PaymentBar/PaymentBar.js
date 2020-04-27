import React, { Component } from "react";
import "./PaymentBar.scss";

class PaymentBar extends Component {
  constructor() {
    super()
    this.state = {
      itemNum: 1,
    }
  }

  handlePlus = () => {
    this.setState({
      itemNum : this.state.itemNum + 1
    })
  }

  handleMinus = () => {
    if(this.state.itemNum > 1) {
      this.setState({
        itemNum : this.state.itemNum - 1
      })
    }
  }

  render() {
    return(
      <div className="PaymentBar">
        <button className="minus" onClick={this.handleMinus}>
          <img className={(this.state.itemNum === 1) ? "disabled" : "abled"} alt=""/>
        </button>
        <button className="itemCount">{this.state.itemNum}</button>
        <button className="minus" onClick={this.handlePlus}>
          <img src="https://t1.kakaocdn.net/friends/new_store/2.0/common/product-detail-button-inc-on.svg" alt=""/>
        </button>
        <div className="allCost">
          <span className="itemCost">총 상품금액</span>
          <div>
            <span className="cost">17,000</span>
            <span className="cost">원</span>
          </div>
        </div>
        <div className="buyButton">
        <button className="bucket"><img src="https://t1.kakaocdn.net/friends/new_store/2.0/common/product-detail-cart-off.svg" alt=""/></button>
        <button className="goRight">바로가기</button>
        </div>
      </div>
    )
  }
}

export default PaymentBar;