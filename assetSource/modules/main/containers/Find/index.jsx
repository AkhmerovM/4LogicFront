import React, { Component } from 'react';
import './style.less';
import {connect} from 'react-redux';
import {getCheckData, removeData, sendCode} from "../../actions";
import {selectData, selectKey} from "../../selectors";
import {Header} from "../Header";
import {LabelText} from "../LabelText";
import {Button} from "../Button";
import {Table} from "../Table";
import {Table2} from "../Table2";
import {bindActionCreators} from "redux";
function mapStateToProps (state) {
    return {
        data: selectData(state),
    }
}
function mapDispatchToProps () {
    return {
        getCheckData,
        sendCode,
        removeData
}
}
class FindWrapper extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        const {removeData} = this.props;
        removeData();
    }
    handleChange = () => {
        const id = document.getElementById('input').value;
        const {getCheckData} = this.props;

        getCheckData(id)
    };
    render () {
        return (
            <div className='find'>
                <Header/>
                <div className="find__info">
                    <LabelText color='violet'>
                        Введите индивидуальный ID
                    </LabelText>
                <div className="find__wrapper">
                        <input type="text" id='input' placeholder='Введите индивидуальный ID' className="find__input" />
                        <div onClick={this.handleChange} className="find__btn">
                            Готово
                        </div>
                    </div>
                </div>
                <Table />

        </div>
        );
    }
}
const Find = connect(mapStateToProps, mapDispatchToProps())(FindWrapper);
export { Find };
