// having 2 input fields and the display entered value on same page

import React,{useState} from "react";

function Task5(){

    const[fname,setFname]=useState("")
    const[lname,setLname]=useState("")

    function fillFname(e){
        setFname(e.target.value)
    }

    function fillLname(e){
        setLname(e.target.value)
    }

    return(<>
        First Name: <input type="text" value={fname} onChange={fillFname}></input><br></br>
        Last Name: <input type="text" value={lname} onChange={fillLname}></input>
        <h3>First Name: {fname}</h3>
        <h3>Last Name: {lname}</h3>
    </>);
}

export default Task5