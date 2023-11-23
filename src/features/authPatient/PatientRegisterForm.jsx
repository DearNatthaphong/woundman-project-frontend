import React, { useState } from 'react';
import { toast } from 'react-toastify';
// import { validateFields } from '../../validations/userRegisterValidate';
import * as validateService from '../../validations/userRegisterValidate';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';

function PatientRegisterForm({ onSuccess }) {
  // const context = useContext(AuthContext)
  const { patientRegister } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    titleName: '',
    firstName: '',
    lastName: '',
    idCard: '',
    dateOfBirth: '',
    mobile: '',
    idLine: '',
    password: '',
    confirmPassword: '',
    consent: false
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClickInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.checked });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault(); // หยุด default action

    // const validationErrors = validateFields(input, 'patient');
    const validationErrors = validateService.validatePatientRegister(input);

    if (validationErrors.length > 1) {
      const errorMessage =
        validationErrors.slice(0, -1).join(', ') +
        ' และ ' +
        validationErrors[validationErrors.length - 1];
      return toast.error(errorMessage);
    }
    if (validationErrors.length === 1) {
      const errorMessage = validationErrors[0];
      return toast.error(errorMessage);
    }

    try {
      startLoading();
      // สร้าง state ในการ login
      await patientRegister(input);
      toast.success('ยืนยันตัวตนสำเร็จ');
      onSuccess();
    } catch (err) {
      toast.error('ยืนยันตัวตนไม่สำเร็จ');
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form className="row g-2" onSubmit={handleSubmitForm}>
      <div className="col-12">
        <div className="form-floating">
          <select
            className="form-select"
            name="titleName"
            value={input.titleName}
            onChange={handleChangeInput}
            id="titleNameSelect"
            // setInput({ ...input, titleName: e.target.value })
          >
            <option value="">เลือกคำนำหน้าชื่อ</option>
            <option value="นาย">นาย</option>
            <option value="น.ส.">น.ส.</option>
            <option value="นาง">นาง</option>
            <option value="ด.ช.">ด.ช.</option>
            <option value="ด.ญ.">ด.ญ.</option>
          </select>
          <label htmlFor="titleNameSelect">คำนำหน้าชื่อ</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="ชื่อ"
            value={input.firstName}
            onChange={handleChangeInput}
            id="firstNameInput"
          />
          <label htmlFor="firstNameInput">ชื่อจริง</label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="นามสกุล"
            value={input.lastName}
            onChange={handleChangeInput}
            id="lastNameInput"
          />
          <label htmlFor="lastNameInput">นามสกุลจริง</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="idCard"
            placeholder="เลขบัตรประชาชน 13 หลัก"
            value={input.idCard}
            onChange={handleChangeInput}
            id="idCardInput"
          />
          <label htmlFor="idCardInput">เลขบัตรประชาชน 13 หลัก</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating">
          <input
            type="date"
            className="form-control"
            name="dateOfBirth"
            placeholder="วันเกิด"
            value={input.dateOfBirth}
            onChange={handleChangeInput}
            id="dateofBirthInput"
          />
          <label htmlFor="dateofBirthInput">วันเดือนปีเกิด</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="mobile"
            placeholder="เบอร์โทรศัพท์มือถือ 10 หลัก"
            value={input.mobile}
            onChange={handleChangeInput}
            id="mobileInput"
          />
          <label htmlFor="mobileInput">เบอร์โทรศัพท์มือถือ 10 หลัก</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="idLine"
            placeholder="ID Line"
            value={input.idLine}
            onChange={handleChangeInput}
            id="idLineInput"
          />
          <label htmlFor="idLineInput">ID LINE</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="กำหนดรหัสผ่านใหม่"
            value={input.password}
            onChange={handleChangeInput}
            id="passwordInput"
          />
          <label htmlFor="passwordInput">กำหนดรหัสผ่านใหม่</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            placeholder="ยืนยันรหัสผ่าน"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            id="confirmPasswordInput"
          />
          <label htmlFor="confirmPasswordInput">ยืนยันรหัสผ่าน</label>
        </div>
      </div>
      <div className="col-12">
        <p className="text-muted text-start">
          * รหัสผ่านต้องไม่ต่ำกว่า 6 ตัว ประกอบไปด้วยตัวเลขและตัวอักษร a-z
          อย่างน้อย 1 ตัว (ได้ทั้งตัวพิมพ์เล็กและตัวพิมพ์ใหญ่)
        </p>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            name="consent"
            type="checkbox"
            checked={input.consent}
            onChange={handleClickInput}
          />
          <label className="form-check-label text-start">
            <p>
              ข้าพเจ้าขอยินยอมให้คลินิคใช้ข้อมูลส่วนบุคคลในการยืนยันตัวตนและเก็บข้อมุลเพื่อการรักษาและติดตามการรักษาภายในคลินิค
            </p>
          </label>
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
    </form>
  );
}

export default PatientRegisterForm;
