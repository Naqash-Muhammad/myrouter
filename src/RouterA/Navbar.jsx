import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <Container fluid>
             <Row md={3} className='bg-warning text-center p-3 bolder'>
                  <Col><Link to="/">Home</Link></Col>
                  <Col><Link to="/about">About</Link></Col>
                  <Col><Link to="/context">Context</Link></Col>
             </Row>
        </Container>
    </div>
  )
}

export default Navbar