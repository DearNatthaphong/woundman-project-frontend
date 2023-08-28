import { createContext, useContext, useState } from 'react';
import * as authService from '../api/authApi';
import { addAccessToken } from '../utils/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [patient, setPatient] = useState(null);
  const [staff, setStaff] = useState(null);

  const patientRegister = async (input) => {
    // axios.post('/auth/register')
    const res = await authService.patientRegister(input);
    // setPatient(true); // setPatient({id, idCard, profileImage})
    setTimeout(() => setPatient(true), 0); // ให้ onSuccess ทำงานก่อน
    // localStorage.setItem('token', res.data.token) // ถ้าวันนึงเราเปลี่ยนชื่อ token
    addAccessToken(res.data.token); // เพราะเป็น res ที่ส่งมาจาก api, token อาจจะหมดอายุ แต่เรา login อยู่
  };

  const staffRegister = async (input) => {
    const res = await authService.staffRegister(input);
    setTimeout(() => setStaff(true), 0);
    addAccessToken(res.data.token);
  };

  return (
    <AuthContext.Provider
      value={{ patient, staff, patientRegister, staffRegister }}
      // value={{ staff, staffRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
