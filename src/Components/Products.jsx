import React, { Fragment, useContext } from 'react'
import { Button, Card,Container,Row,Col} from 'react-bootstrap';
import Album1 from "../assets/Album 1.png";
import Album2 from "../assets/Album 2.png";
import Album3 from "../assets/Album 3.png";
import Album4 from "../assets/Album 4.png";
import { CartContext } from './Context/CartContext';

function Products() {
    const {addToCart}=useContext(CartContext);
    const productsArr = [
        {
            title: 'Colors',
            price: 100,
            imageUrl:Album1,
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl:Album2,
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl:Album3,
        },
        {
            title: 'Blue Color',
            price: 100,
            imageUrl:Album4,
        }
    ]
    function handleAddToCart(element){
          addToCart(element);
    }


    return (
        <Container>
            <h1 className='text-center fw-bold pt-2' style={{ fontFamily: 'italic',color:'Red' }}>MUSIC</h1>
            <Row>
            {
                productsArr.map((product,index)=>{
                    return(
                    <Fragment key={index}>
                    <Col xs={12} md={6} lg={6} className='d-flex justify-content-center'>
                    <Card className='shadow border solid' style={{width:200,height:200,margin:50}}>
                    <Card.Img  variant="top" style={{objectFit:"cover"}} src={product.imageUrl}></Card.Img>
                      <p>{product.price}</p>
                      <Button style={{width:130}} className='ml-5' onClick={()=>handleAddToCart(product)}>ADD TO CART</Button>
                    </Card>
                    </Col>
                    </Fragment>
                    )
                })
            }
            </Row>
            
        </Container>
    )
}

export default Products
