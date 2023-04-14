import { useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import useSetActiveSection from './hooks/useSetActiveSection'

// importing components
import Navbar from './components/Navbar'
import Home from './components/Home'
import ChallengesList from './components/ChallengesList'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Nav from './components/Nav'

function App() {
  // custom hook to control nav class to show active section,
  // at Home component there is a contact button which also changes
  // the Navbar style
  const { activeSection, changeActiveSection } = useSetActiveSection("#")

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Nav activeSection={activeSection} changeActiveSection={changeActiveSection}/>
      <Home changeActiveSection={changeActiveSection} />
      <About />
      <Portfolio />
      <Skills />
      <Contact />

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
