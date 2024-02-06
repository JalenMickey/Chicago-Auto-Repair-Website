import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import FAQs from './components/pages/FAQs';
import Careers from './components/pages/Careers';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/services" exact element={<Services/>}></Route>
          <Route path="/contact-us" exact element={<ContactUs/>}></Route>
          <Route path="/about-us" exact element={<AboutUs/>}></Route>
          <Route path="/faqs" exact element={<FAQs/>}></Route>
          <Route path="/careers" exact element={<Careers/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
