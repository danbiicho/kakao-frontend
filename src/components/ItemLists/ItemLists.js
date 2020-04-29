import React, { Component } from "react";
import "./ItemLists.scss";

class ItemLists extends Component {
  constructor() {
    super();
    this.state = {
      datas: [],
      idx: [],
      clicked: false
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
        );
      });
  };

  handleCart = (i) => {
    this.state.idx.push(i)
    this.setState({
      clicked: true
    })
  }

  render() {
    const { datas } = this.state;

    const itemLists = datas.map((data, index) => {
      return (
        <li key={index} className="itemListWrap">
          <div className="itemListWrap">
            <img className="item" src={data.src} alt="" />
            <div className="itemSubject">
              <p className="topItemSubject">{data.name}</p>
              <div
                key={data.id}
                className={this.state.idx.indexOf(data.id) !== -1 && this.state.clicked? 'buyImgAble' : 'buyImgDisable'}
                {...console.log(this.state.idx.indexOf(data.id))}
                onClick={() => this.handleCart(data.id)}
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
