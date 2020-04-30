import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Menu/Menu.scss';

const obj = {
  "/index": 0,
  "/index1": 1,
  "/index2": 2,
  "/index3": 3,
  "/index4": 4
};

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabId: 0
    }
  }

  //componentDidMount = () => {
  //  let currentPath = this.props.history.location.pathname;
  //  this.setState({ activeTabId: obj[currentPath] });
  //}

  handleClick = (id) => {
    this.setState({activeTabId: id})
    this.props.onUpdateChild(id)
  }



  render() {
    return (
      <div className="Menu">
        <ul className="list">
          <li>
            <div>
              <button className={(this.state.activeTabId === 0) ? 'isStyleVisible' : 'listbutton'} onClick={() => this.handleClick(0)} >홈</button>
            </div>
          </li>
          <li>
            <div>
              <button className={(this.state.activeTabId === 1) ? 'isStyleVisible' : 'listbutton'} onClick={() => this.handleClick(1)}>신규</button>
            </div>
          </li>
          <li>
            <div>
              <button className={(this.state.activeTabId === 2) ? 'isStyleVisible' : 'listbutton'} onClick={() => this.handleClick(2)} >인기</button>
            </div>
          </li>
          <li>
            <button className={(this.state.activeTabId === 3) ? 'isStyleVisible' : 'listbutton'} onClick={() => this.handleClick(3)} >세일</button> </li>
          <li>
            <button className={(this.state.activeTabId === 4) ? 'isStyleVisible' : 'listbutton'} onClick={() => this.handleClick(4)} >전체</button >
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Menu);