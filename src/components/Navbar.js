import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="/Home" id="home"><span>H</span>ome</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span><i className="fa-solid fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
             <a className='nav-link' href='/gallery'>Gallery</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/contactpage">Contact Page</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Search"/>
              <button className="btn btn-outline-warning" type="button">Search</button>
            </form>
          </div>
        </div>
      </nav>
  )
}
