import React, { forwardRef } from "react";
import Section from "./Section";

function Home(props, ref) {
    console.log(props)
    return (
        <main >
        <Section className="main-section" id="home"/>
        <Section className="main-section" id="about-me"/>   
      </main>
    )
}

export default forwardRef(Home)