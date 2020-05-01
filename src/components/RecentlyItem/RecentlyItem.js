import React, { Component } from "react";
import "./RecentlyItem.scss";

class RecentlyItem extends Component {
  render() {
    return(
      <div className="RecentlyItem">
        <div className="RecentlyWrap">
          <span>최근 본 상품이<br/>요기 있네</span>
          <div className="RecentlyItemLists"></div>
        </div>
      </div>
    )
  }
}

export default RecentlyItem;