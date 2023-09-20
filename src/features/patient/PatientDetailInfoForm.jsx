import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';
import validator from 'validator';
import * as patientService from '../../api/newPatientApi';

function PatientDetailInfoForm({
  onSuccess,
  id,
  patient,
  // patient: {
  //   titleName,
  //   firstName,
  //   lastName,
  //   idCard,
  //   dateOfBirth,
  //   mobile,
  //   idLine
  // },
  setPatient
}) {
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    titleName: patient.titleName || '',
    firstName: patient.firstName || '',
    lastName: patient.lastName || '',
    idCard: patient.idCard || '',
    dateOfBirth: patient.dateOfBirth || '',
    mobile: patient.mobile || '',
    idLine: patient.idLine || ''
  });

  useEffect(() => {
    setInput({
      titleName: patient.titleName || '',
      firstName: patient.firstName || '',
      lastName: patient.lastName || '',
      idCard: patient.idCard || '',
      dateOfBirth: patient.dateOfBirth || '',
      mobile: patient.mobile || '',
      idLine: patient.idLine || ''
    });
  }, [patient]);

  const updatePatient = async (id, formdata) => {
    const res = await patientService.updatePatient(id, formdata);
    setPatient(res.data.patient);
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const validationErrors = (input) => {
      const errors = [];

      if (!input.firstName.trim()) {
        errors.push('ต้องใส่ชื่อจริง');
      }

      if (!input.lastName.trim()) {
        errors.push('ต้องใส่นามสกุลจริง');
      }

      if (!input.idCard) {
        errors.push('ต้องใส่เลขบัตรประชาชน 13 หลัก');
      }

      const isIdCard = validator.isIdentityCard(input.idCard + '', 'TH');

      if (input.idCard && !isIdCard) {
        errors.push('เลขบัตรประชาชนไม่ถูกต้อง');
      }

      if (!input.mobile) {
        errors.push('ต้องใส่เบอร์มือถือ');
      }

      const isMobile = validator.isMobilePhone(input.mobile + '', 'th-TH');

      if (input.mobile && !isMobile) {
        errors.push('เบอร์มือถือไม่ถูกต้อง');
      }

      if (!input.dateOfBirth) {
        errors.push('ต้องใส่วันเดือนปีเกิด');
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
      await updatePatient(id, input);
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
    <form className="row pt-3 g-3 text-start" onSubmit={handleSubmitForm}>
      <div className="col-1">
        <i className="fas fa-venus-mars text-success" />
      </div>
      <div className="col-11">
        <select
          className="form-select"
          name="titleName"
          value={input.titleName}
          onChange={handleChangeInput}
        >
          <option value="นาย">นาย</option>
          <option value="น.ส.">น.ส.</option>
          <option value="นาง">นาง</option>
          <option value="ด.ช.">ด.ช.</option>
          <option value="ด.ญ.">ด.ญ.</option>
        </select>
      </div>
      <div className="col-1">
        <i className="fas fa-user text-success" />
      </div>
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          name="firstName"
          placeholder="ชื่อจริง"
          value={input.firstName}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-6">
        <input
          type="text"
          className="form-control"
          name="lastName"
          placeholder="นามสกุลจริง"
          value={input.lastName}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-1">
        <i className="fas fa-id-card text-success" />
      </div>
      <div className="col-11">
        <input
          type="text"
          className="form-control"
          name="idCard"
          placeholder="เลขบัตรประชาชน 13 หลัก"
          value={input.idCard}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-1">
        <i className="far fa-calendar-alt text-success" />
      </div>
      <div className="col-11">
        <input
          type="date"
          className="form-control"
          name="dateOfBirth"
          placeholder="วันเกิด"
          value={input.dateOfBirth}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-1">
        <i className="fas fa-phone text-success" />
      </div>
      <div className="col-11">
        <input
          type="text"
          className="form-control"
          name="mobile"
          placeholder="เบอร์มือถือ 10 หลัก"
          value={input.mobile || ''}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-1">
        <i className="fa fa-comment text-success" />
      </div>
      <div className="col-11">
        <input
          type="text"
          className="form-control"
          name="idLine"
          placeholder="ID LINE"
          value={input.idLine || ''}
          onChange={handleChangeInput}
        />
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

export default PatientDetailInfoForm;
