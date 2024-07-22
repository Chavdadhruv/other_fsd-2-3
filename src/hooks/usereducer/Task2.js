// to increse value by 5 while clicking on btn initial=20


import React ,{useReducer} from 'react'

const inital=20

function IncDec(state,action){
    if(action.type === "Inc"){
        return state+5
    }
}

function Task1(){
    const[state,dispatch]=useReducer(IncDec,inital)

    return(<>
        <h3>{state}</h3>
        <button onClick={()=>dispatch({type:"Inc"})}> + </button>
    </>);
}

export default Task1