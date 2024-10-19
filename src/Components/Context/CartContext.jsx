import { createContext } from "react";

export const CartContext=createContext();

function CartContextProvider(Children){

   function addToCart(){
     
   }
   return <CartContext.Provider value={{addToCart}}>

   </CartContext.Provider>
}

export default CartContextProvider;