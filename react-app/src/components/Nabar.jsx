import React from 'react'
import {Link} from "react-router-dom"
export default function Nabar() {
  return (
   <React.Fragment>

    <div style={{backgroundColor:"blue", height :"200", width:"auto", fontSize:"30"}}>
        
    <Link 
    to="/"
    style={{color:"white"}}
    >Home</Link>
    <Link 
    to="/login"
    style={{color:"white"}}
    >Login</Link>
    <Link 
    to="/register"
    style={{color:"white"}}
    >Register</Link>
    <Link 
    to="/counter"
    style={{color:"white"}}
    >Counter</Link>
         </div>
   </React.Fragment>
  )
}
