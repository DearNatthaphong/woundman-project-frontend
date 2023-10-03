import React from 'react';
import { Link } from 'react-router-dom';
import * as dateService from '../../utils/dateFormat';

function Treatment({
  treatment: { id, position, diagnosis, treatment, createdAt }
}) {
  return (
    <div className="col d-flex justify-content-center">
      <Link
        className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        to={`/patient/treatments/${id}`}
      >
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-header">{dateService.timeSince(createdAt)}</div>
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
          </ul>
        </div>
      </Link>
    </div>
  );
}

export default Treatment;
