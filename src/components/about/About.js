import React from "react";
import { Container} from "react-bootstrap";
import './About.css';

function About() {
  return (
    <>
    <Container className="about-section">
       <h1>About Me</h1>
       <p>
       I have a passion for <strong>front-end</strong> development and <strong> UX design</strong>.<br/>
       I believe that creating beautiful and functional interfaces is
       crucial in creating a great user experience.<br/>
       I have experience using HTML, CSS, JavaScript, and ReactJS to create responsive web applications.<br/>
       Check out my portfolio to see some of my projects!
       </p>
    </Container>
    </>
  );
}

export default About;