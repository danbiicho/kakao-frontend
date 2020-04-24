import React, { Component } from 'react';
import './SelectBox.scss'

class SelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            select: 0,
        };
    }

    handleOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }

    select = (i) => {
        this.setState({
            select: i,
            open: false
        });
        this.props.onChange(this.props.options[i])
    }

    render() {
        // const options = this.props.options;
        const { options } = this.props;
        const { open, select } = this.state;
        return (
            <div className="selectbox">
                <div className="outer" onClick={this.handleOpen}>
                    <span>{options[select].name}</span>
                    <i className={open && 'open'}></i>
                </div>
                {this.state.open && (
                    <ul className="options">
                        {options.map((el, i) => (
                            <li key={i}>
                                <button className="listLink" onClick={() => {
                                    this.select(i)
                                }}>
                                    {el.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default SelectBox;