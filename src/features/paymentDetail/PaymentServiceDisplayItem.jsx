import React from 'react';
import PaymentDelete from './PaymentDelete';
import PaymentEdit from './PaymentEdit';

function PaymentServiceDisplayItem({
  updatePayment,
  itemsService,
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
        <PaymentEdit
          itemsService={itemsService}
          updatePayment={updatePayment}
          caseId={caseId}
          id={id}
          title={title}
          amount={amount}
        />
        <PaymentDelete caseId={caseId} deletePayment={deletePayment} id={id} />
      </tr>
    </tbody>
  );
}

export default PaymentServiceDisplayItem;
