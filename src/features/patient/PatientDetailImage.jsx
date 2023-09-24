import Avatar from '../../components/ui/Avatar';
import Modal from '../../components/ui/Modal';
import PatientDetailImageForm from './PatientDetailImageForm';
import { useState } from 'react';

function PatientDetailImage({ patientId, patient, setPatient }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-body">
      <div className="row text-center">
        <div className="col ">
          <div onClick={() => setIsOpen(true)}>
            <Avatar src={patient.profileImage} size={150} />
          </div>
        </div>
        <p className="card-text mb-0">
          <small className="text-body-secondary">แตะที่รูปภาพเพื่อแก้ไข</small>
        </p>

        <Modal
          title="แก้ไขข้อมูลส่วนตัว"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <PatientDetailImageForm
            patient={patient}
            patientId={patientId}
            setPatient={setPatient}
            onSuccess={() => setIsOpen(false)}
          />
        </Modal>
      </div>
    </div>
  );
}

export default PatientDetailImage;
