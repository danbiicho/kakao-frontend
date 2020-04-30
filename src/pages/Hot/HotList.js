import React, { Component } from 'react';
import './HotList.scss';

class HotList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // idx: [],
            cart: false,
            datas: [],
        };
    }

    handleCart = (i) => {
        this.setState({
            // idx: [...this.state.idx].push(i),
            idx: i,
            cart: true,
        }, console.log(this.state.idx));
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/data/CartLists.json")
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    datas: res.cartList,
                });
            });
    }

    render() {
        const { datas } = this.state;
        return (

            datas.map((data, i) => (
                <div className="hotWrap">
                    <img className="hotImg" src={data.src} alt="img" />
                    <div className="cartWrap">
                        <button className="hotButton" key={i} className={(this.state.idx === i) ? 'cartOn' : 'cartOff'} onClick={() => { this.handleCart(i) }}>
                        </button>
                    </div>
                </div>
            ))

        );
    }
}

export default HotList;