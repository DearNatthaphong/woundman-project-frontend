import { createContext, useContext, useEffect, useState } from 'react';
import * as authService from '../api/authApi';
import * as staffService from '../api/staffApi';
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken
} from '../utils/localStorage';
import Spinner from '../components/ui/Spinner';
import { useLocation } from 'react-router-dom';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [patient, setPatient] = useState(null);
  const [staff, setStaff] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          if (pathname.startsWith('/patient')) {
            await getPatientMe();
          } else {
            await getStaffMe();
          }
        }
      } catch (err) {
        console.log(err);
      } finally {
        setInitialLoading(false);
      }
    };
    fetchMe();
  }, [pathname]);

  const updateStaff = async (input) => {
    const res = await staffService.updateStaff(input);
    setStaff(res.data.staff);
  };

  const getPatientMe = async () => {
    const res = await authService.getPatientMe();
    setPatient(res.data.patient);
  };

  const getStaffMe = async () => {
    const res = await authService.getStaffMe();
    setStaff(res.data.staff);
  };

  const patientLogin = async (input) => {
    const res = await authService.patientLogin(input);
    addAccessToken(res.data.token);
    await getPatientMe();
    // setPatient(true);
  };

  const staffLogin = async (input) => {
    const res = await authService.staffLogin(input);
    addAccessToken(res.data.token);
    await getStaffMe();
    // setStaff(true);
  };

  const patientRegister = async (input) => {
    // axios.post('/auth/register')
    const res = await authService.patientRegister(input);
    addAccessToken(res.data.token); // เพราะเป็น res ที่ส่งมาจาก api, token อาจจะหมดอายุ แต่เรา login อยู่
    setTimeout(() => getPatientMe(), 1); // setTimeout เพราะ modal ออกจาก dom ไม่ใช้ await เพราะมี fn เดียว

    // setTimeout(() => setPatient(true), 0); // ให้ onSuccess ทำงานก่อน
    // setPatient(true); // setPatient({id, idCard, profileImage})
    // localStorage.setItem('token', res.data.token) // ถ้าวันนึงเราเปลี่ยนชื่อ token
  };

  const staffRegister = async (input) => {
    const res = await authService.staffRegister(input);
    addAccessToken(res.data.token);
    getStaffMe();
    // setTimeout(() => getStaffMe(), 1); // setTimeout เพราะ modal ออกจาก dom
    // setTimeout(() => setStaff(true), 0);
  };

  const patientLogout = () => {
    setPatient(null);
    setStaff(null);
    removeAccessToken();
  };

  const staffLogout = () => {
    setPatient(null);
    setStaff(null);
    removeAccessToken();
  };

  if (initialLoading) return <Spinner />;

  return (
    <AuthContext.Provider
      value={{
        patient,
        staff,
        patientRegister,
        staffRegister,
        patientLogin,
        staffLogin,
        patientLogout,
        staffLogout,
        updateStaff
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
