import React, { Fragment, useContext } from 'react'
import { Button, Container,Col,Row} from 'react-bootstrap'
// import Album1 from "../assets/Album 1.png";
// import Album2 from "../assets/Album 2.png";
// import Album3 from "../assets/Album 3.png";
import { CartContext } from './Context/CartContext';
function Cart({onClose}) {
  const {cartItems}=useContext(CartContext)
    // const cartElements = [
    //     {        
    //     title: 'Colors',        
    //     price: 100,       
    //     imageUrl:Album1,       
    //     quantity: 2,     
    //     },        
    //     {        
    //     title: 'Black and white Colors',       
    //     price: 50,        
    //     imageUrl:Album2,        
    //     quantity: 3,      
    //     },       
    //     {        
    //     title: 'Yellow and Black Colors',       
    //     price: 70,        
    //     imageUrl:Album3,       
    //     quantity: 1,      
    //     }       
    //     ]
  return (
   
    <Container style={{maxWidth:350,zIndex:1000}}className="position-absolute top-0 end-0 p-3 bg-light border shadow-sm">
        <Button onClick={onClose} className='d-flex justify-content-end bg-white '>❌</Button>
        <Row className='fw-bold mb-2 ml-1'>
            <Col>ITEM</Col>
            <Col className='ml-3'>PRICE</Col>
            <Col className='ml-3'>QUANTITY</Col>
        </Row>
        {
            cartItems.map((element,index)=>
            <Fragment>
                <Row className="pb-2"key={index}>
                <Col className='d-flex align-items-center'>
                    <img src={element.imageUrl} width="50" height="50"></img>
                    <h6 className="m-2">{element.title}</h6>               
                </Col>
                <Col className='d-flex align-items-center ml-3'>
                <h5>{element.price}</h5>
                </Col>
                <Col className='d-flex align-items-center ml-3'>
                  <Row>
                    <Col><div>1</div></Col>
                    <Button className='bg-danger ml-0' size="sm" style={{width:80}}>REMOVE</Button>
                  </Row>
                </Col>
            </Row>
            <hr className='w-50'></hr>
            </Fragment>
            )
        }
        <hr></hr>
        <h6 className='d-flex justify-content-end'>Total Amount:50$</h6>
        <Container className='d-flex justify-content-center'>
        <Button size='sm'>PURCHASE</Button>
        </Container>
    </Container>
  )
}

export default Cart
