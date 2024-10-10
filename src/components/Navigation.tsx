import React from 'react'
import { Navbar, Nav, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'

const Navigation = () => {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Your Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/teams">Teams</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Form.Check
            type="switch"
            id="dark-mode-switch"
            label={darkMode ? <Moon size={18} /> : <Sun size={18} />}
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation