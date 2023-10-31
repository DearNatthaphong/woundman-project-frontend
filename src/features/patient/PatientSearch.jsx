import React from 'react';

function PatientSearch({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <div className="row mt-3 justify-content-center">
      <div className="col-12 col-md-6">
        <div className="card mx-1">
          <div className="card-body">
            <div className="form-floating text-secondary">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ค้นหาชื่อหรือนามสกุลคนไข้"
                  aria-label="ค้นหาชื่อหรือนามสกุลคนไข้"
                  aria-describedby="basic-addon2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientSearch;
