import { createContext, useContext, useState } from 'react';
import * as authService from '../api/authApi';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [patient, setPatient] = useState(null);
  const [staff, setStaff] = useState(null);

  const patientRegister = async (input) => {
    // axios.post('/auth/register')
    const res = await authService.patientRegister(input);
  };

  const staffRegister = async (input) => {
    const res = await authService.staffRegister(input);
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
