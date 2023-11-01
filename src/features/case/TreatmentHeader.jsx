import React, { useCallback, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import * as dateService from '../../utils/dateFormat';
import Modal from '../../components/ui/Modal';

function TreatmentHeader({ treatment }) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const closeDropdown = useCallback(() => setIsOpenDropdown(false), []);
  const dropdownEl = useClickOutside(closeDropdown);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  return (
    <div className="card-header">
      <div className="d-flex my-auto">
        <div className="my-auto">
          <h5 className="p-0">
            {dateService.convertToBC(treatment.createdAt)}
          </h5>
        </div>
        <div className="ms-auto">
          <div className="btn-group" ref={dropdownEl}>
            <button
              type="button"
              onClick={() => setIsOpenDropdown((prev) => !prev)}
              className="btn btn-outline-secondary border border-0 rounded-circle"
              // data-bs-toggle="dropdown"
              // aria-expanded="false"
            >
              <i className="fa-solid fa-ellipsis" />
            </button>
            <ul
              className={`dropdown-menu end-0${
                isOpenDropdown ? ' d-block' : ''
              }`}
            >
              <li>
                <button
                  onClick={(e) => {
                    // e.stopPropagation();
                    // setIsOpenDropdown(false);
                    setIsOpenEditModal(true);
                  }}
                  className="dropdown-item"
                >
                  แก้ไข
                </button>
                <Modal
                  title="แก้ไขการรักษา"
                  open={isOpenEditModal}
                  onClose={() => {
                    setIsOpenEditModal(false);
                    setIsOpenDropdown(false);
                  }}
                >
                  {/* <CaseForm
                    caseData={caseData}
                    onSubmit={onUpdateCase}
                    selectedPatientId={selectedPatientId}
                    isEdit={true}
                  /> */}
                </Modal>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    // e.stopPropagation();
                    // setIsOpenDropdown(false);
                    setIsOpenDeleteModal(true);
                  }}
                  className="dropdown-item"
                >
                  ลบ
                </button>
                <Modal
                  title="ยันยันการลบการรักษา"
                  open={isOpenDeleteModal}
                  onClose={() => {
                    setIsOpenDeleteModal(false);
                    setIsOpenDropdown(false);
                  }}
                >
                  {/* <CaseDeleteForm
                    onSubmit={onDeleteCase}
                    selectedPatientId={selectedPatientId}
                    caseData={caseData}
                    onClose={() => {
                      setIsOpenDeleteModal(false);
                      setIsOpenDropdown(false);
                    }}
                  /> */}
                </Modal>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TreatmentHeader;
