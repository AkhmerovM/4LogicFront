import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { Button, Col, Form } from 'react-bootstrap';
import { BoxButton } from 'modules/hackaton/components/BoxButton';

function mapStateToProps (state) {
    return {
        // postList: selectPostData(state)
    };
}
function mapDispatchToProps () {
    return {
    };
}

class Registration extends Component {
    render () {
        return (
            <Form>
                <div className="login">
                    <Form.Row>
                        <Form.Label><div className="login__label">
                          Логин
                        </div></Form.Label>
                        <Form.Control placeholder="логин" />
                    </Form.Row>
                    <Form.Row>
                        <Form.Label><div className="login__label">
                          Пароль
                        </div></Form.Label>
                        <Form.Control placeholder="Пароль" />
                    </Form.Row>
                    <span style={{ padding: '10px 10px' }}>
                        <BoxButton>Отмена</BoxButton>
                    </span><span style={{ padding: '10px 10px' }}>
                        <BoxButton color='orange'>Регистрация</BoxButton>
                    </span>
                </div>
            </Form>

        );
    }
}
const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps())(Registration);
export { RegistrationContainer };
