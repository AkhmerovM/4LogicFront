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
function mapStateToProps (state) {
    return {
        keyId: selectKey(state),
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
class CheckWrapper extends Component {
    constructor() {
        super();
        this.state = {
            fileName: '',
            interval: '',
            needSync: false,
            guid: null,
        }
    }
    handleChange = (e) => {
        const {removeData} = this.props;
      const filePath = e.target.value;
      const fileName = filePath.split('\\').reverse()[0];
        removeData();
        if (this.state.interval) {
            clearInterval(this.state.interval);
        }
      this.setState({
          fileName: fileName,
          interval: '',
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
                        const {getCheckData, keyId: newKey} = this.props;
                        getCheckData(newKey);
                    }, 3000
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
                    filename: this.state.fileName
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
                {`guid: ${keyId}`}
                <Table />
        </div>
        );
    }
}
const Check = connect(mapStateToProps, mapDispatchToProps())(CheckWrapper);
export { Check };
