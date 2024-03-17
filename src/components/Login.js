import React, { useState } from 'react'

const Login = (props) => {
    const[mail,setMail]=useState('')
    const[pass,setPass]=useState('')
    const[message,setMessage]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
     
        if(mail===props.mail&&pass===props.pass){
          setMessage('Success')
        
        }else{
          setMessage('Invalid')
        }
      }
      const handleLogout=()=>{
        props.Toggleform('Signup');
        props.setMail('');
        props.setPass('');
        props.setName('');
      }
     

  return (
    <div className="App">
    <div className="box2">

   {message==='Success'?<div>  <h1>You have successfully Login</h1>
            <button className='button' onClick={handleLogout}>Logout</button></div>:
            <div><p className={message==='Success'?'success':'invalid'}>{message}</p>

      <h1 className="hading">LOGIN</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="name">Email</label>
        <input type='email' className='mail' name='mail' value={mail} onChange={(e)=>{setMail(e.target.value)}}></input>  
         <label htmlFor="name">Password</label>
        <input type='password' className='mail' name='password'value={pass} onChange={(e)=>{setPass(e.target.value)}}></input> 
        <button className='button' type='submit'onClick={()=>{props.Toggleform('Sign up')}}>Login</button>

      </form></div>}
   
     
    </div>
  </div>
  )
}

export default Login