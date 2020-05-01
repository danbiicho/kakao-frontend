import React, { Component } from "react";
import "./CategoryLists.scss";

class CategoryLists extends Component {
  constructor() {
    super()
    this.state = {
      datas: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/CategoryLists.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          datas: res.list1
        });
      });
  };
  render() {
    const { datas } = this.state;

    const categoryLists = datas.map((data) => {
      return (
          <button className="categoryButton">
            {data}
          </button>
      );
    });

    return (
      <>
      <div className="CategoryLists">
        {categoryLists}
      </div>
      </>
    )}
}

export default CategoryLists;