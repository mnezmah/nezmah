import React from 'react'
import Hero from './Hero'
import NavbarComponent from './NavbarComponent'
import About from './About'
import Goals from './Goals'

export default function Home() {
  return (
    <div> 
      <NavbarComponent></NavbarComponent>
      <Hero/>
      <About/>
      <Goals/>
    </div>
  )
}
