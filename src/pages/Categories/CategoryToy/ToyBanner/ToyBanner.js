import React, { Component } from "react";
import "./ToyBanner.scss";

class ToyBanner extends Component {
  render() {
    return(
      <div className="ToyBanner">
        <img src="https://t1.daumcdn.net/friends/prod/category/category_toy_W.jpg" alt=""/>
        <span className="bannerName">토이</span>
      </div>
    )
  }
}

export default ToyBanner;