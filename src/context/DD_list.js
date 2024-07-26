import { useState } from "react";

function DD_list(){
    const[car,set_car]=useState("")

    const handleChange=(e)=>{
        set_car(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Welcome future owner of ${car}`)
    }

    return(<>
        <form onSubmit={handleSubmit} style={{margin:"10px",padding:"10px"}}>
            <label>Select Car:  </label>
            <select value={car} onChange={handleChange}>
                <option value={"Dream car"} selected hidden>Dream Car</option>
                <option value="Bugatti">Bugatti</option>
                <option value="Porcshe">Porsche</option>
                <option value="Ferrari">Ferrari</option>
            </select>
            <br></br><button type="submit">Submit</button>
        </form>
    </>)
}

export default DD_list