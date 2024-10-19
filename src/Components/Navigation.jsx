import React, { Fragment,useState } from 'react'
import { Button, Modal, Nav,Navbar } from 'react-bootstrap'
import Cart from './Cart';
function Navigation() {
  const[isOpen,setIsopen]=useState(false);
  function handleOpen(){
    setIsopen(true);
  }
  function handleClose(){
    setIsopen(false)
  }
  return (
    <Fragment>
    <Navbar className='bg-black mb-3'>
    <Nav variant="pills" className={'mx-auto justify-content-end p-0 fw-bold'}>
      <Nav.Item >
        <Nav.Link className='text-white m-3' href="#home">HOME</Nav.Link>
      </Nav.Item >
      <Nav.Item >
        <Nav.Link className='text-white m-3' href="#store">STORE</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link className='text-white m-3' href="#about">ABOUT</Nav.Link>
      </Nav.Item>
    </Nav>
    <Button className='bg-success  ms-auto me-2' onClick={handleOpen}>Cart</Button>
    </Navbar>
    {
      isOpen && <Cart onClose={handleClose}></Cart>
    }
    </Fragment>
  )
}

export default Navigation
