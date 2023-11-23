import React from 'react';
import Receipt from './Receipt';

function ReceiptList({ receipts, caseId, deleteReceipt }) {
  // console.log('receipts in ReceiptList', receipts);
  // if (!Array.isArray(receipts)) {
  //   console.error('Receipts is not an array');
  //   return null; // or handle the error
  // }

  return (
    <>
      {receipts?.map((item, index) => (
        <Receipt
          key={item.id}
          receipt={item}
          caseId={caseId}
          deleteReceipt={deleteReceipt}
        />
      ))}
    </>
  );
}

export default ReceiptList;
