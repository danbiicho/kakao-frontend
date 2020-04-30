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
              <img className = "itemImg" src="https://t1.daumcdn.net/friends/prod/product/20200423173253054_8809681709576_8809681709576_AW_00.jpg?type=thumb&opt=R255x255@2xa" alt=""/>
              <img className = "opacityWrap" alt=""/>
            </div>
            <span className="itemName">상품이름</span>
          </div>
          <div className="bucketRight">
            <select className="selectNum"></select>
            <span className="itemCost">상품금액</span>
            <button className="deleteItem"><img src="https://t1.kakaocdn.net/friends/new_store/btn_remove.png" alt=""/></button>
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