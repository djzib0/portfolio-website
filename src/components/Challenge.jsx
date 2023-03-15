import React from "react";

function Challenge(props) {
    const {id, title, solution, isVisible} = props.obj
    return (
        <div key={id} className="challenge-container">
            <h1>{title}</h1>
            {isVisible && <p>{solution}</p>}
            <button onClick={() => props.toggle(id)}>Click me</button>
        </div>
    )
}

export default Challenge