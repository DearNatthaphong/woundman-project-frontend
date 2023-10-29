import React from 'react';
import CaseHeader from './CaseHeader';
import CaseContent from './CaseContent';

function Case({ caseData }) {
  return (
    // <div className="col">
    <div className="col card">
      <CaseHeader caseData={caseData} />
      <CaseContent caseData={caseData} />
    </div>
    // </div>
  );
}

export default Case;
