// on click change dark and light mode
import React,{useState} from "react";

function Task6(){

    const[light,dark]=useState("Light")

    function Mode(){
        if(light === "Light"){
            dark("Dark")
            document.body.style.backgroundColor="white"
        }
        else{
            dark("Light")
            document.body.style.backgroundColor="black"

        }
    }

    return(<>
        <button onClick={Mode}> {light} </button>
    </>)

}

export default Task6



