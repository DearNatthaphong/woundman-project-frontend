import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import AppointmentDeleteForm from './AppointmentDeleteForm';

function AppointmentDelete({ appointment, caseId, deleteAppointment }) {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (caseId, appointmentId) => {
    await deleteAppointment(caseId, appointmentId);
    setIsOpen(false);
  };
  return (
    <div className="col-6">
      <button
        className="btn btn-sm  btn-danger w-100"
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        ลบ
      </button>
      <Modal
        title="คุณต้องการลบใช่หรือไม่"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <AppointmentDeleteForm
          onSubmit={onSubmit}
          caseId={caseId}
          appointment={appointment}
          onClose={() => setIsOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default AppointmentDelete;
