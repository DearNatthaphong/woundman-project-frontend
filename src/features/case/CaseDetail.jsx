import React from 'react';
import CaseDetailEdit from './CaseDetailEdit';

function CaseDetail({ caseData, setCaseData }) {
  return (
    <div className="accordion accordion-flush p-0" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <p className="d-inline-block">
              {`อาการเจ็บป่วยที่มาพบแพทย์ : ${caseData.chiefComplain}`}
            </p>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body ">
            <ul className="list-group list-group-flush ">
              <li className="list-group-item">
                <p className="d-inline-block ">
                  {`ประวัติการเจ็บป่วยในปัจจุบัน : ${caseData.presentIllness}`}
                </p>
              </li>
              <li className="list-group-item">
                <p className="d-inline-block ">
                  {`ประวัติย้อนหลัง : ${caseData.pastHistory}`}
                </p>
              </li>
              <li className="list-group-item">
                <div className="row justify-content-center">
                  <div className="col-6">
                    <p className=" d-inline-block">{`ความสูง : ${caseData.height} cm.`}</p>
                  </div>
                  <div className="col-6">
                    <p className=" d-inline-block">{`น้ำหนัก : ${caseData.weight} kg.`}</p>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row justify-content-center">
                  <div className="col-6">
                    <p className=" d-inline-block">{`อุณหภูมิ : ${caseData.temperature} C`}</p>
                  </div>
                  <div className="col-6">
                    <p className=" d-inline-block">{`ระดับออกซิเจน : ${caseData.bloodOxygen} %`}</p>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <p className=" d-inline-block">{`ความดันโลหิตบน : ${caseData.systolicBloodPressure} mm.Hg.`}</p>
              </li>
              <li className="list-group-item">
                <p className=" d-inline-block">{`ความดันโลหิตล่าง : ${caseData.diastolicBloodPressure} mm.Hg.`}</p>
              </li>
              <CaseDetailEdit caseData={caseData} setCaseData={setCaseData} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseDetail;
