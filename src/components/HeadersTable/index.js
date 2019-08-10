import React from 'react';

function HeadersTable(props) {
  return (
    <tr>
      <th>{props.client}</th>
      <th>{props.loan}</th>
      <th>{props.date}</th>
      <th>{props.state}</th>
    </tr>
  );
}

export default HeadersTable;