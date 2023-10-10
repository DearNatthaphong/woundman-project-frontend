import React from 'react';
import PaymentServiceDisplayItem from './PaymentServiceDisplayItem';

function PaymentServiceDisplay({ paymentsByTypeService }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">รายการ</th>
          <th scope="col">จำนวน</th>
          <th scope="col">ราคา</th>
          <th scope="col"></th>
        </tr>
      </thead>
      {paymentsByTypeService.map((item, index) => (
        <PaymentServiceDisplayItem
          key={item.id}
          paymentByTypeService={item}
          index={index}
        />
      ))}
    </table>
  );
}

export default PaymentServiceDisplay;
