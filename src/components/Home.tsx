import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container>
      <Row className="align-items-center py-5">
        <Col md={6}>
          <h1>Welcome to Our Company</h1>
          <p className="lead">We provide innovative solutions for your business needs.</p>
          <Button as={Link} to="/contact" variant="primary" className="me-3">Contact Us</Button>
          <Button as={Link} to="/program" variant="outline-primary">View Program</Button>
        </Col>
        <Col md={6}>
          <img src="https://source.unsplash.com/random/600x400?business" alt="Business" className="img-fluid rounded" />
        </Col>
      </Row>
    </Container>
  )
}

export default Home