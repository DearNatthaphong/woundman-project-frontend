import React from 'react';
import CaseHeader from './CaseHeader';
import CaseCreate from './CaseCreate';
import CaseList from './CaseList';

function CaseContainer({ id, cases, onSuccess, setIsOpen, isOpen }) {
  return (
    <div className="card border border-3 mb-3">
      <CaseHeader />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <CaseCreate
            id={id}
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
