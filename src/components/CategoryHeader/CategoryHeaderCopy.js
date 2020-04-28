import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import InfoBlock from './InfoBlock';
import CheckBox from './CheckBox';
import SelectBox1 from '../SelectBox/SelectBox1';
import SelectBox2 from '../SelectBox/SelectBox2';
import '../CategoryHeader/CategoryHeader.scss';

class CategoryHeader extends Component {
    // constructor(props) {
    //     console.log(props);
    //     super(props);
    //     this.state = {
    //         active: false,
    //     }
    // }

    // handleClick = () => {
    //     this.setState({
    //         active: !this.state.active
    //     }, () => console.log(this.state.active))
    // }

    handleOpen1 = () => {
        console.log(this.state.opne1);
        // console.log(this.state.opne2);
        this.setState({
            open1: true,
            open2: false,
        })
    }

    handleOpen2 = () => {
        this.setState({
            open1: false,
            open2: true,
        })
    }

    render() {
        return (
            <div className="container">
                <div className="CategoryHeader">
                    <InfoBlock />
                    {/* <CheckBox /> */}

                    <div className="listFilter">

                        <SelectBox2 options={[
                            { name: '판매량순' },
                            { name: '신상품순' },
                            { name: '낮은 가격순' },
                            { name: '높은 가격순' },
                        ]} />

                        <SelectBox1 options={[
                            { name: '전체', src: 'https://t1.kakaocdn.net/friends/new_store/2.0/common/category_group_off.png', srcChange: 'https://t1.kakaocdn.net/friends/new_store/2.0/common/category_group_on.png' },

                            { name: '라이언', src: 'https://t1.daumcdn.net/friends/prod/category/category_rion_off.png', srcChange: 'https://t1.daumcdn.net/friends/prod/category/category_rion_on.png' },

                            { name: '어피치', src: 'https://t1.daumcdn.net/friends/prod/category/category_apeach_off.png', srcChange: 'https://t1.daumcdn.net/friends/prod/category/category_apeach_on.png' },

                            { name: '무지', src: 'https://t1.daumcdn.net/friends/prod/category/category_muzi_off.png', srcChange: 'https://t1.daumcdn.net/friends/prod/category/category_muzi_on.png' },

                            { name: '프로도', src: 'https://t1.daumcdn.net/friends/prod/category/category_frodo_off.png', srcChange: 'https://t1.daumcdn.net/friends/prod/category/category_frodo_on.png' },

                            { name: '네오', src: 'https://t1.daumcdn.net/friends/prod/category/category_neo_off.png', srcChange: 'https://t1.daumcdn.net/friends/prod/category/category_neo_on.png' },

                            { name: '튜브', src: 'https://t1.daumcdn.net/friends/prod/category/category_tube_off.png', srcChange: 'https://t1.daumcdn.net/friends/prod/category/category_tube_on.png' },

                            { name: '제이지', src: 'https://t1.daumcdn.net/friends/prod/category/category_jayz_off.png', srcChange: 'https://t1.daumcdn.net/friends/prod/category/category_jayz_on.png' },

                            { name: '콘', src: 'https://t1.daumcdn.net/friends/prod/category/category_con_off.png', srcChange: 'https://t1.daumcdn.net/friends/prod/category/category_con_on.png' },
                        ]} />


                        {/* onChange={value => {
                            console.log('바뀌었네', value); */}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CategoryHeader);