import React from 'react'
import './ContactInfo.css'

function ContactInfo() {
  return (
    <div className='contact-info'>
        <div className='contact-number'>
            <a href='tel:3126248665' >&#128241; (312) 624-8665  </a>
        </div>
        <address className='contact-address'>
        &#8982;
        <a href="https://www.google.com/maps?q=1710+W+Chicago+Ave,+Chicago,+IL+60622" target="_blank" rel="noopener noreferrer">
        1710 W Chicago Ave, Chicago, IL 60622</a>
        </address>
    </div>

  )
}

export default ContactInfo