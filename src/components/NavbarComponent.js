import React, { useState, useRef } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import useSmoothScroll from 'react-smooth-scroll-hook'
import nezmahLogo from '../Assets/Images/nezmah-logo.png'


export default function NavbarComponent() {
  const [navbar, setNavbar] = useState(false)
  const ref = useRef(document.documentElement)

  window.onscroll = function (e) {
    (this.oldScroll > this.scrollY) ? setNavbar(false) : setNavbar(true)
    this.oldScroll = this.scrollY
  }

  const { scrollTo } = useSmoothScroll({
    ref,
    speed: 50,
    direction: 'y'
  })

  return (
    <React.Fragment>
      <Navbar
        variant="dark"
        fixed="top"
        expand="lg"
        className={navbar ? 'homenav hidden' : 'homenav'}
      >
        <Navbar.Brand href="#home">
          <img src={nezmahLogo} alt="Nezmah logo" className="nezmah__logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => { scrollTo('#Home') }} className="homenav__link">Home</Nav.Link>
            <Nav.Link onClick={() => { scrollTo('.about__title')}} className="homenav__link" >About</Nav.Link>
            <Nav.Link onClick={() => { scrollTo('#Goals') }} className="homenav__link">Goals</Nav.Link>
            <Nav.Link onClick={() => { scrollTo('#Projects') }} className="homenav__link">Projects</Nav.Link>
            <Nav.Link onClick={() => { scrollTo('#Contact') }} className="homenav__link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}
