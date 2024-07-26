import { useState } from "react";

function Text(){
    const[name,set_name]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Welcome ${name}`)
    }

    return(<>
        <form onSubmit={handleSubmit} style={{margin:"10px",padding:"10px"}}>
            <label>Enter Name:</label>
            <input type="Text" value={name} onChange={(e)=>set_name(e.target.value)}></input>
            <br></br><button type="submit">Submit</button>
        </form>
    </>)
}

export default Text