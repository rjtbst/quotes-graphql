import React from 'react';
import { createContext, useContext, useState } from 'react';


export const initialUserStateValues = {
  token: '',
  name: '',
  username: '',
  role: '',
};
const initContext = {
  user: { ...initialUserStateValues },
  setUser: () => '',
} 

const AuthContext = createContext(initContext);
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const setUser = (user) => {
    setState({ ...state, user });
  };

  const initState = {
    user: { ...initialUserStateValues },
    setUser,
  };
  const [state, setState] = useState(initState);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
