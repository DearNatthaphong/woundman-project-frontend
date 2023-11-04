import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import TreatmentForm from './TreatmentForm';

function TreatmentToggleCreate({ caseId, createTreatment }) {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (caseId, input) => {
    await createTreatment(caseId, input);
    setIsOpen(false);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-auto">
            <h4 className="fw-bold my-auto">การรักษา</h4>
          </div>
          <div className="col">
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="btn btn-outline-primary rounded-pill btn-sm w-100"
            >
              <i className="fa-solid fa-plus fa-lg" />
              {` สร้างการรักษา`}
            </button>
            <Modal
              title="สร้างการรักษา"
              open={isOpen}
              onClose={() => setIsOpen(false)}
            >
              <TreatmentForm caseId={caseId} onSubmit={onSubmit} />
              {/* <TreatmentCreateForm onSubmit={saveTreatment} caseId={caseId} /> */}
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TreatmentToggleCreate;
