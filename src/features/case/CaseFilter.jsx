import React from 'react';

function CaseFilter({ showCasesWithoutTreatment, onToggle }) {
  return (
    <div className="col-12 col-sm-6">
      <div className="card">
        <div className="card-body p-2">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              checked={showCasesWithoutTreatment}
              onChange={onToggle}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              การตรวจรักษาที่รอการรักษา
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseFilter;
