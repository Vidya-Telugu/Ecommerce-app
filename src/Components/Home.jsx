import React, { Fragment } from 'react'
import { Container, Row,Col,Button} from 'react-bootstrap'
import Navigation from './Navigation'
import FooterFile from "./FooterFile"
function Home() {
  const toursList = [{ id: 1, date: "July 16", place: "DETROIT", venue: "Energy Muusic Theatre" },
  { id: 1, date: "July 17", place: "KURNOOL", venue: "Energy Muusic Theatre" },
  { id: 2, date: "July 18", place: "VRINDAVAN", venue: "NEHRU STADIUM" },
  { id: 3, date: "July 19", place: "NEWZEALAND", venue: "UPPAL INDOOR" },
  { id: 4, date: "July 20", place: "SWISS", venue: "T-MOBILE ARENA" },
  { id: 5, date: "AUG 03", place: "PONDICHERRY", venue: "GACHIBOWLI" },
  { id: 6, date: "July 15", place: "DUBAI", venue: "CONCORD PAVILION" }
  ]
  return (
    <Fragment>
      <Navigation></Navigation>
      <Container fluid className="bg-black fw-bolder h-25 d-flex flex-column justify-content-center mb-3 align-items-center p-4">
        <Row className="justify-content-center">
          <h1 style={{ color: "white", fontSize: 80, fontFamily: "Times-New-Roman" }}>The Generics</h1>
        </Row>
        <Row className="justify-content-center">
          <div style={{
            width: 200, height: 90, backgroundColor: "skyblue"
            , textAlign: "center", verticalAlign: "center",
            display: "flex", justifyContent: "center", alignItems: "center",
            fontSize: 70
          }}>
            ⏯️
          </div>
        </Row>
        <Row>
          <h1 style={{ color: "white", fontSize: 60, fontFamily: "Times-New-Roman" }}>Get Our Latest Album</h1>
        </Row>
      </Container>
      <Container className='d-flex flex-column justify-content-center align-items-center'>
        <Row className='fw-bold' style={{color:"black",fontSize:30}}>Tours</Row>
          {
            toursList.map((tour)=><Container style={{fontFamily:"Times-New-Roman"}}>
              <Row className='py-0 align-self-center' key={tour.id}>
                <Col className='p-0'>
                  {tour.date}
                </Col>
                <Col>
                  {tour.place}
                </Col>
                <Col>
                {tour.venue}
                </Col>
                <Col>
                <Button className="bg-success">Book Your Tickets</Button>
                </Col>
            </Row>
            <hr className='my-2'></hr>
            </Container>)
          }
      </Container>
      <FooterFile></FooterFile>
    </Fragment>
  )
}

export default Home
