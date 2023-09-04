import React, { useState } from 'react';
import { validateFields } from '../../validations/userValidate';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';

function StaffRegisterForm({ onSuccess }) {
  const { staffRegister } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    titleName: 'นาย',
    firstName: '',
    lastName: '',
    role: 'เจ้าหน้าที่ธุรการ',
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

    const validationErrors = validateFields(input, 'staff');

    if (validationErrors.length) {
      const errorMessage = validationErrors.join('; ');
      return toast.error(errorMessage);
    }

    try {
      startLoading();
      await staffRegister(input);
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
        <select
          className="form-select"
          name="titleName"
          value={input.titleName}
          onChange={handleChangeInput}
        >
          <option value="นาย">นาย</option>
          <option value="น.ส.">น.ส.</option>
          <option value="นาง">นาง</option>
        </select>
      </div>
      <div className="col-6">
        <input
          type="text"
          className="form-control"
          name="firstName"
          value={input.firstName}
          onChange={handleChangeInput}
          placeholder="ชื่อ"
        />
      </div>
      <div className="col-6">
        <input
          type="text"
          className="form-control"
          name="lastName"
          value={input.lastName}
          onChange={handleChangeInput}
          placeholder="นามสกุล"
        />
      </div>
      <div className="col-12">
        <select
          className="form-select"
          name="role"
          value={input.role}
          onChange={handleChangeInput}
        >
          <option value="เจ้าหน้าที่ธุรการ">เจ้าหน้าที่ธุรการ</option>
          <option value="พยาบาล">พยาบาล</option>
          <option value="หมอ">หมอ</option>
        </select>
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          name="emailOrMobile"
          value={input.emailOrMobile}
          onChange={handleChangeInput}
          placeholder="อีเมลหรือเบอร์โทรศัพท์มือถือ 10 หลัก"
        />
      </div>
      <div className="col-12">
        <input
          type="password"
          className="form-control"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
          placeholder="กำหนดรหัสผ่านใหม่"
        />
      </div>
      <div className="col-12">
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          placeholder="ยืนยันรหัสผ่าน"
        />
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
