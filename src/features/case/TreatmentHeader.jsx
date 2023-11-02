import React, { useCallback, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import * as dateService from '../../utils/dateFormat';
import Modal from '../../components/ui/Modal';
import TreatmentForm from './TreatmentForm';
import TreatmentDeleteForm from './TreatmentDeleteForm';

function TreatmentHeader({
  treatment,
  caseId,
  updateTreatment,
  deleteTreatment
}) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const closeDropdown = useCallback(() => setIsOpenDropdown(false), []);
  const dropdownEl = useClickOutside(closeDropdown);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const onUpdate = async (caseId, treatmentId, input) => {
    await updateTreatment(caseId, treatmentId, input);
    setIsOpenDropdown(false);
    setIsOpenEditModal(false);
  };

  const onDelete = async (caseId, treatmentId) => {
    await deleteTreatment(caseId, treatmentId);
    setIsOpenDropdown(false);
    setIsOpenDeleteModal(false);
  };

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
                  <TreatmentForm
                    treatment={treatment}
                    caseId={caseId}
                    onSubmit={onUpdate}
                    isEdit={true}
                  />
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
                  <TreatmentDeleteForm
                    treatment={treatment}
                    caseId={caseId}
                    onSubmit={onDelete}
                    onClose={() => {
                      setIsOpenDeleteModal(false);
                      setIsOpenDropdown(false);
                    }}
                  />
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
