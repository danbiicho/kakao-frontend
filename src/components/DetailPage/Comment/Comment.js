import React, { Component } from "react";
import "./Comment.scss"

class Comment extends Component {
  render() {
    return(
      <div className="Comment">
        <div className="subject">
          <div className="score">
            <p>리뷰 4개</p>
            <div className="starImg">
              <img className="star" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/star_on.png" alt=""/>
              <img className="star" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/star_on.png" alt=""/>
              <img className="star" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/star_on.png" alt=""/>
              <img className="star" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/star_on.png" alt=""/>
              <img className="star" src="https://t1.kakaocdn.net/friends/new_store/2.0/common/star_on.png" alt=""/>
              <div className="starInfo">
                <span className="bold">5</span>
                <span className="slash">|</span>
                <span className="gray">5.0</span>
              </div>
            </div>
          </div>
          <div className="reviewButton">
            <img src="https://t1.kakaocdn.net/friends/new_store/2.0/common/review_pen.png" alt=""/>
            리뷰를 남겨주세요
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;