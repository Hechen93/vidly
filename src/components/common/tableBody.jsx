import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {
  render() {
    const { data = [], columns = [] } = this.props;
    console.log(data, columns);
    return (
      <tbody>
        {data.map((item) => (
          <tr>
            {columns.map((column) => (
              <td key={item.name}>{_.get(item, column.path)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
