import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/mockrocket-home.png";
import projImg3 from "../assets/img/citizenApp4.png";
import projImg4 from "../assets/img/desktop2.png";
import projImg5 from "../assets/img/logo512.png";
import dashboard from "../assets/img/dashbord.png";
import projIMG6 from "../assets/img/proj5.jpeg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Change Wallet , Round Coin",
      description: "Solving the Change Issue with Round Coin",
      imgUrl: projImg2,
      projectUrl: "https://apps.apple.com/us/app/round-coin/id6468482795",
    },

    {
      title: "ERP EMerchandiser DashBoard",
      description: "A comprehensive ERP ",
      imgUrl: dashboard,
      projectUrl: "https://enzonedashboard-production.up.railway.app/",
    },
    {
      title: "Round DashBoard",
      description: "A point of sell for accepting Round Coins And Coupons",
      imgUrl: projImg4,
      projectUrl: "https://roundweb-db506.web.app/",
    },
    {
      title: "Citizen App",
      description: "Citizen journalism",
      imgUrl: projImg3,
      projectUrl: "https://github.com/ThatBrandGuyAndAssociates/CitizenApp",
    },
    {
      title: "workzuite",
      description: "Accounting Software",
      imgUrl: projImg5,
      projectUrl:
        "https://app.workzuite.com/sign-in?message=Please_sign_in_first",
    },
    {
      title: "ERP EMerchandiser Mobile App",
      description: "A comprehensive ERP system ",
      imgUrl: projIMG6,
      projectUrl: "https://play.google.com/store/apps/details?id=com.enzon",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    As a developer, I create projects and solve problems using a
                    diverse skill set that includes Node.js, TypeScript,
                    React.js, Next.js, React Native, and Solidity. I am adept at
                    using these technologies to develop high-quality software
                    products and am experienced in industry best practices and
                    writing clean, efficient code.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          With my expertise in Node.js, TypeScript, React.js,
                          Next.js, React Native, and Solidity, I can help solve
                          your technical challenges and drive your business
                          forward. Whether you're a client, developer, or
                          company, feel free to reach out to me to explore how
                          we can work together to solve problems and create
                          value.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          With my expertise in Node.js, TypeScript, React.js,
                          Next.js, React Native, and Solidity, I can help solve
                          your technical challenges and drive your business
                          forward. Whether you're a client, developer, or
                          company, feel free to reach out to me to explore how
                          we can work together to solve problems and create
                          value.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
