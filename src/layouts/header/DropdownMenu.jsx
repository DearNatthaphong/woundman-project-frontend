import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../contexts/AuthContext';

function DropdownMenu({ open }) {
  const { patient, patientLogout, staffLogout } = useAuth();
  return (
    <ul
      className={`dropdown-menu end-0 px-2 mt-1 border shadow-sm rounded-xl w-sm-90${
        open ? ' d-block' : ''
      }`}
      // aria-labelledby="dropdownUser1"
    >
      <li>
        <Link className="dropdown-item d-flex align-items-center gap-3" to="#">
          <Avatar src="https://github.com/mdo.png" size="60" />
          <div>
            <p className="text-black fw-bold mt-1 mb-0">นายหมอ ตั้งใจทำ</p>
            <small className="text-muted">ดูโปรไฟล์ของคุณ</small>
          </div>
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <button
          className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg"
          onClick={patient ? patientLogout : staffLogout}
        >
          <i className="fas fa-sign-out-alt rounded-circle p-2 text-black text-5 bg-gray-300" />
          <small className="text-black fw-bold">ออกจากระบบ</small>
        </button>
      </li>
    </ul>
  );
}

export default DropdownMenu;
