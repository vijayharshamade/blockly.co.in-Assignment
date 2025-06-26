import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Moon from "../assets/Images/Moon.png";
import Sun from "../assets/Images/Sun.png";
import LogoDark from "../assets/Images/LogoDark.png";
import LogoLight from "../assets/Images/LogoLight.png";

const NavigationBar = ({ active, onNavigate }) => {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-bs-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  const isActive = (name) =>
    active === name.toLowerCase()
      ? "fw-semibold text-decoration-underline"
      : "";

  return (
    <Navbar expand="lg" className="py-3 bg-transparent">
      <Container>
        <Navbar.Brand
          href="#"
          onClick={() => onNavigate("home")}
          className={`fw-bold d-flex align-items-center ${
            dark ? "text-white" : "text-dark"
          }`}
        >
          <img
            src={dark ? LogoLight : LogoDark}
            alt="logo"
            width="32"
            height="32"
            className="me-2"
          />
          ANISH KUMAR SINHA
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="gap-lg-4 fw-medium">
            {["Home", "About", "Resume", "Skills", "Projects", "Contact"].map(
              (txt) => (
                <Nav.Link
                  key={txt}
                  as="button" /* button, not anchor */
                  className={`bg-transparent border-0 p-0 ${isActive(txt)}`}
                  onClick={() => onNavigate(txt.toLowerCase())}
                >
                  {txt}
                </Nav.Link>
              )
            )}

            <Nav.Link
              as="button"
              className="bg-transparent border-0 p-0"
              title={dark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={() => setDark((p) => !p)}
            >
              <img
                src={dark ? Sun : Moon}
                alt="theme toggle"
                width="22"
                height="22"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
