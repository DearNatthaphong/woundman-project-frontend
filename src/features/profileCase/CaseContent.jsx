import React from 'react';

function CaseContent({ caseData }) {
  const {
    chiefComplain,
    presentIllness,
    pastHistory,
    height,
    weight,
    temperature,
    bloodOxygen,
    systolicBloodPressure,
    diastolicBloodPressure
  } = caseData;
  return (
    <>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="d-flex">
            <p className="card-title">{`อาการเจ็บป่วย : `}</p>
            <p className="card-text fw-bold ps-2">{chiefComplain}</p>
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex">
            <p className="card-title">{`ประวัติปัจจุบัน : `}</p>
            <p className="card-text fw-bold ps-2">{presentIllness}</p>
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex">
            <p className="card-title">{`ประวัติย้อนหลัง : `}</p>
            <p className="card-text fw-bold ps-2">{pastHistory}</p>
          </div>
        </li>
      </ul>
      <div className="card-body p-2">
        {/* <div className="row gap-2 px-2">
          <div className="col-auto border rounded-4">
            <h5 className="card-title">ความสูง</h5>
            <p className="card-text text-center">{`${height} cm.`}</p>
          </div>
          <div className="col-auto border rounded-4 py-1">
            <h5 className="card-title">น้ำหนัก</h5>
            <p className="card-text text-center">{`${weight} kg.`}</p>
          </div>
          <div className="col-auto border rounded-4">
            <h5 className="card-title">อุณหภูมิ</h5>
            <p className="card-text text-center">{`${temperature} C`}</p>
          </div>
          <div className="col-auto border rounded-4">
            <h5 className="card-title">ระดับออกซิเจนในเลือด</h5>
            <p className="card-text text-center">{`${bloodOxygen} %`}</p>
          </div>
          <div className="col-auto border rounded-4">
            <h5 className="card-title">ระดับความดันช่วงบน</h5>
            <p className="card-text text-center">{`${systolicBloodPressure} mm Hg`}</p>
          </div>
          <div className="col-auto border rounded-4">
            <h5 className="card-title">ระดับความดันช่วงล่าง</h5>
            <p className="card-text text-center">{`${diastolicBloodPressure} mm Hg`}</p>
          </div>
        </div> */}
        <div className="row gap-2 px-2">
          <div className="col-auto p-0">
            <div className="card rounded-4 p-2">
              <p className="card-title">ความสูง</p>
              <p className="card-text text-center fw-bold">{`${height} cm.`}</p>
            </div>
          </div>
          <div className="col-auto p-0">
            <div className="card rounded-4 p-2">
              <p className="card-title">น้ำหนัก</p>
              <p className="card-text text-center fw-bold">{`${weight} kg.`}</p>
            </div>
          </div>
          <div className="col-auto p-0">
            <div className="card rounded-4 p-2">
              <p className="card-title">อุณหภูมิ</p>
              <p className="card-text text-center fw-bold">{`${temperature} C`}</p>
            </div>
          </div>
          <div className="col-auto p-0">
            <div className="card rounded-4 p-2">
              <small className="card-title">ออกซิเจนในเลือด</small>
              <p className="card-text text-center fw-bold">{`${bloodOxygen} %`}</p>
            </div>
          </div>
          <div className="col-auto p-0">
            <div className="card rounded-4 p-2">
              <small className="card-title">ความดันช่วงบน</small>
              <p className="card-text text-center fw-bold">{`${systolicBloodPressure} mm/Hg`}</p>
            </div>
          </div>
          <div className="col-auto p-0">
            <div className="card rounded-4 p-2">
              <small className="card-title">ความดันช่วงล่าง</small>
              <p className="card-text text-center fw-bold">{`${diastolicBloodPressure} mm/Hg`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseContent;
