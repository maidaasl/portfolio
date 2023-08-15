import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avaImage from '../../assets/ava.png';
import './Home.css';

function Home() {
  return (
    <Container className="home-content">
        <Row>
        <Col md={7} className="home-header">
            <h1 className="heading">
                Hello!👋🏻
            </h1>

            <h1 className="heading-name">
                I'm
                <strong className="main-name"> Maida </strong>
                Saniyah Lutfi
            </h1>
        </Col>

        <Col md={5}>
            <img
            src={avaImage}
            alt="pic"
            style={{ maxHeight: "350px" }}
            />
        </Col>
        </Row>
    </Container>
  );
}

export default Home;