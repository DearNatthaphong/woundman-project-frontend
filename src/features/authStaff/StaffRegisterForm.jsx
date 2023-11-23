import React, { useState } from 'react';
// import { validateFields } from '../../validations/userRegisterValidate';
import * as validateService from '../../validations/userRegisterValidate';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';

function StaffRegisterForm({ onSuccess }) {
  const { staffRegister } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    titleName: '',
    firstName: '',
    lastName: '',
    role: '',
    emailOrMobile: '',
    password: '',
    confirmPassword: '',
    awareness: false
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleClickInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.checked });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    // const validationErrors = validateFields(input, 'staff');
    const validationErrors = validateService.validateStaffRegister(input);

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
      await staffRegister(input);
      toast.success('ยืนยันตัวตนสำเร็จ');
      onSuccess();
    } catch (err) {
      toast.error('ยืนยันตัวตนไม่สำเร็จ เนื่องจาก' + err.response.data.message);
      // toast.error(err.response.data.message);
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
          >
            <option value="">เลือกคำนำหน้าชื่อ</option>
            <option value="นาย">นาย</option>
            <option value="น.ส.">น.ส.</option>
            <option value="นาง">นาง</option>
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
            value={input.firstName}
            onChange={handleChangeInput}
            placeholder="ชื่อ"
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
            value={input.lastName}
            onChange={handleChangeInput}
            placeholder="นามสกุล"
            id="lastNameInput"
          />
          <label htmlFor="lastNameInput">นามสกุลจริง</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating">
          <select
            className="form-select"
            name="role"
            value={input.role}
            onChange={handleChangeInput}
            id="roleSelect"
          >
            <option value="">เลือกหน้าที่</option>
            <option value="เจ้าหน้าที่ธุรการ">เจ้าหน้าที่ธุรการ</option>
            <option value="พยาบาล">พยาบาล</option>
            <option value="หมอ">หมอ</option>
          </select>
          <label htmlFor="roleSelect">หน้าที่</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="emailOrMobile"
            value={input.emailOrMobile}
            onChange={handleChangeInput}
            placeholder="อีเมลหรือเบอร์โทรศัพท์มือถือ 10 หลัก"
            id="emailOrMobileInput"
          />
          <label htmlFor="emailOrMobileInput">
            อีเมลหรือเบอร์โทรศัพท์มือถือ 10 หลัก
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            placeholder="กำหนดรหัสผ่านใหม่"
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
            value={input.confirmPassword}
            onChange={handleChangeInput}
            placeholder="ยืนยันรหัสผ่าน"
            id="confirmPasswordInput"
          />
          <label htmlFor="confirmPasswordInput">ยืนยันรหัสผ่าน</label>
        </div>
        <p className="text-muted text-start ms-2 mt-2">
          รหัสผ่านไม่ต่ำกว่า 6 ตัว ประกอบไปด้วยตัวเลขและตัวอักษร a-z อย่างน้อย 1
          ตัว (ได้ตั้งแต่ตัวพิมพ์เล็กและตัวพิมพ์ใหญ่)
        </p>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="awareness"
            checked={input.awareness}
            onChange={handleClickInput}
          />
          <label className="form-check-label text-start">
            <p>
              ข้าพเจ้ารับรู้ พรบ
              ข้อมูลส่วนบุคคลและจะรักษาข้อมูลคนไข้ในการเก็บข้อมูลในคลินิค
              ถ้าหากนำข้อมูลไปเผยแพร่ จะถูกดำเนินคดีตามกฎหมาย
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

export default StaffRegisterForm;
