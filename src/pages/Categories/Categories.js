import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CategoryToy from "./CategoryToy/CategoryToy";
import "./Categories.scss";

class Categories extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="categories">
        <div className="categoriesHover">
          <div
            className="categoryWrapper"
            onMouseLeave={this.props.onMouseLeave}
          >
            <ul className="categoryMenuUl">
              <div class="categoryList1">
                <li>전체</li>
                <li>테마 기획전</li>
                <li>토이</li>
                <li>리빙</li>
                <li>잡화 </li>
                <li>문구</li>
                <li>의류</li>
                <li>파자마</li>
                <li>여행/레져</li>
                <li>생활테크</li>
                <li>폰 액세서리</li>
                <li>식품</li>
              </div>
              <CategoryToy />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Categories);
