import React from 'react'
import './GoogleLocation.css'

function GoogleLocation() {
  return (
    <div className="google-container">
        <a href="https://www.google.com/maps/place/1710+W+Chicago+Ave,+Chicago,+IL+60622/@41.8963097,-87.6729995,17z/data=!3m1!4b1!4m6!3m5!1s0x880fd2cd2a708601:0xe44b08219b6a9d58!8m2!3d41.8963097!4d-87.6704246!16s%2Fg%2F11b8z1hqkq?entry=ttu" target="_blank" rel="noopener noreferrer">
        <iframe
            src="https://storage.googleapis.com/maps-solutions-nlcuikhzal/locator-plus/5hn0/locator-plus.html"
            width="100%" height="450" // Adjust height as needed
            style={{ border: 0 }} // Pass style as a JavaScript object
            loading="lazy"
            title="Google Map"
            allowFullScreen
        >
        </iframe>
        </a>

    </div>
  )
}

export default GoogleLocation