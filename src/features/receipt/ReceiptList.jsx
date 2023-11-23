import React from 'react';
import Receipt from './Receipt';

function ReceiptList({ receipts }) {
  return (
    <>
      {receipts.map((item, index) => (
        <Receipt key={item.id} receipt={item} />
      ))}
    </>
  );
}

export default ReceiptList;
