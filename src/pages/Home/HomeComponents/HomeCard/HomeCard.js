import React, { Component } from 'react';
import './HomeCard.scss';
import CardContent1 from '../CardContent1/CardContent1';
import CardContent2 from '../CardContent2/CardContent2';
import CardContent3 from '../CardContent3/CardContent3';
import CardContent4 from '../CardContent4/CardContent4';

class HomeCard extends Component {
    constructor() {
        super();
        this.state = {
            cards: [],
        }
    }

    componentDidMount = () => {
        fetch("http://10.58.0.95:8000/product/home")
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    cards: res.theme,
                });
            });
    }

    render() {
        const { cards } = this.state;

        return (
            <>
                {cards.map(obj => {
                    if (obj.product.length === 6) {
                        return <CardContent1 data={obj} />
                    }
                    else if (obj.product.length === 3) {
                        return <CardContent2 data={obj} />
                    }
                    else if (obj.product.length === 0) {
                        return <CardContent3 data={obj} />
                    }
                    else if (obj.description === "") {
                        console.log("aa");
                        return <CardContent4 data={obj} />
                    }

                }
                )}

                <div className="HomeCard">

                </div>
            </>
        );
    }
}

export default HomeCard;
