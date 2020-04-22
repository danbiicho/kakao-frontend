import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Menu/Menu.scss';

class Menu extends Component {
  // constructor() {
  //   super();
  //   this.state = {isClicked: ture};    
  // }
  render() {
    return (
      <div class="Menu">
        <ul className="list">
          <li className="Li1">
            <button>홈</button>
            <hr className="highlight" />
          </li>
          <li className="2" ><button>신규</button></li>
          <li className="3" ><button>인기</button></li>
          <li ><button>세일</button></li>
          <li><button>전체</button></li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Menu);