import React, { Component } from 'react';
import './style.less';
import { Link } from 'react-router-dom';
import {Button} from "../Button";
import {LabelText} from "../LabelText";
class Footer2 extends Component {
    render () {
        const {guid} = this.props;
        if(!guid) {
            return null;
        }
        return (
            <div className="footer2">
                            <div className="footer2__text">
                    <LabelText>Выберите дальнейшее действие</LabelText>
                </div>
                <a className='footer2__link' href={`http://localhost:8000/compare/pdf?id=${guid}`}>Скачать отчет в формате pdf</a>
            </div>
        );
    }
}
export { Footer2  };
