import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import "./Social.css";

const Social = () => {
  return (
    <Container style={{ padding: "30px" }}>
      <Row>
        <Col md={12} className="contact-social">
          <div className="contact-text">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
          </div>
          <ul className="contact-social-links">
            <li className="contact-icons">
              <a
                href="https://github.com/RugungDaimary"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://x.com/_rugung_"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.linkedin.com/in/rugung-daimary-a279a9208/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://leetcode.com/_rugung_/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <SiLeetcode />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.codechef.com/users/rugung"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
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

export default Social;
