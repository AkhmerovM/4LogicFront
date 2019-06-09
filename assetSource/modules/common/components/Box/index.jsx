import React from 'react';
import './style.less';

function Box ({ children }) {
    return <div className="box">{children}</div>;
}
Box.Header = function BoxHeader ({ children }) {
    return <div className='box__header'>{children}</div>;
};

Box.test = 5;

export { Box };
