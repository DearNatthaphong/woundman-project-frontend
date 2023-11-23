import React from 'react';
import * as dateService from '../../utils/dateFormat';

function EditedBy({ titleName, firstName, lastName, role, updatedAt }) {
  return (
    <div className="row g-0 align-items-center w-100">
      <div className="col-12 ">
        <p className="text-start mb-0">{` แก้ไขโดย : ${titleName} ${firstName} ${lastName}`}</p>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-auto">
            <small className="text-body-secondary border border-secondary rounded px-1">
              {role}
            </small>
          </div>
          <div className="col-auto ms-auto">
            <small className="text-end text-body-secondary ">
              {dateService.shortFormattedDate(updatedAt)}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditedBy;
