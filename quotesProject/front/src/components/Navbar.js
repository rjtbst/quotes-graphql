import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth, } from '../newContext/auth'

const Navbar = () => {

  const auth = useAuth()
  const navigate = useNavigate()
  return (
    <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo left">Q-app</Link>
      <ul id="nav-mobile" className="right ">
        <li><Link to="/">Home</Link></li>
        {
          auth.user !== null?
          <>
          <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/create">Create quote</Link></li>
        <li><button className="red btn" onClick={()=>{
          localStorage.removeItem("token")
          auth.logout()
          navigate('/')
        }}>logout</button></li>
         </>:
          <>
          <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
          </>
        }
       </ul>
    </div>
  </nav>
  )
}

export default Navbar