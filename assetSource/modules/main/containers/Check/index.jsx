import React, { Component } from 'react';
import './style.less';
import {connect} from 'react-redux';
import {getCheckData, sendCode} from "../../actions";
import {selectData, selectKey} from "../../selectors";
import {Header} from "../Header";
import {LabelText} from "../LabelText";
function mapStateToProps (state) {
    console.log(state, '1');
    console.log(selectKey(state), '2');
    return {
        keyId: selectKey(state),
        data: selectData(state),
    }
}
function mapDispatchToProps () {
    return {
        getCheckData,
        sendCode
    }
}
class CheckWrapper extends Component {
    constructor() {
        super();
        this.state = {
            fileName: '',
            interval: '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const file = document.getElementById('file');
        const {sendCode} = this.props;
        sendCode(file.files[0]);
    };
    render () {
        const {keyId, data} = this.props;
        if(keyId && !data) {
            if (!this.state.interval) {
                let interval = setInterval(
                    () => {
                        console.log('int');
                        const {getCheckData} = this.props;
                        getCheckData(keyId);
                    }, 5000
                );
                this.setState({
                    interval: interval,
                });
            }
        } else clearInterval(this.state.interval);
        return (
            <div className='check'>
                <Header/>
                <div className="check__name">
                    <LabelText color='violet'>
                        Проверьте уникальность вашего кода
                    </LabelText>
                </div>
                <form action='/' onSubmit={this.handleSubmit}>
                    <span>{this.state.fileName}</span>
                    <input type="file" id='file' className="check__input"/>
                    <div>
                        <input type="submit" value='Проверить' />
                    </div>
                </form>

        </div>
        );
    }
}
const Check = connect(mapStateToProps, mapDispatchToProps())(CheckWrapper);
export { Check };
