import React from 'react'
import Navbar from '../components/Navbar';
import img from "../image/img.PNG"

function About() {
  return (
    <div>
    {/* <Navbar/> */}
    <section id="about" class="about-section-padding">
    <div class="container">
        <div class="row mt-5">
            <div class="col-lg-4 col-md-12 col-12">
                <div class="about-img ">
                    <img src={img}  alt="" class="img-fluid"/>
                </div>
            </div>
            <div class="col-lg-8 col-md-12 col-12  ps-lg-1 mt-md-1">
                <div class="about-text">
                    <h2>About Me <hr/> </h2>
                    <p>Hello,my name is Priyanka Sahu and i am a web designer.
                         I am very passionate about my work. I have 
                         2 years experience in this field.
                        I make sure that every page and every step a user will experience in their interaction with the finished product will conform to the overall vision created by UX designers.
                   </p>
                   
                </div>
            </div>
        </div>
    </div>
    </section>
    </div>
  )
}

export default About