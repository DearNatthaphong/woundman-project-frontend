import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import TreatmentEditForm from './TreatmentEditForm';

function TreatmentEdit({ caseId, updateTreatment, treatment }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdate = async (caseId, treatmentId, input) => {
    await updateTreatment(caseId, treatmentId, input);
    setIsOpen(false);
  };

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="btn btn-sm btn-primary w-100"
      >
        แก้ไข
      </button>
      <Modal
        title="แก้ไขการรักษา"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <TreatmentEditForm
          onSubmit={handleUpdate}
          caseId={caseId}
          treatment={treatment}
        />
      </Modal>
    </div>
  );
}

export default TreatmentEdit;
