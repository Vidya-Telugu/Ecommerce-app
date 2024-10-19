import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
function FooterFile() {
  return (
    <Container fluid className='bg-success width-100vw p-5'>
        <Row className='justify-content-center'> 
          <Col className='text-center'>
            <h1 style={{fontFamily:"Times New Roman"}} className='fw-bold'>The Generics</h1>
          </Col>
          <Col className='justify-content-end ml-40'>
            <span className='m-4'>youtube</span>
            <span className='m-4'>🎶Spotify</span>
            <span className='m-4'>🔯Instagram</span>
          </Col>
        </Row>
    </Container>
  )
}

export default FooterFile
