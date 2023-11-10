import React, { useState } from 'react';
import * as validate from '../../validations/caseValidate';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';

function CaseForm({ onSubmit, selectedPatientId, isEdit, caseData }) {
  const { startLoading, stopLoading } = useLoading();

  let initialState = {
    chiefComplain: '',
    presentIllness: '',
    pastHistory: '',
    height: '',
    weight: '',
    temperature: '',
    systolicBloodPressure: '',
    diastolicBloodPressure: '',
    bloodOxygen: ''
  };

  if (isEdit) {
    initialState = { ...caseData };
  }

  const [input, setInput] = useState(initialState);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const clearInputFields = () => {
    setInput(initialState);
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      startLoading();
      const errors = validate.caseVlidationErrors(input);
      if (errors.length) {
        const errorMessage = errors.join('; ');
        return toast.error(errorMessage);
      }

      const patientId = selectedPatientId;

      if (isEdit) {
        const caseId = caseData.id;
        await onSubmit(patientId, caseId, input);
        toast.success('แก้ไขข้อมูลสำเร็จ');
      } else {
        onSubmit(patientId, input);
        toast.success('สร้างการตรวจรักษาสำเร็จ');
        clearInputFields();
      }
    } catch (err) {
      toast.error('มีข้อผิดพลาดเกิดขึ้น');
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };
  return (
    <form className="" onSubmit={handleSubmitForm}>
      <div className="row g-2">
        <div className="col-12">
          <div className="form-floating">
            <textarea
              className="form-control"
              id="textarea1"
              // rows="2"
              style={{ height: '60px' }}
              name="chiefComplain"
              value={input.chiefComplain}
              onChange={handleChangeInput}
            ></textarea>
            <label htmlFor="textarea1">อาการเจ็บป่วยที่มาพบแพทย์</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea
              className="form-control"
              id="textarea2"
              // rows="3"
              style={{ height: '80px' }}
              name="presentIllness"
              value={input.presentIllness}
              onChange={handleChangeInput}
            ></textarea>
            <label htmlFor="textarea2">ประวัติการเจ็บป่วยในปัจจุบัน</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea
              className="form-control"
              id="textarea3"
              // rows="3"
              style={{ height: '80px' }}
              name="pastHistory"
              value={input.pastHistory}
              onChange={handleChangeInput}
            ></textarea>
            <label htmlFor="textarea3">ประวัติย้อนหลัง</label>
          </div>
        </div>
      </div>
      <div className="row gx-3 mt-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="height" className="col-form-label">
            ส่วนสูง
          </label>
        </div>
        <div className="col-4">
          <input
            className="form-control p-1 text-end"
            type="text"
            id="height"
            // style={{ height: '100px' }}
            placeholder="000.00"
            name="height"
            value={input.height}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-2">
          <span id="height" className="form-text">
            cm.
          </span>
        </div>
      </div>
      <div className="row gx-3 mt-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="weight" className="col-form-label">
            น้ำหนัก
          </label>
        </div>
        <div className="col-4">
          <input
            type="text"
            className="form-control p-1 text-end"
            placeholder="00.00"
            id="weight"
            name="weight"
            value={input.weight}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-2">
          <span id="weight" className="form-text">
            cm.
          </span>
        </div>
      </div>
      <div className="row gx-3 mt-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="temperature" className="col-form-label">
            อุณหภูมิ
          </label>
        </div>
        <div className="col-4">
          <input
            type="text"
            className="form-control p-1 text-end"
            placeholder="00.00"
            id="temperature"
            name="temperature"
            value={input.temperature}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-2">
          <span id="temperature" className="form-text">
            cm.
          </span>
        </div>
      </div>
      <div className="row gx-3 mt-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="bloodOxygen" className="col-form-label">
            ค่าออกซิเจนในเลือด
          </label>
        </div>
        <div className="col-3">
          <input
            type="text"
            className="form-control p-1 text-end"
            placeholder="00"
            id="bloodOxygen"
            name="bloodOxygen"
            value={input.bloodOxygen}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-2">
          <span id="bloodOxygen" className="form-text">
            %
          </span>
        </div>
      </div>
      <div className="row gx-3 mt-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="systolicBloodPressure" className="col-form-label">
            ความดันโลหิตช่วงบน
          </label>
        </div>
        <div className="col-3">
          <input
            type="text"
            className="form-control p-1 text-end"
            placeholder="000"
            id="systolicBloodPressure"
            name="systolicBloodPressure"
            value={input.systolicBloodPressure}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-2 p-0">
          <span id="systolicBloodPressure" className="form-text">
            mm/Hg
          </span>
        </div>
      </div>
      <div className="row gx-3 mt-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="diastolicBloodPressure" className="col-form-label">
            ความดันโลหิตช่วงล่าง
          </label>
        </div>
        <div className="col-3">
          <input
            type="text"
            className="form-control p-1 text-end"
            placeholder="000"
            id="diastolicBloodPressure"
            name="diastolicBloodPressure"
            value={input.diastolicBloodPressure}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-2 p-0">
          <span id="diastolicBloodPressure" className="form-text">
            mm/Hg
          </span>
        </div>
      </div>
      <div className="col-12 pt-3">
        <button
          type="submit"
          className="w-100 btn btn-md btn-success rounded-4"
        >
          ยืนยัน
        </button>
      </div>

      {/* </div> */}
    </form>
  );
}

export default CaseForm;

{
  /* <div className="col-3">
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
        <div className="col-">
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
      </div> */
}
