// sync img

import React,{useState} from "react"
import robo1 from "./robo1.png"
import robo2 from "./robo2.png"

function Task3(){
    const[img1,img2]=useState(robo1)

    function changeImg(){
        if(img1 === robo1){
            img2(robo2)
        }
        else{
            img2(robo1)
        }
    }
    return(<>
        <img src={img1} height="200px" width="200px" alt="Robot"/><br></br>
        <button onClick={changeImg}>change image</button>
    </>);
}

export default Task3