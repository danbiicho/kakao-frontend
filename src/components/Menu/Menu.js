import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Menu/Menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabId: 0
    }
  }

  componentDidMount = () => {
    // console.log("Menu CDM url : ", this.props.history.location.pathname);
    let currentPath = this.props.history.location.pathname;

    if (currentPath === "/") return;
    if (currentPath === "/New") this.setState({ activeTabId: 1 });
    if (currentPath === "/Hot") this.setState({ activeTabId: 2 });
    if (currentPath === "/Sale") this.setState({ activeTabId: 3 });
    if (currentPath === "/All") this.setState({ activeTabId: 4 });
  }

  handleClick = (path) => {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="Menu">
        <ul className="list">
          <li>
            <div>
              <button className={(this.state.activeTabId === 0) ? 'isStyleVisible' : 'listbutton'} onClick={() => this.handleClick('/')} >홈</button>
            </div>
          </li>
          <li>
            <div>
              <button className={(this.state.activeTabId === 1) ? 'isStyleVisible' : 'listbutton'} onClick={() => this.handleClick('/New')}>신규</button>
            </div>
          </li>
          <li>
            <div>
              <button className={(this.state.activeTabId === 2) ? 'isStyleVisible' : 'listbutton'} onClick={() => this.handleClick('/Hot')} >인기</button>
            </div>
          </li>
          <li>
            <button className={(this.state.activeTabId === 3) ? 'isStyleVisible' : 'listbutton'} onClick={() => this.handleClick('/Sale')} >세일</button>
          </li>
          <li>
            <button className={(this.state.activeTabId === 4) ? 'isStyleVisible' : 'listbutton'} onClick={() => this.handleClick('/All')} >전체</button >
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Menu);