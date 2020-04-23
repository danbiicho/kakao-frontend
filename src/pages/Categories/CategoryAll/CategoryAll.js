import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryAll.scss';

class CategoryAll extends Component {
  render() {
    return (
      <div className="CategoryAll"
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}>
        <ul className="categoryUl">
          <li className="categoryAllList">
            <span>판매량순</span>
            <span>신상품순</span>
            <span>낮은 가격순</span>
            <span>높은 가격순</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(CategoryAll);