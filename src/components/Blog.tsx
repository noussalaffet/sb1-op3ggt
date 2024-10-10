import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Blog = () => {
  const posts = [
    { id: 1, title: 'First Blog Post', excerpt: 'This is a short excerpt from the first blog post.' },
    { id: 2, title: 'Second Blog Post', excerpt: 'This is a short excerpt from the second blog post.' },
    { id: 3, title: 'Third Blog Post', excerpt: 'This is a short excerpt from the third blog post.' },
  ]

  return (
    <Container>
      <h2 className="mb-4">Our Blog</h2>
      <Row>
        {posts.map(post => (
          <Col md={4} key={post.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={`https://source.unsplash.com/random/600x400?blog${post.id}`} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.excerpt}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Blog