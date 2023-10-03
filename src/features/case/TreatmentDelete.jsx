import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import TreatmentDeleteForm from './TreatmentDeleteForm';

function TreatmentDelete({ caseId, treatment, deleteTreatment }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async (caseId, treatmentId) => {
    await deleteTreatment(caseId, treatmentId);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="btn btn-sm  btn-danger w-100"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        ลบ
      </button>
      <Modal
        title="คุณต้องการลบใช่หรือไม่"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <TreatmentDeleteForm
          onSubmit={handleDelete}
          caseId={caseId}
          treatment={treatment}
          onClose={() => setIsOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default TreatmentDelete;
