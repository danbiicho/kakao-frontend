import React, { Component } from "react";
import NavBar from "../../components/Navbar/Navbar";
//import BucketArticle from "./BucketArticle/BucketArticle";
import AddtoBucket from "./AddtoBucket/AddtoBucket";
import Footer from "../../components/Footer/Footer";
import "./BucketLists.scss";

class BucketLists extends Component {
  render() {
    return(
      <div className="BucketLists">
        <NavBar/>
        <div className="bucketWrap">
          <div className="bucket">
            <span className="subject">장바구니</span>
          </div>
          {/*<BucketArticle />*/}
          <AddtoBucket />
        </div>
        <Footer/>
      </div>
    )
  }
}

export default BucketLists;