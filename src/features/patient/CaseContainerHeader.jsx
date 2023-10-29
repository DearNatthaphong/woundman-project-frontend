import React from 'react';

function CaseContainerHeader() {
  return (
    // <div className="card-header text-center">
    <div className="row">
      <div className="col-auto">
        <h5 className="fw-bold my-auto">ประวัติสุขภาพ</h5>
      </div>
      <div className="col-auto ms-auto">
        <button
          type="button"
          className="btn btn-outline-primary rounded-pill btn-sm"
        >
          <i className="fas fa-plus" />
          {` สร้างประวัติ`}
        </button>
      </div>
    </div>
    // </div>
  );
}

export default CaseContainerHeader;
