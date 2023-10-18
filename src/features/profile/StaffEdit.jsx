import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import StaffEditForm from './StaffEditForm';
import { useAuth } from '../../contexts/AuthContext';

function StaffEdit() {
  const [isOpen, setIsOpen] = useState(false);
  const { updateStaff } = useAuth();

  const onSubmit = async (input) => {
    await updateStaff(input);
    setIsOpen(false);
  };
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="rounded-circle bg-primary border-0"
      >
        <i className="fas fa-pen text-white" />
      </button>
      <Modal
        title="แก้ไขข้อมูลส่วนตัว"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <StaffEditForm onSubmit={onSubmit} />
      </Modal>
    </div>
  );
}

export default StaffEdit;
