import React from 'react';
import * as dateService from '../../utils/dateFormat';

function TreatmentDetail({
  treatment: { position, diagnosis, treatment, createdAt, image }
}) {
  return (
    <div className="row justify-content-center">
      <div className="col-auto">
        <div className="card" style={{ width: '80vw' }}>
          <div className="card-header">
            {dateService.formattedDate(createdAt)}
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item ">
              <p className="mb-0">ตำแหน่งแผล :</p>
              <p className="mb-0">{position}</p>
            </li>
            <li className="list-group-item">
              <p className="mb-0">คำวินิจฉัย :</p>
              <p className="mb-0">{diagnosis}</p>
            </li>
            <li className="list-group-item">
              <p className="mb-0">วิธีการรักษา :</p>
              <p className="mb-0">{treatment}</p>
            </li>
            <li className="list-group-item">
              <div
                className="accordion accordion-flush"
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
                      รูปภาพ
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <img
                        src={image}
                        width="100%"
                        height="100%"
                        alt="treatment"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TreatmentDetail;
