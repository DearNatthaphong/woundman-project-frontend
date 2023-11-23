import React, { useEffect, useRef } from 'react';

function AppointmentSearch({ searchTerm, handleSearchTerm, handleSearch }) {
  const inputEl = useRef();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleKeyUpEnter = async (e) => {
    try {
      if (e.key === 'Enter') {
        await handleSearch({ searchTerm: inputEl.current.value });
        inputEl.current.value = '';
        // onChange({ target: { value: '' } });
        return;
      }
      if (e.key === 'Escape') {
        inputEl.current.value = '';
        // onChange({ target: { value: '' } });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="input-group">
      <input
        ref={inputEl}
        type="text"
        className="form-control"
        placeholder="ค้นหาชื่อหรือนามสกุลคนไข้"
        aria-label="ค้นหาชื่อหรือนามสกุลคนไข้"
        aria-describedby="basic-addon2"
        value={searchTerm}
        onChange={(e) => handleSearchTerm(e.target.value)}
        onKeyDown={handleKeyUpEnter}
      />
      <button
        className="btn btn-outline-secondary"
        onClick={handleSearch}
        type="button"
      >
        ค้นหา
      </button>
    </div>
  );
}

export default AppointmentSearch;
