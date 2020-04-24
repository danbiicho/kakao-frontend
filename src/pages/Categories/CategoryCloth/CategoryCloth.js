import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryCloth.scss';

class CategoryCloth extends Component {
  render() {
    return (
      <div className="CategoryCloth"
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}>
        <ul className="categoryUl">
          <li className="categoryClothList">
            <span>여성</span>
            <span>남성</span>
            <span>키즈</span>
            <span>속옷</span>
            <span>양말</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(CategoryCloth);