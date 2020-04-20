import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './MainContents.scss';
import '../../styles/Reset.scss';

class MainContents extends Component {
    render() {
        return (
            <div className="container">
                <div className="contents">
                    <article className="content">
                        <div className="cardContents">
                            <span className="imgWrap">
                                <img className="imgWrapImg" src="https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20200417101758_kr.jpg?type=thumb&amp;opt=R335x187@2xa" />
                            </span>
                            <div className="detailWrap">
                                <span className="detailLabel">
                                    <p>NEW</p>
                                </span>
                                <h3 className="detailTitle">촉감천재 등판 <br /> 대왕말랑 페이스쿠션</h3>
                                <p className="detailText">
                                    동-그랗고 커-다란 쫀득쫀득 말랑말랑 페이스 쿠션과 어디든 달랑달랑 달고픈 페이스 키링 신상 모음
                            </p>
                            </div>
                            <div className="itemListWrap">
                                <ul className="itemListUl">
                                    <li className="itemListLi">
                                        <span className="thumImgWrap">
                                            <img className="thumImg" src="https://t1.daumcdn.net/friends/prod/product/8809681706995_AW_00.jpg?type=thumb&amp;opt=R255x255@2xa" />
                                        </span>
                                        <p className="itemWrap">
                                            <p className="itemTitle">페이스 말랑쿠션 라이언
                                        <div className="cartButton">
                                                    <button className="cartImg"></button>
                                                </div>
                                            </p>

                                        </p>
                                        <p className="itemPrice">
                                            <span className="itemPriceNum">36,000</span>
                                            <span className="itemPriceWon">원</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                            </div>
                        </div>
                    </article>

                    <article className="content">
                        <div className="cardContents">
                            <span className="imgWrap">
                                <img className="imgWrapImg1" src="https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20200409151512_kr.jpg?type=thumb&amp;opt=R329x247@2xa" />
                            </span>
                            <div className="detailWrap1">
                                <span className="detailLabel">
                                    <p>NEW</p>
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
                    <article className="content">
                        <div className="cardContents2"></div>
                    </article>
                </div>

                <article className="content">
                    <div className="cardContents">
                        <span className="imgWrap">
                            <img className="imgWrapImg2" src="https://t1.kakaocdn.net/friends/new_store/prod/main_tab/home/home_20191128103949_kr.jpg?type=thumb&amp;opt=R329x247@2xa" />
                        </span>
                        <div className="detailWrap">
                            <span className="detailLabel">
                                <p>NEW</p>
                            </span>
                            <h3 className="detailTitle">촉감천재 등판 <br /> 대왕말랑 페이스쿠션</h3>
                            <p className="detailText">
                                동-그랗고 커-다란 쫀득쫀득 말랑말랑 페이스 쿠션과 어디든 달랑달랑 달고픈 페이스 키링 신상 모음
                            </p>
                        </div>
                        <div className="listWrap">
                            <ul className="itemListUl">
                                <li className="itemListLi">
                                  <a className="itemListA">
                                    <span>
                                        <img className="itemImg" src="https://t1.daumcdn.net/friends/prod/product/8809656139186_AW_00.jpg?type=thumb&amp;opt=R103x103@2xa" />
                                    </span>    
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

export default withRouter(MainContents);