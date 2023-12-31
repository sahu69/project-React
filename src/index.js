import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/carusel/Carousel';
import About from './components/About';
import Footer from './components/footer/Footer';

  ReactDOM.render(
    
      <HashRouter>
        <React.StrictMode>
        {/* <Navbar/> */}
        <App/>
        {/* <Carousel/>
        <About/>
       <Footer/> */}
      </React.StrictMode>
    </HashRouter>,
    document.getElementById('root')
  )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
