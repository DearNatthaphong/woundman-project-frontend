import React, { useEffect, useState } from 'react';
import * as caseService from '../../api/caseApi';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';

function CaseDetailEditForm({ caseData, caseId, onSuccess, setCaseData }) {
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    chiefComplain: caseData.chiefComplain || '',
    presentIllness: caseData.presentIllness || '',
    pastHistory: caseData.pastHistory || '',
    height: caseData.height || '',
    weight: caseData.weight || '',
    temperature: caseData.temperature || '',
    systolicBloodPressure: caseData.systolicBloodPressure || '',
    diastolicBloodPressure: caseData.diastolicBloodPressure || '',
    bloodOxygen: caseData.bloodOxygen || ''
  });

  useEffect(() => {
    setInput({
      chiefComplain: caseData.chiefComplain || '',
      presentIllness: caseData.presentIllness || '',
      pastHistory: caseData.pastHistory || '',
      height: caseData.height || '',
      weight: caseData.weight || '',
      temperature: caseData.temperature || '',
      systolicBloodPressure: caseData.systolicBloodPressure || '',
      diastolicBloodPressure: caseData.diastolicBloodPressure || '',
      bloodOxygen: caseData.bloodOxygen || ''
    });
  }, [caseData]);

  const updateCaseByCaseId = async (caseId, updatedData) => {
    try {
      const res = await caseService.updateCaseByCaseId(caseId, updatedData);
      setCaseData(res.data.updatedCase);
    } catch (err) {
      console.log(err);
    }
  };

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
      startLoading();
      await updateCaseByCaseId(caseId, input);
      toast.success('แก้ไขข้อมูลสำเร็จ');
      onSuccess();
    } catch (err) {
      toast.error('แก้ไขข้อมูลไม่สำเร็จ');
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

export default CaseDetailEditForm;
