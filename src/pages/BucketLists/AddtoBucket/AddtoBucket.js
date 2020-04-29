import React, { Component } from "react";
import BucketItemComponent from "../BucketItemComponent/BucketItemComponent";
import "./AddtoBucket.scss";

class AddtoBucket extends Component {
  render() {
    return(
      <div className="AddtoBucket">
        <div className="firstRow">
          <div className="leftEnd">
            <img className="checkIcon" src="https://t1.kakaocdn.net/friends/new_store/ico_checked.png" alt="" />
            <span>전체</span>
            <div>4</div>
          </div>
          <div className="rightEnd">
            <div>0</div>
            <span className="selectItem">개 선택</span>
            <img className="trash" src="https://t1.kakaocdn.net/friends/new_store/2.0/basket/trashcan-btn.png" alt="" />
          </div>
        </div>
        <div className="secRow">
          <span className="itemName">상품명</span>
          <span className="option">옵션</span>
          <span className="itemCount">수량</span>
          <span className="itemCost">상품금액</span>
        </div>
        <BucketItemComponent />
        <div className="lastRow">
          <div className="lastRowLeft">
            <span>배송국가</span>
            <select>
              <option>한국</option>
            </select>
          </div>
          <div className="addAllCost">
            <div className="itemCost">
              <span className="costName">총 주문금액</span>
              <div>
                <span>17,000</span>
                <span>원</span>
              </div>
            </div>
            <div className="deliveryCost">
              <span className="deliveryName">배송비</span>
              <div>
                <span>3,000</span>
                <span>원</span>
              </div>
            </div>
            <div className="allCost">
              <span className="allCostName">총 결제금액</span>
              <div>
                <span>2,0000</span>
                <span>원</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddtoBucket;