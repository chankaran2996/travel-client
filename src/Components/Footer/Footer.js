import React from 'react'
import './footer.css'
import videoF from '../../Assets/viedoF.mp4'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='viedoDiv'>
        <video src={videoF} loop autoPlay muted type="video/mp4"></video>
      </div>
    </section>
  )
}

export default Footer

