import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfilePic from "../../assets/profile-pic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Atharva Narkhede</span> and I'm from <span className="yellow">Pune, MH, India</span>.
              <br />
              <br />
              I am a final year B.Tech CSE student at SRM University, graduating in 2025.
              <br />
              <br />
              As a <b className="yellow">Full-Stack Developer</b>, I enjoy tackling new challenges and continuously expanding my skill set. I am proficient in 
              <b className="yellow"> JavaScript, C++, Python</b>.
              <br />
              <br />
              I have a passion for working with <b className="yellow">Node.js, MongoDB,</b> and modern JavaScript libraries and frameworks like 
              <i><b className="yellow"> React.js</b></i>. I am also interested in building new 
              <i><b className="yellow"> Web Technologies and Products</b></i> and exploring areas related to 
              <i><b className="yellow"> Data Science & Machine Learning</b></i>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={ProfilePic} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="yellow">connect</span> with me.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/atharva-narkhede"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AtharvaNarkhed9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/atharva-narkhede-3095b024a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/atharva-narkhede"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="leetcode"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
