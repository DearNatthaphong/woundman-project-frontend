import React from 'react';
import CaseList from './CaseList';
import CaseCreate from './CaseCreate';

function CaseContainer({
  cases,
  createCase,
  selectedPatientId,
  updateCase,
  deleteCase
}) {
  return (
    <div>
      <CaseCreate
        createCase={createCase}
        selectedPatientId={selectedPatientId}
      />
      <CaseList
        cases={cases}
        updateCase={updateCase}
        selectedPatientId={selectedPatientId}
        deleteCase={deleteCase}
      />
    </div>
  );
}

export default CaseContainer;
