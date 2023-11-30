import { useState } from "react";


export default function Counter3() {
const[count,setCount]=useState(0.1);
function handleAdd(){
    setCount(count+1)
}
function handleSub(){
    setCount(count-1)
}
  return (
    <>
    <h6>Click me to add {count}</h6>
    <button onClick={handleAdd}>ADD</button>
    <button onClick={handleSub}>SUBS</button>
    </>
  )
}
