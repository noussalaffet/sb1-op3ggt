import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Program = () => {
  const programs = [
    { id: 1, title: 'Program 1', description: 'Description of Program 1' },
    { id: 2, title: 'Program 2', description: 'Description of Program 2' },
    { id: 3, title: 'Program 3', description: 'Description of Program 3' },
  ]

  return (
    <Container>
      <h2 className="mb-4">Our Programs</h2>
      <Row>
        {programs.map(program => (
          <Col md={4} key={program.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{program.title}</Card.Title>
                <Card.Text>{program.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Program