import React from 'react';
import CaseHeader from './CaseHeader';
import CaseContent from './CaseContent';

function Case({ caseData, updateCase, selectedPatientId, deleteCase }) {
  return (
    <div className="col">
      <div className="card">
        <CaseHeader
          caseData={caseData}
          updateCase={updateCase}
          selectedPatientId={selectedPatientId}
          deleteCase={deleteCase}
        />
        <CaseContent caseData={caseData} />
      </div>
    </div>
  );
}

export default Case;
