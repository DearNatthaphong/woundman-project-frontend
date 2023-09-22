import { useState } from 'react';
import PatientDetailCaseForm from './PatientDetailCaseForm';
import Modal from '../../components/ui/Modal';

function PatientDetailCaseEdit({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* <div className="card-header text-center">
        <h1>สร้างการตรวจรักษา</h1>
      </div>
      <PatientDetailCaseForm /> */}
      <div className="row">
        <div className="col-6 mx-auto p-3">
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
            <PatientDetailCaseForm onSuccess={() => setIsOpen(false)} id={id} />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default PatientDetailCaseEdit;
