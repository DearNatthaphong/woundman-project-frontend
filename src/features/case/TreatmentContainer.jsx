import React from 'react';
import TreatmentContainerHeader from './TreatmentContainerHeader';
import TreatmentCreate from './TreatmentCreate';
import TreatmentList from './TreatmentList';

function TreatmentContainer() {
  return (
    <div>
      <TreatmentContainerHeader />

      <ul className="list-group">
        <li className="list-group-item">
          <TreatmentCreate />
        </li>
        <li className="list-group-item">
          <TreatmentList />
        </li>
      </ul>
    </div>
  );
}

export default TreatmentContainer;
