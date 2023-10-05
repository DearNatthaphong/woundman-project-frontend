import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import AppointmentCreateForm from './AppointmentCreateForm';

function AppointmentCreate({ createTreatment, caseId }) {
  const [isOpen, setIsOpen] = useState(false);

  const saveAppointment = async (caseId, input) => {
    await createTreatment(caseId, input);
    setIsOpen(false);
  };

  return (
    <li className="list-group-item">
      <div className="row justify-content-center">
        <div className="col text-center">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className=" btn btn-primary w-100"
          >
            สร้างการนัดหมาย
          </button>
          <Modal
            title="สร้างการนัดหมาย"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <AppointmentCreateForm onSubmit={saveAppointment} caseId={caseId} />
          </Modal>
        </div>
      </div>
    </li>
  );
}

export default AppointmentCreate;
