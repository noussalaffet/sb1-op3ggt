import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import { Container } from 'react-bootstrap'
import { useTheme } from '../context/ThemeContext'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { darkMode } = useTheme()

  return (
    <div className={`d-flex flex-column min-vh-100 ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
      <Navigation />
      <Container className="flex-grow-1 py-4">
        {children}
      </Container>
      <Footer />
    </div>
  )
}

export default Layout