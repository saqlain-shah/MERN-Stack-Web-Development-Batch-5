import { useState } from "react";


const Myform = () => {
    const [firstname,setFirstname] = useState('')
    const [secondname, setSecondname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(){
        console.log ("Firstname: " , firstname)
        console.log ("Secondname:" , secondname)
        console.log ("Email:" , email)
        console.log ("Password:" , password)
    }
   
  return (

    <>
    <label>
        First Name:
        <input type="text"
        name="firstname"
        value={firstname}
        onChange={(e)=>setFirstname(e.target.value)}
         />
    </label>

    <label>
        Second Name:
        <input type="text"
        name="secondtname"
        value={secondname}
        onChange={(e)=>setSecondname(e.target.value)}
         />
    </label>

    <label>
        Email:
        <input type="email"
        name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
         />
    </label>

    <label>
        Password:
        <input type="password"
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
  )
}

export default Myform
