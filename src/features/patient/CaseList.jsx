import React from 'react';
import Case from './Case';

function CaseList({ cases, patientId, fetchCases }) {
  if (!Array.isArray(cases)) {
    return <div>No cases available</div>;
  }
  return (
    <div>
      {cases.map((item) => (
        <Case
          key={item.id}
          caseData={item}
          caseId={item.id}
          patientId={patientId}
          fetchCases={fetchCases}
        />
      ))}
    </div>
  );
}

export default CaseList;
