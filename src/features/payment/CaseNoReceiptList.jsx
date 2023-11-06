import React from 'react';
// import CaseNoReceipt from './CaseNoReceipt';
import CasePaymentCard from '../../components/ui/CasePaymentCard';

function CaseNoReceiptList({ casesData }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2">
          {casesData.map((item) => (
            <CasePaymentCard
              key={item.id}
              caseData={item}
              isPaymentPage={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaseNoReceiptList;
