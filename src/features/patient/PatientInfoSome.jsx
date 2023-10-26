import React from 'react';
import * as dateService from '../../utils/dateFormat';
import { Link } from 'react-router-dom';

function PatientInfoSome({
  patient: { titleName, firstName, lastName, dateOfBirth, id }
}) {
  return (
    <div className="col-8">
      <div class="card-body px-0">
        <h5 class="card-title">{`${titleName} ${firstName} ${lastName}`}</h5>
        <p class="card-text mb-2">
          {`อายุ : ${dateService.calculateAge(dateOfBirth)}`}
        </p>
        <div className="text-end px-3">
          <Link
            to={`/staff/patients/${id}`}
            className="btn btn-outline-primary btn-sm "
          >
            โปรไฟล์ส่วนตัว
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PatientInfoSome;
