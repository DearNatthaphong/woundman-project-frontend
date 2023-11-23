import React from 'react';

function CreatedBy({ titleName, firstName, lastName, role }) {
  return (
    <div className="row g-0 align-items-center w-100">
      <div className="col-12 ">
        <p className="text-start mb-0">{` สร้างโดย : ${titleName} ${firstName} ${lastName}`}</p>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-auto">
            <small className="text-body-secondary border border-secondary rounded px-1">
              {role}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatedBy;
