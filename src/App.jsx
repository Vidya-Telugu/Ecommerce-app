
import Home from "./Components/Home"
import About from "./Components/About"
import Store from "./Components/Store"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContextProvider from "./Components/Context/CartContext"
import Contact from "./Components/Contact"
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        
          
            <Routes>
              <Route path="/" element={<Store></Store>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
          
        
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
