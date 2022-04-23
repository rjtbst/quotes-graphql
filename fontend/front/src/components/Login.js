import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const[loginData,setLoginData] = useState({})
    
    const handleChange=(e)=>{
         setLoginData({
             ...loginData,
           [e.target.name]:e.target.value
         })
    }
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(loginData);
        navigate('/profile')
    }
    return (
        <div className='container my-container'>
            <h5>Login...</h5>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="email" name="email" placeholder='email' required onChange={handleChange}/>
                <input type="password" name="password" placeholder='password' required onChange={handleChange}/>
                <button className="btn" type='submit'>login</button>
               <Link to='signup'><p>create an account</p> </Link>
            </form>
        </div>
    )
}

export default Login