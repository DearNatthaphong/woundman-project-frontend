import React from 'react';
import Patient from './Patient';

function PatientList({ patients }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-2 mx-3">
      {patients.map((item) => (
        <Patient key={item.id} patient={item} />
      ))}
    </div>
  );
}

export default PatientList;
