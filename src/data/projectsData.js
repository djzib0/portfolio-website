import HANGMAN from "../assets/images/project-hangman.png"
import CARBOOKING from "../assets/images/portrait2.jpg"

const projects = [
    {
        id: 1,
        name: "Hangman",
        technology: ["vanillaJS", "css", "html", "sqlite"],
        img: HANGMAN,
        github: "https://github.com/djzib0/js_hangman",
        website: "https://neon-blancmange-0514c6.netlify.app/",
        description1: "I wanted to consolidate my beginner knowledge about Vanilla JS. Game has validation of entered letters and simple settings modal for changing category visibility.",
        description2: "It's not a perfect code (is there any?), but was very developing and fun to do.",
    },
    {
        id: 2,
        name: "Car rental booking system",
        technology: ["vanillaJS", "css", "html", "sqlite"],
        img: CARBOOKING,
        github: "https://github.com/djzib0/js_hangman",
        description1: "I wanted to consolidate my beginner knowledge about Vanilla JS. Game has validation of entered letters and simple settings modal for changing category visibility.",
        description2: "It's not a perfect code (is there any?), but was very developing and fun to do.",
    },

]

export default projects