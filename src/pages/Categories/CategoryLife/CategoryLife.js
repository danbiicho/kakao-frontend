import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryLife.scss';

class CategoryLife extends Component {
  render() {
    return (
      <div className="CategoryLife"
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}>
        <ul className="categoryUl">
          <li className="categoryLifeList">
            <span>노트북 액세서리</span>
            <span>소형 전자</span>
            <span>에어팟 케이스</span>
            <span>에어팟 악세서리</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(CategoryLife);