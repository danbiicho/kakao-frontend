import React, { Component } from "react";
import "./BucketArticle.scss";

class BucketArticle extends Component {
  render() {
    return(
      <div className="BucketArticle">
        <span className="bucketInfo">아직 관심 상품이 없네요!<br/>귀여운 프렌즈 상품을 추천드릴게요</span>
        <div className="itemButton">
          <span>인기 상품 보기</span>
        </div>
      </div>
    )
  }
}
export default BucketArticle;