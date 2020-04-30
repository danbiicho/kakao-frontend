import React, { Component } from "react";
import "./ItemLists.scss";

class ItemLists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[],
      selectItem:[],
    }
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
  
  handleClick = (e) => {
    this.state.selectItem.push(e)
  }

  handleCart = (i) => {
    this.state.idx.push(i)
    this.setState({
      clicked: true
    })
  }

  render() {
    const {
      items = []
    } = this.props;
    const itemLists = items.map((item, index) => {
      return (
        <li key={index} className="itemListWrap">
          <div className="itemListWrap">
            <img className="item" onClick={this.itemId(item.id)} src={item.image} alt="" />
            <div className="itemSubject">
              <p className="topItemSubject">{item.name}</p>
              <img
                className="buyImg"
                onClick={this.handleClick(item)}
                src="https://t1.kakaocdn.net/friends/new_store/2.0/common/basket-pink-3.png"
                alt=""
              />
            </div>
            <div className="itemCost">
              {function() {if(item.discount_percentage === true) 
                return (
                  <div>
                    <span>{item.discount_percentage}</span>
                    <span className="itemCostNum">{item.price}</span>
                    <span className="won"> 원</span>
                    <div>
                      {item.price}
                    </div>
                  </div>
                )}
              }
              <span className="itemCostNum">{item.price}</span>
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
