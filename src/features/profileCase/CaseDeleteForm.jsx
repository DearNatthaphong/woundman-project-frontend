// import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function CaseDeleteForm({ onSubmit, selectedPatientId, caseData, onClose }) {
  //   const [isDeleted, setIsDeleted] = useState(false);

  const caseId = caseData.id;
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await onSubmit(selectedPatientId, caseId);
      //   setIsDeleted(true);
      toast.success('ลบข้อมูลการตรวจรักษาสำเร็จ');
      //   onClose();
    } catch (err) {
      toast.error('ลบข้อมูลการตรวจรักษาไม่สำเร็จ');
      toast.error(err.response.data.message);
    }
  };

  //   useEffect(() => {
  //     if (isDeleted) {
  //       const timeout = setTimeout(() => {
  //         onClose();
  //       }, 1500);
  //       return () => clearTimeout(timeout);
  //     }
  //   }, [isDeleted, onClose]);

  return (
    <form className="row" onSubmit={handleSubmitForm}>
      <div className="col-6 text-center">
        <button
          type="button"
          onClick={onClose}
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

export default CaseDeleteForm;
