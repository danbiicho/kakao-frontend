import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    return(
      <div class="navBody">
        <nav>
          <ul class="navSectionLeft">
            <div class="navCategory">
              <div>카테고리</div>
              <img src="https://t1.kakaocdn.net/friends/new_store/2.0/pc/ico-header-triangle.png" alt=""/>
            </div>
            <div class="shopInfo">
              <div>매장안내</div>
            </div>
            <div class="consumerSenter">
              <div>고객센터</div>
            </div>
          </ul>
          <img class="kakaoFriends" src="https://t1.kakaocdn.net/friends/new_store/2.0/pc/friends-logo.png" alt=""/>
          <div class="navSectionRight">
            <div class="searchBox">
              <div class="search">
                <input placeholder="무엇을 찾으세요?"></input>
              </div>
              <img class="searchBotton" src="https://t1.kakaocdn.net/friends/new_store/2.0/pc/ico-header-search.png" alt=""/>
            </div>
            <img class="mypageIcon" src="https://t1.kakaocdn.net/friends/new_store/2.0/pc/ico-header-mypage.png" alt=""/>
            <img class="baskestIcon" src="https://t1.kakaocdn.net/friends/new_store/2.0/pc/ico-header-basket.png" alt=""/>
            <img class="langenIcons" src="https://t1.kakaocdn.net/friends/new_store/2.0/pc/ico-header-lang-en.png" alt=""/>
          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(Navbar);