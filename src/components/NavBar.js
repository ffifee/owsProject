import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';
import navIcon1 from '../assets/img/icons8-github.svg'
import navIcon2 from '../assets/img/icons8-linkedin.svg'
import navIcon3 from '../assets/img/icons8-instagram.svg'
import cv from '../assets/cv/Matej_Bukovic_CV_EN.pdf'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (

    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <h3>LOGO</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home') }>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://github.com/ffifee"><img src={navIcon1} alt="GitHub"/></a>
                <a href="https://www.linkedin.com/in/matej-bukovic/"><img src={navIcon2} alt="LinkedIn"/></a>
                <a href="https://instagram.com/"><img src={navIcon3} alt=""/></a>
            </div>
            <a className="vvd" href={cv} download='Matej_CV'><span>Download CV</span></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
}