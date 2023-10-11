import React from 'react';
import SupplyEdit from './SupplyEdit';
import SupplyDelete from './SupplyDelete';

function SupplyPayment() {
  return (
    <tbody>
      <tr>
        <th scope="row">index</th>
        <td>title</td>
        <td>amount</td>
        <td>price</td>
        <SupplyEdit />
        <SupplyDelete />
      </tr>
    </tbody>
  );
}

export default SupplyPayment;
