import React from 'react';

function CaseContainerHeader() {
  return (
    <div className="card-header text-center">
      <div className="row">
        <div className="col-auto">ประวัติสุขภาพและการตรวจร่างกาย</div>
        <div className="col-auto ms-auto">
          <button
            type="button"
            // className="rounded-circle bg-primary border-0"
            className="btn btn-primary btn-sm"
          >
            <i className="fas fa-plus text-white" />
            {` สร้างประวัติ`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaseContainerHeader;
