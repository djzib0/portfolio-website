import React, { useState } from "react";
import challengesData from "../data/challengesData";

//importing components
import Challenge from "./Challenge";

//importing custom hooks
import useShowDiv from "../hooks/useShowDiv";

function ChallengesList() {
    const [currentChallenge, setCurrentChallenge] = useState(challengesData)
    const {data, toggleVisible} = useShowDiv(true)

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
            {challengesArr}
        </div>
    )
}

export default ChallengesList