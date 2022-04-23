import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_QUOTES } from '../gqlOperation/queries'

const Home = () => {
  const {loading, error, data}  =useQuery(GET_ALL_QUOTES)
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
        <p className='right-align'> ~ {quote.by.firstName} </p>
      </blockquote>
        )
      })
    }
     
    </div>
  )
}

export default Home