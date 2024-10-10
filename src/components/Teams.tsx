import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Teams = () => {
  const teamMembers = [
    { id: 1, name: 'John Doe', position: 'CEO' },
    { id: 2, name: 'Jane Smith', position: 'CTO' },
    { id: 3, name: 'Mike Johnson', position: 'Lead Developer' },
  ]

  return (
    <Container>
      <h2 className="mb-4">Our Team</h2>
      <Row>
        {teamMembers.map(member => (
          <Col md={4} key={member.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={`https://source.unsplash.com/random/300x300?portrait${member.id}`} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.position}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Teams