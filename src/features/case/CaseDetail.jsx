import React from 'react';
// import CaseDetailEdit from './CaseDetailEdit';

function CaseDetail({ caseData, setCaseData, caseId }) {
  return (
    <div
      className="accordion accordion-flush p-0 m-0 border"
      id="accordionFlushExample"
    >
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
            <h5 className="fw-bold my-auto">ประวัติสุขภาพ</h5>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body p-1">
            <ul className="list-group list-group-flush ">
              <li className="list-group-item px-0 m-0">
                <p className="mb-0">อาการเจ็บป่วย</p>
                <small className="mb-0">{caseData.chiefComplain}</small>
              </li>
              <li className="list-group-item px-0 m-0">
                <p className="mb-0">ประวัติปัจจุบัน</p>
                <small className="mb-0">{caseData.presentIllness}</small>
              </li>
              <li className="list-group-item px-0 m-0">
                <p className="mb-0">ประวัติย้อนหลัง</p>
                <small className="mb-0">{caseData.pastHistory}</small>
              </li>

              <li className="list-group-item">
                <div className="row gap-2 px-2">
                  <div className="col-auto border rounded-4">
                    <p className="card-title mb-0">ความสูง</p>
                    <small className="card-text text-center">{`${caseData.height} cm.`}</small>
                  </div>
                  <div className="col-auto border rounded-4">
                    <p className="card-title mb-0">น้ำหนัก</p>
                    <small className="card-text text-center">{`${caseData.weight} kg.`}</small>
                  </div>
                  <div className="col-auto border rounded-4">
                    <p className="card-title mb-0">อุณหภูมิ</p>
                    <small className="card-text text-center">{`${caseData.temperature} C`}</small>
                  </div>
                  <div className="col-auto border rounded-4">
                    <p className="card-title mb-0">ระดับออกซิเจน</p>
                    <small className="card-text text-center">{`${caseData.bloodOxygen} %`}</small>
                  </div>
                  <div className="col-auto border rounded-4">
                    <p className="card-title mb-0">ระดับความดันช่วงบน</p>
                    <small className="card-text text-center">{`${caseData.systolicBloodPressure} mm Hg`}</small>
                  </div>
                  <div className="col-auto border rounded-4">
                    <p className="card-title mb-0">ระดับความดันช่วงล่าง</p>
                    <small className="card-text text-center">{`${caseData.diastolicBloodPressure} mm Hg`}</small>
                  </div>
                </div>
              </li>
              {/* <li className="list-group-item">
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
              </li> */}
              {/* <CaseDetailEdit
                caseData={caseData}
                setCaseData={setCaseData}
                caseId={caseId}
              /> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseDetail;
