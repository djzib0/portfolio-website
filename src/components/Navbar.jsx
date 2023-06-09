import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toggleNavbar from "../utils/toggleNavbar";


function Navbar(props) {
    console.log(props)
    const [showNavbar, setShowNavbar] = useState(false)
    const [windowWidth, setWindowWidth] = useState()

    function toggleNavbar() {
        setShowNavbar(!showNavbar)
    }

    useEffect(() => {
        function getWindowWidth() {
            if (window.innerWidth > 400) {
                setShowNavbar(false)
            }
            setWindowWidth(window.innerWidth)
         }

        window.addEventListener("resize", getWindowWidth)

        return () => window.removeEventListener("resize", getWindowWidth)
    }, [])

    function scrollToElement(element) {
        const el = document.getElementById(element)
        console.log(console.log(document.getElementById("about-me")))
        el.scrollIntoView({behavior: 'smooth'})
    }

    
    
    return (
        <nav className="nav-container">
            <div className="hamburger-btn" onClick={toggleNavbar}>
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
            </div>
            <div className={`nav-links ${showNavbar ? "active" : ""}`}>
                <a href='#footer'>Footer</a>
                <Link to="/" className="nav-el">Home</Link>
                <Link to="/challenges" className="nav-el">Challenges</Link>
            </div>
        </nav>
    )
}

export default Navbar