import React, { Component } from 'react';
import './style.less';
import { Link } from 'react-router-dom';
import { LogoPng } from 'modules/hackaton/components/Logo';

const config = [
    { id: '1', name: 'Список пропавших', url: 'info/lose' },
    { id: '2', name: 'Список найденных', url: 'info/search' }
];

class HeaderContainer extends Component {
    render () {
        return (
            <div className='header-container'>
                <div className='header-container__left'>
                    <div className="header-container__logo">
                        <Link key={40} to={`/`}>
                            <LogoPng />
                        </Link>
                    </div>
                    <div className="menu">
                        {config.map((item) => {
                            return (
                                <Link key={item.id} to={`/${item.url}`}>
                                    <div className="menu__item">
                                        {item.name}
                                    </div>
                                </Link>
                            );
                        })}
                        <div className="menu__item"><a style={{ color: '#fff' }} href='/search/yapi-map.html'>Карта Поиска</a></div>
                    </div>
                </div>
                <div className='menu__registration'>
                    <Link key={3} to={`/info/registration`}>
                        <div className="menu__item">Регистрация</div>
                    </Link>
                </div>
            </div>
        );
    }
}
export { HeaderContainer };
