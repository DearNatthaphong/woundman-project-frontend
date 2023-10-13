import React from 'react';

function Payment({ Payment, index }) {
  const title = Payment?.PaymentItem?.title;
  const { amount, price } = Payment;
  return (
    <tr key={Payment.id}>
      <th scope="row">{index + 1}</th>
      <td>{title}</td>
      <td>{amount}</td>
      <td>{price}</td>
    </tr>
  );
}

export default Payment;
