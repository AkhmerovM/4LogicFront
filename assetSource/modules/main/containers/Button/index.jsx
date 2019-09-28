import React, { Component } from 'react';
import './style.less';
import { Link } from 'react-router-dom';
class Button extends Component {
    render () {
        const {src='', children, color, textColor} = this.props;
        return (
            <div className={`button button_${color}`}>
                <Link to={src}>
                    <div className={`button__text button__text_${textColor}`}>
                        {children}
                    </div>
                </Link>
            </div>
        );
    }
}
export { Button };
