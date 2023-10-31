import React from 'react';
import Patient from './Patient';

function PatientList({ patients }) {
  return (
    <div className="card mt-3 mx-1">
      <div className="card-body">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
          {patients.map((item) => (
            <Patient key={item.id} patient={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PatientList;
