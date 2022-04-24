import React,{useState} from 'react'
import {useMutation} from '@apollo/client'
import { CREATE_QUOTE } from '../gqlOperation/mutations'

const CreateQuote = () => {
  const[quote,setQuote]= useState("")
  
  const[quotecreate,{error, loading, data}] = useMutation(CREATE_QUOTE,{
    refetchQueries:[
      'getMyProfile',
      'getAllQuotes'
    ]
  })
  if(loading) return <div>loading...</div>
   if(data){
     console.log(data);
   }
  const handleSubmit =(e)=>{
      e.preventDefault()
      quotecreate({
        variables:{
          name:quote
        }
      })
  }
    return (
    <div className='container my-container'>
    {   error &&
      <div className='red '>{error.message}</div>
    }
      <form onSubmit={handleSubmit}>
        <input type="text" value={quote} name='quote' onChange={e=>setQuote(e.target.value)} placeholder='write your quote'/>
        <button className="btn" type='submit'> create</button>
      </form>
    </div>

  )
}

export default CreateQuote