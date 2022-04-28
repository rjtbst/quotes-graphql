import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom';
import { GET_INDIVIDUAL_USER } from '../gqlOperation/queries';

const OtherProfile = () => {
    const {userid} = useParams()
const {loading, error, data} = useQuery(GET_INDIVIDUAL_USER,{
    variables:{
        userId: userid
    }
});

if (loading) return <div>loading..</div>
if(error){
  console.log(error)
}

  return (
    <div className="container my-container">
     <div className='center-align'>
         <img className='circle' style={{border:"2px solid", marginTop:"1rem"}} src={`https://robohash.org/${data.user.firstName}.png?size=150x150`} alt="pic" />
         <h4>{data.user.firstName}</h4>
         <h6>{data.user.email}</h6>
     </div>
         <h4>his quote</h4>
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

export default OtherProfile