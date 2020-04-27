import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footerTop">
          <div>
            <img src="https://t1.kakaocdn.net/friends/new_store/2.0/common/brand-banner.png" alt="" />
            <span className="footerTop_banner">친구들이 궁금해요? 지금 바로 만나보세요!</span>
            <span className="footerTop_kakaoIntro">카카오프렌즈 소개</span>
            <span className="footerTop_middleBar">|</span>
            <span className="footerTop_brandstory">브랜드 스토리</span>
          </div>
        </div>
        <div className="footerBottom">
          <div>
            <div className="footerBottom_firstline">
              <span>개인정보처리방침</span>
              <span className="termsOfUse">이용약관</span>
              <span className="partnershipLnquiry">제휴문의</span>
            </div>
            <div className="footerBottom_kakaoInfo">
              <p>카카오아이엑스 사업자등록번호: 354-86-00070</p>
              <p>통신판매업 신고번호 : 2017-서울강남-02573</p>
              <p>대표이사 : 권승조</p>
              <p>주소 : 서울특별시 강남구 테헤란로 521 파르나스타워, 27층</p>
              <p>store@kakaofriends.com</p>
              <p>글로벌 배송 문의 : global@kakaofriends.com</p>
            </div>
            <div className="footerBottom_lastline">
              <p>Copyright © KAKAO IX CORP.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Footer);