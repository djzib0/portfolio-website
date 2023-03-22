import { useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

// importing components
import Navbar from './components/Navbar'
import ChallengesList from './components/ChallengesList'
import Footer from './components/Footer'

function App() {
  
  const ref = useRef(null)

  function scrollTo() {
    console.log("taka")
    ref.current.scrollIntoView({behavior: smooth})
  }

  return (
    <div className="App">
      <Navbar scrollToComponent={scrollTo}/>
      <Routes>
        <Route exact path="/"
               element={<Home />} />
        <Route path="/challenges"
               element={<ChallengesList />} />
      </Routes>
    <Footer />
    </div>
  )
}

export default App
