import React from 'react'
import sunset from '../Assets/Images/sunset.jpg'

export default function Goals() {
  return (
    <div id="Goals" className="row text-center">
      <div className="col-8 offset-2">
         <h2 className="goals__quote py-5">"My work will lead me toward unimaginable places."</h2>
      <p className="goals__content">Always do great work. Every site I build should be like a masterpiece, so let the thing I have done speak of myself.My goal is to fulfill every client’s dreams of a perfect fully functional website.</p>
      <div className="row">
        <span className="separator my-5"/>
      </div>

      <p className="goals__content">With the years of experience to come, I eagerly expect a lot of fun projects with satisfied customers. To strive for greatness and enjoy getting better with every project that I realize and become well known for my style is a great motivation for putting a lot of effort into my work.</p>
      <img className="goals__img" src={sunset} alt="man standing at the summit in sunset"/>
      <h4 className="goals__moto">opportunities don't happen, you create them.</h4>
      </div>
     
      
    </div>
  )
}
