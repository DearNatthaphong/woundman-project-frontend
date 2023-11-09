import React from 'react';
import CaseCard from '../../components/ui/CaseCard';

function CaseWithReceiptList({ casesData }) {
  return (
    <>
      {casesData.map((item) => (
        <CaseCard key={item.id} caseData={item} isReceiptPage={true} />
      ))}
    </>
  );
}

export default CaseWithReceiptList;
