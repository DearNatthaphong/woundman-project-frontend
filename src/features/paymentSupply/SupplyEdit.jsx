import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import SupplyEditForm from './SupplyEditForm';

function SupplyEdit({
  itemsSupply,
  updatePaymentSupply,
  caseId,
  id,
  title,
  amount
}) {
  const [isOpen, setIsOpen] = useState(false);
  const onSubmit = async (caseId, paymentId, title, amount) => {
    await updatePaymentSupply(caseId, paymentId, title, amount);
    setIsOpen(false);
  };
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
        <SupplyEditForm
          itemsSupply={itemsSupply}
          caseId={caseId}
          onSubmit={onSubmit}
          id={id}
          title={title}
          amount={amount}
        />
      </Modal>
    </td>
  );
}

export default SupplyEdit;
