import React,{useContext} from "react";
import {num1,num2} from './Comp'

function C13(){
    const n1=useContext(num1)
    const n2=useContext(num2)
    return(<>
        <h2>{n1} + {n2} = {n1+n2} </h2>
        <h2>{n2} - {n1} = {n2-n1} </h2>
        <h2>{n1} * {n2} = {n1*n2} </h2>
        <h2>{n1} / {n2} = {n1/n2} </h2>
    </>)
}

export default C13;