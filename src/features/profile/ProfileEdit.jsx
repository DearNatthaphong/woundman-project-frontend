import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import StaffEditForm from './StaffEditForm';
import { useAuth } from '../../contexts/AuthContext';
import PatientEditForm from './PatientEditForm';

function ProfileEdit({
  isStaffProfile,
  isSelectedPatientProfile,
  updatePatient,
  selectedPatient,
  selectedPatientId
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { updateStaff } = useAuth();

  const onUpdateStaff = async (input) => {
    await updateStaff(input);
    setIsOpen(false);
  };

  const onUpdatePatient = async (patientId, input) => {
    await updatePatient(patientId, input);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="btn btn-outline-primary rounded-pill btn-sm"
      >
        <i className="fas fa-pen" />
        {` แก้ไข`}
      </button>
      <Modal
        title="แก้ไขข้อมูลส่วนตัว"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {isStaffProfile && <StaffEditForm onSubmit={onUpdateStaff} />}
        {isSelectedPatientProfile && (
          <PatientEditForm
            onSubmit={onUpdatePatient}
            selectedPatient={selectedPatient}
            selectedPatientId={selectedPatientId}
          />
        )}
      </Modal>
    </div>
  );
}

export default ProfileEdit;
