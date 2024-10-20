import { createContext,useState} from "react";

export const CartContext=createContext();

function CartContextProvider({children}){
   
   const [TotalQuantity,setTotalQuantity]=useState(0);
   const[cartItems,setCartItems]=useState([]);
   function addToCart(element){
     setTotalQuantity((prev)=>prev+1);
     setCartItems((prev)=>{
      const checkIndex=prev.findIndex((item)=>item.title===element.title);
      if(checkIndex!=-1){
         const updatedItems=[...prev];
         updatedItems[checkIndex].quantity+=1;
         return updatedItems;
      }else{
         return [...prev,{...element,quantity:1}];
      }
     })
   }
   return <CartContext.Provider value={{addToCart,cartItems,TotalQuantity}}>
           {children}
   </CartContext.Provider>
}

export default CartContextProvider;