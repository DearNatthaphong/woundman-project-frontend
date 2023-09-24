import React from 'react';
import CaseHeader from './CaseHeader';
import CaseCreate from './CaseCreate';
import CaseList from './CaseList';

function CaseContainer({ patientId, cases, onSuccess, setIsOpen, isOpen }) {
  return (
    <div className="card text-bg-secondary border border-3 mb-3">
      <CaseHeader />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <CaseCreate
            patientId={patientId}
            onSuccess={onSuccess}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </li>
        <li className="list-group-item">
          <CaseList cases={cases} />
        </li>
      </ul>
    </div>
  );
}

export default CaseContainer;