import React from 'react';
import PatientDetail from './PatientDetail';
import SupplyContainer from '../paymentSupply/SupplyContainer';
import ServiceContainer from '../paymentService/ServiceContainer';
import MedicineContainer from '../paymentMedicine.jsx/MedicineContainer';
import ReceiptContainer from '../receipt/ReceiptContainer';

function PaymentDetailBody({
  caseData,
  itemsService,
  itemsSupply,
  itemsMedicine,
  caseId,
  createPaymentService,
  paymentsByTypeService,
  deletePayment,
  updatePayment
}) {
  return (
    <ul className="list-group list-group-flush">
      <PatientDetail caseData={caseData} />

      <ServiceContainer
        itemsService={itemsService}
        caseId={caseId}
        createPaymentService={createPaymentService}
        paymentsByTypeService={paymentsByTypeService}
        deletePayment={deletePayment}
        updatePayment={updatePayment}
      />
      <SupplyContainer itemsSupply={itemsSupply} />
      <MedicineContainer itemsMedicine={itemsMedicine} />
      <ReceiptContainer />
    </ul>
  );
}

export default PaymentDetailBody;
