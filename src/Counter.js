// add use state
import { useState } from'react';



// Counter Component

function Counter() {
    //var count = 0;

    const [count, setCount] = useState(0);

    // use setinterval() to increment counter
    setInterval(function() {
        setCount(count+1)
        console.log("count =", count)
    }, 1000)
    return (
        <>
        The counter is set to: {count}
        </>
    )
}

export default Counter;