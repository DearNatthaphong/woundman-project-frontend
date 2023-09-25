import React from 'react';
import { calculateAge, convertToBC } from '../../utils/dateFormat';
import PatientDetailInfoEdit from './PatientDetailInfoEdit';

function PatientDetailInfo({ patientId, patient, setPatient }) {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
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
            <div className="col-12">
              <i className="fas fa-user" />
              <h5 className="ps-3 d-inline-block">
                {`${patient.titleName} ${patient.firstName} ${patient.lastName} `}
              </h5>
              <h5 className="ps-3 d-inline-block">
                {` อายุ : ${calculateAge(patient.dateOfBirth)}`}
              </h5>
            </div>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-6">
                    <i className="far fa-id-card" />
                    <h5 className="ps-3 d-inline-block">{patient.idCard}</h5>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-6">
                    <i className="far fa-calendar-alt" />
                    <h5 className="ps-3 d-inline-block">
                      {convertToBC(patient.dateOfBirth)}
                    </h5>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-6">
                    <i className="fas fa-phone" />
                    <h5 className="ps-3 d-inline-block">{patient.mobile}</h5>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-6">
                    <i className="far fa-comment" />
                    <h5 className="ps-3 d-inline-block">{patient.idLine}</h5>
                  </div>
                </div>
              </li>
              <PatientDetailInfoEdit
                patientId={patientId}
                patient={patient}
                setPatient={setPatient}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDetailInfo;
