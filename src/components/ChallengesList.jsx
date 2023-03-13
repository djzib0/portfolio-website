import React, { useState } from "react";
import challengesData from "../data/challengesData";

function ChallengesList() {
    const [currentChallenge, setCurrentChallenge] = useState(challengesData)

    const challengesArr = currentChallenge.map(challenge => {
        return (
            <div key={challenge.id} className="challenge-container">
                <h1>{challenge.title}</h1>
            </div>
        )
    })

    return (
        <div>
            {challengesArr}
        </div>
    )
}

export default ChallengesList