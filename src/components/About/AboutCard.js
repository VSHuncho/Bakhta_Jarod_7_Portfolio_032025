import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis{" "}
            <span className="purple">Jarod Bakhta </span>
            et j'habite en <span className="purple"> Ile-de-France</span> ,
            proche de <span className="purple"> Paris.</span>
            <br />
            Je suis actuellement en recherche d'une alternance pour réaliser un
            <span className="purple"> bachelor</span> suite à l'obtention de mon
            Bac+2.
            <br />
            Le développement web est un domaine qui me passionne car il allie
            créativité et technicité.
            <br />
            <br />
            En dehors du code, j'aime aussi pratiquer d'autres activités !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> La cuisine
            </li>
            <li className="about-activity">
              <ImPointRight /> La boxe anglaise
            </li>
            <li className="about-activity">
              <ImPointRight /> Le cinéma
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
