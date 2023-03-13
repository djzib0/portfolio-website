import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

// importing components
import Navbar from './components/Navbar'
import ChallengesList from './components/ChallengesList'

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/"
               element={<Home />} />
        <Route path="/challenges"
               element={<ChallengesList />} />
      </Routes>

    </div>
  )
}

export default App
