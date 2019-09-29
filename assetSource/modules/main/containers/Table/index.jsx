import React, { Component } from 'react';
import './style.less';
import {connect} from 'react-redux';
import { selectShingles} from "../../selectors";
function mapStateToProps (state) {
    return {
        shingles: selectShingles(state),
    }
}
function mapDispatchToProps () {
    return {}
}
class TableWrapper extends Component {
    checkRow =(i) => {
        const {shingles} = this.props;
        console.log(i);
        if (i !== 0) {
            return null
        }
    return <td rowspan={shingles.length} className='table__td table__td-unique'>{this.props.chart}</td>
    }
    renderShingle = (item, i) => {
        return (
            <tr className='table__tr'>
                  <td className='table__td table__td-name'>{item.filename}</td>
                  <td className='table__td table__td-region'>{item.region.name_region}</td>
                  <td className='table__td table__td-percent'>{item.match} %</td>
                {this.checkRow(i)}
              </tr>
        )
    };
    render () {
        const {shingles = []} = this.props;
        console.log(shingles);
        return (
          <div className='table'>
              <table className='table__table'>
              <tr className='table__tr'>
                  <th className='table__th table__th-name'>Название файла</th>
                  <th className='table__th table__th-region'>Регион</th>
                  <th className='table__th table__th-percent'>Процент Заимствования</th>
                  <th className='table__th table__th-unique'>Уникальность</th>
              </tr>
                  <tbody>
              {shingles.map(this.renderShingle)}
              </tbody>
              </table>
          </div>
      )

    }
}
const Table = connect(mapStateToProps, mapDispatchToProps())(TableWrapper);
export { Table };
