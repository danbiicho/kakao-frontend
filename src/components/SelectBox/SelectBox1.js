import React, { Component } from 'react';
import './SelectBox2';
import './SelectBox1.scss';

class SelectBox1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open1: false,
            select: 0,
            choosenFriend: null,
        };
    }

    handleOpen1 = () => {
        this.setState({
            open1: !this.state.open1,
        });
    }

    select = i => {
        this.setState({
            select: i,
            open1: false,
        });
        // this.props.onChange(this.props.options[i]) 이건 필요합니다!
    }

    handleMouseOver = (index) => {
        this.setState({
            choosenFriend: index,
        });
    }

    handleMouseLeave = () => {
        this.setState({
            choosenFriend: null,
        })
    }

    checkActive = (el, i) => { // 해당 요소가 선택되었는지, 또는 호버 되었는지 체크하는 함수.        
        if (i === this.state.select) return 2; // 선택
        if (i === this.state.choosenFriend) return 1; // 호버
        return 0;
    }

    openCheck

    render() {
        const { options } = this.props;
        const { open1, select } = this.state;
        // console.log(options.map(({ src, srcChange, ...rest }) => rest)) 이건 필요합니다!
        return (
            <div className="SelectBox1">
                <div className="imgOuter" onClick={this.handleOpen1} status="false">
                    <span>{options[select].name}</span>
                    <i className={open1 && 'open1'}></i>
                </div>
                {this.state.open1 && (
                    <ul className="imgOptions">
                        {options.map((el, i) => (

                            <li key={i}
                                onClick={() => { this.select(i) }}
                                onMouseEnter={() => this.handleMouseOver(i)}
                                onMouseLeave={this.handleMouseLeave}
                                className="optionsList"
                            >

                                {(this.checkActive(el, i) > 1) ? (
                                    <img
                                        className={'checkImg'}
                                        src="https://t1.kakaocdn.net/friends/new_store/2.0/common/category_icn-done.png"
                                        alt="img" />
                                ) : <></>}

                                <img
                                    className="imgList"
                                    src={this.checkActive(el, i) ? el.srcChange : el.src}
                                    alt="img"
                                />
                                <div className="listName">
                                    <span className="listLink">
                                        {el.name}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default SelectBox1;