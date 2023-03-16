import { useState } from "react";
import challengesData from "../data/challengesData";

//utils
import getRandomChallenge from "../utils/getRandom";

//thir parties
import { nanoid } from "nanoid"


function useHandleChallenge(defaultIsVisible=false) {
    const [data, setData] = useState(challengesData)
    const [isVisible, setIsVisible] = useState(defaultIsVisible)

    // when challengeOn draw 1 challenge of each type
    const [challengeOn, setChallengeOn] = useState(false)
    const [formData, setFormData] = useState(
        {challengeType: ""}
    )

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

    function showAll() {
        setData(challengesData)
        setChallengeOn(false)
    }

    //form functions
    let optionsArr = challengesData.map(item => {
        return item.topic
    })
    optionsArr = [...new Set(optionsArr)].map(item => {
        return <option key={nanoid()} value={item}>{item[0].toUpperCase() + item.slice(1)}</option>
    })


    function handleChange(e) {
        const {name, value} = e.target
        setFormData(prevData => {
            return {
            ...prevData,
            [name]: value
            }
        })
        filterData(value)
        
    }
    // display selected type of challenges
    function filterData(topic) {
        if (topic != "all") {
            setData(() => {
                return (
                    challengesData.filter(item => {
                        return item.topic === topic
                    })
                )
            })
        } else {
            setData(challengesData)
        }
    }

    return {data,
         toggleVisible,
         drawChallenge,
         showAll,
         optionsArr,
         handleChange,
         formData,
         challengeOn
        }
}

export default useHandleChallenge