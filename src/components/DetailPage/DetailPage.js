import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import NavBar from "../Navbar/Navbar";
import DetailArticle from "./DetailArticle/DetailArticle";
import RecomItem from "../RecomItem/RecomItem";
import RecentlyItem from "../RecentlyItem/RecentlyItem";
import Footer from "../Footer/Footer";
import PaymentBar from "./PaymentBar/PaymentBar";
import { API } from "../../config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DetailPage.scss";

class DetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: [],
      itemInfo: {}
    }
  }
  componentDidMount = () => {
    fetch(`${API}/product/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(res => this.setState({
      itemInfo: res.information[0],
      datas: res.information.slice(1, res.information.length)
    })
  )}

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

    const { datas, itemInfo } = this.state;

    const itemImg = datas.map((data) => {
      return <img key="" src={data.image_url} alt=""/>
    })

    console.log(this.props)
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
            <p>{itemInfo.name}</p>
            <div className="shareHeaders">
              <img className="share" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/btn_katalk.png" alt="" />
              <img className="share" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/btn_kastory.png" alt="" />
              <img className="share" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/btn_facebook.png" alt="" />
              <img className="share" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/btn_twitter.png" alt="" />
            </div>
          </div>
          <div className="costInfo">
            <span>{itemInfo.price}</span><span>원</span>
          </div>
          <div className="starImg">
            <img className="star" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/star_off.png" alt=""/>
            <img className="star" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/star_off.png" alt=""/>
            <img className="star" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/star_off.png" alt=""/>
            <img className="star" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/star_off.png" alt=""/>
            <img className="star" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/star_off.png" alt=""/>
            <span>(0)</span>
          </div>
        </div>
        <DetailArticle itemInfo={this.state.itemInfo}/>
        <RecomItem />
        <RecentlyItem />
        <Footer />
        <PaymentBar />
      </div>
    )
  }
}

export default withRouter(DetailPage);