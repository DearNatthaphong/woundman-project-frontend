import React from 'react';
import * as dateService from '../../utils/dateFormat';

function PatientInfoSome({
  patient: { titleName, firstName, lastName, dateOfBirth, createdAt }
}) {
  return (
    <div className="col-8">
      <div class="card-body">
        <h5 class="card-title">{`${titleName} ${firstName} ${lastName}`}</h5>
        <p class="card-text">
          {`อายุ : ${dateService.calculateAge(dateOfBirth)}`}
        </p>
        <p class="card-text">
          <small class="text-body-secondary">{`ลงทะเบียน : ${dateService.shortFormattedDate(
            createdAt
          )}`}</small>
        </p>
      </div>
    </div>
  );
}

export default PatientInfoSome;
