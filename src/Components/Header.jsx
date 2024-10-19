import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
function Header() {
  return (
    <Container fluid className='header text-center fw-bold'>
      <Row>
        <Col className='bg-success'>
        <h1 style={{fontSize:100,fontFamily:"Times NEw Roman"}} className='font-times-new-roman'>The Generics</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
