import React from 'react';
import * as dateService from '../../utils/dateFormat';

function TreatmentContent({
  treatment: { image, position, diagnosis, treatment, createdAt }
}) {
  return (
    <div className="">
      {/* <img src="https://picsum.photos/200" className="card-img-top" alt="" /> */}
      <img src={image} className="card-img-top" alt="treatment" />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h5 className="card-title">ตำแหน่งของบาดแผล :</h5>
          <p className="card-text">{position}</p>
        </li>
        <li className="list-group-item">
          <h5 className="card-title">คำวินิจฉัยแพทย์ :</h5>
          <p className="card-text">{diagnosis}</p>
        </li>
        <li className="list-group-item">
          <h5 className="card-title">การรักษา :</h5>
          <p className="card-text">{treatment}</p>
        </li>
        <li className="list-group-item">
          <small className="text-body-secondary">
            {dateService.timeSince(createdAt)}
          </small>
        </li>
      </ul>
    </div>
  );
}

export default TreatmentContent;