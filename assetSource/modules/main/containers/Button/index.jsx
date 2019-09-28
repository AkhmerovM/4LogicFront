import React, { Component } from 'react';
import './style.less';
import { Link } from 'react-router-dom';
class Button extends Component {
    render () {
        const {src, text} = this.props;
        return (
            <div className="button">
                <Link to={src}>
                    <div className="button__text">
                        {text}
                    </div>
                </Link>
            </div>
        );
    }
}
export { Button };
