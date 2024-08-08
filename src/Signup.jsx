import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import  axios  from 'axios'


function Signup() {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const navigate =useNavigate()
   



    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result => {
            console.log(result)


              
                    navigate('/login')
    
        
               
    


        })
        .catch(err => console.log(err))
      

    }
  return (
   <>
   <h1>Register</h1>
   <div className='container border border-primary mx-auto grid gap-0 row-gap-3'>

   <form onSubmit={handleSubmit}>
 

  <div class="form-group">
  
    <label for="formGroupExampleInput">Full Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Full Name" onChange={(e)=>setName(e.target.value)}/>
  
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
  </div>

  
  <button  type="submit" class="btn btn-primary">Register</button>
</form>
<div className='container mg-5 p-4 g-col-6'>
<small id="emailHelp" class="form-text text-muted">IF already have account.</small>
<Link to="/login" type="button" class="btn btn-info">Login</Link>
</div>
   </div>


</>
      
   
  )
}

export default Signup
