import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { selectHumanData } from 'modules/hackaton/selectors';
import { getPeople } from 'modules/hackaton/actions';
import { Col, Form } from 'react-bootstrap';
import { BoxButton } from 'modules/hackaton/components/BoxButton';

function mapStateToProps (state) {
    return {
        humanList: selectHumanData(state)
    };
}
function mapDispatchToProps () {
    return {
        getPeople
    };
}

class Lose extends Component {
    componentDidMount () {
    }
    renderHuman (human) {
        return (
            <div className="lose-container__data">
                <div className="lose-container__photo">
                    <img src={`http://localhost:8080/upload/character/${human.photo}`} alt="" />
                    <div className="lose-container__fio">
                        {human.firstName} {'  '}
                        {human.lastName}{'  '}
                        {human.secondName}
                    </div>
                    <div>
                        {human.isFind
                            ? <div className='lose-container__find' style={{ color: '#568300' }}>Найден</div> : <div className='lose-container__find' style={{ color: '#ff0000' }} >Не Найден</div> }
                    </div>
                </div>
                <div className="lose-container__info">
                    <div className="lose-container__form-data">
                        <table className="card">
                            <tr>
                                <td>ID</td> <td className='card__value'>{human.id}</td>
                                <td>Телефон</td><td className='card__value'>{human.phone}</td>
                            </tr>
                            <tr>
                                <td>Имя</td><td className='card__value'>{human.lastName}</td>
                                <td>Головной убор</td><td className='card__value'>{human.headdress}</td>
                            </tr>
                            <tr>
                                <td>Фамилия</td><td className='card__value'>{human.firstName}</td>
                                <td>Верх</td><td className='card__value'>{human.clothesH}</td>
                            </tr>
                            <tr>
                                <td>Дата рождения</td><td className='card__value'>{human.bornDate}</td>
                                <td>Обувь</td><td className='card__value'>{human.$clothesD}</td>
                            </tr>
                            <tr>
                                <td>Рост</td><td className='card__value'>{human.height}</td>
                                <td>Особые приметы</td><td className='card__value'>{human.comment}</td>
                            </tr>
                            <tr>
                                <td>Цвет волос</td><td className='card__value'>{human.hairColor}</td>
                                <td>Болезни</td><td className='card__value'>{human.illness}</td>
                            </tr>
                            <tr>
                                <td>Дата исчезновения</td><td className='card__value'>{human.lostDate}</td>
                                <td>Цвет глаз</td><td className='card__value'>{human.eyesColor}</td>
                            </tr>
                        </table>
                        <div className="lose-container__search">
                            <a style={{ color: '#fff' }} href='/search/yapi-map.html'>
                                <BoxButton color='orange'>Начать Поиск</BoxButton>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    render () {
        const { humanList } = this.props;
        return (
            <div className="lose-container">
                <div className="lose-container__name">Карточка пропавшего</div>
                <Form>
                    {humanList.map(this.renderHuman)}
                </Form>
            </div>
        );
    }
}
const LoseContainer = connect(mapStateToProps, mapDispatchToProps())(Lose);
export { LoseContainer };
