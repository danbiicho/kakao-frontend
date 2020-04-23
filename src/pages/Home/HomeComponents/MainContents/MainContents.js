import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CardContent1 from '../CardContent1/CardContent1';
import CardContent2 from '../CardContent2/CardContent2';
import CardContent3 from '../CardContent3/CardContent3';
import CardContent4 from '../CardContent4/CardContent4';
import './MainContents.scss';

class MainContents extends Component {
    render() {
        return (
            <div className="MainContents">
                <div className="contents">
                    <CardContent1 />
                    <CardContent3 />
                    <CardContent3 />
                    <CardContent4 />
                    <CardContent4 />
                </div>
                <div cclassName="contents">
                    <CardContent3 />
                    <CardContent3 />
                    <CardContent1 />
                    <CardContent2 />
                </div>
                <div className="contents">
                    <CardContent2 />
                    <CardContent4 />
                    <CardContent3 />
                    <CardContent1 />
                </div>
            </div>
        );
    }
}

export default withRouter(MainContents);


