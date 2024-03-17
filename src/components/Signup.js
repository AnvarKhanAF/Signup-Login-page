import './LoginSignup.css'
import React from 'react'

const Signup = ({mail,pass,setPass,setMail,Toggleform,message,name,setName,setMessage}) => {

  const handleSubmit=(e)=>{
    e.preventDefault();
    
  }

  return (
    <div className="App">

      <div className="box">
      <p className='invalid'>{message}</p>

        <h1 className="hading">SIGN UP</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type='text' className='mail' name='name'value={name} onChange={(e)=>{setName(e.target.value)}}></input> 
          <label htmlFor="name">Email</label>
          <input type='email' className='mail' name='mail' value={mail} onChange={(e)=>{setMail(e.target.value)}}></input>  
           <label htmlFor="name">Password</label>
          <input type='password' className='mail' name='password'value={pass} onChange={(e)=>{setPass(e.target.value)}}></input> 
          <button className='button' type='submit'onClick={()=>{Toggleform('Login')}}>Sign up</button>

        </form>
      </div>
    </div>
  )
}

export default Signup