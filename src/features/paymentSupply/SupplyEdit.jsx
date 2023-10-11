import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import SupplyEditForm from './SupplyEditForm';

function SupplyEdit() {
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
        title="แก้ไขการจ่ายเงินค่าเวชภัณฑ์"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <SupplyEditForm />
      </Modal>
    </td>
  );
}

export default SupplyEdit;
