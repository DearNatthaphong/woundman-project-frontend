import React from 'react';
import ServiceEdit from './ServiceEdit';
import ServiceDelete from './ServiceDelete';

function ServicePayment({
  updatePaymentService,
  itemsService,
  caseId,
  deletePaymentService,
  index,
  paymentService
}) {
  const title = paymentService?.PaymentItem?.title;

  const { id, amount, price } = paymentService;

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{title}</td>
      <td>{amount}</td>
      <td>{price}</td>
      <ServiceEdit
        itemsService={itemsService}
        updatePaymentService={updatePaymentService}
        caseId={caseId}
        id={id}
        title={title}
        amount={amount}
      />

      <ServiceDelete
        caseId={caseId}
        deletePaymentService={deletePaymentService}
        id={id}
      />
    </tr>
  );
}

export default ServicePayment;
