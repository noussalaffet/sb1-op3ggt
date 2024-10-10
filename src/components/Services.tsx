import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Services = () => {
  const services = [
    { id: 1, title: 'Web Development', description: 'We create responsive and user-friendly websites.' },
    { id: 2, title: 'Mobile App Development', description: 'We build native and cross-platform mobile applications.' },
    { id: 3, title: 'UI/UX Design', description: 'We design intuitive and visually appealing user interfaces.' },
  ]

  return (
    <Container>
      <h2 className="mb-4">Our Services</h2>
      <Row>
        {services.map(service => (
          <Col md={4} key={service.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Services