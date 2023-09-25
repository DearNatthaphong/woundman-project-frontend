import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import CaseEditForm from './CaseEditForm';

function CaseEdit({ caseData, caseId, patientId, fetchCases }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="col-auto">
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="btn btn-primary btn-sm"
      >
        แก้ไข
      </button>
      <Modal
        title="แก้ไขประวัติการรักษา"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <CaseEditForm
          caseData={caseData}
          caseId={caseId}
          patientId={patientId}
          onSuccess={() => setIsOpen(false)}
          fetchCases={fetchCases}
        />
      </Modal>
    </div>
  );
}

export default CaseEdit;
