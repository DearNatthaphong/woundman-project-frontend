import React from 'react';
import CaseList from './CaseList';
import CaseCreate from './CaseCreate';

function CaseContainer({ cases, createCase, selectedPatientId }) {
  return (
    <div>
      <CaseCreate
        createCase={createCase}
        selectedPatientId={selectedPatientId}
      />
      <CaseList cases={cases} />
    </div>
  );
}

export default CaseContainer;
