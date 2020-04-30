import React, { Component } from "react";
import "./ItemLists.scss";

class ItemLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/itemLists.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            datas: res.item1,
          });
      });
  };
  
  render() {
    const { datas } = this.state;

    const itemLists = datas.map((data) => {
      return (
        <li className="itemListWrap">
          <div className="itemListWrap">
            <img className="item" onClick={this.itemId(data.id)} src={data.src} alt="" />
            <div className="itemSubject">
              <p className="topItemSubject">{data.name}</p>
              <img
                className="buyImg"
                src="https://t1.kakaocdn.net/friends/new_store/2.0/common/basket-pink-3.png"
                alt=""
              />
            </div>
            <div className="itemCost">
              <span className="itemCostNum">{data.cost}</span>
              <span className="won"> 원</span>
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
