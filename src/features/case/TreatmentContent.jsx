import React from 'react';
// import * as dateService from '../../utils/dateFormat';
import CreatedBy from '../../components/ui/CreatedBy';

function TreatmentContent({
  treatment: { image, position, diagnosis, treatment, createdAt, Staff }
}) {
  return (
    <>
      <img
        src={image}
        className="img-thumbnail mx-auto d-block img-fluid"
        alt="treatment"
        // style={{ width: '200px', height: 'auto' }}
      />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <p className="card-title mb-0">ตำแหน่งของบาดแผล</p>
          <p className="card-text fw-bold">{position}</p>
        </li>
        <li className="list-group-item">
          <p className="card-title mb-0">คำวินิจฉัยแพทย์</p>
          <p className="card-text fw-bold">{diagnosis}</p>
        </li>
        <li className="list-group-item">
          <p className="card-title mb-0">การรักษา</p>
          <p className="card-text fw-bold">{treatment}</p>
        </li>
        <li className="list-group-item">
          <CreatedBy
            titleName={Staff?.titleName}
            firstName={Staff?.firstName}
            lastName={Staff?.lastName}
            role={Staff?.role}
          />
          {/* <small className="text-body-secondary">
            {dateService.timeSince(createdAt)}
          </small> */}
        </li>
      </ul>
    </>
  );
}

export default TreatmentContent;
