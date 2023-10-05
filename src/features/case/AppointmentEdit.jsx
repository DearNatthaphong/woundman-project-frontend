import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import AppointmentEditForm from './AppointmentEditForm';

function AppointmentEdit({ appointment, caseId, updateAppointment }) {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (caseId, treatmentId, input) => {
    await updateAppointment(caseId, treatmentId, input);
    setIsOpen(false);
  };
  return (
    <div className="col-6">
      <button
        className="btn btn-sm btn-primary w-100"
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        แก้ไข
      </button>
      <Modal
        title="แก้ไขการนัดหมาย"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <AppointmentEditForm
          onSubmit={onSubmit}
          appointment={appointment}
          caseId={caseId}
        />
      </Modal>
    </div>
  );
}

export default AppointmentEdit;
