import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const[signupData,setSignupData] = useState({})
    
    const handleChange=(e)=>{
         setSignupData({
             ...signupData,
           [e.target.name]:e.target.value
         })
    }
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(signupData);
           navigate('/login')
    }
    return (
        <div className='container my-container'>
            <h5>Signup...</h5>
             <form onSubmit={(e)=>handleSubmit(e)}>
             <input type="text" name="firstName" placeholder='First Name' required onChange={handleChange}/>
             <input type="text" name="lastName" placeholder='Last Name' required onChange={handleChange}/>
                <input type="email" name="email" placeholder='email' required onChange={handleChange}/>
                <input type="password" name="password" placeholder='password' required onChange={handleChange}/>
                <input type="password" name="confirmPassword" placeholder='confirm password' required onChange={handleChange}/>
                <button className="btn" type='submit'>login</button>
                <Link to='login'><p>already have an account</p> </Link>
            </form>
        </div>
    )
}

export default Signup