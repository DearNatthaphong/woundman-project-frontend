import React from 'react';
// import CaseDetailEdit from './CaseDetailEdit';

function CaseDetail({ caseData, setCaseData, caseId }) {
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
    <div className="accordion accordion-flush p-0 mb-3 border" id="case">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed p-2 border"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <h5 className="fw-bold my-auto">ประวัติสุขภาพ</h5>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#case"
        >
          <div className="accordion-body p-1">
            <ul className="list-group list-group-flush ">
              <li className="list-group-item ">
                <div className="d-flex">
                  <p className="">{`อาการเจ็บป่วย : `}</p>
                  <p className="fw-bold ps-2">{chiefComplain}</p>
                </div>
              </li>
              <li className="list-group-item ">
                <div className="d-flex">
                  <p className="">{`ประวัติปัจจุบัน : `}</p>
                  <p className="fw-bold ps-2">{presentIllness}</p>
                </div>
              </li>
              <li className="list-group-item ">
                <div className="d-flex">
                  <p className="mb-0">{`ประวัติย้อนหลัง : `}</p>
                  <p className="fw-bold ps-2">{pastHistory}</p>
                </div>
              </li>

              <li className="list-group-item">
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseDetail;
