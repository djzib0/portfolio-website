import { useState } from "react";
import challengesData from "../data/challengesData";

//utils
import getRandomChallenge from "../utils/getRandom";


function useShowDiv(defaultIsVisible=false) {
    const [data, setData] = useState(challengesData)
    const [isVisible, setIsVisible] = useState(defaultIsVisible)
    // when challengeOn draw 2 random challenges to display on page
    const [challengeOn, setChallengeOn] = useState(false)

    // show or hide challenge solution
    function toggleVisible(id) {
        const newArray = data.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    isVisible: !item.isVisible
                }
            }
            return item
        })
        setData(newArray)

    }

    function drawChallenge() {
        setData(getRandomChallenge(data))
        setChallengeOn(true)
    }

    return {data, toggleVisible, drawChallenge}
}

export default useShowDiv