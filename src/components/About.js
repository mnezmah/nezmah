import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import Logo from './Logo'

import portrait from '../Assets/Images/mario_nezmah.png'
import { logos } from '../Data/Logos'

export default function About() {
  return (
    <div id="About" className="container justify-content-center my-lg-5">

      {/* Title */}
      <Title content='Who am i' cssClass='about__title'></Title>

      {/* Container */}
      <div className="about__container mx-md-5">

        {/* Subtitle */}
        <Subtitle content="About Me" cssClass="pl-md-5 pt-5"></Subtitle>

        {/* content */}
        <div className="row px-5">
          <div className="col-12 col-lg-8 px-3">
            <p className="about__content">
              I am a web enthusiast. Anything related to designing, building and running web content is my passion. I put a lot of effort into my work always trying to get a great visual and functional result.</p>
            <p className="about__content">   &#8221; Make your life a masterpiece; imagine no limitations on what you can be, have&nbsp;or&nbsp;do.&#8221;</p>
          </div>

          {/* image */}
          <div className="col-12 col-lg-4 text-center p-0">
            <img src={portrait} alt="mario nezmah portrait" className="about__img my-4 my-lg-0" />
          </div>
        </div>
        <Subtitle content="Technologies I Use" cssClass="pl-md-5"></Subtitle>

        {/* icons */}
        <div className="row text-center px-md-5 pb-4">
          {logos.map(logo => {
            return  <div key={logo.id} className="col-4 col-sm-2">
              <Logo src={logo.src} alt={Logo.alt} />
              <p className="Logo__title" >{logo.title}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
