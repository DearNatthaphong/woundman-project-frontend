// import React, { useCallback, useState } from 'react';
// import { useClickOutside } from '../../hooks/useClickOutside';

import TreatmentDelete from './TreatmentDelete';
import TreatmentEdit from './TreatmentEdit';

function TreatmentFooter() {
  // const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  // const closeDropdown = useCallback(() => setIsOpenDropdown(false), []);
  // const dropdownEl = useClickOutside(closeDropdown);

  // const [isOpenModal, setIsOpenModal] = useState(false);

  // const handleEditClick = () => {
  //   setIsOpenDropdown(false); // Close the dropdown
  //   setIsOpenModal(true); // Open the modal
  // };
  return (
    <div className="card-footer">
      <div className="row align-items-center text-center">
        <div className="col-6">
          <TreatmentEdit />
        </div>
        <div className="col-6">
          <TreatmentDelete />
        </div>
      </div>
      {/* <div className="col-auto ms-auto">
            <div className="dropdown" ref={dropdownEl}>
              <button
                className="btn rounded-circle position-relative h-9 w-9 hover-bg-gray-200"
                onClick={() => setIsOpenDropdown((prev) => !prev)}
                //   data-bs-toggle="dropdown"
              >
                <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
              </button>
              <div
                className={`dropdown-menu end-0 mt-1${
                  isOpenDropdown ? ' d-block' : ''
                }`}
              >
                <>
                  <button onClick={handleEditClick} className="dropdown-item">
                    Edit
                  </button>
                  <Modal
                    title="สร้างการรักษา"
                    open={isOpenModal}
                    onClose={() => setIsOpenModal(false)}
                  >
                    <TreatmentCreateForm
                    // onSubmit={saveTreatment}
                    // caseId={caseId}
                    />
                  </Modal>
                </>
                <button className="dropdown-item">Delete</button>
              </div>
            </div>
          </div> */}
    </div>
  );
}

export default TreatmentFooter;
