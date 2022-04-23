import React,{useState} from 'react'

const CreateQuote = () => {
  const[quote,setQuote]= useState("")
  
  const handleSubmit =(e)=>{
      e.preventDefault()
      console.log(quote);
  }
    return (
    <div className='container my-container'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={quote} name='quote' onChange={e=>setQuote(e.target.value)} placeholder='write your quote'/>
        <button className="btn" type='submit'> create</button>
      </form>
    </div>

  )
}

export default CreateQuote