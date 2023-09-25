import React from 'react';

function CaseContent({
  caseData
  //   {
  //     chiefComplain,
  //     presentIllness,
  //     pastHistory,
  //     height,
  //     weight,
  //     temperature,
  //     systolicBloodPressure,
  //     diastolicBloodPressure,
  //     bloodOxygen
  //   }
}) {
  return (
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
  );
}

export default CaseContent;
