/*  src/sections/AboutSection.jsx  */
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext"; // ⬅  make sure the path matches

/* ———  Images ——— */
import AboutHand from "../assets/Images/AboutHand.png";
import Vector3 from "../assets/Images/Vector3.png";
import Vector4 from "../assets/Images/Vector4.png";
import Vector5 from "../assets/Images/Vector5.png";

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

const AboutSection = () => {
  const { theme } = useContext(ThemeContext); // "light" | "dark"

  /* A tiny helper: one filter turns any coloured PNG pure-white in dark mode */
  const iconStyle = {
    objectFit: "contain",
    filter: theme === "dark" ? "invert(1) brightness(1.8)" : "none",
  };

  return (
    <section id="about" className="about-section py-5">
      <Container className="position-relative">
        {/* ——— Hand graphic ——— */}
        <div className="HandImg">
          <img
            src={AboutHand}
            alt="pointing hand"
            className="about-hand d-none d-md-block"
          />
        </div>

        {/* ——— Headline ——— */}
        <h2 className="display-6 fw-bold mb-3 col-md-7 mx-auto">
          <span className="initial">T</span>his is it&nbsp;
          <span role="img" aria-label="wink">
            😉
          </span>
        </h2>
        <hr className="mb-4 col-md-5 mx-auto" />

        {/* ——— Body copy ——— */}
        <p className="about_text mx-auto">
          This is it. Anish Kr. Sinha is an Indian UI/UX Designer & Front-End
          Developer with a passion for designing beautiful and functional user
          experiences. Typically, he’s driven & permanently curious…
          {/* trimmed */}
        </p>

        {/* ——— Decorative vectors ——— */}
        <img src={Vector3} alt="" className="yellowvector" />
        <img src={Vector4} alt="" className="yellowvector4" />
        <img src={Vector5} alt="" className="grayvector" />

        {/* ——— Social icons ——— */}
        <div className="icon1">
          <ul className="list-unstyled d-flex flex-lg-column gap-3 fs-5 mt-lg-2">
            {socialIcons.map(({ name, img }) => (
              <li key={name}>
                <a
                  href="#"
                  title={name}
                  className={
                    theme === "dark"
                      ? "d-block text-light"
                      : "d-block text-dark"
                  }
                >
                  <img
                    src={img}
                    alt={`${name} icon`}
                    className="about_icon"
                    style={iconStyle}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
