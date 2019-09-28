import React, { Component } from 'react';
import './style.less';
import {connect} from 'react-redux';
import { selectShingles} from "../../selectors";
function mapStateToProps () {
    return {}
}
function mapDispatchToProps () {
    return {}
}
class TableWrapper extends Component {
    renderShingle = (item) => {
        const {isShow} = this.props;
        if (!item.filename) {
            return (
                <tr className='table2__tr'>
                  <td className='table2__td table__td-name' />
                  <td className='table2__td table__td-region'/>
                  <td className='table2__td table__td-percent' />
                  <td className='table2__td table__td-unique' />
              </tr>
            )
        }
        return (
            <tr className='table2__tr'>
                  <td className='table2__td table__td-name'>{item.filename}</td>
                  <td className='table2__td table__td-region'>29.09.19</td>
                  <td className='table2__td table__td-percent'>{isShow ? 'Проверено': 'Не проверено'}</td>
                  <td className='table2__td table__td-unique'>Все регионы</td>
              </tr>
        )
    };
    render () {
        const {shingles = []} = this.props;
        console.log(shingles);
        return (
          <div className='table2'>
              <tr className='table2__tr'>
                  <th className='table2__th table__th-name'>Название файла</th>
                  <th className='table2__th table__th-region'>Дата</th>
                  <th className='table2__th table__th-percent'>Результат</th>
                  <th className='table2__th table__th-unique'>Регион</th>
              </tr>
              {shingles.map(this.renderShingle)}

          </div>
      )

    }
}
const Table2 = connect(mapStateToProps, mapDispatchToProps())(TableWrapper);
export { Table2 };
