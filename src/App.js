import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import FAQs from './components/pages/FAQs';
import Careers from './components/pages/Careers';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact-us" element={<ContactUs/>}></Route>
          <Route path="/about-us" element={<AboutUs/>}></Route>
          <Route path="/faqs" element={<FAQs/>}></Route>
          <Route path="/careers" element={<Careers/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
