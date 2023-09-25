import React from 'react';
import * as dateFormat from '../../utils/dateFormat';
import CaseEdit from './CaseEdit';

function Case({
  caseId,
  patientId,
  caseData,
  fetchCases
  // {
  //   createdAt,
  //   chiefComplain,
  //   presentIllness,
  //   pastHistory,
  //   height,
  //   weight,
  //   temperature,
  //   systolicBloodPressure,
  //   diastolicBloodPressure,
  //   bloodOxygen
  // }
}) {
  return (
    // <div className="card" style={{ width: '18rem' }}>
    <div className="card text-bg-secondary mb-3">
      <div className="card-header">
        <div className="row align-items-center">
          <div className="col-auto me-auto">
            {dateFormat.formattedDate(caseData.createdAt)}
          </div>
          <CaseEdit
            caseData={caseData}
            caseId={caseId}
            patientId={patientId}
            fetchCases={fetchCases}
          />
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item p-3">
          {`อาการเจ็บป่วย : ${caseData.chiefComplain}`}
        </li>
        <li className="list-group-item">{`ประวัติปัจจุบัน : ${caseData.presentIllness}`}</li>
        <li className="list-group-item">{`ประวัติย้อนหลัง : ${caseData.pastHistory}`}</li>
        <li className="list-group-item">
          <div className="row ">
            <div className="col-6">{`ความสูง : ${caseData.height} cm.`}</div>
            <div className="col-6">{`น้ำหนัก : ${caseData.weight} kg.`}</div>
            <div className="col-6">{`อุณหภูมิ : ${caseData.temperature} C`}</div>
            <div className="col-12">{`ระดับออกซิเจนในเลือด : ${caseData.bloodOxygen} %`}</div>
            <div className="col-12">{`ระดับความดันช่วงบน : ${caseData.systolicBloodPressure} mm Hg.`}</div>
            <div className="col-12">{`ระดับความดันช่วงล่าง : ${caseData.diastolicBloodPressure} mm Hg.`}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Case;
