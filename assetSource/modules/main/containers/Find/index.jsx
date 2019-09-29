import React, { Component } from 'react';
import './style.less';
import {connect} from 'react-redux';
import {getCheckData, removeData, sendCode} from "../../actions";
import {selectData, selectKey, selectShingles} from "../../selectors";
import {Header} from "../Header";
import {LabelText} from "../LabelText";
import {Table} from "../Table";
import DonutChart from "react-donut-chart";
import {Footer2} from "../Footer2";
function mapStateToProps (state) {
    return {
        keyId: selectKey(state),
        shingles: selectShingles(state),
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
        this.state = {
            guid: null
        }
    }
    componentDidMount() {
        const {removeData} = this.props;
        removeData();
    }
    handleChange = () => {
        const id = document.getElementById('input').value;
        const {getCheckData} = this.props;
        this.setState({
            guid: id,
        });
        getCheckData(id)
    };
    drawChart(shingles) {
        if(shingles.length) {
            return (<div className='pieChart'>
                  <DonutChart
                      data={[{
                          label: 'Заимствованный код, %',
                          value: shingles[0].match
                      },
                          {
                              label: 'Уникальный код, %',
                              value: 100 - shingles[0].match
                          }]} />
                </div>);
        } else {
            return null;
        }
    };
    render () {
        const {shingles = [], keyId} = this.props;
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
                <Table chart={ this.drawChart(shingles) } />
                <Footer2 guid={this.state.guid} />


        </div>
        );
    }
}
const Find = connect(mapStateToProps, mapDispatchToProps())(FindWrapper);
export { Find };
