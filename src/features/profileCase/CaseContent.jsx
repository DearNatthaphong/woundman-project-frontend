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
          <h5 className="card-title">อาการเจ็บป่วย</h5>
          <p className="card-text">{chiefComplain}</p>
        </li>
        <li className="list-group-item">
          <h5 className="card-title">ประวัติปัจจุบัน</h5>
          <p className="card-text">{presentIllness}</p>
        </li>
        <li className="list-group-item">
          <h5 className="card-title">ประวัติย้อนหลัง</h5>
          <p className="card-text">{pastHistory}</p>
        </li>
      </ul>
      <div className="card-body">
        <div className="row gap-2 px-2">
          <div className="col-auto border rounded-4">
            <h5 className="card-title">ความสูง</h5>
            <p className="card-text text-center">{`${height} cm.`}</p>
          </div>
          <div className="col-auto border rounded-4">
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
        </div>
      </div>
    </>
  );
}

export default CaseContent;
