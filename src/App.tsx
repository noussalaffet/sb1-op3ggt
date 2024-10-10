import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Program from './components/Program'
import Teams from './components/Teams'
import Services from './components/Services'
import Jobs from './components/Jobs'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/program" element={<Program />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/services" element={<Services />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App