import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Services from './Components/Services';
import Products from './Components/Products';
import SignUp from './Components/SignUp';
import Donate from './Components/Donate';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <div className="App">
    {
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact-us' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/location' element={<SignUp/>} />
          <Route path='/donate' element={<Donate/>} />
          
        </Routes>
        <Footer />
      </Router>}
      </div>
    </>
  );
}

export default App;