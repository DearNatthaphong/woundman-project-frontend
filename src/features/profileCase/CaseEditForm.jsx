import React, { useState } from 'react';
import { toast } from 'react-toastify';

function CaseEditForm({ caseData, onSubmit, selectedPatientId }) {
  const {
    chiefComplain,
    presentIllness,
    pastHistory,
    height,
    weight,
    temperature,
    systolicBloodPressure,
    diastolicBloodPressure,
    bloodOxygen,
    id
  } = caseData;

  const [input, setInput] = useState({
    chiefComplain,
    presentIllness,
    pastHistory,
    height,
    weight,
    temperature,
    systolicBloodPressure,
    diastolicBloodPressure,
    bloodOxygen
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const validationErrors = (input) => {
      const errors = [];

      if (!input.chiefComplain.trim()) {
        errors.push('ต้องใส่อาการเจ็บป่วยที่มาพบแพทย์');
      }

      if (!input.presentIllness.trim()) {
        errors.push('ต้องใส่ประวัติการเจ็บป่วยในปัจจุบัน');
      }

      if (!input.pastHistory.trim()) {
        errors.push('ต้องใส่ประวัติย้อนหลัง');
      }

      if (!input.height) {
        errors.push('ต้องใส่ความสูง');
      }
      if (!input.weight) {
        errors.push('ต้องใส่น้ำหนัก');
      }
      if (!input.temperature) {
        errors.push('ต้องใส่อุณหภูมิ');
      }
      if (!input.bloodOxygen) {
        errors.push('ต้องใส่ค่าออกซิเจนในเลือด');
      }
      if (!input.systolicBloodPressure) {
        errors.push('ต้องใส่ค.ดันโลหิตบน');
      }
      if (!input.diastolicBloodPressure) {
        errors.push('ต้องใส่ค.ดันโลหิตล่าง');
      }
      return errors;
    };

    const errors = validationErrors(input);
    if (errors.length) {
      const errorMessage = errors.join('; ');
      return toast.error(errorMessage);
    }

    try {
      await onSubmit(selectedPatientId, id, input);
      toast.success('แก้ไขข้อมูลสำเร็จ');
    } catch (err) {
      toast.error('แก้ไขข้อมูลไม่สำเร็จ');
      toast.error(err.response.data.message);
    }
  };

  return (
    <form className="row gx-2 gy-2" onSubmit={handleSubmitForm}>
      <div className="col-12">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          อาการเจ็บป่วยที่มาพบแพทย์
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="chiefComplain"
          value={input.chiefComplain}
          onChange={handleChangeInput}
        ></textarea>
      </div>
      <div className="col-12">
        <label htmlFor="exampleFormControlTextarea2" className="form-label">
          ประวัติการเจ็บป่วยในปัจจุบัน
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea2"
          rows="3"
          name="presentIllness"
          value={input.presentIllness}
          onChange={handleChangeInput}
        ></textarea>
      </div>
      <div className="col-12">
        <label htmlFor="exampleFormControlTextarea3" className="form-label">
          ประวัติย้อนหลัง
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea3"
          rows="3"
          name="pastHistory"
          value={input.pastHistory}
          onChange={handleChangeInput}
        ></textarea>
      </div>
      <div className="col-3">
        <label htmlFor="height">ส่วนสูง</label>
        <input
          type="text"
          className="form-control"
          placeholder="0.00"
          name="height"
          value={input.height}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-1 d-flex align-items-end">
        <p className="pt-2 mb-2">cm.</p>
      </div>
      <div className="col-3">
        <label htmlFor="weight">น้ำหนัก</label>
        <input
          type="text"
          className="form-control"
          placeholder="00.00"
          name="weight"
          value={input.weight}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-1 d-flex align-items-end">
        <p className="pt-2 mb-2">kg.</p>
      </div>
      <div className="col-3">
        <label htmlFor="temperature">อุณหภูมิ</label>
        <input
          type="text"
          className="form-control"
          placeholder="00.00"
          name="temperature"
          value={input.temperature}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-1 d-flex align-items-end">
        <p className="pt-2 mb-2">C</p>
      </div>
      <div className="col-4">
        <label htmlFor="bloodOxygen">ค่าออกซิเจนในเลือด</label>
        <input
          type="text"
          className="form-control"
          placeholder="00"
          name="bloodOxygen"
          value={input.bloodOxygen}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-2 d-flex align-items-end">
        <p className="pt-2 mb-2">%</p>
      </div>
      <div className="col-4">
        <label htmlFor="systolicBloodPressure">ความดันโลหิตช่วงบน</label>
        <input
          type="text"
          className="form-control"
          placeholder="000"
          name="systolicBloodPressure"
          value={input.systolicBloodPressure}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-2 d-flex align-items-end">
        <p className="pt-2 mb-2">mm Hg.</p>
      </div>
      <div className="col-4">
        <label htmlFor="diastolicBloodPressure">ความดันโลหิตช่วงล่าง</label>
        <input
          type="text"
          className="form-control"
          placeholder="00"
          name="diastolicBloodPressure"
          value={input.diastolicBloodPressure}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-2 d-flex align-items-end">
        <p className="pt-2 mb-2">mm Hg.</p>
      </div>

      <div className="col-12 pt-3">
        <button
          type="submit"
          className="w-100 btn btn-md btn-success rounded-4"
        >
          แก้ไข
        </button>
      </div>
    </form>
  );
}

export default CaseEditForm;
