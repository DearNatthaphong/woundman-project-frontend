import React, { useState } from 'react';
import { handleChangeInput } from '../../utils/formUtils';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';

function StaffLoginForm() {
  const { staffLogin } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    emailOrMobile: '',
    password: ''
  });

  const handleInputChange = handleChangeInput(input, setInput);

  const handleSubmitForm = async (e) => {
    e.preventDefault(); // หยุด default action

    // ไม่ validate

    try {
      startLoading();
      // สร้าง state ในการ login
      await staffLogin(input);
      toast.success('เข้าสู่ระบบสำเร็จ');
    } catch (err) {
      toast.error('เข้าสู่ระบบไม่สำเร็จ');
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="row gy-3 mb-3 align-items-center ">
        <div className="col-2 text-center">
          <i className="fa-regular fa-envelope fa-2xl"></i>
        </div>
        <div className="col-10">
          <div className="form-floating">
            <input
              type="text"
              className="form-control rounded-4"
              id="floatingInput"
              placeholder="name@example.com"
              fdprocessedid="gejwd"
              name="emailOrMobile"
              value={input.emailOrMobile}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInput">อีเมลหรือเบอร์โทรศัพท์</label>
          </div>
        </div>
        <div className="col-2 text-center">
          <i className="fas fa-unlock fa-2xl"></i>
        </div>
        <div className="col-10">
          <div className="form-floating">
            <input
              type="password"
              className="form-control rounded-4"
              id="floatingPassword"
              placeholder="Password"
              fdprocessedid="s3avtr"
              name="password"
              value={input.password}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingPassword">รหัสผ่าน</label>
          </div>
        </div>
        <div className="col-12">
          <button
            className="w-100 btn btn-lg btn-success rounded-4 "
            type="submit"
            fdprocessedid="iaq1ws"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
    </form>
  );
}

export default StaffLoginForm;
