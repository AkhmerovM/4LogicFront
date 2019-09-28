import React, { Component } from 'react';
import './style.less';
import { LogoPng } from 'modules/hackaton/components/Logo';
import { Link } from 'react-router-dom';
import { BoxButton } from 'modules/hackaton/components/BoxButton';
import {Header} from "../Header";
import {Button} from "../Button";
import {LabelText} from "../LabelText";
import {Footer} from "../Footer";
class MainPage extends Component {
    render () {
        return (
            <div className='main-page'>
                <Header />
                <div className="main-page__actions">
                    <div className="main-page__name">
                        <LabelText>
                            Проверьте уникальность вашего кода
                        </LabelText>
                    </div>
                    <div className="main-page__buttons">
                        <Button src='/check' >Проверить уникальность </Button>
                        <Button src='/find'>Проверить ID</Button>
                    </div>
                </div>
                <div className="main-page__info">
                <div className="main-page__bg"/>
                    <div className="main-page__main">
                    <div className="main-page__info-wrapper">
                        <div className="main-page__info-first">
                            <LabelText color='violet'>
                                Что такое Дублирование  програмного кода?
                            </LabelText>
                        </div>
                        <div className="main-page__info-second">
                            Дублирование програмного кода — это просто схожие фрагменты исходного кода. В основном они появляются при копировании, даже не смотря на то, что копирование является общеизвестно плохой практикой.
                        </div>
                    </div>
                    <div className="main-page__info-wrapper">
                        <div className="main-page__info-first">
                            <LabelText color='violet'>Зачем нужно проверять дублирование програмного кода?</LabelText>
                        </div>
                        <div className="main-page__info-second">
                            Законодательством РФ запрещено дублирование или повторное приобретение одного и того же програмного кода. В связи с этим при разработке информационных систем и прочих програмных продуктов  за бюджетные средства проверяющие программисты затрачивают огромное количество времени на проверку уникальности кода, что увеличивает их стоимость и срок выпуска программного  продукта и сервисов.
                        </div>
                    </div>
                    </div>
                    <div className="main-page__bg"/>
                </div>
                <div className="main-page__description">
                    <div className="main-page__description-name">
                        <LabelText color='violet'>Как пользоваться системой ЦЕНТРА СЕРТИФИКАЦИИ УНИКАЛЬНОСТИ ПРОГРАМНОГО КОДА?</LabelText>
                    </div>
                    <div className="main-page__description-title">
                                <div className="main-page__description-title1">исполнитель</div>
                            <div className="main-page__description-title2">заказчик</div>
                            </div>
                        <div className="main-page__description-wrapper">

                    <div className="main-page__description1">
                        <div className="main-page__description-item"><img className="main-page__description-img" src='img/1.png'/></div>
                        <div className="main-page__description-item"><img className="main-page__description-img" src='img/2.png'/></div>
                        <div className="main-page__description-item"><img className="main-page__description-img" src='img/3.png'/></div>
                        <div className="main-page__description-item"><img className="main-page__description-img" src='img/4.png'/></div>
                        <div className="main-page__description-item"><img className="main-page__description-img" src='img/5.png'/></div>
                    </div>
                        <div className="main-page__description2">
                        <div className="main-page__description-item"><img className="main-page__description-img" src='img/6.png'/></div>
                        <div className="main-page__description-item"><img className="main-page__description-img" src='img/7.png'/></div>
                        <div className="main-page__description-item"><img className="main-page__description-img" src='img/8.png'/></div>
                        <div className="main-page__description-item"><img className="main-page__description-img" src='img/9.png'/></div>
                        <div className="main-page__description-item"><img className="main-page__description-img" src='img/10.png'/></div>
                    </div>
                </div>
                </div>
                <Footer/>
        </div>
        );
    }
}
export { MainPage };
