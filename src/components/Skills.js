import Container from 'react-bootstrap/Container';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  { Row, Col } from "react-bootstrap";
import py from "../assets/img/python-svgrepo-com.svg"
import uni from "../assets/img/linux-svgrepo-com.svg"
import dat from "../assets/img/data-report-svgrepo-com.svg"
import webdev from "../assets/img/web-development-svgrepo-com.svg"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                      <h2>Skills</h2>
                      <p>Excellent knowledge of computer hardware and software and active work with programming languages. Recognized for ability to do quality work tasks, solving business problems and the ability to work independently and work in teams.</p>
                      <Carousel responsive={responsive} infinite={true} className='skills-slider'>
                        <div className='item'>
                          <img src={py} alt ="Image" />
                          <h5>Python</h5>
                        </div>
                        <div className='item'>
                          <img src={uni} alt ="Image" />
                          <h5>Unix</h5>
                        </div>
                        <div className='item'>
                          <img src={dat} alt ="Image" />
                          <h5>Data & Algos</h5>
                        </div>
                        <div className='item'>
                          <img src={webdev} alt ="Image" />
                          <h5>Web development</h5>
                        </div>
                      </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )

}