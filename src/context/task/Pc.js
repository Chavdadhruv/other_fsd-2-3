import React,{createContext} from 'react'
import C1 from './C1'

const fname=createContext()
const lname=createContext()

function Pc(){
    return(<>
        <fname.Provider value={"Ken"}>
        <lname.Provider value={"Martin"}>
            <C1/>
        </lname.Provider>
        </fname.Provider>
    </>)
}

export default Pc;
export {fname, lname}