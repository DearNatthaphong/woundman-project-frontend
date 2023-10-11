import React from 'react';
import ServiceEdit from './ServiceEdit';
import ServiceDelete from './ServiceDelete';

function ServicePayment({
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
        <ServiceEdit
          itemsService={itemsService}
          updatePayment={updatePayment}
          caseId={caseId}
          id={id}
          title={title}
          amount={amount}
        />

        <ServiceDelete caseId={caseId} deletePayment={deletePayment} id={id} />
      </tr>
    </tbody>
  );
}

export default ServicePayment;
