// add 2 btn an increament count by 2 each click
// display alert effect on specify 
// 1.triger when page render first time
// 2.triger every time the btn a is clicked

import React,{useState,useEffect} from "react";

function Use_effect(){

    const [count,set_count]=useState(0)
    const [cal,set_cal]=useState(0)

    useEffect(()=>{
        alert("Clicked")
    },[])

    useEffect(()=>{
        alert("A Clicked")
    },[count])

    useEffect(()=>{
        alert("B Clicked")
    },[cal])

    const changeC=()=>{
        set_count(count+2)
    }

    const changeCal=()=>{
        set_cal(cal+2)
    }

    return(<>
        <br></br>
        <button onClick={changeC}> ButtonA {count} </button>
        <button onClick={changeCal}> ButtonB {cal} </button>
    </>)
}

export default Use_effect