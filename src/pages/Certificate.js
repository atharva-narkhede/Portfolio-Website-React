import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../components/Particle";

const certificates = [
  {
    imgPath: "https://i.ibb.co/fdg1JvZ/flutter.jpg",
    title: "The Complete Flutter Development Bootcamp with Dart (Udemy)",
    link: "https://www.udemy.com/certificate/UC-09d4aaff-8f9e-4ac5-8699-8b4170b3dae1/",
  },
  {
    imgPath: "https://i.ibb.co/jZxcyBP/dbms.jpg",
    title: "Database Management System (NPTEL)",
    link: "https://drive.google.com/file/d/1t39tC40vgc7z2fEN34nFG8EKTC7TuR59/view?usp=sharing",
  },
  {
    imgPath: "https://i.ibb.co/nzHK0Gm/java.jpg",
    title: "Learn JAVA Programming - Beginner to Master (Udemy)",
    link: "https://www.udemy.com/certificate/UC-db8161f5-72b6-441c-be36-fd6c9faea245/",
  },
  {
    imgPath: "https://i.ibb.co/PC6nT6x/c.jpg",
    title: "Master C++ Programming From Beginner To Advance (Udemy)",
    link: "https://www.udemy.com/certificate/UC-c160d512-fcc2-4364-ae97-08b8cdfdb95d/",
  },
  {
    imgPath: "https://i.ibb.co/Fw7p1zs/problem-solving.png",
    title: "Problem Solving (Intermediate) (HackerRank)",
    link: "https://www.hackerrank.com/certificates/021436a0ac8d",
  },
  {
    imgPath: "https://i.ibb.co/sKH8hq0/problem-solving-basic.png",
    title: "Problem Solving (Basic) Certificate (HackerRank)",
    link: "https://www.hackerrank.com/certificates/8cc4effda345",
  },
  {
    imgPath: "https://i.ibb.co/BwMR1pm/java-basic.png",
    title: "Java (Basic) Certificate (HackerRank)",
    link: "https://www.hackerrank.com/certificates/01133ab657ee",
  },
  {
    imgPath: "https://i.ibb.co/z8qhNfD/sql-basic.png",
    title: "SQL (Basic) Certificate (HackerRank)",
    link: "https://www.hackerrank.com/certificates/021436a0ac8d",
  },
];

const Certificate = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="yellow">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my certificates showcasing my skills and accomplishments.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certificates.map((cert, index) => (
            <Col md={4} className="project-card" key={index}>
              <Card className="project-card-view">
                <Card.Img
                  variant="top"
                  src={cert.imgPath}
                  alt="Certificate"
                  style={{
                    height: "200px", // Adjust height to make the image smaller
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Button
                    variant="primary"
                    href={cert.link} // Link to open the certificate
                    target="_blank"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      flex: 1,
                    }}
                  >
                    Open
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Certificate;
