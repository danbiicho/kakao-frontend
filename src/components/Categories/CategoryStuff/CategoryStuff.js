import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryStuff.scss';

class CategoryStuff extends Component {
  render() {
    return(
      <div className="categoryStuff"
      onMouseEnter={this.props.onMouseEnter}
      onMouseLeave={this.props.onMouseLeave}>
        <ul className="categoryUl">
          <li className="categoryStuffList">
            <span>신발</span>
            <span>파우치/지갑/기방</span>
            <span>패션소품</span>
            <span>우산</span>
            <span>시즌잡화</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(CategoryStuff);