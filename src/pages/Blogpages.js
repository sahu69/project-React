import React from 'react'
import Navbar from '../components/Navbar'
import Gallery from '../Gallery'

function Blogpages() {
  return (
<div>
    <Navbar/>
    <div>
        <h1 style={{textAlign:'center'}}>My Gallery</h1>
        <Gallery/>
    </div>
</div>
  )
}

export default Blogpages