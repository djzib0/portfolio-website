import { useState } from "react";
import challengesData from "../data/challengesData";


function useShowDiv(defaultIsVisible=false ) {
    const [data, setData] = useState(challengesData)
    const [isVisible, setIsVisible] = useState(defaultIsVisible)

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
        // for (let item of challengesData) {
        //     if (item.id === id) {
        //         item.isVisible = !item.isVisible
        //         newArray.push(item)
        //     } else {
        //         newArray.push(item)
        //     }
        // } 
        console.log("clicked")
        console.log(newArray)
        setData(newArray)
        // setIsVisible(!isVisible)
    }

    return {data, toggleVisible}
}

export default useShowDiv