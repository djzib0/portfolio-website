import React, { forwardRef, Fragment, useRef } from "react";
import { nanoid } from "nanoid"

function Section(props, ref) {
    // const ref = useRef(null)

    return (
        <div ref={ref} className="main-section">
            Section id {props.id}
        </div>
    )
}

export default forwardRef(Section)