import React from 'react';
import MedicinePayment from './MedicinePayment';

function MedicinePaymentList({
  paymentsMedicine,
  deletePaymentMedicine,
  caseId
}) {
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
          {paymentsMedicine.map((item, index) => (
            <MedicinePayment
              key={item.id}
              index={index}
              paymentMedicine={item}
              deletePaymentMedicine={deletePaymentMedicine}
              caseId={caseId}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicinePaymentList;
