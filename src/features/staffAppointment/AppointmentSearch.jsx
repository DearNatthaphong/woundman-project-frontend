import React, { useEffect, useRef } from 'react';

function AppointmentSearch({ searchTerm, onChange, handleSearch }) {
  const inputEl = useRef();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleKeyUpEnter = async (e) => {
    try {
      if (e.key === 'Enter') {
        await handleSearch({ searchTerm: inputEl.current.value });
        inputEl.current.value = '';
        onChange({ target: { value: '' } });
        return;
      }
      if (e.key === 'Escape') {
        inputEl.current.value = '';
        onChange({ target: { value: '' } });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="ค้นหาชื่อหรือนามสกุลคนไข้"
        aria-label="ค้นหาชื่อหรือนามสกุลคนไข้"
        aria-describedby="basic-addon2"
        value={searchTerm}
        onChange={onChange}
        onKeyDown={handleKeyUpEnter}
      />
      <button
        ref={inputEl}
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
