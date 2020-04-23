import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.scss';
import Categories from '../../pages/Categories/Categories';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isNavOpen: false,
    }
  }

  openNav = () => {
    this.setState({
      isNavOpen: true
    })
  }

  closeNav = () => {
    this.setState({
      isNavOpen: false
    })
  }

  render() {
    return (
      <div className="Navbar">
        <nav>
          <ul className="navSectionLeft">
            <div className="navCategory">
              <div className="category"
                onMouseEnter={this.openNav}
              >카테고리</div>
              <img src="https://t1.kakaocdn.net/friends/new_store/2.0/pc/ico-header-triangle.png" alt="" />
            </div>
            <div className="shopInfo">
              <div>매장안내</div>
            </div>
            <div className="consumerSenter">
              <div>고객센터</div>
            </div>
          </ul>
          <img className="kakaoFriends" src="https://t1.kakaocdn.net/friends/new_store/2.0/pc/friends-logo.png" alt="" />
          <div className="navSectionRight">
            <div className="searchBox">
              <div className="search">
                <input placeholder="무엇을 찾으세요?"></input>
              </div>
              <img className="searchBotton" src="https://t1.kakaocdn.net/friends/new_store/2.0/pc/ico-header-search.png" alt="" />
            </div>
            <img className="mypageIcon" src="https://t1.kakaocdn.net/friends/new_store/2.0/pc/ico-header-mypage.png" alt="" />
            <img className="baskestIcon" src="https://t1.kakaocdn.net/friends/new_store/2.0/pc/ico-header-basket.png" alt="" />
            <img className="langenIcons" src="https://t1.kakaocdn.net/friends/new_store/2.0/pc/ico-header-lang-en.png" alt="" />
          </div>
        </nav>
        {this.state.isNavOpen && <Categories onMouseLeave={this.closeNav} />}
      </div>
    )
  }
}

export default withRouter(Navbar);