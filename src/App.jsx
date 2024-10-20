import Navigation from "./Components/Navigation"
import Header from "./Components/Header"
import Products from "./Components/Products"
import FooterFile from "./Components/FooterFile"
import { Container } from "react-bootstrap"
import Home from "./Components/Home"
import About from "./Components/About"
import Store from "./Components/Store"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContextProvider from "./Components/Context/CartContext"
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        
          
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/store" element={<Store></Store>}></Route>
            </Routes>
          
        
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
