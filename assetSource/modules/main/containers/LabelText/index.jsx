import React, { Component } from 'react';
import './style.less';
import { Link } from 'react-router-dom';
class LabelText extends Component {
    render () {
        const {children, color} = this.props;
        return (
            <span className={`label-text label-text_${color}`}>
                {children}
            </span>
        );
    }
}
export { LabelText };
