import React from 'react';
import CaseContainerHeader from './CaseContainerHeader';
import CaseCreate from './CaseCreate';
import CaseList from './CaseList';

function CaseContainer({
  patientId,
  cases,
  onSuccess,
  setIsOpen,
  isOpen,
  fetchCases
}) {
  return (
    <div className="card text-bg-secondary mb-3">
      <CaseContainerHeader />
      <ul className="list-group list-group-flush">
        {/* <li className="list-group-item">
          <CaseCreate
            patientId={patientId}
            onSuccess={onSuccess}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </li> */}
        <li className="list-group-item">
          <CaseList
            cases={cases}
            patientId={patientId}
            fetchCases={fetchCases}
          />
        </li>
      </ul>
    </div>
  );
}

export default CaseContainer;
