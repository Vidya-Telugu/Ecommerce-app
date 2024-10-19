import Navigation from "./Components/Navigation"
import Header from "./Components/Header"
import Products from "./Components/Products"
import FooterFile from "./Components/FooterFile"
import { Container } from "react-bootstrap"
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation></Navigation>
      <Header></Header>
      <Container className="flex-grow-1 my-5">
        <Products />
      </Container>
      <FooterFile></FooterFile>
    </div>
  )
}

export default App
