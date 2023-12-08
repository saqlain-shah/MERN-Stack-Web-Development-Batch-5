import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    function handleAdd() {
        setCount(count +1)
    }
    function handleSub() {
        setCount(count -1)
    }
    
    return (
        <>
            <h4>count is: {count}</h4>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSub}>Sub</button>
        </>
    )
}
