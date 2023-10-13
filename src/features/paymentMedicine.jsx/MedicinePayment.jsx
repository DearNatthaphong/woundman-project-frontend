import React from 'react';
import MedicineEdit from './MedicineEdit';
import MedicineDelete from './MedicineDelete';

function MedicinePayment({
  updatePaymentMedicine,
  index,
  paymentMedicine,
  deletePaymentMedicine,
  caseId,
  itemsMedicine
}) {
  const title = paymentMedicine?.PaymentItem?.title;

  const { id, amount, price } = paymentMedicine;
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td> {title} </td>
      <td>{amount}</td>
      <td>{price}</td>
      <MedicineEdit
        updatePaymentMedicine={updatePaymentMedicine}
        itemsMedicine={itemsMedicine}
        caseId={caseId}
        id={id}
        title={title}
        amount={amount}
      />
      <MedicineDelete
        deletePaymentMedicine={deletePaymentMedicine}
        caseId={caseId}
        id={id}
      />
    </tr>
  );
}

export default MedicinePayment;
