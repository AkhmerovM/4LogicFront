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
class FindWrapper extends Component {
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
          fileName: fileName,
      })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const file = document.getElementById('file');
        const {sendCode} = this.props;
        sendCode(file.files[0]);
    };
    render () {
        return (
            <div className='find'>
                <Header/>
                <div className="find__name">
                    <LabelText color='violet'>
                        Введите индивидуальный ID
                    </LabelText>
                </div>
                <input type="text" placeholder='Введите индивидуальный ID' className="find__input" />
                <Button>
                    <div className="find__btn">
                        Готово
                    </div>
                    </Button>
                <Table2 shingles={[{
                    filename: this.state.fileName
                }]} />

        </div>
        );
    }
}
const Find = connect(mapStateToProps, mapDispatchToProps())(FindWrapper);
export { Find };
