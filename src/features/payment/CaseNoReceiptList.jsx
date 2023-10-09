import React from 'react';
import CaseNoReceipt from './CaseNoReceipt';

function CaseNoReceiptList({ casesData }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-2 mx-3">
      {casesData.map((item) => (
        <CaseNoReceipt key={item.id} caseData={item} />
      ))}
    </div>
  );
}

export default CaseNoReceiptList;
