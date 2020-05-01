import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./ItemLists.scss";

class ItemLists extends Component {
  constructor(props) {
    super(props)
    this.state={
      bucketLists: [],
      bucketImg: "",
    }
  }

  
  goBucket = (item) => {
    this.state.bucketLists.push(item)
    this.setState({
      bucketImg: item.id
    })
  }

  goDetailPage = (id) => {
    this.props.history.push(`/products/${id}`)
  }
  

  render() {
    const {
      items = []
    } = this.props;

    const itemLists = items.map((item, index) => {
      return (
        <li key={index} className="itemListWrap">
          <div className="itemListWrap" onClick={()=>this.goDetailPage(item.id)}>
            <img className="item" src={item.image_url} alt=""/>
            <div className="itemSubject">
              <p className="topItemSubject">{item.name}</p>
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
          <img
          className="buyImg"
          onClick={()=>this.goBucket(item)}
          src={(this.state.bucketImg === item.id) ? "https://t1.kakaocdn.net/friends/new_store/2.0/common/basket-pink.png":"https://t1.kakaocdn.net/friends/new_store/2.0/common/basket-pink-3.png"}
          alt=""
          />
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

export default withRouter(ItemLists);
