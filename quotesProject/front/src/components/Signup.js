import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SIGNUP_USER } from '../gqlOperation/mutations'

const Signup = () => {
    const navigate = useNavigate()
    const[signupData,setSignupData] = useState({})
    //returns array- 1st method 2nd data
    const[signupUser,{loading,error,data}]  = useMutation(SIGNUP_USER)
    
    if(loading)return <h1>loading...</h1>
    if(data){
        navigate('/login')
    }
    const handleChange=(e)=>{
         setSignupData({
             ...signupData,
           [e.target.name]:e.target.value       
         })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        signupUser({
            variables:{
                userNew:signupData
            }
        })
        console.log(signupData);
    }
    return (
        <div className='container my-container'>
         { 
           error && <div className='red lighten-3 white-text card-panel'>{error.message}</div>
         }
        {
            data && data.user && 
            <div className='teal lighten-2 white-text card-panel'>{data.user.firstName} registered successfully.</div>
        }
            <h5>Signup...</h5>
             <form onSubmit={(e)=>handleSubmit(e)}>
             <input type="text" name="firstName" placeholder='First Name' required onChange={handleChange}/>
             <input type="text" name="lastName" placeholder='Last Name' required onChange={handleChange}/>
                <input type="email" name="email" placeholder='email' required onChange={handleChange}/>
                <input autoComplete='current-password' type="password" name="password" placeholder='password' required onChange={handleChange}/>
                <button className="btn" type='submit'>signup</button>
                <Link to='/login'><p>already have an account</p> </Link>
            </form>
        </div>
    )
}

export default Signup