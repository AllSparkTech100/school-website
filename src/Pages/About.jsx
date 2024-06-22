import "./pages.scss";
import { Container, Col, Row } from "react-bootstrap";
import { RiSchoolLine } from "react-icons/ri";
import { ImBooks } from "react-icons/im";
import { PiStudentLight } from "react-icons/pi";
import { GrCertificate } from "react-icons/gr";

function About() {
  return (
    <>
      <main>
      {/* Intro */}
        <Container fluid className="bg-image about_intro">
          <h2 className="fw-bold text-center">About Us</h2>
        </Container>

{/* ICons */}
        <Container className="duties">
          <Row>
          <Col>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <ImBooks className='text-primary' size={50} />
                <h4>Our Programs</h4>
              </div>
            </Col>
            <Col>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <RiSchoolLine className='text-primary' size={50} />
                <h4>Our History</h4>
              </div>
            </Col>
            <Col>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <ImBooks className='text-primary' size={50} />
                <h4>Research</h4>
              </div>
            </Col>
            <Col>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <PiStudentLight className='text-primary' size={50} />
                <h4>Students</h4>
              </div>
            </Col>
            <Col>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <GrCertificate className='text-primary' size={50} />
                <h4>High QUality</h4>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Learning Steps */}
        <Container>
          <Row>
            <Col>
              <h3 className="fw-semibold">
                Welcome to Online Learning, you have important steps
              </h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, cumque?</p>
              <p><span>&lquo;</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, cumque?</p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default About;
