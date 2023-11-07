import React from 'react';
import CaseCard from '../../components/ui/CaseCard';

function CaseWithReceiptList({ casesData }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <div className="row row-cols-1 row-cols-md-2 g-2 mx-3">
          {casesData.map((item) => (
            <CaseCard key={item.id} caseData={item} isReceiptPage={true} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaseWithReceiptList;
