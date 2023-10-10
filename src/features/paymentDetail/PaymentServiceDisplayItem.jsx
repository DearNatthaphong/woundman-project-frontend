import React from 'react';
import PaymentDelete from './PaymentDelete';

function PaymentServiceDisplayItem({
  caseId,
  deletePayment,
  index,
  paymentByTypeService: {
    id,
    amount,
    price,
    PaymentItem: { title }
  }
}) {
  return (
    <tbody>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{title}</td>
        <td>{amount}</td>
        <td>{price}</td>
        <td>
          <button className="btn btn-primary btn-sm" type="button">
            แก้ไข
          </button>
        </td>
        <PaymentDelete caseId={caseId} deletePayment={deletePayment} id={id} />
      </tr>
    </tbody>
  );
}

export default PaymentServiceDisplayItem;
