import React, { Fragment,useContext,useState } from 'react'
import { Button, Nav,Navbar } from 'react-bootstrap'
import Cart from './Cart';
import { Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';
function Navigation() {
  const {TotalQuantity}=useContext(CartContext);
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
        <Link className='text-white m-3' to="/home">HOME</Link>
      </Nav.Item >
      <Nav.Item >
        <Link className='text-white m-3' to="/">STORE</Link>
      </Nav.Item>
      <Nav.Item >
        <Link className='text-white m-3' to="/about">ABOUT</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='text-white m-3' to="/contact">CONTACT</Link>
      </Nav.Item>
    </Nav>
    <div style={{width:30,height:35,backgroundColor:"yellow"}}>{TotalQuantity}</div>
    <Button className='bg-success  ms-auto' onClick={handleOpen}>Cart</Button>
    </Navbar>
    {
      isOpen && <Cart onClose={handleClose}></Cart>
    }
    </Fragment>
  )
}

export default Navigation
