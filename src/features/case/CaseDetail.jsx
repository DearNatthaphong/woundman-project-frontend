import React from 'react';
import CaseDetailEdit from './CaseDetailEdit';

function CaseDetail({ caseData, setCaseData, caseId }) {
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
            <div className="row row-cols-1">
              <div className="col ps-0">
                <p>อาการเจ็บป่วยที่มาพบแพทย์ :</p>
              </div>
              <div className="col p-0">
                <h5>{caseData.chiefComplain}</h5>
              </div>
            </div>
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
                <div className="row row-cols-1">
                  <div className="col ps-0">
                    <p>ประวัติการเจ็บป่วยในปัจจุบัน : </p>
                  </div>
                  <div className="col p-0">
                    <h5>{caseData.presentIllness}</h5>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row row-cols-1">
                  <div className="col ps-0">
                    <p>ประวัติย้อนหลัง : </p>
                  </div>
                  <div className="col p-0">
                    <h5>{caseData.pastHistory}</h5>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row justify-content-center">
                  <div className="col-6 ">
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
              <li className="list-group-item text-center">
                <p className="d-inline-block">{`ความดันโลหิตบน : ${caseData.systolicBloodPressure} mm.Hg.`}</p>
              </li>
              <li className="list-group-item text-center">
                <p className=" d-inline-block">{`ความดันโลหิตล่าง : ${caseData.diastolicBloodPressure} mm.Hg.`}</p>
              </li>
              <CaseDetailEdit
                caseData={caseData}
                setCaseData={setCaseData}
                caseId={caseId}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseDetail;
