// to increse val by 1 while clicking on increment and decrese val by 1 while clicking on decr
// inital val=0 use reducer hook

import React ,{useReducer} from 'react'

const inital=0

function IncDec(state,action){
    if(action.type === "Inc"){
        return state+1
    }
    if(action.type === "Dec"){
        return state-1
    }
}

function Task1(){
    const[state,dispatch]=useReducer(IncDec,inital)

    return(<>
        <h3>{state}</h3>
        <button onClick={()=>dispatch({type:"Inc"})}> + </button>
        <button onClick={()=>dispatch({type:"Dec"})}> - </button>
    </>);
}

export default Task1