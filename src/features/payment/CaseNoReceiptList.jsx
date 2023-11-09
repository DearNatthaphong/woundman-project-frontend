import React from 'react';
// import CaseNoReceipt from './CaseNoReceipt';
import CaseCard from '../../components/ui/CaseCard';

function CaseNoReceiptList({ casesData }) {
  return (
    <>
      {casesData.map((item) => (
        <CaseCard key={item.id} caseData={item} isPaymentPage={true} />
      ))}
    </>
  );
}

export default CaseNoReceiptList;
