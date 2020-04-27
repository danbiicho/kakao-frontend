import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SelectBox1 from '../SelectBox/SelectBox1';
import SelectBox2 from '../SelectBox/SelectBox2';
import '../CategoryHeader/CategoryHeader.scss';

class CategoryHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    handleClick = () => {
        this.setState({
            active: !this.state.active
        }, () => console.log(this.state.active))
    }

    handleOpen1 = () => {

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
                        <SelectBox1 options={[
                            { name: '전체', src: 'https://t1.kakaocdn.net/friends/new_store/2.0/common/category_group_off.png' },
                            { name: '라이언', src: 'https://t1.daumcdn.net/friends/prod/category/category_rion_off.png' },
                            { name: '어피치', src: 'https://t1.daumcdn.net/friends/prod/category/category_apeach_off.png' },
                            { name: '무지', src: 'https://t1.daumcdn.net/friends/prod/category/category_muzi_off.png' },
                            { name: '프로도', src: 'https://t1.daumcdn.net/friends/prod/category/category_frodo_off.png' },
                            { name: '네오', src: 'https://t1.daumcdn.net/friends/prod/category/category_neo_off.png' },
                            { name: '튜브', src: 'https://t1.daumcdn.net/friends/prod/category/category_tube_off.png' },
                            { name: '제이지', src: 'https://t1.daumcdn.net/friends/prod/category/category_jayz_off.png' },
                            { name: '콘', src: 'https://t1.daumcdn.net/friends/prod/category/category_con_off.png' },
                        ]} onClick={this.handleOpen1} />
                        <SelectBox2 options={[
                            { name: '신상품순' },
                            { name: '판매량순' },
                            { name: '낮은 가격순' },
                            { name: '높은 가격순' },
                        ]} onChange={value => {
                            console.log('바뀌었네', value);
                        }} />
                    </div>
                </div>
            </div >
        );
    }
}

export default withRouter(CategoryHeader);