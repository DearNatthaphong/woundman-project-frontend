import React from 'react';
import Receipt from './Receipt';

function ReceiptList({ receipts }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-2 mx-3">
      {receipts.map((item) => (
        <Receipt key={item.id} receipt={item} />
      ))}
    </div>
  );
}

export default ReceiptList;
