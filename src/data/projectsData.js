import HANGMAN from "../assets/images/project-hangman.png"
import CARBOOKING from "../assets/images/project-car-booking.png"
import PORTFOLIO from "../assets/images/project-portfolio-website.png"

const projects = [
    {
        id: 1,
        name: "Hangman",
        technology: ["html", "css", "vanillaJS"],
        img: HANGMAN,
        github: "https://github.com/djzib0/js_hangman",
        website: "https://neon-blancmange-0514c6.netlify.app/",
        description1: "I wanted to consolidate my beginner knowledge about Vanilla JS. Game has validation of entered letters and simple settings modal for changing category visibility.",
        description2: "It's not a perfect code (is there any?), but was very developing and fun to do.",
        description3: ""
    },
    {
        id: 2,
        name: "Car rental booking system",
        technology: ["html", "css", "python", "django", "sqlite"],
        img: CARBOOKING,
        github: "https://github.com/djzib0/js_hangman",
        website: "",
        description1: "My graduation project created in Django.",
        description2: "Booking system where you can search for available car based on given parameters like fuel type, number of seats and more. Project contains implemented form input validation",
        description3: "I didn't focus on styling page but some simple styles were added.",
    },
    {
        id: 3,
        name: "Portfolio Website",
        technology: ["html", "css", "vanillaJS", "react"],
        img: PORTFOLIO,
        github: "https://github.com/djzib0/portfolio-website",
        website: "https://piotrfolio.eu",
        description1: "The Website you are visiting right now.",
        description2: "",
        description3: "",
    },

]

export default projects