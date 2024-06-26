import { Container, Col, Row } from "react-bootstrap";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import "./pages.scss";

function Contact() {
  return (
    <>
      <main>
        <Container fluid className="bg-image contact_intro">
          <h3 className="text-center fw-bold">Contact Us</h3>
        </Container>

        {/* Contact */}
        <Container className="mt-3 contact_carrier bg-primary">
          <Row className="contact-inner">
            <Col
              md={6}
              lg={6}
              sm={12}
              className="p-md-5 p-lg-5 p-0 bg-secondary"
            >
              <h2 className="fw-bold text-warning">Contact Information</h2>
              <p className="fw-normal text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                incidunt sequi soluta beatae voluptates ducimus?
              </p>

              <div className="contacts">
                <div className="contact-info">
                  <div className="contact_images mt-3">
                    <FaHome size={30} />
                  </div>
                </div>

                <div className="contact-info">
                  <div className="contact_images mt-3">
                    <HiOutlineMailOpen size={30} />
                  </div>
                </div>
                <div className="contact-info">
                  <div className="contact_images mt-3">
                    <FaPhoneAlt size={30} />
                  </div>
                  <h6 className="ms-3 mt-4 text-white me-0 mb-0">
                    (+234)80498578398 <br /> (+234)80495889384
                  </h6>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6} sm={12} className="bg-white p-md-5 p-lg-5 p-0">
              <h2 className="fw-bold text-dark">Get in touch</h2>
              <p className="fw-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                incidunt sequi soluta beatae voluptates ducimus?
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Contact;
