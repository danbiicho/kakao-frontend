import React, { Component } from 'react';
import './HotList.scss';
import { API } from '../../config';

class HotList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: false,
            offset: 18, // 처음에 화면에 보이는 이미지 개수
            datas: [],
            perPage: 5,
            currentPage: 1,
        };
    }

    handleCart = (i) => {
        this.setState({
            idx: i,
            cart: true,
        }, console.log(this.state.idx));
    }

    componentDidMount = () => {
        fetch(`${API}/data/HotLists.json`)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    datas: res.cartList,
                });
            });
    }

    handleClick = (e) => {
        this.setState({
            currentPage: Number(e.target.id)
        });
    }

    render() {
        const { datas } = this.state;
        // const { datas, currentPage, }

        return (
            <>
                {datas.map((data, i) => (
                    <div className="hotWrap">
                        <img className="hotImg" src={data.src} alt="img" />
                        <div className="cartWrap">
                            <button className="hotButton" key={i} className={(this.state.idx === i) ? 'cartOn' : 'cartOff'} onClick={() => { this.handleCart(i) }}>
                            </button>
                        </div>
                    </div>
                ))}
                <div className="contents">
                    <div className="Pagination">
                        <span className="number"></span>
                        <button className="pageButton" onClick={this.addData}>더 보기</button>
                    </div>

                </div>
            </>
        );
    }
}

export default HotList;