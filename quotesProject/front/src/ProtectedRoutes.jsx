import React from 'react'
import { Outlet } from 'react-router-dom';


import Login from './components/Login'
import useAuth from "./context/useAuth"

const ProtectedRoutes = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet/> : <Login/>;
}

export default ProtectedRoutes