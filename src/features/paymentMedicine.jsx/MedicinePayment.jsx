import React from 'react';
import MedicineEdit from './MedicineEdit';
import MedicineDelete from './MedicineDelete';

function MedicinePayment() {
  return (
    <tbody>
      <tr>
        <th scope="row">index+1</th>
        <td> Amoxicillin 125mg./5ml. ขวด(60 ซีซี) </td>
        <td>1</td>
        <td>100.00</td>
        <MedicineEdit />
        <MedicineDelete />
      </tr>
    </tbody>
  );
}

export default MedicinePayment;
