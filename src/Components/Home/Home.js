import React from 'react'
import './home.css'
import viedo from '../../Assets/video.mp4'

const Home = () => {
  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={viedo} muted autoPlay loop type='viedo/mp4'></video>
    </section>
  )
}

export default Home
