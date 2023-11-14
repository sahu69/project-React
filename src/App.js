import React from 'react';
import './App.css';
import Gallery from './Gallery'

import { Routes,Route } from 'react-router-dom';
import Body from './components/Body';

import Aboutpage from './pages/Aboutpage';

import HomePage from './pages/Homepage';
import Blogpage from './pages/Blogpages';
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <>
    {/* <Navbar links={[
      {to:"/", label:"Home"},
      {to:"/", label:"About"},
      {to:"/", label:"Gallery"},
      {to:"/", label:"Contact"},
      
    ]}/> */}
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<Aboutpage/>}></Route>
      <Route path='/gallery' element={<Blogpage/>}></Route>
      <Route path='/contactpage' element={<Contactpage/>}></Route>
    </Routes>
  
    {/* <h1 style={{textAlign:'center'}}>Image Gallery</h1> */}
    
    {/* <Gallery/> */}
    
   
    {/* <Body></Body> */}
    {/* <Aboutpage/> */}
   
    </>
  );
}

export default App;
