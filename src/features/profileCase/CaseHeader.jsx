import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import * as dateService from '../../utils/dateFormat';
import { useClickOutside } from '../../hooks/useClickOutside';
import Modal from '../../components/ui/Modal';
// import CaseEditForm from './CaseEditForm';
import CaseForm from './CaseForm';
import CaseDeleteForm from './CaseDeleteForm';

function CaseHeader({ caseData, updateCase, selectedPatientId, deleteCase }) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const closeDropdown = useCallback(() => setIsOpenDropdown(false), []);
  const dropdownEl = useClickOutside(closeDropdown);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const onUpdateCase = async (selectedPatientId, caseId, updatedData) => {
    await updateCase(selectedPatientId, caseId, updatedData);
    setIsOpenEditModal(false);
    setIsOpenDropdown(false);
  };

  const onDeleteCase = async (selectedPatientId, caseId) => {
    await deleteCase(selectedPatientId, caseId);
    // setTimeout(() => {
    setIsOpenDeleteModal(false);
    setIsOpenDropdown(false);
    // }, 1);
  };

  return (
    <div className="card-header">
      <div className="d-flex my-auto">
        <div className="my-auto">
          <h5 className="p-0">{dateService.convertToBC(caseData.createdAt)}</h5>
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
                {/* {isOpenEditModal && ( */}
                <Modal
                  title="แก้ไขประวัติสุขภาพ"
                  open={isOpenEditModal}
                  onClose={() => {
                    setIsOpenEditModal(false);
                    setIsOpenDropdown(false);
                  }}
                >
                  <CaseForm
                    caseData={caseData}
                    onSubmit={onUpdateCase}
                    selectedPatientId={selectedPatientId}
                    isEdit={true}
                  />
                </Modal>
                {/* )} */}
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
                {/* {isOpenDeleteModal && ( */}
                <Modal
                  title="ยันยันการลบประวัติสุขภาพ"
                  open={isOpenDeleteModal}
                  onClose={() => {
                    setIsOpenDeleteModal(false);
                    setIsOpenDropdown(false);
                  }}
                >
                  <CaseDeleteForm
                    onSubmit={onDeleteCase}
                    selectedPatientId={selectedPatientId}
                    caseData={caseData}
                    onClose={() => {
                      setIsOpenDeleteModal(false);
                      setIsOpenDropdown(false);
                    }}
                  />
                </Modal>
                {/* )} */}
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  ข้อมูลการรักษา
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseHeader;
