import React from 'react'
import "./Navber.css"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from "../../images/tasklogo.png"
import CustomLink from '../CustomLInk/CustomLink'

const Navber = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='logodiv'>
                            <img src={logo} alt="" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto navbarName'>
                            <Navbar.Brand href="#aboutus">
                                About US
                            </Navbar.Brand>
                            <Navbar.Brand href="#projects">
                                PROJECTS
                            </Navbar.Brand>
                            <Navbar.Brand href="#diversification">
                                DIVERSIFICATION
                            </Navbar.Brand>
                            <Navbar.Brand href="#ourprocess">
                                OUR PROCESS
                            </Navbar.Brand>
                            <Navbar.Brand >
                                <CustomLink to="/careers">CAREERS</CustomLink>

                            </Navbar.Brand>
                            <Navbar.Brand className='contact'>
                                <CustomLink to="/contact">Contact US</CustomLink>
                            </Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navber