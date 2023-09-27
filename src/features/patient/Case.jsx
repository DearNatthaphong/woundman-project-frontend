import React from 'react';
import CaseHeader from './CaseHeader';
import CaseContent from './CaseContent';

function Case({ caseId, patientId, caseData, fetchCases }) {
  return (
    // <div className="card" style={{ width: '18rem' }}>
    <div className="card mb-3">
      <CaseHeader
        caseId={caseId}
        caseData={caseData}
        patientId={patientId}
        fetchCases={fetchCases}
      />
      <CaseContent caseData={caseData} />
    </div>
  );
}

export default Case;
