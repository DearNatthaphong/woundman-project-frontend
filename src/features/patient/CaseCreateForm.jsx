import React, { useState } from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import * as patientService from '../../api/newPatientApi';
import { toast } from 'react-toastify';
import * as validate from '../../validations/caseValidate';

function CaseCreateForm({ onSuccess, id }) {
  const { startLoading, stopLoading } = useLoading();
  const [input, setInput] = useState({
    chiefComplain: '',
    presentIllness: '',
    pastHistory: '',
    height: '',
    weight: '',
    temperature: '',
    systolicBloodPressure: '',
    diastolicBloodPressure: '',
    bloodOxygen: ''
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault(); // หยุด default action

    //err validate
    const errors = validate.caseVlidationErrors(input);
    if (errors.length) {
      const errorMessage = errors.join('; ');
      return toast.error(errorMessage);
    }

    try {
      startLoading();
      await patientService.createCaseByPatientId(id, input);
      toast.success('สร้างการตรวจรักษาสำเร็จ');
      onSuccess();
    } catch (err) {
      toast.error('สร้างการตรวจรักษาไม่สำเร็จ');
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form className="row gx-2 gy-3" onSubmit={handleSubmitForm}>
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
      <div className="col-4">
        <input
          type="text"
          className="form-control"
          placeholder="ส่วนสูง"
          name="height"
          value={input.height}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-2">
        <p className="pt-2 ">cm.</p>
      </div>
      <div className="col-4">
        <input
          type="text"
          className="form-control"
          placeholder="น้ำหนัก"
          name="weight"
          value={input.weight}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-2">
        <p className="pt-2 ">kg.</p>
      </div>
      <div className="col-4">
        <input
          type="text"
          className="form-control"
          placeholder="อุณหภูมิ"
          name="temperature"
          value={input.temperature}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-2">
        <p className="pt-2 ">c</p>
      </div>
      <div className="col-4">
        <input
          type="text"
          className="form-control"
          placeholder="ค่าออกซิเจนในเลือด"
          name="bloodOxygen"
          value={input.bloodOxygen}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-2">
        <p className="pt-2 ">%</p>
      </div>
      <div className="col-8">
        <input
          type="text"
          className="form-control"
          placeholder="ค.ดันโลหิตบน"
          name="systolicBloodPressure"
          value={input.systolicBloodPressure}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-4">
        <p className="pt-2 ">mm Hg.</p>
      </div>
      <div className="col-8">
        <input
          type="text"
          className="form-control"
          placeholder="ค.ดันโลหิตล่าง"
          name="diastolicBloodPressure"
          value={input.diastolicBloodPressure}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-4">
        <p className="pt-2 ">mm Hg.</p>
      </div>

      <div className="col-12 pt-3">
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

export default CaseCreateForm;
