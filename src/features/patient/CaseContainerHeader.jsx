import React from 'react';

function CaseContainerHeader() {
  return (
    <div className="card-header text-center">
      <div className="row">
        <div className="col-auto">ข้อมูลการตรวจรักษา</div>
        <div className="col-auto ms-auto">
          <button type="button" className="rounded-circle bg-primary border-0">
            <i className="fas fa-plus text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaseContainerHeader;
