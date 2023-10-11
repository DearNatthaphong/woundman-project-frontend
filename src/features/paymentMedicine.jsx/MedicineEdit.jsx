import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import MedicineEditForm from './MedicineEditForm';

function MedicineEdit() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <td>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="btn btn-primary btn-sm"
        type="button"
      >
        แก้ไข
      </button>
      <Modal
        title="แก้ไขการจ่ายเงินค่าบริการ"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <MedicineEditForm />
      </Modal>
    </td>
  );
}

export default MedicineEdit;
