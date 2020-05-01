import React, { Component } from "react";
import Delivery from "../Delivery/Delivery";
import Comment from "../Comment/Comment";
import "./DetailArticle.scss";

class DetailArticle extends Component {
  render() {
    return(
      <div className="DetailArticle">
        <div className="itemInfo">
          <div className="detailInfo" dangerouslySetInnerHTML={{__html: this.props.itemInfo.detail}}/>
        <Delivery />
        <Comment />
        </div>
      </div>
    )
  }
}

export default DetailArticle;

