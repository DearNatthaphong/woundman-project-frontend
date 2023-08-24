import React from 'react';

function StaffLoginForm() {
  return (
    <form>
      <div className="row gy-3 mb-3 align-items-center ">
        <div className="col-2 text-center">
          <i className="fa-regular fa-envelope fa-2xl"></i>
        </div>
        <div className="col-10">
          <div className="form-floating">
            <input
              type="email"
              className="form-control rounded-4"
              id="floatingInput"
              placeholder="name@example.com"
              fdprocessedid="gejwd"
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
