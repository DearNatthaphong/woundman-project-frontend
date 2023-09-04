import React, { createContext, useContext, useEffect, useState } from 'react';
import * as authService from '../api/authApi';
import { addAccessToken, removeAccessToken } from '../utils/localStorage';

const StaffAuthContext = createContext();

function StaffAuthContextProvider({ children }) {
  const [staff, setStaff] = useState(null);

  useEffect(() => {
    try {
      getStaffMe();
    } catch (err) {}
  }, []);

  const getStaffMe = async () => {
    const res = await authService.getStaffMe();
    setStaff(res.data.staff);
  };

  const staffRegister = async (input) => {
    const res = await authService.staffRegister(input);
    setTimeout(() => setStaff(true), 0);
    addAccessToken(res.data.token);
  };

  const staffLogin = async (input) => {
    const res = await authService.staffLogin(input);
    setStaff(true);
    addAccessToken(res.data.token);
  };

  const staffLogout = () => {
    setStaff(null);
    removeAccessToken();
  };

  return (
    <StaffAuthContext.Provider
      value={{
        staff,
        staffRegister,
        staffLogin,
        staffLogout
      }}
    >
      {children}
    </StaffAuthContext.Provider>
  );
}

export const useStaffAuth = () => {
  return useContext(StaffAuthContext);
};

export default StaffAuthContextProvider;
