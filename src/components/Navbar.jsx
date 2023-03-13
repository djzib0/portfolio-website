import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="nav-container">
            <Link to="/" className="nav-el">Home</Link>
            <Link to="/challenges" className="nav-el">Challenges</Link>
        </nav>
    )

}

export default Navbar