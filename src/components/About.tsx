import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <Container>
      <h2 className="mb-4">About Us</h2>
      <Row>
        <Col md={6}>
          <p>We are a company dedicated to providing top-notch services to our clients. Our team of experts is committed to delivering innovative solutions that meet your unique needs.</p>
        </Col>
        <Col md={6}>
          <img src="https://source.unsplash.com/random/600x400?team" alt="Our Team" className="img-fluid rounded" />
        </Col>
      </Row>
    </Container>
  )
}

export default About