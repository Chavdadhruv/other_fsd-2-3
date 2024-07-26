import React,{createContext} from 'react'
import C11 from './C11'

const num1=createContext()
const num2=createContext()

function Comp(){
    return(<>
        <num1.Provider value={22}>
        <num2.Provider value={56}>
            <C11/>
        </num2.Provider>
        </num1.Provider>
    </>)
}

export default Comp;
export {num1, num2}