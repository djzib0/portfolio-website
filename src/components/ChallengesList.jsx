import React, { useState } from "react";
import challengesData from "../data/challengesData";

//importing components
import Challenge from "./Challenge";

//importing custom hooks
import useShowDiv from "../hooks/useHandleChallenge";

function ChallengesList() {
    const [currentChallenge, setCurrentChallenge] = useState(challengesData)
    const {data, toggleVisible, drawChallenge} = useShowDiv(true)

    const challengesArr = data.map(challenge => {
            return (
                <Challenge key={challenge.id}
                           obj={challenge}
                           isVisible={challenge.isVisible}
                           toggle={toggleVisible}
                            />
            )
    })

    return (
        <div>
            <button className="enroll-btn" onClick={drawChallenge}>Challenge me.</button>
            {challengesArr}
        </div>
    )
}

export default ChallengesList