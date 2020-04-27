import React, { Component } from "react";
import "./PaymentBar.scss";

class PaymentBar extends Component {
  render() {
    return(
      <div className="PaymentBar">
        <button className="minus">
          <img src="https://t1.kakaocdn.net/friends/new_store/2.0/common/product-detail-button-dec-off.svg" alt=""/>
        </button>
        <button className="itemCount"></button>
        <button className="minus">
          <img src="https://t1.kakaocdn.net/friends/new_store/2.0/common/product-detail-button-inc-on.svg" alt=""/>
        </button>
        <div className="allCost">
          <span>총 상품금액</span>
          <div>
            <span>17,000</span>
            <span>원</span>
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