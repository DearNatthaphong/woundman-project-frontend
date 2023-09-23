import React from 'react';

function Case({
  case: {
    createdAt,
    chiefComplain,
    presentIllness,
    pastHistory,
    height,
    weight,
    temperature,
    systolicBloodPressure,
    diastolicBloodPressure,
    bloodOxygen
  }
}) {
  return (
    // <div className="card" style={{ width: '18rem' }}>
    <div className="card mb-3">
      <div className="card-header">
        <div className="row align-items-center">
          <div className="col-auto me-auto">{`วันที่ ${createdAt}`}</div>
          <div className="col-auto">
            <button type="button" className="btn btn-primary btn-sm">
              แก้ไข
            </button>
          </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item p-3">
          {`อาการเจ็บป่วย : ${chiefComplain}`}
        </li>
        <li className="list-group-item">{`ประวัติปัจจุบัน : ${presentIllness}`}</li>
        <li className="list-group-item">{`ประวัติย้อนหลัง : ${pastHistory}`}</li>
        <li className="list-group-item">
          <div className="row ">
            <div className="col-6">{`ความสูง : ${height} cm.`}</div>
            <div className="col-6">{`น้ำหนัก : ${weight} kg.`}</div>
            <div className="col-6">{`อุณหภูมิ : ${temperature} C`}</div>
            <div className="col-12">{`ระดับออกซิเจนในเลือด : ${bloodOxygen} %`}</div>
            <div className="col-12">{`ระดับความดันช่วงบน : ${systolicBloodPressure} mm Hg.`}</div>
            <div className="col-12">{`ระดับความดันช่วงล่าง : ${diastolicBloodPressure} mm Hg.`}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Case;
