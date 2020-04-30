import React, { Component } from "react";
import "./BucketItemComponent.scss";

class BucketItemComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectItem:[],
    }
  }
  render() {
    const { selectItem } = this.state;
    const selectItemMap = selectItem.map( item => {
      return(
      <div className="BucketItemComponent">
        <li className="bucketItemLists">
          <div className="bucketLeft">
            <img className ="checkImg" src="https://t1.kakaocdn.net/friends/new_store/ico_checked.png" alt=""/>
            <div className="bucketItem">
              <img className = "itemImg" src={item.itemImg} alt=""/>
              <div className = "opacityWrap" alt=""/>
            </div>
          <span className="itemName">{item.name}</span>
          </div>
          <div className="bucketRight">
            <select className="selectNum"></select>
            <span className="itemCost">{item.cost}원</span>
            <button className="deleteItem"><img className="deleteButton" src="https://t1.kakaocdn.net/friends/new_store/btn_remove.png" alt=""/></button>
          </div>
        </li>
      </div>
      )
    })
    return(
    <>{selectItemMap}</>
    )
  }
}
export default BucketItemComponent;