import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';
import validator from 'validator';

function StaffInfoForm({ onSuccess }) {
  const {
    staff: { titleName, firstName, lastName, role, email, mobile },
    updateStaff
  } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    titleName,
    firstName,
    lastName,
    role,
    email,
    mobile
  });

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

      if (!input.email && !input.mobile) {
        errors.push('ต้องใส่อีเมลหรือเบอร์มือถือ');
      }

      const isEmail = validator.isEmail(input.email + '');
      if (input.email && !isEmail) {
        errors.push('อีเมลไม่ถูกต้อง');
      }

      const isMobile = validator.isMobilePhone(input.mobile + '', 'th-TH');
      if (input.mobile && !isMobile) {
        errors.push('เบอร์มือถือไม่ถูกต้อง');
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
      await updateStaff(input);
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
        <i className="fas fa-briefcase text-success" />
      </div>
      <div className="col-11">
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
        <i className="fa fa-envelope text-success" />
      </div>
      <div className="col-11">
        <input
          type="text"
          className="form-control"
          name="email"
          placeholder="อีเมล"
          value={input.email || ''}
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

export default StaffInfoForm;
