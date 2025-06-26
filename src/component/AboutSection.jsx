import { Container } from "react-bootstrap";
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

const AboutSection = () => (
  <section id="about" className="about-section py-5">
    <Container className="position-relative">
      {/*  Hand graphic  */}
      <div className="HandImg">
        <img
          src={AboutHand}
          alt="pointing hand"
          className="about-hand d-none d-md-block"
        />
      </div>

      <h2 className="display-6 fw-bold mb-3 col-md-7 mx-auto">
        <span className="initial">T</span>his is it&nbsp;
        <span role="img" aria-label="wink">
          ;)
        </span>
      </h2>

      <hr className="mb-4 col-md-5 mx-auto" />

      {/*  Body copy  */}
      <p className="about_text  mx-auto">
        This is it. Anish Kr. Sinha is an Indian UI/UX Designer & Front End
        Developer with a passion for designing beautiful and fuctional user
        experiences. Typically, he’s Driven & permanently Curious. He’s obsessed
        with designing things and even more obsessed with designing cool & clean
        stuff for the web and mobile. He has been in the business of creating
        since he hung his first painting on the wall when he was 11. He holds a
        bachelor degree in Computer Applications. During his graduation, he has
        been actively involved in the web design community for the last 3 years.
        he has designed websites for small businesses, events, nonprofits and
        more. Currently he’s based in Bihar, India. Where he’s working as an
        independent creative. His interests, however, extend beyond the web and
        he loves helping people with branding and print design. He even loves
        designing 3D floor plan. When he’s not designing, he’s probably hanging
        out with his girlfriend, watching series, sketching or messing around on
        something inspired by YouTube tutorials.
      </p>

      <img src={Vector3} alt="" className="yellowvector" />
      <img src={Vector4} alt="" className="yellowvector4" />
      <img src={Vector5} alt="" className="grayvector" />
      {/* Social icons */}
      <div className="icon1">
        <ul className="list-unstyled d-flex flex-lg-column gap-3 fs-5 mt-lg-2 ">
          {socialIcons.map(({ name, img }) => (
            <li key={name}>
              <a href="#" className="text-dark d-block" title={name}>
                <img src={img} alt={`${name} icon`} className="about_icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </section>
);

export default AboutSection;
