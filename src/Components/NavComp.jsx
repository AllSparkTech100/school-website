import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "../app.scss";
import { useState } from "react";
// import { FaHome } from "react-icons/fa";
// import { FcAbout } from "react-icons/fc";
// import { PiStudent } from "react-icons/pi";

function NavComp() {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > 10) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const headerStyle = {
  //   position: "fixed",
  //   top: "0",
  //   zIndex: "9999",
  //   width: "100vw",
  //   transition: "background-color 0.3s ease",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContents: "space-between",
  //   height: "5rem",
  //   backgroundColor: "#034A7F",
  // };

  return (
    <>
      <header>
        <Navbar expand="lg" fixed="top" className="mt-2">
          <Container fluid="sm">
            <Navbar.Brand href="/" className="heading text-white fw-bold">
              Nerissa High School
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="shadow-none d-none border-2 border-primary "
              variant="secondary"
            />

            <Navbar.Collapse id="basic-navbar-nav shadow-none">
              <Nav className="w-100 nav_heading align-items-md-center justify-content-md-between">
                <Nav.Link href="/" className="text-white fw-semibold fs-6 me-4">
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  className="text-white fw-semibold fs-6 me-4"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  href="/admission"
                  className="text-white fw-semibold fs-6 me-4"
                >
                  Admission
                </Nav.Link>
                <Nav.Link
                  href="/updates"
                  className="text-white fw-semibold fs-6 me-4"
                >
                  Updates
                </Nav.Link>
                <Nav.Link
                  href="/contact"
                  className="text-white fw-semibold fs-6 me-4"
                >
                  Contact
                </Nav.Link>
                <Nav.Link
                  href="/rules"
                  className="text-white fw-semibold fs-6 me-4"
                >
                  Rules and Regulations
                </Nav.Link>
                <Nav.Link href="/" className="text-white fw-semibold fs-6">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button
              className="d-lg-none d-sm-block shadow-none border-0 rounded-5 menu_iconn "
              variant="secondary"
              onClick={toggleMenu}
            >
              {isMenuVisible ? "X" : "Menu"}
            </Button>
          </Container>
        </Navbar>
        {isMenuVisible && (
          <Container fluid className="menu_carrier">
            <div className="menu_inner">
              <ul>
                <Nav.Link href="/" className="">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="">
                  About
                </Nav.Link>
                <Nav.Link href="/admission" className="">
                  Admission
                </Nav.Link>
                <Nav.Link href="/updates" className="">
                  Updates
                </Nav.Link>
                <Nav.Link href="/contact" className="">
                  Contact
                </Nav.Link>
                <Nav.Link href="/rules" className="">
                  Rules and Regulation
                </Nav.Link>
                <Nav.Link href="/" className="">
                  Login
                </Nav.Link>
              </ul>
            </div>
          </Container>
        )}
      </header>
    </>
  );
}

export default NavComp;
