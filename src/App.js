import { useState } from 'react';
import './App.css';
import  Login  from './components/Login';
import Signup from './components/Signup';

function App() {
  const[mail,setMail]=useState('')
  const[pass,setPass]=useState('')
  const[message,setMesssage]=useState('')
  const[name,setName]=useState('')


  
  const[currentForm,setCurrentForm]=useState('Signup')
  console.log(currentForm);
  const Toggleform=(formname)=>{
    if(!name||!mail||!pass|| pass.length < 6){
      setMesssage('Please fill the fields');
      

  }else{
    setCurrentForm(formname);

  }
  }

  return (
    <div className="App">
      {
        currentForm === 'Signup' ?<Signup Toggleform ={Toggleform} mail={mail} pass={pass} setPass={setPass} setMail={setMail} message={message} name={name} setName={setName} setMesssage={setMesssage}/>: <Login mail={mail} pass={pass} Toggleform ={Toggleform} setPass={setPass} setMail={setMail} setName={setName}/>
      }
  

    </div>
  );
}

export default App;
