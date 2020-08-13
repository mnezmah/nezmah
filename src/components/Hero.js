import React from 'react'
import nightSky from '../Assets/Video/nightSky.mp4'

export default function Hero() {
  return (
    <div id="Hero">
      <video className="video" autoPlay loop muted>
        <source src={nightSky} type="video/mp4" />
      </video>
      <div className="hero__title ml-5">
    <h1 className="display">MARIO</h1>
    <h1 className="display">NEZMAH</h1>
    <h5 className="subtitle">Web Developer</h5>
      </div>
    </div>
  )
}
