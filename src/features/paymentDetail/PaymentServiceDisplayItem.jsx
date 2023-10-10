import React from 'react';

function PaymentServiceDisplayItem({
  index,
  paymentByTypeService: {
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
          <button className="btn btn-danger btn-sm" type="button">
            ลบ
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default PaymentServiceDisplayItem;
