import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CardContent4.scss';

class CardContent4 extends Component {
    render() {
        return (
            <div className="CardContent4">
                <article className="content">
                    <div className="cardContents">
                        <span className="imgWrap">
                            <img className="imgWrapImg" src="https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20200408103848_kr.jpg?type=thumb&opt=R335x335@2xa" alt="img" />
                        </span>
                    </div>
                </article>
            </div>
        );
    }
}

export default withRouter(CardContent4);