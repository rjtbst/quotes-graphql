import './App.css';
import React, { lazy, Suspense } from 'react';
import Home from "./components/Home";
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import CreateQuote from './components/CreateQuote';

import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './newContext/auth';
import RequireAuth from './components/RequireAuth';
// import AfterRoute from './components/AfterRoute';
const OtherProfile = lazy(() => import('./components/OtherProfile'))
//import ProtectedRoutes from './ProtectedRoutes';


function App() {
  return (

    <AuthProvider>

      <Navbar />
      <Suspense fallback={<p> Loading...</p>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={ <Signup />}/>
          <Route path='/profile/:userid' element={<OtherProfile />} />
          <Route path='/profile' element={<RequireAuth>
            <Profile />
          </RequireAuth>} />
          <Route path='/create' element={
            <RequireAuth>
              <CreateQuote />
            </RequireAuth>} />
        </Routes>
      </Suspense>
    </AuthProvider>

  );
}

export default App;
