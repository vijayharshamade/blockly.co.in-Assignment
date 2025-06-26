import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HeroImg from "../assets/Images/HeroImg.png";
import Facebook from "../assets/Images/Facebook.png";
import Instagram from "../assets/Images/Instagram.png";
import Twitter from "../assets/Images/Twitter.png";
import LinkedIn from "../assets/Images/LinkedIn.png";
import GitHub from "../assets/Images/GitHub.png";
import Koo from "../assets/Images/Koo.png";
import Telegram from "../assets/Images/Telegram.png";
const socialIcons = [
  { name: "Facebook", img: Facebook },
  { name: "Instagram", img: Instagram },
  { name: "Twitter", img: Twitter },
  { name: "LinkedIn", img: LinkedIn },
  { name: "Telegram", img: Telegram },
  { name: "GitHub", img: GitHub },
  { name: "Koo", img: Koo },
];

const HeroSection = () => {
  return (
    <section id="home" className="py-5 mt-lg-4">
      <Container>
        <Row className="align-items-center g-5">
          {/* Left column */}
          <Col lg={6} className="order-2 order-lg-1">
            <span className=" hello_text  d-inline-block mb-3 text-white fw-bold px-4 py-2">
              Hello!
            </span>

            <h1 className="display-5 fw-bold mb-3">
              I’m{" "}
              <span className="text-decoration-underline text-secondary">
                Anish
              </span>{" "}
              <span role="img" aria-label="waving hand">
                👋
              </span>
            </h1>

            <p className="lead text mb-4">
              UI/UX Designer, Front-End Developer &amp; Thinker.
              <br />
              Based in India.
            </p>

            <div className="d-flex flex-wrap gap-3 name_btn">
              <Button variant="warning" size="lg" className="px-4 fw-semibold">
                Download CV
              </Button>
              <Button variant="dark" size="lg" className="px-4 fw-semibold">
                Get in Touch!
              </Button>
            </div>

            {/* Social icons */}
            <div className="icons1">
              <ul className="list-unstyled d-flex flex-lg-column gap-3 fs-5 mt-lg-2 ">
                {socialIcons.map(({ name, img }) => (
                  <li key={name}>
                    <a href="#" className="text-dark d-block" title={name}>
                      <img
                        src={img}
                        alt={`${name} icon`}
                        style={{ objectFit: "contain" }}
                        className="icons"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Right column */}
          <Col
            lg={6}
            className="order-1 order-lg-2 d-flex justify-content-center"
          >
            <div className="hero-img-wrapper">
              <div className="hero-blob"></div>
              <img
                src={HeroImg}
                alt="Anish portrait"
                className="img-fluid hero-img"
              />
              <div className="hero-frame"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
