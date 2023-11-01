import React from 'react';

function AppointmentContainerHeader() {
  return (
    <div className="row align-items-center mb-3">
      <div className="col-auto">
        <h4 className="fw-bold my-auto">การนัดหมาย</h4>
      </div>
      <div className="col">
        <button
          type="button"
          className="btn btn-outline-primary rounded-pill btn-sm w-100"
        >
          สร้างการนัดหมาย
        </button>
      </div>
    </div>
  );
}

export default AppointmentContainerHeader;
