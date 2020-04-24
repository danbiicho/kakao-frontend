import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../../../../components/Navbar/Navbar";
import CategoryLists from "../../../../components/CategoryLists/CategoryLists";
import Footer from "../../../../components/Footer/Footer";
import "./ToyMiniDoll.scss";

class ToyMiniDoll extends Component {
  render() {
    return (
      <div className="ToyMiniDoll">
        <NavBar />
        <div className="toyBanner">
          <div>
            <img
              src="https://t1.daumcdn.net/friends/prod/category/category_toy_W.jpg"
              alt=""
            />
          </div>
          <p>토이</p>
        </div>
        <CategoryLists />
        <Footer />
      </div>
    );
  }
}

export default withRouter(ToyMiniDoll);
