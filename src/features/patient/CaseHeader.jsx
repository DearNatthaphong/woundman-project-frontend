import React, { useCallback, useState } from 'react';
import CaseEdit from './CaseEdit';
import * as dateFormat from '../../utils/dateFormat';
import { useClickOutside } from '../../hooks/useClickOutside';

function CaseHeader({ caseId, patientId, caseData, fetchCases }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = useCallback(() => setIsOpen(false), []);

  const dropdownEl = useClickOutside(closeDropdown);

  return (
    <div className="card-header">
      <div className="row align-items-center">
        <div className="col-auto">
          {dateFormat.formattedDate(caseData.createdAt)}
        </div>
        <div className="dropdown col-auto ms-auto" ref={dropdownEl}>
          <button
            className="btn rounded-circle position-relative h-9 w-9 hover-bg-gray-200"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
          </button>
          <div
            className={`dropdown-menu end-0 mt-1${isOpen ? ' d-block' : ''}`}
          >
            <CaseEdit
              caseData={caseData}
              caseId={caseId}
              patientId={patientId}
              fetchCases={fetchCases}
            />
            <button className="dropdown-item">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseHeader;
