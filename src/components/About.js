import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import Logo from './Logo'

import portrait from '../Assets/Images/mario_nezmah.png'
import bitbucket from '../Assets/Images/bitbucket.png'
import css from '../Assets/Images/css.png'
import ex from '../Assets/Images/ex.png'
import fire from '../Assets/Images/fire.png'
import git from '../Assets/Images/git.png'
import github from '../Assets/Images/github.png'
import graph from '../Assets/Images/graph.png'
import html from '../Assets/Images/html.png'
import jest from '../Assets/Images/jest.png'
import js from '../Assets/Images/js.png'
import npm from '../Assets/Images/npm.png'
import postgres from '../Assets/Images/postgres.png'
import react from '../Assets/Images/react.png'
import sass from '../Assets/Images/sass.png'
import wp from '../Assets/Images/wp.png'


export default function About() {
  return (
    <div id="About" className="my-5">
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
            <img src={portrait} alt="mario nezmah portrait" className="about__img" />
          </div>
        </div>
        <Subtitle content="Technologies I Use"></Subtitle>
        <div className="row text-center px-5">
          <Logo src={html} alt="html5 logo" />
          <Logo src={css} alt="css3 logo" />
          <Logo src={js} alt="js logo" />
          <Logo src={sass} alt="sass logo" />
          <Logo src={react} alt="react logo" />
          <Logo src={jest} alt="jest logo" />
          <Logo src={npm} alt="npm logo" />
          <Logo src={ex} alt="express logo" />
          <Logo src={postgres} alt="postgresql logo" />
          <Logo src={graph} alt="graphql logo" />
          <Logo src={git} alt="git logo" />
           </div>
          <div className="row text-center justify-content-center">
            <div className="col-8">
                <Logo src={github} alt="github logo" />
            <Logo src={wp} alt="wordpress logo" />
            <Logo src={fire} alt="firebase logo" />
            <Logo src={bitbucket} alt="bittbucket logo" />
            </div>
          </div>
      </div>
    </div>
  )
}
