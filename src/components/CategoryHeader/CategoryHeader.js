import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SelectBox from '../SelectBox';
import '../CategoryHeader/CategoryHeader.scss';

class CategoryHeader extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            arrowLeft: true,
            arrowRight: true
        }
    }

    handleClick = () => {
        this.setState({
            active: !this.state.active
        }, () => console.log(this.state.active))
    }

    handleArrowLeft = () => {
        this.setState({
            arrowLeft: !this.state.arrowLeft
        }, () => console.log(this.state.arrowLeft))
    }

    handleArrowRight = () => {
        this.setState({
            arrowRight: !this.state.arrowRight
        }, () => console.log(this.state.arrowRight))
    }

    render() {
        return (
            <div className="container">
                <div className="CategoryHeader">
                    <div className="infoBlock">
                        <div className="textWrap">
                            <span className="listText1">총 </span>
                            <span className="total">516</span>
                            <span className="listText2">개</span>
                        </div>
                        <div className="checkBox">
                            <img src={(this.state.active) ? "https://t1.kakaocdn.net/friends/new_store/ico_checked_ok.png" : "https://t1.kakaocdn.net/friends/new_store/ico_checked.png"} alt="img" onClick={this.handleClick} />
                            <div className="checkBoxText">
                                글로벌 배송 가능상품 보기
                            </div>
                        </div>
                    </div>
                    <div className="listFilter">
                        <div className="filterWrapLeft">
                            <span>캐릭터 전체</span>
                            <img className="leftImg" src={(this.state.arrowLeft) ? "https://t1.kakaocdn.net/friends/new_store/dropdown_down.png" : "https://t1.kakaocdn.net/friends/new_store/dropdown_up.png"} alt="img" onClick={this.handleArrowLeft} />
                        </div>
                        {/* <div className="filterWrapRight">
                            <span>신상품순</span>
                            <img className="rightImg" src={(this.state.arrowRight) ? "https://t1.kakaocdn.net/friends/new_store/dropdown_down.png" : "https://t1.kakaocdn.net/friends/new_store/dropdown_up.png"} alt="img" onClick={this.handleArrowRight} />
                        </div> */}

                        <SelectBox options={[
                            { name: '신상품순' },
                            { name: '판매량순' },
                            { name: '낮은 가격순' },
                            { name: '높은 가격순' },
                        ]} onChange={value => {
                            console.log('바뀌었네', value);
                        }} />
                        <SelectBox options={[
                            { name: '캐릭터 전체' },
                            { name: '무지' },
                            { name: '크롱' },
                            { name: '뽀로로' },
                        ]} />
                        {/* <div className="listModalBox">
                            <ul className="molOptionWrap">
                                <li className="listOption">
                                    <a className="listLink" href="/">신상품순</a>
                                </li>
                                <li className="listOption">
                                    <a className="listLink" href="/">판매량순</a>
                                </li>
                                <li className="listOption">
                                    <a className="listLink" href="/">낮은 가격순</a>
                                </li>
                                <li className="listOption">
                                    <a className="listLink" href="/">높은 가격순</a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div >
        );
    }
}

export default withRouter(CategoryHeader);