import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Eror from './Components/Eror'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'


function App() {
  return (
    <div>

    <Router>
    <Navbar />
    <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/eror" element={<Eror />} />

        </Routes>
      </Router>

    </div>
  )
}

export default App