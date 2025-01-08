import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si"; 
import logo from "../../assets/sLogo.png";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <span>Committed to driving innovation and excellence!</span>
        </Col>
        <Col md="4" className="footer-copywright">
          <span>Copyright © {year}</span>
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/RugungDaimary"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/_rugung_"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rugung-daimary-a279a9208/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/_rugung_/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="leetcode"
              >
                <SiLeetcode />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.codechef.com/users/rugung"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="codechef"
              >
                <SiCodechef />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
