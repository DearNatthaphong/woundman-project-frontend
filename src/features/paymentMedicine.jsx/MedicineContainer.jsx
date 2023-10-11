import React from 'react';
import MedicineCreate from './MedicineCreate';
import MedicinePaymentList from './MedicinePaymentList';

function MedicineContainer({ itemsMedicine }) {
  return (
    <li className="list-group-item py-3">
      <div className="col text-bg-light rounded">
        <h5 className="">3.ค่ายา</h5>
        <MedicineCreate itemsMedicine={itemsMedicine} />
        <MedicinePaymentList />
      </div>
    </li>
  );
}

export default MedicineContainer;
