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
    renderShingle = (item) => {
        return (
            <tr className='table__tr'>
                  <td className='table__td table__td-name'>{item.filename}</td>
                  <td className='table__td table__td-region'>{item.region.name_region}</td>
                  <td className='table__td table__td-percent'>{item.match} %</td>
                  <td className='table__td table__td-unique'>{' '}</td>
              </tr>
        )
    };
    render () {
        const {shingles = []} = this.props;
        console.log(shingles);
        return (
          <div className='table'>
              <tr className='table__tr'>
                  <th className='table__th table__th-name'>Название файла</th>
                  <th className='table__th table__th-region'>Регион</th>
                  <th className='table__th table__th-percent'>Процент Заимствования</th>
                  <th className='table__th table__th-unique'>Уникальность</th>
              </tr>
              {shingles.map(this.renderShingle)}

          </div>
      )

    }
}
const Table = connect(mapStateToProps, mapDispatchToProps())(TableWrapper);
export { Table };
