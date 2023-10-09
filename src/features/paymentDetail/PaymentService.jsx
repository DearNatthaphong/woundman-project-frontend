import React from 'react';
import PaymentServiceCreate from './PaymentServiceCreate';
import PaymentServiceDisplay from './PaymentServiceDisplay';

function PaymentService() {
  return (
    <li className="list-group-item py-3">
      {/*1.ค่าบริการและตารางรายการ */}
      <h5 className="">1.ค่าบริการ</h5>
      <PaymentServiceCreate />
      <PaymentServiceDisplay />
    </li>
  );
}

export default PaymentService;
