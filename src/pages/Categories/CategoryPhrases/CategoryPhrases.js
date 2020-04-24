import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryPhrases.scss';

class CategoryPhrases extends Component {
  render() {
    return (
      <div className="CategoryPhrases"
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}>
        <ul className="categoryUl">
          <li className="categoryPhrasesList">
            <span>필기구</span>
            <span>필통/케이스</span>
            <span>노트/메모</span>
            <span>파일</span>
            <span>스티커</span>
            <span>데스크 소품</span>
            <span>카드/엽서</span>
            <span>선물 포장</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(CategoryPhrases);