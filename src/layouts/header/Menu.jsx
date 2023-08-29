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
        {patient ? (
          <>
            <MenuItem to="/" active={pathname === '/'}>
              <i
                className={`far fa-calendar-alt fa-xl pe-2 text-${
                  pathname === '/' ? 'primary' : 'light'
                }`}
              />{' '}
              <span>การนัดหมาย</span>
            </MenuItem>
            <MenuItem to="/treatments" active={pathname === '/treatments'}>
              <i
                className={`fas fa-hand-holding-medical fa-xl pe-2 text-${
                  pathname === '/treatments' ? 'primary' : 'light'
                }`}
              />{' '}
              <span>การรักษา</span>
            </MenuItem>
            <MenuItem to="/receipts" active={pathname === '/receipts'}>
              <i
                className={`fas fa-receipt fa-xl pe-2 text-${
                  pathname === '/receipts' ? 'primary' : 'light'
                }`}
              />{' '}
              <span>ใบเสร็จ</span>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem to="/staff" active={pathname === '/staff'}>
              <i
                className={`far fa-calendar-alt fa-xl pe-2 text-${
                  pathname === '/staff' ? 'primary' : 'light'
                }`}
              />{' '}
              <span>การนัดหมาย</span>
            </MenuItem>
            <MenuItem to="/patients" active={pathname === '/patients'}>
              <i
                className={`fas fa-user-plus fa-xl pe-2 text-${
                  pathname === '/patients' ? 'primary' : 'light'
                }`}
              />{' '}
              <span>รายชื่อคนไข้</span>
            </MenuItem>
            <MenuItem to="/cases" active={pathname === '/cases'}>
              <i
                className={`fas fa-folder-plus fa-xl pe-2 text-${
                  pathname === '/cases' ? 'primary' : 'light'
                }`}
              />{' '}
              <span>การตรวจรักษา</span>
            </MenuItem>
            <MenuItem to="/treatments" active={pathname === '/treatments'}>
              <i
                className={`fas fa-hand-holding-medical fa-xl pe-2 text-${
                  pathname === '/treatments' ? 'primary' : 'light'
                }`}
              />{' '}
              <span>การรักษา</span>
            </MenuItem>

            <MenuItem to="/receipts" active={pathname === '/receipts'}>
              <i
                className={`fas fa-receipt fa-xl pe-2 text-${
                  pathname === '/receipts' ? 'primary' : 'light'
                }`}
              />{' '}
              <span>ใบเสร็จ</span>
            </MenuItem>
          </>
        )}
      </ul>
      <ProfileIcon />
    </div>
  );
}

export default Menu;
