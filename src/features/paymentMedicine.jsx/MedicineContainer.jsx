import React from 'react';
import MedicineCreate from './MedicineCreate';
import MedicinePaymentList from './MedicinePaymentList';
import PaymentForm from '../../components/ui/PaymentForm';

function MedicineContainer({
  itemsMedicine,
  caseId,
  createPaymentMedicine,
  paymentsMedicine,
  deletePaymentMedicine,
  updatePaymentMedicine
}) {
  return (
    <div className="mt-3">
      {/* // <li className="list-group-item py-3">
    //   <div className="col text-bg-light rounded"> */}
      <h5 className="">3.ค่ายา</h5>
      <PaymentForm
        items={itemsMedicine}
        caseId={caseId}
        onSubmit={createPaymentMedicine}
      />
      {/* <MedicineCreate
          itemsMedicine={itemsMedicine}
          caseId={caseId}
          createPaymentMedicine={createPaymentMedicine}
        /> */}
      <MedicinePaymentList
        paymentsMedicine={paymentsMedicine}
        caseId={caseId}
        itemsMedicine={itemsMedicine}
        updatePaymentMedicine={updatePaymentMedicine}
        deletePaymentMedicine={deletePaymentMedicine}
      />
      {/* //   </div>
    // </li> */}
    </div>
  );
}

export default MedicineContainer;
