import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import mountainLogo from '../Assets/Images/mountain-logo.png'

export default function NavbarComponent() {
  return (
    <React.Fragment>
      <Navbar
      variant="dark"
      fixed="top"
        expand="lg"
        className="homenav"
      >
        <Navbar.Brand href="#home">
          <img src={mountainLogo} alt="Nezmah logo" className="nezmah__logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" className="homenav__link">Home</Nav.Link>
            <Nav.Link href="#About" className="homenav__link" >About</Nav.Link>
            <Nav.Link href="#Goals" className="homenav__link">Goals</Nav.Link>
            <Nav.Link href="#Projects" className="homenav__link">Projects</Nav.Link>
            <Nav.Link href="#link" className="homenav__link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}
