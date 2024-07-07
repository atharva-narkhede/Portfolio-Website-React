import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import photo_contest from "../assets/projects/photo-contest.png";
import ecomm from "../assets/projects/ecomm.png";
import weather from "../assets/projects/weather.png";
import marketBasket from "../assets/projects/project.jpeg";
import personalPortfolio from "../assets/projects/portfolioo.png";
import alzheimerResearch from "../assets/projects/pg.png";
import bmiCalculator from "../assets/projects/bmicalc.png";
import stickynotes from "../assets/projects/stickynotes.png";

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
              imgPath={photo_contest}
              isBlog={false}
              title="Photography Contest Website"
              description="The Photography Contest Website, developed using the MERN stack, facilitates seamless participation for photographers in contests through user-friendly interfaces for photo uploads, voting, and contest management. Admins efficiently oversee contests with features for creation, updating, and deletion, ensuring smooth photo management. The platform fosters community engagement and talent showcasing, enhancing user experience and fostering a vibrant photography community."
              techStack={["React","express", "Node.js", "MongoDB"]}
              ghLink="https://github.com/atharva-narkhede/Photography_Contest_ReactJS"
              demoLink="https://photography-contest-a6a50.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomm}
              isBlog={false}
              title="E-Commerce MERN Stack"
              description="This project is a full-featured E-Commerce application built with ReactJS. It supports user authentication, product listings, and cart functionalities. The app is deployed on Firebase, and the backend API is hosted on Render."
              techStack={["React", "Bootstrap", "express","Node.js", "MongoDB", "Firebase"]}
              ghLink="https://github.com/atharva-narkhede/E-CommerceSite_ReactJS"
              demoLink="https://e-commerce-a3b26.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Forecast GUI with Python"
              description="The Weather Forecast App is a Python-based GUI application designed to provide comprehensive weather details for a specified location. It leverages various weather parameters to offer users a detailed and accurate forecast."
              techStack={["Python"]}
              ghLink="https://github.com/atharva-narkhede/Weather-Forecast-Python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marketBasket}
              isBlog={false}
              title="Market Basket Analysis for Amazon Product Recommendation"
              description="Conducted Market Basket Analysis (MBA) on Amazon product dataset to enhance recommendations. Identified top-selling products and top products in each category using review count. Implemented association rule mining for personalized recommendations. Evaluated effectiveness through metrics."
              techStack={["Python", "Pandas", "NumPy","Kaggle"]}
              ghLink="https://github.com/atharva-narkhede/Market-Basket-Analysis-for-Amazon-Product-Recommedation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personalPortfolio}
              isBlog={false}
              title="Personal Portfolio App with Flutter"
              description="Developed a personal portfolio app using Flutter, featuring various pages including skills, projects, education, contact, and certificates. Implemented a clean and user-friendly interface to showcase skills and projects effectively. Utilized Flutter’s widgets and plugins to create dynamic and interactive pages, enhancing user experience and engagement."
              techStack={["Flutter", "Dart"]}
              ghLink="https://github.com/atharva-narkhede/portfolio-flutter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alzheimerResearch}
              isBlog={false}
              title="Alzheimer Disease Detection Research Project"
              description="Conducted research on Alzheimer’s disease detection using a dataset and employing fuzzy rough set theory along with machine learning algorithms such as Support Vector Machine (SVM) and k-Nearest Neighbors (KNN). Achieved 90% accuracy in disease prediction using SVM."
              techStack={["Python", "Scikit-learn","Kaggle"]}
              ghLink="https://github.com/atharva-narkhede/Alzheimer-Disease-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bmiCalculator}
              isBlog={false}
              title="BMI Calculator App using Flutter"
              description="The BMI Calculator Flutter App, built with Flutter and Dart, swiftly calculates Body Mass Index (BMI) for both Android and iOS users. It seamlessly guides users through entering their age, height, weight, and gender, then provides personalized insights and ideal weight ranges based on their calculated BMI. This user-friendly app features a clean, intuitive interface and clear instructions, making it accessible to people of all technical backgrounds."
              techStack={["Flutter", "Dart"]}
              ghLink="https://github.com/atharva-narkhede/bmi_calculator_flutter"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stickynotes}
              isBlog={false}
              title="Sticky Notes App"
              description="Sticky Notes App is a simple and intuitive Android application developed in Android Studio using Java. It allows users to create, edit, and manage their notes conveniently. This app is designed to be user-friendly, providing a seamless experience for organizing your thoughts and tasks on the go."
              techStack={["Java", "Android","AndroidStudio"]}
              ghLink="https://github.com/atharva-narkhede/Sticky_Notes_Android"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
