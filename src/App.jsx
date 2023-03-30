import { useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

// importing components
import Navbar from './components/Navbar'
import ChallengesList from './components/ChallengesList'
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Nav />
      {/* <Routes>
        <Route exact path="/"
               element={<Home />} />
        <Route path="/challenges"
               element={<ChallengesList />} />
      </Routes> */}
    <Footer />
    </div>
  )
}

export default App
