import { useQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'
import { GET_ALL_QUOTES } from '../gqlOperation/queries'
// import {useNavigate} from 'react-router-dom'

const Home = () => {
  
  const {loading, error, data}  = useQuery(GET_ALL_QUOTES)
  if(loading)return <h1>loading...</h1>
  if(error){
    console.log(error.message);
  }
  if(data){
    console.log(data);
  }
 
return (
    <div className='container'>
    {
      data.quotes.map((quote,_id)=>{
        return (
          <blockquote key={_id}>
        <h6>{quote.name}</h6>
       <Link to={`profile/${quote.by._id}`} > <p className='right-align'> ~ {quote.by.firstName} </p></Link>
      </blockquote>
        )
      })
    }
     
    </div>
  )
}

export default Home