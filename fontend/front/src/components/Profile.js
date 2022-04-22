import React from 'react'

const Profile = () => {
  return (
    <div className="container my-container">
     <div className='center-align'>
         <img className='circle' style={{border:"2px solid", marginTop:"1rem"}} src="https://robohash.org/ram.png?size=150x150" alt="pic" />
         <h4>mukes</h4>
         <h6>email: abc@abc</h6>
     </div>
         <h4>Your quote</h4>
         <blockquote>
             <h6>if it works dont touch it</h6>
        </blockquote>
         <blockquote>
             <h6>if it works dont touch it</h6>
         </blockquote>
    </div>
  )
}

export default Profile