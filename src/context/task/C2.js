import React,{useContext} from "react";
import {fname,lname} from './Pc'

function C2(){
    const fn=useContext(fname)
    const ln=useContext(lname)
    return(<>
        <h2>Welcome {fn} {ln}</h2>
    </>)
}

export default C2;