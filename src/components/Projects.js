import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Flood Management System",
      description: "Python, Keras, OpenCV, Streamlit, Google Maps API",
      imgUrl: projImg1,
      githubLink: "https://github.com/swastika2108/Google-Girl-Hackathon",
    },
    {
      title: "College ERP",
      description: "Python, Django, PostgreSQL, Bootstrap, AWS",
      imgUrl: projImg2,
      githubLink: "https://github.com/swastika2108/ERP-Management-System",
    },
    {
      title: "Morphological Analyser",
      description: "Python, NLTK, Regular Expressions, Seq2Seq RNN",
      imgUrl: projImg3,
      githubLink: "https://github.com/swastika2108/Morphological-Analyser-Sanskrit",
    },
    {
      title: "Hex Game",
      description: "Python, Jupyter Notebook, HTML, VS Code, Neovim",
      imgUrl: projImg4,
      githubLink: "https://github.com/swastika2108/Hex_Game",
    },
    {
      title: "Algorithm Visualizer",
      description: "Python, Gemini API, Matplotlib, Node.js",
      imgUrl: projImg5,
      githubLink: "https://github.com/swastika2108/ML-Algorithm-Visualizer",
    },
    {
      title: "Job Accessible Website",
      description: "Python, Django, Bootstrap, HTML/CSS",
      imgUrl: projImg6,
      githubLink: "https://github.com/swastika2108/Job-Accessible-Website",
    },
  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Have a Look on some of my Projects I did in my coursework and hackathons!! :)</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.slice(0, 3).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.slice(3).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
