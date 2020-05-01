import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import InnerCategory from "../../components/InnerCategory/InnerCategory";
import { API } from "../../config";
import "./Categories.scss";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoryState: [],
      innerCategories: []
    };
  }

  componentDidMount = () => {
    fetch(`${API}/product/kind`)
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        categories: res.category
      })
    })
  }

  changeCategory = () => {
    this.setState({
      categoryState: !this.state.categoryState
    })
  }

  hoverHandler = (category) => {
    const key = Object.keys(category)[0];
    this.setState({innerCategories: category[key]})
  }

  render() {
    const { categories, innerCategories } = this.state;

    return (
      <div className="Categories">
        <div className="categoriesHover">
          <div
            className="categoryWrapper"
            onMouseLeave={this.props.onMouseLeave}
          >
            <ul className="categoryMenuUl">
              <div className="categoryList1">
                {categories.map( (category, index) => {
                  return (
                    <li key={index} onMouseEnter={() => this.hoverHandler(category)}>
                      {Object.keys(category)}
                    </li>
                    )
                  })}
              </div>
            <InnerCategory InnerCategories={innerCategories}/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Categories);
