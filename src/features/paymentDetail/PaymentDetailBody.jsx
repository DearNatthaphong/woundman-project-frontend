import React from 'react';
import PatientDetail from './PatientDetail';
import SupplyContainer from '../paymentSupply/SupplyContainer';
import ServiceContainer from '../paymentService/ServiceContainer';
import MedicineContainer from '../paymentMedicine.jsx/MedicineContainer';
import ReceiptCreateContainer from '../paymentReceipt/ReceiptCreateContainer';
import ReceiptDisplayContainer from '../paymentReceipt/ReceiptDisplayContainer';
import ReceiptList from '../paymentReceipt/ReceiptList';

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
  receipts,
  deleteReceipt,
  createReceipt,
  // formattedTotalPrice,
  totalPrice
}) {
  console.log('receipts', receipts);
  return (
    <>
      {/* <ul className="list-group list-group-flush"> */}
      {/* {Object.keys(receipt).length ? ( */}
      <PatientDetail caseData={caseData} />
      {/* {receipts ? ( */}
      {/* {receipts.map((item) => (
        <ReceiptDisplayContainer
        key={item.id}
        receipt={item}
        // formattedTotalPrice={formattedTotalPrice}
        deleteReceipt={deleteReceipt}
        caseId={caseId}
        />
      ))} */}
      {/* ))
      ) : ( */}
      {receipts.length ? (
        <ReceiptList
          receipts={receipts}
          caseId={caseId}
          deleteReceipt={deleteReceipt}
        />
      ) : (
        <>
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
          <ReceiptCreateContainer
            createReceipt={createReceipt}
            // formattedTotalPrice={formattedTotalPrice}
            caseId={caseId}
            totalPrice={totalPrice}
          />
        </>
      )}
      {/* )} */}
      {/* </ul> */}
    </>
  );
}

export default PaymentDetailBody;
