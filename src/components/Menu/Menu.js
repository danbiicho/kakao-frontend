import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Menu.scss';
import '../../styles/Reset.scss';

class Menu extends Component {
  render() {
    return (<div class="menu">
      <ul className="list">
        <li><button>홈</button></li>
        <li><button>신규</button></li>
        <li><button>인기</button></li>
        <li><button>세일</button></li>
        <li><button>전체</button></li>
      </ul>
    </div>
    );
  }
}

export default withRouter(Menu);