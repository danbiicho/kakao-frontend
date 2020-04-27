import React, { Component } from "react";
import Delivery from "../Delivery/Delivery";
import Comment from "../Comment/Comment";
import "./DetailArticle.scss";

class DetailArticle extends Component {
  render() {
    return(
      <div className="DetailArticle">
        <div className="itemInfo">
          <p className="infoTop">에어팟 프로 지켜죠르디</p>
          <p className="infoBottom">쨔쟌- 신상 죠르디 케이스예요.<br/>
            옴뇸뇸 만족스러운 얼굴로 사과를 품었어요.<br/>
            에어팟 프로! 유저들이 기다리던<br/>
            말랑 실리콘 재질의 에어팟프로 케이스입니다. 에어팟 프로가 쏙 들어가는 오동통한 바디,<br/>
            머리 위 사과, 번쩍 일어설 수 있는<br/>
            짧고 통통한 두 다리가 포인트예요.</p>
        </div>
        <div className="item">
          <img className="itemImg" src="https://t1.kakaocdn.net/friends/prod/product/20200423173453277_8809681709583_BW_00_(1).jpg" alt="" />
          <img className="itemImg" src="https://t1.kakaocdn.net/friends/prod/product/20200423173453305_8809681709583_BW_01_(1).jpg" alt="" />
          <img className="itemImg" src="https://t1.kakaocdn.net/friends/prod/product/20200423173453351_8809681709583_BW_02_(1).jpg" alt="" />
          <img className="itemImg" src="https://t1.kakaocdn.net/friends/prod/product/20200423173453351_8809681709583_BW_03_(1).jpg" alt="" />
          <img className="itemImg" src="https://t1.kakaocdn.net/friends/prod/product/20200423173453401_8809681709583_BW_04_(1).jpg" alt="" />
          <img className="itemImg" src="https://t1.kakaocdn.net/friends/prod/product/20200423173453464_8809681709583_BW_05_(1).jpg" alt="" />
        </div>
        <div className="detailInfo">
          <p className="detailTop">세부정보</p>
          <ul>
            <li><div className="dot"/>종류 : 에어팟케이스</li>
            <li><div className="dot"/>소재 : 실리콘</li>
            <li><div className="dot"/>치수 : 9.4*7.4*2.7cm, 42g</li>
            <li><div className="dot"/>제조자/수입자 : 아스카코리아</li>
            <li><div className="dot"/>제조국 : 중국</li>
            <li><div className="dot"/>취급 시 주의사항<br/>
            1) 고온에 장시간 노출될 경우 재질의 특성상 제품의 변형이 일어날 수 있습니다.<br/>
            2) 제품 착탈 시 과도한 힘은 제품 또는 기기에 손상을 줄 수 있습니다.<br/>
            3) 사용자의 부주의로 인한 파손 및 변질은 책임지지 않습니다.<br/>
            4) 직사광선 또는 제품의 재질에 손상을 줄 수 있는 환경 또는 물질에 의한 변색이 일어날 수 있습니다.</li>
            <li><div className="dot"></div>A/S 책임자와 전화번호 : 카카오프렌즈 고객센터 1577-6263</li>
          </ul>
        </div>
        <Delivery />
        <Comment />
      </div>
    )
  }
}

export default DetailArticle;