// add use state
import { useState , useEffect} from'react'; // add useEffect 



// Counter Component

function Counter() {
    //var count = 0;

    const [count, setCount] = useState(0);

    // use setinterval() to increment counter


    useEffect(function() {
        var timer = setInterval(function() {
            setCount(count+1); // first increment
            setCount(count+1); // second increment
            console.log("count =", count);
    
    }, 1000);
    return function() {
        clearInterval(timer);
    }
    }, );

   
    return (
        <>
        The counter is set to: {count}
        </>
    )
}

export default Counter;