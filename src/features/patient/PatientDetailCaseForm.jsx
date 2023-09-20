import React from 'react';

function PatientDetailCaseForm() {
  return (
    <div className="card-body">
      <form className="row gx-2 gy-3" action="">
        <div className="col-12">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            อาการเจ็บป่วยที่มาพบแพทย์
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
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
          ></textarea>
        </div>
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            name="height"
            placeholder="ส่วนสูง"
          />
        </div>
        <div className="col-2">
          <p className="pt-2 ">cm.</p>
        </div>
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            name="weight"
            placeholder="น้ำหนัก"
          />
        </div>
        <div className="col-2">
          <p className="pt-2 ">kg.</p>
        </div>
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            name="temperature"
            placeholder="อุณหภูมิ"
          />
        </div>
        <div className="col-2">
          <p className="pt-2 ">c</p>
        </div>
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            name="pressure"
            placeholder="ความดันโลหิต"
          />
        </div>
        <div className="col-2">
          <p className="pt-2 ">mm Hg.</p>
        </div>
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            name="oxygen"
            placeholder="ระดับออกซิเจน"
          />
        </div>
        <div className="col-2">
          <p className="pt-2 ">%</p>
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
    </div>
  );
}

export default PatientDetailCaseForm;
