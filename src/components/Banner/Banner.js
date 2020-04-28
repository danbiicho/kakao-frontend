import React, { Component } from "react"
import Slider from "react-slick";
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
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      autoplay: true,
      arrows: true,
      prevArrow: (
        <button type="button" className="slick-prev"></button>
      ),
      nextArrow: (
        <button type="button" className="slick-next"></button>
      )
    };

    const { datas } = this.state;
    const BannerMap = datas.map((data, index) => {
      return (
        <li key={index}>
          <img className="newBannerImg" src={data.img} alt="" />
          <div className="bannerInfo">
            <p className="TopInfo">{data.text1}</p>
            <p className="bottomInfo">{data.text2}</p>
          </div>
        </li>
      );
    });
    return (
      <div className="Banner">
        <Slider {...settings}>{BannerMap}</Slider>
      </div>
    )
  }
}

export default Banner;
