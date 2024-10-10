import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Jobs = () => {
  const jobs = [
    { id: 1, title: 'Frontend Developer', location: 'Remote' },
    { id: 2, title: 'Backend Developer', location: 'New York, NY' },
    { id: 3, title: 'UI/UX Designer', location: 'San Francisco, CA' },
  ]

  return (
    <Container>
      <h2 className="mb-4">Job Openings</h2>
      <Row>
        {jobs.map(job => (
          <Col md={4} key={job.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Text>{job.location}</Card.Text>
                <Button variant="primary">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Jobs