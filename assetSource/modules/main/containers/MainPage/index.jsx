import React, { Component } from 'react';
import './style.less';
import { LogoPng } from 'modules/hackaton/components/Logo';
import { Link } from 'react-router-dom';
import { BoxButton } from 'modules/hackaton/components/BoxButton';
class MainPage extends Component {
    render () {
        return (
            <div className='main-page'>
                <img className="main-page__background"src="/img/background.jpg" alt="" />
                <div className="main-page__content">
                    <div className="main-page__header">
                        <div className="main-page__header-left">
                            <Link key={30} to={`/`}>
                                <LogoPng />
                            </Link>
                        </div>
                        <div className="main-page__header-right">
                            <div className="main-page__registration">
                                <Link key={10} to={`/info/registration`}>
                                    <BoxButton>Регистрация</BoxButton>
                                </Link>
                            </div>
                            <Link key={20} to={`/info/login`}>
                                <BoxButton color='orange'>Вход</BoxButton>
                            </Link>

                        </div>
                    </div>
                    <div className="main-page__name">
                        Сервис для организации поиска пропавших людей
                    </div>
                    <div className="main-page__actions">
                        <Link key={50} to='#'>
                            <BoxButton>Стать волонтером</BoxButton>
                        </Link>
                        <Link key={60} to='/info/lose'>
                            <BoxButton>Сообщить о пропавшем</BoxButton>
                        </Link>
                        <Link key={70} to='#'>
                            <BoxButton>Сообщить о найденном</BoxButton>
                        </Link>
                    </div>
                    <div className="main-page__rules-name">
                         Правила пользования сервисом "Волонтер в Томске"
                    </div>
                    <div className="main-page__rules">
                        Сервис «Волонтер в Томске» предназначен для поиска пропавших людей волонтерами. Теперь не нужно собирать группу и распределять людей по квадратам поиска — сервис делает это за вас, и таким образом облегчает процесс.
                    </div>
                    <div className="main-page__icons">
                        <div className='main-page__icon'>
                            <div className='icon__circle' />
                            <img className='icon__img' src="/img/boy.png" alt="" />
                            <div className="icon__text">Зарегистрируйся как волонтер</div>
                        </div>
                        <div className='main-page__icon'>
                            <div className='icon__circle' />
                            <img className='icon__img' src="/img/ded.png" alt="" />
                            <div className="icon__text">Выбери пропавшего</div>
                        </div>
                        <div className='main-page__icon'>
                            <div className='icon__circle' />
                            <img className='icon__img3' src="/img/group.png" alt="" />
                            <div className="icon__text">Присоединись к команде волонтеров</div>
                        </div>
                        <div className='main-page__icon'>
                            <div className='icon__circle' />
                            <img className='icon__img' src="/img/map.svg" alt="" />
                            <div className="icon__text">Начни поиск</div>
                        </div>
                    </div>
                    <div className="main-page__become">
                        <Link key={70} to='#'>
                            <BoxButton color='orange'>Стать волонтером</BoxButton>
                        </Link>
                    </div>
                </div>
                <div className="main-page__volon">
                    <img className="main-page__volon-img" src="img/volon.jpg" alt="" />
                    <div className="main-page__volon-name">Что делать если пропал человек</div>
                    <div className="main-page__volon-data">
                        <div className="main-page__volon-text">
                            Сервис «Волонтер в Томске» предназначен для поиска пропавших людей волонтерами. Теперь не нужно собирать группу и распределять людей по квадратам поиска — сервис делает это за вас, и таким образом облегчает процесс.
                        </div>
                        <div>
                            <Link key={80} to={`#`}>

                                <BoxButton>сообщить о пропавшем</BoxButton>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="main-page__margin">
                    <div className="main-page__volon">
                        <img className="main-page__volon-img" src="img/loseBoy.jpg" alt="" />
                        <div className="main-page__volon-name">Что делать если вы нашли человека</div>
                        <div className="main-page__volon-data">
                            <div className="main-page__volon-text">
                            Сервис «Волонтер в Томске» предназначен для поиска пропавших людей волонтерами. Теперь не нужно собирать группу и распределять людей по квадратам поиска — сервис делает это за вас, и таким образом облегчает процесс.
                            </div>
                            <div>
                                <Link key={70} to={`#`}>

                                    <BoxButton>сообщить о найденном</BoxButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-page__footer' >
                    <img className="main-page__footer-img" src="/img/footer.png" alt="" />
                </div>
            </div>
        );
    }
}
export { MainPage };
