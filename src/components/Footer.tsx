import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { darkMode } = useTheme()

  return (
    <footer className={`py-4 mt-4 ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#" className="me-3">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer