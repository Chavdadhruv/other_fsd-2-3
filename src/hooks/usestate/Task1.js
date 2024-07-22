import React,{useState} from "react";

function Task1(){
    const [count,set_count]=useState(0)

    function handleClick(){
        set_count(count+1)
    }

    return(<>
        <p>You click {count} times.</p>
        <button onClick={handleClick}> click me</button>
    </>)
}

export default Task1