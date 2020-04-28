import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CheckBox.scss';

class CheckBox extends Component {
    constructor(props) {
        console.log(props);
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

    render() {
        return (
            <div className="CheckBox">
                <img src={(this.state.active) ? "https://t1.kakaocdn.net/friends/new_store/ico_checked_ok.png" : "https://t1.kakaocdn.net/friends/new_store/ico_checked.png"} alt="img" onClick={this.handleClick} />
                <div className="checkBoxText">
                    글로벌 배송 가능상품 보기
                </div>
            </div>
        );
    }
}

export default withRouter(CheckBox);