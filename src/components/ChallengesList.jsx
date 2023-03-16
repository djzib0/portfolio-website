import React, { useState } from "react";
import challengesData from "../data/challengesData";

//importing components
import Challenge from "./Challenge";

//importing custom hooks
import useHandleChallenge from "../hooks/useHandleChallenge";

// third parties
import {nanoid} from "nanoid"

function ChallengesList() {
    const [currentChallenge, setCurrentChallenge] = useState(challengesData)
    const {data,
         toggleVisible,
         drawChallenge,
         showAll,
         optionsArr,
         handleChange,
         formData,
         challengeOn
        } = useHandleChallenge(false)

    const challengesArr = data.map(challenge => {
            return (
                <Challenge key={challenge.id}
                           obj={challenge}
                           isVisible={challenge.isVisible}
                           toggle={toggleVisible}
                            />
            )
    })

    // const selectOptions = optionsArr.map(item => {
    //     return <option value={item}>{item}</option>
    // })

    // console.log(selectOptions, "haha")

    return (
        <div>
            <button className="enroll-btn" onClick={drawChallenge}>Challenge me.</button>
            <button className="enroll-btn" onClick={showAll}>Show all</button>
            {!challengeOn && <form>
                <select id="challengeType"
                        value={formData.challengeType}
                        onChange={handleChange}
                        name="challengeType" >
                <option value="all">All</option>
                {optionsArr}
                </select>
            </form>}
            {challengesArr}
        </div>
    )
}

export default ChallengesList