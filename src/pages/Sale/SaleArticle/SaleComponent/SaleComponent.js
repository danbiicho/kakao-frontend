import React, { Component } from "react";
import "./SaleComponent.scss";

class SaleComponent extends Component {
  constructor() {
    super()
    this.state = {
      datas:[],
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/SaleComponent.json")
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        datas: res.SaleCard
      })
    })
  }

  render() {
    const { datas } = this.state;
    const SaleCards = datas.map((data) => {
      return (
        <div className="Card">
          <img className="saleImg" src={data.url} alt="" />
          <div className="saleInfo">
            <div className="itemName">{data.name}</div>
            <div className="itemCost">
              <div>
                <span className="saleCost">{data.percent} {data.saleCost}</span>
                <span className="won1">원</span>
              </div>
              <div>
                <span className="originCost">{data.originCost}</span>
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