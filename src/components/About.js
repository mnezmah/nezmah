import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import  portrait from '../Assets/Images/mario_nezmah.png'

export default function About() {
  return (
    <div id="About" className="mx-5">
      <Title content='Who am i'></Title>
      <div className="about__container">
        <Subtitle content="About Me"></Subtitle>
        <div className="row px-5">
          <div className="col-8 px-3">
            <p className="about__content">
              I am a web enthusiast. Anything related to designing, building and running web content is my passion. I put a lot of effort into my work always trying to get a great visual and functional result.</p>
            <p className="about__content">   &#8221; Make your life a masterpiece; imagine no limitations on what you can be, have&nbsp;or&nbsp;do.&#8221;</p>
          </div>
          <div className="col-4 justify-content-center">
            <img src={portrait} alt="mario nezmah portrait" className="about__img"/>
          </div>
        </div>
        <Subtitle content="Technologies I Use"></Subtitle>
      </div>
    </div>
  )
}
