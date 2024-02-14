import React from 'react';
import './CareerInfo.css'; // Don't forget to create a CSS file for styling

function CareerInfo() {
  return (
    <div className='career-container'>
      <img
        className='career-image'
        src='/images/IMG_4229.jpg'
        alt='Career'
      />
      <p>Careers</p>
      <div className='career-text'>
      <p>
        At Chicago Auto Repair, we are constantly on the lookout for exceptional talent. We take pleasure in discovering individuals who are intelligent, creative, and share a strong connection with our team, our valued customers, and the vibrant automotive community. Our commitment to positivity and diversity is unwavering, and we provide people with the opportunity to explore, grow, and contribute to shaping our collective future. If you're the type of person who sits behind the wheel and experiences a thrilling "WOW" moment, then you might just find your forever home with us.
      </p>

        <ul>
          <p>What would make you a great fit at Chicago Auto Repair?</p>
          <li>Integrity</li>
          <li>Collaboration</li>
          <li>Strong Work Ethic</li>
          <li>Ability to appreciate, inspire, and be inspired by others</li>
          <li>A desire to grow and contribute</li>
          <li>Excitement about the opportunity to make great things happen for the customer and your team</li>
        </ul>
        <p>
          At Chicago Auto Repair, we believe that you can fulfill your life's true purpose by doing what you love. How amazing does that sound?
        </p>
      </div>
    </div>
  );
}

export default CareerInfo;
