import React from 'react'
import nightSky from '../Assets/Video/nightSky.mp4'

export default function Hero() {
  return (
    <div id="Hero">
      <video className="video d-none d-md-block" autoPlay loop muted>
        <source src={nightSky} type="video/mp4" />
        <img src="../../Assets/Images/nezmah-background.jpeg" alt="nezmah background"/>
      </video>
      <div className="hero__title ml-3 ml-sm-5">
        <h1 className="display mt-5">MARIO</h1>
        <h1 className="display">NEZMAH</h1>
        <h5 className="subtitle">Web Developer</h5>
      </div>
    </div>
  )
}