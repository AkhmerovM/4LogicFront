import React, { Component } from 'react';
import './style.less';
import { Link } from 'react-router-dom';
class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="header__wrapper">
                    <Link to='/'>
                        <img className='header__img' src='/img/logo.png' />
                    </Link>
                </div>
                    <div className="header__line" />
            </div>
        );
    }
}
export { Header };
