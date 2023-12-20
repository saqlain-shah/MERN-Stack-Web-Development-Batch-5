import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);

    }

    function handleDecrement() {
        count === 0 ? setCount(0) : setCount(count - 1);

    }
    useEffect(() => { console.log("Counted", count) }, [count])

    return (
        <>
            <h1 style={{}}>Counter App</h1>
            <button onClick={handleIncrement}>Increment</button>
            <h1>{count}</h1>

            <button onClick={handleDecrement}>Decrement</button>
        </>
    );
}
