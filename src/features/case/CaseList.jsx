import React from 'react';
import Case from './Case';
import CaseCard from '../../components/ui/CaseCard';

function CaseList({ cases }) {
  // if (!cases) {
  //   return null;
  // }
  return (
    <div className="row mt-3 justify-content-center">
      <div className="col-12">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2">
          {cases.map((item) => (
            <CaseCard key={item.id} caseData={item} isCasePage={true} />
            // <Case key={item.id} case={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaseList;
