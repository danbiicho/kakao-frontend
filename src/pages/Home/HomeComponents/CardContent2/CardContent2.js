import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CardContent2.scss';

class CardContent2 extends Component {
    render() {
        return (
            <div className="CardContent2">
                <article className="content">
                    <div className="cardContents">
                        <span className="imgWrap">
                            <img className="imgWrapImg" src="https://t1.kakaocdn.net/friends/new_store/prod/main_tab/home/home_20191128103949_kr.jpg?type=thumb&opt=R329x247@2xa" alt="" />
                        </span>
                        <div className="detailWrap">
                            <span className="detailLabel">
                                3NEW
                            </span>
                            <h3 className="detailTitle">촉감천재 등판 <br /> 대왕말랑 페이스쿠션</h3>
                            <p className="detailText">
                                동-그랗고 커-다란 쫀득쫀득 말랑말랑 페이스 쿠션과 어디든 달랑달랑 달고픈 페이스 키링 신상 모음
                            </p>
                        </div>
                        <div className="listWrap">
                            <ul className="itemLisRowUl">
                                <li className="itemListRowLi">
                                    <a className="itemListA" href="/">
                                        <span className="item">
                                            <img className="itemImg" src="https://t1.daumcdn.net/friends/prod/product/8809656139186_AW_00.jpg?type=thumb&opt=R103x103@2xa" alt="" />
                                        </span>
                                        <div className="itemInfoWrap">
                                            <div className="listTitle">
                                                <p className="listTitle_p">
                                                    프렌즈워터 2L*6입
                                                 </p>
                                            </div>
                                            <div className="priceArea">
                                                <span className="priceAreaPercent">50%</span>
                                                <span className="priceAreaPrice">4,5000</span>
                                                <span className="priceAreaWon">원</span>
                                            </div>
                                            <div className="or">
                                                <p className="orPrice">9,000</p>
                                                <p className="orWon">원</p>
                                            </div>
                                            <div className="cartButton">
                                                <button className="cartImg"></button>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="itemListRowLi">
                                    <a className="itemListA" href="/">
                                        <span className="item">
                                            <img className="itemImg" src="https://t1.daumcdn.net/friends/prod/product/8809656139186_AW_00.jpg?type=thumb&opt=R103x103@2xa" alt="" />
                                        </span>
                                        <div className="itemInfoWrap">
                                            <div className="listTitle">
                                                <p className="listTitle_p">
                                                    프렌즈워터 2L*6입
                                                 </p>
                                            </div>
                                            <div className="priceArea">
                                                <span className="priceAreaPercent">50%</span>
                                                <span className="priceAreaPrice">4,5000</span>
                                                <span className="priceAreaWon">원</span>
                                            </div>
                                            <div className="or">
                                                <span className="orPrice">9,000</span>
                                                <span className="orWon">원</span>
                                            </div>
                                            <div className="cartButton">
                                                <button className="cartImg"></button>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="itemListRowLi">
                                    <a className="itemListA" href="/">
                                        <span className="item">
                                            <img className="itemImg" src="https://t1.daumcdn.net/friends/prod/product/8809656139186_AW_00.jpg?type=thumb&opt=R103x103@2xa" alt="" />
                                        </span>
                                        <div className="itemInfoWrap">
                                            <div className="listTitle">
                                                <p className="listTitle_p">
                                                    프렌즈워터 2L*6입
                                                 </p>
                                            </div>
                                            <div className="priceArea">
                                                <span className="priceAreaPercent">50%</span>
                                                <span className="priceAreaPrice">4,5000</span>
                                                <span className="priceAreaWon">원</span>
                                            </div>
                                            <div className="or">
                                                <span className="orPrice">9,000</span>
                                                <span className="orWon">원</span>
                                            </div>
                                            <div className="cartButton">
                                                <button className="cartImg"></button>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default withRouter(CardContent2);