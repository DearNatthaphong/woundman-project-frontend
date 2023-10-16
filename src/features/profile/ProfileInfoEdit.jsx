import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import StaffInfoForm from './StaffInfoForm';

function ProfileInfoEdit() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="btn btn-info btn-sm"
      >
        แก้ไขข้อมูล
      </button>
      <Modal
        title="แก้ไขข้อมูลส่วนตัว"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <StaffInfoForm onSuccess={() => setIsOpen(false)} />
      </Modal>
    </>
  );
}

export default ProfileInfoEdit;
