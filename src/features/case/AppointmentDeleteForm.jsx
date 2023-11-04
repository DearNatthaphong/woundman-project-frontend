import React from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';

function AppointmentDeleteForm({ caseId, onClose, onSubmit, appointment }) {
  const { startLoading, stopLoading } = useLoading();

  const appointmentId = appointment.id;
  console.log('appointment.id:', appointment.id);
  console.log('caseId:', caseId);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      startLoading();
      await onSubmit(caseId, appointmentId);
      toast.success('ลบข้อมูลการรักษาสำเร็จ');
    } catch (err) {
      console.log(err);
      toast.error('ลบข้อมูลการตรวจรักษาไม่สำเร็จ');
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form className="row" onSubmit={handleSubmitForm}>
      <div className="col-6 text-center">
        <button
          onClick={onClose}
          type="button"
          className="btn btn-lg btn-primary rounded-4 px-5"
        >
          ไม่
        </button>
      </div>
      <div className="col-6 text-center">
        <button type="submit" className="btn btn-lg btn-danger rounded-4 px-5">
          ใช่
        </button>
      </div>
    </form>
  );
}

export default AppointmentDeleteForm;
