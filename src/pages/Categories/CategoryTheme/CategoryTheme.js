import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryTheme.scss';

class CategoryTheme extends Component {
  render() {
    return(
      <div className="categoryTheme" onMouseEnter={this.props.onMouseEnter}>
        <ul className="categoryUl">
          <li className="categoryThemeList">
          <span>베이비드리밍</span>
          <span>해피위크</span>
          <span>강다니엘 에디션</span>
          <span>치즈프렌즈</span>
          <span>트와이스 에디션</span>
          <span>포레스트 라이언</span>
          <span>허니프렌즈</span>
          <span>레이지선데이</span>
          <span>러블리 어피치</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(CategoryTheme);