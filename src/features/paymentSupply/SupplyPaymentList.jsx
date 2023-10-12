import React from 'react';
import SupplyPayment from './SupplyPayment';

function SupplyPaymentList({ paymentsSupply, deletePaymentSupply, caseId }) {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">รายการ</th>
            <th scope="col">จำนวน</th>
            <th scope="col">{`ราคา(บาท)`}</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {paymentsSupply.map((item, index) => (
            <SupplyPayment
              key={item.id}
              index={index}
              paymentSupply={item}
              deletePaymentSupply={deletePaymentSupply}
              caseId={caseId}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SupplyPaymentList;
