import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/Menu.scss';

class Menu extends Component {
  render() {
    return(
      <div className="menu">
        <ul>
          <li>홈</li>  
          <li>신규</li>
          <li>인기</li>
          <li>세일</li>  
          <li>전체</li>
        </ul>
      </div>        
    );
  }
}

export default withRouter(Menu);