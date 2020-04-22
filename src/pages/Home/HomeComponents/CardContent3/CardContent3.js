import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CardContent3.scss';
import '../../../../styles/Reset.scss';

class CardContent3 extends Component {
    render() {
        return (
            <div className="CardContent3">
                <article className="content">
                    <div className="cardContents">
                        <span className="imgWrap">
                            <img className="imgWrapImg" src="https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20200409151512_kr.jpg?type=thumb&opt=R329x247@2xa" alt="img" />
                        </span>
                        <div className="detailWrap">
                            <span className="detailLabel">
                                2NEW
                                </span>
                            <h3 className="detailTitle">촉감천재 등판 <br /> 대왕말랑 페이스쿠션</h3>
                            <p className="detailText">
                                동-그랗고 커-다란 쫀득쫀득 말랑말랑 페이스 쿠션과 어디든 달랑달랑 달고픈 페이스 키링 신상 모음
                            </p>
                        </div>
                        <div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default withRouter(CardContent3);