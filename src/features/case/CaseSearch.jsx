import React from 'react';

function CaseSearch({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <div className="form mb-3 text-secondary">
      <div className="input-group mb-3">
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
      {/* </div> */}
    </div>
  );
}

export default CaseSearch;
