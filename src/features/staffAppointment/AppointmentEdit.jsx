import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import AppointmentEditForm from './AppointmentEditForm';

function AppointmentEdit({
  id,
  reason,
  appointmentDate,
  status,
  updateAppointment
}) {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (id, updatedData) => {
    await updateAppointment(id, updatedData);
    setIsOpen(false);
  };

  return (
    <div className="col-auto ms-auto">
      <button
        className="btn btn-sm btn-primary"
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
          id={id}
          reason={reason}
          appointmentDate={appointmentDate}
          status={status}
        />
      </Modal>
    </div>
  );
}

export default AppointmentEdit;
