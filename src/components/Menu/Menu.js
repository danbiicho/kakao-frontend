import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Menu/Menu.scss';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      activeTabId: 0
    }
  }

  handleClick = (id) => {
    this.setState({
      activeTabId: Number(id),
    });
  }

  render() {
    return (
      <div class="Menu">
        <ul className="list">
          <li>
            <button className={(this.state.activeTabId === 0) ? 'isStyleVisible' : 'listbutton'} onClick={() => { this.handleClick(0) }} >홈</button>
          </li>
          <li>
            <button className={(this.state.activeTabId === 1) ? 'isStyleVisible' : 'listbutton'} onClick={() => { this.handleClick(1) }} >신규</button>
          </li>
          <li>
            <button className={(this.state.activeTabId === 2) ? 'isStyleVisible' : 'listbutton'} onClick={() => { this.handleClick(2) }} >인기</button>
          </li>
          <li>
            <button className={(this.state.activeTabId === 3) ? 'isStyleVisible' : 'listbutton'} onClick={() => { this.handleClick(3) }} >세일</button>
          </li>
          <li>
            <button className={(this.state.activeTabId === 4) ? 'isStyleVisible' : 'listbutton'} onClick={() => { this.handleClick(4) }} >전체</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Menu);