import React, { Component } from "react";
import ItemLists from "../../../components/ItemLists/ItemLists";
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
          });
      });
  };
  render() {
    return (
      <div className="NewArticle">
        <div className="articleWidth">
          <div className="newSubject">
            <p className="topNewSubject">추천 신규 테마</p>
            <p className="bottomNewSubject">베이비 드리밍</p>
          </div>
          <ul className="articleLists">
            <ItemLists />
          </ul>
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
          <ul className="articleLists"><ItemLists/></ul>
        </div>
      </div>
    );
  }
}

export default NewArticle;
