import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import InnerCategory from "../../components/InnerCategory/InnerCategory";
import SelectBox1 from "../../components/SelectBox/SelectBox1";
import { API } from "../../config";
import "./Categories.scss";

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      datas: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/category.json")
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        datas: res.Category
      })
    })
  }

  render() {
    return (
      <div className="Categories">
        <div className="categoriesHover">
          <div
            className="categoryWrapper"
            onMouseLeave={this.props.onMouseLeave}
          >
            <ul className="categoryMenuUl">
              <div className="categoryList1">
                {this.state.datas.map( (data) => {
                  return <li>{data.name}</li>
                  })}
              </div>
              <InnerCategory/>
              <SelectBox1/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Categories);
