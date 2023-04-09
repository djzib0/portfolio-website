import React from "react";
import { useState } from "react";

export default function useSetActiveSection(defSection) {
    const [activeSection, setActiveSection] = useState("#")

    function changeActiveSection(section) {
        setActiveSection(section)
    }

    return { activeSection,
         changeActiveSection }
}

