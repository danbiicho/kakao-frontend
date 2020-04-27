import React, { Component } from "react";
import "./Banner.scss";

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      datas: [],
    };
  }

  mkBanner = () => {
    fetch("http://localhost:3000/data/Banner.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          datas: res.banner,
        });
      });
  };

  componentDidMount = () => {
    this.mkBanner();
  };

  render() {
    const { datas } = this.state;
    const BannerMap = datas.map((data) => {
      return (
        <div className="Banner">
          <img className="newBannerImg" src={data.img} alt="" />
          <div className="moveImgButton">
            <button className="goBack"></button>
            <button className="goFront"></button>
          </div>
          <div className="bannerInfo">
            <p className="TopInfo">{data.text1}</p>
            <p className="bottomInfo">{data.text2}</p>
          </div>
        </div>
      );
    });
    return <>{BannerMap}</>;
  }
}

export default Banner;
