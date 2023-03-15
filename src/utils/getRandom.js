// draws random 2 challenges to render
function getRandomChallenge(data) {
    // create list with challenges types, to draw one challenge of each type
    let typesArr = data.map(item => item.type)
    typesArr = [...new Set(typesArr)]

    let drawnChallenges = []

    // draw one of each type
    typesArr.forEach(type => {
        let challengesArr = data.filter(item => {
            return type === item.type
        })
        console.log("Type", type)
        drawnChallenges.push(drawRandom(challengesArr))
    })
    return drawnChallenges
}

function drawRandom(arr) {
    return(arr[Math.floor(Math.random() * arr.length)])
}

export default getRandomChallenge