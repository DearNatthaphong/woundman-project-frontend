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
    <div className="card mb-3">
      <div className="card-body">
        <CaseContainerHeader />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <CaseList
              cases={cases}
              patientId={patientId}
              fetchCases={fetchCases}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CaseContainer;
