import React from 'react';
import PatientDetail from './PatientDetail';
import SupplyContainer from '../paymentSupply/SupplyContainer';
import ServiceContainer from '../paymentService/ServiceContainer';
import MedicineContainer from '../paymentMedicine.jsx/MedicineContainer';
import ReceiptCreateContainer from '../paymentReceipt/ReceiptCreateContainer';
import ReceiptDisplayContainer from '../paymentReceipt/ReceiptDisplayContainer';

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
  deletePaymentService,
  deletePaymentSupply,
  deletePaymentMedicine,
  updatePaymentService,
  updatePaymentSupply,
  updatePaymentMedicine,
  receipt,
  formattedTotalPrice,
  deleteReceipt
}) {
  return (
    <ul className="list-group list-group-flush">
      <PatientDetail caseData={caseData} />

      <ServiceContainer
        itemsService={itemsService}
        caseId={caseId}
        createPaymentService={createPaymentService}
        paymentsService={paymentsService}
        deletePaymentService={deletePaymentService}
        updatePaymentService={updatePaymentService}
      />
      <SupplyContainer
        itemsSupply={itemsSupply}
        caseId={caseId}
        createPaymentSupply={createPaymentSupply}
        paymentsSupply={paymentsSupply}
        deletePaymentSupply={deletePaymentSupply}
        updatePaymentSupply={updatePaymentSupply}
      />
      <MedicineContainer
        itemsMedicine={itemsMedicine}
        caseId={caseId}
        createPaymentMedicine={createPaymentMedicine}
        paymentsMedicine={paymentsMedicine}
        deletePaymentMedicine={deletePaymentMedicine}
        updatePaymentMedicine={updatePaymentMedicine}
      />
      <ReceiptCreateContainer />
      <ReceiptDisplayContainer
        receipt={receipt}
        formattedTotalPrice={formattedTotalPrice}
        deleteReceipt={deleteReceipt}
        caseId={caseId}
      />
    </ul>
  );
}

export default PaymentDetailBody;
