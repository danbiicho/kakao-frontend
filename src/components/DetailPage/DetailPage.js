import React, { Component } from "react";
import Slider from "react-slick";
import NavBar from "../Navbar/Navbar";
import DetailArticle from "./DetailArticle/DetailArticle";
import Footer from "../Footer/Footer";
import PaymentBar from "./PaymentBar/PaymentBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DetailPage.scss";

class DetailPage extends Component {
  constructor() {
    super()
    this.state = {
      datas: [],
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/DetailPage.json")
    .then(res => res.json())
    .then(res => {
      this.setState({
        datas: res.itemImg
      }, () => {console.log('fetch', this.state.datas)})
    })
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      autoplay: true,
    };

    const { datas } = this.state;

    const itemImg = datas.map((data) => {
      return <img src={data.src} alt=""/>
    })
    return (
      <div className="DetailPage">
        <NavBar />
        <div className="itemImgBanner">
          <Slider {...settings}>
              {itemImg}
          </Slider>
        </div>
        <div className="pageTop">
          <div className="subject">
            <p>죠르디에어팟케이스(pro)</p>
            <div className="shareHeaders">
              <img className="share" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/btn_katalk.png" alt="" />
              <img className="share" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/btn_kastory.png" alt="" />
              <img className="share" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/btn_facebook.png" alt="" />
              <img className="share" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/btn_twitter.png" alt="" />
            </div>
          </div>
          <div className="costInfo">
            <span>17,000</span><span>원</span>
          </div>
          <div className="starImg">
            <img className="star" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/star_on.png" alt=""/>
            <img className="star" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/star_on.png" alt=""/>
            <img className="star" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/star_on.png" alt=""/>
            <img className="star" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/star_on.png" alt=""/>
            <img className="star" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/star_on.png" alt=""/>
            <span>(4)</span>
          </div>
        </div>
        <DetailArticle />
        <Footer />
        <PaymentBar />
      </div>
    )
  }
}

export default DetailPage;