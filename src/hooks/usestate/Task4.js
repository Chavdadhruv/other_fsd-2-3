// to perform 
// 1.add 3 btn (change text,  change color, hide or show)
// add heading  l j university in red color & also add react js hook in h2 tag by clicking on
// change text should be change to welcome student
// 2. by clicking on change color the color of text change to blue-red vice versa,
// while double clicking on button
// 3. if click on hide then text = React JS Hook should be hide and change btn name to show

import React,{useState} from "react";

function Task4(){
    const[text1,text2]=useState("L J University")
    const[color1,color2]=useState("red")
    const[hide,show]=useState("Hide")
    // const[t1,t2]=useState("React JS Hook")


    function changeText(){
        
        if(text1 === "L J University"){
            text2("Welcome Student")
        }
        else{
            text2("L J University")
        }
    }

    function changeColor(){
        
        if(color1 === "red"){
            color2("blue")
        }
        else{
            color2("red")
        }
    }

    function hideShow(){
        if(hide === "Hide"){
            show("Show")
            text2(" ")
        }
        else{
            text2("React JS Hook")
            show("Hide")
        }
    }


    return(<>
        <h2 style={{color:color1}}> {text1} </h2>
        <button onClick={changeText}>Change Text</button>
        <button onDoubleClick={changeColor}>Change Color</button>
        <button onClick={hideShow}> {hide} </button>
    </>);
}

export default Task4