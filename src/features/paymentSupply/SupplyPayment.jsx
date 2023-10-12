import React from 'react';
import SupplyEdit from './SupplyEdit';
import SupplyDelete from './SupplyDelete';

function SupplyPayment({ index, paymentSupply, deletePaymentSupply, caseId }) {
  const title = paymentSupply?.PaymentItem?.title;

  const { amount, price, id } = paymentSupply;
  return (
    <tr>
      <th scope="row">{String(index + 1)}</th>
      <td>{title}</td>
      <td>{amount}</td>
      <td>{price}</td>
      <SupplyEdit />
      <SupplyDelete
        deletePaymentSupply={deletePaymentSupply}
        caseId={caseId}
        id={id}
      />
    </tr>
  );
}

export default SupplyPayment;
