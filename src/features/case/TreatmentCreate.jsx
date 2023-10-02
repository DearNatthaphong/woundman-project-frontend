import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import TreatmentCreateForm from './TreatmentCreateForm';
import * as caseService from '../../api/caseApi';

function TreatmentCreate({ caseId, setTreatments, treatments }) {
  const [isOpen, setIsOpen] = useState(false);

  const saveTreatment = async (caseId, input) => {
    const res = await caseService.creatTreatmentByCaseId(caseId, input);
    setIsOpen(false);
    setTreatments([res.data.newTreatment, ...treatments]);
  };

  return (
    <div className="row justify-content-center">
      <div className="col text-center">
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className=" btn btn-primary w-100"
        >
          สร้างการรักษา
        </button>
        <Modal
          title="สร้างการรักษา"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <TreatmentCreateForm onSubmit={saveTreatment} caseId={caseId} />
        </Modal>
      </div>
    </div>
  );
}

export default TreatmentCreate;
