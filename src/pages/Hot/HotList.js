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
            idx: 0,
        };
    }

    handleCart = (i) => {
        this.setState({
            idx: i,
            cart: true,
        });
    }

    componentDidMount = () => {
        fetch("http://10.58.5.133:8000/product/hot")
            // `${API}/data/HotLists.json`

            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    datas: res.all_popular_image,
                }, () => console.log(this.state.datas));
            });
    }

    handleClick = (e) => {
        this.setState({
            currentPage: Number(e.target.id)
        });
    }

    addData = () => {

    }

    render() {
        const { datas } = this.state;
        console.log("dfsfdf", this.state.datas);

        return (
            <div className="HotList">
                {datas.map((data, i) => (
                    <div className="hotWrap">
                        <img className="hotImg" src={data.image_url} alt="img" />
                        <div className="cartWrap">
                            <button className="hotButton" key={i} className={(this.state.idx === i) ? 'cartOn' : 'cartOff'} onClick={() => { this.handleCart(i) }} />

                        </div>
                    </div>
                ))}
                <div className="contents">
                    <div className="Pagination">
                        <span className="number"></span>
                        <button className="pageButton" onClick={this.addData}>더 보기</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default HotList;