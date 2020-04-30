import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./InnerCategory.scss";

class InnerCategory extends Component {
  render() {
    const { InnerCategories } = this.props;
    return(
      <div className="InnerCategory">
        {InnerCategories.map( category => (
          <Link to="/products/category/subject"><li>{category.name}</li></Link>
        )
        )}
      </div>
    )
  }
}

export default InnerCategory;