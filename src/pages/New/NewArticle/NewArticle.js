import React, { Component } from "react";
import "./NewArticle.scss";

class NewArticle extends Component {
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
                <p className="topItemSubject">
                {data.name}
                </p>
                <img className="buyImg"
                    src="https://t1.kakaocdn.net/friends/new_store/2.0/common/basket-pink-3.png"
                    alt="" />
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
      <div className="NewArticle">
        <div className="articleWidth">
          <div className="newSubject">
            <p className="topNewSubject">추천 신규 테마</p>
            <p className="bottomNewSubject">베이비 드리밍</p>
          </div>
          <ul className="articleLists">{itemLists}</ul>
          <div className="addItemsWith">
            <div className="addItems">
              더 보기
              <img
                src="https://t1.kakaocdn.net/friends/new_store/more-black.png"
                alt=""
              />
            </div>
          </div>
          <div className="newSubject">
            <p className="topNewSubject">오늘 업데이트 했어요</p>
            <p className="bottomNewSubject">새로운 친구들</p>
          </div>
          <ul className="articleLists">{itemLists}</ul>
        </div>
      </div>
    );
  }
}

export default NewArticle;
