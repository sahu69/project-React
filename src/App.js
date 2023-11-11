import React from 'react';
import './App.css';
import Gallery from './Gallery'
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import Homepage from './pages/Homepage';
import Body from './components/Body';
import Carousel from './components/carusel/Carousel';
import Aboutpage from './pages/Aboutpage';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar/>
    {/* <h1 style={{textAlign:'center'}}>Image Gallery</h1> */}
    
    {/* <Gallery/> */}
    
    <Carousel/>
    {/* <Body></Body> */}
    {/* <Aboutpage/> */}
    <About/>
    <Footer/>
    </>
  );
}

export default App;
