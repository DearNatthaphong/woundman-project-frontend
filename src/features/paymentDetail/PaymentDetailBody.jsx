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
  paymentsService,
  createPaymentSupply,
  paymentsSupply,
  createPaymentMedicine,
  paymentsMedicine,
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
        paymentsService={paymentsService}
        deletePayment={deletePayment}
        updatePayment={updatePayment}
      />
      <SupplyContainer
        itemsSupply={itemsSupply}
        caseId={caseId}
        createPaymentSupply={createPaymentSupply}
        paymentsSupply={paymentsSupply}
      />
      <MedicineContainer
        itemsMedicine={itemsMedicine}
        caseId={caseId}
        createPaymentMedicine={createPaymentMedicine}
        paymentsMedicine={paymentsMedicine}
      />
      <ReceiptContainer />
    </ul>
  );
}

export default PaymentDetailBody;
