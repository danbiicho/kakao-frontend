import React, { Component } from "react";
import "./ItemLists.scss";

class ItemLists extends Component {
  render() {
    const {
      items = []
    } = this.props;
    const itemLists = items.map((item, index) => {
      return (
        <li key={index} className="itemListWrap">
          <div className="itemListWrap">
            <img className="item" src={item.image_url} alt="" />
            <div className="itemSubject">
              <p className="topItemSubject">{item.name}</p>
              <img
                className="buyImg"
                src="https://t1.kakaocdn.net/friends/new_store/2.0/common/basket-pink-3.png"
                alt=""
              />
            </div>
            <div className="itemCost">
              {function(){if(item.discount_percentage > 0) {
                return (
                <div>
                  <span className="itemSaleCostNum">{Math.floor(item.discount_percentage)}% {(Math.floor((item.price - (item.discount_percentage * item.price * 0.01))/100)*100).toLocaleString()}원</span>
                  <div className="originCost">
                    {item.price}원
                  </div>
                </div>
                )
              } else {
                return (
                  <>
                    <span className="itemCostNum">{item.price.toLocaleString()}</span>
                    <span className="won"> 원</span>
                  </>
                )}
                }()
              }
            </div>
            <div className="opacityWrap"></div>
          </div>
        </li>
      );
    });

    return (
      <>
        <ul className="ItemLists">{itemLists}</ul>
      </>
    );
  }
}

export default ItemLists;
