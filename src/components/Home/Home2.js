import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A <span className="purple"> PROPOS </span> DE MOI
            </h1>
            <p className="home-about-body">
              J’ai découvert la programmation par curiosité, et depuis, c’est
              devenu une vraie passion ! 🚀
              <br />
              <br />
              Je travaille avec des langages comme
              <i>
                <b className="purple"> Javascript. </b>
              </i>
              <br />
              <br />
              Je m’intéresse surtout au &nbsp;
              <i>
                <b className="purple">
                  développement d’applications web performantes{" "}
                </b>{" "}
                ainsi qu’ aux nouvelles <b className="purple">technologies.</b>
              </i>
              <br />
              <br />
              Quand j’en ai l’opportunité, j’aime créer des projets avec{" "}
              <b className="purple">Node.js</b> et
              <i>
                <b className="purple"> les librairies Javascript</b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>MES CONTACTS</h1>
            <p>
              N’hésitez pas à me
              <i>
                <b className="purple">
                  {" "}
                  contacter pour toute information ou collaboration.
                </b>
              </i>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/VSHuncho"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jarod-bakhta-727ba525b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
