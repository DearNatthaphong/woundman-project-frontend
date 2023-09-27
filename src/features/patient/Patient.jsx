import React from 'react';
import { Link } from 'react-router-dom';
import PatientImage from './PatientImage';
import PatientInfoSome from './PatientInfoSome';

function Patient({ patient }) {
  return (
    <div className="col">
      <Link
        className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        to={`/staff/patients/${patient.id}`}
      >
        <div className="card">
          <div className="row g-0 align-items-center">
            <PatientImage patient={patient} />
            <PatientInfoSome patient={patient} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Patient;
