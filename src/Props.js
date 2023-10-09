/*This file is continuation of States concept of States.js file

    We will basically see the concept of "props" in this file, by sharing data between components
*/

import { useState } from 'react';

export default function Props() {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (

        <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}

function MyButton({ count, onClick }) {

    return (
        
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}