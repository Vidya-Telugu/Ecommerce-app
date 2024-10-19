import React from 'react'
import Album1 from "../assets/Album 1.png";
import Album2 from "../assets/Album 2.png";
import Album3 from "../assets/Album 3.png";
import Album4 from "../assets/Album 4.png"
function Products() {
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


    return (
        <div>
          {
            productsArr.map((product)=>{
               return (
                    <div>
                        <h4>{product.title}</h4>
                        <p>{product.price}</p>
                        <div>{product.imageUrl}</div>
                    </div>
               )
            })
          }
        </div>
    )
}

export default Products
