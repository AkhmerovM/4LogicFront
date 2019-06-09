import React from 'react';
import './style.less';

const BoxButton = ({ children, color = 'white' }) => {
    return (
        <span className={`box-button box-button_${color}`}>
            {children}
        </span>
    );
};

export { BoxButton };
