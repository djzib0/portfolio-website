import { useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// importing components
import Navbar from './components/Navbar'
import Home from './components/Home'
import ChallengesList from './components/ChallengesList'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

      {/* <Routes>
        <Route exact path="/"
               element={<Home />} />
        <Route path="/challenges"
               element={<ChallengesList />} />
      </Routes> */}
    </div>
  )
}

export default App
