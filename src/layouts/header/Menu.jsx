import React from 'react';
import MenuItem from './MenuItem';
import { useAuth } from '../../contexts/AuthContext';
import { useLocation } from 'react-router-dom';
import ProfileIcon from './ProfileIcon';

function Menu() {
  const { staff, patient } = useAuth();
  const { pathname } = useLocation();
  //   const location = useLocation();
  //   console.log(location);

  return (
    <div className="navbar-collapse collapse" id="navbarsExample04">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        {patient && (
          <>
            <MenuItem to="/patient" active={pathname === '/patient'}>
              <i
                className={`far fa-calendar-alt fa-${
                  pathname === '/patient' ? 'lg' : 'sm'
                } pe-2 text-${pathname === '/patient' ? 'warning' : 'light'}`}
              >
                <span> ใบนัดหมาย</span>
              </i>
            </MenuItem>
            <MenuItem
              to="/patient/treatments"
              active={pathname === '/patient/treatments'}
            >
              <i
                className={`fas fa-hand-holding-medical fa-${
                  pathname === '/patient/treatments' ? 'lg' : 'sm'
                } pe-2 text-${
                  pathname === '/patient/treatments' ? 'warning' : 'light'
                }`}
              >
                <span> การรักษา</span>
              </i>
            </MenuItem>
            <MenuItem
              to="/patient/receipts"
              active={pathname === 'patient/receipts'}
            >
              <i
                className={`fas fa-receipt fa-${
                  pathname === '/patient/receipts' ? 'lg' : 'sm'
                } pe-2 text-${
                  pathname === '/patient/receipts' ? 'warning' : 'light'
                }`}
              >
                <span> ใบเสร็จ</span>
              </i>
            </MenuItem>
          </>
        )}
        {staff && (
          <>
            <MenuItem to="/staff" active={pathname === '/staff'}>
              <i
                className={`far fa-calendar-alt fa-${
                  pathname === '/staff' ? 'lg' : 'sm'
                } pe-2 text-${pathname === '/staff' ? 'warning' : 'light'}`}
              >
                <span> ใบนัดหมาย</span>
              </i>
            </MenuItem>
            <MenuItem
              to="/staff/patients"
              active={pathname === '/staff/patients'}
            >
              <i
                className={`fas fa-user-plus fa-${
                  pathname === '/staff/patients' ? 'lg' : 'sm'
                } pe-2 text-${
                  pathname === '/staff/patients' ? 'warning' : 'light'
                }`}
              >
                <span> คนไข้</span>
              </i>
            </MenuItem>
            <MenuItem to="/staff/cases" active={pathname === '/staff/cases'}>
              <i
                className={`fas fa-folder-plus fa-${
                  pathname === '/staff/cases' ? 'lg' : 'sm'
                } pe-2 text-${
                  pathname === '/staff/cases' ? 'warning' : 'light'
                }`}
              >
                <span> การตรวจรักษา</span>
              </i>
            </MenuItem>
            <MenuItem
              to="/staff/payments"
              active={pathname === '/staff/payments'}
            >
              <i
                className={`fas fa-file-invoice-dollar fa-${
                  pathname === '/staff/payments' ? 'lg' : 'sm'
                } pe-2 text-${
                  pathname === '/staff/payments' ? 'warning' : 'light'
                }`}
              >
                <span> การเงิน</span>
              </i>
            </MenuItem>

            <MenuItem
              to="/staff/receipts"
              active={pathname === '/staff/receipts'}
            >
              <i
                className={`fas fa-receipt fa-${
                  pathname === '/staff/receipts' ? 'lg' : 'sm'
                } pe-2 text-${
                  pathname === '/staff/receipts' ? 'warning' : 'light'
                }`}
              >
                <span> ใบเสร็จ</span>
              </i>
            </MenuItem>
          </>
        )}
      </ul>
      <ProfileIcon />
    </div>
  );
}

export default Menu;
