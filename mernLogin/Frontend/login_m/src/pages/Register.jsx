import { set } from 'mongoose'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const[values,setValues]=useState({
    username:"",
    email:"",
    password:"" 
  })
  const handleChanges=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})

  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
     const response =  await axios . post ("http://localhost:8000/auth/register",values)
     console.log(response);
     
    } catch(err){
      console.log(err);
    }}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="username" onChange={handleChanges} required /> <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required onChange={handleChanges} /> <br />
            <label htmlFor="password">password</label>
            <input type="password" id="password" name="password" required onChange={handleChanges} />
        </div>
        <div>
            <button type="submit">Register</button>
        </div>
        <p>already have account</p>
        <Link to='/Login'> Login</Link>
      </form>
    </div>
  )
}

export default Register
