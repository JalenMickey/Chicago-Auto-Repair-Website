// ServiceSection.js
import React from 'react';
import './ServiceSection.css';

function ServiceSection() {
  return (
    <div className="services-container">
      <img src='/images/services-photo.png' alt="Car" className="car-image" />
      <h2>Our Services</h2>
      <div className="services-text">
        <p>We offer a wide range of automotive services to keep your vehicle running smoothly. Here are some of the services we provide:</p>

        <ul>
          <li>Computer Diagnostics</li>
          <li>Brake Service & Repair</li>
          <li>Engine Repair</li>
          <li>Fuel Injector Service</li>
          <li>Factory Scheduled Maintenance</li>
          <li>Suspension Service & Repair</li>
          <li>Transmission Service & Repair</li>
          <li>Driveline Fluid Services</li>
          <li>Timing Chain, Belt, Water Pump Service</li>
          <li>Heating & AC Service</li>
          <li>2 & 4 Wheel Alignment</li>
          <li>Clutch Service & Repair</li>
          <li>CV & Axle Service & Repair</li>
          <li>Driveshaft Service</li>
          <li>Radiator & Fan Service & Repair</li>
          <li>Oil Service</li>
          <li>Pre-Purchase Vehicle Evaluation</li>
          <li>Tuning & Aftermarket Installs</li>
        </ul>

        <p>We work on all makes and models of vehicles and use only Original Equipment Manufacturer (OEM) and Original Equipment Supplier (OES) parts unless specified otherwise. This ensures that your vehicle is equipped with components made or approved by the brand itself, guaranteeing quality and reliability.</p>
      </div>
    </div>
  );
}

export default ServiceSection;
