import React, { useState } from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';

function AppointmentForm({ onSubmit, caseId, isEdit, appointment }) {
  const { startLoading, stopLoading } = useLoading();
  let initialState = {
    reason: '',
    appointmentDate: '',
    status: 'รอดำเนินการ'
  };

  if (isEdit) {
    initialState = { ...appointment };
  }

  const [input, setInput] = useState(initialState);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !input.reason ||
      !input.reason.trim() ||
      !input.appointmentDate ||
      !input.status
    ) {
      return toast.error('ข้อมูลไม่ครบ');
    }

    const appointmentId = appointment?.id;

    try {
      startLoading();
      if (isEdit) {
        await onSubmit(caseId, appointmentId, input);
        toast.success('แก้ไขใบนัดหมายสำเร็จ');
      } else {
        await onSubmit(caseId, input);
        toast.success('สร้างใบนัดหมายสำเร็จ');
        setInput({ reason: '', appointmentDate: '', status: 'รอดำเนินการ' });
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row row-cols-1 g-3">
      <div className="col">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            placeholder="เหตุผล"
            name="reason"
            value={input.reason}
            onChange={handleChangeInput}
            id="reasonInput"
          />
          <label htmlFor="reasonInput">เหตุผล</label>
        </div>
      </div>
      <div className="col">
        <div className="form-floating">
          <input
            type="date"
            className="form-control"
            placeholder="วันนัดหมาย"
            name="appointmentDate"
            value={input.appointmentDate}
            onChange={handleChangeInput}
            id="appointmentDateInput"
          />
          <label htmlFor="appointmentDateInput">วันนัดหมาย</label>
        </div>
      </div>
      <div className="col">
        <div className="form-floating">
          <select
            className="form-select"
            name="status"
            value={input.status}
            onChange={handleChangeInput}
            id="statusSelect"
          >
            <option value="รอดำเนินการ">รอดำเนินการ</option>
            <option value="ดำเนินการเสร็จไปแล้ว">ดำเนินการเสร็จไปแล้ว</option>
            <option value="ยกเลิก">ยกเลิก</option>
          </select>
          <label htmlFor="statusSelect">เลือกสถานะ</label>
        </div>
      </div>
      <div className="col pt-3">
        <button
          type="submit"
          className="w-100 btn btn-md btn-success rounded-4"
        >
          ยืนยัน
        </button>
      </div>
    </form>
  );
}

export default AppointmentForm;
