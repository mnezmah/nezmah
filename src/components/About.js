import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'

export default function About() {
  return (
    <div id="About">
      <Title content='Who am i'></Title>
      <div className="about__container">
        <Subtitle content="About Me"></Subtitle>
        <div className="row">
          <div className="col-8">
            <p className="about__content">
              I am a web enthusiast. Anything related to designing, building and running web content is my passion. I put a lot of effort into my work always trying to get a great visual and functional result.</p>
            <p>   &#8221; Make your life a masterpiece; imagine no limitations on what you can be, have&nbsp;or&nbsp;do.&#8221;</p>
          </div>
          <div className="col-2">
            <img src="" alt="mario nezmah portrait" className="about__img"/>
          </div>
        </div>
      </div>
    </div>
  )
}
