import React from 'react';
import { Link } from 'react-router-dom';
import PatientImage from './PatientImage';
import PatientInfoSome from './PatientInfoSome';
import * as dateService from '../../utils/dateFormat';

function Patient({ patient }) {
  return (
    <div className="col">
      <div className="card max-w-362">
        <div className="row g-0 align-items-center">
          <PatientImage patient={patient} />
          <PatientInfoSome patient={patient} />
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">
            {`ลงทะเบียน ${dateService.shortFormattedDate(patient.createdAt)}`}
          </small>
        </div>
      </div>
    </div>
  );
}

export default Patient;
