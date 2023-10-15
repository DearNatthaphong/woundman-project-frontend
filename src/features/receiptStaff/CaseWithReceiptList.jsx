import React from 'react';
import CasePaymentCard from '../../components/ui/CasePaymentCard';

function CaseWithReceiptList({ casesData }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-2 mx-3">
      {casesData.map((item) => (
        <CasePaymentCard key={item.id} caseData={item} />
      ))}
    </div>
  );
}

export default CaseWithReceiptList;
