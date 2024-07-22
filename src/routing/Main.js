import React from "react";
// Seq matter in below line
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Home from "./Home";
import Contact from "./Contact";
import Nopage from "./Nopage";

function Main(){
    return(<div className="main-route">
        <Router>
            <div className="main-route">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                </ul>
            </div>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                {/* (*) for undefined URL */}
                <Route path="*" element={<Nopage/>}/>
            </Routes>

        </Router>
    </div>);
}

export default Main