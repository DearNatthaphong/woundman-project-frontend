import React from 'react';
import MedicineEdit from './MedicineEdit';
import MedicineDelete from './MedicineDelete';

function MedicinePayment({
  index,
  paymentMedicine,
  deletePaymentMedicine,
  caseId
}) {
  const title = paymentMedicine?.PaymentItem?.title;

  const { id, amount, price } = paymentMedicine;
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td> {title} </td>
      <td>{amount}</td>
      <td>{price}</td>
      <MedicineEdit />
      <MedicineDelete
        deletePaymentMedicine={deletePaymentMedicine}
        caseId={caseId}
        id={id}
      />
    </tr>
  );
}

export default MedicinePayment;
