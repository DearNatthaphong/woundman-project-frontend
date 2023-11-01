import React from 'react';
import Patient from './Patient';

function PatientList({ patients }) {
  return (
    <div className="row mt-3 justify-content-center">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2">
              {patients.map((item) => (
                <Patient key={item.id} patient={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientList;
