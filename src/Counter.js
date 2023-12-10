// Counter Component

function Counter() {
    var count = 0;

    // use setinterval() to increment counter
    setInterval(function() {
        count++;
        console.log("count =", count)
    }, 1000)
    return (
        <>
        The counter is set to: {count}
        </>
    )
}

export default Counter;