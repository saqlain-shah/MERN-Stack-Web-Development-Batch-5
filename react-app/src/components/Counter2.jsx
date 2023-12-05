import { useState } from "react"

export default function Counter2() {
    const[count, setCount] = useState(1);
    function  handleAdd() {
        setCount(count +1)
    }
    function handleSub(){
        setCount(count -1)
    }
    return (
        <>
        <h5>Click Me {count}</h5>
        <button onClick={handleAdd}>Chik Chrok</button>
        <button onClick={handleSub}>Chik feyong</button>
        </>
    )
}
