// to build having buttons to inc and dec numbers by clicking their respective btn.also inc num should be 
// perform by only if num is less than 10 and dec num should be perfom less than 0

import React,{useState} from "react";
function Task2(){

    const[count,setCount]=useState(0)

    function incNumber(){
        if(count < 10){
            setCount(count+1)
        }
        else{
            return false;
        }
    }

    function decNumber(){
        if(count > 0){
            setCount(count-1)
        }
    }

    return(<>
        <p>Number: {count}</p>
        <button onClick={incNumber}>+</button>
        <button onClick={decNumber}>-</button>
    </>);
}

export default Task2