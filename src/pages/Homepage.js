import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer/Footer'

import Carousel from "../components/carusel/Carousel"
import Aboutpage from './Aboutpage.js'
import About from '../components/About.js'

function Homepage() {
  return (
    <div>
        <Navbar/>
          <Carousel/>
         {/* <Aboutpage/> */}
         <About/>
        <Footer/>
    </div>
  )
}

export default Homepage