import React from 'react'
import './ContactInfo.css'

function ContactInfo() {
  return (
    <div className='contact-info'>
        <address className='contact-address'>
        <a href="https://www.google.com/maps?q=1710+W+Chicago+Ave,+Chicago,+IL+60622" target="_blank" rel="noopener noreferrer">
        1710 W Chicago Ave,<br /> Chicago, IL 60622</a>
        </address>
        <div>
            <a href='tel:3126248665'>(312) 624-8665</a>
        </div>
    </div>

  )
}

export default ContactInfo