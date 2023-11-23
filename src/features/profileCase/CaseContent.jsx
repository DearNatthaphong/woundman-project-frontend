import React from 'react';
import CreatedBy from '../../components/ui/CreatedBy';

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
    diastolicBloodPressure,
    Staff
  } = caseData;

  return (
    <>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="d-flex">
            <p className="card-title m-0">{`อาการเจ็บป่วย : `}</p>
            <p className="card-text fw-bold ps-2">{chiefComplain}</p>
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex">
            <p className="card-title m-0">{`ประวัติปัจจุบัน : `}</p>
            <p className="card-text fw-bold ps-2">{presentIllness}</p>
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex">
            <p className="card-title m-0">{`ประวัติย้อนหลัง : `}</p>
            <p className="card-text fw-bold ps-2">{pastHistory}</p>
          </div>
        </li>
      </ul>
      <div className="card-body p-2">
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
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <CreatedBy
            titleName={Staff?.titleName}
            firstName={Staff?.firstName}
            lastName={Staff?.lastName}
            role={Staff?.role}
          />
        </li>
      </ul>
    </>
  );
}

export default CaseContent;
