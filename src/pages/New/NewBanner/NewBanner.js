import React, { Component } from "react";
import "./NewBanner.scss";

class NewBanner extends Component {
  render() {
    return (
      <div className="NewBanner">
        <img
          className="newBannerImg"
          src="https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20200122101812_web_kr.jpg?type=thumb&opt=R1080x210@2xa"
          alt=""
        />
        <div className="moveImgButton">
          <button className="goBack"></button>
          <button className="goFront"></button>
        </div>
        <div className="bannerInfo">
          <p className="TopInfo">메가급 귀여움에 포옥</p>
          <p className="bottomInfo">리틀라이언 메가바디필로우</p>
        </div>
      </div>
    );
  }
}

export default NewBanner;
