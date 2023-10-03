import React from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';
// import * as caseService from '../../api/caseApi';

function TreatmentDeleteForm({ caseId, treatment: { id }, onClose, onSubmit }) {
  const { startLoading, stopLoading } = useLoading();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      startLoading();
      await onSubmit(caseId, id);
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

export default TreatmentDeleteForm;
