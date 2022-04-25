import { useQuery } from '@apollo/client'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GET_MY_PROFILE } from '../gqlOperation/queries'

const Profile = () => {
const {loading, error, data} = useQuery(GET_MY_PROFILE);
const navigate = useNavigate();
if (loading) return <div>loading..</div>
if(error){
  console.log(error)
}
if(!localStorage.getItem("token")){
  navigate('/login')
  return <h1>unauthorized</h1>
}

if(data){
  console.log(data.user._id)
}
  return (
    <div className="container my-container">
     <div className='center-align'>
         <img className='circle' style={{border:"2px solid", marginTop:"1rem"}} src={`https://robohash.org/${data.user.firstName}.png?size=150x150`} alt="pic" />
         <h4>{data.user.firstName}</h4>
         <h6>{data.user.email}</h6>
     </div>
         <h4>Your quote</h4>
         {
           data.user.quotes.map((quo,_id)=>{
             return (
              <blockquote key={_id}>
             <h6>{quo.name}</h6>
         </blockquote>
             )
             
           })
         }
         
         
    </div>
  )
}

export default Profile