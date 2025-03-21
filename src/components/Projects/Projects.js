import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import monvieuxgrimoire from "../../Assets/Projects/monvieuxgrimoire.png";
import sophiebluel from "../../Assets/Projects/sophiebluel.png";
import booki from "../../Assets/Projects/booki.png";
import kasa from "../../Assets/Projects/kasa.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>Quelques projets que j'ai réalisé.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booki}
              isBlog={false}
              title="Booki"
              description="Dans ce projet, j’ai développé la page d'accueil d'une agence de voyage en utilisant HTML et CSS, en mettant l'accent sur le design responsive. À partir des maquettes Figma, j’ai créé une interface fluide et adaptée à tous les écrans (mobile, tablette, desktop). Ce projet m’a permis d’affiner mes compétences en intégration web, en structurant et stylisant le code sans recourir aux outils automatiques, pour un rendu fidèle et optimisé."
              ghLink="https://github.com/VSHuncho/Projet-Booki"
              demoLink="https://vshuncho.github.io/Projet-Booki/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kasa}
              isBlog={false}
              title="Kasa"
              description="J’ai développé l’interface d’une application en React avec React Router pour une navigation fluide. En utilisant Vite et des données simulées (JSON), j’ai structuré des composants réutilisables et optimisé l’affichage dynamique des informations."
              ghLink="https://github.com/VSHuncho/Bakhta_Jarod_5_Kasa_022025"
              demoLink="https://vshuncho.github.io/Bakhta_Jarod_5_Kasa_022025/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sophiebluel}
              isBlog={false}
              title="Sophie Bluel"
              description="J’ai conçu la page de présentation des travaux d’une architecte d’intérieur en JavaScript, en intégrant la gestion des événements utilisateurs et la manipulation du DOM. Le projet inclut également une page de connexion pour l’administrateur et une modale d’upload de médias. En communiquant avec une API, j’ai renforcé mes compétences en dynamisation des interfaces et en gestion des interactions utilisateur."
              ghLink="https://github.com/VSHuncho/Bakhta_Jarod_3_Sophie_Bluel_012025"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monvieuxgrimoire}
              isBlog={false}
              title="Mon vieux grimoire"
              description="J’ai conçu le back-end d’un site de notation de livres en utilisant Express.js et MongoDB. Le projet inclut la gestion des opérations CRUD, un système d’authentification sécurisé, ainsi que l’upload et l’optimisation des images. En suivant une architecture MVC et en respectant les principes du Green Code, j’ai optimisé la structure et la sécurité du serveur pour une application performante et écoresponsable."
              ghLink="https://github.com/VSHuncho/Bakhta_Jarod_6_Monvieuxgrimoire_032025-"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
