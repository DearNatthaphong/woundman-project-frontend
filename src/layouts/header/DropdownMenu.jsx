import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../contexts/AuthContext';

function DropdownMenu({ open, onClose }) {
  const { patient, patientLogout, staffLogout, staff } = useAuth();
  return (
    <ul
      className={`dropdown-menu dropdown-menu-md-end px-2 mt-1 border shadow-sm rounded-xl w-sm-90${
        open ? ' d-block' : ''
      }`}
    >
      <li>
        {patient && (
          <Link
            onClick={onClose}
            className="dropdown-item d-flex align-items-center gap-3"
            to="/patient/profile"
          >
            <Avatar src={patient.profileImage} size="60" />
            <div>
              <p className="text-black fw-bold mt-1 mb-0">
                {patient.firstName} {patient.lastName}
              </p>
              <small className="text-muted">ดูโปรไฟล์ของคุณ</small>
            </div>
          </Link>
        )}

        {staff && (
          <Link
            onClick={onClose}
            className="dropdown-item d-flex align-items-center gap-3"
            to="/staff/profile"
          >
            <Avatar src={staff.profileImage} size="60" />
            <div>
              <p className="text-black fw-bold mt-1 mb-0">
                {staff.firstName} {staff.lastName}
              </p>
              <small className="text-muted">ดูโปรไฟล์ของคุณ</small>
            </div>
          </Link>
        )}
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <button
          className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg"
          onClick={patient ? patientLogout : staff ? staffLogout : undefined}
        >
          <i className="fas fa-sign-out-alt rounded-circle p-2 text-black text-5 bg-gray-300" />
          <small className="text-black fw-bold">ออกจากระบบ</small>
        </button>
      </li>
    </ul>
  );
}

export default DropdownMenu;
