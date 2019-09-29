import React, { Component } from 'react';
import './style.less';
import {connect} from 'react-redux';
import {getCheckData, sendCode} from "../../actions";
import {selectData, selectKey} from "../../selectors";
import {Header} from "../Header";
import {LabelText} from "../LabelText";
import {Button} from "../Button";
import {Table} from "../Table";
import {Table2} from "../Table2";
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
    handleChange = (e) => {
      const filePath = e.target.value;
      const fileName = filePath.split('\\').reverse()[0];
      this.setState({
          fileName: fileName
      })
    };
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
                    }, 1000
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
                <Table2 shingles={[{
                    filename: this.state.fileName,
                }]} isShow={data} />
                <div className="check__bg1">
                             <form action='/' onSubmit={this.handleSubmit}>
                        <div className="check__buttons">
                            <div className="check__button">
                                <LabelText color='black'>
                                    Выбрать файл
                                    <input type="file" id='file' onChange={this.handleChange} className="check__input"/>
                                </LabelText>
                            </div>
                            <div>
                            <div className="check__button check__button_violet check__button-text_white">
                               <LabelText color='white'>
                                   Проверить уникальность
                                     <input className='check__submit' type="submit" value='Проверить уникальность' />
                               </LabelText>
                            </div>
                            </div>
                    </div>
                </form>
                </div>
                <div className="check__name">
                    <LabelText color='violet'>
                        Результат
                    </LabelText>
                </div>
                <Table />

                <LabelText color='violet'>
                  &nbsp; {(this.props.keyId) ? (<span>ID Результата: {this.props.keyId}</span>) : null}
                </LabelText>
        </div>
        );
    }
}
const Check = connect(mapStateToProps, mapDispatchToProps())(CheckWrapper);
export { Check };
