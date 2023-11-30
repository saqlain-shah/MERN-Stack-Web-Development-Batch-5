import { useState } from "react";

const FavoriteColor = () => {
const [ color , setColor] = useState('red')

    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button
                type="button"
                onClick={() => setColor('Blue')}
            >Blue</button>
            <button
                type="button"
                onClick={() => setColor('Red')}
            >Red</button>
            <button
                type="button"
                onClick={() => setColor('Pink')}
            >Pink</button>
            <button
                type="button"
                onClick={() => setColor('Green')}
            >Green</button>
         
        </>
    );
}


export default FavoriteColor;
