import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/icons8-github.svg'
import navIcon2 from '../assets/img/icons8-linkedin.svg'
import navIcon3 from '../assets/img/icons8-instagram.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h3>LOGO</h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/ffifee"><img src={navIcon1} alt="GitHub" /></a>
              <a href="https://www.linkedin.com/in/matej-bukovic/"><img src={navIcon2} alt="LinkedIn" /></a>
              <a href="https://instagram.com/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}