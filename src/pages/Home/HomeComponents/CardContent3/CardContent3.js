import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CardContent3.scss';

class CardContent3 extends Component {
    render() {
        const { data } = this.props;

        return (
            <div className="CardContent3">
                {data && (
                    <article className="content">
                        <div className="cardContents">
                            <span className="imgWrap">
                                <img className="imgWrapImg" src={data.theme_image} alt="img" />
                            </span>
                            <div className="detailWrap">
                                <p className="detailTitle">{data.title}</p>
                                <p className="detailText">{data.description}</p>
                            </div>
                            <div>
                            </div>
                        </div>
                    </article>
                )}
            </div>
        );
    }
}

export default withRouter(CardContent3);