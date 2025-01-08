import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

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
              Hi there! <br />I am currently pursuing a Bachelor's degree in
              Information Technology at Delhi Technological University,
              graduating in 2025. I am interning at{" "}
              <b className="yellow">STMicroelectronics</b> and am proficient in{" "}
              <b className="yellow">JavaScript</b>, with a strong command of
              programming languages such as <b className="yellow">C++</b>,{" "}
              <b className="yellow">Java</b>, and{" "}
              <b className="yellow">Python</b>. My expertise includes{" "}
              <b className="yellow">Data Structures</b>,{" "}
              <b className="yellow">Algorithms</b>,{" "}
              <b className="yellow">Database Management Systems</b>,{" "}
              <b className="yellow">Computer Networks</b>, and{" "}
              <b className="yellow">Object-Oriented Programming</b>.
              <br />
              <br />I have developed multiple projects using{" "}
              <b className="yellow">ReactJS</b>,{" "}
              <b className="yellow">MongoDB</b>,{" "}
              <b className="yellow">NodeJS</b>, and{" "}
              <b className="yellow">ExpressJS</b>, showcasing my full-stack
              development skills. Additionally, I have a solid understanding of{" "}
              <b className="yellow">AI</b> and{" "}
              <b className="yellow">Machine Learning</b>, and I am always eager
              to learn and adapt to new technologies.
              <br />
              <br />
              Beyond academics, I am passionate about helping others by
              mentoring juniors and sharing knowledge. In my free time, I enjoy
              playing <b className="yellow">football</b>, which keeps me active
              and refreshed.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RugungDaimary"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/_rugung_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rugung-daimary-a279a9208/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/_rugung_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="leetcode"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.codechef.com/users/rugung"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="codechef"
                >
                  <SiCodechef />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
