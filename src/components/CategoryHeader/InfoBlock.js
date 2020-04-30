import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './InfoBlock.scss';

class InfoBlock extends Component {
    render() {
        return (
            <div className="InfoBlock">
                <div className="textWrap">
                    <span className="listText1">총 </span>
                    <span className="total">1495</span>
                    <span className="listText2"> 개의 상품이 조회되었습니다.</span>
                </div>
            </div>
        );
    }
}

export default withRouter(InfoBlock);