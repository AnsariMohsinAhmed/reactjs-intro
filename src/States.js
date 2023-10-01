/*
 * In this approach i am simply rendering 2 instances of the same component

 * Advantages:
 * Simplicity: This approach is straightforward and easy to implement, especially if you have many similar components that need independent state.
 * Less boilerplate: You don't need to create separate state variables and event handlers for each instance.

 * Trade-offs:
 * Limited flexibility: If you need to customize the behavior or state management for each instance differently, this approach may not be suitable.
 * Scalability: If you have a large number of instances, managing their state can become less efficient.
 */

import { useState } from "react";

export default function States() {

    return(
        <>
            <h1>Buttons with their own counters</h1>
            <MyButtons />
            <MyButtons />
        </>
    );
    
}

function MyButtons(){
    const [count, setCount] = useState(0);

    function onTheClickEvent() {
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={onTheClickEvent}>Clicked {count} times</button>
        </>
    );
}


/*

In this approach i am simply creating separate states for 2 buttons

Advantages:
Fine-grained control: This approach provides more flexibility, allowing you to customize the state and behavior of each button independently.
Scalability: It can be more efficient and manageable when dealing with a large number of instances with varying behavior.

Trade-offs:
More code: Creating separate hooks and state variables can result in more code, especially if you have many instances with similar behavior


*/

// import { useState } from "react";

// export default function States() {
//     const [count1, setCount1] = useState(0);
//     const [count2, setCount2] = useState(0);

//     function onButtonClick1() {
//         setCount1(count1 + 1);
//     }

//     function onButtonClick2() {
//         setCount2(count2 + 1);
//     }

//     return (
//         <>
//             <button onClick={onButtonClick1}>Button 1 Clicked {count1} times</button> <br /> <br />
//             <button onClick={onButtonClick2}>Button 2 Clicked {count2} times</button>
//         </>
//     );
// }
