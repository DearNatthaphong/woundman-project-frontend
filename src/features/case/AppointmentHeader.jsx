import React, { useCallback, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import Modal from '../../components/ui/Modal';
import * as dateService from '../../utils/dateFormat';
import AppointmentForm from './AppointmentForm';
import AppointmentDeleteForm from './AppointmentDeleteForm';

function AppointmentHeader({
  appointment,
  caseId,
  updateAppointment,
  deleteAppointment
}) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const closeDropdown = useCallback(() => setIsOpenDropdown(false), []);
  const dropdownEl = useClickOutside(closeDropdown);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const onUpdate = async (caseId, appointmentId, input) => {
    await updateAppointment(caseId, appointmentId, input);
    setIsOpenDropdown(false);
    setIsOpenEditModal(false);
  };

  const onDelete = async (caseId, appointmentId) => {
    await deleteAppointment(caseId, appointmentId);
    setIsOpenDropdown(false);
    setIsOpenDeleteModal(false);
  };

  return (
    <div className="card-header">
      <div className="d-flex my-auto">
        <div className="my-auto">
          <p className="mb-0">
            {dateService.convertToBC(appointment.createdAt)}
          </p>
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
                  title="แก้ไขการนัดหมาย"
                  open={isOpenEditModal}
                  onClose={() => {
                    setIsOpenEditModal(false);
                    setIsOpenDropdown(false);
                  }}
                >
                  {/* {appointment && appointment.id && ( */}
                  <AppointmentForm
                    onSubmit={onUpdate}
                    caseId={caseId}
                    isEdit={true}
                    appointment={appointment}
                  />
                  {/* )} */}
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
                  <AppointmentDeleteForm
                    appointment={appointment}
                    caseId={caseId}
                    onSubmit={onDelete}
                    onClose={() => {
                      setIsOpenDeleteModal(false);
                      setIsOpenDropdown(false);
                    }}
                  />
                  {/* <TreatmentDeleteForm
                      treatment={treatment}
                      caseId={caseId}
                      onSubmit={onDelete}
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

export default AppointmentHeader;
