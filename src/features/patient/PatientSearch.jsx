import React, { useCallback, useEffect, useRef } from 'react';
import { useKeyUpEnter } from '../../hooks/useKeyUpEnter';

function PatientSearch({ searchTerm, handleSearchTerm, handleSearch }) {
  const inputEl = useRef();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleKeyUpEnter = async (e) => {
    try {
      if (e.key === 'Enter') {
        await handleSearch({ searchTerm: inputEl.current.value });
        inputEl.current.value = '';
      }
      if (e.key === 'Escape') {
        inputEl.current.value = '';
      }
    } catch (err) {
      console.log(err);
    }
  };
  // const handleSearchCallback = useCallback(() => {
  //   return { searchTerm: inputEl.current.value };
  // }, [inputEl]);

  // const inputEl = useKeyUpEnter(handleSearchCallback);

  return (
    <div className="form-floating text-secondary">
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
    </div>
  );
}

export default PatientSearch;
