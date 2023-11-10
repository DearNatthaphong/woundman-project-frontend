import React from 'react';

function Payment({ Payment, index }) {
  const title = Payment?.PaymentItem?.title;
  const { amount, price } = Payment;

  return (
    <tr>
      <th className="py-0 pe-0" scope="row">
        {index + 1}
      </th>
      <td>{title}</td>
      <td>{amount}</td>
      <td>{price}</td>
    </tr>
  );
}

export default Payment;
