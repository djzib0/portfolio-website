import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav class="nav-container">
            <Link to="/" className="nav-el">Home</Link>
            <Link to="/about" className="nav-el">About me</Link>
        </nav>
    )

}

export default Navbar