import React from 'react';

function CaseSearch({
  searchTerm,
  handleSearchTerm,
  handleSearch,
  showCasesWithoutTreatment,
  onToggle
}) {
  return (
    <div className="row mt-3 justify-content-center">
      <div className="col-12 col-md-6">
        <div className="form mb-3 text-secondary">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="ค้นหาชื่อหรือนามสกุลคนไข้"
              aria-label="ค้นหาชื่อหรือนามสกุลคนไข้"
              aria-describedby="basic-addon2"
              value={searchTerm}
              onChange={(e) => handleSearchTerm(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              onClick={handleSearch}
              type="button"
            >
              ค้นหา
            </button>
          </div>
        </div>
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
    </div>
  );
}

export default CaseSearch;
