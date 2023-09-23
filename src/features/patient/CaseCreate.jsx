import React, { useState } from 'react';
import CaseCreateForm from './CaseCreateForm';
import Modal from '../../components/ui/Modal';

function CaseCreate({ id, onSuccess, setIsOpen, isOpen }) {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* <div className="card-header text-center">
          <h1>สร้างการตรวจรักษา</h1>
        </div>
        <PatientDetailCaseForm /> */}
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className=" btn btn-success"
          >
            สร้างการตรวจรักษา
          </button>
          <Modal
            title="สร้างการตรวจรักษา"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            {/* <CaseCreateForm onSuccess={() => setIsOpen(false)} id={id} /> */}
            <CaseCreateForm onSuccess={onSuccess} id={id} />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default CaseCreate;
