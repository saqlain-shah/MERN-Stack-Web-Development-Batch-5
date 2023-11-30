// src/components/SignupForm.jsx
import React, { useState } from 'react';
import './NewComponent.css';

const SignupForm = () => {
const [username, setUsername]=useState('')
const [email, setEmail]=useState('')
const [password, setPassword]=useState('')


function handleSubmit(){
    console.log("Username : ", username)
    console.log("Email : ", email)
    console.log("Password : ", password)

}
  return (
   

 <>

<label>
        User Name:
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </label>

      <button 
      type="submit"
      onClick={handleSubmit}
      >Submit</button>
    </>

  );
};

export default SignupForm;
