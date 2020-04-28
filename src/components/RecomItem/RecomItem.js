import React, { Component } from "react";
import "./RecomItem.scss";

class RecomItem extends Component {
  render() {
    return(
      <div className="RecomItem">
        <div className="RecomWrap">
          <span>잠깐만,<br/>이 상품은 어때요?</span>
          <div className="RecomItemLists"></div>
        </div>
      </div>
    )
  }
}

export default RecomItem;