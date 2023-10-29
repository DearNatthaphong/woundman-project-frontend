import React from 'react';
import { Link } from 'react-router-dom';
import * as dateService from '../../utils/dateFormat';

function CaseHeader({ caseData }) {
  const { createdAt } = caseData;
  return (
    <div className="card-header">
      <div className="d-flex my-auto">
        <div className="my-auto">
          <h5 className="p-0">{dateService.convertToBC(createdAt)}</h5>
        </div>
        {/* <div className="my-auto">{createdAt}</div> */}
        <div className="ms-auto">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-secondary border border-0 rounded-circle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-ellipsis" />
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="#">
                  แก้ไข
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  ลบ
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  ข้อมูลการรักษา
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseHeader;
