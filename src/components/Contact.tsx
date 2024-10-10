import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container>
      <h2 className="mb-4">Contact Us</h2>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h4>Our Office</h4>
          <p>123 Main Street<br />City, State 12345<br />United States</p>
          <h4>Contact Information</h4>
          <p>Email: info@example.com<br />Phone: (123) 456-7890</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact