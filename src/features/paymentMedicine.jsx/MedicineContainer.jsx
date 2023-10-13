import React from 'react';
import MedicineCreate from './MedicineCreate';
import MedicinePaymentList from './MedicinePaymentList';

function MedicineContainer({
  itemsMedicine,
  caseId,
  createPaymentMedicine,
  paymentsMedicine,
  deletePaymentMedicine,
  updatePaymentMedicine
}) {
  return (
    <li className="list-group-item py-3">
      <div className="col text-bg-light rounded">
        <h5 className="">3.ค่ายา</h5>
        <MedicineCreate
          itemsMedicine={itemsMedicine}
          caseId={caseId}
          createPaymentMedicine={createPaymentMedicine}
        />
        <MedicinePaymentList
          paymentsMedicine={paymentsMedicine}
          deletePaymentMedicine={deletePaymentMedicine}
          caseId={caseId}
          updatePaymentMedicine={updatePaymentMedicine}
          itemsMedicine={itemsMedicine}
        />
      </div>
    </li>
  );
}

export default MedicineContainer;
