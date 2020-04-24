import React, { Component } from "react";
import Pagination from "../../components/Pagination/Pagination";
import "./ItemLists.scss";

class ItemLists extends Component {
  constructor() {
    super();
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
          },
          () => console.log(this.state.datas)
        );
      });
  };

  render() {
    const { datas } = this.state;

    const itemLists = datas.map((data) => {
      return (
        <li className="itemListWrap">
          <div className="itemListWrap">
            <img className="item" src={data.src} alt="" />
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
        <Pagination />
      </>
    );
  }
}

export default ItemLists;
