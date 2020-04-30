import React, { Component } from "react"
import Slider from "react-slick";
import { API } from "../../config";
import "./Banner.scss";

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  mkBanner = () => {
    fetch(`${API}/product/new`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          items: res.all_new_image,
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

    const { items } = this.state;
    const BannerMap = items.map((item) => {
      return (
        <li key={item.id}>
          <img className="newBannerImg" src={item.image_url} alt="" />
          <div className="bannerInfo">
            <p className="TopInfo">{item.name}</p>
            <p className="bottomInfo">{item.description}</p>
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
