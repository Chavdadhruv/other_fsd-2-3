import React,{useState,useEffect} from "react";

function Digital_clock(){
    const [date, set_date]=useState(new Date())

    useEffect(()=>{setInterval(()=>{
        set_date(new Date())
    },1000)},[])

    return(<>
    <div style={{color:"sandybrown", backgroundColor:"black",border:"2px dashed sandybrown", margin:"10px", padding:"10px",borderRadius:"20px"}}>
        <h2>Time: {date.toLocaleTimeString()}</h2>
        <h3>Hour:{date.getHours()}  Minute:{date.getMinutes()}  Second:{date.getSeconds()}</h3>
    </div>
    </>)
}

export default Digital_clock;