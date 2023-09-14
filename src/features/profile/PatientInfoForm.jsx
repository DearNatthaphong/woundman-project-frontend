import React from 'react';

function PatientInfoForm() {
  return (
    <form className="row gx-2 gy-3 align-items-center" action="">
      <div className="col-1 ">
        <i className="fas fa-venus-mars text-success" />
      </div>
      <div className="col-11">
        <select className="form-select" name="titleName">
          <option value="นาย">นาย</option>
          <option value="นางสาว">น.ส.</option>
          <option value="นาง">นาง</option>
          <option value="เด็กชาย">ด.ช.</option>
          <option value="เด็กหญิง">ด.ญ.</option>
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
          placeholder="ชื่อ"
        />
      </div>
      <div className="col-6">
        <input
          type="text"
          className="form-control"
          name="lastName"
          placeholder="นามสกุล"
        />
      </div>
      <div className="col-1">
        <i className="fas fa-id-card text-success" />
      </div>
      <div className="col-11">
        <input
          type="text"
          className="form-control"
          name="idCardNumber"
          placeholder="เลขบัตรประชาชน 13 หลัก"
        />
      </div>
      <div className="col-1">
        <i className="far fa-calendar-alt text-success" />
      </div>
      <div className="col-11">
        <input
          type="date"
          className="form-control"
          name="birthDate"
          placeholder="วันเกิด"
        />
      </div>
      <div className="col-1">
        <i className="fas fa-phone text-success" />
      </div>
      <div className="col-11">
        <input
          type="text"
          className="form-control"
          name="mobileNumber"
          placeholder="เบอร์โทรศัพท์มือถือ 10 หลัก"
        />
      </div>
      <div className="col-1">
        <i className="far fa-comment text-success" />
      </div>
      <div className="col-11">
        <input
          type="text"
          className="form-control"
          name="idLine"
          placeholder="ID Line"
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

export default PatientInfoForm;
