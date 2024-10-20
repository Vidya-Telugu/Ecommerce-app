import React from 'react'
import Navigation from './Navigation'
import Products from './Products'
import FooterFile from './FooterFile'
import Header from "./Header"
function Home() {
  return (
    <>
      <Navigation></Navigation>
      <Header></Header>
      <Products></Products>
      <FooterFile></FooterFile>
    </>
  )
}

export default Home
