import React, { useState } from 'react';
// import AppointmentCreateForm from './AppointmentCreateForm';
import Modal from '../../components/ui/Modal';
import AppointmentForm from './AppointmentForm';

function AppointmentToggleCreate({ appointments, createAppointment, caseId }) {
  const [isOpen, setIsOpen] = useState(false);

  const onCreate = async (caseId, input) => {
    await createAppointment(caseId, input);
    setIsOpen(false);
  };

  return (
    <div className="row align-items-center">
      <div className="col-auto">
        <h5 className="fw-bold my-auto">ใบนัดหมาย</h5>
      </div>
      {!appointments.length && (
        <div className="col">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="btn btn-outline-primary rounded-pill btn-sm w-100"
          >
            <i className="fa-solid fa-plus fa-lg" />
            {` สร้างใบนัด`}
          </button>
          <Modal
            title="สร้างการนัดหมาย"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <AppointmentForm onSubmit={onCreate} caseId={caseId} />
            {/* <AppointmentCreateForm onSubmit={onCreate} caseId={caseId} /> */}
            {/* <TreatmentForm caseId={caseId} onSubmit={onSubmit} /> */}
            {/* <TreatmentCreateForm onSubmit={saveTreatment} caseId={caseId} /> */}
          </Modal>
        </div>
      )}
    </div>
  );
}

export default AppointmentToggleCreate;
