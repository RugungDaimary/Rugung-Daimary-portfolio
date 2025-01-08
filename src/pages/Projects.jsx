import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import learnspace from "../assets/projects/learnspace.png";
import codeit from "../assets/projects/codeit.png";
import hosMgnt from "../assets/projects/hosMgnt.png";
import datacrypt from "../assets/projects/datacrypt.png";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learnspace}
              isBlog={false}
              title="LearnSpace-Ed Tech Platform "
              description="LearnSpace is an interactive ed-tech platform with a responsive React and Material-UI front-end. It offers real-time updates, course browsing, and notifications. The platform supports full CRUD functionality for instructors to manage courses and students to rate and review them. A secure password reset system ensures convenience. The back-end uses Node.js, Express, and MongoDB for efficient data storage, error handling, and input validation."
              demoLink="https://learn-space-ed.vercel.app/"
              ghLink="https://github.com/RugungDaimary/LearnSpace_Ed_Tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeit}
              isBlog={false}
              title="CodeIt-SearchEngine"
              description="CodeIt-SearchEngine is a high-performance search platform designed for 3000+ coding problems from sites like LeetCode, InterviewBit, and Codeforces. Built with Selenium, it features advanced techniques like BM25 and TF-IDF for efficient document ranking, ensuring fast and accurate search results. The platform optimizes performance with RAM-based indexes and includes error handling for edge cases such as number-word conversion and lemmatization."
              demoLink="https://codeit-searchengine-c03y.onrender.com/"
              ghLink="https://github.com/RugungDaimary/CodeIt_SearchEngine"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datacrypt}
              isBlog={false}
              title="DataCrypt"
              description="DataCrypt is a robust client-side encryption solution for secure cloud storage. It leverages Elliptic Curve Cryptography (ECC) for secure key exchange and AES-256 encryption to ensure the confidentiality of sensitive data. The application also incorporates OTP generation for secure user authentication and integrates SMTP for email notifications. Developed using Java 21 and Servlet API, this project provides end-to-end encryption, dynamic key management, and secure communication protocols for enhanced privacy and security in cloud storage solutions."
              ghLink="https://github.com/RugungDaimary/DataCrypt"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hosMgnt}
              isBlog={false}
              title="Hospital Management System"
              description="The Hospital Management System simplifies hospital operations like patient care, billing, and resource management. Developed in Java using JDBC for MySQL, it includes 10 entities (Hospital, Doctor, Patient, Bill, etc.) and 8 relationships to manage interactions. It ensures smooth handling of patients, billing, and room allocation while maintaining accurate and organized data."
              ghLink="https://github.com/RugungDaimary/Hospital-Management-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects