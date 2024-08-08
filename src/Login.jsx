import React from 'react'
import { useNavigate } from 'react-router-dom'
import  axios  from 'axios'
import { useState } from 'react'


function Login() {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate =useNavigate()



    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {console.log(result)


            if(result.data==="success"){
                navigate('/home')

            }
           


        })
        .catch(err => console.log(err))
      

    }
   
  return (
    <>
    <h1>Login </h1>
    <div className='container border border-primary'>

        
<form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
  </div>
 
  <button type="submit" class="btn btn-primary">Login</button>
</form>
    </div>
    </>
  )
}

export default Login
