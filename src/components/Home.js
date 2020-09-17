import React from 'react'
import Hero from './Hero'
import NavbarComponent from './NavbarComponent'
import About from './About'
import Goals from './Goals'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

export default function Home() {
  return (
    <div id="Home">
      <NavbarComponent/>
      <Hero/>
      <About/>
      <Goals/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
