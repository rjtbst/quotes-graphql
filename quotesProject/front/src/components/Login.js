import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_USER } from '../gqlOperation/mutations'

const Login = () => {
    const[loginData,setLoginData] = useState({})
    const[signinUser,{error, loading, data}] = useMutation(LOGIN_USER,{
       onCompleted(data){
            localStorage.setItem("token",data.user.token)
        navigate('/')
        }
    })
    
    if(loading){
        <div>loading...</div>
    }
    

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
        signinUser({
            variables:{
                userSignin: loginData
            }
        })
        
    }
    return (
        <div className='container my-container'>
        {
            error && <div className='red lighten-3 white-text card-panel'>{error.message}</div>
        }
        {
            data && data.user.token && 
            <div teal lighten-2 white-text card-panel> login Succesfully</div>
        }
            <h5>Login...</h5>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="email" name="email" placeholder='email' required onChange={handleChange}/>
                <input type="password" name="password" placeholder='password' required onChange={handleChange}/>
                <button className="btn" type='submit'>login</button>
               <Link to='/signup'><p>create an account</p> </Link>
            </form>
        </div>
    )
}

export default Login