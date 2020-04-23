import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryPhone.scss';

class CategoryPhone extends Component {
  render() {
    return (
      <div className="CategoryPhone"
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}>
        <ul className="categoryUl">
          <li className="categoryPhoneList">
            <span>휴대폰 케이스</span>
            <span>휴대폰 액세서리</span>
            <span>충전기</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(CategoryPhone);