import React from 'react';
import MedicinePayment from './MedicinePayment';

function MedicinePaymentList() {
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
        <MedicinePayment />
      </table>
    </div>
  );
}

export default MedicinePaymentList;
