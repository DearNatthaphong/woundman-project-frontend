import React from 'react';

function PatientDetailHeader() {
  return (
    <div className="card-header text-center">
      <div className="row">
        <div className="col-auto">ข้อมูลคนไข้</div>
        <div className="col-auto ms-auto">
          <button type="button" className="rounded-circle bg-primary border-0">
            <i className="fas fa-pen text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientDetailHeader;
